import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies a lifecycle policy, which is used to automate operations on Amazon EBS resources.
 *
 * The properties are required when you add a lifecycle policy and optional when you update a lifecycle policy.
 *
 * @cloudformationResource AWS::DLM::LifecyclePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html
 */
export declare class CfnLifecyclePolicy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLifecyclePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLifecyclePolicy;
    /**
     * The Amazon Resource Name (ARN) of the lifecycle policy.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * *[Default policies only]* Indicates whether the policy should copy tags from the source resource to the snapshot or AMI.
     */
    copyTags?: boolean | cdk.IResolvable;
    /**
     * *[Default policies only]* Specifies how often the policy should run and create snapshots or AMIs.
     */
    createInterval?: number;
    /**
     * *[Default policies only]* Specifies destination Regions for snapshot or AMI copies.
     */
    crossRegionCopyTargets?: any | cdk.IResolvable;
    /**
     * *[Default policies only]* Specify the type of default policy to create.
     */
    defaultPolicy?: string;
    /**
     * A description of the lifecycle policy.
     */
    description?: string;
    /**
     * *[Default policies only]* Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs.
     */
    exclusions?: CfnLifecyclePolicy.ExclusionsProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
     */
    executionRoleArn?: string;
    /**
     * *[Default policies only]* Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
     */
    extendDeletion?: boolean | cdk.IResolvable;
    /**
     * The configuration details of the lifecycle policy.
     */
    policyDetails?: cdk.IResolvable | CfnLifecyclePolicy.PolicyDetailsProperty;
    /**
     * *[Default policies only]* Specifies how long the policy should retain snapshots or AMIs before deleting them.
     */
    retainInterval?: number;
    /**
     * The activation state of the lifecycle policy.
     */
    state?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to apply to the lifecycle policy during creation.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnLifecyclePolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLifecyclePolicy {
    /**
     * Specifies the configuration of a lifecycle policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html
     */
    interface PolicyDetailsProperty {
        /**
         * *[Event-based policies only]* The actions to be performed when the event-based policy is activated.
         *
         * You can specify only one action per policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-actions
         */
        readonly actions?: Array<CfnLifecyclePolicy.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * *[Default policies only]* Indicates whether the policy should copy tags from the source resource to the snapshot or AMI.
         *
         * If you do not specify a value, the default is `false` .
         *
         * Default: false
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-copytags
         */
        readonly copyTags?: boolean | cdk.IResolvable;
        /**
         * *[Default policies only]* Specifies how often the policy should run and create snapshots or AMIs.
         *
         * The creation frequency can range from 1 to 7 days. If you do not specify a value, the default is 1.
         *
         * Default: 1
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-createinterval
         */
        readonly createInterval?: number;
        /**
         * *[Default policies only]* Specifies destination Regions for snapshot or AMI copies.
         *
         * You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-crossregioncopytargets
         */
        readonly crossRegionCopyTargets?: any | cdk.IResolvable;
        /**
         * *[Event-based policies only]* The event that activates the event-based policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-eventsource
         */
        readonly eventSource?: CfnLifecyclePolicy.EventSourceProperty | cdk.IResolvable;
        /**
         * *[Default policies only]* Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs.
         *
         * The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-exclusions
         */
        readonly exclusions?: CfnLifecyclePolicy.ExclusionsProperty | cdk.IResolvable;
        /**
         * *[Default policies only]* Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
         *
         * By default ( *ExtendDeletion=false* ):
         *
         * - If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously created snapshots or AMIs, up to but not including the last one, based on the specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs, including the last one, specify `true` .
         * - If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs, including the last one, if the policy enters one of these states, specify `true` .
         *
         * If you enable extended deletion ( *ExtendDeletion=true* ), you override both default behaviors simultaneously.
         *
         * If you do not specify a value, the default is `false` .
         *
         * Default: false
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-extenddeletion
         */
        readonly extendDeletion?: boolean | cdk.IResolvable;
        /**
         * *[Custom snapshot and AMI policies only]* A set of optional parameters for snapshot and AMI lifecycle policies.
         *
         * > If you are modifying a policy that was created or previously modified using the Amazon Data Lifecycle Manager console, then you must include this parameter and specify either the default values or the new values that you require. You can't omit this parameter or set its values to null.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-parameters
         */
        readonly parameters?: cdk.IResolvable | CfnLifecyclePolicy.ParametersProperty;
        /**
         * The type of policy to create. Specify one of the following:.
         *
         * - `SIMPLIFIED` To create a default policy.
         * - `STANDARD` To create a custom policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-policylanguage
         */
        readonly policyLanguage?: string;
        /**
         * The type of policy.
         *
         * Specify `EBS_SNAPSHOT_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify `IMAGE_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify `EVENT_BASED_POLICY` to create an event-based policy that performs specific actions when a defined event occurs in your AWS account .
         *
         * The default is `EBS_SNAPSHOT_MANAGEMENT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-policytype
         */
        readonly policyType?: string;
        /**
         * *[Custom snapshot and AMI policies only]* The location of the resources to backup.
         *
         * If the source resources are located in an AWS Region , specify `CLOUD` . If the source resources are located on an Outpost in your account, specify `OUTPOST` .
         *
         * If you specify `OUTPOST` , Amazon Data Lifecycle Manager backs up all resources of the specified type with matching target tags across all of the Outposts in your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-resourcelocations
         */
        readonly resourceLocations?: Array<string>;
        /**
         * *[Default policies only]* Specify the type of default policy to create.
         *
         * - To create a default policy for EBS snapshots, that creates snapshots of all volumes in the Region that do not have recent backups, specify `VOLUME` .
         * - To create a default policy for EBS-backed AMIs, that creates EBS-backed AMIs from all instances in the Region that do not have recent backups, specify `INSTANCE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-resourcetype
         */
        readonly resourceType?: string;
        /**
         * *[Custom snapshot policies only]* The target resource type for snapshot and AMI lifecycle policies.
         *
         * Use `VOLUME` to create snapshots of individual volumes or use `INSTANCE` to create multi-volume snapshots from the volumes for an instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-resourcetypes
         */
        readonly resourceTypes?: Array<string>;
        /**
         * *[Default policies only]* Specifies how long the policy should retain snapshots or AMIs before deleting them.
         *
         * The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time. If you do not specify a value, the default is 7.
         *
         * Default: 7
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-retaininterval
         */
        readonly retainInterval?: number;
        /**
         * *[Custom snapshot and AMI policies only]* The schedules of policy-defined actions for snapshot and AMI lifecycle policies.
         *
         * A policy can have up to four schedules—one mandatory schedule and up to three optional schedules.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-schedules
         */
        readonly schedules?: Array<cdk.IResolvable | CfnLifecyclePolicy.ScheduleProperty> | cdk.IResolvable;
        /**
         * *[Custom snapshot and AMI policies only]* The single tag that identifies targeted resources for this policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html#cfn-dlm-lifecyclepolicy-policydetails-targettags
         */
        readonly targetTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * *[Custom snapshot and AMI policies only]* Specifies a schedule for a snapshot or AMI lifecycle policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html
     */
    interface ScheduleProperty {
        /**
         * *[Custom snapshot policies that target volumes only]* The snapshot archiving rule for the schedule.
         *
         * When you specify an archiving rule, snapshots are automatically moved from the standard tier to the archive tier once the schedule's retention threshold is met. Snapshots are then retained in the archive tier for the archive retention period that you specify.
         *
         * For more information about using snapshot archiving, see [Considerations for snapshot lifecycle policies](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-archiverule
         */
        readonly archiveRule?: CfnLifecyclePolicy.ArchiveRuleProperty | cdk.IResolvable;
        /**
         * Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-copytags
         */
        readonly copyTags?: boolean | cdk.IResolvable;
        /**
         * The creation rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-createrule
         */
        readonly createRule?: CfnLifecyclePolicy.CreateRuleProperty | cdk.IResolvable;
        /**
         * Specifies a rule for copying snapshots or AMIs across regions.
         *
         * > You can't specify cross-Region copy rules for policies that create snapshots on an Outpost. If the policy creates snapshots in a Region, then snapshots can be copied to up to three Regions or Outposts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-crossregioncopyrules
         */
        readonly crossRegionCopyRules?: Array<CfnLifecyclePolicy.CrossRegionCopyRuleProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * *[Custom AMI policies only]* The AMI deprecation rule for the schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-deprecaterule
         */
        readonly deprecateRule?: CfnLifecyclePolicy.DeprecateRuleProperty | cdk.IResolvable;
        /**
         * *[Custom snapshot policies only]* The rule for enabling fast snapshot restore.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-fastrestorerule
         */
        readonly fastRestoreRule?: CfnLifecyclePolicy.FastRestoreRuleProperty | cdk.IResolvable;
        /**
         * The name of the schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-name
         */
        readonly name?: string;
        /**
         * The retention rule for snapshots or AMIs created by the policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-retainrule
         */
        readonly retainRule?: cdk.IResolvable | CfnLifecyclePolicy.RetainRuleProperty;
        /**
         * *[Custom snapshot policies only]* The rule for sharing snapshots with other AWS accounts .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-sharerules
         */
        readonly shareRules?: Array<cdk.IResolvable | CfnLifecyclePolicy.ShareRuleProperty> | cdk.IResolvable;
        /**
         * The tags to apply to policy-created resources.
         *
         * These user-defined tags are in addition to the AWS -added lifecycle tags.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-tagstoadd
         */
        readonly tagsToAdd?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
        /**
         * *[AMI policies and snapshot policies that target instances only]* A collection of key/value pairs with values determined dynamically when the policy is executed.
         *
         * Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: `$(instance-id)` or `$(timestamp)` . Variable tags are only valid for EBS Snapshot Management – Instance policies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-variabletags
         */
        readonly variableTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * *[Custom snapshot policies only]* Specifies a rule for sharing snapshots across AWS accounts .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-sharerule.html
     */
    interface ShareRuleProperty {
        /**
         * The IDs of the AWS accounts with which to share the snapshots.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-sharerule.html#cfn-dlm-lifecyclepolicy-sharerule-targetaccounts
         */
        readonly targetAccounts?: Array<string>;
        /**
         * The period after which snapshots that are shared with other AWS accounts are automatically unshared.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-sharerule.html#cfn-dlm-lifecyclepolicy-sharerule-unshareinterval
         */
        readonly unshareInterval?: number;
        /**
         * The unit of time for the automatic unsharing interval.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-sharerule.html#cfn-dlm-lifecyclepolicy-sharerule-unshareintervalunit
         */
        readonly unshareIntervalUnit?: string;
    }
    /**
     * *[Custom AMI policies only]* Specifies an AMI deprecation rule for AMIs created by an AMI lifecycle policy.
     *
     * For age-based schedules, you must specify *Interval* and *IntervalUnit* . For count-based schedules, you must specify *Count* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-deprecaterule.html
     */
    interface DeprecateRuleProperty {
        /**
         * If the schedule has a count-based retention rule, this parameter specifies the number of oldest AMIs to deprecate.
         *
         * The count must be less than or equal to the schedule's retention count, and it can't be greater than 1000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-deprecaterule.html#cfn-dlm-lifecyclepolicy-deprecaterule-count
         */
        readonly count?: number;
        /**
         * If the schedule has an age-based retention rule, this parameter specifies the period after which to deprecate AMIs created by the schedule.
         *
         * The period must be less than or equal to the schedule's retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-deprecaterule.html#cfn-dlm-lifecyclepolicy-deprecaterule-interval
         */
        readonly interval?: number;
        /**
         * The unit of time in which to measure the *Interval* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-deprecaterule.html#cfn-dlm-lifecyclepolicy-deprecaterule-intervalunit
         */
        readonly intervalUnit?: string;
    }
    /**
     * *[Custom snapshot and AMI policies only]* Specifies when the policy should create snapshots or AMIs.
     *
     * > - You must specify either *CronExpression* , or *Interval* , *IntervalUnit* , and *Times* .
     * > - If you need to specify an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html) for the schedule, then you must specify a creation frequency of at least 28 days.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-createrule.html
     */
    interface CreateRuleProperty {
        /**
         * The schedule, as a Cron expression.
         *
         * The schedule interval must be between 1 hour and 1 year. For more information, see the [Cron expressions reference](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cron-expressions.html) in the *Amazon EventBridge User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-createrule.html#cfn-dlm-lifecyclepolicy-createrule-cronexpression
         */
        readonly cronExpression?: string;
        /**
         * The interval between snapshots.
         *
         * The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-createrule.html#cfn-dlm-lifecyclepolicy-createrule-interval
         */
        readonly interval?: number;
        /**
         * The interval unit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-createrule.html#cfn-dlm-lifecyclepolicy-createrule-intervalunit
         */
        readonly intervalUnit?: string;
        /**
         * *[Custom snapshot policies only]* Specifies the destination for snapshots created by the policy.
         *
         * To create snapshots in the same Region as the source resource, specify `CLOUD` . To create snapshots on the same Outpost as the source resource, specify `OUTPOST_LOCAL` . If you omit this parameter, `CLOUD` is used by default.
         *
         * If the policy targets resources in an AWS Region , then you must create snapshots in the same Region as the source resource. If the policy targets resources on an Outpost, then you can create snapshots on the same Outpost as the source resource, or in the Region of that Outpost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-createrule.html#cfn-dlm-lifecyclepolicy-createrule-location
         */
        readonly location?: string;
        /**
         * *[Custom snapshot policies that target instances only]* Specifies pre and/or post scripts for a snapshot lifecycle policy that targets instances.
         *
         * This is useful for creating application-consistent snapshots, or for performing specific administrative tasks before or after Amazon Data Lifecycle Manager initiates snapshot creation.
         *
         * For more information, see [Automating application-consistent snapshots with pre and post scripts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/automate-app-consistent-backups.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-createrule.html#cfn-dlm-lifecyclepolicy-createrule-scripts
         */
        readonly scripts?: Array<cdk.IResolvable | CfnLifecyclePolicy.ScriptProperty> | cdk.IResolvable;
        /**
         * The time, in UTC, to start the operation. The supported format is hh:mm.
         *
         * The operation occurs within a one-hour window following the specified time. If you do not specify a time, Amazon Data Lifecycle Manager selects a time within the next 24 hours.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-createrule.html#cfn-dlm-lifecyclepolicy-createrule-times
         */
        readonly times?: Array<string>;
    }
    /**
     * *[Custom snapshot policies that target instances only]* Information about pre and/or post scripts for a snapshot lifecycle policy that targets instances.
     *
     * For more information, see [Automating application-consistent snapshots with pre and post scripts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/automate-app-consistent-backups.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-script.html
     */
    interface ScriptProperty {
        /**
         * Indicates whether Amazon Data Lifecycle Manager should default to crash-consistent snapshots if the pre script fails.
         *
         * - To default to crash consistent snapshot if the pre script fails, specify `true` .
         * - To skip the instance for snapshot creation if the pre script fails, specify `false` .
         *
         * This parameter is supported only if you run a pre script. If you run a post script only, omit this parameter.
         *
         * Default: true
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-script.html#cfn-dlm-lifecyclepolicy-script-executeoperationonscriptfailure
         */
        readonly executeOperationOnScriptFailure?: boolean | cdk.IResolvable;
        /**
         * The SSM document that includes the pre and/or post scripts to run.
         *
         * - If you are automating VSS backups, specify `AWS_VSS_BACKUP` . In this case, Amazon Data Lifecycle Manager automatically uses the `AWSEC2-CreateVssSnapshot` SSM document.
         * - If you are automating application-consistent snapshots for SAP HANA workloads, specify `AWSSystemsManagerSAP-CreateDLMSnapshotForSAPHANA` .
         * - If you are using a custom SSM document that you own, specify either the name or ARN of the SSM document. If you are using a custom SSM document that is shared with you, specify the ARN of the SSM document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-script.html#cfn-dlm-lifecyclepolicy-script-executionhandler
         */
        readonly executionHandler?: string;
        /**
         * Indicates the service used to execute the pre and/or post scripts.
         *
         * - If you are using custom SSM documents or automating application-consistent snapshots of SAP HANA workloads, specify `AWS_SYSTEMS_MANAGER` .
         * - If you are automating VSS Backups, omit this parameter.
         *
         * Default: AWS_SYSTEMS_MANAGER
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-script.html#cfn-dlm-lifecyclepolicy-script-executionhandlerservice
         */
        readonly executionHandlerService?: string;
        /**
         * Specifies a timeout period, in seconds, after which Amazon Data Lifecycle Manager fails the script run attempt if it has not completed.
         *
         * If a script does not complete within its timeout period, Amazon Data Lifecycle Manager fails the attempt. The timeout period applies to the pre and post scripts individually.
         *
         * If you are automating VSS Backups, omit this parameter.
         *
         * Default: 10
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-script.html#cfn-dlm-lifecyclepolicy-script-executiontimeout
         */
        readonly executionTimeout?: number;
        /**
         * Specifies the number of times Amazon Data Lifecycle Manager should retry scripts that fail.
         *
         * - If the pre script fails, Amazon Data Lifecycle Manager retries the entire snapshot creation process, including running the pre and post scripts.
         * - If the post script fails, Amazon Data Lifecycle Manager retries the post script only; in this case, the pre script will have completed and the snapshot might have been created.
         *
         * If you do not want Amazon Data Lifecycle Manager to retry failed scripts, specify `0` .
         *
         * Default: 0
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-script.html#cfn-dlm-lifecyclepolicy-script-maximumretrycount
         */
        readonly maximumRetryCount?: number;
        /**
         * Indicate which scripts Amazon Data Lifecycle Manager should run on target instances.
         *
         * Pre scripts run before Amazon Data Lifecycle Manager initiates snapshot creation. Post scripts run after Amazon Data Lifecycle Manager initiates snapshot creation.
         *
         * - To run a pre script only, specify `PRE` . In this case, Amazon Data Lifecycle Manager calls the SSM document with the `pre-script` parameter before initiating snapshot creation.
         * - To run a post script only, specify `POST` . In this case, Amazon Data Lifecycle Manager calls the SSM document with the `post-script` parameter after initiating snapshot creation.
         * - To run both pre and post scripts, specify both `PRE` and `POST` . In this case, Amazon Data Lifecycle Manager calls the SSM document with the `pre-script` parameter before initiating snapshot creation, and then it calls the SSM document again with the `post-script` parameter after initiating snapshot creation.
         *
         * If you are automating VSS Backups, omit this parameter.
         *
         * Default: PRE and POST
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-script.html#cfn-dlm-lifecyclepolicy-script-stages
         */
        readonly stages?: Array<string>;
    }
    /**
     * *[Custom snapshot policies only]* Specifies a rule for enabling fast snapshot restore for snapshots created by snapshot policies.
     *
     * You can enable fast snapshot restore based on either a count or a time interval.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-fastrestorerule.html
     */
    interface FastRestoreRuleProperty {
        /**
         * The Availability Zones in which to enable fast snapshot restore.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-fastrestorerule.html#cfn-dlm-lifecyclepolicy-fastrestorerule-availabilityzones
         */
        readonly availabilityZones?: Array<string>;
        /**
         * The number of snapshots to be enabled with fast snapshot restore.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-fastrestorerule.html#cfn-dlm-lifecyclepolicy-fastrestorerule-count
         */
        readonly count?: number;
        /**
         * The amount of time to enable fast snapshot restore.
         *
         * The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-fastrestorerule.html#cfn-dlm-lifecyclepolicy-fastrestorerule-interval
         */
        readonly interval?: number;
        /**
         * The unit of time for enabling fast snapshot restore.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-fastrestorerule.html#cfn-dlm-lifecyclepolicy-fastrestorerule-intervalunit
         */
        readonly intervalUnit?: string;
    }
    /**
     * *[Custom snapshot policies only]* Specifies a snapshot archiving rule for a schedule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-archiverule.html
     */
    interface ArchiveRuleProperty {
        /**
         * Information about the retention period for the snapshot archiving rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-archiverule.html#cfn-dlm-lifecyclepolicy-archiverule-retainrule
         */
        readonly retainRule: CfnLifecyclePolicy.ArchiveRetainRuleProperty | cdk.IResolvable;
    }
    /**
     * *[Custom snapshot policies only]* Specifies information about the archive storage tier retention period.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-archiveretainrule.html
     */
    interface ArchiveRetainRuleProperty {
        /**
         * Information about retention period in the Amazon EBS Snapshots Archive.
         *
         * For more information, see [Archive Amazon EBS snapshots](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/snapshot-archive.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-archiveretainrule.html#cfn-dlm-lifecyclepolicy-archiveretainrule-retentionarchivetier
         */
        readonly retentionArchiveTier: cdk.IResolvable | CfnLifecyclePolicy.RetentionArchiveTierProperty;
    }
    /**
     * *[Custom snapshot policies only]* Describes the retention rule for archived snapshots.
     *
     * Once the archive retention threshold is met, the snapshots are permanently deleted from the archive tier.
     *
     * > The archive retention rule must retain snapshots in the archive tier for a minimum of 90 days.
     *
     * For *count-based schedules* , you must specify *Count* . For *age-based schedules* , you must specify *Interval* and *IntervalUnit* .
     *
     * For more information about using snapshot archiving, see [Considerations for snapshot lifecycle policies](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retentionarchivetier.html
     */
    interface RetentionArchiveTierProperty {
        /**
         * The maximum number of snapshots to retain in the archive storage tier for each volume.
         *
         * The count must ensure that each snapshot remains in the archive tier for at least 90 days. For example, if the schedule creates snapshots every 30 days, you must specify a count of 3 or more to ensure that each snapshot is archived for at least 90 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retentionarchivetier.html#cfn-dlm-lifecyclepolicy-retentionarchivetier-count
         */
        readonly count?: number;
        /**
         * Specifies the period of time to retain snapshots in the archive tier.
         *
         * After this period expires, the snapshot is permanently deleted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retentionarchivetier.html#cfn-dlm-lifecyclepolicy-retentionarchivetier-interval
         */
        readonly interval?: number;
        /**
         * The unit of time in which to measure the *Interval* .
         *
         * For example, to retain a snapshots in the archive tier for 6 months, specify `Interval=6` and `IntervalUnit=MONTHS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retentionarchivetier.html#cfn-dlm-lifecyclepolicy-retentionarchivetier-intervalunit
         */
        readonly intervalUnit?: string;
    }
    /**
     * *[Custom snapshot and AMI policies only]* Specifies a retention rule for snapshots created by snapshot policies, or for AMIs created by AMI policies.
     *
     * > For snapshot policies that have an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html) , this retention rule applies to standard tier retention. When the retention threshold is met, snapshots are moved from the standard to the archive tier.
     * >
     * > For snapshot policies that do not have an *ArchiveRule* , snapshots are permanently deleted when this retention threshold is met.
     *
     * You can retain snapshots based on either a count or a time interval.
     *
     * - *Count-based retention*
     *
     * You must specify *Count* . If you specify an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html) for the schedule, then you can specify a retention count of `0` to archive snapshots immediately after creation. If you specify a [FastRestoreRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_FastRestoreRule.html) , [ShareRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ShareRule.html) , or a [CrossRegionCopyRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyRule.html) , then you must specify a retention count of `1` or more.
     * - *Age-based retention*
     *
     * You must specify *Interval* and *IntervalUnit* . If you specify an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html) for the schedule, then you can specify a retention interval of `0` days to archive snapshots immediately after creation. If you specify a [FastRestoreRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_FastRestoreRule.html) , [ShareRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ShareRule.html) , or a [CrossRegionCopyRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyRule.html) , then you must specify a retention interval of `1` day or more.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retainrule.html
     */
    interface RetainRuleProperty {
        /**
         * The number of snapshots to retain for each volume, up to a maximum of 1000.
         *
         * For example if you want to retain a maximum of three snapshots, specify `3` . When the fourth snapshot is created, the oldest retained snapshot is deleted, or it is moved to the archive tier if you have specified an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retainrule.html#cfn-dlm-lifecyclepolicy-retainrule-count
         */
        readonly count?: number;
        /**
         * The amount of time to retain each snapshot.
         *
         * The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retainrule.html#cfn-dlm-lifecyclepolicy-retainrule-interval
         */
        readonly interval?: number;
        /**
         * The unit of time for time-based retention.
         *
         * For example, to retain snapshots for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS` . Once the snapshot has been retained for 3 months, it is deleted, or it is moved to the archive tier if you have specified an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retainrule.html#cfn-dlm-lifecyclepolicy-retainrule-intervalunit
         */
        readonly intervalUnit?: string;
    }
    /**
     * *[Custom snapshot and AMI policies only]* Specifies a cross-Region copy rule for a snapshot and AMI policies.
     *
     * > To specify a cross-Region copy action for event-based polices, use [CrossRegionCopyAction](https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyAction.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html
     */
    interface CrossRegionCopyRuleProperty {
        /**
         * The Amazon Resource Name (ARN) of the AWS KMS key to use for EBS encryption.
         *
         * If this parameter is not specified, the default KMS key for the account is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html#cfn-dlm-lifecyclepolicy-crossregioncopyrule-cmkarn
         */
        readonly cmkArn?: string;
        /**
         * Indicates whether to copy all user-defined tags from the source snapshot or AMI to the cross-Region copy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html#cfn-dlm-lifecyclepolicy-crossregioncopyrule-copytags
         */
        readonly copyTags?: boolean | cdk.IResolvable;
        /**
         * *[Custom AMI policies only]* The AMI deprecation rule for cross-Region AMI copies created by the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html#cfn-dlm-lifecyclepolicy-crossregioncopyrule-deprecaterule
         */
        readonly deprecateRule?: CfnLifecyclePolicy.CrossRegionCopyDeprecateRuleProperty | cdk.IResolvable;
        /**
         * To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter.
         *
         * Copies of encrypted snapshots are encrypted, even if this parameter is false or if encryption by default is not enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html#cfn-dlm-lifecyclepolicy-crossregioncopyrule-encrypted
         */
        readonly encrypted: boolean | cdk.IResolvable;
        /**
         * The retention rule that indicates how long the cross-Region snapshot or AMI copies are to be retained in the destination Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html#cfn-dlm-lifecyclepolicy-crossregioncopyrule-retainrule
         */
        readonly retainRule?: CfnLifecyclePolicy.CrossRegionCopyRetainRuleProperty | cdk.IResolvable;
        /**
         * > Use this parameter for snapshot policies only. For AMI policies, use *TargetRegion* instead.
         *
         * *[Custom snapshot policies only]* The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html#cfn-dlm-lifecyclepolicy-crossregioncopyrule-target
         */
        readonly target?: string;
        /**
         * > Use this parameter for AMI policies only.
         *
         * For snapshot policies, use *Target* instead. For snapshot policies created before the *Target* parameter was introduced, this parameter indicates the target Region for snapshot copies.
         *
         * *[Custom AMI policies only]* The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html#cfn-dlm-lifecyclepolicy-crossregioncopyrule-targetregion
         */
        readonly targetRegion?: string;
    }
    /**
     * *[Custom AMI policies only]* Specifies an AMI deprecation rule for cross-Region AMI copies created by an AMI policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopydeprecaterule.html
     */
    interface CrossRegionCopyDeprecateRuleProperty {
        /**
         * The period after which to deprecate the cross-Region AMI copies.
         *
         * The period must be less than or equal to the cross-Region AMI copy retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopydeprecaterule.html#cfn-dlm-lifecyclepolicy-crossregioncopydeprecaterule-interval
         */
        readonly interval: number;
        /**
         * The unit of time in which to measure the *Interval* .
         *
         * For example, to deprecate a cross-Region AMI copy after 3 months, specify `Interval=3` and `IntervalUnit=MONTHS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopydeprecaterule.html#cfn-dlm-lifecyclepolicy-crossregioncopydeprecaterule-intervalunit
         */
        readonly intervalUnit: string;
    }
    /**
     * Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies.
     *
     * After the retention period expires, the cross-Region copy is deleted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyretainrule.html
     */
    interface CrossRegionCopyRetainRuleProperty {
        /**
         * The amount of time to retain a cross-Region snapshot or AMI copy.
         *
         * The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyretainrule.html#cfn-dlm-lifecyclepolicy-crossregioncopyretainrule-interval
         */
        readonly interval: number;
        /**
         * The unit of time for time-based retention.
         *
         * For example, to retain a cross-Region copy for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyretainrule.html#cfn-dlm-lifecyclepolicy-crossregioncopyretainrule-intervalunit
         */
        readonly intervalUnit: string;
    }
    /**
     * *[Event-based policies only]* Specifies an event that activates an event-based policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventsource.html
     */
    interface EventSourceProperty {
        /**
         * Information about the event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventsource.html#cfn-dlm-lifecyclepolicy-eventsource-parameters
         */
        readonly parameters?: CfnLifecyclePolicy.EventParametersProperty | cdk.IResolvable;
        /**
         * The source of the event.
         *
         * Currently only managed CloudWatch Events rules are supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventsource.html#cfn-dlm-lifecyclepolicy-eventsource-type
         */
        readonly type: string;
    }
    /**
     * *[Event-based policies only]* Specifies an event that activates an event-based policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventparameters.html
     */
    interface EventParametersProperty {
        /**
         * The snapshot description that can trigger the policy.
         *
         * The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account.
         *
         * For example, specifying `^.*Created for policy: policy-1234567890abcdef0.*$` configures the policy to run only if snapshots created by policy `policy-1234567890abcdef0` are shared with your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventparameters.html#cfn-dlm-lifecyclepolicy-eventparameters-descriptionregex
         */
        readonly descriptionRegex?: string;
        /**
         * The type of event.
         *
         * Currently, only snapshot sharing events are supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventparameters.html#cfn-dlm-lifecyclepolicy-eventparameters-eventtype
         */
        readonly eventType: string;
        /**
         * The IDs of the AWS accounts that can trigger policy by sharing snapshots with your account.
         *
         * The policy only runs if one of the specified AWS accounts shares a snapshot with your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventparameters.html#cfn-dlm-lifecyclepolicy-eventparameters-snapshotowner
         */
        readonly snapshotOwner: Array<string>;
    }
    /**
     * *[Custom snapshot and AMI policies only]* Specifies optional parameters for snapshot and AMI policies.
     *
     * The set of valid parameters depends on the combination of policy type and target resource type.
     *
     * If you choose to exclude boot volumes and you specify tags that consequently exclude all of the additional data volumes attached to an instance, then Amazon Data Lifecycle Manager will not create any snapshots for the affected instance, and it will emit a `SnapshotsCreateFailed` Amazon CloudWatch metric. For more information, see [Monitor your policies using Amazon CloudWatch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-dlm-cw-metrics.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-parameters.html
     */
    interface ParametersProperty {
        /**
         * *[Custom snapshot policies that target instances only]* Indicates whether to exclude the root volume from multi-volume snapshot sets.
         *
         * The default is `false` . If you specify `true` , then the root volumes attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-parameters.html#cfn-dlm-lifecyclepolicy-parameters-excludebootvolume
         */
        readonly excludeBootVolume?: boolean | cdk.IResolvable;
        /**
         * *[Custom snapshot policies that target instances only]* The tags used to identify data (non-root) volumes to exclude from multi-volume snapshot sets.
         *
         * If you create a snapshot lifecycle policy that targets instances and you specify tags for this parameter, then data volumes with the specified tags that are attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-parameters.html#cfn-dlm-lifecyclepolicy-parameters-excludedatavolumetags
         */
        readonly excludeDataVolumeTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
        /**
         * *[Custom AMI policies only]* Indicates whether targeted instances are rebooted when the lifecycle policy runs.
         *
         * `true` indicates that targeted instances are not rebooted when the policy runs. `false` indicates that target instances are rebooted when the policy runs. The default is `true` (instances are not rebooted).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-parameters.html#cfn-dlm-lifecyclepolicy-parameters-noreboot
         */
        readonly noReboot?: boolean | cdk.IResolvable;
    }
    /**
     * *[Event-based policies only]* Specifies an action for an event-based policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-action.html
     */
    interface ActionProperty {
        /**
         * The rule for copying shared snapshots across Regions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-action.html#cfn-dlm-lifecyclepolicy-action-crossregioncopy
         */
        readonly crossRegionCopy: Array<CfnLifecyclePolicy.CrossRegionCopyActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A descriptive name for the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-action.html#cfn-dlm-lifecyclepolicy-action-name
         */
        readonly name: string;
    }
    /**
     * *[Event-based policies only]* Specifies a cross-Region copy action for event-based policies.
     *
     * > To specify a cross-Region copy rule for snapshot and AMI policies, use [CrossRegionCopyRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyRule.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyaction.html
     */
    interface CrossRegionCopyActionProperty {
        /**
         * The encryption settings for the copied snapshot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyaction.html#cfn-dlm-lifecyclepolicy-crossregioncopyaction-encryptionconfiguration
         */
        readonly encryptionConfiguration: CfnLifecyclePolicy.EncryptionConfigurationProperty | cdk.IResolvable;
        /**
         * Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies.
         *
         * After the retention period expires, the cross-Region copy is deleted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyaction.html#cfn-dlm-lifecyclepolicy-crossregioncopyaction-retainrule
         */
        readonly retainRule?: CfnLifecyclePolicy.CrossRegionCopyRetainRuleProperty | cdk.IResolvable;
        /**
         * The target Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyaction.html#cfn-dlm-lifecyclepolicy-crossregioncopyaction-target
         */
        readonly target: string;
    }
    /**
     * *[Event-based policies only]* Specifies the encryption settings for cross-Region snapshot copies created by event-based policies.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the AWS KMS key to use for EBS encryption.
         *
         * If this parameter is not specified, the default KMS key for the account is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-encryptionconfiguration.html#cfn-dlm-lifecyclepolicy-encryptionconfiguration-cmkarn
         */
        readonly cmkArn?: string;
        /**
         * To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable encryption using this parameter.
         *
         * Copies of encrypted snapshots are encrypted, even if this parameter is false or when encryption by default is not enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-encryptionconfiguration.html#cfn-dlm-lifecyclepolicy-encryptionconfiguration-encrypted
         */
        readonly encrypted: boolean | cdk.IResolvable;
    }
    /**
     * *[Default policies only]* Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs.
     *
     * The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-exclusions.html
     */
    interface ExclusionsProperty {
        /**
         * *[Default policies for EBS snapshots only]* Indicates whether to exclude volumes that are attached to instances as the boot volume.
         *
         * If you exclude boot volumes, only volumes attached as data (non-boot) volumes will be backed up by the policy. To exclude boot volumes, specify `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-exclusions.html#cfn-dlm-lifecyclepolicy-exclusions-excludebootvolumes
         */
        readonly excludeBootVolumes?: boolean | cdk.IResolvable;
        /**
         * *[Default policies for EBS-backed AMIs only]* Specifies whether to exclude volumes that have specific tags.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-exclusions.html#cfn-dlm-lifecyclepolicy-exclusions-excludetags
         */
        readonly excludeTags?: any | cdk.IResolvable;
        /**
         * *[Default policies for EBS snapshots only]* Specifies the volume types to exclude.
         *
         * Volumes of the specified types will not be targeted by the policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-exclusions.html#cfn-dlm-lifecyclepolicy-exclusions-excludevolumetypes
         */
        readonly excludeVolumeTypes?: any | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnLifecyclePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html
 */
export interface CfnLifecyclePolicyProps {
    /**
     * *[Default policies only]* Indicates whether the policy should copy tags from the source resource to the snapshot or AMI.
     *
     * If you do not specify a value, the default is `false` .
     *
     * Default: false
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-copytags
     */
    readonly copyTags?: boolean | cdk.IResolvable;
    /**
     * *[Default policies only]* Specifies how often the policy should run and create snapshots or AMIs.
     *
     * The creation frequency can range from 1 to 7 days. If you do not specify a value, the default is 1.
     *
     * Default: 1
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-createinterval
     */
    readonly createInterval?: number;
    /**
     * *[Default policies only]* Specifies destination Regions for snapshot or AMI copies.
     *
     * You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-crossregioncopytargets
     */
    readonly crossRegionCopyTargets?: any | cdk.IResolvable;
    /**
     * *[Default policies only]* Specify the type of default policy to create.
     *
     * - To create a default policy for EBS snapshots, that creates snapshots of all volumes in the Region that do not have recent backups, specify `VOLUME` .
     * - To create a default policy for EBS-backed AMIs, that creates EBS-backed AMIs from all instances in the Region that do not have recent backups, specify `INSTANCE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-defaultpolicy
     */
    readonly defaultPolicy?: string;
    /**
     * A description of the lifecycle policy.
     *
     * The characters ^[0-9A-Za-z _-]+$ are supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-description
     */
    readonly description?: string;
    /**
     * *[Default policies only]* Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs.
     *
     * The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-exclusions
     */
    readonly exclusions?: CfnLifecyclePolicy.ExclusionsProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-executionrolearn
     */
    readonly executionRoleArn?: string;
    /**
     * *[Default policies only]* Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
     *
     * By default ( *ExtendDeletion=false* ):
     *
     * - If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously created snapshots or AMIs, up to but not including the last one, based on the specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs, including the last one, specify `true` .
     * - If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs, including the last one, if the policy enters one of these states, specify `true` .
     *
     * If you enable extended deletion ( *ExtendDeletion=true* ), you override both default behaviors simultaneously.
     *
     * If you do not specify a value, the default is `false` .
     *
     * Default: false
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-extenddeletion
     */
    readonly extendDeletion?: boolean | cdk.IResolvable;
    /**
     * The configuration details of the lifecycle policy.
     *
     * > If you create a default policy, you can specify the request parameters either in the request body, or in the PolicyDetails request structure, but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-policydetails
     */
    readonly policyDetails?: cdk.IResolvable | CfnLifecyclePolicy.PolicyDetailsProperty;
    /**
     * *[Default policies only]* Specifies how long the policy should retain snapshots or AMIs before deleting them.
     *
     * The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time. If you do not specify a value, the default is 7.
     *
     * Default: 7
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-retaininterval
     */
    readonly retainInterval?: number;
    /**
     * The activation state of the lifecycle policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-state
     */
    readonly state?: string;
    /**
     * The tags to apply to the lifecycle policy during creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#cfn-dlm-lifecyclepolicy-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
