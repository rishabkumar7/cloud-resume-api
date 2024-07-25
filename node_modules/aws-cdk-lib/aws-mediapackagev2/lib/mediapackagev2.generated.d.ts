import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a channel to receive content.
 *
 * After it's created, a channel provides static input URLs. These URLs remain the same throughout the lifetime of the channel, regardless of any failures or upgrades that might occur. Use these URLs to configure the outputs of your upstream encoder.
 *
 * @cloudformationResource AWS::MediaPackageV2::Channel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html
 */
export declare class CfnChannel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnChannel;
    /**
     * The Amazon Resource Name (ARN) of the channel.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The timestamp of the ccreation of the channel.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The ingest endpoints associated with the channel.
     *
     * @cloudformationAttribute IngestEndpoints
     */
    readonly attrIngestEndpoints: cdk.IResolvable;
    /**
     * @cloudformationAttribute IngestEndpointUrls
     */
    readonly attrIngestEndpointUrls: Array<string>;
    /**
     * The timestamp of the modification of the channel.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the channel group associated with the channel configuration.
     */
    channelGroupName: string;
    /**
     * The name of the channel.
     */
    channelName: string;
    /**
     * The description of the channel.
     */
    description?: string;
    /**
     * The tags associated with the channel.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnChannelProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnChannel {
    /**
     * The input URL where the source stream should be sent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-channel-ingestendpoint.html
     */
    interface IngestEndpointProperty {
        /**
         * The identifier associated with the ingest endpoint of the channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-channel-ingestendpoint.html#cfn-mediapackagev2-channel-ingestendpoint-id
         */
        readonly id?: string;
        /**
         * The URL associated with the ingest endpoint of the channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-channel-ingestendpoint.html#cfn-mediapackagev2-channel-ingestendpoint-url
         */
        readonly url?: string;
    }
}
/**
 * Properties for defining a `CfnChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html
 */
