import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates or updates an account-level data protection policy or subscription filter policy that applies to all log groups or a subset of log groups in the account.
 *
 * *Data protection policy*
 *
 * A data protection policy can help safeguard sensitive data that's ingested by your log groups by auditing and masking the sensitive log data. Each account can have only one account-level data protection policy.
 *
 * > Sensitive data is detected and masked when it is ingested into a log group. When you set a data protection policy, log events ingested into the log groups before that time are not masked.
 *
 * If you create a data protection policy for your whole account, it applies to both existing log groups and all log groups that are created later in this account. The account policy is applied to existing log groups with eventual consistency. It might take up to 5 minutes before sensitive data in existing log groups begins to be masked.
 *
 * By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the `logs:Unmask` permission can use a [GetLogEvents](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html) or [FilterLogEvents](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html) operation with the `unmask` parameter set to `true` to view the unmasked log events. Users with the `logs:Unmask` can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the `unmask` query command.
 *
 * For more information, including a list of types of data that can be audited and masked, see [Protect sensitive log data with masking](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html) .
 *
 * To create an account-level policy, you must be signed on with the `logs:PutDataProtectionPolicy` and `logs:PutAccountPolicy` permissions.
 *
 * An account-level policy applies to all log groups in the account. You can also create a data protection policy that applies to just one log group. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.
 *
 * *Subscription filter policy*
 *
 * A subscription filter policy sets up a real-time feed of log events from CloudWatch Logs to other AWS services. Account-level subscription filter policies apply to both existing log groups and log groups that are created later in this account. Supported destinations are Kinesis Data Streams , Firehose , and Lambda . When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format.
 *
 * The following destinations are supported for subscription filters:
 *
 * - An Kinesis Data Streams data stream in the same account as the subscription policy, for same-account delivery.
 * - An Firehose data stream in the same account as the subscription policy, for same-account delivery.
 * - A Lambda function in the same account as the subscription policy, for same-account delivery.
 * - A logical destination in a different account created with [PutDestination](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html) , for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations.
 *
 * Each account can have one account-level subscription filter policy. If you are updating an existing filter, you must specify the correct name in `PolicyName` . To perform a `PutAccountPolicy` subscription filter operation for any destination except a Lambda function, you must also have the `iam:PassRole` permission.
 *
 * @cloudformationResource AWS::Logs::AccountPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html
 */
