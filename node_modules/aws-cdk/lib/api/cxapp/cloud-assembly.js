"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackCollection = exports.CloudAssembly = exports.ExtendedStackSelection = exports.DefaultSelection = void 0;
const cxapi = require("@aws-cdk/cx-api");
const chalk = require("chalk");
const minimatch_1 = require("minimatch");
const semver = require("semver");
const logging_1 = require("../../logging");
const util_1 = require("../../util");
const version_1 = require("../../version");
var DefaultSelection;
(function (DefaultSelection) {
    /**
     * Returns an empty selection in case there are no selectors.
     */
    DefaultSelection["None"] = "none";
    /**
     * If the app includes a single stack, returns it. Otherwise throws an exception.
     * This behavior is used by "deploy".
     */
    DefaultSelection["OnlySingle"] = "single";
    /**
     * Returns all stacks in the main (top level) assembly only.
     */
    DefaultSelection["MainAssembly"] = "main";
    /**
     * If no selectors are provided, returns all stacks in the app,
     * including stacks inside nested assemblies.
     */
    DefaultSelection["AllStacks"] = "all";
})(DefaultSelection || (exports.DefaultSelection = DefaultSelection = {}));
/**
 * When selecting stacks, what other stacks to include because of dependencies
 */
var ExtendedStackSelection;
(function (ExtendedStackSelection) {
    /**
     * Don't select any extra stacks
     */
    ExtendedStackSelection[ExtendedStackSelection["None"] = 0] = "None";
    /**
     * Include stacks that this stack depends on
     */
    ExtendedStackSelection[ExtendedStackSelection["Upstream"] = 1] = "Upstream";
    /**
     * Include stacks that depend on this stack
     */
    ExtendedStackSelection[ExtendedStackSelection["Downstream"] = 2] = "Downstream";
})(ExtendedStackSelection || (exports.ExtendedStackSelection = ExtendedStackSelection = {}));
/**
 * A single Cloud Assembly and the operations we do on it to deploy the artifacts inside
 */
class CloudAssembly {
    constructor(assembly) {
        this.assembly = assembly;
        this.directory = assembly.directory;
    }
    async selectStacks(selector, options) {
        const asm = this.assembly;
        const topLevelStacks = asm.stacks;
        const stacks = semver.major(asm.version) < 10 ? asm.stacks : asm.stacksRecursively;
        const allTopLevel = selector.allTopLevel ?? false;
        const patterns = sanitizePatterns(selector.patterns);
        if (stacks.length === 0) {
            if (options.ignoreNoStacks) {
                return new StackCollection(this, []);
            }
            throw new Error('This app contains no stacks');
        }
        if (allTopLevel) {
            return this.selectTopLevelStacks(stacks, topLevelStacks, options.extend);
        }
        else if (patterns.length > 0) {
            return this.selectMatchingStacks(stacks, patterns, options.extend);
        }
        else {
            return this.selectDefaultStacks(stacks, topLevelStacks, options.defaultBehavior);
        }
    }
    selectTopLevelStacks(stacks, topLevelStacks, extend = ExtendedStackSelection.None) {
        if (topLevelStacks.length > 0) {
            return this.extendStacks(topLevelStacks, stacks, extend);
        }
        else {
            throw new Error('No stack found in the main cloud assembly. Use "list" to print manifest');
        }
    }
    selectMatchingStacks(stacks, patterns, extend = ExtendedStackSelection.None) {
        // cli tests use this to ensure tests do not depend on legacy behavior
        // (otherwise they will fail in v2)
        const disableLegacy = process.env.CXAPI_DISABLE_SELECT_BY_ID === '1';
        const matchingPattern = (pattern) => (stack) => {
            if ((0, minimatch_1.minimatch)(stack.hierarchicalId, pattern)) {
                return true;
            }
            else if (!disableLegacy && stack.id === pattern && semver.major((0, version_1.versionNumber)()) < 2) {
                (0, logging_1.warning)('Selecting stack by identifier "%s". This identifier is deprecated and will be removed in v2. Please use "%s" instead.', chalk.bold(stack.id), chalk.bold(stack.hierarchicalId));
                (0, logging_1.warning)('Run "cdk ls" to see a list of all stack identifiers');
                return true;
            }
            return false;
        };
        const matchedStacks = (0, util_1.flatten)(patterns.map(pattern => stacks.filter(matchingPattern(pattern))));
        return this.extendStacks(matchedStacks, stacks, extend);
    }
    selectDefaultStacks(stacks, topLevelStacks, defaultSelection) {
        switch (defaultSelection) {
            case DefaultSelection.MainAssembly:
                return new StackCollection(this, topLevelStacks);
            case DefaultSelection.AllStacks:
                return new StackCollection(this, stacks);
            case DefaultSelection.None:
                return new StackCollection(this, []);
            case DefaultSelection.OnlySingle:
                if (topLevelStacks.length === 1) {
                    return new StackCollection(this, topLevelStacks);
                }
                else {
                    throw new Error('Since this app includes more than a single stack, specify which stacks to use (wildcards are supported) or specify `--all`\n' +
                        `Stacks: ${stacks.map(x => x.hierarchicalId).join(' · ')}`);
                }
            default:
                throw new Error(`invalid default behavior: ${defaultSelection}`);
        }
    }
    extendStacks(matched, all, extend = ExtendedStackSelection.None) {
        const allStacks = new Map();
        for (const stack of all) {
            allStacks.set(stack.hierarchicalId, stack);
        }
        const index = indexByHierarchicalId(matched);
        switch (extend) {
            case ExtendedStackSelection.Downstream:
                includeDownstreamStacks(index, allStacks);
                break;
            case ExtendedStackSelection.Upstream:
                includeUpstreamStacks(index, allStacks);
                break;
        }
        // Filter original array because it is in the right order
        const selectedList = all.filter(s => index.has(s.hierarchicalId));
        return new StackCollection(this, selectedList);
    }
    /**
     * Select a single stack by its ID
     */
    stackById(stackId) {
        return new StackCollection(this, [this.assembly.getStackArtifact(stackId)]);
    }
}
exports.CloudAssembly = CloudAssembly;
/**
 * A collection of stacks and related artifacts
 *
 * In practice, not all artifacts in the CloudAssembly are created equal;
 * stacks can be selected independently, but other artifacts such as asset
 * bundles cannot.
 */
