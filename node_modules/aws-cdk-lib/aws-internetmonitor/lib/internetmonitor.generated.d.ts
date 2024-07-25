import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::InternetMonitor::Monitor` resource is an Internet Monitor resource type that contains information about how you create a monitor in Amazon CloudWatch Internet Monitor.
 *
 * A monitor in Internet Monitor provides visibility into performance and availability between your applications hosted on AWS and your end users, using a traffic profile that it creates based on the application resources that you add: Virtual Private Clouds (VPCs), Amazon CloudFront distributions, or WorkSpaces directories.
 *
 * Internet Monitor also alerts you to internet issues that impact your application in the city-networks (geographies and networks) where your end users use it. With Internet Monitor, you can quickly pinpoint the locations and providers that are affected, so that you can address the issue.
 *
 * For more information, see [Using Amazon CloudWatch Internet Monitor](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html) in the *Amazon CloudWatch User Guide* .
 *
 * @cloudformationResource AWS::InternetMonitor::Monitor
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html
 */
export declare class CfnMonitor extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMonitor from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMonitor;
    /**
     * The time when the monitor was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The last time that the monitor was modified.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * The Amazon Resource Name (ARN) of the monitor.
     *
     * @cloudformationAttribute MonitorArn
     */
    readonly attrMonitorArn: string;
    /**
     * The health of data processing for the monitor. For more information, see `ProcessingStatus` under [MonitorListMember](https://docs.aws.amazon.com/internet-monitor/latest/api/API_MonitorListMember.html) in the *Amazon CloudWatch Internet Monitor API Reference* .
     *
     * @cloudformationAttribute ProcessingStatus
     */
    readonly attrProcessingStatus: string;
    /**
     * Additional information about the health of the data processing for the monitor.
     *
     * @cloudformationAttribute ProcessingStatusInfo
     */
    readonly attrProcessingStatusInfo: string;
    /**
     * A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for an overall performance or availability issue, across an application's geographies.
     */
    healthEventsConfig?: CfnMonitor.HealthEventsConfigProperty | cdk.IResolvable;
    /**
     * A boolean option that you can set to `TRUE` to include monitors for linked accounts in a list of monitors, when you've set up cross-account sharing in Internet Monitor.
     */
    includeLinkedAccounts?: boolean | cdk.IResolvable;
    /**
     * Publish internet measurements for a monitor for all city-networks (up to the 500,000 service limit) to another location, such as an Amazon S3 bucket.
     */
    internetMeasurementsLogDelivery?: CfnMonitor.InternetMeasurementsLogDeliveryProperty | cdk.IResolvable;
    /**
     * The account ID for an account that you've set up cross-account sharing for in Internet Monitor.
     */
    linkedAccountId?: string;
    /**
     * The maximum number of city-networks to monitor for your resources.
     */
    maxCityNetworksToMonitor?: number;
    /**
     * The name of the monitor.
     */
    monitorName: string;
    /**
     * The resources that have been added for the monitor, listed by their Amazon Resource Names (ARNs).
     */
    resources?: Array<string>;
    /**
     * The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs).
     */
    resourcesToAdd?: Array<string>;
    /**
     * The resources to remove from a monitor, which you provide as a set of Amazon Resource Names (ARNs).
     */
    resourcesToRemove?: Array<string>;
    /**
     * The status of a monitor.
     */
    status?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags for a monitor, listed as a set of *key:value* pairs.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The percentage of the internet-facing traffic for your application that you want to monitor.
     */
    trafficPercentageToMonitor?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMonitorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMonitor {
    /**
     * Define the health event threshold percentages for the performance score and availability score for your application's monitor.
     *
     * Amazon CloudWatch Internet Monitor creates a health event when there's an internet issue that affects your application end users where a health score percentage is at or below a set threshold.
     *
     * If you don't set a health event threshold, the default value is 95%.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-healtheventsconfig.html
     */
    interface HealthEventsConfigProperty {
        /**
         * The configuration that determines the threshold and other conditions for when Internet Monitor creates a health event for a local availability issue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-healtheventsconfig.html#cfn-internetmonitor-monitor-healtheventsconfig-availabilitylocalhealtheventsconfig
         */
        readonly availabilityLocalHealthEventsConfig?: cdk.IResolvable | CfnMonitor.LocalHealthEventsConfigProperty;
        /**
         * The health event threshold percentage set for availability scores.
         *
         * When the overall availability score is at or below this percentage, Internet Monitor creates a health event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-healtheventsconfig.html#cfn-internetmonitor-monitor-healtheventsconfig-availabilityscorethreshold
         */
        readonly availabilityScoreThreshold?: number;
        /**
         * The configuration that determines the threshold and other conditions for when Internet Monitor creates a health event for a local performance issue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-healtheventsconfig.html#cfn-internetmonitor-monitor-healtheventsconfig-performancelocalhealtheventsconfig
         */
        readonly performanceLocalHealthEventsConfig?: cdk.IResolvable | CfnMonitor.LocalHealthEventsConfigProperty;
        /**
         * The health event threshold percentage set for performance scores.
         *
         * When the overall performance score is at or below this percentage, Internet Monitor creates a health event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-healtheventsconfig.html#cfn-internetmonitor-monitor-healtheventsconfig-performancescorethreshold
         */
        readonly performanceScoreThreshold?: number;
    }
    /**
     * Configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for a local performance or availability issue, when scores cross a threshold for one or more city-networks.
     *
     * Defines the percentages, for performance scores or availability scores, that are the local thresholds for when Amazon CloudWatch Internet Monitor creates a health event. Also defines whether a local threshold is enabled or disabled, and the minimum percentage of overall traffic that must be impacted by an issue before Internet Monitor creates an event when a	threshold is crossed for a local health score.
     *
     * If you don't set a local health event threshold, the default value is 60%.
     *
     * For more information, see [Change health event thresholds](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview) in the Internet Monitor section of the *Amazon CloudWatch User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-localhealtheventsconfig.html
     */
    interface LocalHealthEventsConfigProperty {
        /**
         * The health event threshold percentage set for a local health score.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-localhealtheventsconfig.html#cfn-internetmonitor-monitor-localhealtheventsconfig-healthscorethreshold
         */
        readonly healthScoreThreshold?: number;
        /**
         * The minimum percentage of overall traffic for an application that must be impacted by an issue before Internet Monitor creates an event when a threshold is crossed for a local health score.
         *
         * If you don't set a minimum traffic impact threshold, the default value is 0.01%.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-localhealtheventsconfig.html#cfn-internetmonitor-monitor-localhealtheventsconfig-mintrafficimpact
         */
        readonly minTrafficImpact?: number;
        /**
         * The status of whether Internet Monitor creates a health event based on a threshold percentage set for a local health score.
         *
         * The status can be `ENABLED` or `DISABLED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-localhealtheventsconfig.html#cfn-internetmonitor-monitor-localhealtheventsconfig-status
         */
        readonly status?: string;
    }
    /**
     * Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-internetmeasurementslogdelivery.html
     */
    interface InternetMeasurementsLogDeliveryProperty {
        /**
         * The configuration for publishing Amazon CloudWatch Internet Monitor internet measurements to Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-internetmeasurementslogdelivery.html#cfn-internetmonitor-monitor-internetmeasurementslogdelivery-s3config
         */
        readonly s3Config?: cdk.IResolvable | CfnMonitor.S3ConfigProperty;
    }
    /**
     * The configuration for publishing Amazon CloudWatch Internet Monitor internet measurements to Amazon S3.
     *
     * The configuration includes the bucket name and (optionally) bucket prefix for the S3 bucket to store the measurements, and the delivery status. The delivery status is `ENABLED` if you choose to deliver internet measurements to S3 logs, and `DISABLED` otherwise.
     *
     * The measurements are also published to Amazon CloudWatch Logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-s3config.html
     */
    interface S3ConfigProperty {
        /**
         * The Amazon S3 bucket name for internet measurements publishing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-s3config.html#cfn-internetmonitor-monitor-s3config-bucketname
         */
        readonly bucketName?: string;
        /**
         * An optional Amazon S3 bucket prefix for internet measurements publishing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-s3config.html#cfn-internetmonitor-monitor-s3config-bucketprefix
         */
        readonly bucketPrefix?: string;
        /**
         * The status of publishing Internet Monitor internet measurements to an Amazon S3 bucket.
         *
         * The delivery status is `ENABLED` if you choose to deliver internet measurements to an S3 bucket, and `DISABLED` otherwise.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-s3config.html#cfn-internetmonitor-monitor-s3config-logdeliverystatus
         */
        readonly logDeliveryStatus?: string;
    }
}
/**
 * Properties for defining a `CfnMonitor`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html
 */
