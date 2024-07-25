"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudExecutable = void 0;
const fs_1 = require("fs");
const cxapi = require("@aws-cdk/cx-api");
const region_info_1 = require("@aws-cdk/region-info");
const semver = require("semver");
const cloud_assembly_1 = require("./cloud-assembly");
const contextproviders = require("../../context-providers");
const logging_1 = require("../../logging");
/**
 * The Cloud Assembly schema version where the framework started to generate analytics itself
 *
 * See https://github.com/aws/aws-cdk/pull/10306
 */
const TEMPLATE_INCLUDES_ANALYTICS_SCHEMA_VERSION = '6.0.0';
/**
 * Represent the Cloud Executable and the synthesis we can do on it
 */
class CloudExecutable {
    constructor(props) {
        this.props = props;
    }
    /**
     * Return whether there is an app command from the configuration
     */
    get hasApp() {
        return !!this.props.configuration.settings.get(['app']);
    }
    /**
     * Synthesize a set of stacks.
     *
     * @param cacheCloudAssembly whether to cache the Cloud Assembly after it has been first synthesized.
     *   This is 'true' by default, and only set to 'false' for 'cdk watch',
     *   which needs to re-synthesize the Assembly each time it detects a change to the project files
     */
    async synthesize(cacheCloudAssembly = true) {
        if (!this._cloudAssembly || !cacheCloudAssembly) {
            this._cloudAssembly = await this.doSynthesize();
        }
        return this._cloudAssembly;
    }
    async doSynthesize() {
        const trackVersions = this.props.configuration.settings.get(['versionReporting']);
        // We may need to run the cloud executable multiple times in order to satisfy all missing context
        // (When the executable runs, it will tell us about context it wants to use
        // but it missing. We'll then look up the context and run the executable again, and
        // again, until it doesn't complain anymore or we've stopped making progress).
        let previouslyMissingKeys;
        while (true) {
            const assembly = await this.props.synthesizer(this.props.sdkProvider, this.props.configuration);
            if (assembly.manifest.missing && assembly.manifest.missing.length > 0) {
                const missingKeys = missingContextKeys(assembly.manifest.missing);
                if (!this.canLookup) {
                    throw new Error('Context lookups have been disabled. '
                        + 'Make sure all necessary context is already in \'cdk.context.json\' by running \'cdk synth\' on a machine with sufficient AWS credentials and committing the result. '
                        + `Missing context keys: '${Array.from(missingKeys).join(', ')}'`);
                }
                let tryLookup = true;
                if (previouslyMissingKeys && setsEqual(missingKeys, previouslyMissingKeys)) {
                    (0, logging_1.debug)('Not making progress trying to resolve environmental context. Giving up.');
                    tryLookup = false;
                }
                previouslyMissingKeys = missingKeys;
                if (tryLookup) {
                    (0, logging_1.debug)('Some context information is missing. Fetching...');
                    await contextproviders.provideContextValues(assembly.manifest.missing, this.props.configuration.context, this.props.sdkProvider);
                    // Cache the new context to disk
                    await this.props.configuration.saveContext();
                    // Execute again
                    continue;
                }
            }
            if (trackVersions && !semver.gte(assembly.version, TEMPLATE_INCLUDES_ANALYTICS_SCHEMA_VERSION)) {
                // @deprecate(v2): the framework now manages its own analytics. For
                // Cloud Assemblies *older* than when we introduced this feature, have
                // the CLI add it. Otherwise, do nothing.
                await this.addMetadataResource(assembly);
            }
            return new cloud_assembly_1.CloudAssembly(assembly);
        }
    }
    /**
     * Modify the templates in the assembly in-place to add metadata resource declarations
     */
    async addMetadataResource(rootAssembly) {
        if (!rootAssembly.runtime) {
            return;
        }
        const modules = formatModules(rootAssembly.runtime);
        await processAssembly(rootAssembly);
        async function processAssembly(assembly) {
            for (const stack of assembly.stacks) {
                await processStack(stack);
            }
            for (const nested of assembly.nestedAssemblies) {
                await processAssembly(nested.nestedAssembly);
            }
        }
        async function processStack(stack) {
            const resourcePresent = stack.environment.region === cxapi.UNKNOWN_REGION
                || region_info_1.RegionInfo.get(stack.environment.region).cdkMetadataResourceAvailable;
            if (!resourcePresent) {
                return;
            }
            if (!stack.template.Resources) {
                stack.template.Resources = {};
            }
            if (stack.template.Resources.CDKMetadata) {
                // Already added by framework, this is expected.
                return;
            }
            stack.template.Resources.CDKMetadata = {
                Type: 'AWS::CDK::Metadata',
                Properties: {
                    Modules: modules,
                },
            };
            if (stack.environment.region === cxapi.UNKNOWN_REGION) {
                stack.template.Conditions = stack.template.Conditions || {};
                const condName = 'CDKMetadataAvailable';
                if (!stack.template.Conditions[condName]) {
                    stack.template.Conditions[condName] = _makeCdkMetadataAvailableCondition();
                    stack.template.Resources.CDKMetadata.Condition = condName;
                }
                else {
                    (0, logging_1.warning)(`The stack ${stack.id} already includes a ${condName} condition`);
                }
            }
            // The template has changed in-memory, but the file on disk remains unchanged so far.
            // The CLI *might* later on deploy the in-memory version (if it's <50kB) or use the
            // on-disk version (if it's >50kB).
            //
            // Be sure to flush the changes we just made back to disk. The on-disk format is always
            // JSON.
            await fs_1.promises.writeFile(stack.templateFullPath, JSON.stringify(stack.template, undefined, 2), { encoding: 'utf-8' });
        }
    }
    get canLookup() {
        return !!(this.props.configuration.settings.get(['lookups']) ?? true);
    }
}
exports.CloudExecutable = CloudExecutable;
/**
 * Return all keys of missing context items
 */
