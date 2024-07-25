import { Construct } from 'constructs';
import * as codecommit from '../../../aws-codecommit';
import * as codepipeline from '../../../aws-codepipeline';
import { EventPattern, IRuleTarget } from '../../../aws-events';
import * as iam from '../../../aws-iam';
import { Action } from '../action';
/**
 * How should the CodeCommit Action detect changes.
 * This is the type of the `CodeCommitSourceAction.trigger` property.
 */
export declare enum CodeCommitTrigger {
    /**
     * The Action will never detect changes -
     * the Pipeline it's part of will only begin a run when explicitly started.
     */
    NONE = "None",
    /**
     * CodePipeline will poll the repository to detect changes.
     */
    POLL = "Poll",
    /**
     * CodePipeline will use CloudWatch Events to be notified of changes.
     * This is the default method of detecting changes.
     */
    EVENTS = "Events"
}
/**
 * The CodePipeline variables emitted by the CodeCommit source Action.
 */
export interface CodeCommitSourceVariables {
    /** The name of the repository this action points to. */
    readonly repositoryName: string;
    /** The name of the branch this action tracks. */
    readonly branchName: string;
    /** The date the currently last commit on the tracked branch was authored, in ISO-8601 format. */
    readonly authorDate: string;
    /** The date the currently last commit on the tracked branch was committed, in ISO-8601 format. */
    readonly committerDate: string;
    /** The SHA1 hash of the currently last commit on the tracked branch. */
    readonly commitId: string;
    /** The message of the currently last commit on the tracked branch. */
    readonly commitMessage: string;
}
/**
 * Represents a custom event rule in AWS CodePipeline Actions.
 *
 * This interface defines the structure for specifying a custom event rule
 * in the AWS CodePipeline Actions module. The event rule is defined by an
 * event pattern and a target.
 *
 * @see https://docs.aws.amazon.com/codecommit/latest/userguide/monitoring-events.html
 * @see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events_targets-readme.html
 */
export interface ICustomEventRule {
    /**
     * event pattern when this rule should be triggered
     */
    readonly eventPattern: EventPattern;
    /**
     * Target e.g. Lambda when event pattern is fulfilled
     */
    readonly target: IRuleTarget;
    /**
     * Rulename
     */
    readonly ruleName?: string;
    /**
     * Description
     */
    readonly description?: string;
}
/**
 * Construction properties of the `CodeCommitSourceAction CodeCommit source CodePipeline Action`.
 */
export interface CodeCommitSourceActionProps extends codepipeline.CommonAwsActionProps {
    /**
     *
     */
    readonly output: codepipeline.Artifact;
    /**
     * @default 'master'
     */
    readonly branch?: string;
    /**
     * How should CodePipeline detect source changes for this Action.
     *
     * @default CodeCommitTrigger.EVENTS
     */
    readonly trigger?: CodeCommitTrigger;
    /**
     * The CodeCommit repository.
     */
    readonly repository: codecommit.IRepository;
    /**
     * Role to be used by on commit event rule.
     * Used only when trigger value is CodeCommitTrigger.EVENTS.
     *
     * @default a new role will be created.
     */
    readonly eventRole?: iam.IRole;
    /**
     * Whether the output should be the contents of the repository
     * (which is the default),
     * or a link that allows CodeBuild to clone the repository before building.
     *
     * **Note**: if this option is true,
     * then only CodeBuild actions can use the resulting `output`.
     *
     * @default false
     * @see https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference-CodeCommit.html
     */
    readonly codeBuildCloneOutput?: boolean;
    /**
     * You can pass a `customEventRule` to set up a custom event rule for the CodeCommit source action.
     * You must provide the `eventPattern` and `target` properties in the `customEventRule` object.
     * Check which `eventPattern` to use: https://docs.aws.amazon.com/codecommit/latest/userguide/monitoring-events.html
     * @default Event rule which is triggered by CodeCommit repository on commit
     */
    readonly customEventRule?: ICustomEventRule;
}
/**
 * CodePipeline Source that is provided by an AWS CodeCommit repository.
 *
 * If the CodeCommit repository is in a different account, you must use
 * `CodeCommitTrigger.EVENTS` to trigger the pipeline.
 *
 * (That is because the Pipeline structure normally only has a `RepositoryName`
 * field, and that is not enough for the pipeline to locate the repository's
 * source account. However, if the pipeline is triggered via an EventBridge
 * event, the event itself has the full repository ARN in there, allowing the
 * pipeline to locate the repository).
 */
export declare class CodeCommitSourceAction extends Action {
    /**
     * The name of the property that holds the ARN of the CodeCommit Repository
     * inside of the CodePipeline Artifact's metadata.
     *
     * @internal
     */
    static readonly _FULL_CLONE_ARN_PROPERTY = "CodeCommitCloneRepositoryArn";
    private static readonly NEW_DEFAULT_BRANCH_NAME;
    private static readonly OLD_DEFAULT_BRANCH_NAME;
    private readonly branch;
    private readonly props;
    constructor(props: CodeCommitSourceActionProps);
    /** The variables emitted by this action. */
    get variables(): CodeCommitSourceVariables;
    protected bound(_scope: Construct, stage: codepipeline.IStage, options: codepipeline.ActionBindOptions): codepipeline.ActionConfig;
    private getBranchOrDefault;
    private generateEventId;
    private eventIdFromPrefix;
}
