import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * An object that represents the authorizations granted to aggregator accounts and regions.
 *
 * @cloudformationResource AWS::Config::AggregationAuthorization
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html
 */
export declare class CfnAggregationAuthorization extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAggregationAuthorization from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAggregationAuthorization;
    /**
     * The Amazon Resource Name (ARN) of the aggregation object.
     *
     * @cloudformationAttribute AggregationAuthorizationArn
     */
    readonly attrAggregationAuthorizationArn: string;
    /**
     * The 12-digit account ID of the account authorized to aggregate data.
     */
    authorizedAccountId: string;
    /**
     * The region authorized to collect aggregated data.
     */
    authorizedAwsRegion: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of tag object.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAggregationAuthorizationProps);
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
 * Properties for defining a `CfnAggregationAuthorization`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html
 */
export interface CfnAggregationAuthorizationProps {
    /**
     * The 12-digit account ID of the account authorized to aggregate data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html#cfn-config-aggregationauthorization-authorizedaccountid
     */
    readonly authorizedAccountId: string;
    /**
     * The region authorized to collect aggregated data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html#cfn-config-aggregationauthorization-authorizedawsregion
     */
    readonly authorizedAwsRegion: string;
    /**
     * An array of tag object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html#cfn-config-aggregationauthorization-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * > You must first create and start the AWS Config configuration recorder in order to create AWS Config managed rules with AWS CloudFormation .
 *
 * For more information, see [Managing the Configuration Recorder](https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html) .
 *
 * Adds or updates an AWS Config rule to evaluate if your AWS resources comply with your desired configurations. For information on how many AWS Config rules you can have per account, see [*Service Limits*](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *AWS Config Developer Guide* .
 *
 * There are two types of rules: *AWS Config Managed Rules* and *AWS Config Custom Rules* . You can use the `ConfigRule` resource to create both AWS Config Managed Rules and AWS Config Custom Rules.
 *
 * AWS Config Managed Rules are predefined, customizable rules created by AWS Config . For a list of managed rules, see [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html) . If you are adding an AWS Config managed rule, you must specify the rule's identifier for the `SourceIdentifier` key.
 *
 * AWS Config Custom Rules are rules that you create from scratch. There are two ways to create AWS Config custom rules: with Lambda functions ( [AWS Lambda Developer Guide](https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function) ) and with Guard ( [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard) ), a policy-as-code language. AWS Config custom rules created with AWS Lambda are called *AWS Config Custom Lambda Rules* and AWS Config custom rules created with Guard are called *AWS Config Custom Policy Rules* .
 *
 * If you are adding a new AWS Config Custom Lambda rule, you first need to create an AWS Lambda function that the rule invokes to evaluate your resources. When you use the `ConfigRule` resource to add a Custom Lambda rule to AWS Config , you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. You specify the ARN in the `SourceIdentifier` key. This key is part of the `Source` object, which is part of the `ConfigRule` object.
 *
 * For any new AWS Config rule that you add, specify the `ConfigRuleName` in the `ConfigRule` object. Do not specify the `ConfigRuleArn` or the `ConfigRuleId` . These values are generated by AWS Config for new rules.
 *
 * If you are updating a rule that you added previously, you can specify the rule by `ConfigRuleName` , `ConfigRuleId` , or `ConfigRuleArn` in the `ConfigRule` data type that you use in this request.
 *
 * For more information about developing and using AWS Config rules, see [Evaluating Resources with AWS Config Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html) in the *AWS Config Developer Guide* .
 *
 * @cloudformationResource AWS::Config::ConfigRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html
 */
export declare class CfnConfigRule extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigRule;
    /**
     * The Amazon Resource Name (ARN) of the AWS Config rule, such as `arn:aws:config:us-east-1:123456789012:config-rule/config-rule-a1bzhi` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Compliance type determined by the Config rule
     *
     * @cloudformationAttribute Compliance.Type
     */
    readonly attrComplianceType: string;
    /**
     * The ID of the AWS Config rule, such as `config-rule-a1bzhi` .
     *
     * @cloudformationAttribute ConfigRuleId
     */
    readonly attrConfigRuleId: string;
    /**
     * Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.
     */
    compliance?: CfnConfigRule.ComplianceProperty | cdk.IResolvable;
    /**
     * A name for the AWS Config rule.
     */
    configRuleName?: string;
    /**
     * The description that you provide for the AWS Config rule.
     */
    description?: string;
    /**
     * The modes the AWS Config rule can be evaluated in.
     */
    evaluationModes?: Array<CfnConfigRule.EvaluationModeConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A string, in JSON format, that is passed to the AWS Config rule Lambda function.
     */
    inputParameters?: any | cdk.IResolvable;
    /**
     * The maximum frequency with which AWS Config runs evaluations for a rule.
     */
    maximumExecutionFrequency?: string;
    /**
     * Defines which resources can trigger an evaluation for the rule.
     */
    scope?: cdk.IResolvable | CfnConfigRule.ScopeProperty;
    /**
     * Provides the rule owner ( `AWS` for managed rules, `CUSTOM_POLICY` for Custom Policy rules, and `CUSTOM_LAMBDA` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.
     */
    source: cdk.IResolvable | CfnConfigRule.SourceProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigRule {
    /**
     * The configuration object for AWS Config rule evaluation mode.
     *
     * The supported valid values are Detective or Proactive.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-evaluationmodeconfiguration.html
     */
    interface EvaluationModeConfigurationProperty {
        /**
         * The mode of an evaluation.
         *
         * The valid values are Detective or Proactive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-evaluationmodeconfiguration.html#cfn-config-configrule-evaluationmodeconfiguration-mode
         */
        readonly mode?: string;
    }
    /**
     * Defines which resources trigger an evaluation for an AWS Config rule.
     *
     * The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-scope.html
     */
    interface ScopeProperty {
        /**
         * The ID of the only AWS resource that you want to trigger an evaluation for the rule.
         *
         * If you specify a resource ID, you must specify one resource type for `ComplianceResourceTypes` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-scope.html#cfn-config-configrule-scope-complianceresourceid
         */
        readonly complianceResourceId?: string;
        /**
         * The resource types of only those AWS resources that you want to trigger an evaluation for the rule.
         *
         * You can only specify one type if you also specify a resource ID for `ComplianceResourceId` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-scope.html#cfn-config-configrule-scope-complianceresourcetypes
         */
        readonly complianceResourceTypes?: Array<string>;
        /**
         * The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-scope.html#cfn-config-configrule-scope-tagkey
         */
        readonly tagKey?: string;
        /**
         * The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule.
         *
         * If you specify a value for `TagValue` , you must also specify a value for `TagKey` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-scope.html#cfn-config-configrule-scope-tagvalue
         */
        readonly tagValue?: string;
    }
    /**
     * Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-compliance.html
     */
    interface ComplianceProperty {
        /**
         * Indicates whether an AWS resource or AWS Config rule is compliant.
         *
         * A resource is compliant if it complies with all of the AWS Config rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.
         *
         * A rule is compliant if all of the resources that the rule evaluates comply with it. A rule is noncompliant if any of these resources do not comply.
         *
         * AWS Config returns the `INSUFFICIENT_DATA` value when no evaluation results are available for the AWS resource or AWS Config rule.
         *
         * For the `Compliance` data type, AWS Config supports only `COMPLIANT` , `NON_COMPLIANT` , and `INSUFFICIENT_DATA` values. AWS Config does not support the `NOT_APPLICABLE` value for the `Compliance` data type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-compliance.html#cfn-config-configrule-compliance-type
         */
        readonly type?: string;
    }
    /**
     * Provides the CustomPolicyDetails, the rule owner ( `AWS` for managed rules, `CUSTOM_POLICY` for Custom Policy rules, and `CUSTOM_LAMBDA` for Custom Lambda rules), the rule identifier, and the events that cause the evaluation of your AWS resources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source.html
     */
    interface SourceProperty {
        /**
         * Provides the runtime system, policy definition, and whether debug logging is enabled.
         *
         * Required when owner is set to `CUSTOM_POLICY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source.html#cfn-config-configrule-source-custompolicydetails
         */
        readonly customPolicyDetails?: CfnConfigRule.CustomPolicyDetailsProperty | cdk.IResolvable;
        /**
         * Indicates whether AWS or the customer owns and manages the AWS Config rule.
         *
         * AWS Config Managed Rules are predefined rules owned by AWS . For more information, see [AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) in the *AWS Config developer guide* .
         *
         * AWS Config Custom Rules are rules that you can develop either with Guard ( `CUSTOM_POLICY` ) or AWS Lambda ( `CUSTOM_LAMBDA` ). For more information, see [AWS Config Custom Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html) in the *AWS Config developer guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source.html#cfn-config-configrule-source-owner
         */
        readonly owner: string;
        /**
         * Provides the source and the message types that cause AWS Config to evaluate your AWS resources against a rule.
         *
         * It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.
         *
         * If the owner is set to `CUSTOM_POLICY` , the only acceptable values for the AWS Config rule trigger message type are `ConfigurationItemChangeNotification` and `OversizedConfigurationItemChangeNotification` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source.html#cfn-config-configrule-source-sourcedetails
         */
        readonly sourceDetails?: Array<cdk.IResolvable | CfnConfigRule.SourceDetailProperty> | cdk.IResolvable;
        /**
         * For AWS Config Managed rules, a predefined identifier from a list.
         *
         * For example, `IAM_PASSWORD_POLICY` is a managed rule. To reference a managed rule, see [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html) .
         *
         * For AWS Config Custom Lambda rules, the identifier is the Amazon Resource Name (ARN) of the rule's AWS Lambda function, such as `arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name` .
         *
         * For AWS Config Custom Policy rules, this field will be ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source.html#cfn-config-configrule-source-sourceidentifier
         */
        readonly sourceIdentifier?: string;
    }
    /**
     * Provides the CustomPolicyDetails, the rule owner ( `AWS` for managed rules, `CUSTOM_POLICY` for Custom Policy rules, and `CUSTOM_LAMBDA` for Custom Lambda rules), the rule identifier, and the events that cause the evaluation of your AWS resources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-custompolicydetails.html
     */
    interface CustomPolicyDetailsProperty {
        /**
         * The boolean expression for enabling debug logging for your AWS Config Custom Policy rule.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-custompolicydetails.html#cfn-config-configrule-custompolicydetails-enabledebuglogdelivery
         */
        readonly enableDebugLogDelivery?: boolean | cdk.IResolvable;
        /**
         * The runtime system for your AWS Config Custom Policy rule.
         *
         * Guard is a policy-as-code language that allows you to write policies that are enforced by AWS Config Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-custompolicydetails.html#cfn-config-configrule-custompolicydetails-policyruntime
         */
        readonly policyRuntime?: string;
        /**
         * The policy definition containing the logic for your AWS Config Custom Policy rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-custompolicydetails.html#cfn-config-configrule-custompolicydetails-policytext
         */
        readonly policyText?: string;
    }
    /**
     * Provides the source and the message types that trigger AWS Config to evaluate your AWS resources against a rule.
     *
     * It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for `SourceDetail` only for custom rules.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-sourcedetail.html
     */
    interface SourceDetailProperty {
        /**
         * The source of the event, such as an AWS service, that triggers AWS Config to evaluate your AWS resources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-sourcedetail.html#cfn-config-configrule-sourcedetail-eventsource
         */
        readonly eventSource: string;
        /**
         * The frequency at which you want AWS Config to run evaluations for a custom rule with a periodic trigger.
         *
         * If you specify a value for `MaximumExecutionFrequency` , then `MessageType` must use the `ScheduledNotification` value.
         *
         * > By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
         * >
         * > Based on the valid value you choose, AWS Config runs evaluations once for each valid value. For example, if you choose `Three_Hours` , AWS Config runs evaluations once every three hours. In this case, `Three_Hours` is the frequency of this rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-sourcedetail.html#cfn-config-configrule-sourcedetail-maximumexecutionfrequency
         */
        readonly maximumExecutionFrequency?: string;
        /**
         * The type of notification that triggers AWS Config to run an evaluation for a rule.
         *
         * You can specify the following notification types:
         *
         * - `ConfigurationItemChangeNotification` - Triggers an evaluation when AWS Config delivers a configuration item as a result of a resource change.
         * - `OversizedConfigurationItemChangeNotification` - Triggers an evaluation when AWS Config delivers an oversized configuration item. AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
         * - `ScheduledNotification` - Triggers a periodic evaluation at the frequency specified for `MaximumExecutionFrequency` .
         * - `ConfigurationSnapshotDeliveryCompleted` - Triggers a periodic evaluation when AWS Config delivers a configuration snapshot.
         *
         * If you want your custom rule to be triggered by configuration changes, specify two SourceDetail objects, one for `ConfigurationItemChangeNotification` and one for `OversizedConfigurationItemChangeNotification` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-sourcedetail.html#cfn-config-configrule-sourcedetail-messagetype
         */
        readonly messageType: string;
    }
}
/**
 * Properties for defining a `CfnConfigRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html
 */
export interface CfnConfigRuleProps {
    /**
     * Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html#cfn-config-configrule-compliance
     */
    readonly compliance?: CfnConfigRule.ComplianceProperty | cdk.IResolvable;
    /**
     * A name for the AWS Config rule.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html#cfn-config-configrule-configrulename
     */
    readonly configRuleName?: string;
    /**
     * The description that you provide for the AWS Config rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html#cfn-config-configrule-description
     */
    readonly description?: string;
    /**
     * The modes the AWS Config rule can be evaluated in.
     *
     * The valid values are distinct objects. By default, the value is Detective evaluation mode only.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html#cfn-config-configrule-evaluationmodes
     */
    readonly evaluationModes?: Array<CfnConfigRule.EvaluationModeConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A string, in JSON format, that is passed to the AWS Config rule Lambda function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html#cfn-config-configrule-inputparameters
     */
    readonly inputParameters?: any | cdk.IResolvable;
    /**
     * The maximum frequency with which AWS Config runs evaluations for a rule.
     *
     * You can specify a value for `MaximumExecutionFrequency` when:
     *
     * - You are using an AWS managed rule that is triggered at a periodic frequency.
     * - Your custom rule is triggered when AWS Config delivers the configuration snapshot. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigSnapshotDeliveryProperties.html) .
     *
     * > By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html#cfn-config-configrule-maximumexecutionfrequency
     */
    readonly maximumExecutionFrequency?: string;
    /**
     * Defines which resources can trigger an evaluation for the rule.
     *
     * The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.
     *
     * > The scope can be empty.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html#cfn-config-configrule-scope
     */
    readonly scope?: cdk.IResolvable | CfnConfigRule.ScopeProperty;
    /**
     * Provides the rule owner ( `AWS` for managed rules, `CUSTOM_POLICY` for Custom Policy rules, and `CUSTOM_LAMBDA` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html#cfn-config-configrule-source
     */
    readonly source: cdk.IResolvable | CfnConfigRule.SourceProperty;
}
/**
 * The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator.
 *
 * @cloudformationResource AWS::Config::ConfigurationAggregator
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html
 */
export declare class CfnConfigurationAggregator extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationAggregator from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationAggregator;
    /**
     * The Amazon Resource Name (ARN) of the aggregator.
     *
     * @cloudformationAttribute ConfigurationAggregatorArn
     */
    readonly attrConfigurationAggregatorArn: string;
    /**
     * Provides a list of source accounts and regions to be aggregated.
     */
    accountAggregationSources?: Array<CfnConfigurationAggregator.AccountAggregationSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the aggregator.
     */
    configurationAggregatorName?: string;
    /**
     * Provides an organization and list of regions to be aggregated.
     */
    organizationAggregationSource?: cdk.IResolvable | CfnConfigurationAggregator.OrganizationAggregationSourceProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of tag object.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnConfigurationAggregatorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationAggregator {
    /**
     * A collection of accounts and regions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-accountaggregationsource.html
     */
    interface AccountAggregationSourceProperty {
        /**
         * The 12-digit account ID of the account being aggregated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-accountaggregationsource.html#cfn-config-configurationaggregator-accountaggregationsource-accountids
         */
        readonly accountIds: Array<string>;
        /**
         * If true, aggregate existing AWS Config regions and future regions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-accountaggregationsource.html#cfn-config-configurationaggregator-accountaggregationsource-allawsregions
         */
        readonly allAwsRegions?: boolean | cdk.IResolvable;
        /**
         * The source regions being aggregated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-accountaggregationsource.html#cfn-config-configurationaggregator-accountaggregationsource-awsregions
         */
        readonly awsRegions?: Array<string>;
    }
    /**
     * This object contains regions to set up the aggregator and an IAM role to retrieve organization details.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-organizationaggregationsource.html
     */
    interface OrganizationAggregationSourceProperty {
        /**
         * If true, aggregate existing AWS Config regions and future regions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-organizationaggregationsource.html#cfn-config-configurationaggregator-organizationaggregationsource-allawsregions
         */
        readonly allAwsRegions?: boolean | cdk.IResolvable;
        /**
         * The source regions being aggregated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-organizationaggregationsource.html#cfn-config-configurationaggregator-organizationaggregationsource-awsregions
         */
        readonly awsRegions?: Array<string>;
        /**
         * ARN of the IAM role used to retrieve AWS Organizations details associated with the aggregator account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-organizationaggregationsource.html#cfn-config-configurationaggregator-organizationaggregationsource-rolearn
         */
        readonly roleArn: string;
    }
}
/**
 * Properties for defining a `CfnConfigurationAggregator`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html
 */
export interface CfnConfigurationAggregatorProps {
    /**
     * Provides a list of source accounts and regions to be aggregated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-accountaggregationsources
     */
    readonly accountAggregationSources?: Array<CfnConfigurationAggregator.AccountAggregationSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the aggregator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-configurationaggregatorname
     */
    readonly configurationAggregatorName?: string;
    /**
     * Provides an organization and list of regions to be aggregated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-organizationaggregationsource
     */
    readonly organizationAggregationSource?: cdk.IResolvable | CfnConfigurationAggregator.OrganizationAggregationSourceProperty;
    /**
     * An array of tag object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Config::ConfigurationRecorder` resource type describes the AWS resource types that AWS Config records for configuration changes.
 *
 * The configuration recorder stores the configuration changes of the specified resources in your account as configuration items.
 *
 * > To enable AWS Config , you must create a configuration recorder and a delivery channel.
 * >
 * > AWS Config uses the delivery channel to deliver the configuration changes to your Amazon S3 bucket or Amazon SNS topic. For more information, see [AWS::Config::DeliveryChannel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html) .
 *
 * AWS CloudFormation starts the recorder as soon as the delivery channel is available.
 *
 * To stop the recorder and delete it, delete the configuration recorder from your stack. To stop the recorder without deleting it, call the [StopConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html) action of the AWS Config API directly.
 *
 * For more information, see [Configuration Recorder](https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#config-recorder) in the AWS Config Developer Guide.
 *
 * @cloudformationResource AWS::Config::ConfigurationRecorder
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html
 */
export declare class CfnConfigurationRecorder extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationRecorder from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationRecorder;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the configuration recorder. AWS Config automatically assigns the name of "default" when creating the configuration recorder.
     */
    name?: string;
    /**
     * Specifies which resource types AWS Config records for configuration changes.
     */
    recordingGroup?: cdk.IResolvable | CfnConfigurationRecorder.RecordingGroupProperty;
    /**
     * Specifies the default recording frequency that AWS Config uses to record configuration changes.
     */
    recordingMode?: cdk.IResolvable | CfnConfigurationRecorder.RecordingModeProperty;
    /**
     * Amazon Resource Name (ARN) of the IAM role assumed by AWS Config and used by the configuration recorder.
     */
    roleArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationRecorderProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationRecorder {
    /**
     * Specifies which resource types AWS Config records for configuration changes.
     *
     * By default, AWS Config records configuration changes for all current and future supported resource types in the AWS Region where you have enabled AWS Config , excluding the global IAM resource types: IAM users, groups, roles, and customer managed policies.
     *
     * In the recording group, you specify whether you want to record all supported current and future supported resource types or to include or exclude specific resources types. For a list of supported resource types, see [Supported Resource Types](https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources) in the *AWS Config developer guide* .
     *
     * If you don't want AWS Config to record all current and future supported resource types (excluding the global IAM resource types), use one of the following recording strategies:
     *
     * - *Record all current and future resource types with exclusions* ( `EXCLUSION_BY_RESOURCE_TYPES` ), or
     * - *Record specific resource types* ( `INCLUSION_BY_RESOURCE_TYPES` ).
     *
     * If you use the recording strategy to *Record all current and future resource types* ( `ALL_SUPPORTED_RESOURCE_TYPES` ), you can use the flag `IncludeGlobalResourceTypes` to include the global IAM resource types in your recording.
     *
     * > *Aurora global clusters are recorded in all enabled Regions*
     * >
     * > The `AWS::RDS::GlobalCluster` resource type will be recorded in all supported AWS Config Regions where the configuration recorder is enabled.
     * >
     * > If you do not want to record `AWS::RDS::GlobalCluster` in all enabled Regions, use the `EXCLUSION_BY_RESOURCE_TYPES` or `INCLUSION_BY_RESOURCE_TYPES` recording strategy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html
     */
    interface RecordingGroupProperty {
        /**
         * Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types.
         *
         * If you set this field to `true` , when AWS Config adds support for a new resource type, AWS Config starts recording resources of that type automatically.
         *
         * If you set this field to `true` , you cannot enumerate specific resource types to record in the `resourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) , or to exclude in the `resourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html) .
         *
         * > *Region availability*
         * >
         * > Check [Resource Coverage by Region Availability](https://docs.aws.amazon.com/config/latest/developerguide/what-is-resource-config-coverage.html) to see if a resource type is supported in the AWS Region where you set up AWS Config .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html#cfn-config-configurationrecorder-recordinggroup-allsupported
         */
        readonly allSupported?: boolean | cdk.IResolvable;
        /**
         * An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.
         *
         * To use this option, you must set the `useOnly` field of [AWS::Config::ConfigurationRecorder RecordingStrategy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingstrategy.html) to `EXCLUSION_BY_RESOURCE_TYPES` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html#cfn-config-configurationrecorder-recordinggroup-exclusionbyresourcetypes
         */
        readonly exclusionByResourceTypes?: CfnConfigurationRecorder.ExclusionByResourceTypesProperty | cdk.IResolvable;
        /**
         * This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies.
         *
         * These global IAM resource types can only be recorded by AWS Config in Regions where AWS Config was available before February 2022. You cannot be record the global IAM resouce types in Regions supported by AWS Config after February 2022. This list where you cannot record the global IAM resource types includes the following Regions:
         *
         * - Asia Pacific (Hyderabad)
         * - Asia Pacific (Melbourne)
         * - Canada West (Calgary)
         * - Europe (Spain)
         * - Europe (Zurich)
         * - Israel (Tel Aviv)
         * - Middle East (UAE)
         *
         * > *Aurora global clusters are recorded in all enabled Regions*
         * >
         * > The `AWS::RDS::GlobalCluster` resource type will be recorded in all supported AWS Config Regions where the configuration recorder is enabled, even if `IncludeGlobalResourceTypes` is set to `false` . The `IncludeGlobalResourceTypes` option is a bundle which only applies to IAM users, groups, roles, and customer managed policies.
         * >
         * > If you do not want to record `AWS::RDS::GlobalCluster` in all enabled Regions, use one of the following recording strategies:
         * >
         * > - *Record all current and future resource types with exclusions* ( `EXCLUSION_BY_RESOURCE_TYPES` ), or
         * > - *Record specific resource types* ( `INCLUSION_BY_RESOURCE_TYPES` ).
         * >
         * > For more information, see [Selecting Which Resources are Recorded](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-all) in the *AWS Config developer guide* . > *IncludeGlobalResourceTypes and the exclusion recording strategy*
         * >
         * > The `IncludeGlobalResourceTypes` field has no impact on the `EXCLUSION_BY_RESOURCE_TYPES` recording strategy. This means that the global IAM resource types ( IAM users, groups, roles, and customer managed policies) will not be automatically added as exclusions for `ExclusionByResourceTypes` when `IncludeGlobalResourceTypes` is set to `false` .
         * >
         * > The `IncludeGlobalResourceTypes` field should only be used to modify the `AllSupported` field, as the default for the `AllSupported` field is to record configuration changes for all supported resource types excluding the global IAM resource types. To include the global IAM resource types when `AllSupported` is set to `true` , make sure to set `IncludeGlobalResourceTypes` to `true` .
         * >
         * > To exclude the global IAM resource types for the `EXCLUSION_BY_RESOURCE_TYPES` recording strategy, you need to manually add them to the `ResourceTypes` field of `ExclusionByResourceTypes` . > *Required and optional fields*
         * >
         * > Before you set this field to `true` , set the `AllSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true` . Optionally, you can set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `ALL_SUPPORTED_RESOURCE_TYPES` . > *Overriding fields*
         * >
         * > If you set this field to `false` but list global IAM resource types in the `ResourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) , AWS Config will still record configuration changes for those specified resource types *regardless* of if you set the `IncludeGlobalResourceTypes` field to false.
         * >
         * > If you do not want to record configuration changes to the global IAM resource types (IAM users, groups, roles, and customer managed policies), make sure to not list them in the `ResourceTypes` field in addition to setting the `IncludeGlobalResourceTypes` field to false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html#cfn-config-configurationrecorder-recordinggroup-includeglobalresourcetypes
         */
        readonly includeGlobalResourceTypes?: boolean | cdk.IResolvable;
        /**
         * An object that specifies the recording strategy for the configuration recorder.
         *
         * - If you set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `ALL_SUPPORTED_RESOURCE_TYPES` , AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types. You also must set the `AllSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true` . When AWS Config adds support for a new resource type, AWS Config automatically starts recording resources of that type.
         * - If you set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `INCLUSION_BY_RESOURCE_TYPES` , AWS Config records configuration changes for only the resource types you specify in the `ResourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) .
         * - If you set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `EXCLUSION_BY_RESOURCE_TYPES` , AWS Config records configuration changes for all supported resource types except the resource types that you specify to exclude from being recorded in the `ResourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html) .
         *
         * > *Required and optional fields*
         * >
         * > The `recordingStrategy` field is optional when you set the `AllSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true` .
         * >
         * > The `recordingStrategy` field is optional when you list resource types in the `ResourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) .
         * >
         * > The `recordingStrategy` field is required if you list resource types to exclude from recording in the `ResourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html) . > *Overriding fields*
         * >
         * > If you choose `EXCLUSION_BY_RESOURCE_TYPES` for the recording strategy, the `ExclusionByResourceTypes` field will override other properties in the request.
         * >
         * > For example, even if you set `IncludeGlobalResourceTypes` to false, global IAM resource types will still be automatically recorded in this option unless those resource types are specifically listed as exclusions in the `ResourceTypes` field of `ExclusionByResourceTypes` . > *Global resources types and the resource exclusion recording strategy*
         * >
         * > By default, if you choose the `EXCLUSION_BY_RESOURCE_TYPES` recording strategy, when AWS Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types, AWS Config starts recording resources of that type automatically.
         * >
         * > Unless specifically listed as exclusions, `AWS::RDS::GlobalCluster` will be recorded automatically in all supported AWS Config Regions were the configuration recorder is enabled.
         * >
         * > IAM users, groups, roles, and customer managed policies will be recorded in the Region where you set up the configuration recorder if that is a Region where AWS Config was available before February 2022. You cannot be record the global IAM resouce types in Regions supported by AWS Config after February 2022. This list where you cannot record the global IAM resource types includes the following Regions:
         * >
         * > - Asia Pacific (Hyderabad)
         * > - Asia Pacific (Melbourne)
         * > - Canada West (Calgary)
         * > - Europe (Spain)
         * > - Europe (Zurich)
         * > - Israel (Tel Aviv)
         * > - Middle East (UAE)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html#cfn-config-configurationrecorder-recordinggroup-recordingstrategy
         */
        readonly recordingStrategy?: cdk.IResolvable | CfnConfigurationRecorder.RecordingStrategyProperty;
        /**
         * A comma-separated list that specifies which resource types AWS Config records.
         *
         * For a list of valid `ResourceTypes` values, see the *Resource Type Value* column in [Supported AWS resource Types](https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources) in the *AWS Config developer guide* .
         *
         * > *Required and optional fields*
         * >
         * > Optionally, you can set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `INCLUSION_BY_RESOURCE_TYPES` .
         * >
         * > To record all configuration changes, set the `AllSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true` , and either omit this field or don't specify any resource types in this field. If you set the `AllSupported` field to `false` and specify values for `ResourceTypes` , when AWS Config adds support for a new type of resource, it will not record resources of that type unless you manually add that type to your recording group. > *Region availability*
         * >
         * > Before specifying a resource type for AWS Config to track, check [Resource Coverage by Region Availability](https://docs.aws.amazon.com/config/latest/developerguide/what-is-resource-config-coverage.html) to see if the resource type is supported in the AWS Region where you set up AWS Config . If a resource type is supported by AWS Config in at least one Region, you can enable the recording of that resource type in all Regions supported by AWS Config , even if the specified resource type is not supported in the AWS Region where you set up AWS Config .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html#cfn-config-configurationrecorder-recordinggroup-resourcetypes
         */
        readonly resourceTypes?: Array<string>;
    }
    /**
     * Specifies whether the configuration recorder excludes certain resource types from being recorded.
     *
     * Use the `ResourceTypes` field to enter a comma-separated list of resource types you want to exclude from recording.
     *
     * By default, when AWS Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types, AWS Config starts recording resources of that type automatically.
     *
     * > *How to use the exclusion recording strategy*
     * >
     * > To use this option, you must set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `EXCLUSION_BY_RESOURCE_TYPES` .
     * >
     * > AWS Config will then record configuration changes for all supported resource types, except the resource types that you specify to exclude from being recorded.
     * >
     * > *Global resource types and the exclusion recording strategy*
     * >
     * > Unless specifically listed as exclusions, `AWS::RDS::GlobalCluster` will be recorded automatically in all supported AWS Config Regions were the configuration recorder is enabled.
     * >
     * > IAM users, groups, roles, and customer managed policies will be recorded in the Region where you set up the configuration recorder if that is a Region where AWS Config was available before February 2022. You cannot be record the global IAM resouce types in Regions supported by AWS Config after February 2022. This list where you cannot record the global IAM resource types includes the following Regions:
     * >
     * > - Asia Pacific (Hyderabad)
     * > - Asia Pacific (Melbourne)
     * > - Canada West (Calgary)
     * > - Europe (Spain)
     * > - Europe (Zurich)
     * > - Israel (Tel Aviv)
     * > - Middle East (UAE)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-exclusionbyresourcetypes.html
     */
    interface ExclusionByResourceTypesProperty {
        /**
         * A comma-separated list of resource types to exclude from recording by the configuration recorder.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-exclusionbyresourcetypes.html#cfn-config-configurationrecorder-exclusionbyresourcetypes-resourcetypes
         */
        readonly resourceTypes: Array<string>;
    }
    /**
     * Specifies the recording strategy of the configuration recorder.
     *
     * Valid values include: `ALL_SUPPORTED_RESOURCE_TYPES` , `INCLUSION_BY_RESOURCE_TYPES` , and `EXCLUSION_BY_RESOURCE_TYPES` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingstrategy.html
     */
    interface RecordingStrategyProperty {
        /**
         * The recording strategy for the configuration recorder.
         *
         * - If you set this option to `ALL_SUPPORTED_RESOURCE_TYPES` , AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types. You also must set the `AllSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true` . When AWS Config adds support for a new resource type, AWS Config automatically starts recording resources of that type. For a list of supported resource types, see [Supported Resource Types](https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources) in the *AWS Config developer guide* .
         * - If you set this option to `INCLUSION_BY_RESOURCE_TYPES` , AWS Config records configuration changes for only the resource types that you specify in the `ResourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) .
         * - If you set this option to `EXCLUSION_BY_RESOURCE_TYPES` , AWS Config records configuration changes for all supported resource types, except the resource types that you specify to exclude from being recorded in the `ResourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html) .
         *
         * > *Required and optional fields*
         * >
         * > The `recordingStrategy` field is optional when you set the `AllSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true` .
         * >
         * > The `recordingStrategy` field is optional when you list resource types in the `ResourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) .
         * >
         * > The `recordingStrategy` field is required if you list resource types to exclude from recording in the `ResourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html) . > *Overriding fields*
         * >
         * > If you choose `EXCLUSION_BY_RESOURCE_TYPES` for the recording strategy, the `ExclusionByResourceTypes` field will override other properties in the request.
         * >
         * > For example, even if you set `IncludeGlobalResourceTypes` to false, global IAM resource types will still be automatically recorded in this option unless those resource types are specifically listed as exclusions in the `ResourceTypes` field of `ExclusionByResourceTypes` . > *Global resource types and the exclusion recording strategy*
         * >
         * > By default, if you choose the `EXCLUSION_BY_RESOURCE_TYPES` recording strategy, when AWS Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types, AWS Config starts recording resources of that type automatically.
         * >
         * > Unless specifically listed as exclusions, `AWS::RDS::GlobalCluster` will be recorded automatically in all supported AWS Config Regions were the configuration recorder is enabled.
         * >
         * > IAM users, groups, roles, and customer managed policies will be recorded in the Region where you set up the configuration recorder if that is a Region where AWS Config was available before February 2022. You cannot be record the global IAM resouce types in Regions supported by AWS Config after February 2022. This list where you cannot record the global IAM resource types includes the following Regions:
         * >
         * > - Asia Pacific (Hyderabad)
         * > - Asia Pacific (Melbourne)
         * > - Canada West (Calgary)
         * > - Europe (Spain)
         * > - Europe (Zurich)
         * > - Israel (Tel Aviv)
         * > - Middle East (UAE)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingstrategy.html#cfn-config-configurationrecorder-recordingstrategy-useonly
         */
        readonly useOnly: string;
    }
    /**
     * Specifies the default recording frequency that AWS Config uses to record configuration changes.
     *
     * AWS Config supports *Continuous recording* and *Daily recording* .
     *
     * - Continuous recording allows you to record configuration changes continuously whenever a change occurs.
     * - Daily recording allows you to receive a configuration item (CI) representing the most recent state of your resources over the last 24-hour period, only if it’s different from the previous CI recorded.
     *
     * > AWS Firewall Manager depends on continuous recording to monitor your resources. If you are using Firewall Manager, it is recommended that you set the recording frequency to Continuous.
     *
     * You can also override the recording frequency for specific resource types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingmode.html
     */
    interface RecordingModeProperty {
        /**
         * The default recording frequency that AWS Config uses to record configuration changes.
         *
         * > Daily recording is not supported for the following resource types:
         * >
         * > - `AWS::Config::ResourceCompliance`
         * > - `AWS::Config::ConformancePackCompliance`
         * > - `AWS::Config::ConfigurationRecorder`
         * >
         * > For the *allSupported* ( `ALL_SUPPORTED_RESOURCE_TYPES` ) recording strategy, these resource types will be set to Continuous recording.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingmode.html#cfn-config-configurationrecorder-recordingmode-recordingfrequency
         */
        readonly recordingFrequency: string;
        /**
         * An array of `recordingModeOverride` objects for you to specify your overrides for the recording mode.
         *
         * The `recordingModeOverride` object in the `recordingModeOverrides` array consists of three fields: a `description` , the new `recordingFrequency` , and an array of `resourceTypes` to override.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingmode.html#cfn-config-configurationrecorder-recordingmode-recordingmodeoverrides
         */
        readonly recordingModeOverrides?: Array<cdk.IResolvable | CfnConfigurationRecorder.RecordingModeOverrideProperty> | cdk.IResolvable;
    }
    /**
     * An object for you to specify your overrides for the recording mode.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingmodeoverride.html
     */
    interface RecordingModeOverrideProperty {
        /**
         * A description that you provide for the override.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingmodeoverride.html#cfn-config-configurationrecorder-recordingmodeoverride-description
         */
        readonly description?: string;
        /**
         * The recording frequency that will be applied to all the resource types specified in the override.
         *
         * - Continuous recording allows you to record configuration changes continuously whenever a change occurs.
         * - Daily recording allows you to receive a configuration item (CI) representing the most recent state of your resources over the last 24-hour period, only if it’s different from the previous CI recorded.
         *
         * > AWS Firewall Manager depends on continuous recording to monitor your resources. If you are using Firewall Manager, it is recommended that you set the recording frequency to Continuous.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingmodeoverride.html#cfn-config-configurationrecorder-recordingmodeoverride-recordingfrequency
         */
        readonly recordingFrequency: string;
        /**
         * A comma-separated list that specifies which resource types AWS Config includes in the override.
         *
         * > Daily recording is not supported for the following resource types:
         * >
         * > - `AWS::Config::ResourceCompliance`
         * > - `AWS::Config::ConformancePackCompliance`
         * > - `AWS::Config::ConfigurationRecorder`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingmodeoverride.html#cfn-config-configurationrecorder-recordingmodeoverride-resourcetypes
         */
        readonly resourceTypes: Array<string>;
    }
}
/**
 * Properties for defining a `CfnConfigurationRecorder`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html
 */
export interface CfnConfigurationRecorderProps {
    /**
     * The name of the configuration recorder. AWS Config automatically assigns the name of "default" when creating the configuration recorder.
     *
     * You cannot change the name of the configuration recorder after it has been created. To change the configuration recorder name, you must delete it and create a new configuration recorder with a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-name
     */
    readonly name?: string;
    /**
     * Specifies which resource types AWS Config records for configuration changes.
     *
     * > *High Number of AWS Config Evaluations*
     * >
     * > You may notice increased activity in your account during your initial month recording with AWS Config when compared to subsequent months. During the initial bootstrapping process, AWS Config runs evaluations on all the resources in your account that you have selected for AWS Config to record.
     * >
     * > If you are running ephemeral workloads, you may see increased activity from AWS Config as it records configuration changes associated with creating and deleting these temporary resources. An *ephemeral workload* is a temporary use of computing resources that are loaded and run when needed. Examples include Amazon Elastic Compute Cloud ( Amazon EC2 ) Spot Instances, Amazon EMR jobs, and AWS Auto Scaling . If you want to avoid the increased activity from running ephemeral workloads, you can run these types of workloads in a separate account with AWS Config turned off to avoid increased configuration recording and rule evaluations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordinggroup
     */
    readonly recordingGroup?: cdk.IResolvable | CfnConfigurationRecorder.RecordingGroupProperty;
    /**
     * Specifies the default recording frequency that AWS Config uses to record configuration changes.
     *
     * AWS Config supports *Continuous recording* and *Daily recording* .
     *
     * - Continuous recording allows you to record configuration changes continuously whenever a change occurs.
     * - Daily recording allows you to receive a configuration item (CI) representing the most recent state of your resources over the last 24-hour period, only if it’s different from the previous CI recorded.
     *
     * > AWS Firewall Manager depends on continuous recording to monitor your resources. If you are using Firewall Manager, it is recommended that you set the recording frequency to Continuous.
     *
     * You can also override the recording frequency for specific resource types.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordingmode
     */
    readonly recordingMode?: cdk.IResolvable | CfnConfigurationRecorder.RecordingModeProperty;
    /**
     * Amazon Resource Name (ARN) of the IAM role assumed by AWS Config and used by the configuration recorder.
     *
     * For more information, see [Permissions for the IAM Role Assigned](https://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) to AWS Config in the AWS Config Developer Guide.
     *
     * > *Pre-existing AWS Config role*
     * >
     * > If you have used an AWS service that uses AWS Config , such as AWS Security Hub or AWS Control Tower , and an AWS Config role has already been created, make sure that the IAM role that you use when setting up AWS Config keeps the same minimum permissions as the already created AWS Config role. You must do this so that the other AWS service continues to run as expected.
     * >
     * > For example, if AWS Control Tower has an IAM role that allows AWS Config to read Amazon Simple Storage Service ( Amazon S3 ) objects, make sure that the same permissions are granted within the IAM role you use when setting up AWS Config . Otherwise, it may interfere with how AWS Control Tower operates. For more information about IAM roles for AWS Config , see [*Identity and Access Management for AWS Config*](https://docs.aws.amazon.com/config/latest/developerguide/security-iam.html) in the *AWS Config Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-rolearn
     */
    readonly roleArn: string;
}
/**
 * A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed in an account and a region.
 *
 * ConformancePack creates a service linked role in your account. The service linked role is created only when the role does not exist in your account.
 *
 * @cloudformationResource AWS::Config::ConformancePack
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html
 */
export declare class CfnConformancePack extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConformancePack from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConformancePack;
    /**
     * A list of ConformancePackInputParameter objects.
     */
    conformancePackInputParameters?: Array<CfnConformancePack.ConformancePackInputParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Name of the conformance pack you want to create.
     */
    conformancePackName: string;
    /**
     * The name of the Amazon S3 bucket where AWS Config stores conformance pack templates.
     */
    deliveryS3Bucket?: string;
    /**
     * The prefix for the Amazon S3 bucket.
     */
    deliveryS3KeyPrefix?: string;
    /**
     * A string containing full conformance pack template body.
     */
    templateBody?: string;
    /**
     * Location of file containing the template body (s3://bucketname/prefix).
     */
    templateS3Uri?: string;
    /**
     * An object that contains the name or Amazon Resource Name (ARN) of the AWS Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.
     */
    templateSsmDocumentDetails?: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConformancePackProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConformancePack {
    /**
     * Input parameters in the form of key-value pairs for the conformance pack, both of which you define.
     *
     * Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html
     */
    interface ConformancePackInputParameterProperty {
        /**
         * One part of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html#cfn-config-conformancepack-conformancepackinputparameter-parametername
         */
        readonly parameterName: string;
        /**
         * Another part of the key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html#cfn-config-conformancepack-conformancepackinputparameter-parametervalue
         */
        readonly parameterValue: string;
    }
    /**
     * This API allows you to create a conformance pack template with an AWS Systems Manager document (SSM document).
     *
     * To deploy a conformance pack using an SSM document, first create an SSM document with conformance pack content, and then provide the `DocumentName` in the [PutConformancePack API](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html) . You can also provide the `DocumentVersion` .
     *
     * The `TemplateSSMDocumentDetails` object contains the name of the SSM document and the version of the SSM document.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-templatessmdocumentdetails.html
     */
    interface TemplateSSMDocumentDetailsProperty {
        /**
         * The name or Amazon Resource Name (ARN) of the SSM document to use to create a conformance pack.
         *
         * If you use the document name, AWS Config checks only your account and AWS Region for the SSM document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-templatessmdocumentdetails.html#cfn-config-conformancepack-templatessmdocumentdetails-documentname
         */
        readonly documentName?: string;
        /**
         * The version of the SSM document to use to create a conformance pack.
         *
         * By default, AWS Config uses the latest version.
         *
         * > This field is optional.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-templatessmdocumentdetails.html#cfn-config-conformancepack-templatessmdocumentdetails-documentversion
         */
        readonly documentVersion?: string;
    }
}
/**
 * Properties for defining a `CfnConformancePack`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html
 */
export interface CfnConformancePackProps {
    /**
     * A list of ConformancePackInputParameter objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-conformancepackinputparameters
     */
    readonly conformancePackInputParameters?: Array<CfnConformancePack.ConformancePackInputParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Name of the conformance pack you want to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-conformancepackname
     */
    readonly conformancePackName: string;
    /**
     * The name of the Amazon S3 bucket where AWS Config stores conformance pack templates.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-deliverys3bucket
     */
    readonly deliveryS3Bucket?: string;
    /**
     * The prefix for the Amazon S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-deliverys3keyprefix
     */
    readonly deliveryS3KeyPrefix?: string;
    /**
     * A string containing full conformance pack template body.
     *
     * Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
     *
     * > You can only use a YAML template with two resource types: config rule ( `AWS::Config::ConfigRule` ) and a remediation action ( `AWS::Config::RemediationConfiguration` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-templatebody
     */
    readonly templateBody?: string;
    /**
     * Location of file containing the template body (s3://bucketname/prefix).
     *
     * The uri must point to the conformance pack template (max size: 300 KB) that is located in an Amazon S3 bucket.
     *
     * > You must have access to read Amazon S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-templates3uri
     */
    readonly templateS3Uri?: string;
    /**
     * An object that contains the name or Amazon Resource Name (ARN) of the AWS Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-templatessmdocumentdetails
     */
    readonly templateSsmDocumentDetails?: any | cdk.IResolvable;
}
/**
 * Specifies a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.
 *
 * Before you can create a delivery channel, you must create a configuration recorder. You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.
 *
 * > In the China (Beijing) Region, when you call this action, the Amazon S3 bucket must also be in the China (Beijing) Region. In all the other regions, AWS Config supports cross-region and cross-account delivery channels.
 *
 * You can have only one delivery channel per region per AWS account, and the delivery channel is required to use AWS Config .
 *
 * > AWS Config does not support the delivery channel to an Amazon S3 bucket bucket where object lock is enabled. For more information, see [How S3 Object Lock works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html) .
 *
 * When you create the delivery channel, you can specify; how often AWS Config delivers configuration snapshots to your Amazon S3 bucket (for example, 24 hours), the S3 bucket to which AWS Config sends configuration snapshots and configuration history files, and the Amazon SNS topic to which AWS Config sends notifications about configuration changes, such as updated resources, AWS Config rule evaluations, and when AWS Config delivers the configuration snapshot to your S3 bucket. For more information, see [Deliver Configuration Items](https://docs.aws.amazon.com/config/latest/developerguide/how-does-config-work.html#delivery-channel) in the AWS Config Developer Guide.
 *
 * > To enable AWS Config , you must create a configuration recorder and a delivery channel. If you want to create the resources separately, you must create a configuration recorder before you can create a delivery channel. AWS Config uses the configuration recorder to capture configuration changes to your resources. For more information, see [AWS::Config::ConfigurationRecorder](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html) .
 *
 * For more information, see [Managing the Delivery Channel](https://docs.aws.amazon.com/config/latest/developerguide/manage-delivery-channel.html) in the AWS Config Developer Guide.
 *
 * @cloudformationResource AWS::Config::DeliveryChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html
 */
export declare class CfnDeliveryChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeliveryChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeliveryChannel;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.
     */
    configSnapshotDeliveryProperties?: CfnDeliveryChannel.ConfigSnapshotDeliveryPropertiesProperty | cdk.IResolvable;
    /**
     * A name for the delivery channel.
     */
    name?: string;
    /**
     * The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.
     */
    s3BucketName: string;
    /**
     * The prefix for the specified Amazon S3 bucket.
     */
    s3KeyPrefix?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Key Management Service ( AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config .
     */
    s3KmsKeyArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.
     */
    snsTopicArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeliveryChannelProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDeliveryChannel {
    /**
     * Provides options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.
     *
     * > If you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot, see the following:
     *
     * The frequency for a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:
     *
     * - The value for the `deliveryFrequency` parameter within the delivery channel configuration, which sets how often AWS Config delivers configuration snapshots. This value also sets how often AWS Config invokes evaluations for AWS Config rules.
     * - The value for the `MaximumExecutionFrequency` parameter, which sets the maximum frequency with which AWS Config invokes evaluations for the rule. For more information, see [ConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigRule.html) .
     *
     * If the `deliveryFrequency` value is less frequent than the `MaximumExecutionFrequency` value for a rule, AWS Config invokes the rule only as often as the `deliveryFrequency` value.
     *
     * - For example, you want your rule to run evaluations when AWS Config delivers the configuration snapshot.
     * - You specify the `MaximumExecutionFrequency` value for `Six_Hours` .
     * - You then specify the delivery channel `deliveryFrequency` value for `TwentyFour_Hours` .
     * - Because the value for `deliveryFrequency` is less frequent than `MaximumExecutionFrequency` , AWS Config invokes evaluations for the rule every 24 hours.
     *
     * You should set the `MaximumExecutionFrequency` value to be at least as frequent as the `deliveryFrequency` value. You can view the `deliveryFrequency` value by using the `DescribeDeliveryChannnels` action.
     *
     * To update the `deliveryFrequency` with which AWS Config delivers your configuration snapshots, use the `PutDeliveryChannel` action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-deliverychannel-configsnapshotdeliveryproperties.html
     */
    interface ConfigSnapshotDeliveryPropertiesProperty {
        /**
         * The frequency with which AWS Config delivers configuration snapshots.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-deliverychannel-configsnapshotdeliveryproperties.html#cfn-config-deliverychannel-configsnapshotdeliveryproperties-deliveryfrequency
         */
        readonly deliveryFrequency?: string;
    }
}
/**
 * Properties for defining a `CfnDeliveryChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html
 */
export interface CfnDeliveryChannelProps {
    /**
     * The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-configsnapshotdeliveryproperties
     */
    readonly configSnapshotDeliveryProperties?: CfnDeliveryChannel.ConfigSnapshotDeliveryPropertiesProperty | cdk.IResolvable;
    /**
     * A name for the delivery channel.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the delivery channel name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * Updates are not supported. To change the name, you must run two separate updates. In the first update, delete this resource, and then recreate it with a new name in the second update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-name
     */
    readonly name?: string;
    /**
     * The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.
     *
     * If you specify a bucket that belongs to another AWS account , that bucket must have policies that grant access permissions to AWS Config . For more information, see [Permissions for the Amazon S3 Bucket](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html) in the *AWS Config Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-s3bucketname
     */
    readonly s3BucketName: string;
    /**
     * The prefix for the specified Amazon S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-s3keyprefix
     */
    readonly s3KeyPrefix?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Key Management Service ( AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config .
     *
     * Must belong to the same Region as the destination S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-s3kmskeyarn
     */
    readonly s3KmsKeyArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.
     *
     * If you choose a topic from another account, the topic must have policies that grant access permissions to AWS Config . For more information, see [Permissions for the Amazon SNS Topic](https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html) in the *AWS Config Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-snstopicarn
     */
    readonly snsTopicArn?: string;
}
/**
 * Adds or updates an AWS Config rule for your entire organization to evaluate if your AWS resources comply with your desired configurations.
 *
 * For information on how many organization AWS Config rules you can have per account, see [*Service Limits*](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *AWS Config Developer Guide* .
 *
 * Only a management account and a delegated administrator can create or update an organization AWS Config rule. When calling the `OrganizationConfigRule` resource with a delegated administrator, you must ensure AWS Organizations `ListDelegatedAdministrator` permissions are added. An organization can have up to 3 delegated administrators.
 *
 * The `OrganizationConfigRule` resource enables organization service access through the `EnableAWSServiceAccess` action and creates a service-linked role `AWSServiceRoleForConfigMultiAccountSetup` in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. AWS Config verifies the existence of role with `GetRole` action.
 *
 * To use the `OrganizationConfigRule` resource with delegated administrator, register a delegated administrator by calling AWS Organization `register-delegated-administrator` for `config-multiaccountsetup.amazonaws.com` .
 *
 * There are two types of rules: *AWS Config Managed Rules* and *AWS Config Custom Rules* . You can use `PutOrganizationConfigRule` to create both AWS Config Managed Rules and AWS Config Custom Rules.
 *
 * AWS Config Managed Rules are predefined, customizable rules created by AWS Config . For a list of managed rules, see [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html) . If you are adding an AWS Config managed rule, you must specify the rule's identifier for the `RuleIdentifier` key.
 *
 * AWS Config Custom Rules are rules that you create from scratch. There are two ways to create AWS Config custom rules: with Lambda functions ( [AWS Lambda Developer Guide](https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function) ) and with Guard ( [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard) ), a policy-as-code language. AWS Config custom rules created with AWS Lambda are called *AWS Config Custom Lambda Rules* and AWS Config custom rules created with Guard are called *AWS Config Custom Policy Rules* .
 *
 * If you are adding a new AWS Config Custom Lambda rule, you first need to create an AWS Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use `PutOrganizationConfigRule` to add a Custom Lambda rule to AWS Config , you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function.
 *
 * @cloudformationResource AWS::Config::OrganizationConfigRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html
 */
export declare class CfnOrganizationConfigRule extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnOrganizationConfigRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnOrganizationConfigRule;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A comma-separated list of accounts excluded from organization AWS Config rule.
     */
    excludedAccounts?: Array<string>;
    /**
     * The name that you assign to organization AWS Config rule.
     */
    organizationConfigRuleName: string;
    /**
     * An object that specifies metadata for your organization's AWS Config Custom Policy rule.
     */
    organizationCustomPolicyRuleMetadata?: cdk.IResolvable | CfnOrganizationConfigRule.OrganizationCustomPolicyRuleMetadataProperty;
    /**
     * An `OrganizationCustomRuleMetadata` object.
     */
    organizationCustomRuleMetadata?: cdk.IResolvable | CfnOrganizationConfigRule.OrganizationCustomRuleMetadataProperty;
    /**
     * An `OrganizationManagedRuleMetadata` object.
     */
    organizationManagedRuleMetadata?: cdk.IResolvable | CfnOrganizationConfigRule.OrganizationManagedRuleMetadataProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnOrganizationConfigRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnOrganizationConfigRule {
    /**
     * An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.
     *
     * It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html
     */
    interface OrganizationManagedRuleMetadataProperty {
        /**
         * The description that you provide for your organization AWS Config rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-description
         */
        readonly description?: string;
        /**
         * A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-inputparameters
         */
        readonly inputParameters?: string;
        /**
         * The maximum frequency with which AWS Config runs evaluations for a rule.
         *
         * This is for an AWS Config managed rule that is triggered at a periodic frequency.
         *
         * > By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-maximumexecutionfrequency
         */
        readonly maximumExecutionFrequency?: string;
        /**
         * The ID of the AWS resource that was evaluated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-resourceidscope
         */
        readonly resourceIdScope?: string;
        /**
         * The type of the AWS resource that was evaluated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-resourcetypesscope
         */
        readonly resourceTypesScope?: Array<string>;
        /**
         * For organization config managed rules, a predefined identifier from a list.
         *
         * For example, `IAM_PASSWORD_POLICY` is a managed rule. To reference a managed rule, see [Using AWS Config managed rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-ruleidentifier
         */
        readonly ruleIdentifier: string;
        /**
         * One part of a key-value pair that make up a tag.
         *
         * A key is a general label that acts like a category for more specific tag values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-tagkeyscope
         */
        readonly tagKeyScope?: string;
        /**
         * The optional part of a key-value pair that make up a tag.
         *
         * A value acts as a descriptor within a tag category (key).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-tagvaluescope
         */
        readonly tagValueScope?: string;
    }
    /**
     * An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.
     *
     * It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html
     */
    interface OrganizationCustomRuleMetadataProperty {
        /**
         * The description that you provide for your organization AWS Config rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html#cfn-config-organizationconfigrule-organizationcustomrulemetadata-description
         */
        readonly description?: string;
        /**
         * A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html#cfn-config-organizationconfigrule-organizationcustomrulemetadata-inputparameters
         */
        readonly inputParameters?: string;
        /**
         * The lambda function ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html#cfn-config-organizationconfigrule-organizationcustomrulemetadata-lambdafunctionarn
         */
        readonly lambdaFunctionArn: string;
        /**
         * The maximum frequency with which AWS Config runs evaluations for a rule.
         *
         * Your custom rule is triggered when AWS Config delivers the configuration snapshot. For more information, see `ConfigSnapshotDeliveryProperties` .
         *
         * > By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html#cfn-config-organizationconfigrule-organizationcustomrulemetadata-maximumexecutionfrequency
         */
        readonly maximumExecutionFrequency?: string;
        /**
         * The type of notification that triggers AWS Config to run an evaluation for a rule.
         *
         * You can specify the following notification types:
         *
         * - `ConfigurationItemChangeNotification` - Triggers an evaluation when AWS Config delivers a configuration item as a result of a resource change.
         * - `OversizedConfigurationItemChangeNotification` - Triggers an evaluation when AWS Config delivers an oversized configuration item. AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
         * - `ScheduledNotification` - Triggers a periodic evaluation at the frequency specified for `MaximumExecutionFrequency` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html#cfn-config-organizationconfigrule-organizationcustomrulemetadata-organizationconfigruletriggertypes
         */
        readonly organizationConfigRuleTriggerTypes: Array<string>;
        /**
         * The ID of the AWS resource that was evaluated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html#cfn-config-organizationconfigrule-organizationcustomrulemetadata-resourceidscope
         */
        readonly resourceIdScope?: string;
        /**
         * The type of the AWS resource that was evaluated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html#cfn-config-organizationconfigrule-organizationcustomrulemetadata-resourcetypesscope
         */
        readonly resourceTypesScope?: Array<string>;
        /**
         * One part of a key-value pair that make up a tag.
         *
         * A key is a general label that acts like a category for more specific tag values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html#cfn-config-organizationconfigrule-organizationcustomrulemetadata-tagkeyscope
         */
        readonly tagKeyScope?: string;
        /**
         * The optional part of a key-value pair that make up a tag.
         *
         * A value acts as a descriptor within a tag category (key).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html#cfn-config-organizationconfigrule-organizationcustomrulemetadata-tagvaluescope
         */
        readonly tagValueScope?: string;
    }
    /**
     * An object that specifies metadata for your organization's AWS Config Custom Policy rule.
     *
     * The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of AWS resource, and organization trigger types that initiate AWS Config to evaluate AWS resources against a rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html
     */
    interface OrganizationCustomPolicyRuleMetadataProperty {
        /**
         * A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule.
         *
         * List is null when debug logging is enabled for all accounts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-debuglogdeliveryaccounts
         */
        readonly debugLogDeliveryAccounts?: Array<string>;
        /**
         * The description that you provide for your organization AWS Config Custom Policy rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-description
         */
        readonly description?: string;
        /**
         * A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-inputparameters
         */
        readonly inputParameters?: string;
        /**
         * The maximum frequency with which AWS Config runs evaluations for a rule.
         *
         * Your AWS Config Custom Policy rule is triggered when AWS Config delivers the configuration snapshot. For more information, see `ConfigSnapshotDeliveryProperties` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-maximumexecutionfrequency
         */
        readonly maximumExecutionFrequency?: string;
        /**
         * The type of notification that initiates AWS Config to run an evaluation for a rule.
         *
         * For AWS Config Custom Policy rules, AWS Config supports change-initiated notification types:
         *
         * - `ConfigurationItemChangeNotification` - Initiates an evaluation when AWS Config delivers a configuration item as a result of a resource change.
         * - `OversizedConfigurationItemChangeNotification` - Initiates an evaluation when AWS Config delivers an oversized configuration item. AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-organizationconfigruletriggertypes
         */
        readonly organizationConfigRuleTriggerTypes?: Array<string>;
        /**
         * The policy definition containing the logic for your organization AWS Config Custom Policy rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-policytext
         */
        readonly policyText: string;
        /**
         * The ID of the AWS resource that was evaluated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-resourceidscope
         */
        readonly resourceIdScope?: string;
        /**
         * The type of the AWS resource that was evaluated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-resourcetypesscope
         */
        readonly resourceTypesScope?: Array<string>;
        /**
         * The runtime system for your organization AWS Config Custom Policy rules.
         *
         * Guard is a policy-as-code language that allows you to write policies that are enforced by AWS Config Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-runtime
         */
        readonly runtime: string;
        /**
         * One part of a key-value pair that make up a tag.
         *
         * A key is a general label that acts like a category for more specific tag values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-tagkeyscope
         */
        readonly tagKeyScope?: string;
        /**
         * The optional part of a key-value pair that make up a tag.
         *
         * A value acts as a descriptor within a tag category (key).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-tagvaluescope
         */
        readonly tagValueScope?: string;
    }
}
/**
 * Properties for defining a `CfnOrganizationConfigRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html
 */
export interface CfnOrganizationConfigRuleProps {
    /**
     * A comma-separated list of accounts excluded from organization AWS Config rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html#cfn-config-organizationconfigrule-excludedaccounts
     */
    readonly excludedAccounts?: Array<string>;
    /**
     * The name that you assign to organization AWS Config rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html#cfn-config-organizationconfigrule-organizationconfigrulename
     */
    readonly organizationConfigRuleName: string;
    /**
     * An object that specifies metadata for your organization's AWS Config Custom Policy rule.
     *
     * The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of AWS resource, and organization trigger types that initiate AWS Config to evaluate AWS resources against a rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata
     */
    readonly organizationCustomPolicyRuleMetadata?: cdk.IResolvable | CfnOrganizationConfigRule.OrganizationCustomPolicyRuleMetadataProperty;
    /**
     * An `OrganizationCustomRuleMetadata` object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html#cfn-config-organizationconfigrule-organizationcustomrulemetadata
     */
    readonly organizationCustomRuleMetadata?: cdk.IResolvable | CfnOrganizationConfigRule.OrganizationCustomRuleMetadataProperty;
    /**
     * An `OrganizationManagedRuleMetadata` object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html#cfn-config-organizationconfigrule-organizationmanagedrulemetadata
     */
    readonly organizationManagedRuleMetadata?: cdk.IResolvable | CfnOrganizationConfigRule.OrganizationManagedRuleMetadataProperty;
}
/**
 * OrganizationConformancePack deploys conformance packs across member accounts in an AWS Organizations .
 *
 * OrganizationConformancePack enables organization service access for `config-multiaccountsetup.amazonaws.com` through the `EnableAWSServiceAccess` action and creates a service linked role in the master account of your organization. The service linked role is created only when the role does not exist in the master account.
 *
 * @cloudformationResource AWS::Config::OrganizationConformancePack
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html
 */
export declare class CfnOrganizationConformancePack extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnOrganizationConformancePack from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnOrganizationConformancePack;
    /**
     * A list of `ConformancePackInputParameter` objects.
     */
    conformancePackInputParameters?: Array<CfnOrganizationConformancePack.ConformancePackInputParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the Amazon S3 bucket where AWS Config stores conformance pack templates.
     */
    deliveryS3Bucket?: string;
    /**
     * Any folder structure you want to add to an Amazon S3 bucket.
     */
    deliveryS3KeyPrefix?: string;
    /**
     * A comma-separated list of accounts excluded from organization conformance pack.
     */
    excludedAccounts?: Array<string>;
    /**
     * The name you assign to an organization conformance pack.
     */
    organizationConformancePackName: string;
    /**
     * A string containing full conformance pack template body.
     */
    templateBody?: string;
    /**
     * Location of file containing the template body.
     */
    templateS3Uri?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnOrganizationConformancePackProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnOrganizationConformancePack {
    /**
     * Input parameters in the form of key-value pairs for the conformance pack, both of which you define.
     *
     * Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconformancepack-conformancepackinputparameter.html
     */
    interface ConformancePackInputParameterProperty {
        /**
         * One part of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconformancepack-conformancepackinputparameter.html#cfn-config-organizationconformancepack-conformancepackinputparameter-parametername
         */
        readonly parameterName: string;
        /**
         * One part of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconformancepack-conformancepackinputparameter.html#cfn-config-organizationconformancepack-conformancepackinputparameter-parametervalue
         */
        readonly parameterValue: string;
    }
}
/**
 * Properties for defining a `CfnOrganizationConformancePack`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html
 */
export interface CfnOrganizationConformancePackProps {
    /**
     * A list of `ConformancePackInputParameter` objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-conformancepackinputparameters
     */
    readonly conformancePackInputParameters?: Array<CfnOrganizationConformancePack.ConformancePackInputParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the Amazon S3 bucket where AWS Config stores conformance pack templates.
     *
     * > This field is optional.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-deliverys3bucket
     */
    readonly deliveryS3Bucket?: string;
    /**
     * Any folder structure you want to add to an Amazon S3 bucket.
     *
     * > This field is optional.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-deliverys3keyprefix
     */
    readonly deliveryS3KeyPrefix?: string;
    /**
     * A comma-separated list of accounts excluded from organization conformance pack.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-excludedaccounts
     */
    readonly excludedAccounts?: Array<string>;
    /**
     * The name you assign to an organization conformance pack.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-organizationconformancepackname
     */
    readonly organizationConformancePackName: string;
    /**
     * A string containing full conformance pack template body.
     *
     * Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-templatebody
     */
    readonly templateBody?: string;
    /**
     * Location of file containing the template body.
     *
     * The uri must point to the conformance pack template (max size: 300 KB).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-templates3uri
     */
    readonly templateS3Uri?: string;
}
/**
 * An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
 *
 * @cloudformationResource AWS::Config::RemediationConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html
 */
export declare class CfnRemediationConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRemediationConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRemediationConfiguration;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The remediation is triggered automatically.
     */
    automatic?: boolean | cdk.IResolvable;
    /**
     * The name of the AWS Config rule.
     */
    configRuleName: string;
    /**
     * An ExecutionControls object.
     */
    executionControls?: CfnRemediationConfiguration.ExecutionControlsProperty | cdk.IResolvable;
    /**
     * The maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.
     */
    maximumAutomaticAttempts?: number;
    /**
     * An object of the RemediationParameterValue. For more information, see [RemediationParameterValue](https://docs.aws.amazon.com/config/latest/APIReference/API_RemediationParameterValue.html) .
     */
    parameters?: any | cdk.IResolvable;
    /**
     * The type of a resource.
     */
    resourceType?: string;
    /**
     * Time window to determine whether or not to add a remediation exception to prevent infinite remediation attempts.
     */
    retryAttemptSeconds?: number;
    /**
     * Target ID is the name of the SSM document.
     */
    targetId: string;
    /**
     * The type of the target.
     */
    targetType: string;
    /**
     * Version of the target. For example, version of the SSM document.
     */
    targetVersion?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRemediationConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRemediationConfiguration {
    /**
     * An ExecutionControls object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-executioncontrols.html
     */
    interface ExecutionControlsProperty {
        /**
         * A SsmControls object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-executioncontrols.html#cfn-config-remediationconfiguration-executioncontrols-ssmcontrols
         */
        readonly ssmControls?: cdk.IResolvable | CfnRemediationConfiguration.SsmControlsProperty;
    }
    /**
     * AWS Systems Manager (SSM) specific remediation controls.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-ssmcontrols.html
     */
    interface SsmControlsProperty {
        /**
         * The maximum percentage of remediation actions allowed to run in parallel on the non-compliant resources for that specific rule.
         *
         * You can specify a percentage, such as 10%. The default value is 10.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-ssmcontrols.html#cfn-config-remediationconfiguration-ssmcontrols-concurrentexecutionratepercentage
         */
        readonly concurrentExecutionRatePercentage?: number;
        /**
         * The percentage of errors that are allowed before SSM stops running automations on non-compliant resources for that specific rule.
         *
         * You can specify a percentage of errors, for example 10%. If you do not specifiy a percentage, the default is 50%. For example, if you set the ErrorPercentage to 40% for 10 non-compliant resources, then SSM stops running the automations when the fifth error is received.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-ssmcontrols.html#cfn-config-remediationconfiguration-ssmcontrols-errorpercentage
         */
        readonly errorPercentage?: number;
    }
    /**
     * The value is either a dynamic (resource) value or a static value.
     *
     * You must select either a dynamic value or a static value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-remediationparametervalue.html
     */
    interface RemediationParameterValueProperty {
        /**
         * The value is dynamic and changes at run-time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-remediationparametervalue.html#cfn-config-remediationconfiguration-remediationparametervalue-resourcevalue
         */
        readonly resourceValue?: cdk.IResolvable | CfnRemediationConfiguration.ResourceValueProperty;
        /**
         * The value is static and does not change at run-time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-remediationparametervalue.html#cfn-config-remediationconfiguration-remediationparametervalue-staticvalue
         */
        readonly staticValue?: cdk.IResolvable | CfnRemediationConfiguration.StaticValueProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-resourcevalue.html
     */
    interface ResourceValueProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-resourcevalue.html#cfn-config-remediationconfiguration-resourcevalue-value
         */
        readonly value?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-staticvalue.html
     */
    interface StaticValueProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-staticvalue.html#cfn-config-remediationconfiguration-staticvalue-value
         */
        readonly value?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-staticvalue.html#cfn-config-remediationconfiguration-staticvalue-values
         */
        readonly values?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnRemediationConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html
 */
export interface CfnRemediationConfigurationProps {
    /**
     * The remediation is triggered automatically.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#cfn-config-remediationconfiguration-automatic
     */
    readonly automatic?: boolean | cdk.IResolvable;
    /**
     * The name of the AWS Config rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#cfn-config-remediationconfiguration-configrulename
     */
    readonly configRuleName: string;
    /**
     * An ExecutionControls object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#cfn-config-remediationconfiguration-executioncontrols
     */
    readonly executionControls?: CfnRemediationConfiguration.ExecutionControlsProperty | cdk.IResolvable;
    /**
     * The maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.
     *
     * For example, if you specify MaximumAutomaticAttempts as 5 with RetryAttemptSeconds as 50 seconds, AWS Config will put a RemediationException on your behalf for the failing resource after the 5th failed attempt within 50 seconds.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#cfn-config-remediationconfiguration-maximumautomaticattempts
     */
    readonly maximumAutomaticAttempts?: number;
    /**
     * An object of the RemediationParameterValue. For more information, see [RemediationParameterValue](https://docs.aws.amazon.com/config/latest/APIReference/API_RemediationParameterValue.html) .
     *
     * > The type is a map of strings to RemediationParameterValue.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#cfn-config-remediationconfiguration-parameters
     */
    readonly parameters?: any | cdk.IResolvable;
    /**
     * The type of a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#cfn-config-remediationconfiguration-resourcetype
     */
    readonly resourceType?: string;
    /**
     * Time window to determine whether or not to add a remediation exception to prevent infinite remediation attempts.
     *
     * If `MaximumAutomaticAttempts` remediation attempts have been made under `RetryAttemptSeconds` , a remediation exception will be added to the resource. If you do not select a number, the default is 60 seconds.
     *
     * For example, if you specify `RetryAttemptSeconds` as 50 seconds and `MaximumAutomaticAttempts` as 5, AWS Config will run auto-remediations 5 times within 50 seconds before adding a remediation exception to the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#cfn-config-remediationconfiguration-retryattemptseconds
     */
    readonly retryAttemptSeconds?: number;
    /**
     * Target ID is the name of the SSM document.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#cfn-config-remediationconfiguration-targetid
     */
    readonly targetId: string;
    /**
     * The type of the target.
     *
     * Target executes remediation. For example, SSM document.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#cfn-config-remediationconfiguration-targettype
     */
    readonly targetType: string;
    /**
     * Version of the target. For example, version of the SSM document.
     *
     * > If you make backward incompatible changes to the SSM document, you must call PutRemediationConfiguration API again to ensure the remediations can run.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#cfn-config-remediationconfiguration-targetversion
     */
    readonly targetVersion?: string;
}
/**
 * Provides the details of a stored query.
 *
 * @cloudformationResource AWS::Config::StoredQuery
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html
 */
export declare class CfnStoredQuery extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStoredQuery from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStoredQuery;
    /**
     * Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.
     *
     * @cloudformationAttribute QueryArn
     */
    readonly attrQueryArn: string;
    /**
     * The ID of the query.
     *
     * @cloudformationAttribute QueryId
     */
    readonly attrQueryId: string;
    /**
     * A unique description for the query.
     */
    queryDescription?: string;
    /**
     * The expression of the query.
     */
    queryExpression: string;
    /**
     * The name of the query.
     */
    queryName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStoredQueryProps);
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
 * Properties for defining a `CfnStoredQuery`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html
 */
export interface CfnStoredQueryProps {
    /**
     * A unique description for the query.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html#cfn-config-storedquery-querydescription
     */
    readonly queryDescription?: string;
    /**
     * The expression of the query.
     *
     * For example, `SELECT resourceId, resourceType, supplementaryConfiguration.BucketVersioningConfiguration.status WHERE resourceType = 'AWS::S3::Bucket' AND supplementaryConfiguration.BucketVersioningConfiguration.status = 'Off'.`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html#cfn-config-storedquery-queryexpression
     */
    readonly queryExpression: string;
    /**
     * The name of the query.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html#cfn-config-storedquery-queryname
     */
    readonly queryName: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html#cfn-config-storedquery-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