export declare class CfnAccountPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccountPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccountPolicy;
    /**
     * The account ID of the account where this policy was created. For example, `123456789012` .
     *
     * @cloudformationAttribute AccountId
     */
    readonly attrAccountId: string;
    /**
     * Specify the policy, in JSON.
     */
    policyDocument: string;
    /**
     * A name for the policy.
     */
    policyName: string;
    /**
     * The type of policy that you're creating or updating.
     */
    policyType: string;
    /**
     * Currently the only valid value for this parameter is `ALL` , which specifies that the policy applies to all log groups in the account.
     */
    scope?: string;
    /**
     * Use this parameter to apply a subscription filter policy to a subset of log groups in the account.
     */
    selectionCriteria?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccountPolicyProps);
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
 * Properties for defining a `CfnAccountPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html
 */
export interface CfnAccountPolicyProps {
    /**
     * Specify the policy, in JSON.
     *
     * *Data protection policy*
     *
     * A data protection policy must include two JSON blocks:
     *
     * - The first block must include both a `DataIdentifer` array and an `Operation` property with an `Audit` action. The `DataIdentifer` array lists the types of sensitive data that you want to mask. For more information about the available options, see [Types of data that you can mask](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-types.html) .
     *
     * The `Operation` property with an `Audit` action is required to find the sensitive data terms. This `Audit` action must contain a `FindingsDestination` object. You can optionally use that `FindingsDestination` object to list one or more destinations to send audit findings to. If you specify destinations such as log groups, Firehose streams, and S3 buckets, they must already exist.
     * - The second block must include both a `DataIdentifer` array and an `Operation` property with an `Deidentify` action. The `DataIdentifer` array must exactly match the `DataIdentifer` array in the first block of the policy.
     *
     * The `Operation` property with the `Deidentify` action is what actually masks the data, and it must contain the `"MaskConfig": {}` object. The `"MaskConfig": {}` object must be empty.
     *
     * > The contents of the two `DataIdentifer` arrays must match exactly.
     *
     * In addition to the two JSON blocks, the `policyDocument` can also include `Name` , `Description` , and `Version` fields. The `Name` is different than the operation's `policyName` parameter, and is used as a dimension when CloudWatch Logs reports audit findings metrics to CloudWatch .
     *
     * The JSON specified in `policyDocument` can be up to 30,720 characters long.
     *
     * *Subscription filter policy*
     *
     * A subscription filter policy can include the following attributes in a JSON block:
     *
     * - *DestinationArn* The ARN of the destination to deliver log events to. Supported destinations are:
     *
     * - An Kinesis Data Streams data stream in the same account as the subscription policy, for same-account delivery.
     * - An Firehose data stream in the same account as the subscription policy, for same-account delivery.
     * - A Lambda function in the same account as the subscription policy, for same-account delivery.
     * - A logical destination in a different account created with [PutDestination](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html) , for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations.
     * - *RoleArn* The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.
     * - *FilterPattern* A filter pattern for subscribing to a filtered stream of log events.
     * - *Distribution* The method used to distribute log data to the destination. By default, log data is grouped by log stream, but the grouping can be set to `Random` for a more even distribution. This property is only applicable when the destination is an Kinesis Data Streams data stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-policydocument
     */
    readonly policyDocument: string;
    /**
     * A name for the policy.
     *
     * This must be unique within the account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-policyname
     */
    readonly policyName: string;
    /**
     * The type of policy that you're creating or updating.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-policytype
     */
    readonly policyType: string;
    /**
     * Currently the only valid value for this parameter is `ALL` , which specifies that the policy applies to all log groups in the account.
     *
     * If you omit this parameter, the default of `ALL` is used. To scope down a subscription filter policy to a subset of log groups, use the `selectionCriteria` parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-scope
     */
    readonly scope?: string;
    /**
     * Use this parameter to apply a subscription filter policy to a subset of log groups in the account.
     *
     * Currently, the only supported filter is `LogGroupName NOT IN []` . The `selectionCriteria` string can be up to 25KB in length. The length is determined by using its UTF-8 bytes.
     *
     * Using the `selectionCriteria` parameter is useful to help prevent infinite loops. For more information, see [Log recursion prevention](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions-recursion-prevention.html) .
     *
     * Specifing `selectionCriteria` is valid only when you specify `SUBSCRIPTION_FILTER_POLICY` for `policyType` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-selectioncriteria
     */
    readonly selectionCriteria?: string;
}
/**
 * The AWS::Logs::Destination resource specifies a CloudWatch Logs destination.
 *
 * A destination encapsulates a physical resource (such as an Amazon Kinesis data stream) and enables you to subscribe that resource to a stream of log events.
 *
 * @cloudformationResource AWS::Logs::Destination
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html
 */
export declare class CfnDestination extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDestination from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDestination;
    /**
     * The ARN of the CloudWatch Logs destination, such as `arn:aws:logs:us-west-1:123456789012:destination:MyDestination` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the destination.
     */
    destinationName: string;
    /**
     * An IAM policy document that governs which AWS accounts can create subscription filters against this destination.
     */
    destinationPolicy?: string;
    /**
     * The ARN of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource.
     */
    roleArn: string;
    /**
     * The Amazon Resource Name (ARN) of the physical target where the log events are delivered (for example, a Kinesis stream).
     */
    targetArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDestinationProps);
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
 * Properties for defining a `CfnDestination`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html
 */
export interface CfnDestinationProps {
    /**
     * The name of the destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html#cfn-logs-destination-destinationname
     */
    readonly destinationName: string;
    /**
     * An IAM policy document that governs which AWS accounts can create subscription filters against this destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html#cfn-logs-destination-destinationpolicy
     */
    readonly destinationPolicy?: string;
    /**
     * The ARN of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html#cfn-logs-destination-rolearn
     */
    readonly roleArn: string;
    /**
     * The Amazon Resource Name (ARN) of the physical target where the log events are delivered (for example, a Kinesis stream).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html#cfn-logs-destination-targetarn
     */
    readonly targetArn: string;
}
/**
 * The `AWS::Logs::LogGroup` resource specifies a log group.
 *
 * A log group defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.
 *
 * You can create up to 1,000,000 log groups per Region per account. You must use the following guidelines when naming a log group:
 *
 * - Log group names must be unique within a Region for an AWS account.
 * - Log group names can be between 1 and 512 characters long.
 * - Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).
 *
 * @cloudformationResource AWS::Logs::LogGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html
 */
export declare class CfnLogGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLogGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLogGroup;
    /**
     * The ARN of the log group, such as `arn:aws:logs:us-west-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Creates a data protection policy and assigns it to the log group.
     */
    dataProtectionPolicy?: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key to use when encrypting log data.
     */
    kmsKeyId?: string;
    /**
     * Specifies the log group class for this log group. There are two classes:.
     */
    logGroupClass?: string;
    /**
     * The name of the log group.
     */
    logGroupName?: string;
    /**
     * The number of days to retain the log events in the specified log group.
     */
    retentionInDays?: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to the log group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnLogGroupProps);
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
 * Properties for defining a `CfnLogGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html
 */
export interface CfnLogGroupProps {
    /**
     * Creates a data protection policy and assigns it to the log group.
     *
     * A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data. When a user who does not have permission to view masked data views a log event that includes masked data, the sensitive data is replaced by asterisks.
     *
     * For more information, including a list of types of data that can be audited and masked, see [Protect sensitive log data with masking](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-dataprotectionpolicy
     */
    readonly dataProtectionPolicy?: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key to use when encrypting log data.
     *
     * To associate an AWS KMS key with the log group, specify the ARN of that KMS key here. If you do so, ingested data is encrypted using this key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs . This enables CloudWatch Logs to decrypt this data whenever it is requested.
     *
     * If you attempt to associate a KMS key with the log group but the KMS key doesn't exist or is deactivated, you will receive an `InvalidParameterException` error.
     *
     * Log group data is always encrypted in CloudWatch Logs . If you omit this key, the encryption does not use AWS KMS . For more information, see [Encrypt log data in CloudWatch Logs using AWS Key Management Service](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies the log group class for this log group. There are two classes:.
     *
     * - The `Standard` log class supports all CloudWatch Logs features.
     * - The `Infrequent Access` log class supports a subset of CloudWatch Logs features and incurs lower costs.
     *
     * For details about the features supported by each class, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)
     *
     * @default - "STANDARD"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-loggroupclass
     */
    readonly logGroupClass?: string;
    /**
     * The name of the log group.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique ID for the log group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-loggroupname
     */
    readonly logGroupName?: string;
    /**
     * The number of days to retain the log events in the specified log group.
     *
     * Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.
     *
     * To set a log group so that its log events do not expire, use [DeleteRetentionPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-retentionindays
     */
    readonly retentionInDays?: number;
    /**
     * An array of key-value pairs to apply to the log group.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Logs::LogStream` resource specifies an Amazon CloudWatch Logs log stream in a specific log group.
 *
 * A log stream represents the sequence of events coming from an application instance or resource that you are monitoring.
 *
 * There is no limit on the number of log streams that you can create for a log group.
 *
 * You must use the following guidelines when naming a log stream:
 *
 * - Log stream names must be unique within the log group.
 * - Log stream names can be between 1 and 512 characters long.
 * - The ':' (colon) and '*' (asterisk) characters are not allowed.
 *
 * @cloudformationResource AWS::Logs::LogStream
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html
 */