export interface CfnChannelProps {
    /**
     * The name of the channel group associated with the channel configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html#cfn-mediapackagev2-channel-channelgroupname
     */
    readonly channelGroupName: string;
    /**
     * The name of the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html#cfn-mediapackagev2-channel-channelname
     */
    readonly channelName: string;
    /**
     * The description of the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html#cfn-mediapackagev2-channel-description
     */
    readonly description?: string;
    /**
     * The tags associated with the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html#cfn-mediapackagev2-channel-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies the configuraiton for a MediaPackage V2 channel group.
 *
 * @cloudformationResource AWS::MediaPackageV2::ChannelGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html
 */
export declare class CfnChannelGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnChannelGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnChannelGroup;
    /**
     * The Amazon Resource Name (ARN) of the channel group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The timestamp of the creation of the channel group.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The egress domain of the channel group.
     *
     * @cloudformationAttribute EgressDomain
     */
    readonly attrEgressDomain: string;
    /**
     * The timestamp of the modification of the channel group.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the channel group.
     */
    channelGroupName: string;
    /**
     * The configuration for a MediaPackage V2 channel group.
     */
    description?: string;
    /**
     * The tags associated with the channel group.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnChannelGroupProps);
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
 * Properties for defining a `CfnChannelGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html
 */
export interface CfnChannelGroupProps {
    /**
     * The name of the channel group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html#cfn-mediapackagev2-channelgroup-channelgroupname
     */
    readonly channelGroupName: string;
    /**
     * The configuration for a MediaPackage V2 channel group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html#cfn-mediapackagev2-channelgroup-description
     */
    readonly description?: string;
    /**
     * The tags associated with the channel group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html#cfn-mediapackagev2-channelgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies the configuration parameters of a MediaPackage V2 channel policy.
 *
 * @cloudformationResource AWS::MediaPackageV2::ChannelPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelpolicy.html
 */
export declare class CfnChannelPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnChannelPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnChannelPolicy;
    /**
     * The name of the channel group associated with the channel policy.
     */
    channelGroupName: string;
    /**
     * The name of the channel associated with the channel policy.
     */
    channelName: string;
    /**
     * The policy associated with the channel.
     */
    policy: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnChannelPolicyProps);
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
 * Properties for defining a `CfnChannelPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelpolicy.html
 */
export interface CfnChannelPolicyProps {
    /**
     * The name of the channel group associated with the channel policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelpolicy.html#cfn-mediapackagev2-channelpolicy-channelgroupname
     */
    readonly channelGroupName: string;
    /**
     * The name of the channel associated with the channel policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelpolicy.html#cfn-mediapackagev2-channelpolicy-channelname
     */
    readonly channelName: string;
    /**
     * The policy associated with the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelpolicy.html#cfn-mediapackagev2-channelpolicy-policy
     */
    readonly policy: any | cdk.IResolvable;
}
/**
 * Specifies the configuration parameters for a MediaPackage V2 origin endpoint.
 *
 * @cloudformationResource AWS::MediaPackageV2::OriginEndpoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html
 */
export declare class CfnOriginEndpoint extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnOriginEndpoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnOriginEndpoint;
    /**
     * The Amazon Resource Name (ARN) of the origin endpoint.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The timestamp of the creation of the origin endpoint.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * @cloudformationAttribute DashManifestUrls
     */
    readonly attrDashManifestUrls: Array<string>;
    /**
     * @cloudformationAttribute HlsManifestUrls
     */
    readonly attrHlsManifestUrls: Array<string>;
    /**
     * @cloudformationAttribute LowLatencyHlsManifestUrls
     */
    readonly attrLowLatencyHlsManifestUrls: Array<string>;
    /**
     * The timestamp of the modification of the origin endpoint.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the channel group associated with the origin endpoint configuration.
     */
    channelGroupName: string;
    /**
     * The channel name associated with the origin endpoint.
     */
    channelName: string;
    /**
     * The container type associated with the origin endpoint configuration.
     */
    containerType?: string;
    /**
     * A DASH manifest configuration.
     */
    dashManifests?: Array<CfnOriginEndpoint.DashManifestConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description associated with the origin endpoint.
     */
    description?: string;
    /**
     * The HLS manfiests associated with the origin endpoint configuration.
     */
    hlsManifests?: Array<CfnOriginEndpoint.HlsManifestConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The low-latency HLS (LL-HLS) manifests associated with the origin endpoint.
     */
    lowLatencyHlsManifests?: Array<cdk.IResolvable | CfnOriginEndpoint.LowLatencyHlsManifestConfigurationProperty> | cdk.IResolvable;
    /**
     * The name of the origin endpoint associated with the origin endpoint configuration.
     */
    originEndpointName: string;
    /**
     * The segment associated with the origin endpoint.
     */
    segment?: cdk.IResolvable | CfnOriginEndpoint.SegmentProperty;
    /**
     * The size of the window (in seconds) to specify a window of the live stream that's available for on-demand viewing.
     */
    startoverWindowSeconds?: number;
    /**
     * The tags associated with the origin endpoint.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnOriginEndpointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnOriginEndpoint {
    /**
     * Specify a low-latency HTTP live streaming (LL-HLS) manifest configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration.html
     */
    interface LowLatencyHlsManifestConfigurationProperty {
        /**
         * The name of the child manifest associated with the low-latency HLS (LL-HLS) manifest configuration of the origin endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration-childmanifestname
         */
        readonly childManifestName?: string;
        /**
         * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
         *
         * </p>
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration-filterconfiguration
         */
        readonly filterConfiguration?: CfnOriginEndpoint.FilterConfigurationProperty | cdk.IResolvable;
        /**
         * A short short string that's appended to the endpoint URL.
         *
         * The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, `index` . MediaPackage automatically inserts the format extension, such as `.m3u8` . You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The `manifestName` on the `HLSManifest` object overrides the `manifestName` you provided on the `originEndpoint` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration-manifestname
         */
        readonly manifestName: string;
        /**
         * The total duration (in seconds) of the manifest's content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration-manifestwindowseconds
         */
        readonly manifestWindowSeconds?: number;
        /**
         * Inserts `EXT-X-PROGRAM-DATE-TIME` tags in the output manifest at the interval that you specify.
         *
         * If you don't enter an interval, `EXT-X-PROGRAM-DATE-TIME` tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player. `ID3Timed` metadata messages generate every 5 seconds whenever MediaPackage ingests the content.
         *
         * Irrespective of this parameter, if any `ID3Timed` metadata is in the HLS input, MediaPackage passes through that metadata to the HLS output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration-programdatetimeintervalseconds
         */
        readonly programDateTimeIntervalSeconds?: number;
        /**
         * The SCTE-35 HLS configuration associated with the low-latency HLS (LL-HLS) manifest configuration of the origin endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration-sctehls
         */
        readonly scteHls?: cdk.IResolvable | CfnOriginEndpoint.ScteHlsProperty;
        /**
         * The URL of the low-latency HLS (LL-HLS) manifest configuration of the origin endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration-url
         */
        readonly url?: string;
    }
    /**
     * The SCTE-35 HLS configuration associated with the origin endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-sctehls.html
     */
    interface ScteHlsProperty {
        /**
         * The SCTE-35 HLS ad-marker configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-sctehls.html#cfn-mediapackagev2-originendpoint-sctehls-admarkerhls
         */
        readonly adMarkerHls?: string;
    }
    /**
     * Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-filterconfiguration.html
     */
    interface FilterConfigurationProperty {
        /**
         * Optionally specify the end time for all of your manifest egress requests.
         *
         * When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-filterconfiguration.html#cfn-mediapackagev2-originendpoint-filterconfiguration-end
         */
        readonly end?: string;
        /**
         * Optionally specify one or more manifest filters for all of your manifest egress requests.
         *
         * When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-filterconfiguration.html#cfn-mediapackagev2-originendpoint-filterconfiguration-manifestfilter
         */
        readonly manifestFilter?: string;
        /**
         * Optionally specify the start time for all of your manifest egress requests.
         *
         * When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-filterconfiguration.html#cfn-mediapackagev2-originendpoint-filterconfiguration-start
         */
        readonly start?: string;
        /**
         * Optionally specify the time delay for all of your manifest egress requests.
         *
         * Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-filterconfiguration.html#cfn-mediapackagev2-originendpoint-filterconfiguration-timedelayseconds
         */
        readonly timeDelaySeconds?: number;
    }
    /**
     * The HLS manfiest configuration associated with the origin endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-hlsmanifestconfiguration.html
     */
    interface HlsManifestConfigurationProperty {
        /**
         * The name of the child manifest associated with the HLS manifest configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-hlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-hlsmanifestconfiguration-childmanifestname
         */
        readonly childManifestName?: string;
        /**
         * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
         *
         * </p>
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-hlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-hlsmanifestconfiguration-filterconfiguration
         */
        readonly filterConfiguration?: CfnOriginEndpoint.FilterConfigurationProperty | cdk.IResolvable;
        /**
         * The name of the manifest associated with the HLS manifest configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-hlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-hlsmanifestconfiguration-manifestname
         */
        readonly manifestName: string;
        /**
         * The duration of the manifest window, in seconds, for the HLS manifest configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-hlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-hlsmanifestconfiguration-manifestwindowseconds
         */
        readonly manifestWindowSeconds?: number;
        /**
         * The `EXT-X-PROGRAM-DATE-TIME` interval, in seconds, associated with the HLS manifest configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-hlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-hlsmanifestconfiguration-programdatetimeintervalseconds
         */
        readonly programDateTimeIntervalSeconds?: number;
        /**
         * THE SCTE-35 HLS configuration associated with the HLS manifest configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-hlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-hlsmanifestconfiguration-sctehls
         */
        readonly scteHls?: cdk.IResolvable | CfnOriginEndpoint.ScteHlsProperty;
        /**
         * The URL of the HLS manifest configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-hlsmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-hlsmanifestconfiguration-url
         */
        readonly url?: string;
    }
    /**
     * The segment configuration, including the segment name, duration, and other configuration values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-segment.html
     */
    interface SegmentProperty {
        /**
         * Whether to use encryption for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-segment.html#cfn-mediapackagev2-originendpoint-segment-encryption
         */
        readonly encryption?: CfnOriginEndpoint.EncryptionProperty | cdk.IResolvable;
        /**
         * Whether the segment includes I-frame-only streams.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-segment.html#cfn-mediapackagev2-originendpoint-segment-includeiframeonlystreams
         */
        readonly includeIframeOnlyStreams?: boolean | cdk.IResolvable;
        /**
         * The SCTE-35 configuration associated with the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-segment.html#cfn-mediapackagev2-originendpoint-segment-scte
         */
        readonly scte?: cdk.IResolvable | CfnOriginEndpoint.ScteProperty;
        /**
         * The duration of the segment, in seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-segment.html#cfn-mediapackagev2-originendpoint-segment-segmentdurationseconds
         */
        readonly segmentDurationSeconds?: number;
        /**
         * The name of the segment associated with the origin endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-segment.html#cfn-mediapackagev2-originendpoint-segment-segmentname
         */
        readonly segmentName?: string;
        /**
         * Whether the segment includes DVB subtitles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-segment.html#cfn-mediapackagev2-originendpoint-segment-tsincludedvbsubtitles
         */
        readonly tsIncludeDvbSubtitles?: boolean | cdk.IResolvable;
        /**
         * Whether the segment is an audio rendition group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-segment.html#cfn-mediapackagev2-originendpoint-segment-tsuseaudiorenditiongroup
         */
        readonly tsUseAudioRenditionGroup?: boolean | cdk.IResolvable;
    }
    /**
     * The SCTE-35 configuration associated with the origin endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-scte.html
     */
    interface ScteProperty {
        /**
         * The filter associated with the SCTE-35 configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-scte.html#cfn-mediapackagev2-originendpoint-scte-sctefilter
         */
        readonly scteFilter?: Array<string>;
    }
    /**
     * A collection of video encryption presets.
     *
     * Value description:
     *
     * - `PRESET-VIDEO-1` - Use one content key to encrypt all of the video tracks in your stream.
     * - `PRESET-VIDEO-2` - Use one content key to encrypt all of the SD video tracks and one content key for all HD and higher resolutions video tracks.
     * - `PRESET-VIDEO-3` - Use one content key to encrypt all of the SD video tracks, one content key for HD video tracks and one content key for all UHD video tracks.
     * - `PRESET-VIDEO-4` - Use one content key to encrypt all of the SD video tracks, one content key for HD video tracks, one content key for all UHD1 video tracks and one content key for all UHD2 video tracks.
     * - `PRESET-VIDEO-5` - Use one content key to encrypt all of the SD video tracks, one content key for HD1 video tracks, one content key for HD2 video tracks, one content key for all UHD1 video tracks and one content key for all UHD2 video tracks.
     * - `PRESET-VIDEO-6` - Use one content key to encrypt all of the SD video tracks, one content key for HD1 video tracks, one content key for HD2 video tracks and one content key for all UHD video tracks.
     * - `PRESET-VIDEO-7` - Use one content key to encrypt all of the SD+HD1 video tracks, one content key for HD2 video tracks and one content key for all UHD video tracks.
     * - `PRESET-VIDEO-8` - Use one content key to encrypt all of the SD+HD1 video tracks, one content key for HD2 video tracks, one content key for all UHD1 video tracks and one content key for all UHD2 video tracks.
     * - `SHARED` - Use the same content key for all of the video and audio tracks in your stream.
     * - `UNENCRYPTED` - Don't encrypt any of the video tracks in your stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryption.html
     */
    interface EncryptionProperty {
        /**
         * A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content.
         *
         * If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryption.html#cfn-mediapackagev2-originendpoint-encryption-constantinitializationvector
         */
        readonly constantInitializationVector?: string;
        /**
         * The encryption method to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryption.html#cfn-mediapackagev2-originendpoint-encryption-encryptionmethod
         */
        readonly encryptionMethod: CfnOriginEndpoint.EncryptionMethodProperty | cdk.IResolvable;
        /**
         * The interval, in seconds, to rotate encryption keys for the origin endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryption.html#cfn-mediapackagev2-originendpoint-encryption-keyrotationintervalseconds
         */
        readonly keyRotationIntervalSeconds?: number;
        /**
         * The SPEKE key provider to use for encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryption.html#cfn-mediapackagev2-originendpoint-encryption-spekekeyprovider
         */
        readonly spekeKeyProvider: cdk.IResolvable | CfnOriginEndpoint.SpekeKeyProviderProperty;
    }
    /**
     * The parameters for the SPEKE key provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-spekekeyprovider.html
     */
    interface SpekeKeyProviderProperty {
        /**
         * The DRM solution provider you're using to protect your content during distribution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-spekekeyprovider.html#cfn-mediapackagev2-originendpoint-spekekeyprovider-drmsystems
         */
        readonly drmSystems: Array<string>;
        /**
         * The encryption contract configuration associated with the SPEKE key provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-spekekeyprovider.html#cfn-mediapackagev2-originendpoint-spekekeyprovider-encryptioncontractconfiguration
         */
        readonly encryptionContractConfiguration: CfnOriginEndpoint.EncryptionContractConfigurationProperty | cdk.IResolvable;
        /**
         * The unique identifier for the content.
         *
         * The service sends this identifier to the key server to identify the current endpoint. How unique you make this identifier depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.
         *
         * The following example shows a resource ID: `MovieNight20171126093045`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-spekekeyprovider.html#cfn-mediapackagev2-originendpoint-spekekeyprovider-resourceid
         */
        readonly resourceId: string;
        /**
         * The ARN for the IAM role granted by the key provider that provides access to the key provider API.
         *
         * This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.
         *
         * Valid format: `arn:aws:iam::{accountID}:role/{name}` . The following example shows a role ARN: `arn:aws:iam::444455556666:role/SpekeAccess`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-spekekeyprovider.html#cfn-mediapackagev2-originendpoint-spekekeyprovider-rolearn
         */
        readonly roleArn: string;
        /**
         * The URL of the SPEKE key provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-spekekeyprovider.html#cfn-mediapackagev2-originendpoint-spekekeyprovider-url
         */
        readonly url: string;
    }
    /**
     * Use `encryptionContractConfiguration` to configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryptioncontractconfiguration.html
     */
    interface EncryptionContractConfigurationProperty {
        /**
         * A collection of audio encryption presets.
         *
         * Value description:
         *
         * - `PRESET-AUDIO-1` - Use one content key to encrypt all of the audio tracks in your stream.
         * - `PRESET-AUDIO-2` - Use one content key to encrypt all of the stereo audio tracks and one content key to encrypt all of the multichannel audio tracks.
         * - `PRESET-AUDIO-3` - Use one content key to encrypt all of the stereo audio tracks, one content key to encrypt all of the multichannel audio tracks with 3 to 6 channels, and one content key to encrypt all of the multichannel audio tracks with more than 6 channels.
         * - `SHARED` - Use the same content key for all of the audio and video tracks in your stream.
         * - `UNENCRYPTED` - Don't encrypt any of the audio tracks in your stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryptioncontractconfiguration.html#cfn-mediapackagev2-originendpoint-encryptioncontractconfiguration-presetspeke20audio
         */
        readonly presetSpeke20Audio: string;
        /**
         * The SPEKE Version 2.0 preset video associated with the encryption contract configuration of the origin endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryptioncontractconfiguration.html#cfn-mediapackagev2-originendpoint-encryptioncontractconfiguration-presetspeke20video
         */
        readonly presetSpeke20Video: string;
    }
    /**
     * The encryption method associated with the origin endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryptionmethod.html
     */
    interface EncryptionMethodProperty {
        /**
         * The encryption method to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryptionmethod.html#cfn-mediapackagev2-originendpoint-encryptionmethod-cmafencryptionmethod
         */
        readonly cmafEncryptionMethod?: string;
        /**
         * The encryption method to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryptionmethod.html#cfn-mediapackagev2-originendpoint-encryptionmethod-tsencryptionmethod
         */
        readonly tsEncryptionMethod?: string;
    }
    /**
     * <p>Retrieve the DASH manifest configuration.</p>.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html
     */
    interface DashManifestConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-drmsignaling
         */
        readonly drmSignaling?: string;
        /**
         * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
         *
         * </p>
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-filterconfiguration
         */
        readonly filterConfiguration?: CfnOriginEndpoint.FilterConfigurationProperty | cdk.IResolvable;
        /**
         * <p>A short string that's appended to the endpoint URL.
         *
         * The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-manifestname
         */
        readonly manifestName: string;
        /**
         * <p>The total duration (in seconds) of the manifest's content.</p>.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-manifestwindowseconds
         */
        readonly manifestWindowSeconds?: number;
        /**
         * <p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-minbuffertimeseconds
         */
        readonly minBufferTimeSeconds?: number;
        /**
         * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-minupdateperiodseconds
         */
        readonly minUpdatePeriodSeconds?: number;
        /**
         * <p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods.
         *
         * Leave this value empty to indicate that the manifest is contained all in one period.
         *          For more information about periods in the DASH manifest, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-periodtriggers
         */
        readonly periodTriggers?: Array<string>;
        /**
         * <p>The SCTE configuration.</p>.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-sctedash
         */
        readonly scteDash?: cdk.IResolvable | CfnOriginEndpoint.ScteDashProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-segmenttemplateformat
         */
        readonly segmentTemplateFormat?: string;
        /**
         * <p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-suggestedpresentationdelayseconds
         */
        readonly suggestedPresentationDelaySeconds?: number;
        /**
         * <p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html#cfn-mediapackagev2-originendpoint-dashmanifestconfiguration-utctiming
         */
        readonly utcTiming?: CfnOriginEndpoint.DashUtcTimingProperty | cdk.IResolvable;
    }
    /**
     * The SCTE configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-sctedash.html
     */
    interface ScteDashProperty {
        /**
         * Choose how ad markers are included in the packaged content.
         *
         * If you include ad markers in the content stream in your upstream encoders, then you need to inform MediaPackage what to do with the ad markers in the output.
         *
         * Value description:
         *
         * - `Binary` - The SCTE-35 marker is expressed as a hex-string (Base64 string) rather than full XML.
         * - `XML` - The SCTE marker is expressed fully in XML.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-sctedash.html#cfn-mediapackagev2-originendpoint-sctedash-admarkerdash
         */
        readonly adMarkerDash?: string;
    }
    /**
     * Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashutctiming.html
     */
    interface DashUtcTimingProperty {
        /**
         * The UTC timing mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashutctiming.html#cfn-mediapackagev2-originendpoint-dashutctiming-timingmode
         */
        readonly timingMode?: string;
        /**
         * The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashutctiming.html#cfn-mediapackagev2-originendpoint-dashutctiming-timingsource
         */
        readonly timingSource?: string;
    }
}
/**
 * Properties for defining a `CfnOriginEndpoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html
 */
export interface CfnOriginEndpointProps {
    /**
     * The name of the channel group associated with the origin endpoint configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-channelgroupname
     */
    readonly channelGroupName: string;
    /**
     * The channel name associated with the origin endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-channelname
     */
    readonly channelName: string;
    /**
     * The container type associated with the origin endpoint configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-containertype
     */
    readonly containerType?: string;
    /**
     * A DASH manifest configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-dashmanifests
     */
    readonly dashManifests?: Array<CfnOriginEndpoint.DashManifestConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description associated with the origin endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-description
     */
    readonly description?: string;
    /**
     * The HLS manfiests associated with the origin endpoint configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-hlsmanifests
     */
    readonly hlsManifests?: Array<CfnOriginEndpoint.HlsManifestConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The low-latency HLS (LL-HLS) manifests associated with the origin endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-lowlatencyhlsmanifests
     */
    readonly lowLatencyHlsManifests?: Array<cdk.IResolvable | CfnOriginEndpoint.LowLatencyHlsManifestConfigurationProperty> | cdk.IResolvable;
    /**
     * The name of the origin endpoint associated with the origin endpoint configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-originendpointname
     */
    readonly originEndpointName: string;
    /**
     * The segment associated with the origin endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-segment
     */
    readonly segment?: cdk.IResolvable | CfnOriginEndpoint.SegmentProperty;
    /**
     * The size of the window (in seconds) to specify a window of the live stream that's available for on-demand viewing.
     *
     * Viewers can start-over or catch-up on content that falls within the window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-startoverwindowseconds
     */
    readonly startoverWindowSeconds?: number;
    /**
     * The tags associated with the origin endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#cfn-mediapackagev2-originendpoint-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies the configuration parameters of a policy associated with a MediaPackage V2 origin endpoint.
 *
 * @cloudformationResource AWS::MediaPackageV2::OriginEndpointPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html
 */
export declare class CfnOriginEndpointPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnOriginEndpointPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnOriginEndpointPolicy;
    /**
     * The name of the channel group associated with the origin endpoint policy.
     */
    channelGroupName: string;
    /**
     * The channel name associated with the origin endpoint policy.
     */
    channelName: string;
    /**
     * The name of the origin endpoint associated with the origin endpoint policy.
     */
    originEndpointName: string;
    /**
     * The policy associated with the origin endpoint.
     */
    policy: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnOriginEndpointPolicyProps);
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
 * Properties for defining a `CfnOriginEndpointPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html
 */
export interface CfnOriginEndpointPolicyProps {
    /**
     * The name of the channel group associated with the origin endpoint policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html#cfn-mediapackagev2-originendpointpolicy-channelgroupname
     */
    readonly channelGroupName: string;
    /**
     * The channel name associated with the origin endpoint policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html#cfn-mediapackagev2-originendpointpolicy-channelname
     */
    readonly channelName: string;
    /**
     * The name of the origin endpoint associated with the origin endpoint policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html#cfn-mediapackagev2-originendpointpolicy-originendpointname
     */
    readonly originEndpointName: string;
    /**
     * The policy associated with the origin endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html#cfn-mediapackagev2-originendpointpolicy-policy
     */
    readonly policy: any | cdk.IResolvable;
}
