"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const work_graph_1 = require("../lib/util/work-graph");
const work_graph_types_1 = require("../lib/util/work-graph-types");
const DUMMY = 'DUMMY';
const sleep = async (duration) => new Promise((resolve) => setTimeout(() => resolve(), duration));
// Not great to have actual sleeps in the tests, but they mostly just exist to give the async workflow
// a chance to start new tasks.
const SLOW = 200;
/**
 * Repurposing unused stack attributes to create specific test scenarios
 * - stack.name          = deployment duration
 * - stack.displayName   = error message
 */
describe('WorkGraph', () => {
    const actionedAssets = [];
    const callbacks = {
        deployStack: async (x) => {
            const errorMessage = x.stack.displayName;
            const timeout = Number(x.stack.stackName) || 0;
            await sleep(timeout);
            // Special case for testing NestedCloudAssemblyArtifacts
            if (errorMessage && !errorMessage.startsWith('Nested')) {
                throw Error(errorMessage);
            }
            actionedAssets.push(x.id);
        },
        buildAsset: async (x) => {
            const errorMessage = x.parentStack.displayName;
            const timeout = Number(x.parentStack.stackName) || 0;
            await sleep(timeout);
            if (errorMessage) {
                throw Error(errorMessage);
            }
            actionedAssets.push(x.id);
        },
        publishAsset: async (x) => {
            const errorMessage = x.parentStack.displayName;
            const timeout = Number(x.parentStack.stackName) || 0;
            await sleep(timeout);
            if (errorMessage) {
                throw Error(errorMessage);
            }
            actionedAssets.push(x.id);
        },
    };
    beforeEach(() => {
        actionedAssets.splice(0);
    });
    // Success
    test.each([
        // Concurrency 1
        { scenario: 'No Stacks', concurrency: 1, toDeploy: [], expected: [] },
        { scenario: 'A', concurrency: 1, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }]), expected: ['A'] },
        { scenario: 'A, B', concurrency: 1, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }, { id: 'B', type: 'stack' }]), expected: ['A', 'B'] },
        { scenario: 'A -> B', concurrency: 1, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }, { id: 'B', type: 'stack', stackDependencies: ['A'] }]), expected: ['A', 'B'] },
        { scenario: '[unsorted] A -> B', concurrency: 1, toDeploy: createArtifacts([{ id: 'B', type: 'stack', stackDependencies: ['A'] }, { id: 'A', type: 'stack' }]), expected: ['A', 'B'] },
        { scenario: 'A -> B -> C', concurrency: 1, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }, { id: 'B', type: 'stack', stackDependencies: ['A'] }, { id: 'C', type: 'stack', stackDependencies: ['B'] }]), expected: ['A', 'B', 'C'] },
        { scenario: 'A -> B, A -> C', concurrency: 1, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }, { id: 'B', type: 'stack', stackDependencies: ['A'] }, { id: 'C', type: 'stack', stackDependencies: ['A'] }]), expected: ['A', 'B', 'C'] },
        {
            scenario: 'A (slow), B',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', name: SLOW },
                { id: 'B', type: 'stack' },
            ]),
            expected: ['A', 'B'],
        },
        {
            scenario: 'A -> B, C -> D',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack' },
                { id: 'B', type: 'stack', stackDependencies: ['A'] },
                { id: 'C', type: 'stack' },
                { id: 'D', type: 'stack', stackDependencies: ['C'] },
            ]),
            expected: ['A', 'C', 'B', 'D'],
        },
        {
            scenario: 'A (slow) -> B, C -> D',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', name: SLOW },
                { id: 'B', type: 'stack', stackDependencies: ['A'] },
                { id: 'C', type: 'stack' },
                { id: 'D', type: 'stack', stackDependencies: ['C'] },
            ]),
            expected: ['A', 'C', 'B', 'D'],
        },
        // With Assets
        {
            scenario: 'A -> a',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', assetDependencies: ['a'] },
                { id: 'a', type: 'asset' },
            ]),
            expected: ['a-build', 'a-publish', 'A'],
        },
        {
            scenario: 'A -> [a, B]',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', stackDependencies: ['B'], assetDependencies: ['a'] },
                { id: 'B', type: 'stack' },
                { id: 'a', type: 'asset', name: SLOW },
            ]),
            expected: ['B', 'a-build', 'a-publish', 'A'],
        },
        {
            scenario: 'A -> a, B -> b',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', assetDependencies: ['a'] },
                { id: 'B', type: 'stack', assetDependencies: ['b'] },
                { id: 'a', type: 'asset' },
                { id: 'b', type: 'asset' },
            ]),
            expected: ['a-build', 'b-build', 'a-publish', 'b-publish', 'A', 'B'],
        },
        {
            scenario: 'A, B -> b -> A',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack' },
                { id: 'B', type: 'stack', assetDependencies: ['b'] },
                { id: 'b', type: 'asset', stackDependencies: ['A'] },
            ]),
            expected: ['A', 'b-build', 'b-publish', 'B'],
        },
        // Concurrency 2
        { scenario: 'No Stacks', concurrency: 2, toDeploy: [], expected: [] },
        { scenario: 'A', concurrency: 2, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }]), expected: ['A'] },
        { scenario: 'A, B', concurrency: 2, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }, { id: 'B', type: 'stack' }]), expected: ['A', 'B'] },
        { scenario: 'A -> B', concurrency: 2, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }, { id: 'B', type: 'stack', stackDependencies: ['A'] }]), expected: ['A', 'B'] },
        { scenario: '[unsorted] A -> B', concurrency: 2, toDeploy: createArtifacts([{ id: 'B', type: 'stack', stackDependencies: ['A'] }, { id: 'A', type: 'stack' }]), expected: ['A', 'B'] },
        { scenario: 'A -> B -> C', concurrency: 2, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }, { id: 'B', type: 'stack', stackDependencies: ['A'] }, { id: 'C', type: 'stack', stackDependencies: ['B'] }]), expected: ['A', 'B', 'C'] },
        { scenario: 'A -> B, A -> C', concurrency: 2, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }, { id: 'B', type: 'stack', stackDependencies: ['A'] }, { id: 'C', type: 'stack', stackDependencies: ['A'] }]), expected: ['A', 'B', 'C'] },
        {
            scenario: 'A, B',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', name: SLOW },
                { id: 'B', type: 'stack' },
            ]),
            expected: ['B', 'A'],
        },
        {
            scenario: 'A -> B, C -> D',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack' },
                { id: 'B', type: 'stack', stackDependencies: ['A'] },
                { id: 'C', type: 'stack' },
                { id: 'D', type: 'stack', stackDependencies: ['C'] },
            ]),
            expected: ['A', 'C', 'B', 'D'],
        },
        {
            scenario: 'A (slow) -> B, C -> D',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', name: SLOW },
                { id: 'B', type: 'stack', stackDependencies: ['A'] },
                { id: 'C', type: 'stack' },
                { id: 'D', type: 'stack', stackDependencies: ['C'] },
            ]),
            expected: ['C', 'D', 'A', 'B'],
        },
        {
            scenario: 'A -> B, A not selected',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'B', type: 'stack', stackDependencies: ['A'] },
            ]),
            expected: ['B'],
        },
        // With Assets
        {
            scenario: 'A -> a',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', assetDependencies: ['a'] },
                { id: 'a', type: 'asset' },
            ]),
            expected: ['a-build', 'a-publish', 'A'],
        },
        {
            scenario: 'A -> [a, B]',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', stackDependencies: ['B'], assetDependencies: ['a'] },
                { id: 'B', type: 'stack', name: SLOW },
                { id: 'a', type: 'asset' },
            ]),
            expected: ['a-build', 'a-publish', 'B', 'A'],
        },
        {
            scenario: 'A -> a, B -> b',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', assetDependencies: ['a'] },
                { id: 'B', type: 'stack', assetDependencies: ['b'] },
                { id: 'a', type: 'asset' },
                { id: 'b', type: 'asset' },
            ]),
            expected: ['a-build', 'b-build', 'a-publish', 'b-publish', 'A', 'B'],
        },
        {
            scenario: 'A, B -> b -> A',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack' },
                { id: 'B', type: 'stack', assetDependencies: ['b'] },
                { id: 'b', type: 'asset', stackDependencies: ['A'] },
            ]),
            expected: ['A', 'b-build', 'b-publish', 'B'],
        },
        {
            scenario: 'A, B -> [b, c], b -> A',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', name: SLOW },
                { id: 'B', type: 'stack', assetDependencies: ['b', 'c'] },
                { id: 'b', type: 'asset', stackDependencies: ['A'] },
                { id: 'c', type: 'asset' },
            ]),
            expected: ['c-build', 'c-publish', 'A', 'b-build', 'b-publish', 'B'],
        },
    ])('Success - Concurrency: $concurrency - $scenario', async ({ concurrency, expected, toDeploy }) => {
        const graph = new work_graph_1.WorkGraph();
        addTestArtifactsToGraph(toDeploy, graph);
        await graph.doParallel(concurrency, callbacks);
        expect(actionedAssets).toStrictEqual(expected);
    });
    test('can remove unnecessary assets', async () => {
        const graph = new work_graph_1.WorkGraph();
        addTestArtifactsToGraph([
            { id: 'a', type: 'asset' },
            { id: 'b', type: 'asset' },
            { id: 'A', type: 'stack', assetDependencies: ['a', 'b'] },
        ], graph);
        // Remove 'b' from the graph
        await graph.removeUnnecessaryAssets(node => Promise.resolve(node.id.startsWith('b')));
        await graph.doParallel(1, callbacks);
        // We expect to only see 'a' and 'A'
        expect(actionedAssets).toEqual(['a-build', 'a-publish', 'A']);
    });
    // Failure Concurrency
    test.each([
        // Concurrency 1
        { scenario: 'A (error)', concurrency: 1, toDeploy: createArtifacts([{ id: 'A', type: 'stack', displayName: 'A' }]), expectedError: 'A', expected: [] },
        { scenario: 'A (error), B', concurrency: 1, toDeploy: createArtifacts([{ id: 'A', type: 'stack', displayName: 'A' }, { id: 'B', type: 'stack' }]), expectedError: 'A', expected: [] },
        { scenario: 'A, B (error)', concurrency: 1, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }, { id: 'B', type: 'stack', displayName: 'B' }]), expectedError: 'B', expected: ['A'] },
        { scenario: 'A (error) -> B', concurrency: 1, toDeploy: createArtifacts([{ id: 'A', type: 'stack', displayName: 'A' }, { id: 'B', type: 'stack', stackDependencies: ['A'] }]), expectedError: 'A', expected: [] },
        { scenario: '[unsorted] A (error) -> B', concurrency: 1, toDeploy: createArtifacts([{ id: 'B', type: 'stack', stackDependencies: ['A'] }, { id: 'A', type: 'stack', displayName: 'A' }]), expectedError: 'A', expected: [] },
        {
            scenario: 'A (error) -> B, C -> D',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', displayName: 'A' },
                { id: 'B', type: 'stack', stackDependencies: ['A'] },
                { id: 'C', type: 'stack' },
                { id: 'D', type: 'stack', stackDependencies: ['C'] },
            ]),
            expectedError: 'A',
            expected: [],
        },
        {
            scenario: 'A -> B, C (error) -> D',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack' },
                { id: 'B', type: 'stack', stackDependencies: ['A'] },
                { id: 'C', type: 'stack', displayName: 'C', name: SLOW },
                { id: 'D', type: 'stack', stackDependencies: ['C'] },
            ]),
            expectedError: 'C',
            expected: ['A'],
        },
        // With assets
        {
            scenario: 'A -> b (asset build error)',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', assetDependencies: ['b'] },
                { id: 'b', type: 'asset', displayName: 'build-b' },
            ]),
            expectedError: 'build-b',
            expected: [],
        },
        {
            scenario: 'A -> b (asset publish error)',
            concurrency: 1,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', assetDependencies: ['b'] },
                { id: 'b', type: 'asset', displayName: 'publish-b' },
            ]),
            expectedError: 'publish-b',
            expected: ['b-build'],
        },
        // Concurrency 2
        { scenario: 'A (error)', concurrency: 2, toDeploy: createArtifacts([{ id: 'A', type: 'stack', displayName: 'A' }]), expectedError: 'A', expected: [] },
        { scenario: 'A (error), B', concurrency: 2, toDeploy: createArtifacts([{ id: 'A', type: 'stack', displayName: 'A' }, { id: 'B', type: 'stack' }]), expectedError: 'A', expected: ['B'] },
        { scenario: 'A, B (error)', concurrency: 2, toDeploy: createArtifacts([{ id: 'A', type: 'stack' }, { id: 'B', type: 'stack', displayName: 'B' }]), expectedError: 'B', expected: ['A'] },
        { scenario: 'A (error) -> B', concurrency: 2, toDeploy: createArtifacts([{ id: 'A', type: 'stack', displayName: 'A' }, { id: 'B', type: 'stack', stackDependencies: ['A'] }]), expectedError: 'A', expected: [] },
        { scenario: '[unsorted] A (error) -> B', concurrency: 2, toDeploy: createArtifacts([{ id: 'B', type: 'stack', stackDependencies: ['A'] }, { id: 'A', type: 'stack', displayName: 'A' }]), expectedError: 'A', expected: [] },
        {
            scenario: 'A (error) -> B, C -> D',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', displayName: 'A' },
                { id: 'B', type: 'stack', stackDependencies: ['A'] },
                { id: 'C', type: 'stack' },
                { id: 'D', type: 'stack', stackDependencies: ['C'] },
            ]),
            expectedError: 'A',
            expected: ['C'],
        },
        {
            scenario: 'A -> B, C (error) -> D',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack' },
                { id: 'B', type: 'stack', stackDependencies: ['A'] },
                { id: 'C', type: 'stack', displayName: 'C', name: SLOW },
                { id: 'D', type: 'stack', stackDependencies: ['C'] },
            ]),
            expectedError: 'C',
            expected: ['A', 'B'],
        },
        // With assets
        {
            scenario: 'A -> b (asset build error), C',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', assetDependencies: ['b'] },
                { id: 'b', type: 'asset', displayName: 'build-b' },
                { id: 'C', type: 'stack' },
            ]),
            expectedError: 'build-b',
            expected: ['C'],
        },
        {
            scenario: 'A -> b (asset publish error), C',
            concurrency: 2,
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', assetDependencies: ['b'] },
                { id: 'b', type: 'asset', displayName: 'publish-b' },
                { id: 'C', type: 'stack' },
            ]),
            expectedError: 'publish-b',
            expected: ['b-build', 'C'],
        },
    ])('Failure - Concurrency: $concurrency - $scenario', async ({ concurrency, expectedError, toDeploy, expected }) => {
        const graph = new work_graph_1.WorkGraph();
        addTestArtifactsToGraph(toDeploy, graph);
        await expect(graph.doParallel(concurrency, callbacks)).rejects.toThrowError(expectedError);
        expect(actionedAssets).toStrictEqual(expected);
    });
    // Failure Graph Circular Dependencies
    test.each([
        {
            scenario: 'A -> A',
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', stackDependencies: ['A'] },
            ]),
            expectedError: 'A -> A',
        },
        {
            scenario: 'A -> B, B -> A',
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack', stackDependencies: ['B'] },
                { id: 'B', type: 'stack', stackDependencies: ['A'] },
            ]),
            expectedError: 'A -> B -> A',
        },
        {
            scenario: 'A, B -> C, C -> D, D -> B',
            toDeploy: createArtifacts([
                { id: 'A', type: 'stack' }, // Add a node to visit first so the infinite loop occurs deeper in the traversal callstack.
                { id: 'B', type: 'stack', stackDependencies: ['C'] },
                { id: 'C', type: 'stack', stackDependencies: ['D'] },
                { id: 'D', type: 'stack', stackDependencies: ['B'] },
            ]),
            expectedError: 'B -> C -> D -> B',
        },
    ])('Failure - Graph Circular Dependencies - $scenario', async ({ toDeploy, expectedError }) => {
        const graph = new work_graph_1.WorkGraph();
        addTestArtifactsToGraph(toDeploy, graph);
        await expect(graph.doParallel(1, callbacks)).rejects.toThrowError(new RegExp(`Unable to make progress.*${expectedError}`));
    });
});
function createArtifacts(artifacts) {
    return artifacts;
}
function addTestArtifactsToGraph(toDeploy, graph) {
    for (const node of toDeploy) {
        switch (node.type) {
            case 'stack':
                graph.addNodes({
                    type: 'stack',
                    id: node.id,
                    deploymentState: work_graph_types_1.DeploymentState.PENDING,
                    stack: {
                        // We're smuggling information here so that the set of callbacks can do some appropriate action
                        stackName: node.name, // Used to smuggle sleep duration
                        displayName: node.displayName, // Used to smuggle exception triggers
                    },
                    dependencies: new Set([...node.stackDependencies ?? [], ...(node.assetDependencies ?? []).map(x => `${x}-publish`)]),
                });
                break;
            case 'asset':
                graph.addNodes({
                    type: 'asset-build',
                    id: `${node.id}-build`,
                    deploymentState: work_graph_types_1.DeploymentState.PENDING,
                    asset: DUMMY,
                    assetManifest: DUMMY,
                    assetManifestArtifact: DUMMY,
                    parentStack: {
                        // We're smuggling information here so that the set of callbacks can do some appropriate action
                        stackName: node.name, // Used to smuggle sleep duration
                        displayName: node.displayName?.includes('build') ? node.displayName : undefined, // Used to smuggle exception triggers
                    },
                    dependencies: new Set([...node.stackDependencies ?? [], ...(node.assetDependencies ?? []).map(x => `${x}-publish`)]),
                });
                graph.addNodes({
                    type: 'asset-publish',
                    id: `${node.id}-publish`,
                    deploymentState: work_graph_types_1.DeploymentState.PENDING,
                    asset: DUMMY,
                    assetManifest: DUMMY,
                    assetManifestArtifact: DUMMY,
                    parentStack: {
                        // We're smuggling information here so that the set of callbacks can do some appropriate action
                        stackName: node.name, // Used to smuggle sleep duration
                        displayName: node.displayName?.includes('publish') ? node.displayName : undefined, // Used to smuggle exception triggers
                    },
                    dependencies: new Set([`${node.id}-build`]),
                });
                break;
        }
    }
    graph.removeUnavailableDependencies();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay1ncmFwaC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29yay1ncmFwaC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQW1EO0FBQ25ELG1FQUE0RztBQUU1RyxNQUFNLEtBQUssR0FBUSxPQUFPLENBQUM7QUFFM0IsTUFBTSxLQUFLLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUVoSCxzR0FBc0c7QUFDdEcsK0JBQStCO0FBQy9CLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUVqQjs7OztHQUlHO0FBQ0gsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7SUFDekIsTUFBTSxjQUFjLEdBQWEsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBWSxFQUFFLEVBQUU7WUFDbEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDekMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRS9DLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXJCLHdEQUF3RDtZQUN4RCxJQUFJLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFDdkQsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUVELGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxVQUFVLEVBQUUsS0FBSyxFQUFDLENB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VyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLHFDQUFxQztxQkFDbEg7b0JBQ1IsWUFBWSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDNUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07UUFDVixDQUFDO0lBQ0gsQ0FBQztJQUNELEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0FBQ3hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JrR3JhcGggfSBmcm9tICcuLi9saWIvdXRpbC93b3JrLWdyYXBoJztcbmltcG9ydCB7IEFzc2V0QnVpbGROb2RlLCBBc3NldFB1Ymxpc2hOb2RlLCBEZXBsb3ltZW50U3RhdGUsIFN0YWNrTm9kZSB9IGZyb20gJy4uL2xpYi91dGlsL3dvcmstZ3JhcGgtdHlwZXMnO1xuXG5jb25zdCBEVU1NWTogYW55ID0gJ0RVTU1ZJztcblxuY29uc3Qgc2xlZXAgPSBhc3luYyAoZHVyYXRpb246IG51bWJlcikgPT4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCBkdXJhdGlvbikpO1xuXG4vLyBOb3QgZ3JlYXQgdG8gaGF2ZSBhY3R1YWwgc2xlZXBzIGluIHRoZSB0ZXN0cywgYnV0IHRoZXkgbW9zdGx5IGp1c3QgZXhpc3QgdG8gZ2l2ZSB0aGUgYXN5bmMgd29ya2Zsb3dcbi8vIGEgY2hhbmNlIHRvIHN0YXJ0IG5ldyB0YXNrcy5cbmNvbnN0IFNMT1cgPSAyMDA7XG5cbi8qKlxuICogUmVwdXJwb3NpbmcgdW51c2VkIHN0YWNrIGF0dHJpYnV0ZXMgdG8gY3JlYXRlIHNwZWNpZmljIHRlc3Qgc2NlbmFyaW9zXG4gKiAtIHN0YWNrLm5hbWUgICAgICAgICAgPSBkZXBsb3ltZW50IGR1cmF0aW9uXG4gKiAtIHN0YWNrLmRpc3BsYXlOYW1lICAgPSBlcnJvciBtZXNzYWdlXG4gKi9cbmRlc2NyaWJlKCdXb3JrR3JhcGgnLCAoKSA9PiB7XG4gIGNvbnN0IGFjdGlvbmVkQXNzZXRzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBjYWxsYmFja3MgPSB7XG4gICAgZGVwbG95U3RhY2s6IGFzeW5jICh4OiBTdGFja05vZGUpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHguc3RhY2suZGlzcGxheU5hbWU7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gTnVtYmVyKHguc3RhY2suc3RhY2tOYW1lKSB8fCAwO1xuXG4gICAgICBhd2FpdCBzbGVlcCh0aW1lb3V0KTtcblxuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciB0ZXN0aW5nIE5lc3RlZENsb3VkQXNzZW1ibHlBcnRpZmFjdHNcbiAgICAgIGlmIChlcnJvck1lc3NhZ2UgJiYgIWVycm9yTWVzc2FnZS5zdGFydHNXaXRoKCdOZXN0ZWQnKSkge1xuICAgICAgICB0aHJvdyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICBhY3Rpb25lZEFzc2V0cy5wdXNoKHguaWQpO1xuICAgIH0sXG4gICAgYnVpbGRBc3NldDogYXN5bmMoeDogQXNzZXRCdWlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHgucGFyZW50U3RhY2suZGlzcGxheU5hbWU7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gTnVtYmVyKHgucGFyZW50U3RhY2suc3RhY2tOYW1lKSB8fCAwO1xuXG4gICAgICBhd2FpdCBzbGVlcCh0aW1lb3V0KTtcblxuICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aHJvdyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICBhY3Rpb25lZEFzc2V0cy5wdXNoKHguaWQpO1xuICAgIH0sXG4gICAgcHVibGlzaEFzc2V0OiBhc3luYyh4OiBBc3NldFB1Ymxpc2hOb2RlKSA9PiB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB4LnBhcmVudFN0YWNrLmRpc3BsYXlOYW1lO1xuICAgICAgY29uc3QgdGltZW91dCA9IE51bWJlcih4LnBhcmVudFN0YWNrLnN0YWNrTmFtZSkgfHwgMDtcblxuICAgICAgYXdhaXQgc2xlZXAodGltZW91dCk7XG5cbiAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgYWN0aW9uZWRBc3NldHMucHVzaCh4LmlkKTtcbiAgICB9LFxuICB9O1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGFjdGlvbmVkQXNzZXRzLnNwbGljZSgwKTtcbiAgfSk7XG5cbiAgLy8gU3VjY2Vzc1xuICB0ZXN0LmVhY2goW1xuICAgIC8vIENvbmN1cnJlbmN5IDFcbiAgICB7IHNjZW5hcmlvOiAnTm8gU3RhY2tzJywgY29uY3VycmVuY3k6IDEsIHRvRGVwbG95OiBbXSwgZXhwZWN0ZWQ6IFtdIH0sXG4gICAgeyBzY2VuYXJpbzogJ0EnLCBjb25jdXJyZW5jeTogMSwgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snIH1dKSwgZXhwZWN0ZWQ6IFsnQSddIH0sXG4gICAgeyBzY2VuYXJpbzogJ0EsIEInLCBjb25jdXJyZW5jeTogMSwgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snIH0sIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJyB9XSksIGV4cGVjdGVkOiBbJ0EnLCAnQiddIH0sXG4gICAgeyBzY2VuYXJpbzogJ0EgLT4gQicsIGNvbmN1cnJlbmN5OiAxLCB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFt7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycgfSwgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydBJ10gfV0pLCBleHBlY3RlZDogWydBJywgJ0InXSB9LFxuICAgIHsgc2NlbmFyaW86ICdbdW5zb3J0ZWRdIEEgLT4gQicsIGNvbmN1cnJlbmN5OiAxLCB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFt7IGlkOiAnQicsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0EnXSB9LCB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycgfV0pLCBleHBlY3RlZDogWydBJywgJ0InXSB9LFxuICAgIHsgc2NlbmFyaW86ICdBIC0+IEIgLT4gQycsIGNvbmN1cnJlbmN5OiAxLCB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFt7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycgfSwgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydBJ10gfSwgeyBpZDogJ0MnLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydCJ10gfV0pLCBleHBlY3RlZDogWydBJywgJ0InLCAnQyddIH0sXG4gICAgeyBzY2VuYXJpbzogJ0EgLT4gQiwgQSAtPiBDJywgY29uY3VycmVuY3k6IDEsIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW3sgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJyB9LCB7IGlkOiAnQicsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0EnXSB9LCB7IGlkOiAnQycsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0EnXSB9XSksIGV4cGVjdGVkOiBbJ0EnLCAnQicsICdDJ10gfSxcbiAgICB7XG4gICAgICBzY2VuYXJpbzogJ0EgKHNsb3cpLCBCJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAxLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJywgbmFtZTogU0xPVyB9LFxuICAgICAgICB7IGlkOiAnQicsIHR5cGU6ICdzdGFjaycgfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWQ6IFsnQScsICdCJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2VuYXJpbzogJ0EgLT4gQiwgQyAtPiBEJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAxLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJyB9LFxuICAgICAgICB7IGlkOiAnQicsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0EnXSB9LFxuICAgICAgICB7IGlkOiAnQycsIHR5cGU6ICdzdGFjaycgfSxcbiAgICAgICAgeyBpZDogJ0QnLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydDJ10gfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWQ6IFsnQScsICdDJywgJ0InLCAnRCddLFxuICAgIH0sXG4gICAge1xuICAgICAgc2NlbmFyaW86ICdBIChzbG93KSAtPiBCLCBDIC0+IEQnLFxuICAgICAgY29uY3VycmVuY3k6IDEsXG4gICAgICB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFtcbiAgICAgICAgeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snLCBuYW1lOiBTTE9XIH0sXG4gICAgICAgIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQSddIH0sXG4gICAgICAgIHsgaWQ6ICdDJywgdHlwZTogJ3N0YWNrJyB9LFxuICAgICAgICB7IGlkOiAnRCcsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0MnXSB9LFxuICAgICAgXSksXG4gICAgICBleHBlY3RlZDogWydBJywgJ0MnLCAnQicsICdEJ10sXG4gICAgfSxcbiAgICAvLyBXaXRoIEFzc2V0c1xuICAgIHtcbiAgICAgIHNjZW5hcmlvOiAnQSAtPiBhJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAxLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJywgYXNzZXREZXBlbmRlbmNpZXM6IFsnYSddIH0sXG4gICAgICAgIHsgaWQ6ICdhJywgdHlwZTogJ2Fzc2V0JyB9LFxuICAgICAgXSksXG4gICAgICBleHBlY3RlZDogWydhLWJ1aWxkJywgJ2EtcHVibGlzaCcsICdBJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2VuYXJpbzogJ0EgLT4gW2EsIEJdJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAxLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQiddLCBhc3NldERlcGVuZGVuY2llczogWydhJ10gfSxcbiAgICAgICAgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snIH0sXG4gICAgICAgIHsgaWQ6ICdhJywgdHlwZTogJ2Fzc2V0JywgbmFtZTogU0xPVyB9LFxuICAgICAgXSksXG4gICAgICBleHBlY3RlZDogWydCJywgJ2EtYnVpbGQnLCAnYS1wdWJsaXNoJywgJ0EnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjZW5hcmlvOiAnQSAtPiBhLCBCIC0+IGInLFxuICAgICAgY29uY3VycmVuY3k6IDEsXG4gICAgICB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFtcbiAgICAgICAgeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snLCBhc3NldERlcGVuZGVuY2llczogWydhJ10gfSxcbiAgICAgICAgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBhc3NldERlcGVuZGVuY2llczogWydiJ10gfSxcbiAgICAgICAgeyBpZDogJ2EnLCB0eXBlOiAnYXNzZXQnIH0sXG4gICAgICAgIHsgaWQ6ICdiJywgdHlwZTogJ2Fzc2V0JyB9LFxuICAgICAgXSksXG4gICAgICBleHBlY3RlZDogWydhLWJ1aWxkJywgJ2ItYnVpbGQnLCAnYS1wdWJsaXNoJywgJ2ItcHVibGlzaCcsICdBJywgJ0InXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjZW5hcmlvOiAnQSwgQiAtPiBiIC0+IEEnLFxuICAgICAgY29uY3VycmVuY3k6IDEsXG4gICAgICB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFtcbiAgICAgICAgeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snIH0sXG4gICAgICAgIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgYXNzZXREZXBlbmRlbmNpZXM6IFsnYiddIH0sXG4gICAgICAgIHsgaWQ6ICdiJywgdHlwZTogJ2Fzc2V0Jywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQSddIH0sXG4gICAgICBdKSxcbiAgICAgIGV4cGVjdGVkOiBbJ0EnLCAnYi1idWlsZCcsICdiLXB1Ymxpc2gnLCAnQiddLFxuICAgIH0sXG5cbiAgICAvLyBDb25jdXJyZW5jeSAyXG4gICAgeyBzY2VuYXJpbzogJ05vIFN0YWNrcycsIGNvbmN1cnJlbmN5OiAyLCB0b0RlcGxveTogW10sIGV4cGVjdGVkOiBbXSB9LFxuICAgIHsgc2NlbmFyaW86ICdBJywgY29uY3VycmVuY3k6IDIsIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW3sgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJyB9XSksIGV4cGVjdGVkOiBbJ0EnXSB9LFxuICAgIHsgc2NlbmFyaW86ICdBLCBCJywgY29uY3VycmVuY3k6IDIsIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW3sgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJyB9LCB7IGlkOiAnQicsIHR5cGU6ICdzdGFjaycgfV0pLCBleHBlY3RlZDogWydBJywgJ0InXSB9LFxuICAgIHsgc2NlbmFyaW86ICdBIC0+IEInLCBjb25jdXJyZW5jeTogMiwgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snIH0sIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQSddIH1dKSwgZXhwZWN0ZWQ6IFsnQScsICdCJ10gfSxcbiAgICB7IHNjZW5hcmlvOiAnW3Vuc29ydGVkXSBBIC0+IEInLCBjb25jdXJyZW5jeTogMiwgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydBJ10gfSwgeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snIH1dKSwgZXhwZWN0ZWQ6IFsnQScsICdCJ10gfSxcbiAgICB7IHNjZW5hcmlvOiAnQSAtPiBCIC0+IEMnLCBjb25jdXJyZW5jeTogMiwgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snIH0sIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQSddIH0sIHsgaWQ6ICdDJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQiddIH1dKSwgZXhwZWN0ZWQ6IFsnQScsICdCJywgJ0MnXSB9LFxuICAgIHsgc2NlbmFyaW86ICdBIC0+IEIsIEEgLT4gQycsIGNvbmN1cnJlbmN5OiAyLCB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFt7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycgfSwgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydBJ10gfSwgeyBpZDogJ0MnLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydBJ10gfV0pLCBleHBlY3RlZDogWydBJywgJ0InLCAnQyddIH0sXG4gICAge1xuICAgICAgc2NlbmFyaW86ICdBLCBCJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAyLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJywgbmFtZTogU0xPVyB9LFxuICAgICAgICB7IGlkOiAnQicsIHR5cGU6ICdzdGFjaycgfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWQ6IFsnQicsICdBJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2VuYXJpbzogJ0EgLT4gQiwgQyAtPiBEJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAyLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJyB9LFxuICAgICAgICB7IGlkOiAnQicsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0EnXSB9LFxuICAgICAgICB7IGlkOiAnQycsIHR5cGU6ICdzdGFjaycgfSxcbiAgICAgICAgeyBpZDogJ0QnLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydDJ10gfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWQ6IFsnQScsICdDJywgJ0InLCAnRCddLFxuICAgIH0sXG4gICAge1xuICAgICAgc2NlbmFyaW86ICdBIChzbG93KSAtPiBCLCBDIC0+IEQnLFxuICAgICAgY29uY3VycmVuY3k6IDIsXG4gICAgICB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFtcbiAgICAgICAgeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snLCBuYW1lOiBTTE9XIH0sXG4gICAgICAgIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQSddIH0sXG4gICAgICAgIHsgaWQ6ICdDJywgdHlwZTogJ3N0YWNrJyB9LFxuICAgICAgICB7IGlkOiAnRCcsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0MnXSB9LFxuICAgICAgXSksXG4gICAgICBleHBlY3RlZDogWydDJywgJ0QnLCAnQScsICdCJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2VuYXJpbzogJ0EgLT4gQiwgQSBub3Qgc2VsZWN0ZWQnLFxuICAgICAgY29uY3VycmVuY3k6IDEsXG4gICAgICB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFtcbiAgICAgICAgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydBJ10gfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWQ6IFsnQiddLFxuICAgIH0sXG4gICAgLy8gV2l0aCBBc3NldHNcbiAgICB7XG4gICAgICBzY2VuYXJpbzogJ0EgLT4gYScsXG4gICAgICBjb25jdXJyZW5jeTogMixcbiAgICAgIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW1xuICAgICAgICB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIGFzc2V0RGVwZW5kZW5jaWVzOiBbJ2EnXSB9LFxuICAgICAgICB7IGlkOiAnYScsIHR5cGU6ICdhc3NldCcgfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWQ6IFsnYS1idWlsZCcsICdhLXB1Ymxpc2gnLCAnQSddLFxuICAgIH0sXG4gICAge1xuICAgICAgc2NlbmFyaW86ICdBIC0+IFthLCBCXScsXG4gICAgICBjb25jdXJyZW5jeTogMixcbiAgICAgIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW1xuICAgICAgICB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0InXSwgYXNzZXREZXBlbmRlbmNpZXM6IFsnYSddIH0sXG4gICAgICAgIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgbmFtZTogU0xPVyB9LFxuICAgICAgICB7IGlkOiAnYScsIHR5cGU6ICdhc3NldCcgfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWQ6IFsnYS1idWlsZCcsICdhLXB1Ymxpc2gnLCAnQicsICdBJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2VuYXJpbzogJ0EgLT4gYSwgQiAtPiBiJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAyLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJywgYXNzZXREZXBlbmRlbmNpZXM6IFsnYSddIH0sXG4gICAgICAgIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgYXNzZXREZXBlbmRlbmNpZXM6IFsnYiddIH0sXG4gICAgICAgIHsgaWQ6ICdhJywgdHlwZTogJ2Fzc2V0JyB9LFxuICAgICAgICB7IGlkOiAnYicsIHR5cGU6ICdhc3NldCcgfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWQ6IFsnYS1idWlsZCcsICdiLWJ1aWxkJywgJ2EtcHVibGlzaCcsICdiLXB1Ymxpc2gnLCAnQScsICdCJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2VuYXJpbzogJ0EsIEIgLT4gYiAtPiBBJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAyLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJyB9LFxuICAgICAgICB7IGlkOiAnQicsIHR5cGU6ICdzdGFjaycsIGFzc2V0RGVwZW5kZW5jaWVzOiBbJ2InXSB9LFxuICAgICAgICB7IGlkOiAnYicsIHR5cGU6ICdhc3NldCcsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0EnXSB9LFxuICAgICAgXSksXG4gICAgICBleHBlY3RlZDogWydBJywgJ2ItYnVpbGQnLCAnYi1wdWJsaXNoJywgJ0InXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjZW5hcmlvOiAnQSwgQiAtPiBbYiwgY10sIGIgLT4gQScsXG4gICAgICBjb25jdXJyZW5jeTogMixcbiAgICAgIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW1xuICAgICAgICB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIG5hbWU6IFNMT1cgfSxcbiAgICAgICAgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBhc3NldERlcGVuZGVuY2llczogWydiJywgJ2MnXSB9LFxuICAgICAgICB7IGlkOiAnYicsIHR5cGU6ICdhc3NldCcsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0EnXSB9LFxuICAgICAgICB7IGlkOiAnYycsIHR5cGU6ICdhc3NldCcgfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWQ6IFsnYy1idWlsZCcsICdjLXB1Ymxpc2gnLCAnQScsICdiLWJ1aWxkJywgJ2ItcHVibGlzaCcsICdCJ10sXG4gICAgfSxcbiAgXSkoJ1N1Y2Nlc3MgLSBDb25jdXJyZW5jeTogJGNvbmN1cnJlbmN5IC0gJHNjZW5hcmlvJywgYXN5bmMgKHsgY29uY3VycmVuY3ksIGV4cGVjdGVkLCB0b0RlcGxveSB9KSA9PiB7XG4gICAgY29uc3QgZ3JhcGggPSBuZXcgV29ya0dyYXBoKCk7XG4gICAgYWRkVGVzdEFydGlmYWN0c1RvR3JhcGgodG9EZXBsb3ksIGdyYXBoKTtcblxuICAgIGF3YWl0IGdyYXBoLmRvUGFyYWxsZWwoY29uY3VycmVuY3ksIGNhbGxiYWNrcyk7XG5cbiAgICBleHBlY3QoYWN0aW9uZWRBc3NldHMpLnRvU3RyaWN0RXF1YWwoZXhwZWN0ZWQpO1xuICB9KTtcblxuICB0ZXN0KCdjYW4gcmVtb3ZlIHVubmVjZXNzYXJ5IGFzc2V0cycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBncmFwaCA9IG5ldyBXb3JrR3JhcGgoKTtcbiAgICBhZGRUZXN0QXJ0aWZhY3RzVG9HcmFwaChbXG4gICAgICB7IGlkOiAnYScsIHR5cGU6ICdhc3NldCcgfSxcbiAgICAgIHsgaWQ6ICdiJywgdHlwZTogJ2Fzc2V0JyB9LFxuICAgICAgeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snLCBhc3NldERlcGVuZGVuY2llczogWydhJywgJ2InXSB9LFxuICAgIF0sIGdyYXBoKTtcblxuICAgIC8vIFJlbW92ZSAnYicgZnJvbSB0aGUgZ3JhcGhcbiAgICBhd2FpdCBncmFwaC5yZW1vdmVVbm5lY2Vzc2FyeUFzc2V0cyhub2RlID0+IFByb21pc2UucmVzb2x2ZShub2RlLmlkLnN0YXJ0c1dpdGgoJ2InKSkpO1xuICAgIGF3YWl0IGdyYXBoLmRvUGFyYWxsZWwoMSwgY2FsbGJhY2tzKTtcblxuICAgIC8vIFdlIGV4cGVjdCB0byBvbmx5IHNlZSAnYScgYW5kICdBJ1xuICAgIGV4cGVjdChhY3Rpb25lZEFzc2V0cykudG9FcXVhbChbJ2EtYnVpbGQnLCAnYS1wdWJsaXNoJywgJ0EnXSk7XG4gIH0pO1xuXG4gIC8vIEZhaWx1cmUgQ29uY3VycmVuY3lcbiAgdGVzdC5lYWNoKFtcbiAgICAvLyBDb25jdXJyZW5jeSAxXG4gICAgeyBzY2VuYXJpbzogJ0EgKGVycm9yKScsIGNvbmN1cnJlbmN5OiAxLCB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFt7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIGRpc3BsYXlOYW1lOiAnQScgfV0pLCBleHBlY3RlZEVycm9yOiAnQScsIGV4cGVjdGVkOiBbXSB9LFxuICAgIHsgc2NlbmFyaW86ICdBIChlcnJvciksIEInLCBjb25jdXJyZW5jeTogMSwgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snLCBkaXNwbGF5TmFtZTogJ0EnIH0sIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJyB9XSksIGV4cGVjdGVkRXJyb3I6ICdBJywgZXhwZWN0ZWQ6IFtdIH0sXG4gICAgeyBzY2VuYXJpbzogJ0EsIEIgKGVycm9yKScsIGNvbmN1cnJlbmN5OiAxLCB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFt7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycgfSwgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBkaXNwbGF5TmFtZTogJ0InIH1dKSwgZXhwZWN0ZWRFcnJvcjogJ0InLCBleHBlY3RlZDogWydBJ10gfSxcbiAgICB7IHNjZW5hcmlvOiAnQSAoZXJyb3IpIC0+IEInLCBjb25jdXJyZW5jeTogMSwgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snLCBkaXNwbGF5TmFtZTogJ0EnIH0sIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQSddIH1dKSwgZXhwZWN0ZWRFcnJvcjogJ0EnLCBleHBlY3RlZDogW10gfSxcbiAgICB7IHNjZW5hcmlvOiAnW3Vuc29ydGVkXSBBIChlcnJvcikgLT4gQicsIGNvbmN1cnJlbmN5OiAxLCB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFt7IGlkOiAnQicsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0EnXSB9LCB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIGRpc3BsYXlOYW1lOiAnQScgfV0pLCBleHBlY3RlZEVycm9yOiAnQScsIGV4cGVjdGVkOiBbXSB9LFxuICAgIHtcbiAgICAgIHNjZW5hcmlvOiAnQSAoZXJyb3IpIC0+IEIsIEMgLT4gRCcsXG4gICAgICBjb25jdXJyZW5jeTogMSxcbiAgICAgIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW1xuICAgICAgICB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIGRpc3BsYXlOYW1lOiAnQScgfSxcbiAgICAgICAgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydBJ10gfSxcbiAgICAgICAgeyBpZDogJ0MnLCB0eXBlOiAnc3RhY2snIH0sXG4gICAgICAgIHsgaWQ6ICdEJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQyddIH0sXG4gICAgICBdKSxcbiAgICAgIGV4cGVjdGVkRXJyb3I6ICdBJyxcbiAgICAgIGV4cGVjdGVkOiBbXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjZW5hcmlvOiAnQSAtPiBCLCBDIChlcnJvcikgLT4gRCcsXG4gICAgICBjb25jdXJyZW5jeTogMSxcbiAgICAgIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW1xuICAgICAgICB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycgfSxcbiAgICAgICAgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydBJ10gfSxcbiAgICAgICAgeyBpZDogJ0MnLCB0eXBlOiAnc3RhY2snLCBkaXNwbGF5TmFtZTogJ0MnLCBuYW1lOiBTTE9XIH0sXG4gICAgICAgIHsgaWQ6ICdEJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQyddIH0sXG4gICAgICBdKSxcbiAgICAgIGV4cGVjdGVkRXJyb3I6ICdDJyxcbiAgICAgIGV4cGVjdGVkOiBbJ0EnXSxcbiAgICB9LFxuICAgIC8vIFdpdGggYXNzZXRzXG4gICAge1xuICAgICAgc2NlbmFyaW86ICdBIC0+IGIgKGFzc2V0IGJ1aWxkIGVycm9yKScsXG4gICAgICBjb25jdXJyZW5jeTogMSxcbiAgICAgIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW1xuICAgICAgICB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIGFzc2V0RGVwZW5kZW5jaWVzOiBbJ2InXSB9LFxuICAgICAgICB7IGlkOiAnYicsIHR5cGU6ICdhc3NldCcsIGRpc3BsYXlOYW1lOiAnYnVpbGQtYicgfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWRFcnJvcjogJ2J1aWxkLWInLFxuICAgICAgZXhwZWN0ZWQ6IFtdLFxuICAgIH0sXG4gICAge1xuICAgICAgc2NlbmFyaW86ICdBIC0+IGIgKGFzc2V0IHB1Ymxpc2ggZXJyb3IpJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAxLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJywgYXNzZXREZXBlbmRlbmNpZXM6IFsnYiddIH0sXG4gICAgICAgIHsgaWQ6ICdiJywgdHlwZTogJ2Fzc2V0JywgZGlzcGxheU5hbWU6ICdwdWJsaXNoLWInIH0sXG4gICAgICBdKSxcbiAgICAgIGV4cGVjdGVkRXJyb3I6ICdwdWJsaXNoLWInLFxuICAgICAgZXhwZWN0ZWQ6IFsnYi1idWlsZCddLFxuICAgIH0sXG5cbiAgICAvLyBDb25jdXJyZW5jeSAyXG4gICAgeyBzY2VuYXJpbzogJ0EgKGVycm9yKScsIGNvbmN1cnJlbmN5OiAyLCB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFt7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIGRpc3BsYXlOYW1lOiAnQScgfV0pLCBleHBlY3RlZEVycm9yOiAnQScsIGV4cGVjdGVkOiBbXSB9LFxuICAgIHsgc2NlbmFyaW86ICdBIChlcnJvciksIEInLCBjb25jdXJyZW5jeTogMiwgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snLCBkaXNwbGF5TmFtZTogJ0EnIH0sIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJyB9XSksIGV4cGVjdGVkRXJyb3I6ICdBJywgZXhwZWN0ZWQ6IFsnQiddIH0sXG4gICAgeyBzY2VuYXJpbzogJ0EsIEIgKGVycm9yKScsIGNvbmN1cnJlbmN5OiAyLCB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFt7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycgfSwgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBkaXNwbGF5TmFtZTogJ0InIH1dKSwgZXhwZWN0ZWRFcnJvcjogJ0InLCBleHBlY3RlZDogWydBJ10gfSxcbiAgICB7IHNjZW5hcmlvOiAnQSAoZXJyb3IpIC0+IEInLCBjb25jdXJyZW5jeTogMiwgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbeyBpZDogJ0EnLCB0eXBlOiAnc3RhY2snLCBkaXNwbGF5TmFtZTogJ0EnIH0sIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQSddIH1dKSwgZXhwZWN0ZWRFcnJvcjogJ0EnLCBleHBlY3RlZDogW10gfSxcbiAgICB7IHNjZW5hcmlvOiAnW3Vuc29ydGVkXSBBIChlcnJvcikgLT4gQicsIGNvbmN1cnJlbmN5OiAyLCB0b0RlcGxveTogY3JlYXRlQXJ0aWZhY3RzKFt7IGlkOiAnQicsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0EnXSB9LCB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIGRpc3BsYXlOYW1lOiAnQScgfV0pLCBleHBlY3RlZEVycm9yOiAnQScsIGV4cGVjdGVkOiBbXSB9LFxuICAgIHtcbiAgICAgIHNjZW5hcmlvOiAnQSAoZXJyb3IpIC0+IEIsIEMgLT4gRCcsXG4gICAgICBjb25jdXJyZW5jeTogMixcbiAgICAgIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW1xuICAgICAgICB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIGRpc3BsYXlOYW1lOiAnQScgfSxcbiAgICAgICAgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydBJ10gfSxcbiAgICAgICAgeyBpZDogJ0MnLCB0eXBlOiAnc3RhY2snIH0sXG4gICAgICAgIHsgaWQ6ICdEJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQyddIH0sXG4gICAgICBdKSxcbiAgICAgIGV4cGVjdGVkRXJyb3I6ICdBJyxcbiAgICAgIGV4cGVjdGVkOiBbJ0MnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjZW5hcmlvOiAnQSAtPiBCLCBDIChlcnJvcikgLT4gRCcsXG4gICAgICBjb25jdXJyZW5jeTogMixcbiAgICAgIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW1xuICAgICAgICB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycgfSxcbiAgICAgICAgeyBpZDogJ0InLCB0eXBlOiAnc3RhY2snLCBzdGFja0RlcGVuZGVuY2llczogWydBJ10gfSxcbiAgICAgICAgeyBpZDogJ0MnLCB0eXBlOiAnc3RhY2snLCBkaXNwbGF5TmFtZTogJ0MnLCBuYW1lOiBTTE9XIH0sXG4gICAgICAgIHsgaWQ6ICdEJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQyddIH0sXG4gICAgICBdKSxcbiAgICAgIGV4cGVjdGVkRXJyb3I6ICdDJyxcbiAgICAgIGV4cGVjdGVkOiBbJ0EnLCAnQiddLFxuICAgIH0sXG4gICAgLy8gV2l0aCBhc3NldHNcbiAgICB7XG4gICAgICBzY2VuYXJpbzogJ0EgLT4gYiAoYXNzZXQgYnVpbGQgZXJyb3IpLCBDJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAyLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJywgYXNzZXREZXBlbmRlbmNpZXM6IFsnYiddIH0sXG4gICAgICAgIHsgaWQ6ICdiJywgdHlwZTogJ2Fzc2V0JywgZGlzcGxheU5hbWU6ICdidWlsZC1iJyB9LFxuICAgICAgICB7IGlkOiAnQycsIHR5cGU6ICdzdGFjaycgfSxcbiAgICAgIF0pLFxuICAgICAgZXhwZWN0ZWRFcnJvcjogJ2J1aWxkLWInLFxuICAgICAgZXhwZWN0ZWQ6IFsnQyddLFxuICAgIH0sXG4gICAge1xuICAgICAgc2NlbmFyaW86ICdBIC0+IGIgKGFzc2V0IHB1Ymxpc2ggZXJyb3IpLCBDJyxcbiAgICAgIGNvbmN1cnJlbmN5OiAyLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJywgYXNzZXREZXBlbmRlbmNpZXM6IFsnYiddIH0sXG4gICAgICAgIHsgaWQ6ICdiJywgdHlwZTogJ2Fzc2V0JywgZGlzcGxheU5hbWU6ICdwdWJsaXNoLWInIH0sXG4gICAgICAgIHsgaWQ6ICdDJywgdHlwZTogJ3N0YWNrJyB9LFxuICAgICAgXSksXG4gICAgICBleHBlY3RlZEVycm9yOiAncHVibGlzaC1iJyxcbiAgICAgIGV4cGVjdGVkOiBbJ2ItYnVpbGQnLCAnQyddLFxuICAgIH0sXG4gIF0pKCdGYWlsdXJlIC0gQ29uY3VycmVuY3k6ICRjb25jdXJyZW5jeSAtICRzY2VuYXJpbycsIGFzeW5jICh7IGNvbmN1cnJlbmN5LCBleHBlY3RlZEVycm9yLCB0b0RlcGxveSwgZXhwZWN0ZWQgfSkgPT4ge1xuICAgIGNvbnN0IGdyYXBoID0gbmV3IFdvcmtHcmFwaCgpO1xuICAgIGFkZFRlc3RBcnRpZmFjdHNUb0dyYXBoKHRvRGVwbG95LCBncmFwaCk7XG5cbiAgICBhd2FpdCBleHBlY3QoZ3JhcGguZG9QYXJhbGxlbChjb25jdXJyZW5jeSwgY2FsbGJhY2tzKSkucmVqZWN0cy50b1Rocm93RXJyb3IoZXhwZWN0ZWRFcnJvcik7XG5cbiAgICBleHBlY3QoYWN0aW9uZWRBc3NldHMpLnRvU3RyaWN0RXF1YWwoZXhwZWN0ZWQpO1xuICB9KTtcblxuICAvLyBGYWlsdXJlIEdyYXBoIENpcmN1bGFyIERlcGVuZGVuY2llc1xuICB0ZXN0LmVhY2goW1xuICAgIHtcbiAgICAgIHNjZW5hcmlvOiAnQSAtPiBBJyxcbiAgICAgIHRvRGVwbG95OiBjcmVhdGVBcnRpZmFjdHMoW1xuICAgICAgICB7IGlkOiAnQScsIHR5cGU6ICdzdGFjaycsIHN0YWNrRGVwZW5kZW5jaWVzOiBbJ0EnXSB9LFxuICAgICAgXSksXG4gICAgICBleHBlY3RlZEVycm9yOiAnQSAtPiBBJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjZW5hcmlvOiAnQSAtPiBCLCBCIC0+IEEnLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQiddIH0sXG4gICAgICAgIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQSddIH0sXG4gICAgICBdKSxcbiAgICAgIGV4cGVjdGVkRXJyb3I6ICdBIC0+IEIgLT4gQScsXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2VuYXJpbzogJ0EsIEIgLT4gQywgQyAtPiBELCBEIC0+IEInLFxuICAgICAgdG9EZXBsb3k6IGNyZWF0ZUFydGlmYWN0cyhbXG4gICAgICAgIHsgaWQ6ICdBJywgdHlwZTogJ3N0YWNrJyB9LCAvLyBBZGQgYSBub2RlIHRvIHZpc2l0IGZpcnN0IHNvIHRoZSBpbmZpbml0ZSBsb29wIG9jY3VycyBkZWVwZXIgaW4gdGhlIHRyYXZlcnNhbCBjYWxsc3RhY2suXG4gICAgICAgIHsgaWQ6ICdCJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQyddIH0sXG4gICAgICAgIHsgaWQ6ICdDJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnRCddIH0sXG4gICAgICAgIHsgaWQ6ICdEJywgdHlwZTogJ3N0YWNrJywgc3RhY2tEZXBlbmRlbmNpZXM6IFsnQiddIH0sXG4gICAgICBdKSxcbiAgICAgIGV4cGVjdGVkRXJyb3I6ICdCIC0+IEMgLT4gRCAtPiBCJyxcbiAgICB9LFxuICBdKSgnRmFpbHVyZSAtIEdyYXBoIENpcmN1bGFyIERlcGVuZGVuY2llcyAtICRzY2VuYXJpbycsIGFzeW5jICh7IHRvRGVwbG95LCBleHBlY3RlZEVycm9yIH0pID0+IHtcbiAgICBjb25zdCBncmFwaCA9IG5ldyBXb3JrR3JhcGgoKTtcbiAgICBhZGRUZXN0QXJ0aWZhY3RzVG9HcmFwaCh0b0RlcGxveSwgZ3JhcGgpO1xuXG4gICAgYXdhaXQgZXhwZWN0KGdyYXBoLmRvUGFyYWxsZWwoMSwgY2FsbGJhY2tzKSkucmVqZWN0cy50b1Rocm93RXJyb3IobmV3IFJlZ0V4cChgVW5hYmxlIHRvIG1ha2UgcHJvZ3Jlc3MuKiR7ZXhwZWN0ZWRFcnJvcn1gKSk7XG4gIH0pO1xufSk7XG5cbmludGVyZmFjZSBUZXN0QXJ0aWZhY3Qge1xuICBzdGFja0RlcGVuZGVuY2llcz86IHN0cmluZ1tdO1xuICBhc3NldERlcGVuZGVuY2llcz86IHN0cmluZ1tdO1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiAnc3RhY2snIHwgJ2Fzc2V0JyB8ICd0cmVlJ3wgJ25lc3RlZCc7XG4gIG5hbWU/OiBudW1iZXI7XG4gIGRpc3BsYXlOYW1lPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcnRpZmFjdHMoYXJ0aWZhY3RzOiBUZXN0QXJ0aWZhY3RbXSkge1xuICByZXR1cm4gYXJ0aWZhY3RzO1xufVxuXG5mdW5jdGlvbiBhZGRUZXN0QXJ0aWZhY3RzVG9HcmFwaCh0b0RlcGxveTogVGVzdEFydGlmYWN0W10sIGdyYXBoOiBXb3JrR3JhcGgpIHtcbiAgZm9yIChjb25zdCBub2RlIG9mIHRvRGVwbG95KSB7XG4gICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0YWNrJzpcbiAgICAgICAgZ3JhcGguYWRkTm9kZXMoe1xuICAgICAgICAgIHR5cGU6ICdzdGFjaycsXG4gICAgICAgICAgaWQ6IG5vZGUuaWQsXG4gICAgICAgICAgZGVwbG95bWVudFN0YXRlOiBEZXBsb3ltZW50U3RhdGUuUEVORElORyxcbiAgICAgICAgICBzdGFjazoge1xuICAgICAgICAgICAgLy8gV2UncmUgc211Z2dsaW5nIGluZm9ybWF0aW9uIGhlcmUgc28gdGhhdCB0aGUgc2V0IG9mIGNhbGxiYWNrcyBjYW4gZG8gc29tZSBhcHByb3ByaWF0ZSBhY3Rpb25cbiAgICAgICAgICAgIHN0YWNrTmFtZTogbm9kZS5uYW1lLCAvLyBVc2VkIHRvIHNtdWdnbGUgc2xlZXAgZHVyYXRpb25cbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBub2RlLmRpc3BsYXlOYW1lLCAvLyBVc2VkIHRvIHNtdWdnbGUgZXhjZXB0aW9uIHRyaWdnZXJzXG4gICAgICAgICAgfSBhcyBhbnksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzOiBuZXcgU2V0KFsuLi5ub2RlLnN0YWNrRGVwZW5kZW5jaWVzID8/IFtdLCAuLi4obm9kZS5hc3NldERlcGVuZGVuY2llcyA/PyBbXSkubWFwKHggPT4gYCR7eH0tcHVibGlzaGApXSksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Fzc2V0JzpcbiAgICAgICAgZ3JhcGguYWRkTm9kZXMoe1xuICAgICAgICAgIHR5cGU6ICdhc3NldC1idWlsZCcsXG4gICAgICAgICAgaWQ6IGAke25vZGUuaWR9LWJ1aWxkYCxcbiAgICAgICAgICBkZXBsb3ltZW50U3RhdGU6IERlcGxveW1lbnRTdGF0ZS5QRU5ESU5HLFxuICAgICAgICAgIGFzc2V0OiBEVU1NWSxcbiAgICAgICAgICBhc3NldE1hbmlmZXN0OiBEVU1NWSxcbiAgICAgICAgICBhc3NldE1hbmlmZXN0QXJ0aWZhY3Q6IERVTU1ZLFxuICAgICAgICAgIHBhcmVudFN0YWNrOiB7XG4gICAgICAgICAgICAvLyBXZSdyZSBzbXVnZ2xpbmcgaW5mb3JtYXRpb24gaGVyZSBzbyB0aGF0IHRoZSBzZXQgb2YgY2FsbGJhY2tzIGNhbiBkbyBzb21lIGFwcHJvcHJpYXRlIGFjdGlvblxuICAgICAgICAgICAgc3RhY2tOYW1lOiBub2RlLm5hbWUsIC8vIFVzZWQgdG8gc211Z2dsZSBzbGVlcCBkdXJhdGlvblxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IG5vZGUuZGlzcGxheU5hbWU/LmluY2x1ZGVzKCdidWlsZCcpID8gbm9kZS5kaXNwbGF5TmFtZSA6IHVuZGVmaW5lZCwgLy8gVXNlZCB0byBzbXVnZ2xlIGV4Y2VwdGlvbiB0cmlnZ2Vyc1xuICAgICAgICAgIH0gYXMgYW55LFxuICAgICAgICAgIGRlcGVuZGVuY2llczogbmV3IFNldChbLi4ubm9kZS5zdGFja0RlcGVuZGVuY2llcyA/PyBbXSwgLi4uKG5vZGUuYXNzZXREZXBlbmRlbmNpZXMgPz8gW10pLm1hcCh4ID0+IGAke3h9LXB1Ymxpc2hgKV0pLFxuICAgICAgICB9KTtcbiAgICAgICAgZ3JhcGguYWRkTm9kZXMoe1xuICAgICAgICAgIHR5cGU6ICdhc3NldC1wdWJsaXNoJyxcbiAgICAgICAgICBpZDogYCR7bm9kZS5pZH0tcHVibGlzaGAsXG4gICAgICAgICAgZGVwbG95bWVudFN0YXRlOiBEZXBsb3ltZW50U3RhdGUuUEVORElORyxcbiAgICAgICAgICBhc3NldDogRFVNTVksXG4gICAgICAgICAgYXNzZXRNYW5pZmVzdDogRFVNTVksXG4gICAgICAgICAgYXNzZXRNYW5pZmVzdEFydGlmYWN0OiBEVU1NWSxcbiAgICAgICAgICBwYXJlbnRTdGFjazoge1xuICAgICAgICAgICAgLy8gV2UncmUgc211Z2dsaW5nIGluZm9ybWF0aW9uIGhlcmUgc28gdGhhdCB0aGUgc2V0IG9mIGNhbGxiYWNrcyBjYW4gZG8gc29tZSBhcHByb3ByaWF0ZSBhY3Rpb25cbiAgICAgICAgICAgIHN0YWNrTmFtZTogbm9kZS5uYW1lLCAvLyBVc2VkIHRvIHNtdWdnbGUgc2xlZXAgZHVyYXRpb25cbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBub2RlLmRpc3BsYXlOYW1lPy5pbmNsdWRlcygncHVibGlzaCcpID8gbm9kZS5kaXNwbGF5TmFtZSA6IHVuZGVmaW5lZCwgLy8gVXNlZCB0byBzbXVnZ2xlIGV4Y2VwdGlvbiB0cmlnZ2Vyc1xuICAgICAgICAgIH0gYXMgYW55LFxuICAgICAgICAgIGRlcGVuZGVuY2llczogbmV3IFNldChbYCR7bm9kZS5pZH0tYnVpbGRgXSksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZ3JhcGgucmVtb3ZlVW5hdmFpbGFibGVEZXBlbmRlbmNpZXMoKTtcbn0iXX0=