export declare class CfnLogStream extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLogStream from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLogStream;
    /**
     * The name of the log group where the log stream is created.
     */
    logGroupName: string;
    /**
     * The name of the log stream.
     */
    logStreamName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLogStreamProps);
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
 * Properties for defining a `CfnLogStream`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html
 */
export interface CfnLogStreamProps {
    /**
     * The name of the log group where the log stream is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html#cfn-logs-logstream-loggroupname
     */
    readonly logGroupName: string;
    /**
     * The name of the log stream.
     *
     * The name must be unique within the log group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html#cfn-logs-logstream-logstreamname
     */
    readonly logStreamName?: string;
}
/**
 * The `AWS::Logs::MetricFilter` resource specifies a metric filter that describes how CloudWatch Logs extracts information from logs and transforms it into Amazon CloudWatch metrics.
 *
 * If you have multiple metric filters that are associated with a log group, all the filters are applied to the log streams in that group.
 *
 * The maximum number of metric filters that can be associated with a log group is 100.
 *
 * @cloudformationResource AWS::Logs::MetricFilter
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html
 */
export declare class CfnMetricFilter extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMetricFilter from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMetricFilter;
    /**
     * The name of the metric filter.
     */
    filterName?: string;
    /**
     * A filter pattern for extracting metric data out of ingested log events.
     */
    filterPattern: string;
    /**
     * The name of an existing log group that you want to associate with this metric filter.
     */
    logGroupName: string;
    /**
     * The metric transformations.
     */
    metricTransformations: Array<cdk.IResolvable | CfnMetricFilter.MetricTransformationProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMetricFilterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMetricFilter {
    /**
     * `MetricTransformation` is a property of the `AWS::Logs::MetricFilter` resource that describes how to transform log streams into a CloudWatch metric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html
     */
    interface MetricTransformationProperty {
        /**
         * (Optional) The value to emit when a filter pattern does not match a log event.
         *
         * This value can be null.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html#cfn-logs-metricfilter-metrictransformation-defaultvalue
         */
        readonly defaultValue?: number;
        /**
         * The fields to use as dimensions for the metric. One metric filter can include as many as three dimensions.
         *
         * > Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
         * >
         * > CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
         * >
         * > You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated AWS Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html#cfn-logs-metricfilter-metrictransformation-dimensions
         */
        readonly dimensions?: Array<CfnMetricFilter.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the CloudWatch metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html#cfn-logs-metricfilter-metrictransformation-metricname
         */
        readonly metricName: string;
        /**
         * A custom namespace to contain your metric in CloudWatch.
         *
         * Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html#cfn-logs-metricfilter-metrictransformation-metricnamespace
         */
        readonly metricNamespace: string;
        /**
         * The value that is published to the CloudWatch metric.
         *
         * For example, if you're counting the occurrences of a particular term like `Error` , specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as `$.size` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html#cfn-logs-metricfilter-metrictransformation-metricvalue
         */
        readonly metricValue: string;
        /**
         * The unit to assign to the metric.
         *
         * If you omit this, the unit is set as `None` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html#cfn-logs-metricfilter-metrictransformation-unit
         */
        readonly unit?: string;
    }
    /**
     * Specifies the CloudWatch metric dimensions to publish with this metric.
     *
     * Because dimensions are part of the unique identifier for a metric, whenever a unique dimension name/value pair is extracted from your logs, you are creating a new variation of that metric.
     *
     * For more information about publishing dimensions with metrics created by metric filters, see [Publishing dimensions with metrics from values in JSON or space-delimited log events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html#logs-metric-filters-dimensions) .
     *
     * > Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
     * >
     * > To help prevent accidental high charges, Amazon disables a metric filter if it generates 1000 different name/value pairs for the dimensions that you have specified within a certain amount of time.
     * >
     * > You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated AWS Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-dimension.html
     */
    interface DimensionProperty {
        /**
         * The name for the CloudWatch metric dimension that the metric filter creates.
         *
         * Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-dimension.html#cfn-logs-metricfilter-dimension-key
         */
        readonly key: string;
        /**
         * The log event field that will contain the value for this dimension.
         *
         * This dimension will only be published for a metric if the value is found in the log event. For example, `$.eventType` for JSON log events, or `$server` for space-delimited log events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-dimension.html#cfn-logs-metricfilter-dimension-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnMetricFilter`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html
 */
export interface CfnMetricFilterProps {
    /**
     * The name of the metric filter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-filtername
     */
    readonly filterName?: string;
    /**
     * A filter pattern for extracting metric data out of ingested log events.
     *
     * For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-filterpattern
     */
    readonly filterPattern: string;
    /**
     * The name of an existing log group that you want to associate with this metric filter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-loggroupname
     */
    readonly logGroupName: string;
    /**
     * The metric transformations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-metrictransformations
     */
    readonly metricTransformations: Array<cdk.IResolvable | CfnMetricFilter.MetricTransformationProperty> | cdk.IResolvable;
}
/**
 * Creates a query definition for CloudWatch Logs Insights.
 *
 * For more information, see [Analyzing Log Data with CloudWatch Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html) .
 *
 * @cloudformationResource AWS::Logs::QueryDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html
 */
export declare class CfnQueryDefinition extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnQueryDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnQueryDefinition;
    /**
     * The ID of the query definition.
     *
     * @cloudformationAttribute QueryDefinitionId
     */
    readonly attrQueryDefinitionId: string;
    /**
     * Use this parameter if you want the query to query only certain log groups.
     */
    logGroupNames?: Array<string>;
    /**
     * A name for the query definition.
     */
    name: string;
    /**
     * The query string to use for this query definition.
     */
    queryString: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnQueryDefinitionProps);
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
 * Properties for defining a `CfnQueryDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html
 */
export interface CfnQueryDefinitionProps {
    /**
     * Use this parameter if you want the query to query only certain log groups.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html#cfn-logs-querydefinition-loggroupnames
     */
    readonly logGroupNames?: Array<string>;
    /**
     * A name for the query definition.
     *
     * > You can use the name to create a folder structure for your queries. To create a folder, use a forward slash (/) to prefix your desired query name with your desired folder name. For example, `/ *folder-name* / *query-name*` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html#cfn-logs-querydefinition-name
     */
    readonly name: string;
    /**
     * The query string to use for this query definition.
     *
     * For more information, see [CloudWatch Logs Insights Query Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html#cfn-logs-querydefinition-querystring
     */
    readonly queryString: string;
}
/**
 * Creates or updates a resource policy that allows other AWS services to put log events to this account.
 *
 * An account can have up to 10 resource policies per AWS Region.
 *
 * @cloudformationResource AWS::Logs::ResourcePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html
 */
export declare class CfnResourcePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourcePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourcePolicy;
    /**
     * The details of the policy.
     */
    policyDocument: string;
    /**
     * The name of the resource policy.
     */
    policyName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourcePolicyProps);
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
 * Properties for defining a `CfnResourcePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html
 */
export interface CfnResourcePolicyProps {
    /**
     * The details of the policy.
     *
     * It must be formatted in JSON, and you must use backslashes to escape characters that need to be escaped in JSON strings, such as double quote marks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html#cfn-logs-resourcepolicy-policydocument
     */
    readonly policyDocument: string;
    /**
     * The name of the resource policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html#cfn-logs-resourcepolicy-policyname
     */
    readonly policyName: string;
}
/**
 * The `AWS::Logs::SubscriptionFilter` resource specifies a subscription filter and associates it with the specified log group.
 *
 * Subscription filters allow you to subscribe to a real-time stream of log events and have them delivered to a specific destination. Currently, the supported destinations are:
 *
 * - An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery.
 * - A logical destination that belongs to a different account, for cross-account delivery.
 * - An Amazon Kinesis Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.
 * - An AWS Lambda function that belongs to the same account as the subscription filter, for same-account delivery.
 *
 * There can be as many as two subscription filters associated with a log group.
 *
 * @cloudformationResource AWS::Logs::SubscriptionFilter
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html
 */
export declare class CfnSubscriptionFilter extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSubscriptionFilter from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSubscriptionFilter;
    /**
     * The Amazon Resource Name (ARN) of the destination.
     */
    destinationArn: string;
    /**
     * The method used to distribute log data to the destination, which can be either random or grouped by log stream.
     */
    distribution?: string;
    /**
     * The name of the subscription filter.
     */
    filterName?: string;
    /**
     * The filtering expressions that restrict what gets delivered to the destination AWS resource.
     */
    filterPattern: string;
    /**
     * The log group to associate with the subscription filter.
     */
    logGroupName: string;
    /**
     * The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream.
     */
    roleArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSubscriptionFilterProps);
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
 * Properties for defining a `CfnSubscriptionFilter`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html
 */
