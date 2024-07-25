"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkGraphBuilder = void 0;
const cxapi = require("@aws-cdk/cx-api");
const cdk_assets_1 = require("cdk-assets");
const content_hash_1 = require("./content-hash");
const work_graph_1 = require("./work-graph");
const work_graph_types_1 = require("./work-graph-types");
class WorkGraphBuilder {
    constructor(prebuildAssets, idPrefix = '') {
        this.prebuildAssets = prebuildAssets;
        this.idPrefix = idPrefix;
        this.graph = new work_graph_1.WorkGraph();
    }
    addStack(artifact) {
        this.graph.addNodes({
            type: 'stack',
            id: `${this.idPrefix}${artifact.id}`,
            dependencies: new Set(this.stackArtifactIds(onlyStacks(artifact.dependencies))),
            stack: artifact,
            deploymentState: work_graph_types_1.DeploymentState.PENDING,
            priority: WorkGraphBuilder.PRIORITIES.stack,
        });
    }
    /**
     * Oof, see this parameter list
     */
    // eslint-disable-next-line max-len
    addAsset(parentStack, assetManifestArtifact, assetManifest, asset) {
        // Just the artifact identifier
        const assetId = asset.id.assetId;
        const buildId = `build-${assetId}-${(0, content_hash_1.contentHashAny)([assetId, asset.genericSource]).substring(0, 10)}`;
        const publishId = `publish-${assetId}-${(0, content_hash_1.contentHashAny)([assetId, asset.genericDestination]).substring(0, 10)}`;
        // Build node only gets added once because they are all the same
        if (!this.graph.tryGetNode(buildId)) {
            const node = {
                type: 'asset-build',
                id: buildId,
                note: assetId,
                dependencies: new Set([
                    ...this.stackArtifactIds(assetManifestArtifact.dependencies),
                    // If we disable prebuild, then assets inherit (stack) dependencies from their parent stack
                    ...!this.prebuildAssets ? this.stackArtifactIds(onlyStacks(parentStack.dependencies)) : [],
                ]),
                parentStack: parentStack,
                assetManifestArtifact,
                assetManifest,
                asset,
                deploymentState: work_graph_types_1.DeploymentState.PENDING,
                priority: WorkGraphBuilder.PRIORITIES['asset-build'],
            };
            this.graph.addNodes(node);
        }
        const publishNode = this.graph.tryGetNode(publishId);
        if (!publishNode) {
            this.graph.addNodes({
                type: 'asset-publish',
                id: publishId,
                note: `${asset.id}`,
                dependencies: new Set([
                    buildId,
                ]),
                parentStack,
                assetManifestArtifact,
                assetManifest,
                asset,
                deploymentState: work_graph_types_1.DeploymentState.PENDING,
                priority: WorkGraphBuilder.PRIORITIES['asset-publish'],
            });
        }
        for (const inheritedDep of this.stackArtifactIds(onlyStacks(parentStack.dependencies))) {
            // The asset publish step also depends on the stacks that the parent depends on.
            // This is purely cosmetic: if we don't do this, the progress printing of asset publishing
            // is going to interfere with the progress bar of the stack deployment. We could remove this
            // for overall faster deployments if we ever have a better method of progress displaying.
            // Note: this may introduce a cycle if one of the parent's dependencies is another stack that
            // depends on this asset. To workaround this we remove these cycles once all nodes have
            // been added to the graph.
            this.graph.addDependency(publishId, inheritedDep);
        }
        // This will work whether the stack node has been added yet or not
        this.graph.addDependency(`${this.idPrefix}${parentStack.id}`, publishId);
    }
    build(artifacts) {
        const parentStacks = stacksFromAssets(artifacts);
        for (const artifact of artifacts) {
            if (cxapi.CloudFormationStackArtifact.isCloudFormationStackArtifact(artifact)) {
                this.addStack(artifact);
            }
            else if (cxapi.AssetManifestArtifact.isAssetManifestArtifact(artifact)) {
                const manifest = cdk_assets_1.AssetManifest.fromFile(artifact.file);
                for (const entry of manifest.entries) {
                    const parentStack = parentStacks.get(artifact);
                    if (parentStack === undefined) {
                        throw new Error('Found an asset manifest that is not associated with a stack');
                    }
                    this.addAsset(parentStack, artifact, manifest, entry);
                }
            }
            else if (cxapi.NestedCloudAssemblyArtifact.isNestedCloudAssemblyArtifact(artifact)) {
                const assembly = new cxapi.CloudAssembly(artifact.fullPath, { topoSort: false });
                const nestedGraph = new WorkGraphBuilder(this.prebuildAssets, `${this.idPrefix}${artifact.id}.`).build(assembly.artifacts);
                this.graph.absorb(nestedGraph);
            }
            else {
                // Ignore whatever else
            }
        }
        this.graph.removeUnavailableDependencies();
        // Remove any potentially introduced cycles between asset publishing and the stacks that depend on them.
        this.removeStackPublishCycles();
        return this.graph;
    }
    stackArtifactIds(deps) {
        return deps.flatMap((d) => cxapi.CloudFormationStackArtifact.isCloudFormationStackArtifact(d) ? [this.stackArtifactId(d)] : []);
    }
    stackArtifactId(artifact) {
        if (!cxapi.CloudFormationStackArtifact.isCloudFormationStackArtifact(artifact)) {
            throw new Error(`Can only call this on CloudFormationStackArtifact, got: ${artifact.constructor.name}`);
        }
        return `${this.idPrefix}${artifact.id}`;
    }
    /**
     * We may have accidentally introduced cycles in an attempt to make the messages printed to the
     * console not interfere with each other too much. Remove them again.
     */
    removeStackPublishCycles() {
        const publishSteps = this.graph.nodesOfType('asset-publish');
        for (const publishStep of publishSteps) {
            for (const dep of publishStep.dependencies) {
                if (this.graph.reachable(dep, publishStep.id)) {
                    publishStep.dependencies.delete(dep);
                }
            }
        }
    }
}
exports.WorkGraphBuilder = WorkGraphBuilder;
/**
 * Default priorities for nodes
 *
 * Assets builds have higher priority than the other two operations, to make good on our promise that
 * '--prebuild-assets' will actually do assets before stacks (if it can). Unfortunately it is the
 * default :(
 *
 * But between stack dependencies and publish dependencies, stack dependencies go first
 */