export interface CfnMonitorProps {
    /**
     * A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for an overall performance or availability issue, across an application's geographies.
     *
     * Defines the percentages, for overall performance scores and availability scores for an application, that are the thresholds for when Amazon CloudWatch Internet Monitor creates a health event. You can override the defaults to set a custom threshold for overall performance or availability scores, or both.
     *
     * You can also set thresholds for local health scores,, where Internet Monitor creates a health event when scores cross a threshold for one or more city-networks, in addition to creating an event when an overall score crosses a threshold.
     *
     * If you don't set a health event threshold, the default value is 95%.
     *
     * For local thresholds, you also set a minimum percentage of overall traffic that is impacted by an issue before Internet Monitor creates an event. In addition, you can disable local thresholds, for performance scores, availability scores, or both.
     *
     * For more information, see [Change health event thresholds](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview) in the Internet Monitor section of the *CloudWatch User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-healtheventsconfig
     */
    readonly healthEventsConfig?: CfnMonitor.HealthEventsConfigProperty | cdk.IResolvable;
    /**
     * A boolean option that you can set to `TRUE` to include monitors for linked accounts in a list of monitors, when you've set up cross-account sharing in Internet Monitor.
     *
     * You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see [Internet Monitor cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html) in the Amazon CloudWatch User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-includelinkedaccounts
     */
    readonly includeLinkedAccounts?: boolean | cdk.IResolvable;
    /**
     * Publish internet measurements for a monitor for all city-networks (up to the 500,000 service limit) to another location, such as an Amazon S3 bucket.
     *
     * Measurements are also published to Amazon CloudWatch Logs for the first 500 (by traffic volume) city-networks (client locations and ASNs, typically internet service providers or ISPs).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-internetmeasurementslogdelivery
     */
    readonly internetMeasurementsLogDelivery?: CfnMonitor.InternetMeasurementsLogDeliveryProperty | cdk.IResolvable;
    /**
     * The account ID for an account that you've set up cross-account sharing for in Internet Monitor.
     *
     * You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see [Internet Monitor cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html) in the Amazon CloudWatch User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-linkedaccountid
     */
    readonly linkedAccountId?: string;
    /**
     * The maximum number of city-networks to monitor for your resources.
     *
     * A city-network is the location (city) where clients access your application resources from and the network, such as an internet service provider, that clients access the resources through.
     *
     * For more information, see [Choosing a city-network maximum value](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html) in *Using Amazon CloudWatch Internet Monitor* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-maxcitynetworkstomonitor
     */
    readonly maxCityNetworksToMonitor?: number;
    /**
     * The name of the monitor.
     *
     * A monitor name can contain only alphanumeric characters, dashes (-), periods (.), and underscores (_).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-monitorname
     */
    readonly monitorName: string;
    /**
     * The resources that have been added for the monitor, listed by their Amazon Resource Names (ARNs).
     *
     * Use this option to add or remove resources when making an update.
     *
     * > Be aware that if you include content in the `Resources` field when you update a monitor, the `ResourcesToAdd` and `ResourcesToRemove` fields must be empty.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-resources
     */
    readonly resources?: Array<string>;
    /**
     * The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs).
     *
     * Resources can be Amazon Virtual Private Cloud VPCs, Network Load Balancers (NLBs), Amazon CloudFront distributions, or Amazon WorkSpaces directories.
     *
     * You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add NLBs or WorkSpaces directories together with any other resources.
     *
     * If you add only VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity.
     *
     * > You can specify this field for a monitor update only if the `Resources` field is empty.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-resourcestoadd
     */
    readonly resourcesToAdd?: Array<string>;
    /**
     * The resources to remove from a monitor, which you provide as a set of Amazon Resource Names (ARNs).
     *
     * > You can specify this field for a monitor update only if the `Resources` field is empty.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-resourcestoremove
     */
    readonly resourcesToRemove?: Array<string>;
    /**
     * The status of a monitor.
     *
     * The accepted values that you can specify for `Status` are `ACTIVE` and `INACTIVE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-status
     */
    readonly status?: string;
    /**
     * The tags for a monitor, listed as a set of *key:value* pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The percentage of the internet-facing traffic for your application that you want to monitor.
     *
     * You can also, optionally, set a limit for the number of city-networks (client locations and ASNs, typically internet service providers) that Internet Monitor will monitor traffic for. The city-networks maximum limit caps the number of city-networks that Internet Monitor monitors for your application, regardless of the percentage of traffic that you choose to monitor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#cfn-internetmonitor-monitor-trafficpercentagetomonitor
     */
    readonly trafficPercentageToMonitor?: number;
}