class StackCollection {
    constructor(assembly, stackArtifacts) {
        this.assembly = assembly;
        this.stackArtifacts = stackArtifacts;
    }
    get stackCount() {
        return this.stackArtifacts.length;
    }
    get firstStack() {
        if (this.stackCount < 1) {
            throw new Error('StackCollection contains no stack artifacts (trying to access the first one)');
        }
        return this.stackArtifacts[0];
    }
    get stackIds() {
        return this.stackArtifacts.map(s => s.id);
    }
    reversed() {
        const arts = [...this.stackArtifacts];
        arts.reverse();
        return new StackCollection(this.assembly, arts);
    }
    filter(predicate) {
        return new StackCollection(this.assembly, this.stackArtifacts.filter(predicate));
    }
    concat(other) {
        return new StackCollection(this.assembly, this.stackArtifacts.concat(other.stackArtifacts));
    }
    /**
     * Extracts 'aws:cdk:warning|info|error' metadata entries from the stack synthesis
     */
    processMetadataMessages(options = {}) {
        let warnings = false;
        let errors = false;
        for (const stack of this.stackArtifacts) {
            for (const message of stack.messages) {
                switch (message.level) {
                    case cxapi.SynthesisMessageLevel.WARNING:
                        warnings = true;
                        printMessage(logging_1.warning, 'Warning', message.id, message.entry);
                        break;
                    case cxapi.SynthesisMessageLevel.ERROR:
                        errors = true;
                        printMessage(logging_1.error, 'Error', message.id, message.entry);
                        break;
                    case cxapi.SynthesisMessageLevel.INFO:
                        printMessage(logging_1.print, 'Info', message.id, message.entry);
                        break;
                }
            }
        }
        if (errors && !options.ignoreErrors) {
            throw new Error('Found errors');
        }
        if (options.strict && warnings) {
            throw new Error('Found warnings (--strict mode)');
        }
        function printMessage(logFn, prefix, id, entry) {
            logFn(`[${prefix} at ${id}] ${entry.data}`);
            if (options.verbose && entry.trace) {
                logFn(`  ${entry.trace.join('\n  ')}`);
            }
        }
    }
}
exports.StackCollection = StackCollection;
function indexByHierarchicalId(stacks) {
    const result = new Map();
    for (const stack of stacks) {
        result.set(stack.hierarchicalId, stack);
    }
    return result;
}
/**
 * Calculate the transitive closure of stack dependents.
 *
 * Modifies `selectedStacks` in-place.
 */
function includeDownstreamStacks(selectedStacks, allStacks) {
    const added = new Array();
    let madeProgress;
    do {
        madeProgress = false;
        for (const [id, stack] of allStacks) {
            // Select this stack if it's not selected yet AND it depends on a stack that's in the selected set
            if (!selectedStacks.has(id) && (stack.dependencies || []).some(dep => selectedStacks.has(dep.id))) {
                selectedStacks.set(id, stack);
                added.push(id);
                madeProgress = true;
            }
        }
    } while (madeProgress);
    if (added.length > 0) {
        (0, logging_1.print)('Including depending stacks: %s', chalk.bold(added.join(', ')));
    }
}
/**
 * Calculate the transitive closure of stack dependencies.
 *
 * Modifies `selectedStacks` in-place.
 */
