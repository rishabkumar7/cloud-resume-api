import { IAction } from './action';
import { CfnPipeline } from './codepipeline.generated';
/**
 * Git push filter for trigger.
 */
export interface GitPushFilter {
    /**
     * The list of patterns of Git tags that, when pushed, are to be excluded from
     * starting the pipeline.
     *
     * You can filter with glob patterns. The `tagsExcludes` takes priority
     * over the `tagsIncludes`.
     *
     * Maximum length of this array is 8.
     *
     * @default - no tags.
     */
    readonly tagsExcludes?: string[];
    /**
     * The list of patterns of Git tags that, when pushed, are to be included as
     * criteria that starts the pipeline.
     *
     * You can filter with glob patterns. The `tagsExcludes` takes priority
     * over the `tagsIncludes`.
     *
     * Maximum length of this array is 8.
     *
     * @default - no tags.
     */
    readonly tagsIncludes?: string[];
}
/**
 * Git pull request filter for trigger.
 */
export interface GitPullRequestFilter {
    /**
     * The list of patterns of Git branches that, when pull request events occurs, are
     * to be excluded from starting the pipeline.
     *
     * You can filter with glob patterns. The `branchesExcludes` takes priority
     * over the `branchesIncludes`.
     *
     * Maximum length of this array is 8.
     *
     * @default - no branches.
     */
    readonly branchesExcludes?: string[];
    /**
     * The list of patterns of Git branches that, when pull request events occurs, are
     * to be included as criteria that starts the pipeline.
     *
     * You can filter with glob patterns. The `branchesExcludes` takes priority
     * over the `branchesIncludes`.
     *
     * Maximum length of this array is 8.
     *
     * @default - no branches.
     */
    readonly branchesIncludes?: string[];
    /**
     * The list of patterns of Git repository file paths that, when pull request events occurs,
     * are to be excluded from starting the pipeline.
     *
     * You can filter with glob patterns. The `filePathsExcludes` takes priority
     * over the `filePathsIncludes`.
     *
     * Maximum length of this array is 8.
     *
     * @default - no filePaths.
     */
    readonly filePathsExcludes?: string[];
    /**
     * The list of patterns of Git repository file paths that, when pull request events occurs,
     * are to be included as criteria that starts the pipeline.
     *
     * You can filter with glob patterns. The `filePathsExcludes` takes priority
     * over the `filePathsIncludes`.
     *
     * Maximum length of this array is 8.
     *
     * @default - no filePaths.
     */
    readonly filePathsIncludes?: string[];
    /**
     * The field that specifies which pull request events to filter on (opened, updated, closed)
     * for the trigger configuration.
     *
     * @default - all events.
     */
    readonly events?: GitPullRequestEvent[];
}
/**
 * Event for trigger with pull request filter.
 */
export declare enum GitPullRequestEvent {
    /**
     * OPEN
     */
    OPEN = "OPEN",
    /**
     * UPDATED
     */
    UPDATED = "UPDATED",
    /**
     * CLOSED
     */
    CLOSED = "CLOSED"
}
/**
 * Git configuration for trigger.
 */
export interface GitConfiguration {
    /**
     * The pipeline source action where the trigger configuration, such as Git tags.
     *
     * The trigger configuration will start the pipeline upon the specified change only.
     * You can only specify one trigger configuration per source action.
     *
     * Since the provider for `sourceAction` must be `CodeStarSourceConnection`, you can use
     * `CodeStarConnectionsSourceAction` construct in `aws-codepipeline-actions` module.
     */
    readonly sourceAction: IAction;
    /**
     * The field where the repository event that will start the pipeline,
     * such as pushing Git tags, is specified with details.
     *
     * Git tags is the only supported event type.
     *
     * The length must be less than or equal to 3.
     *
     * @default - no filter.
     */
    readonly pushFilter?: GitPushFilter[];
    /**
     * The field where the repository event that will start the pipeline
     * is specified as pull requests.
     *
     * The length must be less than or equal to 3.
     *
     * @default - no filter.
     */
    readonly pullRequestFilter?: GitPullRequestFilter[];
}
/**
 * Provider type for trigger.
 */
export declare enum ProviderType {
    /**
     * CodeStarSourceConnection
     */
    CODE_STAR_SOURCE_CONNECTION = "CodeStarSourceConnection"
}
/**
 * Properties of trigger.
 */
export interface TriggerProps {
    /**
     * The source provider for the event, such as connections configured
     * for a repository with Git tags, for the specified trigger configuration.
     */
    readonly providerType: ProviderType;
    /**
     * Provides the filter criteria and the source stage for the repository
     * event that starts the pipeline, such as Git tags.
     *
     * @default - no configuration.
     */
    readonly gitConfiguration?: GitConfiguration;
}
/**
 * Trigger.
 */
export declare class Trigger {
    private readonly props;
    /**
     * The pipeline source action where the trigger configuration.
     */
    readonly sourceAction: IAction | undefined;
    constructor(props: TriggerProps);
    private validate;
    /**
     * Render to CloudFormation property.
     *
     * @internal
     */
    _render(): CfnPipeline.PipelineTriggerDeclarationProperty;
    private renderPushFilter;
    private renderPullRequestFilter;
}