WorkGraphBuilder.PRIORITIES = {
    'asset-build': 10,
    'asset-publish': 0,
    'stack': 5,
};
function stacksFromAssets(artifacts) {
    const ret = new Map();
    for (const stack of artifacts.filter(cxapi.CloudFormationStackArtifact.isCloudFormationStackArtifact)) {
        const assetArtifacts = stack.dependencies.filter(cxapi.AssetManifestArtifact.isAssetManifestArtifact);
        for (const art of assetArtifacts) {
            ret.set(art, stack);
        }
    }
    return ret;
}
function onlyStacks(artifacts) {
    return artifacts.filter(cxapi.CloudFormationStackArtifact.isCloudFormationStackArtifact);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay1ncmFwaC1idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29yay1ncmFwaC1idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUF5QztBQUN6QywyQ0FBMkQ7QUFDM0QsaURBQWdEO0FBQ2hELDZDQUF5QztBQUN6Qyx5REFBK0U7QUFFL0UsTUFBYSxnQkFBZ0I7SUFpQjNCLFlBQTZCLGNBQXVCLEVBQW1CLFdBQVcsRUFBRTtRQUF2RCxtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUFtQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRm5FLFVBQUssR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztJQUUrQyxDQUFDO0lBRWpGLFFBQVEsQ0FBQyxRQUEyQztRQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxZQUFZLEVBQUUsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMvRSxLQUFLLEVBQUUsUUFBUTtZQUNmLGVBQWUsRUFBRSxrQ0FBZSxDQUFDLE9BQU87WUFDeEMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxLQUFLO1NBQzVDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFtQztJQUMzQixRQUFRLENBQUMsV0FBOEMsRUFBRSxxQkFBa0QsRUFBRSxhQUE0QixFQUFFLEtBQXFCO1FBQ3RLLCtCQUErQjtRQUMvQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUVqQyxNQUFNLE9BQU8sR0FBRyxTQUFTLE9BQU8sSUFBSSxJQUFBLDZCQUFjLEVBQUMsQ0FBQyxPQUFPLEVB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TSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDOztBQXhKSCw0Q0F5SkM7QUF4SkM7Ozs7Ozs7O0dBUUc7QUFDVywyQkFBVSxHQUFxQztJQUMzRCxhQUFhLEVBQUUsRUFBRTtJQUNqQixlQUFlLEVBQUUsQ0FBQztJQUNsQixPQUFPLEVBQUUsQ0FBQztDQUNYLEFBSnVCLENBSXRCO0FBNklKLFNBQVMsZ0JBQWdCLENBQUMsU0FBZ0M7SUFDeEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtFLENBQUM7SUFDdEYsS0FBSyxNQUFNLEtBQUssSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFLENBQUM7UUFDdEcsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDdEcsS0FBSyxNQUFNLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLFNBQWdDO0lBQ2xELE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUMzRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSAnQGF3cy1jZGsvY3gtYXBpJztcbmltcG9ydCB7IEFzc2V0TWFuaWZlc3QsIElNYW5pZmVzdEVudHJ5IH0gZnJvbSAnY2RrLWFzc2V0cyc7XG5pbXBvcnQgeyBjb250ZW50SGFzaEFueSB9IGZyb20gJy4vY29udGVudC1oYXNoJztcbmltcG9ydCB7IFdvcmtHcmFwaCB9IGZyb20gJy4vd29yay1ncmFwaCc7XG5pbXBvcnQgeyBEZXBsb3ltZW50U3RhdGUsIEFzc2V0QnVpbGROb2RlLCBXb3JrTm9kZSB9IGZyb20gJy4vd29yay1ncmFwaC10eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBXb3JrR3JhcGhCdWlsZGVyIHtcbiAgLyoqXG4gICAqIERlZmF1bHQgcHJpb3JpdGllcyBmb3Igbm9kZXNcbiAgICpcbiAgICogQXNzZXRzIGJ1aWxkcyBoYXZlIGhpZ2hlciBwcmlvcml0eSB0aGFuIHRoZSBvdGhlciB0d28gb3BlcmF0aW9ucywgdG8gbWFrZSBnb29kIG9uIG91ciBwcm9taXNlIHRoYXRcbiAgICogJy0tcHJlYnVpbGQtYXNzZXRzJyB3aWxsIGFjdHVhbGx5IGRvIGFzc2V0cyBiZWZvcmUgc3RhY2tzIChpZiBpdCBjYW4pLiBVbmZvcnR1bmF0ZWx5IGl0IGlzIHRoZVxuICAgKiBkZWZhdWx0IDooXG4gICAqXG4gICAqIEJ1dCBiZXR3ZWVuIHN0YWNrIGRlcGVuZGVuY2llcyBhbmQgcHVibGlzaCBkZXBlbmRlbmNpZXMsIHN0YWNrIGRlcGVuZGVuY2llcyBnbyBmaXJzdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBQUklPUklUSUVTOiBSZWNvcmQ8V29ya05vZGVbJ3R5cGUnXSwgbnVtYmVyPiA9IHtcbiAgICAnYXNzZXQtYnVpbGQnOiAxMCxcbiAgICAnYXNzZXQtcHVibGlzaCc6IDAsXG4gICAgJ3N0YWNrJzogNSxcbiAgfTtcbiAgcHJpdmF0ZSByZWFkb25seSBncmFwaCA9IG5ldyBXb3JrR3JhcGgoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByZWJ1aWxkQXNzZXRzOiBib29sZWFuLCBwcml2YXRlIHJlYWRvbmx5IGlkUHJlZml4ID0gJycpIHsgfVxuXG4gIHByaXZhdGUgYWRkU3RhY2soYXJ0aWZhY3Q6IGN4YXBpLkNsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdCkge1xuICAgIHRoaXMuZ3JhcGguYWRkTm9kZXMoe1xuICAgICAgdHlwZTogJ3N0YWNrJyxcbiAgICAgIGlkOiBgJHt0aGlzLmlkUHJlZml4fSR7YXJ0aWZhY3QuaWR9YCxcbiAgICAgIGRlcGVuZGVuY2llczogbmV3IFNldCh0aGlzLnN0YWNrQXJ0aWZhY3RJZHMob25seVN0YWNrcyhhcnRpZmFjdC5kZXBlbmRlbmNpZXMpKSksXG4gICAgICBzdGFjazogYXJ0aWZhY3QsXG4gICAgICBkZXBsb3ltZW50U3RhdGU6IERlcGxveW1lbnRTdGF0ZS5QRU5ESU5HLFxuICAgICAgcHJpb3JpdHk6IFdvcmtHcmFwaEJ1aWxkZXIuUFJJT1JJVElFUy5zdGFjayxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPb2YsIHNlZSB0aGlzIHBhcmFtZXRlciBsaXN0XG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICBwcml2YXRlIGFkZEFzc2V0KHBhcmVudFN0YWNrOiBjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3QsIGFzc2V0TWFuaWZlc3RBcnRpZmFjdDogY3hhcGkuQXNzZXRNYW5pZmVzdEFydGlmYWN0LCBhc3NldE1hbmlmZXN0OiBBc3NldE1hbmlmZXN0LCBhc3NldDogSU1hbmlmZXN0RW50cnkpIHtcbiAgICAvLyBKdXN0IHRoZSBhcnRpZmFjdCBpZGVudGlmaWVyXG4gICAgY29uc3QgYXNzZXRJZCA9IGFzc2V0LmlkLmFzc2V0SWQ7XG5cbiAgICBjb25zdCBidWlsZElkID0gYGJ1aWxkLSR7YXNzZXRJZH0tJHtjb250ZW50SGFzaEFueShbYXNzZXRJZCwgYXNzZXQuZ2VuZXJpY1NvdXJjZV0pLnN1YnN0cmluZygwLCAxMCl9YDtcbiAgICBjb25zdCBwdWJsaXNoSWQgPSBgcHVibGlzaC0ke2Fzc2V0SWR9LSR7Y29udGVudEhhc2hBbnkoW2Fzc2V0SWQsIGFzc2V0LmdlbmVyaWNEZXN0aW5hdGlvbl0pLnN1YnN0cmluZygwLCAxMCl9YDtcblxuICAgIC8vIEJ1aWxkIG5vZGUgb25seSBnZXRzIGFkZGVkIG9uY2UgYmVjYXVzZSB0aGV5IGFyZSBhbGwgdGhlIHNhbWVcbiAgICBpZiAoIXRoaXMuZ3JhcGgudHJ5R2V0Tm9kZShidWlsZElkKSkge1xuICAgICAgY29uc3Qgbm9kZTogQXNzZXRCdWlsZE5vZGUgPSB7XG4gICAgICAgIHR5cGU6ICdhc3NldC1idWlsZCcsXG4gICAgICAgIGlkOiBidWlsZElkLFxuICAgICAgICBub3RlOiBhc3NldElkLFxuICAgICAgICBkZXBlbmRlbmNpZXM6IG5ldyBTZXQoW1xuICAgICAgICAgIC4uLnRoaXMuc3RhY2tBcnRpZmFjdElkcyhhc3NldE1hbmlmZXN0QXJ0aWZhY3QuZGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICAvLyBJZiB3ZSBkaXNhYmxlIHByZWJ1aWxkLCB0aGVuIGFzc2V0cyBpbmhlcml0IChzdGFjaykgZGVwZW5kZW5jaWVzIGZyb20gdGhlaXIgcGFyZW50IHN0YWNrXG4gICAgICAgICAgLi4uIXRoaXMucHJlYnVpbGRBc3NldHMgPyB0aGlzLnN0YWNrQXJ0aWZhY3RJZHMob25seVN0YWNrcyhwYXJlbnRTdGFjay5kZXBlbmRlbmNpZXMpKSA6IFtdLFxuICAgICAgICBdKSxcbiAgICAgICAgcGFyZW50U3RhY2s6IHBhcmVudFN0YWNrLFxuICAgICAgICBhc3NldE1hbmlmZXN0QXJ0aWZhY3QsXG4gICAgICAgIGFzc2V0TWFuaWZlc3QsXG4gICAgICAgIGFzc2V0LFxuICAgICAgICBkZXBsb3ltZW50U3RhdGU6IERlcGxveW1lbnRTdGF0ZS5QRU5ESU5HLFxuICAgICAgICBwcmlvcml0eTogV29ya0dyYXBoQnVpbGRlci5QUklPUklUSUVTWydhc3NldC1idWlsZCddLFxuICAgICAgfTtcbiAgICAgIHRoaXMuZ3JhcGguYWRkTm9kZXMobm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHVibGlzaE5vZGUgPSB0aGlzLmdyYXBoLnRyeUdldE5vZGUocHVibGlzaElkKTtcbiAgICBpZiAoIXB1Ymxpc2hOb2RlKSB7XG4gICAgICB0aGlzLmdyYXBoLmFkZE5vZGVzKHtcbiAgICAgICAgdHlwZTogJ2Fzc2V0LXB1Ymxpc2gnLFxuICAgICAgICBpZDogcHVibGlzaElkLFxuICAgICAgICBub3RlOiBgJHthc3NldC5pZH1gLFxuICAgICAgICBkZXBlbmRlbmNpZXM6IG5ldyBTZXQoW1xuICAgICAgICAgIGJ1aWxkSWQsXG4gICAgICAgIF0pLFxuICAgICAgICBwYXJlbnRTdGFjayxcbiAgICAgICAgYXNzZXRNYW5pZmVzdEFydGlmYWN0LFxuICAgICAgICBhc3NldE1hbmlmZXN0LFxuICAgICAgICBhc3NldCxcbiAgICAgICAgZGVwbG95bWVudFN0YXRlOiBEZXBsb3ltZW50U3RhdGUuUEVORElORyxcbiAgICAgICAgcHJpb3JpdHk6IFdvcmtHcmFwaEJ1aWxkZXIuUFJJT1JJVElFU1snYXNzZXQtcHVibGlzaCddLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpbmhlcml0ZWREZXAgb2YgdGhpcy5zdGFja0FydGlmYWN0SWRzKG9ubHlTdGFja3MocGFyZW50U3RhY2suZGVwZW5kZW5jaWVzKSkpIHtcbiAgICAgIC8vIFRoZSBhc3NldCBwdWJsaXNoIHN0ZXAgYWxzbyBkZXBlbmRzIG9uIHRoZSBzdGFja3MgdGhhdCB0aGUgcGFyZW50IGRlcGVuZHMgb24uXG4gICAgICAvLyBUaGlzIGlzIHB1cmVseSBjb3NtZXRpYzogaWYgd2UgZG9uJ3QgZG8gdGhpcywgdGhlIHByb2dyZXNzIHByaW50aW5nIG9mIGFzc2V0IHB1Ymxpc2hpbmdcbiAgICAgIC8vIGlzIGdvaW5nIHRvIGludGVyZmVyZSB3aXRoIHRoZSBwcm9ncmVzcyBiYXIgb2YgdGhlIHN0YWNrIGRlcGxveW1lbnQuIFdlIGNvdWxkIHJlbW92ZSB0aGlzXG4gICAgICAvLyBmb3Igb3ZlcmFsbCBmYXN0ZXIgZGVwbG95bWVudHMgaWYgd2UgZXZlciBoYXZlIGEgYmV0dGVyIG1ldGhvZCBvZiBwcm9ncmVzcyBkaXNwbGF5aW5nLlxuICAgICAgLy8gTm90ZTogdGhpcyBtYXkgaW50cm9kdWNlIGEgY3ljbGUgaWYgb25lIG9mIHRoZSBwYXJlbnQncyBkZXBlbmRlbmNpZXMgaXMgYW5vdGhlciBzdGFjayB0aGF0XG4gICAgICAvLyBkZXBlbmRzIG9uIHRoaXMgYXNzZXQuIFRvIHdvcmthcm91bmQgdGhpcyB3ZSByZW1vdmUgdGhlc2UgY3ljbGVzIG9uY2UgYWxsIG5vZGVzIGhhdmVcbiAgICAgIC8vIGJlZW4gYWRkZWQgdG8gdGhlIGdyYXBoLlxuICAgICAgdGhpcy5ncmFwaC5hZGREZXBlbmRlbmN5KHB1Ymxpc2hJZCwgaW5oZXJpdGVkRGVwKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgd29yayB3aGV0aGVyIHRoZSBzdGFjayBub2RlIGhhcyBiZWVuIGFkZGVkIHlldCBvciBub3RcbiAgICB0aGlzLmdyYXBoLmFkZERlcGVuZGVuY3koYCR7dGhpcy5pZFByZWZpeH0ke3BhcmVudFN0YWNrLmlkfWAsIHB1Ymxpc2hJZCk7XG4gIH1cblxuICBwdWJsaWMgYnVpbGQoYXJ0aWZhY3RzOiBjeGFwaS5DbG91ZEFydGlmYWN0W10pOiBXb3JrR3JhcGgge1xuICAgIGNvbnN0IHBhcmVudFN0YWNrcyA9IHN0YWNrc0Zyb21Bc3NldHMoYXJ0aWZhY3RzKTtcblxuICAgIGZvciAoY29uc3QgYXJ0aWZhY3Qgb2YgYXJ0aWZhY3RzKSB7XG4gICAgICBpZiAoY3hhcGkuQ2xvdWRGb3JtYXRpb25TdGFja0FydGlmYWN0LmlzQ2xvdWRGb3JtYXRpb25TdGFja0FydGlmYWN0KGFydGlmYWN0KSkge1xuICAgICAgICB0aGlzLmFkZFN0YWNrKGFydGlmYWN0KTtcbiAgICAgIH0gZWxzZSBpZiAoY3hhcGkuQXNzZXRNYW5pZmVzdEFydGlmYWN0LmlzQXNzZXRNYW5pZmVzdEFydGlmYWN0KGFydGlmYWN0KSkge1xuICAgICAgICBjb25zdCBtYW5pZmVzdCA9IEFzc2V0TWFuaWZlc3QuZnJvbUZpbGUoYXJ0aWZhY3QuZmlsZSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBtYW5pZmVzdC5lbnRyaWVzKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50U3RhY2sgPSBwYXJlbnRTdGFja3MuZ2V0KGFydGlmYWN0KTtcbiAgICAgICAgICBpZiAocGFyZW50U3RhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBhbiBhc3NldCBtYW5pZmVzdCB0aGF0IGlzIG5vdCBhc3NvY2lhdGVkIHdpdGggYSBzdGFjaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZEFzc2V0KHBhcmVudFN0YWNrLCBhcnRpZmFjdCwgbWFuaWZlc3QsIGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjeGFwaS5OZXN0ZWRDbG91ZEFzc2VtYmx5QXJ0aWZhY3QuaXNOZXN0ZWRDbG91ZEFzc2VtYmx5QXJ0aWZhY3QoYXJ0aWZhY3QpKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gbmV3IGN4YXBpLkNsb3VkQXNzZW1ibHkoYXJ0aWZhY3QuZnVsbFBhdGgsIHsgdG9wb1NvcnQ6IGZhbHNlIH0pO1xuICAgICAgICBjb25zdCBuZXN0ZWRHcmFwaCA9IG5ldyBXb3JrR3JhcGhCdWlsZGVyKHRoaXMucHJlYnVpbGRBc3NldHMsIGAke3RoaXMuaWRQcmVmaXh9JHthcnRpZmFjdC5pZH0uYCkuYnVpbGQoYXNzZW1ibHkuYXJ0aWZhY3RzKTtcbiAgICAgICAgdGhpcy5ncmFwaC5hYnNvcmIobmVzdGVkR3JhcGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWdub3JlIHdoYXRldmVyIGVsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmdyYXBoLnJlbW92ZVVuYXZhaWxhYmxlRGVwZW5kZW5jaWVzKCk7XG5cbiAgICAvLyBSZW1vdmUgYW55IHBvdGVudGlhbGx5IGludHJvZHVjZWQgY3ljbGVzIGJldHdlZW4gYXNzZXQgcHVibGlzaGluZyBhbmQgdGhlIHN0YWNrcyB0aGF0IGRlcGVuZCBvbiB0aGVtLlxuICAgIHRoaXMucmVtb3ZlU3RhY2tQdWJsaXNoQ3ljbGVzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5ncmFwaDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhY2tBcnRpZmFjdElkcyhkZXBzOiBjeGFwaS5DbG91ZEFydGlmYWN0W10pOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGRlcHMuZmxhdE1hcCgoZCkgPT4gY3hhcGkuQ2xvdWRGb3JtYXRpb25TdGFja0FydGlmYWN0LmlzQ2xvdWRGb3JtYXRpb25TdGFja0FydGlmYWN0KGQpID8gW3RoaXMuc3RhY2tBcnRpZmFjdElkKGQpXSA6IFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhY2tBcnRpZmFjdElkKGFydGlmYWN0OiBjeGFwaS5DbG91ZEFydGlmYWN0KTogc3RyaW5nIHtcbiAgICBpZiAoIWN4YXBpLkNsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdC5pc0Nsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdChhcnRpZmFjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuIG9ubHkgY2FsbCB0aGlzIG9uIENsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdCwgZ290OiAke2FydGlmYWN0LmNvbnN0cnVjdG9yLm5hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLmlkUHJlZml4fSR7YXJ0aWZhY3QuaWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBtYXkgaGF2ZSBhY2NpZGVudGFsbHkgaW50cm9kdWNlZCBjeWNsZXMgaW4gYW4gYXR0ZW1wdCB0byBtYWtlIHRoZSBtZXNzYWdlcyBwcmludGVkIHRvIHRoZVxuICAgKiBjb25zb2xlIG5vdCBpbnRlcmZlcmUgd2l0aCBlYWNoIG90aGVyIHRvbyBtdWNoLiBSZW1vdmUgdGhlbSBhZ2Fpbi5cbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlU3RhY2tQdWJsaXNoQ3ljbGVzKCkge1xuICAgIGNvbnN0IHB1Ymxpc2hTdGVwcyA9IHRoaXMuZ3JhcGgubm9kZXNPZlR5cGUoJ2Fzc2V0LXB1Ymxpc2gnKTtcbiAgICBmb3IgKGNvbnN0IHB1Ymxpc2hTdGVwIG9mIHB1Ymxpc2hTdGVwcykge1xuICAgICAgZm9yIChjb25zdCBkZXAgb2YgcHVibGlzaFN0ZXAuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBoLnJlYWNoYWJsZShkZXAsIHB1Ymxpc2hTdGVwLmlkKSkge1xuICAgICAgICAgIHB1Ymxpc2hTdGVwLmRlcGVuZGVuY2llcy5kZWxldGUoZGVwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFja3NGcm9tQXNzZXRzKGFydGlmYWN0czogY3hhcGkuQ2xvdWRBcnRpZmFjdFtdKSB7XG4gIGNvbnN0IHJldCA9IG5ldyBNYXA8Y3hhcGkuQXNzZXRNYW5pZmVzdEFydGlmYWN0LCBjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3Q+KCk7XG4gIGZvciAoY29uc3Qgc3RhY2sgb2YgYXJ0aWZhY3RzLmZpbHRlcihjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3QuaXNDbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3QpKSB7XG4gICAgY29uc3QgYXNzZXRBcnRpZmFjdHMgPSBzdGFjay5kZXBlbmRlbmNpZXMuZmlsdGVyKGN4YXBpLkFzc2V0TWFuaWZlc3RBcnRpZmFjdC5pc0Fzc2V0TWFuaWZlc3RBcnRpZmFjdCk7XG4gICAgZm9yIChjb25zdCBhcnQgb2YgYXNzZXRBcnRpZmFjdHMpIHtcbiAgICAgIHJldC5zZXQoYXJ0LCBzdGFjayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25seVN0YWNrcyhhcnRpZmFjdHM6IGN4YXBpLkNsb3VkQXJ0aWZhY3RbXSkge1xuICByZXR1cm4gYXJ0aWZhY3RzLmZpbHRlcihjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3QuaXNDbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3QpO1xufVxuIl19