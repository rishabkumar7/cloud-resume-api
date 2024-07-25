import { StackOutputReference } from '../blueprint';
import { PipelineBase } from '../main';
/**
 * Translate stack outputs to CodePipeline variable references
 */
export declare class StackOutputsMap {
    private queries;
    constructor(pipeline: PipelineBase);
    /**
     * Return the matching variable reference string for a StackOutputReference
     */
    toCodePipeline(x: StackOutputReference): string;
}
