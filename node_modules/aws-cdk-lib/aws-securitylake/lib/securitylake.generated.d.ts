import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Adds a natively supported AWS service as an AWS source.
 *
 * Enables source types for member accounts in required AWS Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. Once you add an AWS service as a source, Security Lake starts collecting logs and events from it.
 *
 * > If you want to create multiple sources using `AWS::SecurityLake::AwsLogSource` , you must use the `DependsOn` attribute to create the sources sequentially. With the `DependsOn` attribute you can specify that the creation of a specific `AWSLogSource` follows another. When you add a `DependsOn` attribute to a resource, that resource is created only after the creation of the resource specified in the `DependsOn` attribute. For an example, see [Add AWS log sources](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-awslogsource.html#aws-resource-securitylake-awslogsource--examples) .
 *
 * @cloudformationResource AWS::SecurityLake::AwsLogSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-awslogsource.html
 */
export declare class CfnAwsLogSource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAwsLogSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAwsLogSource;
    /**
     * Specify the AWS account information where you want to enable Security Lake.
     */
    accounts?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) used to create the data lake.
     */
    dataLakeArn: string;
    /**
     * The name for a AWS source.
     */
    sourceName: string;
    /**
     * The version for a AWS source.
     */
    sourceVersion: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAwsLogSourceProps);
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
 * Properties for defining a `CfnAwsLogSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-awslogsource.html
 */
export interface CfnAwsLogSourceProps {
    /**
     * Specify the AWS account information where you want to enable Security Lake.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-awslogsource.html#cfn-securitylake-awslogsource-accounts
     */
    readonly accounts?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) used to create the data lake.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-awslogsource.html#cfn-securitylake-awslogsource-datalakearn
     */
    readonly dataLakeArn: string;
    /**
     * The name for a AWS source.
     *
     * This must be a Regionally unique value. For the list of sources supported by Amazon Security Lake see [Collecting data from AWS services](https://docs.aws.amazon.com//security-lake/latest/userguide/internal-sources.html) in the Amazon Security Lake User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-awslogsource.html#cfn-securitylake-awslogsource-sourcename
     */
    readonly sourceName: string;
    /**
     * The version for a AWS source.
     *
     * For more details about source versions supported by Amazon Security Lake see [OCSF source identification](https://docs.aws.amazon.com//security-lake/latest/userguide/open-cybersecurity-schema-framework.html#ocsf-source-identification) in the Amazon Security Lake User Guide. This must be a Regionally unique value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-awslogsource.html#cfn-securitylake-awslogsource-sourceversion
     */
    readonly sourceVersion: string;
}
/**
 * Initializes an Amazon Security Lake instance with the provided (or default) configuration.
 *
 * You can enable Security Lake in AWS Regions with customized settings before enabling log collection in Regions. To specify particular Regions, configure these Regions using the `configurations` parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.
 *
 * When you enable Security Lake , it starts ingesting security data after the `CreateAwsLogSource` call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your AWS account in the current Region, including security log and event data. For more information, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com//security-lake/latest/userguide/what-is-security-lake.html) .
 *
 * @cloudformationResource AWS::SecurityLake::DataLake
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html
 */
export declare class CfnDataLake extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataLake from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataLake;
    /**
     * The Amazon Resource Name (ARN) of the data lake.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon S3 bucket.
     *
     * @cloudformationAttribute S3BucketArn
     */
    readonly attrS3BucketArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Provides encryption details of the Amazon Security Lake object.
     */
    encryptionConfiguration?: CfnDataLake.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * You can customize Security Lake to store data in your preferred AWS Regions for your preferred amount of time.
     */
    lifecycleConfiguration?: cdk.IResolvable | CfnDataLake.LifecycleConfigurationProperty;
    /**
     * The Amazon Resource Name (ARN) used to create and update the AWS Glue table.
     */
    metaStoreManagerRoleArn?: string;
    /**
     * Provides replication details of Amazon Security Lake object.
     */
    replicationConfiguration?: cdk.IResolvable | CfnDataLake.ReplicationConfigurationProperty;
    /**
     * An array of objects, one for each tag to associate with the data lake configuration.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDataLakeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataLake {
    /**
     * Provides encryption details of the Amazon Security Lake object.
     *
     * The AWS shared responsibility model applies to data protection in Amazon Security Lake . As described in this model, AWS is responsible for protecting the global infrastructure that runs all of the AWS Cloud. You are responsible for maintaining control over your content that is hosted on this infrastructure. For more details, see [Data protection](https://docs.aws.amazon.com//security-lake/latest/userguide/data-protection.html) in the Amazon Security Lake User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * The ID of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-encryptionconfiguration.html#cfn-securitylake-datalake-encryptionconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
    /**
     * Provides lifecycle details of Amazon Security Lake object.
     *
     * To manage your data so that it is stored cost effectively, you can configure retention settings for the data. You can specify your preferred Amazon S3 storage class and the time period for Amazon S3 objects to stay in that storage class before they transition to a different storage class or expire. For more information about Amazon S3 Lifecycle configurations, see [Managing your storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) in the *Amazon Simple Storage Service User Guide* .
     *
     * In Security Lake , you specify retention settings at the Region level. For example, you might choose to transition all S3 objects in a specific AWS Region to the `S3 Standard-IA` storage class 30 days after they're written to the data lake. The default Amazon S3 storage class is S3 Standard.
     *
     * > Security Lake doesn't support Amazon S3 Object Lock. When the data lake buckets are created, S3 Object Lock is disabled by default. Enabling S3 Object Lock with default retention mode interrupts the delivery of normalized log data to the data lake.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-lifecycleconfiguration.html
     */
    interface LifecycleConfigurationProperty {
        /**
         * Provides data expiration details of the Amazon Security Lake object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-lifecycleconfiguration.html#cfn-securitylake-datalake-lifecycleconfiguration-expiration
         */
        readonly expiration?: CfnDataLake.ExpirationProperty | cdk.IResolvable;
        /**
         * Provides data storage transition details of Amazon Security Lake object.
         *
         * By configuring these settings, you can specify your preferred Amazon S3 storage class and the time period for S3 objects to stay in that storage class before they transition to a different storage class.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-lifecycleconfiguration.html#cfn-securitylake-datalake-lifecycleconfiguration-transitions
         */
        readonly transitions?: Array<cdk.IResolvable | CfnDataLake.TransitionsProperty> | cdk.IResolvable;
    }
    /**
     * Provides data expiration details of the Amazon Security Lake object.
     *
     * You can specify your preferred Amazon S3 storage class and the time period for S3 objects to stay in that storage class before they expire. For more information about Amazon S3 Lifecycle configurations, see [Managing your storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) in the *Amazon Simple Storage Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-expiration.html
     */
    interface ExpirationProperty {
        /**
         * The number of days before data expires in the Amazon Security Lake object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-expiration.html#cfn-securitylake-datalake-expiration-days
         */
        readonly days?: number;
    }
    /**
     * Provides transition lifecycle details of the Amazon Security Lake object.
     *
     * For more information about Amazon S3 Lifecycle configurations, see [Managing your storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) in the *Amazon Simple Storage Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-transitions.html
     */
    interface TransitionsProperty {
        /**
         * The number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-transitions.html#cfn-securitylake-datalake-transitions-days
         */
        readonly days?: number;
        /**
         * The list of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads.
         *
         * The default storage class is S3 Standard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-transitions.html#cfn-securitylake-datalake-transitions-storageclass
         */
        readonly storageClass?: string;
    }
    /**
     * Provides replication configuration details for objects stored in the Amazon Security Lake data lake.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-replicationconfiguration.html
     */
    interface ReplicationConfigurationProperty {
        /**
         * Specifies one or more centralized rollup Regions.
         *
         * The AWS Region specified in the region parameter of the `CreateDataLake` or `UpdateDataLake` operations contributes data to the rollup Region or Regions specified in this parameter.
         *
         * Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets. S3 buckets that are configured for object replication can be owned by the same AWS account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different Regions or within the same Region as the source bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-replicationconfiguration.html#cfn-securitylake-datalake-replicationconfiguration-regions
         */
        readonly regions?: Array<string>;
        /**
         * Replication settings for the Amazon S3 buckets.
         *
         * This parameter uses the AWS Identity and Access Management (IAM) role you created that is managed by Security Lake , to ensure the replication setting is correct.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-datalake-replicationconfiguration.html#cfn-securitylake-datalake-replicationconfiguration-rolearn
         */
        readonly roleArn?: string;
    }
}
/**
 * Properties for defining a `CfnDataLake`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html
 */
export interface CfnDataLakeProps {
    /**
     * Provides encryption details of the Amazon Security Lake object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-encryptionconfiguration
     */
    readonly encryptionConfiguration?: CfnDataLake.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * You can customize Security Lake to store data in your preferred AWS Regions for your preferred amount of time.
     *
     * Lifecycle management can help you comply with different compliance requirements. For more details, see [Lifecycle management](https://docs.aws.amazon.com//security-lake/latest/userguide/lifecycle-management.html) in the Amazon Security Lake User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-lifecycleconfiguration
     */
    readonly lifecycleConfiguration?: cdk.IResolvable | CfnDataLake.LifecycleConfigurationProperty;
    /**
     * The Amazon Resource Name (ARN) used to create and update the AWS Glue table.
     *
     * This table contains partitions generated by the ingestion and normalization of AWS log sources and custom sources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-metastoremanagerrolearn
     */
    readonly metaStoreManagerRoleArn?: string;
    /**
     * Provides replication details of Amazon Security Lake object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-replicationconfiguration
     */
    readonly replicationConfiguration?: cdk.IResolvable | CfnDataLake.ReplicationConfigurationProperty;
    /**
     * An array of objects, one for each tag to associate with the data lake configuration.
     *
     * For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a subscriber for accounts that are already enabled in Amazon Security Lake.
 *
 * You can create a subscriber with access to data in the current AWS Region.
 *
 * @cloudformationResource AWS::SecurityLake::Subscriber
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html
 */
export declare class CfnSubscriber extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSubscriber from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSubscriber;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Security Lake subscriber.
     *
     * @cloudformationAttribute ResourceShareArn
     */
    readonly attrResourceShareArn: string;
    /**
     * The ARN name of the Amazon Security Lake subscriber.
     *
     * @cloudformationAttribute ResourceShareName
     */
    readonly attrResourceShareName: string;
    /**
     * The Amazon Resource Name (ARN) of the S3 bucket.
     *
     * @cloudformationAttribute S3BucketArn
     */
    readonly attrS3BucketArn: string;
    /**
     * The Amazon Resource Name (ARN) of the Security Lake subscriber.
     *
     * @cloudformationAttribute SubscriberArn
     */
    readonly attrSubscriberArn: string;
    /**
     * The Amazon Resource Name (ARN) of the role used to create the Security Lake subscriber.
     *
     * @cloudformationAttribute SubscriberRoleArn
     */
    readonly attrSubscriberRoleArn: string;
    /**
     * You can choose to notify subscribers of new objects with an Amazon Simple Queue Service (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the subscriber.
     */
    accessTypes: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) used to create the data lake.
     */
    dataLakeArn: string;
    /**
     * The subscriber descriptions for a subscriber account.
     */
    subscriberDescription?: string;
    /**
     * The AWS identity used to access your data.
     */
    subscriberIdentity: cdk.IResolvable | CfnSubscriber.SubscriberIdentityProperty;
    /**
     * The name of your Amazon Security Lake subscriber account.
     */
    subscriberName: string;
    /**
     * An array of objects, one for each tag to associate with the subscriber.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSubscriberProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSubscriber {
    /**
     * Specify the AWS account ID and external ID that the subscriber will use to access source data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-subscriber-subscriberidentity.html
     */
    interface SubscriberIdentityProperty {
        /**
         * The external ID is a unique identifier that the subscriber provides to you.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-subscriber-subscriberidentity.html#cfn-securitylake-subscriber-subscriberidentity-externalid
         */
        readonly externalId: string;
        /**
         * Principals can include accounts, users, roles, federated users, or AWS services.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-subscriber-subscriberidentity.html#cfn-securitylake-subscriber-subscriberidentity-principal
         */
        readonly principal: string;
    }
}
/**
 * Properties for defining a `CfnSubscriber`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html
 */
export interface CfnSubscriberProps {
    /**
     * You can choose to notify subscribers of new objects with an Amazon Simple Queue Service (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the subscriber.
     *
     * Subscribers can consume data by directly querying AWS Lake Formation tables in your Amazon S3 bucket through services like Amazon Athena. This subscription type is defined as `LAKEFORMATION` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-accesstypes
     */
    readonly accessTypes: Array<string>;
    /**
     * The Amazon Resource Name (ARN) used to create the data lake.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-datalakearn
     */
    readonly dataLakeArn: string;
    /**
     * The subscriber descriptions for a subscriber account.
     *
     * The description for a subscriber includes `subscriberName` , `accountID` , `externalID` , and `subscriberId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-subscriberdescription
     */
    readonly subscriberDescription?: string;
    /**
     * The AWS identity used to access your data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-subscriberidentity
     */
    readonly subscriberIdentity: cdk.IResolvable | CfnSubscriber.SubscriberIdentityProperty;
    /**
     * The name of your Amazon Security Lake subscriber account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-subscribername
     */
    readonly subscriberName: string;
    /**
     * An array of objects, one for each tag to associate with the subscriber.
     *
     * For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake.
 *
 * You can create only one subscriber notification per subscriber.
 *
 * @cloudformationResource AWS::SecurityLake::SubscriberNotification
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html
 */
export declare class CfnSubscriberNotification extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSubscriberNotification from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSubscriberNotification;
    /**
     * The endpoint the subscriber should listen to for notifications
     *
     * @cloudformationAttribute SubscriberEndpoint
     */
    readonly attrSubscriberEndpoint: string;
    /**
     * The Amazon Resource Name (ARN) of the Security Lake subscriber.
     */
    subscriberArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSubscriberNotificationProps);
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
 * Properties for defining a `CfnSubscriberNotification`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html
 */
export interface CfnSubscriberNotificationProps {
    /**
     * The Amazon Resource Name (ARN) of the Security Lake subscriber.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#cfn-securitylake-subscribernotification-subscriberarn
     */
    readonly subscriberArn: string;
}