export interface CfnSubscriptionFilterProps {
    /**
     * The Amazon Resource Name (ARN) of the destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-destinationarn
     */
    readonly destinationArn: string;
    /**
     * The method used to distribute log data to the destination, which can be either random or grouped by log stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-distribution
     */
    readonly distribution?: string;
    /**
     * The name of the subscription filter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-filtername
     */
    readonly filterName?: string;
    /**
     * The filtering expressions that restrict what gets delivered to the destination AWS resource.
     *
     * For more information about the filter pattern syntax, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-filterpattern
     */
    readonly filterPattern: string;
    /**
     * The log group to associate with the subscription filter.
     *
     * All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-loggroupname
     */
    readonly logGroupName: string;
    /**
     * The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream.
     *
     * You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-rolearn
     */
    readonly roleArn?: string;
}
/**
 * This structure contains information about one *delivery* in your account.
 *
 * A delivery is a connection between a logical *delivery source* and a logical *delivery destination* .
 *
 * For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html) .
 *
 * You can't update an existing delivery. You can only create and delete deliveries.
 *
 * @cloudformationResource AWS::Logs::Delivery
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-delivery.html
 */
export declare class CfnDelivery extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDelivery from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDelivery;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies this delivery.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, or Firehose.
     *
     * @cloudformationAttribute DeliveryDestinationType
     */
    readonly attrDeliveryDestinationType: string;
    /**
     * The unique ID that identifies this delivery in your account.
     *
     * @cloudformationAttribute DeliveryId
     */
    readonly attrDeliveryId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The ARN of the delivery destination that is associated with this delivery.
     */
    deliveryDestinationArn: string;
    /**
     * The name of the delivery source that is associated with this delivery.
     */
    deliverySourceName: string;
    /**
     * The tags that have been assigned to this delivery.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeliveryProps);
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
 * Properties for defining a `CfnDelivery`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-delivery.html
 */
