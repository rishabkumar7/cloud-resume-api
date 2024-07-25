import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a connector using the specified properties.
 *
 * @cloudformationResource AWS::KafkaConnect::Connector
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html
 */
export declare class CfnConnector extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnector from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnector;
    /**
     * The Amazon Resource Name (ARN) of the newly created connector.
     *
     * @cloudformationAttribute ConnectorArn
     */
    readonly attrConnectorArn: string;
    /**
     * The connector's compute capacity settings.
     */
    capacity: CfnConnector.CapacityProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The configuration of the connector.
     */
    connectorConfiguration: cdk.IResolvable | Record<string, string>;
    /**
     * The description of the connector.
     */
    connectorDescription?: string;
    /**
     * The name of the connector.
     */
    connectorName: string;
    /**
     * The details of the Apache Kafka cluster to which the connector is connected.
     */
    kafkaCluster: cdk.IResolvable | CfnConnector.KafkaClusterProperty;
    /**
     * The type of client authentication used to connect to the Apache Kafka cluster.
     */
    kafkaClusterClientAuthentication: cdk.IResolvable | CfnConnector.KafkaClusterClientAuthenticationProperty;
    /**
     * Details of encryption in transit to the Apache Kafka cluster.
     */
    kafkaClusterEncryptionInTransit: cdk.IResolvable | CfnConnector.KafkaClusterEncryptionInTransitProperty;
    /**
     * The version of Kafka Connect.
     */
    kafkaConnectVersion: string;
    /**
     * The settings for delivering connector logs to Amazon CloudWatch Logs.
     */
    logDelivery?: cdk.IResolvable | CfnConnector.LogDeliveryProperty;
    /**
     * Specifies which plugin to use for the connector.
     */
    plugins: Array<cdk.IResolvable | CfnConnector.PluginProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.
     */
    serviceExecutionRoleArn: string;
    /**
     * A collection of tags associated with a resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The worker configurations that are in use with the connector.
     */
    workerConfiguration?: cdk.IResolvable | CfnConnector.WorkerConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConnectorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConnector {
    /**
     * The details of the Apache Kafka cluster to which the connector is connected.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkacluster.html
     */
    interface KafkaClusterProperty {
        /**
         * The Apache Kafka cluster to which the connector is connected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkacluster.html#cfn-kafkaconnect-connector-kafkacluster-apachekafkacluster
         */
        readonly apacheKafkaCluster: CfnConnector.ApacheKafkaClusterProperty | cdk.IResolvable;
    }
    /**
     * The details of the Apache Kafka cluster to which the connector is connected.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-apachekafkacluster.html
     */
    interface ApacheKafkaClusterProperty {
        /**
         * The bootstrap servers of the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-apachekafkacluster.html#cfn-kafkaconnect-connector-apachekafkacluster-bootstrapservers
         */
        readonly bootstrapServers: string;
        /**
         * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-apachekafkacluster.html#cfn-kafkaconnect-connector-apachekafkacluster-vpc
         */
        readonly vpc: cdk.IResolvable | CfnConnector.VpcProperty;
    }
    /**
     * Information about the VPC in which the connector resides.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-vpc.html
     */
    interface VpcProperty {
        /**
         * The security groups for the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-vpc.html#cfn-kafkaconnect-connector-vpc-securitygroups
         */
        readonly securityGroups: Array<string>;
        /**
         * The subnets for the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-vpc.html#cfn-kafkaconnect-connector-vpc-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * The configuration of the workers, which are the processes that run the connector logic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerconfiguration.html
     */
    interface WorkerConfigurationProperty {
        /**
         * The revision of the worker configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerconfiguration.html#cfn-kafkaconnect-connector-workerconfiguration-revision
         */
        readonly revision: number;
        /**
         * The Amazon Resource Name (ARN) of the worker configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerconfiguration.html#cfn-kafkaconnect-connector-workerconfiguration-workerconfigurationarn
         */
        readonly workerConfigurationArn: string;
    }
    /**
     * Information about the capacity of the connector, whether it is auto scaled or provisioned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-capacity.html
     */
    interface CapacityProperty {
        /**
         * Information about the auto scaling parameters for the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-capacity.html#cfn-kafkaconnect-connector-capacity-autoscaling
         */
        readonly autoScaling?: CfnConnector.AutoScalingProperty | cdk.IResolvable;
        /**
         * Details about a fixed capacity allocated to a connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-capacity.html#cfn-kafkaconnect-connector-capacity-provisionedcapacity
         */
        readonly provisionedCapacity?: cdk.IResolvable | CfnConnector.ProvisionedCapacityProperty;
    }
    /**
     * Details about a connector's provisioned capacity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-provisionedcapacity.html
     */
    interface ProvisionedCapacityProperty {
        /**
         * The number of microcontroller units (MCUs) allocated to each connector worker.
         *
         * The valid values are 1,2,4,8.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-provisionedcapacity.html#cfn-kafkaconnect-connector-provisionedcapacity-mcucount
         */
        readonly mcuCount?: number;
        /**
         * The number of workers that are allocated to the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-provisionedcapacity.html#cfn-kafkaconnect-connector-provisionedcapacity-workercount
         */
        readonly workerCount: number;
    }
    /**
     * Specifies how the connector scales.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-autoscaling.html
     */
    interface AutoScalingProperty {
        /**
         * The maximum number of workers allocated to the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-autoscaling.html#cfn-kafkaconnect-connector-autoscaling-maxworkercount
         */
        readonly maxWorkerCount: number;
        /**
         * The number of microcontroller units (MCUs) allocated to each connector worker.
         *
         * The valid values are 1,2,4,8.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-autoscaling.html#cfn-kafkaconnect-connector-autoscaling-mcucount
         */
        readonly mcuCount: number;
        /**
         * The minimum number of workers allocated to the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-autoscaling.html#cfn-kafkaconnect-connector-autoscaling-minworkercount
         */
        readonly minWorkerCount: number;
        /**
         * The sacle-in policy for the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-autoscaling.html#cfn-kafkaconnect-connector-autoscaling-scaleinpolicy
         */
        readonly scaleInPolicy: cdk.IResolvable | CfnConnector.ScaleInPolicyProperty;
        /**
         * The sacle-out policy for the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-autoscaling.html#cfn-kafkaconnect-connector-autoscaling-scaleoutpolicy
         */
        readonly scaleOutPolicy: cdk.IResolvable | CfnConnector.ScaleOutPolicyProperty;
    }
    /**
     * The scale-out policy for the connector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-scaleoutpolicy.html
     */
    interface ScaleOutPolicyProperty {
        /**
         * The CPU utilization percentage threshold at which you want connector scale out to be triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-scaleoutpolicy.html#cfn-kafkaconnect-connector-scaleoutpolicy-cpuutilizationpercentage
         */
        readonly cpuUtilizationPercentage: number;
    }
    /**
     * The scale-in policy for the connector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-scaleinpolicy.html
     */
    interface ScaleInPolicyProperty {
        /**
         * Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-scaleinpolicy.html#cfn-kafkaconnect-connector-scaleinpolicy-cpuutilizationpercentage
         */
        readonly cpuUtilizationPercentage: number;
    }
    /**
     * Details of encryption in transit to the Apache Kafka cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterencryptionintransit.html
     */
    interface KafkaClusterEncryptionInTransitProperty {
        /**
         * The type of encryption in transit to the Apache Kafka cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterencryptionintransit.html#cfn-kafkaconnect-connector-kafkaclusterencryptionintransit-encryptiontype
         */
        readonly encryptionType: string;
    }
    /**
     * The client authentication information used in order to authenticate with the Apache Kafka cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterclientauthentication.html
     */
    interface KafkaClusterClientAuthenticationProperty {
        /**
         * The type of client authentication used to connect to the Apache Kafka cluster.
         *
         * Value NONE means that no client authentication is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterclientauthentication.html#cfn-kafkaconnect-connector-kafkaclusterclientauthentication-authenticationtype
         */
        readonly authenticationType: string;
    }
    /**
     * Details about log delivery.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-logdelivery.html
     */
    interface LogDeliveryProperty {
        /**
         * The workers can send worker logs to different destination types.
         *
         * This configuration specifies the details of these destinations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-logdelivery.html#cfn-kafkaconnect-connector-logdelivery-workerlogdelivery
         */
        readonly workerLogDelivery: cdk.IResolvable | CfnConnector.WorkerLogDeliveryProperty;
    }
    /**
     * Workers can send worker logs to different destination types.
     *
     * This configuration specifies the details of these destinations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerlogdelivery.html
     */
    interface WorkerLogDeliveryProperty {
        /**
         * Details about delivering logs to Amazon CloudWatch Logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerlogdelivery.html#cfn-kafkaconnect-connector-workerlogdelivery-cloudwatchlogs
         */
        readonly cloudWatchLogs?: CfnConnector.CloudWatchLogsLogDeliveryProperty | cdk.IResolvable;
        /**
         * Details about delivering logs to Amazon Kinesis Data Firehose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerlogdelivery.html#cfn-kafkaconnect-connector-workerlogdelivery-firehose
         */
        readonly firehose?: CfnConnector.FirehoseLogDeliveryProperty | cdk.IResolvable;
        /**
         * Details about delivering logs to Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerlogdelivery.html#cfn-kafkaconnect-connector-workerlogdelivery-s3
         */
        readonly s3?: cdk.IResolvable | CfnConnector.S3LogDeliveryProperty;
    }
    /**
     * Details about delivering logs to Amazon S3.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-s3logdelivery.html
     */
    interface S3LogDeliveryProperty {
        /**
         * The name of the S3 bucket that is the destination for log delivery.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-s3logdelivery.html#cfn-kafkaconnect-connector-s3logdelivery-bucket
         */
        readonly bucket?: string;
        /**
         * Specifies whether connector logs get sent to the specified Amazon S3 destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-s3logdelivery.html#cfn-kafkaconnect-connector-s3logdelivery-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The S3 prefix that is the destination for log delivery.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-s3logdelivery.html#cfn-kafkaconnect-connector-s3logdelivery-prefix
         */
        readonly prefix?: string;
    }
    /**
     * The settings for delivering logs to Amazon Kinesis Data Firehose.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-firehoselogdelivery.html
     */
    interface FirehoseLogDeliveryProperty {
        /**
         * The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-firehoselogdelivery.html#cfn-kafkaconnect-connector-firehoselogdelivery-deliverystream
         */
        readonly deliveryStream?: string;
        /**
         * Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-firehoselogdelivery.html#cfn-kafkaconnect-connector-firehoselogdelivery-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * The settings for delivering connector logs to Amazon CloudWatch Logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-cloudwatchlogslogdelivery.html
     */
    interface CloudWatchLogsLogDeliveryProperty {
        /**
         * Whether log delivery to Amazon CloudWatch Logs is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-cloudwatchlogslogdelivery.html#cfn-kafkaconnect-connector-cloudwatchlogslogdelivery-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The name of the CloudWatch log group that is the destination for log delivery.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-cloudwatchlogslogdelivery.html#cfn-kafkaconnect-connector-cloudwatchlogslogdelivery-loggroup
         */
        readonly logGroup?: string;
    }
    /**
     * A plugin is an AWS resource that contains the code that defines your connector logic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-plugin.html
     */
    interface PluginProperty {
        /**
         * Details about a custom plugin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-plugin.html#cfn-kafkaconnect-connector-plugin-customplugin
         */
        readonly customPlugin: CfnConnector.CustomPluginProperty | cdk.IResolvable;
    }
    /**
     * A plugin is an AWS resource that contains the code that defines a connector's logic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-customplugin.html
     */
    interface CustomPluginProperty {
        /**
         * The Amazon Resource Name (ARN) of the custom plugin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-customplugin.html#cfn-kafkaconnect-connector-customplugin-custompluginarn
         */
        readonly customPluginArn: string;
        /**
         * The revision of the custom plugin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-customplugin.html#cfn-kafkaconnect-connector-customplugin-revision
         */
        readonly revision: number;
    }
}
/**
 * Properties for defining a `CfnConnector`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html
 */
export interface CfnConnectorProps {
    /**
     * The connector's compute capacity settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-capacity
     */
    readonly capacity: CfnConnector.CapacityProperty | cdk.IResolvable;
    /**
     * The configuration of the connector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-connectorconfiguration
     */
    readonly connectorConfiguration: cdk.IResolvable | Record<string, string>;
    /**
     * The description of the connector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-connectordescription
     */
    readonly connectorDescription?: string;
    /**
     * The name of the connector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-connectorname
     */
    readonly connectorName: string;
    /**
     * The details of the Apache Kafka cluster to which the connector is connected.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkacluster
     */
    readonly kafkaCluster: cdk.IResolvable | CfnConnector.KafkaClusterProperty;
    /**
     * The type of client authentication used to connect to the Apache Kafka cluster.
     *
     * The value is NONE when no client authentication is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkaclusterclientauthentication
     */
    readonly kafkaClusterClientAuthentication: cdk.IResolvable | CfnConnector.KafkaClusterClientAuthenticationProperty;
    /**
     * Details of encryption in transit to the Apache Kafka cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkaclusterencryptionintransit
     */
    readonly kafkaClusterEncryptionInTransit: cdk.IResolvable | CfnConnector.KafkaClusterEncryptionInTransitProperty;
    /**
     * The version of Kafka Connect.
     *
     * It has to be compatible with both the Apache Kafka cluster's version and the plugins.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkaconnectversion
     */
    readonly kafkaConnectVersion: string;
    /**
     * The settings for delivering connector logs to Amazon CloudWatch Logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-logdelivery
     */
    readonly logDelivery?: cdk.IResolvable | CfnConnector.LogDeliveryProperty;
    /**
     * Specifies which plugin to use for the connector.
     *
     * You must specify a single-element list. Amazon MSK Connect does not currently support specifying multiple plugins.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-plugins
     */
    readonly plugins: Array<cdk.IResolvable | CfnConnector.PluginProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-serviceexecutionrolearn
     */
    readonly serviceExecutionRoleArn: string;
    /**
     * A collection of tags associated with a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The worker configurations that are in use with the connector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-workerconfiguration
     */
    readonly workerConfiguration?: cdk.IResolvable | CfnConnector.WorkerConfigurationProperty;
}
/**
 * Creates a custom plugin using the specified properties.
 *
 * @cloudformationResource AWS::KafkaConnect::CustomPlugin
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html
 */
export declare class CfnCustomPlugin extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCustomPlugin from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCustomPlugin;
    /**
     * The Amazon Resource Name (ARN) of the custom plugin.
     *
     * @cloudformationAttribute CustomPluginArn
     */
    readonly attrCustomPluginArn: string;
    /**
     * Details about the custom plugin file.
     *
     * @cloudformationAttribute FileDescription
     */
    readonly attrFileDescription: cdk.IResolvable;
    /**
     * The revision of the custom plugin.
     *
     * @cloudformationAttribute Revision
     */
    readonly attrRevision: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The format of the plugin file.
     */
    contentType: string;
    /**
     * The description of the custom plugin.
     */
    description?: string;
    /**
     * Information about the location of the custom plugin.
     */
    location: CfnCustomPlugin.CustomPluginLocationProperty | cdk.IResolvable;
    /**
     * The name of the custom plugin.
     */
    name: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCustomPluginProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCustomPlugin {
    /**
     * Information about the location of a custom plugin.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-custompluginlocation.html
     */
    interface CustomPluginLocationProperty {
        /**
         * The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-custompluginlocation.html#cfn-kafkaconnect-customplugin-custompluginlocation-s3location
         */
        readonly s3Location: cdk.IResolvable | CfnCustomPlugin.S3LocationProperty;
    }
    /**
     * The location of an object in Amazon S3.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The Amazon Resource Name (ARN) of an S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-s3location.html#cfn-kafkaconnect-customplugin-s3location-bucketarn
         */
        readonly bucketArn: string;
        /**
         * The file key for an object in an S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-s3location.html#cfn-kafkaconnect-customplugin-s3location-filekey
         */
        readonly fileKey: string;
        /**
         * The version of an object in an S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-s3location.html#cfn-kafkaconnect-customplugin-s3location-objectversion
         */
        readonly objectVersion?: string;
    }
    /**
     * Details about a custom plugin file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-custompluginfiledescription.html
     */
    interface CustomPluginFileDescriptionProperty {
        /**
         * The hex-encoded MD5 checksum of the custom plugin file.
         *
         * You can use it to validate the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-custompluginfiledescription.html#cfn-kafkaconnect-customplugin-custompluginfiledescription-filemd5
         */
        readonly fileMd5?: string;
        /**
         * The size in bytes of the custom plugin file.
         *
         * You can use it to validate the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-custompluginfiledescription.html#cfn-kafkaconnect-customplugin-custompluginfiledescription-filesize
         */
        readonly fileSize?: number;
    }
}
/**
 * Properties for defining a `CfnCustomPlugin`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html
 */
export interface CfnCustomPluginProps {
    /**
     * The format of the plugin file.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html#cfn-kafkaconnect-customplugin-contenttype
     */
    readonly contentType: string;
    /**
     * The description of the custom plugin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html#cfn-kafkaconnect-customplugin-description
     */
    readonly description?: string;
    /**
     * Information about the location of the custom plugin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html#cfn-kafkaconnect-customplugin-location
     */
    readonly location: CfnCustomPlugin.CustomPluginLocationProperty | cdk.IResolvable;
    /**
     * The name of the custom plugin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html#cfn-kafkaconnect-customplugin-name
     */
    readonly name: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html#cfn-kafkaconnect-customplugin-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a worker configuration using the specified properties.
 *
 * @cloudformationResource AWS::KafkaConnect::WorkerConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-workerconfiguration.html
 */
export declare class CfnWorkerConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkerConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkerConfiguration;
    /**
     * The revision of the worker configuration.
     *
     * @cloudformationAttribute Revision
     */
    readonly attrRevision: number;
    /**
     * The Amazon Resource Name (ARN) of the worker configuration.
     *
     * @cloudformationAttribute WorkerConfigurationArn
     */
    readonly attrWorkerConfigurationArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of a worker configuration.
     */
    description?: string;
    /**
     * The name of the worker configuration.
     */
    name: string;
    /**
     * Base64 encoded contents of the connect-distributed.properties file.
     */
    propertiesFileContent: string;
    /**
     * A collection of tags associated with a resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWorkerConfigurationProps);
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
 * Properties for defining a `CfnWorkerConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-workerconfiguration.html
 */
export interface CfnWorkerConfigurationProps {
    /**
     * The description of a worker configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-workerconfiguration.html#cfn-kafkaconnect-workerconfiguration-description
     */
    readonly description?: string;
    /**
     * The name of the worker configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-workerconfiguration.html#cfn-kafkaconnect-workerconfiguration-name
     */
    readonly name: string;
    /**
     * Base64 encoded contents of the connect-distributed.properties file.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-workerconfiguration.html#cfn-kafkaconnect-workerconfiguration-propertiesfilecontent
     */
    readonly propertiesFileContent: string;
    /**
     * A collection of tags associated with a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-workerconfiguration.html#cfn-kafkaconnect-workerconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
