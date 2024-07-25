import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies an experiment template.
 *
 * An experiment template includes the following components:
 *
 * - *Targets* : A target can be a specific resource in your AWS environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.
 * - *Actions* : The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.
 * - *Stop conditions* : If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.
 *
 * For more information, see [Experiment templates](https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html) in the *AWS Fault Injection Service User Guide* .
 *
 * @cloudformationResource AWS::FIS::ExperimentTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html
 */
export declare class CfnExperimentTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnExperimentTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnExperimentTemplate;
    /**
     * The ID of the experiment template.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The actions for the experiment.
     */
    actions?: cdk.IResolvable | Record<string, CfnExperimentTemplate.ExperimentTemplateActionProperty | cdk.IResolvable>;
    /**
     * The description for the experiment template.
     */
    description: string;
    /**
     * The experiment options for an experiment template.
     */
    experimentOptions?: CfnExperimentTemplate.ExperimentTemplateExperimentOptionsProperty | cdk.IResolvable;
    /**
     * The configuration for experiment logging.
     */
    logConfiguration?: CfnExperimentTemplate.ExperimentTemplateLogConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of an IAM role.
     */
    roleArn: string;
    /**
     * The stop conditions for the experiment.
     */
    stopConditions: Array<CfnExperimentTemplate.ExperimentTemplateStopConditionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags for the experiment template.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The targets for the experiment.
     */
    targets: cdk.IResolvable | Record<string, CfnExperimentTemplate.ExperimentTemplateTargetProperty | cdk.IResolvable>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnExperimentTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnExperimentTemplate {
    /**
     * Specifies an action for an experiment template.
     *
     * For more information, see [Actions](https://docs.aws.amazon.com/fis/latest/userguide/actions.html) in the *AWS Fault Injection Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html
     */
    interface ExperimentTemplateActionProperty {
        /**
         * The ID of the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html#cfn-fis-experimenttemplate-experimenttemplateaction-actionid
         */
        readonly actionId: string;
        /**
         * A description for the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html#cfn-fis-experimenttemplate-experimenttemplateaction-description
         */
        readonly description?: string;
        /**
         * The parameters for the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html#cfn-fis-experimenttemplate-experimenttemplateaction-parameters
         */
        readonly parameters?: cdk.IResolvable | Record<string, string>;
        /**
         * The name of the action that must be completed before the current action starts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html#cfn-fis-experimenttemplate-experimenttemplateaction-startafter
         */
        readonly startAfter?: Array<string>;
        /**
         * The targets for the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html#cfn-fis-experimenttemplate-experimenttemplateaction-targets
         */
        readonly targets?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * Specifies a stop condition for an experiment template.
     *
     * For more information, see [Stop conditions](https://docs.aws.amazon.com/fis/latest/userguide/stop-conditions.html) in the *AWS Fault Injection Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.html
     */
    interface ExperimentTemplateStopConditionProperty {
        /**
         * The source for the stop condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.html#cfn-fis-experimenttemplate-experimenttemplatestopcondition-source
         */
        readonly source: string;
        /**
         * The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.html#cfn-fis-experimenttemplate-experimenttemplatestopcondition-value
         */
        readonly value?: string;
    }
    /**
     * Specifies a target for an experiment.
     *
     * You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.
     *
     * For more information, see [Targets](https://docs.aws.amazon.com/fis/latest/userguide/targets.html) in the *AWS Fault Injection Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html
     */
    interface ExperimentTemplateTargetProperty {
        /**
         * The filters to apply to identify target resources using specific attributes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-filters
         */
        readonly filters?: Array<CfnExperimentTemplate.ExperimentTemplateTargetFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The parameters for the resource type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-parameters
         */
        readonly parameters?: cdk.IResolvable | Record<string, string>;
        /**
         * The Amazon Resource Names (ARNs) of the targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-resourcearns
         */
        readonly resourceArns?: Array<string>;
        /**
         * The tags for the target resources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-resourcetags
         */
        readonly resourceTags?: cdk.IResolvable | Record<string, string>;
        /**
         * The resource type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-resourcetype
         */
        readonly resourceType: string;
        /**
         * Scopes the identified resources to a specific count or percentage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-selectionmode
         */
        readonly selectionMode: string;
    }
    /**
     * Specifies a filter used for the target resource input in an experiment template.
     *
     * For more information, see [Resource filters](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters) in the *AWS Fault Injection Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.html
     */
    interface ExperimentTemplateTargetFilterProperty {
        /**
         * The attribute path for the filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.html#cfn-fis-experimenttemplate-experimenttemplatetargetfilter-path
         */
        readonly path: string;
        /**
         * The attribute values for the filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.html#cfn-fis-experimenttemplate-experimenttemplatetargetfilter-values
         */
        readonly values: Array<string>;
    }
    /**
     * Specifies the configuration for experiment logging.
     *
     * For more information, see [Experiment logging](https://docs.aws.amazon.com/fis/latest/userguide/monitoring-logging.html) in the *AWS Fault Injection Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatelogconfiguration.html
     */
    interface ExperimentTemplateLogConfigurationProperty {
        /**
         * The configuration for experiment logging to CloudWatch Logs .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatelogconfiguration.html#cfn-fis-experimenttemplate-experimenttemplatelogconfiguration-cloudwatchlogsconfiguration
         */
        readonly cloudWatchLogsConfiguration?: any | cdk.IResolvable;
        /**
         * The schema version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatelogconfiguration.html#cfn-fis-experimenttemplate-experimenttemplatelogconfiguration-logschemaversion
         */
        readonly logSchemaVersion: number;
        /**
         * The configuration for experiment logging to Amazon S3 .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatelogconfiguration.html#cfn-fis-experimenttemplate-experimenttemplatelogconfiguration-s3configuration
         */
        readonly s3Configuration?: any | cdk.IResolvable;
    }
    /**
     * Describes the experiment options for an experiment template.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateexperimentoptions.html
     */
    interface ExperimentTemplateExperimentOptionsProperty {
        /**
         * The account targeting setting for an experiment template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateexperimentoptions.html#cfn-fis-experimenttemplate-experimenttemplateexperimentoptions-accounttargeting
         */
        readonly accountTargeting?: string;
        /**
         * The empty target resolution mode for an experiment template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateexperimentoptions.html#cfn-fis-experimenttemplate-experimenttemplateexperimentoptions-emptytargetresolutionmode
         */
        readonly emptyTargetResolutionMode?: string;
    }
    /**
     * Specifies the configuration for experiment logging to CloudWatch Logs .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-cloudwatchlogsconfiguration.html
     */
    interface CloudWatchLogsConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-cloudwatchlogsconfiguration.html#cfn-fis-experimenttemplate-cloudwatchlogsconfiguration-loggrouparn
         */
        readonly logGroupArn: string;
    }
    /**
     * Specifies the configuration for experiment logging to Amazon S3 .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-s3configuration.html
     */
    interface S3ConfigurationProperty {
        /**
         * The name of the destination bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-s3configuration.html#cfn-fis-experimenttemplate-s3configuration-bucketname
         */
        readonly bucketName: string;
        /**
         * The bucket prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-s3configuration.html#cfn-fis-experimenttemplate-s3configuration-prefix
         */
        readonly prefix?: string;
    }
}
/**
 * Properties for defining a `CfnExperimentTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html
 */
export interface CfnExperimentTemplateProps {
    /**
     * The actions for the experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-actions
     */
    readonly actions?: cdk.IResolvable | Record<string, CfnExperimentTemplate.ExperimentTemplateActionProperty | cdk.IResolvable>;
    /**
     * The description for the experiment template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-description
     */
    readonly description: string;
    /**
     * The experiment options for an experiment template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimentoptions
     */
    readonly experimentOptions?: CfnExperimentTemplate.ExperimentTemplateExperimentOptionsProperty | cdk.IResolvable;
    /**
     * The configuration for experiment logging.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-logconfiguration
     */
    readonly logConfiguration?: CfnExperimentTemplate.ExperimentTemplateLogConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of an IAM role.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-rolearn
     */
    readonly roleArn: string;
    /**
     * The stop conditions for the experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-stopconditions
     */
    readonly stopConditions: Array<CfnExperimentTemplate.ExperimentTemplateStopConditionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The tags for the experiment template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The targets for the experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-targets
     */
    readonly targets: cdk.IResolvable | Record<string, CfnExperimentTemplate.ExperimentTemplateTargetProperty | cdk.IResolvable>;
}
/**
 * Creates a target account configuration for the experiment template.
 *
 * A target account configuration is required when `accountTargeting` of `experimentOptions` is set to `multi-account` . For more information, see [experiment options](https://docs.aws.amazon.com/fis/latest/userguide/experiment-options.html) in the *AWS Fault Injection Service User Guide* .
 *
 * @cloudformationResource AWS::FIS::TargetAccountConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html
 */
export declare class CfnTargetAccountConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTargetAccountConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTargetAccountConfiguration;
    /**
     * The AWS account ID of the target account.
     */
    accountId: string;
    /**
     * The description of the target account.
     */
    description?: string;
    /**
     * The ID of the experiment template.
     */
    experimentTemplateId: string;
    /**
     * The Amazon Resource Name (ARN) of an IAM role for the target account.
     */
    roleArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTargetAccountConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnTargetAccountConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html
 */
export interface CfnTargetAccountConfigurationProps {
    /**
     * The AWS account ID of the target account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html#cfn-fis-targetaccountconfiguration-accountid
     */
    readonly accountId: string;
    /**
     * The description of the target account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html#cfn-fis-targetaccountconfiguration-description
     */
    readonly description?: string;
    /**
     * The ID of the experiment template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html#cfn-fis-targetaccountconfiguration-experimenttemplateid
     */
    readonly experimentTemplateId: string;
    /**
     * The Amazon Resource Name (ARN) of an IAM role for the target account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html#cfn-fis-targetaccountconfiguration-rolearn
     */
    readonly roleArn: string;
}