export interface CfnDeliveryProps {
    /**
     * The ARN of the delivery destination that is associated with this delivery.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-delivery.html#cfn-logs-delivery-deliverydestinationarn
     */
    readonly deliveryDestinationArn: string;
    /**
     * The name of the delivery source that is associated with this delivery.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-delivery.html#cfn-logs-delivery-deliverysourcename
     */
    readonly deliverySourceName: string;
    /**
     * The tags that have been assigned to this delivery.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-delivery.html#cfn-logs-delivery-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * This structure contains information about one *delivery destination* in your account.
 *
 * A delivery destination is an AWS resource that represents an AWS service that logs can be sent to. CloudWatch Logs, Amazon S3, are supported as Firehose delivery destinations.
 *
 * To configure logs delivery between a supported AWS service and a destination, you must do the following:
 *
 * - Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html) .
 * - Create a *delivery destination* , which is a logical object that represents the actual delivery destination.
 * - If you are delivering logs cross-account, you must use [PutDeliveryDestinationPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html) in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 * - Create a *delivery* by pairing exactly one delivery source and one delivery destination. For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html) .
 *
 * You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.
 *
 * @cloudformationResource AWS::Logs::DeliveryDestination
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html
 */
export declare class CfnDeliveryDestination extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeliveryDestination from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeliveryDestination;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Displays whether this delivery destination is CloudWatch Logs, Amazon S3, or Firehose.
     *
     * @cloudformationAttribute DeliveryDestinationType
     */
    readonly attrDeliveryDestinationType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A structure that contains information about one delivery destination policy.
     */
    deliveryDestinationPolicy?: any | cdk.IResolvable;
    /**
     * The ARN of the AWS destination that this delivery destination represents.
     */
    destinationResourceArn?: string;
    /**
     * The name of this delivery destination.
     */
    name: string;
    /**
     * The tags that have been assigned to this delivery destination.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeliveryDestinationProps);
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
 * Properties for defining a `CfnDeliveryDestination`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html
 */
export interface CfnDeliveryDestinationProps {
    /**
     * A structure that contains information about one delivery destination policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#cfn-logs-deliverydestination-deliverydestinationpolicy
     */
    readonly deliveryDestinationPolicy?: any | cdk.IResolvable;
    /**
     * The ARN of the AWS destination that this delivery destination represents.
     *
     * That AWS destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#cfn-logs-deliverydestination-destinationresourcearn
     */
    readonly destinationResourceArn?: string;
    /**
     * The name of this delivery destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#cfn-logs-deliverydestination-name
     */
    readonly name: string;
    /**
     * The tags that have been assigned to this delivery destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#cfn-logs-deliverydestination-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * This structure contains information about one *delivery source* in your account.
 *
 * A delivery source is an AWS resource that sends logs to an AWS destination. The destination can be CloudWatch Logs, Amazon S3, or Firehose.
 *
 * Only some AWS services support being configured as a delivery source. These services are listed as *Supported [V2 Permissions]* in the table at [Enabling logging from AWS services.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html)
 *
 * To configure logs delivery between a supported AWS service and a destination, you must do the following:
 *
 * - Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html) .
 * - Create a *delivery destination* , which is a logical object that represents the actual delivery destination. For more information, see [PutDeliveryDestination](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html) .
 * - If you are delivering logs cross-account, you must use [PutDeliveryDestinationPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html) in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 * - Create a *delivery* by pairing exactly one delivery source and one delivery destination. For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html) .
 *
 * You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.
 *
 * @cloudformationResource AWS::Logs::DeliverySource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverysource.html
 */
export declare class CfnDeliverySource extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeliverySource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeliverySource;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies this delivery source.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * This array contains the ARN of the AWS resource that sends logs and is represented by this delivery source. Currently, only one ARN can be in the array.
     *
     * @cloudformationAttribute ResourceArns
     */
    readonly attrResourceArns: Array<string>;
    /**
     * The AWS service that is sending logs.
     *
     * @cloudformationAttribute Service
     */
    readonly attrService: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The type of log that the source is sending.
     */
    logType?: string;
    /**
     * The unique name of the delivery source.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies this delivery source.
     */
    resourceArn?: string;
    /**
     * The tags that have been assigned to this delivery source.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeliverySourceProps);
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
 * Properties for defining a `CfnDeliverySource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverysource.html
 */
export interface CfnDeliverySourceProps {
    /**
     * The type of log that the source is sending.
     *
     * For valid values for this parameter, see the documentation for the source service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverysource.html#cfn-logs-deliverysource-logtype
     */
    readonly logType?: string;
    /**
     * The unique name of the delivery source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverysource.html#cfn-logs-deliverysource-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies this delivery source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverysource.html#cfn-logs-deliverysource-resourcearn
     */
    readonly resourceArn?: string;
    /**
     * The tags that have been assigned to this delivery source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverysource.html#cfn-logs-deliverysource-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates or updates an *anomaly detector* that regularly scans one or more log groups and look for patterns and anomalies in the logs.
 *
 * An anomaly detector can help surface issues by automatically discovering anomalies in your log event traffic. An anomaly detector uses machine learning algorithms to scan log events and find *patterns* . A pattern is a shared text structure that recurs among your log fields. Patterns provide a useful tool for analyzing large sets of logs because a large number of log events can often be compressed into a few patterns.
 *
 * The anomaly detector uses pattern recognition to find `anomalies` , which are unusual log events. It compares current log events and patterns with trained baselines.
 *
 * Fields within a pattern are called *tokens* . Fields that vary within a pattern, such as a request ID or timestamp, are referred to as *dynamic tokens* and represented by `<*>` .
 *
 * For more information see [Log anomaly detection](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/LogsAnomalyDetection.html) .
 *
 * @cloudformationResource AWS::Logs::LogAnomalyDetector
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html
 */
export declare class CfnLogAnomalyDetector extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLogAnomalyDetector from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLogAnomalyDetector;
    /**
     * The ARN of the anomaly detector.
     *
     * @cloudformationAttribute AnomalyDetectorArn
     */
    readonly attrAnomalyDetectorArn: string;
    /**
     * Specifies whether the anomaly detector is currently active.
     *
     * @cloudformationAttribute AnomalyDetectorStatus
     */
    readonly attrAnomalyDetectorStatus: string;
    /**
     * The time that the anomaly detector was created.
     *
     * @cloudformationAttribute CreationTimeStamp
     */
    readonly attrCreationTimeStamp: cdk.IResolvable;
    /**
     * The time that the anomaly detector was most recently modified.
     *
     * @cloudformationAttribute LastModifiedTimeStamp
     */
    readonly attrLastModifiedTimeStamp: cdk.IResolvable;
    /**
     * The ID of the account to create the anomaly detector in.
     */
    accountId?: string;
    /**
     * The number of days to have visibility on an anomaly.
     */
    anomalyVisibilityTime?: number;
    /**
     * A name for this anomaly detector.
     */
    detectorName?: string;
    /**
     * Specifies how often the anomaly detector is to run and look for anomalies.
     */
    evaluationFrequency?: string;
    /**
     * You can use this parameter to limit the anomaly detection model to examine only log events that match the pattern you specify here.
     */
    filterPattern?: string;
    /**
     * Optionally assigns a AWS KMS key to secure this anomaly detector and its findings.
     */
    kmsKeyId?: string;
    /**
     * The ARN of the log group that is associated with this anomaly detector.
     */
    logGroupArnList?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnLogAnomalyDetectorProps);
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
 * Properties for defining a `CfnLogAnomalyDetector`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html
 */
export interface CfnLogAnomalyDetectorProps {
    /**
     * The ID of the account to create the anomaly detector in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-accountid
     */
    readonly accountId?: string;
    /**
     * The number of days to have visibility on an anomaly.
     *
     * After this time period has elapsed for an anomaly, it will be automatically baselined and the anomaly detector will treat new occurrences of a similar anomaly as normal. Therefore, if you do not correct the cause of an anomaly during the time period specified in `AnomalyVisibilityTime` , it will be considered normal going forward and will not be detected as an anomaly.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-anomalyvisibilitytime
     */
    readonly anomalyVisibilityTime?: number;
    /**
     * A name for this anomaly detector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-detectorname
     */
    readonly detectorName?: string;
    /**
     * Specifies how often the anomaly detector is to run and look for anomalies.
     *
     * Set this value according to the frequency that the log group receives new logs. For example, if the log group receives new log events every 10 minutes, then 15 minutes might be a good setting for `EvaluationFrequency` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-evaluationfrequency
     */
    readonly evaluationFrequency?: string;
    /**
     * You can use this parameter to limit the anomaly detection model to examine only log events that match the pattern you specify here.
     *
     * For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-filterpattern
     */
    readonly filterPattern?: string;
    /**
     * Optionally assigns a AWS KMS key to secure this anomaly detector and its findings.
     *
     * If a key is assigned, the anomalies found and the model used by this detector are encrypted at rest with the key. If a key is assigned to an anomaly detector, a user must have permissions for both this key and for the anomaly detector to retrieve information about the anomalies that it finds.
     *
     * For more information about using a AWS KMS key and to see the required IAM policy, see [Use a AWS KMS key with an anomaly detector](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/LogsAnomalyDetection-KMS.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The ARN of the log group that is associated with this anomaly detector.
     *
     * You can specify only one log group ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-loggrouparnlist
     */
    readonly logGroupArnList?: Array<string>;
}