function includeUpstreamStacks(selectedStacks, allStacks) {
    const added = new Array();
    let madeProgress = true;
    while (madeProgress) {
        madeProgress = false;
        for (const stack of selectedStacks.values()) {
            // Select an additional stack if it's not selected yet and a dependency of a selected stack (and exists, obviously)
            for (const dependencyId of stack.dependencies.map(x => x.manifest.displayName ?? x.id)) {
                if (!selectedStacks.has(dependencyId) && allStacks.has(dependencyId)) {
                    added.push(dependencyId);
                    selectedStacks.set(dependencyId, allStacks.get(dependencyId));
                    madeProgress = true;
                }
            }
        }
    }
    if (added.length > 0) {
        (0, logging_1.print)('Including dependency stacks: %s', chalk.bold(added.join(', ')));
    }
}
function sanitizePatterns(patterns) {
    let sanitized = patterns.filter(s => s != null); // filter null/undefined
    sanitized = [...new Set(sanitized)]; // make them unique
    return sanitized;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXNzZW1ibHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hc3NlbWJseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBeUM7QUFDekMsK0JBQStCO0FBQy9CLHlDQUFzQztBQUN0QyxpQ0FBaUM7QUFDakMsMkNBQXNEO0FBQ3RELHFDQUFxQztBQUNyQywyQ0FBOEM7QUFFOUMsSUFBWSxnQkFzQlg7QUF0QkQsV0FBWSxnQkFBZ0I7SUFDMUI7O09BRUc7SUFDSCxpQ0FBYSxDQUFBO0lBRWI7OztPQUdHO0lBQ0gseUNBQXFCLENBQUE7SUFFckI7O09BRUc7SUFDSCx5Q0FBcUIsQ0FBQTtJQUVyQjs7O09BR0c7SUFDSCxxQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBdEJXLGdCQUFnQixnQ0FBaEIsZ0JBQWdCLFFBc0IzQjtBQXNCRDs7R0FFRztBQUNILElBQVksc0JBZVg7QUFmRCxXQUFZLHNCQUFzQjtJQUNoQzs7T0FFRztJQUNILG1FQUFJLENBQUE7SUFFSjs7T0FFRztJQUNILDJFQUFRLENBQUE7SUFFUjs7T0FFRztJQUNILCtFQUFVLENBQUE7QUFDWixDQUFDLEVBZlcsc0JBQXNCLHNDQUF0QixzQkFBc0IsUUFlakM7QUFrQkQ7O0dBRUc7QUFDSCxNQUFhLGFBQWE7SUFNeEIsWUFBNEIsUUFBNkI7UUFBN0IsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQXVCLEVBQUUsT0FBNEI7UUFDN0UsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQixNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxD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RUFBQyxpQ0FBaUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxRQUFrQjtJQUMxQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0lBQ3pFLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtJQUN4RCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSAnQGF3cy1jZGsvY3gtYXBpJztcbmltcG9ydCAqIGFzIGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IG1pbmltYXRjaCB9IGZyb20gJ21pbmltYXRjaCc7XG5pbXBvcnQgKiBhcyBzZW12ZXIgZnJvbSAnc2VtdmVyJztcbmltcG9ydCB7IGVycm9yLCBwcmludCwgd2FybmluZyB9IGZyb20gJy4uLy4uL2xvZ2dpbmcnO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgdmVyc2lvbk51bWJlciB9IGZyb20gJy4uLy4uL3ZlcnNpb24nO1xuXG5leHBvcnQgZW51bSBEZWZhdWx0U2VsZWN0aW9uIHtcbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZW1wdHkgc2VsZWN0aW9uIGluIGNhc2UgdGhlcmUgYXJlIG5vIHNlbGVjdG9ycy5cbiAgICovXG4gIE5vbmUgPSAnbm9uZScsXG5cbiAgLyoqXG4gICAqIElmIHRoZSBhcHAgaW5jbHVkZXMgYSBzaW5nbGUgc3RhY2ssIHJldHVybnMgaXQuIE90aGVyd2lzZSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICAgKiBUaGlzIGJlaGF2aW9yIGlzIHVzZWQgYnkgXCJkZXBsb3lcIi5cbiAgICovXG4gIE9ubHlTaW5nbGUgPSAnc2luZ2xlJyxcblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgc3RhY2tzIGluIHRoZSBtYWluICh0b3AgbGV2ZWwpIGFzc2VtYmx5IG9ubHkuXG4gICAqL1xuICBNYWluQXNzZW1ibHkgPSAnbWFpbicsXG5cbiAgLyoqXG4gICAqIElmIG5vIHNlbGVjdG9ycyBhcmUgcHJvdmlkZWQsIHJldHVybnMgYWxsIHN0YWNrcyBpbiB0aGUgYXBwLFxuICAgKiBpbmNsdWRpbmcgc3RhY2tzIGluc2lkZSBuZXN0ZWQgYXNzZW1ibGllcy5cbiAgICovXG4gIEFsbFN0YWNrcyA9ICdhbGwnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFN0YWNrc09wdGlvbnMge1xuICAvKipcbiAgICogRXh0ZW5kIHRoZSBzZWxlY3Rpb24gdG8gdXBzdHJlYWQvZG93bnN0cmVhbSBzdGFja3NcbiAgICogQGRlZmF1bHQgRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5Ob25lIG9ubHkgc2VsZWN0IHRoZSBzcGVjaWZpZWQgc3RhY2tzLlxuICAgKi9cbiAgZXh0ZW5kPzogRXh0ZW5kZWRTdGFja1NlbGVjdGlvbjtcblxuICAvKipcbiAgICogVGhlIGJlaGF2aW9yIGlmIGlmIG5vIHNlbGVjdG9ycyBhcmUgcHJvdmlkZWQuXG4gICAqL1xuICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb247XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGVwbG95IGlmIHRoZSBhcHAgY29udGFpbnMgbm8gc3RhY2tzLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgaWdub3JlTm9TdGFja3M/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFdoZW4gc2VsZWN0aW5nIHN0YWNrcywgd2hhdCBvdGhlciBzdGFja3MgdG8gaW5jbHVkZSBiZWNhdXNlIG9mIGRlcGVuZGVuY2llc1xuICovXG5leHBvcnQgZW51bSBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uIHtcbiAgLyoqXG4gICAqIERvbid0IHNlbGVjdCBhbnkgZXh0cmEgc3RhY2tzXG4gICAqL1xuICBOb25lLFxuXG4gIC8qKlxuICAgKiBJbmNsdWRlIHN0YWNrcyB0aGF0IHRoaXMgc3RhY2sgZGVwZW5kcyBvblxuICAgKi9cbiAgVXBzdHJlYW0sXG5cbiAgLyoqXG4gICAqIEluY2x1ZGUgc3RhY2tzIHRoYXQgZGVwZW5kIG9uIHRoaXMgc3RhY2tcbiAgICovXG4gIERvd25zdHJlYW0sXG59XG5cbi8qKlxuICogQSBzcGVjaWZpY2F0aW9uIG9mIHdoaWNoIHN0YWNrcyBzaG91bGQgYmUgc2VsZWN0ZWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGFja1NlbGVjdG9yIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgYWxsIHN0YWNrcyBhdCB0aGUgdG9wIGxldmVsIGFzc2VtYmx5IHNob3VsZFxuICAgKiBiZSBzZWxlY3RlZCBhbmQgbm90aGluZyBlbHNlXG4gICAqL1xuICBhbGxUb3BMZXZlbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBwYXR0ZXJucyB0byBtYXRjaCB0aGUgc3RhY2sgaGllcmFyY2hpY2FsIGlkc1xuICAgKi9cbiAgcGF0dGVybnM6IHN0cmluZ1tdO1xufVxuXG4vKipcbiAqIEEgc2luZ2xlIENsb3VkIEFzc2VtYmx5IGFuZCB0aGUgb3BlcmF0aW9ucyB3ZSBkbyBvbiBpdCB0byBkZXBsb3kgdGhlIGFydGlmYWN0cyBpbnNpZGVcbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkQXNzZW1ibHkge1xuICAvKipcbiAgICogVGhlIGRpcmVjdG9yeSB0aGlzIENsb3VkQXNzZW1ibHkgd2FzIHJlYWQgZnJvbVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGRpcmVjdG9yeTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBhc3NlbWJseTogY3hhcGkuQ2xvdWRBc3NlbWJseSkge1xuICAgIHRoaXMuZGlyZWN0b3J5ID0gYXNzZW1ibHkuZGlyZWN0b3J5O1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHNlbGVjdFN0YWNrcyhzZWxlY3RvcjogU3RhY2tTZWxlY3Rvciwgb3B0aW9uczogU2VsZWN0U3RhY2tzT3B0aW9ucyk6IFByb21pc2U8U3RhY2tDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgYXNtID0gdGhpcy5hc3NlbWJseTtcbiAgICBjb25zdCB0b3BMZXZlbFN0YWNrcyA9IGFzbS5zdGFja3M7XG4gICAgY29uc3Qgc3RhY2tzID0gc2VtdmVyLm1ham9yKGFzbS52ZXJzaW9uKSA8IDEwID8gYXNtLnN0YWNrcyA6IGFzbS5zdGFja3NSZWN1cnNpdmVseTtcbiAgICBjb25zdCBhbGxUb3BMZXZlbCA9IHNlbGVjdG9yLmFsbFRvcExldmVsID8/IGZhbHNlO1xuICAgIGNvbnN0IHBhdHRlcm5zID0gc2FuaXRpemVQYXR0ZXJucyhzZWxlY3Rvci5wYXR0ZXJucyk7XG5cbiAgICBpZiAoc3RhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKG9wdGlvbnMuaWdub3JlTm9TdGFja3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcywgW10pO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGFwcCBjb250YWlucyBubyBzdGFja3MnKTtcbiAgICB9XG5cbiAgICBpZiAoYWxsVG9wTGV2ZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFRvcExldmVsU3RhY2tzKHN0YWNrcywgdG9wTGV2ZWxTdGFja3MsIG9wdGlvbnMuZXh0ZW5kKTtcbiAgICB9IGVsc2UgaWYgKHBhdHRlcm5zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE1hdGNoaW5nU3RhY2tzKHN0YWNrcywgcGF0dGVybnMsIG9wdGlvbnMuZXh0ZW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0RGVmYXVsdFN0YWNrcyhzdGFja3MsIHRvcExldmVsU3RhY2tzLCBvcHRpb25zLmRlZmF1bHRCZWhhdmlvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RUb3BMZXZlbFN0YWNrcyhzdGFja3M6IGN4YXBpLkNsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdFtdLFxuICAgIHRvcExldmVsU3RhY2tzOiBjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3RbXSxcbiAgICBleHRlbmQ6IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24gPSBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUpOiBTdGFja0NvbGxlY3Rpb24ge1xuICAgIGlmICh0b3BMZXZlbFN0YWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5leHRlbmRTdGFja3ModG9wTGV2ZWxTdGFja3MsIHN0YWNrcywgZXh0ZW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBzdGFjayBmb3VuZCBpbiB0aGUgbWFpbiBjbG91ZCBhc3NlbWJseS4gVXNlIFwibGlzdFwiIHRvIHByaW50IG1hbmlmZXN0Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RNYXRjaGluZ1N0YWNrcyhzdGFja3M6IGN4YXBpLkNsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdFtdLFxuICAgIHBhdHRlcm5zOiBzdHJpbmdbXSxcbiAgICBleHRlbmQ6IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24gPSBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUpOiBTdGFja0NvbGxlY3Rpb24ge1xuXG4gICAgLy8gY2xpIHRlc3RzIHVzZSB0aGlzIHRvIGVuc3VyZSB0ZXN0cyBkbyBub3QgZGVwZW5kIG9uIGxlZ2FjeSBiZWhhdmlvclxuICAgIC8vIChvdGhlcndpc2UgdGhleSB3aWxsIGZhaWwgaW4gdjIpXG4gICAgY29uc3QgZGlzYWJsZUxlZ2FjeSA9IHByb2Nlc3MuZW52LkNYQVBJX0RJU0FCTEVfU0VMRUNUX0JZX0lEID09PSAnMSc7XG5cbiAgICBjb25zdCBtYXRjaGluZ1BhdHRlcm4gPSAocGF0dGVybjogc3RyaW5nKSA9PiAoc3RhY2s6IGN4YXBpLkNsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdCkgPT4ge1xuICAgICAgaWYgKG1pbmltYXRjaChzdGFjay5oaWVyYXJjaGljYWxJZCwgcGF0dGVybikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKCFkaXNhYmxlTGVnYWN5ICYmIHN0YWNrLmlkID09PSBwYXR0ZXJuICYmIHNlbXZlci5tYWpvcih2ZXJzaW9uTnVtYmVyKCkpIDwgMikge1xuICAgICAgICB3YXJuaW5nKCdTZWxlY3Rpbmcgc3RhY2sgYnkgaWRlbnRpZmllciBcIiVzXCIuIFRoaXMgaWRlbnRpZmllciBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjIuIFBsZWFzZSB1c2UgXCIlc1wiIGluc3RlYWQuJywgY2hhbGsuYm9sZChzdGFjay5pZCksIGNoYWxrLmJvbGQoc3RhY2suaGllcmFyY2hpY2FsSWQpKTtcbiAgICAgICAgd2FybmluZygnUnVuIFwiY2RrIGxzXCIgdG8gc2VlIGEgbGlzdCBvZiBhbGwgc3RhY2sgaWRlbnRpZmllcnMnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IG1hdGNoZWRTdGFja3MgPSBmbGF0dGVuKHBhdHRlcm5zLm1hcChwYXR0ZXJuID0+IHN0YWNrcy5maWx0ZXIobWF0Y2hpbmdQYXR0ZXJuKHBhdHRlcm4pKSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5kU3RhY2tzKG1hdGNoZWRTdGFja3MsIHN0YWNrcywgZXh0ZW5kKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0RGVmYXVsdFN0YWNrcyhzdGFja3M6IGN4YXBpLkNsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdFtdLFxuICAgIHRvcExldmVsU3RhY2tzOiBjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3RbXSxcbiAgICBkZWZhdWx0U2VsZWN0aW9uOiBEZWZhdWx0U2VsZWN0aW9uKSB7XG4gICAgc3dpdGNoIChkZWZhdWx0U2VsZWN0aW9uKSB7XG4gICAgICBjYXNlIERlZmF1bHRTZWxlY3Rpb24uTWFpbkFzc2VtYmx5OlxuICAgICAgICByZXR1cm4gbmV3IFN0YWNrQ29sbGVjdGlvbih0aGlzLCB0b3BMZXZlbFN0YWNrcyk7XG4gICAgICBjYXNlIERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzOlxuICAgICAgICByZXR1cm4gbmV3IFN0YWNrQ29sbGVjdGlvbih0aGlzLCBzdGFja3MpO1xuICAgICAgY2FzZSBEZWZhdWx0U2VsZWN0aW9uLk5vbmU6XG4gICAgICAgIHJldHVybiBuZXcgU3RhY2tDb2xsZWN0aW9uKHRoaXMsIFtdKTtcbiAgICAgIGNhc2UgRGVmYXVsdFNlbGVjdGlvbi5Pbmx5U2luZ2xlOlxuICAgICAgICBpZiAodG9wTGV2ZWxTdGFja3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcywgdG9wTGV2ZWxTdGFja3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2luY2UgdGhpcyBhcHAgaW5jbHVkZXMgbW9yZSB0aGFuIGEgc2luZ2xlIHN0YWNrLCBzcGVjaWZ5IHdoaWNoIHN0YWNrcyB0byB1c2UgKHdpbGRjYXJkcyBhcmUgc3VwcG9ydGVkKSBvciBzcGVjaWZ5IGAtLWFsbGBcXG4nICtcbiAgICAgICAgICBgU3RhY2tzOiAke3N0YWNrcy5tYXAoeCA9PiB4LmhpZXJhcmNoaWNhbElkKS5qb2luKCcgwrcgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBkZWZhdWx0IGJlaGF2aW9yOiAke2RlZmF1bHRTZWxlY3Rpb259YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBleHRlbmRTdGFja3MobWF0Y2hlZDogY3hhcGkuQ2xvdWRGb3JtYXRpb25TdGFja0FydGlmYWN0W10sXG4gICAgYWxsOiBjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3RbXSxcbiAgICBleHRlbmQ6IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24gPSBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUpIHtcbiAgICBjb25zdCBhbGxTdGFja3MgPSBuZXcgTWFwPHN0cmluZywgY3hhcGkuQ2xvdWRGb3JtYXRpb25TdGFja0FydGlmYWN0PigpO1xuICAgIGZvciAoY29uc3Qgc3RhY2sgb2YgYWxsKSB7XG4gICAgICBhbGxTdGFja3Muc2V0KHN0YWNrLmhpZXJhcmNoaWNhbElkLCBzdGFjayk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBpbmRleEJ5SGllcmFyY2hpY2FsSWQobWF0Y2hlZCk7XG5cbiAgICBzd2l0Y2ggKGV4dGVuZCkge1xuICAgICAgY2FzZSBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLkRvd25zdHJlYW06XG4gICAgICAgIGluY2x1ZGVEb3duc3RyZWFtU3RhY2tzKGluZGV4LCBhbGxTdGFja3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5VcHN0cmVhbTpcbiAgICAgICAgaW5jbHVkZVVwc3RyZWFtU3RhY2tzKGluZGV4LCBhbGxTdGFja3MpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXIgb3JpZ2luYWwgYXJyYXkgYmVjYXVzZSBpdCBpcyBpbiB0aGUgcmlnaHQgb3JkZXJcbiAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBhbGwuZmlsdGVyKHMgPT4gaW5kZXguaGFzKHMuaGllcmFyY2hpY2FsSWQpKTtcblxuICAgIHJldHVybiBuZXcgU3RhY2tDb2xsZWN0aW9uKHRoaXMsIHNlbGVjdGVkTGlzdCk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGEgc2luZ2xlIHN0YWNrIGJ5IGl0cyBJRFxuICAgKi9cbiAgcHVibGljIHN0YWNrQnlJZChzdGFja0lkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFN0YWNrQ29sbGVjdGlvbih0aGlzLCBbdGhpcy5hc3NlbWJseS5nZXRTdGFja0FydGlmYWN0KHN0YWNrSWQpXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc3RhY2tzIGFuZCByZWxhdGVkIGFydGlmYWN0c1xuICpcbiAqIEluIHByYWN0aWNlLCBub3QgYWxsIGFydGlmYWN0cyBpbiB0aGUgQ2xvdWRBc3NlbWJseSBhcmUgY3JlYXRlZCBlcXVhbDtcbiAqIHN0YWNrcyBjYW4gYmUgc2VsZWN0ZWQgaW5kZXBlbmRlbnRseSwgYnV0IG90aGVyIGFydGlmYWN0cyBzdWNoIGFzIGFzc2V0XG4gKiBidW5kbGVzIGNhbm5vdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNrQ29sbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBhc3NlbWJseTogQ2xvdWRBc3NlbWJseSwgcHVibGljIHJlYWRvbmx5IHN0YWNrQXJ0aWZhY3RzOiBjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3RbXSkge1xuICB9XG5cbiAgcHVibGljIGdldCBzdGFja0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YWNrQXJ0aWZhY3RzLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmlyc3RTdGFjaygpIHtcbiAgICBpZiAodGhpcy5zdGFja0NvdW50IDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdGFja0NvbGxlY3Rpb24gY29udGFpbnMgbm8gc3RhY2sgYXJ0aWZhY3RzICh0cnlpbmcgdG8gYWNjZXNzIHRoZSBmaXJzdCBvbmUpJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YWNrQXJ0aWZhY3RzWzBdO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGFja0lkcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tBcnRpZmFjdHMubWFwKHMgPT4gcy5pZCk7XG4gIH1cblxuICBwdWJsaWMgcmV2ZXJzZWQoKSB7XG4gICAgY29uc3QgYXJ0cyA9IFsuLi50aGlzLnN0YWNrQXJ0aWZhY3RzXTtcbiAgICBhcnRzLnJldmVyc2UoKTtcbiAgICByZXR1cm4gbmV3IFN0YWNrQ29sbGVjdGlvbih0aGlzLmFzc2VtYmx5LCBhcnRzKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAoYXJ0OiBjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3QpID0+IGJvb2xlYW4pOiBTdGFja0NvbGxlY3Rpb24ge1xuICAgIHJldHVybiBuZXcgU3RhY2tDb2xsZWN0aW9uKHRoaXMuYXNzZW1ibHksIHRoaXMuc3RhY2tBcnRpZmFjdHMuZmlsdGVyKHByZWRpY2F0ZSkpO1xuICB9XG5cbiAgcHVibGljIGNvbmNhdChvdGhlcjogU3RhY2tDb2xsZWN0aW9uKTogU3RhY2tDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gbmV3IFN0YWNrQ29sbGVjdGlvbih0aGlzLmFzc2VtYmx5LCB0aGlzLnN0YWNrQXJ0aWZhY3RzLmNvbmNhdChvdGhlci5zdGFja0FydGlmYWN0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzICdhd3M6Y2RrOndhcm5pbmd8aW5mb3xlcnJvcicgbWV0YWRhdGEgZW50cmllcyBmcm9tIHRoZSBzdGFjayBzeW50aGVzaXNcbiAgICovXG4gIHB1YmxpYyBwcm9jZXNzTWV0YWRhdGFNZXNzYWdlcyhvcHRpb25zOiBNZXRhZGF0YU1lc3NhZ2VPcHRpb25zID0ge30pIHtcbiAgICBsZXQgd2FybmluZ3MgPSBmYWxzZTtcbiAgICBsZXQgZXJyb3JzID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHRoaXMuc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiBzdGFjay5tZXNzYWdlcykge1xuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UubGV2ZWwpIHtcbiAgICAgICAgICBjYXNlIGN4YXBpLlN5bnRoZXNpc01lc3NhZ2VMZXZlbC5XQVJOSU5HOlxuICAgICAgICAgICAgd2FybmluZ3MgPSB0cnVlO1xuICAgICAgICAgICAgcHJpbnRNZXNzYWdlKHdhcm5pbmcsICdXYXJuaW5nJywgbWVzc2FnZS5pZCwgbWVzc2FnZS5lbnRyeSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGN4YXBpLlN5bnRoZXNpc01lc3NhZ2VMZXZlbC5FUlJPUjpcbiAgICAgICAgICAgIGVycm9ycyA9IHRydWU7XG4gICAgICAgICAgICBwcmludE1lc3NhZ2UoZXJyb3IsICdFcnJvcicsIG1lc3NhZ2UuaWQsIG1lc3NhZ2UuZW50cnkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBjeGFwaS5TeW50aGVzaXNNZXNzYWdlTGV2ZWwuSU5GTzpcbiAgICAgICAgICAgIHByaW50TWVzc2FnZShwcmludCwgJ0luZm8nLCBtZXNzYWdlLmlkLCBtZXNzYWdlLmVudHJ5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVycm9ycyAmJiAhb3B0aW9ucy5pZ25vcmVFcnJvcnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgZXJyb3JzJyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0ICYmIHdhcm5pbmdzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHdhcm5pbmdzICgtLXN0cmljdCBtb2RlKScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByaW50TWVzc2FnZShsb2dGbjogKHM6IHN0cmluZykgPT4gdm9pZCwgcHJlZml4OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGVudHJ5OiBjeGFwaS5NZXRhZGF0YUVudHJ5KSB7XG4gICAgICBsb2dGbihgWyR7cHJlZml4fSBhdCAke2lkfV0gJHtlbnRyeS5kYXRhfWApO1xuXG4gICAgICBpZiAob3B0aW9ucy52ZXJib3NlICYmIGVudHJ5LnRyYWNlKSB7XG4gICAgICAgIGxvZ0ZuKGAgICR7ZW50cnkudHJhY2Uuam9pbignXFxuICAnKX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YU1lc3NhZ2VPcHRpb25zIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYmUgdmVyYm9zZVxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdmVyYm9zZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERvbid0IHN0b3Agb24gZXJyb3IgbWV0YWRhdGFcbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGlnbm9yZUVycm9ycz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRyZWF0IHdhcm5pbmdzIGluIG1ldGFkYXRhIGFzIGVycm9yc1xuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgc3RyaWN0PzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gaW5kZXhCeUhpZXJhcmNoaWNhbElkKHN0YWNrczogY3hhcGkuQ2xvdWRGb3JtYXRpb25TdGFja0FydGlmYWN0W10pOiBNYXA8c3RyaW5nLCBjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3Q+IHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IE1hcDxzdHJpbmcsIGN4YXBpLkNsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdD4oKTtcblxuICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcykge1xuICAgIHJlc3VsdC5zZXQoc3RhY2suaGllcmFyY2hpY2FsSWQsIHN0YWNrKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSB0cmFuc2l0aXZlIGNsb3N1cmUgb2Ygc3RhY2sgZGVwZW5kZW50cy5cbiAqXG4gKiBNb2RpZmllcyBgc2VsZWN0ZWRTdGFja3NgIGluLXBsYWNlLlxuICovXG5mdW5jdGlvbiBpbmNsdWRlRG93bnN0cmVhbVN0YWNrcyhcbiAgc2VsZWN0ZWRTdGFja3M6IE1hcDxzdHJpbmcsIGN4YXBpLkNsb3VkRm9ybWF0aW9uU3RhY2tBcnRpZmFjdD4sXG4gIGFsbFN0YWNrczogTWFwPHN0cmluZywgY3hhcGkuQ2xvdWRGb3JtYXRpb25TdGFja0FydGlmYWN0Pikge1xuICBjb25zdCBhZGRlZCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG5cbiAgbGV0IG1hZGVQcm9ncmVzcztcbiAgZG8ge1xuICAgIG1hZGVQcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBbaWQsIHN0YWNrXSBvZiBhbGxTdGFja3MpIHtcbiAgICAgIC8vIFNlbGVjdCB0aGlzIHN0YWNrIGlmIGl0J3Mgbm90IHNlbGVjdGVkIHlldCBBTkQgaXQgZGVwZW5kcyBvbiBhIHN0YWNrIHRoYXQncyBpbiB0aGUgc2VsZWN0ZWQgc2V0XG4gICAgICBpZiAoIXNlbGVjdGVkU3RhY2tzLmhhcyhpZCkgJiYgKHN0YWNrLmRlcGVuZGVuY2llcyB8fCBbXSkuc29tZShkZXAgPT4gc2VsZWN0ZWRTdGFja3MuaGFzKGRlcC5pZCkpKSB7XG4gICAgICAgIHNlbGVjdGVkU3RhY2tzLnNldChpZCwgc3RhY2spO1xuICAgICAgICBhZGRlZC5wdXNoKGlkKTtcbiAgICAgICAgbWFkZVByb2dyZXNzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gd2hpbGUgKG1hZGVQcm9ncmVzcyk7XG5cbiAgaWYgKGFkZGVkLmxlbmd0aCA+IDApIHtcbiAgICBwcmludCgnSW5jbHVkaW5nIGRlcGVuZGluZyBzdGFja3M6ICVzJywgY2hhbGsuYm9sZChhZGRlZC5qb2luKCcsICcpKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHRyYW5zaXRpdmUgY2xvc3VyZSBvZiBzdGFjayBkZXBlbmRlbmNpZXMuXG4gKlxuICogTW9kaWZpZXMgYHNlbGVjdGVkU3RhY2tzYCBpbi1wbGFjZS5cbiAqL1xuZnVuY3Rpb24gaW5jbHVkZVVwc3RyZWFtU3RhY2tzKFxuICBzZWxlY3RlZFN0YWNrczogTWFwPHN0cmluZywgY3hhcGkuQ2xvdWRGb3JtYXRpb25TdGFja0FydGlmYWN0PixcbiAgYWxsU3RhY2tzOiBNYXA8c3RyaW5nLCBjeGFwaS5DbG91ZEZvcm1hdGlvblN0YWNrQXJ0aWZhY3Q+KSB7XG4gIGNvbnN0IGFkZGVkID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgbGV0IG1hZGVQcm9ncmVzcyA9IHRydWU7XG4gIHdoaWxlIChtYWRlUHJvZ3Jlc3MpIHtcbiAgICBtYWRlUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc2VsZWN0ZWRTdGFja3MudmFsdWVzKCkpIHtcbiAgICAgIC8vIFNlbGVjdCBhbiBhZGRpdGlvbmFsIHN0YWNrIGlmIGl0J3Mgbm90IHNlbGVjdGVkIHlldCBhbmQgYSBkZXBlbmRlbmN5IG9mIGEgc2VsZWN0ZWQgc3RhY2sgKGFuZCBleGlzdHMsIG9idmlvdXNseSlcbiAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeUlkIG9mIHN0YWNrLmRlcGVuZGVuY2llcy5tYXAoeCA9PiB4Lm1hbmlmZXN0LmRpc3BsYXlOYW1lID8/IHguaWQpKSB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRTdGFja3MuaGFzKGRlcGVuZGVuY3lJZCkgJiYgYWxsU3RhY2tzLmhhcyhkZXBlbmRlbmN5SWQpKSB7XG4gICAgICAgICAgYWRkZWQucHVzaChkZXBlbmRlbmN5SWQpO1xuICAgICAgICAgIHNlbGVjdGVkU3RhY2tzLnNldChkZXBlbmRlbmN5SWQsIGFsbFN0YWNrcy5nZXQoZGVwZW5kZW5jeUlkKSEpO1xuICAgICAgICAgIG1hZGVQcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuICAgIHByaW50KCdJbmNsdWRpbmcgZGVwZW5kZW5jeSBzdGFja3M6ICVzJywgY2hhbGsuYm9sZChhZGRlZC5qb2luKCcsICcpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FuaXRpemVQYXR0ZXJucyhwYXR0ZXJuczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIGxldCBzYW5pdGl6ZWQgPSBwYXR0ZXJucy5maWx0ZXIocyA9PiBzICE9IG51bGwpOyAvLyBmaWx0ZXIgbnVsbC91bmRlZmluZWRcbiAgc2FuaXRpemVkID0gWy4uLm5ldyBTZXQoc2FuaXRpemVkKV07IC8vIG1ha2UgdGhlbSB1bmlxdWVcbiAgcmV0dXJuIHNhbml0aXplZDtcbn1cbiJdfQ==