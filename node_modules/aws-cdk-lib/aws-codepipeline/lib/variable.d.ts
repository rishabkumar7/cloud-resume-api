import { CfnPipeline } from './codepipeline.generated';
/**
 * Properties of pipeline-level variable.
 */
export interface VariableProps {
    /**
     * The name of a pipeline-level variable.
     */
    readonly variableName: string;
    /**
     * The description of a pipeline-level variable. It's used to add additional context
     * about the variable, and not being used at time when pipeline executes.
     *
     * @default - No description.
     */
    readonly description?: string;
    /**
     * The default value of a pipeline-level variable.
     *
     * @default - No default value.
     */
    readonly defaultValue?: string;
}
/**
 * Pipeline-Level variable.
 */
export declare class Variable {
    /**
     * The name of a pipeline-level variable.
     */
    readonly variableName: string;
    private readonly description?;
    private readonly defaultValue?;
    constructor(props: VariableProps);
    private validate;
    /**
     * Reference the variable name at Pipeline actions.
     *
     * @returns The variable name in a format that can be referenced at Pipeline actions
     */
    reference(): string;
    /**
     * Render to CloudFormation property.
     *
     * @internal
     */
    _render(): CfnPipeline.VariableDeclarationProperty;
}
