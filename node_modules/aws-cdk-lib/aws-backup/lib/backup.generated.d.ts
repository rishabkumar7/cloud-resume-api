import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Contains an optional backup plan display name and an array of `BackupRule` objects, each of which specifies a backup rule.
 *
 * Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
 *
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn) .
 *
 * @cloudformationResource AWS::Backup::BackupPlan
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html
 */
export declare class CfnBackupPlan extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBackupPlan from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBackupPlan;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, `arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50` .
     *
     * @cloudformationAttribute BackupPlanArn
     */
    readonly attrBackupPlanArn: string;
    /**
     * Uniquely identifies a backup plan.
     *
     * @cloudformationAttribute BackupPlanId
     */
    readonly attrBackupPlanId: string;
    /**
     * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version Ids cannot be edited.
     *
     * @cloudformationAttribute VersionId
     */
    readonly attrVersionId: string;
    /**
     * Uniquely identifies the backup plan to be associated with the selection of resources.
     */
    backupPlan: CfnBackupPlan.BackupPlanResourceTypeProperty | cdk.IResolvable;
    /**
     * The tags to assign to the backup plan.
     */
    backupPlanTags?: Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBackupPlanProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBackupPlan {
    /**
     * Specifies an object containing properties used to create a backup plan.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupplanresourcetype.html
     */
    interface BackupPlanResourceTypeProperty {
        /**
         * A list of backup options for each resource type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupplanresourcetype.html#cfn-backup-backupplan-backupplanresourcetype-advancedbackupsettings
         */
        readonly advancedBackupSettings?: Array<CfnBackupPlan.AdvancedBackupSettingResourceTypeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The display name of a backup plan.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupplanresourcetype.html#cfn-backup-backupplan-backupplanresourcetype-backupplanname
         */
        readonly backupPlanName: string;
        /**
         * An array of `BackupRule` objects, each of which specifies a scheduled task that is used to back up a selection of resources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupplanresourcetype.html#cfn-backup-backupplan-backupplanresourcetype-backupplanrule
         */
        readonly backupPlanRule: Array<CfnBackupPlan.BackupRuleResourceTypeProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Specifies an object containing resource type and backup options.
     *
     * This is only supported for Windows VSS backups.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-advancedbackupsettingresourcetype.html
     */
    interface AdvancedBackupSettingResourceTypeProperty {
        /**
         * The backup option for the resource.
         *
         * Each option is a key-value pair. This option is only available for Windows VSS backup jobs.
         *
         * Valid values:
         *
         * Set to `"WindowsVSS":"enabled"` to enable the `WindowsVSS` backup option and create a Windows VSS backup.
         *
         * Set to `"WindowsVSS":"disabled"` to create a regular backup. The `WindowsVSS` option is not enabled by default.
         *
         * If you specify an invalid option, you get an `InvalidParameterValueException` exception.
         *
         * For more information about Windows VSS backups, see [Creating a VSS-Enabled Windows Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/windows-backups.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-advancedbackupsettingresourcetype.html#cfn-backup-backupplan-advancedbackupsettingresourcetype-backupoptions
         */
        readonly backupOptions: any | cdk.IResolvable;
        /**
         * The name of a resource type.
         *
         * The only supported resource type is EC2.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-advancedbackupsettingresourcetype.html#cfn-backup-backupplan-advancedbackupsettingresourcetype-resourcetype
         */
        readonly resourceType: string;
    }
    /**
     * Specifies an object containing properties used to schedule a task to back up a selection of resources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html
     */
    interface BackupRuleResourceTypeProperty {
        /**
         * A value in minutes after a backup job is successfully started before it must be completed or it is canceled by AWS Backup .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html#cfn-backup-backupplan-backupruleresourcetype-completionwindowminutes
         */
        readonly completionWindowMinutes?: number;
        /**
         * An array of CopyAction objects, which contains the details of the copy operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html#cfn-backup-backupplan-backupruleresourcetype-copyactions
         */
        readonly copyActions?: Array<CfnBackupPlan.CopyActionResourceTypeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Enables continuous backup and point-in-time restores (PITR).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html#cfn-backup-backupplan-backupruleresourcetype-enablecontinuousbackup
         */
        readonly enableContinuousBackup?: boolean | cdk.IResolvable;
        /**
         * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires.
         *
         * AWS Backup transitions and expires backups automatically according to the lifecycle that you define.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html#cfn-backup-backupplan-backupruleresourcetype-lifecycle
         */
        readonly lifecycle?: cdk.IResolvable | CfnBackupPlan.LifecycleResourceTypeProperty;
        /**
         * The tags to assign to the resources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html#cfn-backup-backupplan-backupruleresourcetype-recoverypointtags
         */
        readonly recoveryPointTags?: cdk.IResolvable | Record<string, string>;
        /**
         * A display name for a backup rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html#cfn-backup-backupplan-backupruleresourcetype-rulename
         */
        readonly ruleName: string;
        /**
         * A CRON expression specifying when AWS Backup initiates a backup job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html#cfn-backup-backupplan-backupruleresourcetype-scheduleexpression
         */
        readonly scheduleExpression?: string;
        /**
         * This is the timezone in which the schedule expression is set.
         *
         * By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html#cfn-backup-backupplan-backupruleresourcetype-scheduleexpressiontimezone
         */
        readonly scheduleExpressionTimezone?: string;
        /**
         * An optional value that specifies a period of time in minutes after a backup is scheduled before a job is canceled if it doesn't start successfully.
         *
         * If this value is included, it must be at least 60 minutes to avoid errors.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html#cfn-backup-backupplan-backupruleresourcetype-startwindowminutes
         */
        readonly startWindowMinutes?: number;
        /**
         * The name of a logical container where backups are stored.
         *
         * Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of letters, numbers, and hyphens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html#cfn-backup-backupplan-backupruleresourcetype-targetbackupvault
         */
        readonly targetBackupVault: string;
    }
    /**
     * Copies backups created by a backup rule to another vault.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-copyactionresourcetype.html
     */
    interface CopyActionResourceTypeProperty {
        /**
         * An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup.
         *
         * For example, `arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-copyactionresourcetype.html#cfn-backup-backupplan-copyactionresourcetype-destinationbackupvaultarn
         */
        readonly destinationBackupVaultArn: string;
        /**
         * Defines when a protected resource is transitioned to cold storage and when it expires.
         *
         * AWS Backup transitions and expires backups automatically according to the lifecycle that you define. If you do not specify a lifecycle, AWS Backup applies the lifecycle policy of the source backup to the destination backup.
         *
         * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-copyactionresourcetype.html#cfn-backup-backupplan-copyactionresourcetype-lifecycle
         */
        readonly lifecycle?: cdk.IResolvable | CfnBackupPlan.LifecycleResourceTypeProperty;
    }
    /**
     * Specifies an object containing an array of `Transition` objects that determine how long in days before a recovery point transitions to cold storage or is deleted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-lifecycleresourcetype.html
     */
    interface LifecycleResourceTypeProperty {
        /**
         * Specifies the number of days after creation that a recovery point is deleted.
         *
         * Must be greater than `MoveToColdStorageAfterDays` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-lifecycleresourcetype.html#cfn-backup-backupplan-lifecycleresourcetype-deleteafterdays
         */
        readonly deleteAfterDays?: number;
        /**
         * Specifies the number of days after creation that a recovery point is moved to cold storage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-lifecycleresourcetype.html#cfn-backup-backupplan-lifecycleresourcetype-movetocoldstorageafterdays
         */
        readonly moveToColdStorageAfterDays?: number;
        /**
         * If the value is true, your backup plan transitions supported resources to archive (cold) storage tier in accordance with your lifecycle settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-lifecycleresourcetype.html#cfn-backup-backupplan-lifecycleresourcetype-optintoarchiveforsupportedresources
         */
        readonly optInToArchiveForSupportedResources?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnBackupPlan`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html
 */
export interface CfnBackupPlanProps {
    /**
     * Uniquely identifies the backup plan to be associated with the selection of resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupplan
     */
    readonly backupPlan: CfnBackupPlan.BackupPlanResourceTypeProperty | cdk.IResolvable;
    /**
     * The tags to assign to the backup plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupplantags
     */
    readonly backupPlanTags?: Record<string, string>;
}
/**
 * Specifies a set of resources to assign to a backup plan.
 *
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn) .
 *
 * @cloudformationResource AWS::Backup::BackupSelection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html
 */
export declare class CfnBackupSelection extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBackupSelection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBackupSelection;
    /**
     * Uniquely identifies a backup plan.
     *
     * @cloudformationAttribute BackupPlanId
     */
    readonly attrBackupPlanId: string;
    /**
     * Uniquely identifies the backup selection.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Uniquely identifies a request to assign a set of resources to a backup plan.
     *
     * @cloudformationAttribute SelectionId
     */
    readonly attrSelectionId: string;
    /**
     * Uniquely identifies a backup plan.
     */
    backupPlanId: string;
    /**
     * Specifies the body of a request to assign a set of resources to a backup plan.
     */
    backupSelection: CfnBackupSelection.BackupSelectionResourceTypeProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBackupSelectionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBackupSelection {
    /**
     * Specifies an object containing properties used to assign a set of resources to a backup plan.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-backupselectionresourcetype.html
     */
    interface BackupSelectionResourceTypeProperty {
        /**
         * A list of conditions that you define to assign resources to your backup plans using tags.
         *
         * For example, `"StringEquals": { "ConditionKey": "aws:ResourceTag/CreatedByCryo", "ConditionValue": "true" },` . Condition operators are case sensitive.
         *
         * `Conditions` differs from `ListOfTags` as follows:
         *
         * - When you specify more than one condition, you only assign the resources that match ALL conditions (using AND logic).
         * - `Conditions` supports `StringEquals` , `StringLike` , `StringNotEquals` , and `StringNotLike` . `ListOfTags` only supports `StringEquals` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-backupselectionresourcetype.html#cfn-backup-backupselection-backupselectionresourcetype-conditions
         */
        readonly conditions?: any | cdk.IResolvable;
        /**
         * The ARN of the IAM role that AWS Backup uses to authenticate when backing up the target resource;
         *
         * for example, `arn:aws:iam::123456789012:role/S3Access` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-backupselectionresourcetype.html#cfn-backup-backupselection-backupselectionresourcetype-iamrolearn
         */
        readonly iamRoleArn: string;
        /**
         * A list of conditions that you define to assign resources to your backup plans using tags.
         *
         * For example, `"StringEquals": { "ConditionKey": "aws:ResourceTag/CreatedByCryo", "ConditionValue": "true" },` . Condition operators are case sensitive.
         *
         * `ListOfTags` differs from `Conditions` as follows:
         *
         * - When you specify more than one condition, you assign all resources that match AT LEAST ONE condition (using OR logic).
         * - `ListOfTags` only supports `StringEquals` . `Conditions` supports `StringEquals` , `StringLike` , `StringNotEquals` , and `StringNotLike` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-backupselectionresourcetype.html#cfn-backup-backupselection-backupselectionresourcetype-listoftags
         */
        readonly listOfTags?: Array<CfnBackupSelection.ConditionResourceTypeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of Amazon Resource Names (ARNs) to exclude from a backup plan.
         *
         * The maximum number of ARNs is 500 without wildcards, or 30 ARNs with wildcards.
         *
         * If you need to exclude many resources from a backup plan, consider a different resource selection strategy, such as assigning only one or a few resource types or refining your resource selection using tags.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-backupselectionresourcetype.html#cfn-backup-backupselection-backupselectionresourcetype-notresources
         */
        readonly notResources?: Array<string>;
        /**
         * An array of strings that contain Amazon Resource Names (ARNs) of resources to assign to a backup plan.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-backupselectionresourcetype.html#cfn-backup-backupselection-backupselectionresourcetype-resources
         */
        readonly resources?: Array<string>;
        /**
         * The display name of a resource selection document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-backupselectionresourcetype.html#cfn-backup-backupselection-backupselectionresourcetype-selectionname
         */
        readonly selectionName: string;
    }
    /**
     * Specifies an object that contains an array of triplets made up of a condition type (such as `STRINGEQUALS` ), a key, and a value.
     *
     * Conditions are used to filter resources in a selection that is assigned to a backup plan.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionresourcetype.html
     */
    interface ConditionResourceTypeProperty {
        /**
         * The key in a key-value pair.
         *
         * For example, in `"Department": "accounting"` , `"Department"` is the key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionresourcetype.html#cfn-backup-backupselection-conditionresourcetype-conditionkey
         */
        readonly conditionKey: string;
        /**
         * An operation, such as `STRINGEQUALS` , that is applied to a key-value pair used to filter resources in a selection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionresourcetype.html#cfn-backup-backupselection-conditionresourcetype-conditiontype
         */
        readonly conditionType: string;
        /**
         * The value in a key-value pair.
         *
         * For example, in `"Department": "accounting"` , `"accounting"` is the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionresourcetype.html#cfn-backup-backupselection-conditionresourcetype-conditionvalue
         */
        readonly conditionValue: string;
    }
    /**
     * Includes information about tags you define to assign tagged resources to a backup plan.
     *
     * Include the prefix `aws:ResourceTag` in your tags. For example, `"aws:ResourceTag/TagKey1": "Value1"` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionparameter.html
     */
    interface ConditionParameterProperty {
        /**
         * The key in a key-value pair.
         *
         * For example, in the tag `Department: Accounting` , `Department` is the key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionparameter.html#cfn-backup-backupselection-conditionparameter-conditionkey
         */
        readonly conditionKey?: string;
        /**
         * The value in a key-value pair.
         *
         * For example, in the tag `Department: Accounting` , `Accounting` is the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionparameter.html#cfn-backup-backupselection-conditionparameter-conditionvalue
         */
        readonly conditionValue?: string;
    }
    /**
     * Contains information about which resources to include or exclude from a backup plan using their tags.
     *
     * Conditions are case sensitive.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditions.html
     */
    interface ConditionsProperty {
        /**
         * Filters the values of your tagged resources for only those resources that you tagged with the same value.
         *
         * Also called "exact matching."
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditions.html#cfn-backup-backupselection-conditions-stringequals
         */
        readonly stringEquals?: Array<CfnBackupSelection.ConditionParameterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Filters the values of your tagged resources for matching tag values with the use of a wildcard character (*) anywhere in the string.
         *
         * For example, "prod*" or "*rod*" matches the tag value "production".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditions.html#cfn-backup-backupselection-conditions-stringlike
         */
        readonly stringLike?: Array<CfnBackupSelection.ConditionParameterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Filters the values of your tagged resources for only those resources that you tagged that do not have the same value.
         *
         * Also called "negated matching."
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditions.html#cfn-backup-backupselection-conditions-stringnotequals
         */
        readonly stringNotEquals?: Array<CfnBackupSelection.ConditionParameterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Filters the values of your tagged resources for non-matching tag values with the use of a wildcard character (*) anywhere in the string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditions.html#cfn-backup-backupselection-conditions-stringnotlike
         */
        readonly stringNotLike?: Array<CfnBackupSelection.ConditionParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnBackupSelection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html
 */
export interface CfnBackupSelectionProps {
    /**
     * Uniquely identifies a backup plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-backupplanid
     */
    readonly backupPlanId: string;
    /**
     * Specifies the body of a request to assign a set of resources to a backup plan.
     *
     * It includes an array of resources, an optional array of patterns to exclude resources, an optional role to provide access to the AWS service the resource belongs to, and an optional array of tags used to identify a set of resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-backupselection
     */
    readonly backupSelection: CfnBackupSelection.BackupSelectionResourceTypeProperty | cdk.IResolvable;
}
/**
 * Creates a logical container where backups are stored.
 *
 * A `CreateBackupVault` request includes a name, optionally one or more resource tags, an encryption key, and a request ID.
 *
 * Do not include sensitive data, such as passport numbers, in the name of a backup vault.
 *
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn) .
 *
 * @cloudformationResource AWS::Backup::BackupVault
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html
 */
export declare class CfnBackupVault extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBackupVault from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBackupVault;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault` .
     *
     * @cloudformationAttribute BackupVaultArn
     */
    readonly attrBackupVaultArn: string;
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase and uppercase letters, numbers, and hyphens.
     *
     * @cloudformationAttribute BackupVaultName
     */
    readonly attrBackupVaultName: string;
    /**
     * A resource-based policy that is used to manage access permissions on the target backup vault.
     */
    accessPolicy?: any | cdk.IResolvable;
    /**
     * The name of a logical container where backups are stored.
     */
    backupVaultName: string;
    /**
     * The tags to assign to the backup vault.
     */
    backupVaultTags?: Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A server-side encryption key you can specify to encrypt your backups from services that support full AWS Backup management;
     */
    encryptionKeyArn?: string;
    /**
     * Configuration for [AWS Backup Vault Lock](https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html) .
     */
    lockConfiguration?: cdk.IResolvable | CfnBackupVault.LockConfigurationTypeProperty;
    /**
     * The SNS event notifications for the specified backup vault.
     */
    notifications?: cdk.IResolvable | CfnBackupVault.NotificationObjectTypeProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBackupVaultProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBackupVault {
    /**
     * The `LockConfigurationType` property type specifies configuration for [AWS Backup Vault Lock](https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-lockconfigurationtype.html
     */
    interface LockConfigurationTypeProperty {
        /**
         * The AWS Backup Vault Lock configuration that specifies the number of days before the lock date.
         *
         * For example, setting `ChangeableForDays` to 30 on Jan. 1, 2022 at 8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC.
         *
         * AWS Backup enforces a 72-hour cooling-off period before Vault Lock takes effect and becomes immutable. Therefore, you must set `ChangeableForDays` to 3 or greater.
         *
         * Before the lock date, you can delete Vault Lock from the vault using `DeleteBackupVaultLockConfiguration` or change the Vault Lock configuration using `PutBackupVaultLockConfiguration` . On and after the lock date, the Vault Lock becomes immutable and cannot be changed or deleted.
         *
         * If this parameter is not specified, you can delete Vault Lock from the vault using `DeleteBackupVaultLockConfiguration` or change the Vault Lock configuration using `PutBackupVaultLockConfiguration` at any time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-lockconfigurationtype.html#cfn-backup-backupvault-lockconfigurationtype-changeablefordays
         */
        readonly changeableForDays?: number;
        /**
         * The AWS Backup Vault Lock configuration that specifies the maximum retention period that the vault retains its recovery points.
         *
         * This setting can be useful if, for example, your organization's policies require you to destroy certain data after retaining it for four years (1460 days).
         *
         * If this parameter is not included, Vault Lock does not enforce a maximum retention period on the recovery points in the vault. If this parameter is included without a value, Vault Lock will not enforce a maximum retention period.
         *
         * If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already saved in the vault prior to Vault Lock are not affected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-lockconfigurationtype.html#cfn-backup-backupvault-lockconfigurationtype-maxretentiondays
         */
        readonly maxRetentionDays?: number;
        /**
         * The AWS Backup Vault Lock configuration that specifies the minimum retention period that the vault retains its recovery points.
         *
         * This setting can be useful if, for example, your organization's policies require you to retain certain data for at least seven years (2555 days).
         *
         * If this parameter is not specified, Vault Lock will not enforce a minimum retention period.
         *
         * If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails that backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already saved in the vault prior to Vault Lock are not affected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-lockconfigurationtype.html#cfn-backup-backupvault-lockconfigurationtype-minretentiondays
         */
        readonly minRetentionDays: number;
    }
    /**
     * Specifies an object containing SNS event notification properties for the target backup vault.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-notificationobjecttype.html
     */
    interface NotificationObjectTypeProperty {
        /**
         * An array of events that indicate the status of jobs to back up resources to the backup vault.
         *
         * For valid events, see [BackupVaultEvents](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultNotifications.html#API_PutBackupVaultNotifications_RequestSyntax) in the *AWS Backup API Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-notificationobjecttype.html#cfn-backup-backupvault-notificationobjecttype-backupvaultevents
         */
        readonly backupVaultEvents: Array<string>;
        /**
         * An ARN that uniquely identifies an Amazon Simple Notification Service (Amazon SNS) topic;
         *
         * for example, `arn:aws:sns:us-west-2:111122223333:MyTopic` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-notificationobjecttype.html#cfn-backup-backupvault-notificationobjecttype-snstopicarn
         */
        readonly snsTopicArn: string;
    }
}
/**
 * Properties for defining a `CfnBackupVault`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html
 */
export interface CfnBackupVaultProps {
    /**
     * A resource-based policy that is used to manage access permissions on the target backup vault.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-accesspolicy
     */
    readonly accessPolicy?: any | cdk.IResolvable;
    /**
     * The name of a logical container where backups are stored.
     *
     * Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-backupvaultname
     */
    readonly backupVaultName: string;
    /**
     * The tags to assign to the backup vault.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-backupvaulttags
     */
    readonly backupVaultTags?: Record<string, string>;
    /**
     * A server-side encryption key you can specify to encrypt your backups from services that support full AWS Backup management;
     *
     * for example, `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab` . If you specify a key, you must specify its ARN, not its alias. If you do not specify a key, AWS Backup creates a KMS key for you by default.
     *
     * To learn which AWS Backup services support full AWS Backup management and how AWS Backup handles encryption for backups from services that do not yet support full AWS Backup , see [Encryption for backups in AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/encryption.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-encryptionkeyarn
     */
    readonly encryptionKeyArn?: string;
    /**
     * Configuration for [AWS Backup Vault Lock](https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-lockconfiguration
     */
    readonly lockConfiguration?: cdk.IResolvable | CfnBackupVault.LockConfigurationTypeProperty;
    /**
     * The SNS event notifications for the specified backup vault.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-notifications
     */
    readonly notifications?: cdk.IResolvable | CfnBackupVault.NotificationObjectTypeProperty;
}
/**
 * Creates a framework with one or more controls.
 *
 * A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance.
 *
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/bam-cfn-integration.html#bam-cfn-frameworks-template) .
 *
 * @cloudformationResource AWS::Backup::Framework
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html
 */
export declare class CfnFramework extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFramework from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFramework;
    /**
     * The UTC time when you created your framework.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * Depolyment status refers to whether your framework has completed deployment. This status is usually `Completed` , but might also be `Create in progress` or another status. For a list of statuses, see [Framework compliance status](https://docs.aws.amazon.com/aws-backup/latest/devguide/viewing-frameworks.html) in the *Developer Guide* .
     *
     * @cloudformationAttribute DeploymentStatus
     */
    readonly attrDeploymentStatus: string;
    /**
     * The Amazon Resource Name (ARN) of your framework.
     *
     * @cloudformationAttribute FrameworkArn
     */
    readonly attrFrameworkArn: string;
    /**
     * Framework status refers to whether you have turned on resource tracking for all of your resources. This status is `Active` when you turn on all resources the framework evaluates. For other statuses and steps to correct them, see [Framework compliance status](https://docs.aws.amazon.com/aws-backup/latest/devguide/viewing-frameworks.html) in the *Developer Guide* .
     *
     * @cloudformationAttribute FrameworkStatus
     */
    readonly attrFrameworkStatus: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Contains detailed information about all of the controls of a framework.
     */
    frameworkControls: Array<CfnFramework.FrameworkControlProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An optional description of the framework with a maximum 1,024 characters.
     */
    frameworkDescription?: string;
    /**
     * The unique name of a framework.
     */
    frameworkName?: string;
    /**
     * The tags to assign to your framework.
     */
    frameworkTags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFrameworkProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFramework {
    /**
     * Contains detailed information about all of the controls of a framework.
     *
     * Each framework must contain at least one control.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html
     */
    interface FrameworkControlProperty {
        /**
         * The name/value pairs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html#cfn-backup-framework-frameworkcontrol-controlinputparameters
         */
        readonly controlInputParameters?: Array<CfnFramework.ControlInputParameterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of a control.
         *
         * This name is between 1 and 256 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html#cfn-backup-framework-frameworkcontrol-controlname
         */
        readonly controlName: string;
        /**
         * The scope of a control.
         *
         * The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.
         *
         * For more information, see [`ControlScope` .](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ControlScope.html)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html#cfn-backup-framework-frameworkcontrol-controlscope
         */
        readonly controlScope?: any | cdk.IResolvable;
    }
    /**
     * The parameters for a control.
     *
     * A control can have zero, one, or more than one parameter. An example of a control with two parameters is: "backup plan frequency is at least `daily` and the retention period is at least `1 year` ". The first parameter is `daily` . The second parameter is `1 year` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlinputparameter.html
     */
    interface ControlInputParameterProperty {
        /**
         * The name of a parameter, for example, `BackupPlanFrequency` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlinputparameter.html#cfn-backup-framework-controlinputparameter-parametername
         */
        readonly parameterName: string;
        /**
         * The value of parameter, for example, `hourly` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlinputparameter.html#cfn-backup-framework-controlinputparameter-parametervalue
         */
        readonly parameterValue: string;
    }
    /**
     * A framework consists of one or more controls.
     *
     * Each control has its own control scope. The control scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. If no scope is specified, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
     *
     * > To set a control scope that includes all of a particular resource, leave the `ControlScope` empty or do not pass it when calling `CreateFramework` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlscope.html
     */
    interface ControlScopeProperty {
        /**
         * The ID of the only AWS resource that you want your control scope to contain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlscope.html#cfn-backup-framework-controlscope-complianceresourceids
         */
        readonly complianceResourceIds?: Array<string>;
        /**
         * Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlscope.html#cfn-backup-framework-controlscope-complianceresourcetypes
         */
        readonly complianceResourceTypes?: Array<string>;
        /**
         * The tag key-value pair applied to those AWS resources that you want to trigger an evaluation for a rule.
         *
         * A maximum of one key-value pair can be provided. The tag value is optional, but it cannot be an empty string if you are creating or editing a framework from the console (though the value can be an empty string when included in a CloudFormation template).
         *
         * The structure to assign a tag is: `[{"Key":"string","Value":"string"}]` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlscope.html#cfn-backup-framework-controlscope-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
}
/**
 * Properties for defining a `CfnFramework`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html
 */
export interface CfnFrameworkProps {
    /**
     * Contains detailed information about all of the controls of a framework.
     *
     * Each framework must contain at least one control.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkcontrols
     */
    readonly frameworkControls: Array<CfnFramework.FrameworkControlProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An optional description of the framework with a maximum 1,024 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkdescription
     */
    readonly frameworkDescription?: string;
    /**
     * The unique name of a framework.
     *
     * This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkname
     */
    readonly frameworkName?: string;
    /**
     * The tags to assign to your framework.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworktags
     */
    readonly frameworkTags?: Array<cdk.CfnTag>;
}
/**
 * Creates a report plan.
 *
 * A report plan is a document that contains information about the contents of the report and where AWS Backup will deliver it.
 *
 * If you call `CreateReportPlan` with a plan that already exists, you receive an `AlreadyExistsException` exception.
 *
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn) .
 *
 * @cloudformationResource AWS::Backup::ReportPlan
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html
 */
export declare class CfnReportPlan extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReportPlan from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReportPlan;
    /**
     * The Amazon Resource Name (ARN) of your report plan.
     *
     * @cloudformationAttribute ReportPlanArn
     */
    readonly attrReportPlanArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
     */
    reportDeliveryChannel: any | cdk.IResolvable;
    /**
     * An optional description of the report plan with a maximum 1,024 characters.
     */
    reportPlanDescription?: string;
    /**
     * The unique name of the report plan.
     */
    reportPlanName?: string;
    /**
     * The tags to assign to your report plan.
     */
    reportPlanTags?: Array<cdk.CfnTag>;
    /**
     * Identifies the report template for the report. Reports are built using a report template. The report templates are:.
     */
    reportSetting: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReportPlanProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReportPlan {
    /**
     * Contains detailed information about a report setting.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportsetting.html
     */
    interface ReportSettingProperty {
        /**
         * These are the accounts to be included in the report.
         *
         * Use string value of `ROOT` to include all organizational units.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportsetting.html#cfn-backup-reportplan-reportsetting-accounts
         */
        readonly accounts?: Array<string>;
        /**
         * The Amazon Resource Names (ARNs) of the frameworks a report covers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportsetting.html#cfn-backup-reportplan-reportsetting-frameworkarns
         */
        readonly frameworkArns?: Array<string>;
        /**
         * These are the Organizational Units to be included in the report.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportsetting.html#cfn-backup-reportplan-reportsetting-organizationunits
         */
        readonly organizationUnits?: Array<string>;
        /**
         * These are the Regions to be included in the report.
         *
         * Use the wildcard as the string value to include all Regions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportsetting.html#cfn-backup-reportplan-reportsetting-regions
         */
        readonly regions?: Array<string>;
        /**
         * Identifies the report template for the report. Reports are built using a report template. The report templates are:.
         *
         * `RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportsetting.html#cfn-backup-reportplan-reportsetting-reporttemplate
         */
        readonly reportTemplate: string;
    }
    /**
     * Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportdeliverychannel.html
     */
    interface ReportDeliveryChannelProperty {
        /**
         * The format of your reports: `CSV` , `JSON` , or both.
         *
         * If not specified, the default format is `CSV` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportdeliverychannel.html#cfn-backup-reportplan-reportdeliverychannel-formats
         */
        readonly formats?: Array<string>;
        /**
         * The unique name of the S3 bucket that receives your reports.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportdeliverychannel.html#cfn-backup-reportplan-reportdeliverychannel-s3bucketname
         */
        readonly s3BucketName: string;
        /**
         * The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3.
         *
         * The prefix is this part of the following path: s3://your-bucket-name/ `prefix` /Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportdeliverychannel.html#cfn-backup-reportplan-reportdeliverychannel-s3keyprefix
         */
        readonly s3KeyPrefix?: string;
    }
}
/**
 * Properties for defining a `CfnReportPlan`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html
 */
export interface CfnReportPlanProps {
    /**
     * Contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportdeliverychannel
     */
    readonly reportDeliveryChannel: any | cdk.IResolvable;
    /**
     * An optional description of the report plan with a maximum 1,024 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportplandescription
     */
    readonly reportPlanDescription?: string;
    /**
     * The unique name of the report plan.
     *
     * This name is between 1 and 256 characters starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportplanname
     */
    readonly reportPlanName?: string;
    /**
     * The tags to assign to your report plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportplantags
     */
    readonly reportPlanTags?: Array<cdk.CfnTag>;
    /**
     * Identifies the report template for the report. Reports are built using a report template. The report templates are:.
     *
     * `RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`
     *
     * If the report template is `RESOURCE_COMPLIANCE_REPORT` or `CONTROL_COMPLIANCE_REPORT` , this API resource also describes the report coverage by AWS Regions and frameworks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportsetting
     */
    readonly reportSetting: any | cdk.IResolvable;
}
/**
 * Creates a restore testing plan.
 *
 * The first of two steps to create a restore testing plan. After this request is successful, finish the procedure using CreateRestoreTestingSelection.
 *
 * @cloudformationResource AWS::Backup::RestoreTestingPlan
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html
 */
export declare class CfnRestoreTestingPlan extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRestoreTestingPlan from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRestoreTestingPlan;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a restore testing plan.
     *
     * @cloudformationAttribute RestoreTestingPlanArn
     */
    readonly attrRestoreTestingPlanArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The specified criteria to assign a set of resources, such as recovery point types or backup vaults.
     */
    recoveryPointSelection: cdk.IResolvable | CfnRestoreTestingPlan.RestoreTestingRecoveryPointSelectionProperty;
    /**
     * The RestoreTestingPlanName is a unique string that is the name of the restore testing plan.
     */
    restoreTestingPlanName: string;
    /**
     * A CRON expression in specified timezone when a restore testing plan is executed.
     */
    scheduleExpression: string;
    /**
     * Optional.
     */
    scheduleExpressionTimezone?: string;
    /**
     * Defaults to 24 hours.
     */
    startWindowHours?: number;
    /**
     * Optional tags to include.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRestoreTestingPlanProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRestoreTestingPlan {
    /**
     * `RecoveryPointSelection` has five parameters (three required and two optional).
     *
     * The values you specify determine which recovery point is included in the restore test. You must indicate with `Algorithm` if you want the latest recovery point within your `SelectionWindowDays` or if you want a random recovery point, and you must indicate through `IncludeVaults` from which vaults the recovery points can be chosen.
     *
     * `Algorithm` ( *required* ) Valid values: " `LATEST_WITHIN_WINDOW` " or " `RANDOM_WITHIN_WINDOW` ".
     *
     * `Recovery point types` ( *required* ) Valid values: " `SNAPSHOT` " and/or " `CONTINUOUS` ". Include `SNAPSHOT` to restore only snapshot recovery points; include `CONTINUOUS` to restore continuous recovery points (point in time restore / PITR); use both to restore either a snapshot or a continuous recovery point. The recovery point will be determined by the value for `Algorithm` .
     *
     * `IncludeVaults` ( *required* ). You must include one or more backup vaults. Use the wildcard ["*"] or specific ARNs.
     *
     * `SelectionWindowDays` ( *optional* ) Value must be an integer (in days) from 1 to 365. If not included, the value defaults to `30` .
     *
     * `ExcludeVaults` ( *optional* ). You can choose to input one or more specific backup vault ARNs to exclude those vaults' contents from restore eligibility. Or, you can include a list of selectors. If this parameter and its value are not included, it defaults to empty list.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-restoretestingrecoverypointselection.html
     */
    interface RestoreTestingRecoveryPointSelectionProperty {
        /**
         * Acceptable values include "LATEST_WITHIN_WINDOW" or "RANDOM_WITHIN_WINDOW".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-restoretestingrecoverypointselection.html#cfn-backup-restoretestingplan-restoretestingrecoverypointselection-algorithm
         */
        readonly algorithm: string;
        /**
         * Accepted values include specific ARNs or list of selectors.
         *
         * Defaults to empty list if not listed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-restoretestingrecoverypointselection.html#cfn-backup-restoretestingplan-restoretestingrecoverypointselection-excludevaults
         */
        readonly excludeVaults?: Array<string>;
        /**
         * Accepted values include wildcard ["*"] or by specific ARNs or ARN wilcard replacement ["arn:aws:backup:us-west-2:123456789012:backup-vault:asdf", ...] ["arn:aws:backup:*:*:backup-vault:asdf-*", ...].
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-restoretestingrecoverypointselection.html#cfn-backup-restoretestingplan-restoretestingrecoverypointselection-includevaults
         */
        readonly includeVaults: Array<string>;
        /**
         * These are the types of recovery points.
         *
         * Include `SNAPSHOT` to restore only snapshot recovery points; include `CONTINUOUS` to restore continuous recovery points (point in time restore / PITR); use both to restore either a snapshot or a continuous recovery point. The recovery point will be determined by the value for `Algorithm` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-restoretestingrecoverypointselection.html#cfn-backup-restoretestingplan-restoretestingrecoverypointselection-recoverypointtypes
         */
        readonly recoveryPointTypes: Array<string>;
        /**
         * Accepted values are integers from 1 to 365.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-restoretestingrecoverypointselection.html#cfn-backup-restoretestingplan-restoretestingrecoverypointselection-selectionwindowdays
         */
        readonly selectionWindowDays?: number;
    }
}
/**
 * Properties for defining a `CfnRestoreTestingPlan`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html
 */
export interface CfnRestoreTestingPlanProps {
    /**
     * The specified criteria to assign a set of resources, such as recovery point types or backup vaults.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-recoverypointselection
     */
    readonly recoveryPointSelection: cdk.IResolvable | CfnRestoreTestingPlan.RestoreTestingRecoveryPointSelectionProperty;
    /**
     * The RestoreTestingPlanName is a unique string that is the name of the restore testing plan.
     *
     * This cannot be changed after creation, and it must consist of only alphanumeric characters and underscores.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-restoretestingplanname
     */
    readonly restoreTestingPlanName: string;
    /**
     * A CRON expression in specified timezone when a restore testing plan is executed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-scheduleexpression
     */
    readonly scheduleExpression: string;
    /**
     * Optional.
     *
     * This is the timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-scheduleexpressiontimezone
     */
    readonly scheduleExpressionTimezone?: string;
    /**
     * Defaults to 24 hours.
     *
     * A value in hours after a restore test is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, this parameter has a maximum value of 168 hours (one week).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-startwindowhours
     */
    readonly startWindowHours?: number;
    /**
     * Optional tags to include.
     *
     * A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters,numbers, spaces, and the following characters: `+ - = . _ : /.`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * This request can be sent after CreateRestoreTestingPlan request returns successfully.
 *
 * This is the second part of creating a resource testing plan, and it must be completed sequentially.
 *
 * This consists of `RestoreTestingSelectionName` , `ProtectedResourceType` , and one of the following:
 *
 * - `ProtectedResourceArns`
 * - `ProtectedResourceConditions`
 *
 * Each protected resource type can have one single value.
 *
 * A restore testing selection can include a wildcard value ("*") for `ProtectedResourceArns` along with `ProtectedResourceConditions` . Alternatively, you can include up to 30 specific protected resource ARNs in `ProtectedResourceArns` .
 *
 * Cannot select by both protected resource types AND specific ARNs. Request will fail if both are included.
 *
 * @cloudformationResource AWS::Backup::RestoreTestingSelection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html
 */
export declare class CfnRestoreTestingSelection extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRestoreTestingSelection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRestoreTestingSelection;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that AWS Backup uses to create the target resource;
     */
    iamRoleArn: string;
    /**
     * You can include specific ARNs, such as `ProtectedResourceArns: ["arn:aws:...", "arn:aws:..."]` or you can include a wildcard: `ProtectedResourceArns: ["*"]` , but not both.
     */
    protectedResourceArns?: Array<string>;
    /**
     * In a resource testing selection, this parameter filters by specific conditions such as `StringEquals` or `StringNotEquals` .
     */
    protectedResourceConditions?: cdk.IResolvable | CfnRestoreTestingSelection.ProtectedResourceConditionsProperty;
    /**
     * The type of AWS resource included in a resource testing selection;
     */
    protectedResourceType: string;
    /**
     * You can override certain restore metadata keys by including the parameter `RestoreMetadataOverrides` in the body of `RestoreTestingSelection` .
     */
    restoreMetadataOverrides?: cdk.IResolvable | Record<string, string>;
    /**
     * Unique string that is the name of the restore testing plan.
     */
    restoreTestingPlanName: string;
    /**
     * The unique name of the restore testing selection that belongs to the related restore testing plan.
     */
    restoreTestingSelectionName: string;
    /**
     * This is amount of hours (1 to 168) available to run a validation script on the data.
     */
    validationWindowHours?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRestoreTestingSelectionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRestoreTestingSelection {
    /**
     * The conditions that you define for resources in your restore testing plan using tags.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingselection-protectedresourceconditions.html
     */
    interface ProtectedResourceConditionsProperty {
        /**
         * Filters the values of your tagged resources for only those resources that you tagged with the same value.
         *
         * Also called "exact matching."
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingselection-protectedresourceconditions.html#cfn-backup-restoretestingselection-protectedresourceconditions-stringequals
         */
        readonly stringEquals?: Array<cdk.IResolvable | CfnRestoreTestingSelection.KeyValueProperty> | cdk.IResolvable;
        /**
         * Filters the values of your tagged resources for only those resources that you tagged that do not have the same value.
         *
         * Also called "negated matching."
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingselection-protectedresourceconditions.html#cfn-backup-restoretestingselection-protectedresourceconditions-stringnotequals
         */
        readonly stringNotEquals?: Array<cdk.IResolvable | CfnRestoreTestingSelection.KeyValueProperty> | cdk.IResolvable;
    }
    /**
     * Pair of two related strings.
     *
     * Allowed characters are letters, white space, and numbers that can be represented in UTF-8 and the following characters: `+ - = . _ : /`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingselection-keyvalue.html
     */
    interface KeyValueProperty {
        /**
         * The tag key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingselection-keyvalue.html#cfn-backup-restoretestingselection-keyvalue-key
         */
        readonly key: string;
        /**
         * The tag value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingselection-keyvalue.html#cfn-backup-restoretestingselection-keyvalue-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnRestoreTestingSelection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html
 */
export interface CfnRestoreTestingSelectionProps {
    /**
     * The Amazon Resource Name (ARN) of the IAM role that AWS Backup uses to create the target resource;
     *
     * for example: `arn:aws:iam::123456789012:role/S3Access` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-iamrolearn
     */
    readonly iamRoleArn: string;
    /**
     * You can include specific ARNs, such as `ProtectedResourceArns: ["arn:aws:...", "arn:aws:..."]` or you can include a wildcard: `ProtectedResourceArns: ["*"]` , but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-protectedresourcearns
     */
    readonly protectedResourceArns?: Array<string>;
    /**
     * In a resource testing selection, this parameter filters by specific conditions such as `StringEquals` or `StringNotEquals` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-protectedresourceconditions
     */
    readonly protectedResourceConditions?: cdk.IResolvable | CfnRestoreTestingSelection.ProtectedResourceConditionsProperty;
    /**
     * The type of AWS resource included in a resource testing selection;
     *
     * for example, an Amazon EBS volume or an Amazon RDS database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-protectedresourcetype
     */
    readonly protectedResourceType: string;
    /**
     * You can override certain restore metadata keys by including the parameter `RestoreMetadataOverrides` in the body of `RestoreTestingSelection` .
     *
     * Key values are not case sensitive.
     *
     * See the complete list of [restore testing inferred metadata](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-inferred-metadata.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-restoremetadataoverrides
     */
    readonly restoreMetadataOverrides?: cdk.IResolvable | Record<string, string>;
    /**
     * Unique string that is the name of the restore testing plan.
     *
     * The name cannot be changed after creation. The name must consist of only alphanumeric characters and underscores. Maximum length is 50.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-restoretestingplanname
     */
    readonly restoreTestingPlanName: string;
    /**
     * The unique name of the restore testing selection that belongs to the related restore testing plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-restoretestingselectionname
     */
    readonly restoreTestingSelectionName: string;
    /**
     * This is amount of hours (1 to 168) available to run a validation script on the data.
     *
     * The data will be deleted upon the completion of the validation script or the end of the specified retention period, whichever comes first.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-validationwindowhours
     */
    readonly validationWindowHours?: number;
}