function missingContextKeys(missing) {
    return new Set((missing || []).map(m => m.key));
}
function setsEqual(a, b) {
    if (a.size !== b.size) {
        return false;
    }
    for (const x of a) {
        if (!b.has(x)) {
            return false;
        }
    }
    return true;
}
function _makeCdkMetadataAvailableCondition() {
    return _fnOr(region_info_1.RegionInfo.regions
        .filter(ri => ri.cdkMetadataResourceAvailable)
        .map(ri => ({ 'Fn::Equals': [{ Ref: 'AWS::Region' }, ri.name] })));
}
/**
 * This takes a bunch of operands and crafts an `Fn::Or` for those. Funny thing is `Fn::Or` requires
 * at least 2 operands and at most 10 operands, so we have to... do this.
 */
function _fnOr(operands) {
    if (operands.length === 0) {
        throw new Error('Cannot build `Fn::Or` with zero operands!');
    }
    if (operands.length === 1) {
        return operands[0];
    }
    if (operands.length <= 10) {
        return { 'Fn::Or': operands };
    }
    return _fnOr(_inGroupsOf(operands, 10).map(group => _fnOr(group)));
}
function _inGroupsOf(array, maxGroup) {
    const result = new Array();
    for (let i = 0; i < array.length; i += maxGroup) {
        result.push(array.slice(i, i + maxGroup));
    }
    return result;
}
function formatModules(runtime) {
    const modules = new Array();
    // inject toolkit version to list of modules
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const toolkitVersion = require('../../../package.json').version;
    modules.push(`aws-cdk=${toolkitVersion}`);
    for (const key of Object.keys(runtime.libraries).sort()) {
        modules.push(`${key}=${runtime.libraries[key]}`);
    }
    return modules.join(',');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZXhlY3V0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkLWV4ZWN1dGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQW9DO0FBQ3BDLHlDQUF5QztBQUN6QyxzREFBa0Q7QUFDbEQsaUNBQWlDO0FBQ2pDLHFEQUFpRDtBQUNqRCw0REFBNEQ7QUFDNUQsMkNBQStDO0FBUy9DOzs7O0dBSUc7QUFDSCxNQUFNLDBDQUEwQyxHQUFHLE9BQU8sQ0FBQztBQW1CM0Q7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFHMUIsWUFBNkIsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7SUFDeEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxNQUFNO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEtBQUssQ0FBQyxVQUFVLENBQUMscUJBQThCLElBQUk7UUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRU8sS0FBSyxDQUFDLFlBQVk7UUFDeEIsTUFBTSxhQUFhLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUUzRixpR0FBaUc7UUFDakcsMkVBQTJFO1FBQzNFLG1GQUFtRjtRQUNuRiw4RUFBOEU7UUFDOUUsSUFBSSxxQkFBOEMsQ0FBQztRQUNuRCxPQUFPLElBQUksRUFB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QU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxPQUEwQjtJQUMvQyxNQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO0lBRXBDLDRDQUE0QztJQUM1QyxpRUFBaUU7SUFDakUsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBRTFDLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUN4RCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgY3hhcGkgZnJvbSAnQGF3cy1jZGsvY3gtYXBpJztcbmltcG9ydCB7IFJlZ2lvbkluZm8gfSBmcm9tICdAYXdzLWNkay9yZWdpb24taW5mbyc7XG5pbXBvcnQgKiBhcyBzZW12ZXIgZnJvbSAnc2VtdmVyJztcbmltcG9ydCB7IENsb3VkQXNzZW1ibHkgfSBmcm9tICcuL2Nsb3VkLWFzc2VtYmx5JztcbmltcG9ydCAqIGFzIGNvbnRleHRwcm92aWRlcnMgZnJvbSAnLi4vLi4vY29udGV4dC1wcm92aWRlcnMnO1xuaW1wb3J0IHsgZGVidWcsIHdhcm5pbmcgfSBmcm9tICcuLi8uLi9sb2dnaW5nJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBTZGtQcm92aWRlciB9IGZyb20gJy4uL2F3cy1hdXRoJztcblxuLyoqXG4gKiBAcmV0dXJucyBvdXRwdXQgZGlyZWN0b3J5XG4gKi9cbmV4cG9ydCB0eXBlIFN5bnRoZXNpemVyID0gKGF3czogU2RrUHJvdmlkZXIsIGNvbmZpZzogQ29uZmlndXJhdGlvbikgPT4gUHJvbWlzZTxjeGFwaS5DbG91ZEFzc2VtYmx5PjtcblxuLyoqXG4gKiBUaGUgQ2xvdWQgQXNzZW1ibHkgc2NoZW1hIHZlcnNpb24gd2hlcmUgdGhlIGZyYW1ld29yayBzdGFydGVkIHRvIGdlbmVyYXRlIGFuYWx5dGljcyBpdHNlbGZcbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2F3cy9hd3MtY2RrL3B1bGwvMTAzMDZcbiAqL1xuY29uc3QgVEVNUExBVEVfSU5DTFVERVNfQU5BTFlUSUNTX1NDSEVNQV9WRVJTSU9OID0gJzYuMC4wJztcblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZEV4ZWN1dGFibGVQcm9wcyB7XG4gIC8qKlxuICAgKiBBcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIChzZXR0aW5ncyBhbmQgY29udGV4dClcbiAgICovXG4gIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG5cbiAgLyoqXG4gICAqIEFXUyBvYmplY3QgKHVzZWQgYnkgc3ludGhlc2l6ZXIgYW5kIGNvbnRleHRwcm92aWRlcilcbiAgICovXG4gIHNka1Byb3ZpZGVyOiBTZGtQcm92aWRlcjtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgaW52b2tlZCB0byBzeW50aGVzaXplIHRoZSBhY3R1YWwgc3RhY2tzXG4gICAqL1xuICBzeW50aGVzaXplcjogU3ludGhlc2l6ZXI7XG59XG5cbi8qKlxuICogUmVwcmVzZW50IHRoZSBDbG91ZCBFeGVjdXRhYmxlIGFuZCB0aGUgc3ludGhlc2lzIHdlIGNhbiBkbyBvbiBpdFxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRFeGVjdXRhYmxlIHtcbiAgcHJpdmF0ZSBfY2xvdWRBc3NlbWJseT86IENsb3VkQXNzZW1ibHk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwcm9wczogQ2xvdWRFeGVjdXRhYmxlUHJvcHMpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGVyZSBpcyBhbiBhcHAgY29tbWFuZCBmcm9tIHRoZSBjb25maWd1cmF0aW9uXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhhc0FwcCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnByb3BzLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZ2V0KFsnYXBwJ10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpemUgYSBzZXQgb2Ygc3RhY2tzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FjaGVDbG91ZEFzc2VtYmx5IHdoZXRoZXIgdG8gY2FjaGUgdGhlIENsb3VkIEFzc2VtYmx5IGFmdGVyIGl0IGhhcyBiZWVuIGZpcnN0IHN5bnRoZXNpemVkLlxuICAgKiAgIFRoaXMgaXMgJ3RydWUnIGJ5IGRlZmF1bHQsIGFuZCBvbmx5IHNldCB0byAnZmFsc2UnIGZvciAnY2RrIHdhdGNoJyxcbiAgICogICB3aGljaCBuZWVkcyB0byByZS1zeW50aGVzaXplIHRoZSBBc3NlbWJseSBlYWNoIHRpbWUgaXQgZGV0ZWN0cyBhIGNoYW5nZSB0byB0aGUgcHJvamVjdCBmaWxlc1xuICAgKi9cbiAgcHVibGljIGFzeW5jIHN5bnRoZXNpemUoY2FjaGVDbG91ZEFzc2VtYmx5OiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8Q2xvdWRBc3NlbWJseT4ge1xuICAgIGlmICghdGhpcy5fY2xvdWRBc3NlbWJseSB8fCAhY2FjaGVDbG91ZEFzc2VtYmx5KSB7XG4gICAgICB0aGlzLl9jbG91ZEFzc2VtYmx5ID0gYXdhaXQgdGhpcy5kb1N5bnRoZXNpemUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3VkQXNzZW1ibHk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRvU3ludGhlc2l6ZSgpOiBQcm9taXNlPENsb3VkQXNzZW1ibHk+IHtcbiAgICBjb25zdCB0cmFja1ZlcnNpb25zOiBib29sZWFuID0gdGhpcy5wcm9wcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLmdldChbJ3ZlcnNpb25SZXBvcnRpbmcnXSk7XG5cbiAgICAvLyBXZSBtYXkgbmVlZCB0byBydW4gdGhlIGNsb3VkIGV4ZWN1dGFibGUgbXVsdGlwbGUgdGltZXMgaW4gb3JkZXIgdG8gc2F0aXNmeSBhbGwgbWlzc2luZyBjb250ZXh0XG4gICAgLy8gKFdoZW4gdGhlIGV4ZWN1dGFibGUgcnVucywgaXQgd2lsbCB0ZWxsIHVzIGFib3V0IGNvbnRleHQgaXQgd2FudHMgdG8gdXNlXG4gICAgLy8gYnV0IGl0IG1pc3NpbmcuIFdlJ2xsIHRoZW4gbG9vayB1cCB0aGUgY29udGV4dCBhbmQgcnVuIHRoZSBleGVjdXRhYmxlIGFnYWluLCBhbmRcbiAgICAvLyBhZ2FpbiwgdW50aWwgaXQgZG9lc24ndCBjb21wbGFpbiBhbnltb3JlIG9yIHdlJ3ZlIHN0b3BwZWQgbWFraW5nIHByb2dyZXNzKS5cbiAgICBsZXQgcHJldmlvdXNseU1pc3NpbmdLZXlzOiBTZXQ8c3RyaW5nPiB8IHVuZGVmaW5lZDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLnByb3BzLnN5bnRoZXNpemVyKHRoaXMucHJvcHMuc2RrUHJvdmlkZXIsIHRoaXMucHJvcHMuY29uZmlndXJhdGlvbik7XG5cbiAgICAgIGlmIChhc3NlbWJseS5tYW5pZmVzdC5taXNzaW5nICYmIGFzc2VtYmx5Lm1hbmlmZXN0Lm1pc3NpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nS2V5cyA9IG1pc3NpbmdDb250ZXh0S2V5cyhhc3NlbWJseS5tYW5pZmVzdC5taXNzaW5nKTtcblxuICAgICAgICBpZiAoIXRoaXMuY2FuTG9va3VwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NvbnRleHQgbG9va3VwcyBoYXZlIGJlZW4gZGlzYWJsZWQuICdcbiAgICAgICAgICAgICsgJ01ha2Ugc3VyZSBhbGwgbmVjZXNzYXJ5IGNvbnRleHQgaXMgYWxyZWFkeSBpbiBcXCdjZGsuY29udGV4dC5qc29uXFwnIGJ5IHJ1bm5pbmcgXFwnY2RrIHN5bnRoXFwnIG9uIGEgbWFjaGluZSB3aXRoIHN1ZmZpY2llbnQgQVdTIGNyZWRlbnRpYWxzIGFuZCBjb21taXR0aW5nIHRoZSByZXN1bHQuICdcbiAgICAgICAgICAgICsgYE1pc3NpbmcgY29udGV4dCBrZXlzOiAnJHtBcnJheS5mcm9tKG1pc3NpbmdLZXlzKS5qb2luKCcsICcpfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0cnlMb29rdXAgPSB0cnVlO1xuICAgICAgICBpZiAocHJldmlvdXNseU1pc3NpbmdLZXlzICYmIHNldHNFcXVhbChtaXNzaW5nS2V5cywgcHJldmlvdXNseU1pc3NpbmdLZXlzKSkge1xuICAgICAgICAgIGRlYnVnKCdOb3QgbWFraW5nIHByb2dyZXNzIHRyeWluZyB0byByZXNvbHZlIGVudmlyb25tZW50YWwgY29udGV4dC4gR2l2aW5nIHVwLicpO1xuICAgICAgICAgIHRyeUxvb2t1cCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldmlvdXNseU1pc3NpbmdLZXlzID0gbWlzc2luZ0tleXM7XG5cbiAgICAgICAgaWYgKHRyeUxvb2t1cCkge1xuICAgICAgICAgIGRlYnVnKCdTb21lIGNvbnRleHQgaW5mb3JtYXRpb24gaXMgbWlzc2luZy4gRmV0Y2hpbmcuLi4nKTtcblxuICAgICAgICAgIGF3YWl0IGNvbnRleHRwcm92aWRlcnMucHJvdmlkZUNvbnRleHRWYWx1ZXMoXG4gICAgICAgICAgICBhc3NlbWJseS5tYW5pZmVzdC5taXNzaW5nLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWd1cmF0aW9uLmNvbnRleHQsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNka1Byb3ZpZGVyKTtcblxuICAgICAgICAgIC8vIENhY2hlIHRoZSBuZXcgY29udGV4dCB0byBkaXNrXG4gICAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5jb25maWd1cmF0aW9uLnNhdmVDb250ZXh0KCk7XG5cbiAgICAgICAgICAvLyBFeGVjdXRlIGFnYWluXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRyYWNrVmVyc2lvbnMgJiYgIXNlbXZlci5ndGUoYXNzZW1ibHkudmVyc2lvbiwgVEVNUExBVEVfSU5DTFVERVNfQU5BTFlUSUNTX1NDSEVNQV9WRVJTSU9OKSkge1xuICAgICAgICAvLyBAZGVwcmVjYXRlKHYyKTogdGhlIGZyYW1ld29yayBub3cgbWFuYWdlcyBpdHMgb3duIGFuYWx5dGljcy4gRm9yXG4gICAgICAgIC8vIENsb3VkIEFzc2VtYmxpZXMgKm9sZGVyKiB0aGFuIHdoZW4gd2UgaW50cm9kdWNlZCB0aGlzIGZlYXR1cmUsIGhhdmVcbiAgICAgICAgLy8gdGhlIENMSSBhZGQgaXQuIE90aGVyd2lzZSwgZG8gbm90aGluZy5cbiAgICAgICAgYXdhaXQgdGhpcy5hZGRNZXRhZGF0YVJlc291cmNlKGFzc2VtYmx5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBDbG91ZEFzc2VtYmx5KGFzc2VtYmx5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW9kaWZ5IHRoZSB0ZW1wbGF0ZXMgaW4gdGhlIGFzc2VtYmx5IGluLXBsYWNlIHRvIGFkZCBtZXRhZGF0YSByZXNvdXJjZSBkZWNsYXJhdGlvbnNcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgYWRkTWV0YWRhdGFSZXNvdXJjZShyb290QXNzZW1ibHk6IGN4YXBpLkNsb3VkQXNzZW1ibHkpIHtcbiAgICBpZiAoIXJvb3RBc3NlbWJseS5ydW50aW1lKSB7IHJldHVybjsgfVxuXG4gICAgY29uc3QgbW9kdWxlcyA9IGZvcm1hdE1vZHVsZXMocm9vdEFzc2VtYmx5LnJ1bnRpbWUpO1xuICAgIGF3YWl0IHByb2Nlc3NBc3NlbWJseShyb290QXNzZW1ibHkpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0Fzc2VtYmx5KGFzc2VtYmx5OiBjeGFwaS5DbG91ZEFzc2VtYmx5KSB7XG4gICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIGFzc2VtYmx5LnN0YWNrcykge1xuICAgICAgICBhd2FpdCBwcm9jZXNzU3RhY2soc3RhY2spO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBuZXN0ZWQgb2YgYXNzZW1ibHkubmVzdGVkQXNzZW1ibGllcykge1xuICAgICAgICBhd2FpdCBwcm9jZXNzQXNzZW1ibHkobmVzdGVkLm5lc3RlZEFzc2VtYmx5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBwcm9jZXNzU3RhY2soc3RhY2s6IGN4YXBpLkNsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdCkge1xuICAgICAgY29uc3QgcmVzb3VyY2VQcmVzZW50ID0gc3RhY2suZW52aXJvbm1lbnQucmVnaW9uID09PSBjeGFwaS5VTktOT1dOX1JFR0lPTlxuICAgICAgICB8fCBSZWdpb25JbmZvLmdldChzdGFjay5lbnZpcm9ubWVudC5yZWdpb24pLmNka01ldGFkYXRhUmVzb3VyY2VBdmFpbGFibGU7XG4gICAgICBpZiAoIXJlc291cmNlUHJlc2VudCkgeyByZXR1cm47IH1cblxuICAgICAgaWYgKCFzdGFjay50ZW1wbGF0ZS5SZXNvdXJjZXMpIHtcbiAgICAgICAgc3RhY2sudGVtcGxhdGUuUmVzb3VyY2VzID0ge307XG4gICAgICB9XG4gICAgICBpZiAoc3RhY2sudGVtcGxhdGUuUmVzb3VyY2VzLkNES01ldGFkYXRhKSB7XG4gICAgICAgIC8vIEFscmVhZHkgYWRkZWQgYnkgZnJhbWV3b3JrLCB0aGlzIGlzIGV4cGVjdGVkLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnRlbXBsYXRlLlJlc291cmNlcy5DREtNZXRhZGF0YSA9IHtcbiAgICAgICAgVHlwZTogJ0FXUzo6Q0RLOjpNZXRhZGF0YScsXG4gICAgICAgIFByb3BlcnRpZXM6IHtcbiAgICAgICAgICBNb2R1bGVzOiBtb2R1bGVzLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgaWYgKHN0YWNrLmVudmlyb25tZW50LnJlZ2lvbiA9PT0gY3hhcGkuVU5LTk9XTl9SRUdJT04pIHtcbiAgICAgICAgc3RhY2sudGVtcGxhdGUuQ29uZGl0aW9ucyA9IHN0YWNrLnRlbXBsYXRlLkNvbmRpdGlvbnMgfHwge307XG4gICAgICAgIGNvbnN0IGNvbmROYW1lID0gJ0NES01ldGFkYXRhQXZhaWxhYmxlJztcbiAgICAgICAgaWYgKCFzdGFjay50ZW1wbGF0ZS5Db25kaXRpb25zW2NvbmROYW1lXSkge1xuICAgICAgICAgIHN0YWNrLnRlbXBsYXRlLkNvbmRpdGlvbnNbY29uZE5hbWVdID0gX21ha2VDZGtNZXRhZGF0YUF2YWlsYWJsZUNvbmRpdGlvbigpO1xuICAgICAgICAgIHN0YWNrLnRlbXBsYXRlLlJlc291cmNlcy5DREtNZXRhZGF0YS5Db25kaXRpb24gPSBjb25kTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YXJuaW5nKGBUaGUgc3RhY2sgJHtzdGFjay5pZH0gYWxyZWFkeSBpbmNsdWRlcyBhICR7Y29uZE5hbWV9IGNvbmRpdGlvbmApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSB0ZW1wbGF0ZSBoYXMgY2hhbmdlZCBpbi1tZW1vcnksIGJ1dCB0aGUgZmlsZSBvbiBkaXNrIHJlbWFpbnMgdW5jaGFuZ2VkIHNvIGZhci5cbiAgICAgIC8vIFRoZSBDTEkgKm1pZ2h0KiBsYXRlciBvbiBkZXBsb3kgdGhlIGluLW1lbW9yeSB2ZXJzaW9uIChpZiBpdCdzIDw1MGtCKSBvciB1c2UgdGhlXG4gICAgICAvLyBvbi1kaXNrIHZlcnNpb24gKGlmIGl0J3MgPjUwa0IpLlxuICAgICAgLy9cbiAgICAgIC8vIEJlIHN1cmUgdG8gZmx1c2ggdGhlIGNoYW5nZXMgd2UganVzdCBtYWRlIGJhY2sgdG8gZGlzay4gVGhlIG9uLWRpc2sgZm9ybWF0IGlzIGFsd2F5c1xuICAgICAgLy8gSlNPTi5cbiAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShzdGFjay50ZW1wbGF0ZUZ1bGxQYXRoLCBKU09OLnN0cmluZ2lmeShzdGFjay50ZW1wbGF0ZSwgdW5kZWZpbmVkLCAyKSwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBjYW5Mb29rdXAoKSB7XG4gICAgcmV0dXJuICEhKHRoaXMucHJvcHMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5nZXQoWydsb29rdXBzJ10pID8/IHRydWUpO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJuIGFsbCBrZXlzIG9mIG1pc3NpbmcgY29udGV4dCBpdGVtc1xuICovXG5mdW5jdGlvbiBtaXNzaW5nQ29udGV4dEtleXMobWlzc2luZz86IGN4YXBpLk1pc3NpbmdDb250ZXh0W10pOiBTZXQ8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgU2V0KChtaXNzaW5nIHx8IFtdKS5tYXAobSA9PiBtLmtleSkpO1xufVxuXG5mdW5jdGlvbiBzZXRzRXF1YWw8QT4oYTogU2V0PEE+LCBiOiBTZXQ8QT4pIHtcbiAgaWYgKGEuc2l6ZSAhPT0gYi5zaXplKSB7IHJldHVybiBmYWxzZTsgfVxuICBmb3IgKGNvbnN0IHggb2YgYSkge1xuICAgIGlmICghYi5oYXMoeCkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIF9tYWtlQ2RrTWV0YWRhdGFBdmFpbGFibGVDb25kaXRpb24oKSB7XG4gIHJldHVybiBfZm5PcihSZWdpb25JbmZvLnJlZ2lvbnNcbiAgICAuZmlsdGVyKHJpID0+IHJpLmNka01ldGFkYXRhUmVzb3VyY2VBdmFpbGFibGUpXG4gICAgLm1hcChyaSA9PiAoeyAnRm46OkVxdWFscyc6IFt7IFJlZjogJ0FXUzo6UmVnaW9uJyB9LCByaS5uYW1lXSB9KSkpO1xufVxuXG4vKipcbiAqIFRoaXMgdGFrZXMgYSBidW5jaCBvZiBvcGVyYW5kcyBhbmQgY3JhZnRzIGFuIGBGbjo6T3JgIGZvciB0aG9zZS4gRnVubnkgdGhpbmcgaXMgYEZuOjpPcmAgcmVxdWlyZXNcbiAqIGF0IGxlYXN0IDIgb3BlcmFuZHMgYW5kIGF0IG1vc3QgMTAgb3BlcmFuZHMsIHNvIHdlIGhhdmUgdG8uLi4gZG8gdGhpcy5cbiAqL1xuZnVuY3Rpb24gX2ZuT3Iob3BlcmFuZHM6IGFueVtdKTogYW55IHtcbiAgaWYgKG9wZXJhbmRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGJ1aWxkIGBGbjo6T3JgIHdpdGggemVybyBvcGVyYW5kcyEnKTtcbiAgfVxuICBpZiAob3BlcmFuZHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIG9wZXJhbmRzWzBdO1xuICB9XG4gIGlmIChvcGVyYW5kcy5sZW5ndGggPD0gMTApIHtcbiAgICByZXR1cm4geyAnRm46Ok9yJzogb3BlcmFuZHMgfTtcbiAgfVxuICByZXR1cm4gX2ZuT3IoX2luR3JvdXBzT2Yob3BlcmFuZHMsIDEwKS5tYXAoZ3JvdXAgPT4gX2ZuT3IoZ3JvdXApKSk7XG59XG5cbmZ1bmN0aW9uIF9pbkdyb3Vwc09mPFQ+KGFycmF5OiBUW10sIG1heEdyb3VwOiBudW1iZXIpOiBUW11bXSB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxUW10+KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IG1heEdyb3VwKSB7XG4gICAgcmVzdWx0LnB1c2goYXJyYXkuc2xpY2UoaSwgaSArIG1heEdyb3VwKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TW9kdWxlcyhydW50aW1lOiBjeGFwaS5SdW50aW1lSW5mbyk6IHN0cmluZyB7XG4gIGNvbnN0IG1vZHVsZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG4gIC8vIGluamVjdCB0b29sa2l0IHZlcnNpb24gdG8gbGlzdCBvZiBtb2R1bGVzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG4gIGNvbnN0IHRvb2xraXRWZXJzaW9uID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbiAgbW9kdWxlcy5wdXNoKGBhd3MtY2RrPSR7dG9vbGtpdFZlcnNpb259YCk7XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocnVudGltZS5saWJyYXJpZXMpLnNvcnQoKSkge1xuICAgIG1vZHVsZXMucHVzaChgJHtrZXl9PSR7cnVudGltZS5saWJyYXJpZXNba2V5XX1gKTtcbiAgfVxuICByZXR1cm4gbW9kdWxlcy5qb2luKCcsJyk7XG59XG4iXX0=