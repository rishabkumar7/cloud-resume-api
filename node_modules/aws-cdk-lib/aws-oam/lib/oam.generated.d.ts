import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a link between a source account and a sink that you have created in a monitoring account.
 *
 * Before you create a link, you must create a sink in the monitoring account. The sink must have a sink policy that permits the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization, an organizational unit, or to individual accounts.
 *
 * For more information, see [CreateSink](https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html) and [PutSinkPolicy](https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html) .
 *
 * Each monitoring account can be linked to as many as 100,000 source accounts.
 *
 * Each source account can be linked to as many as five monitoring accounts.
 *
 * @cloudformationResource AWS::Oam::Link
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html
 */
export declare class CfnLink extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLink from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLink;
    /**
     * The ARN of the link. For example, `arn:aws:oam:us-west-1:111111111111:link:abcd1234-a123-456a-a12b-a123b456c789`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The friendly human-readable name used to identify this source account when it is viewed from the monitoring account. For example, `my-account1` .
     *
     * @cloudformationAttribute Label
     */
    readonly attrLabel: string;
    /**
     * Specify a friendly human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.
     */
    labelTemplate?: string;
    /**
     * Use this structure to optionally create filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account.
     */
    linkConfiguration?: cdk.IResolvable | CfnLink.LinkConfigurationProperty;
    /**
     * An array of strings that define which types of data that the source account shares with the monitoring account.
     */
    resourceTypes: Array<string>;
    /**
     * The ARN of the sink in the monitoring account that you want to link to.
     */
    sinkIdentifier: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to the link.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLinkProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLink {
    /**
     * Use this structure to optionally create filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-oam-link-linkconfiguration.html
     */
    interface LinkConfigurationProperty {
        /**
         * Use this structure to filter which log groups are to share log events from this source account to the monitoring account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-oam-link-linkconfiguration.html#cfn-oam-link-linkconfiguration-loggroupconfiguration
         */
        readonly logGroupConfiguration?: cdk.IResolvable | CfnLink.LinkFilterProperty;
        /**
         * Use this structure to filter which metric namespaces are to be shared from the source account to the monitoring account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-oam-link-linkconfiguration.html#cfn-oam-link-linkconfiguration-metricconfiguration
         */
        readonly metricConfiguration?: cdk.IResolvable | CfnLink.LinkFilterProperty;
    }
    /**
     * When used in `MetricConfiguration` this field specifies which metric namespaces are to be shared with the monitoring account.
     *
     * When used in `LogGroupConfiguration` this field specifies which log groups are to share their log events with the monitoring account. Use the term `LogGroupName` and one or more of the following operands.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-oam-link-linkfilter.html
     */
    interface LinkFilterProperty {
        /**
         * When used in `MetricConfiguration` this field specifies which metric namespaces are to be shared with the monitoring account.
         *
         * When used in `LogGroupConfiguration` this field specifies which log groups are to share their log events with the monitoring account. Use the term `LogGroupName` and one or more of the following operands.
         *
         * Use single quotation marks (') around log group names and metric namespaces.
         *
         * The matching of log group names and metric namespaces is case sensitive. Each filter has a limit of five conditional operands. Conditional operands are `AND` and `OR` .
         *
         * - `=` and `!=`
         * - `AND`
         * - `OR`
         * - `LIKE` and `NOT LIKE` . These can be used only as prefix searches. Include a `%` at the end of the string that you want to search for and include.
         * - `IN` and `NOT IN` , using parentheses `( )`
         *
         * Examples:
         *
         * - `Namespace NOT LIKE 'AWS/%'` includes only namespaces that don't start with `AWS/` , such as custom namespaces.
         * - `Namespace IN ('AWS/EC2', 'AWS/ELB', 'AWS/S3')` includes only the metrics in the EC2, Elastic Load Balancing , and Amazon S3 namespaces.
         * - `Namespace = 'AWS/EC2' OR Namespace NOT LIKE 'AWS/%'` includes only the EC2 namespace and your custom namespaces.
         * - `LogGroupName IN ('This-Log-Group', 'Other-Log-Group')` includes only the log groups with names `This-Log-Group` and `Other-Log-Group` .
         * - `LogGroupName NOT IN ('Private-Log-Group', 'Private-Log-Group-2')` includes all log groups except the log groups with names `Private-Log-Group` and `Private-Log-Group-2` .
         * - `LogGroupName LIKE 'aws/lambda/%' OR LogGroupName LIKE 'AWSLogs%'` includes all log groups that have names that start with `aws/lambda/` or `AWSLogs` .
         *
         * > If you are updating a link that uses filters, you can specify `*` as the only value for the `filter` parameter to delete the filter and share all log groups with the monitoring account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-oam-link-linkfilter.html#cfn-oam-link-linkfilter-filter
         */
        readonly filter: string;
    }
}
/**
 * Properties for defining a `CfnLink`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html
 */
export interface CfnLinkProps {
    /**
     * Specify a friendly human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.
     *
     * You can include the following variables in your template:
     *
     * - `$AccountName` is the name of the account
     * - `$AccountEmail` is a globally-unique email address, which includes the email domain, such as `mariagarcia@example.com`
     * - `$AccountEmailNoDomain` is an email address without the domain name, such as `mariagarcia`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-labeltemplate
     */
    readonly labelTemplate?: string;
    /**
     * Use this structure to optionally create filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-linkconfiguration
     */
    readonly linkConfiguration?: cdk.IResolvable | CfnLink.LinkConfigurationProperty;
    /**
     * An array of strings that define which types of data that the source account shares with the monitoring account.
     *
     * Valid values are `AWS::CloudWatch::Metric | AWS::Logs::LogGroup | AWS::XRay::Trace | AWS::ApplicationInsights::Application | AWS::InternetMonitor::Monitor` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-resourcetypes
     */
    readonly resourceTypes: Array<string>;
    /**
     * The ARN of the sink in the monitoring account that you want to link to.
     *
     * You can use [ListSinks](https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html) to find the ARNs of sinks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-sinkidentifier
     */
    readonly sinkIdentifier: string;
    /**
     * An array of key-value pairs to apply to the link.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Creates or updates a *sink* in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability.
 *
 * A sink is a resource that represents an attachment point in a monitoring account, which source accounts can link to to be able to send observability data.
 *
 * After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see [PutSinkPolicy](https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html) .
 *
 * An account can have one sink.
 *
 * @cloudformationResource AWS::Oam::Sink
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html
 */
export declare class CfnSink extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSink from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSink;
    /**
     * The ARN of the sink. For example, `arn:aws:oam:us-west-1:111111111111:sink:abcd1234-a123-456a-a12b-a123b456c789`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A name for the sink.
     */
    name: string;
    /**
     * The IAM policy that grants permissions to source accounts to link to this sink.
     */
    policy?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to the sink.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSinkProps);
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
 * Properties for defining a `CfnSink`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html
 */
export interface CfnSinkProps {
    /**
     * A name for the sink.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html#cfn-oam-sink-name
     */
    readonly name: string;
    /**
     * The IAM policy that grants permissions to source accounts to link to this sink.
     *
     * The policy can grant permission in the following ways:
     *
     * - Include organization IDs or organization paths to permit all accounts in an organization
     * - Include account IDs to permit the specified accounts
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html#cfn-oam-sink-policy
     */
    readonly policy?: any | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to the sink.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html#cfn-oam-sink-tags
     */
    readonly tags?: Record<string, string>;
}
