import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::MediaConnect::Bridge resource defines a connection between your data center’s gateway instances and the cloud.
 *
 * For each bridge, you specify the type of bridge, transport protocol to use, and details for any outputs and failover.
 *
 * @cloudformationResource AWS::MediaConnect::Bridge
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html
 */
export declare class CfnBridge extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBridge from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBridge;
    /**
     * The Amazon Resource Name (ARN) of the bridge.
     *
     * @cloudformationAttribute BridgeArn
     */
    readonly attrBridgeArn: string;
    /**
     * The current status of the bridge. Possible values are: ACTIVE or STANDBY.
     *
     * @cloudformationAttribute BridgeState
     */
    readonly attrBridgeState: string;
    /**
     * Create a bridge with the egress bridge type.
     */
    egressGatewayBridge?: CfnBridge.EgressGatewayBridgeProperty | cdk.IResolvable;
    /**
     * Create a bridge with the ingress bridge type.
     */
    ingressGatewayBridge?: CfnBridge.IngressGatewayBridgeProperty | cdk.IResolvable;
    /**
     * The name of the bridge.
     */
    name: string;
    /**
     * The outputs that you want to add to this bridge.
     */
    outputs?: Array<CfnBridge.BridgeOutputProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The bridge placement Amazon Resource Number (ARN).
     */
    placementArn: string;
    /**
     * The settings for source failover.
     */
    sourceFailoverConfig?: CfnBridge.FailoverConfigProperty | cdk.IResolvable;
    /**
     * The sources that you want to add to this bridge.
     */
    sources: Array<CfnBridge.BridgeSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBridgeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBridge {
    /**
     * The settings for source failover.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-failoverconfig.html
     */
    interface FailoverConfigProperty {
        /**
         * The type of failover you choose for this flow.
         *
         * MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-failoverconfig.html#cfn-mediaconnect-bridge-failoverconfig-failovermode
         */
        readonly failoverMode: string;
        /**
         * The priority you want to assign to a source.
         *
         * You can have a primary stream and a backup stream or two equally prioritized streams. This setting only applies when Failover Mode is set to FAILOVER.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-failoverconfig.html#cfn-mediaconnect-bridge-failoverconfig-sourcepriority
         */
        readonly sourcePriority?: cdk.IResolvable | CfnBridge.SourcePriorityProperty;
        /**
         * The state of source failover on the flow.
         *
         * If the state is inactive, the flow can have only one source. If the state is active, the flow can have one or two sources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-failoverconfig.html#cfn-mediaconnect-bridge-failoverconfig-state
         */
        readonly state?: string;
    }
    /**
     * The priority you want to assign to a source.
     *
     * You can have a primary stream and a backup stream or two equally prioritized streams. This setting only applies when Failover Mode is set to FAILOVER.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-sourcepriority.html
     */
    interface SourcePriorityProperty {
        /**
         * The name of the source you choose as the primary source for this flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-sourcepriority.html#cfn-mediaconnect-bridge-sourcepriority-primarysource
         */
        readonly primarySource?: string;
    }
    /**
     * Create a bridge with the ingress bridge type.
     *
     * An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-ingressgatewaybridge.html
     */
    interface IngressGatewayBridgeProperty {
        /**
         * The maximum expected bitrate (in bps) of the ingress bridge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-ingressgatewaybridge.html#cfn-mediaconnect-bridge-ingressgatewaybridge-maxbitrate
         */
        readonly maxBitrate: number;
        /**
         * The maximum number of outputs on the ingress bridge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-ingressgatewaybridge.html#cfn-mediaconnect-bridge-ingressgatewaybridge-maxoutputs
         */
        readonly maxOutputs: number;
    }
    /**
     * Create a bridge with the egress bridge type.
     *
     * An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-egressgatewaybridge.html
     */
    interface EgressGatewayBridgeProperty {
        /**
         * The maximum expected bitrate (in bps) of the egress bridge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-egressgatewaybridge.html#cfn-mediaconnect-bridge-egressgatewaybridge-maxbitrate
         */
        readonly maxBitrate: number;
    }
    /**
     * The output of the bridge.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgeoutput.html
     */
    interface BridgeOutputProperty {
        /**
         * The output of the bridge.
         *
         * A network output is delivered to your premises.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgeoutput.html#cfn-mediaconnect-bridge-bridgeoutput-networkoutput
         */
        readonly networkOutput?: CfnBridge.BridgeNetworkOutputProperty | cdk.IResolvable;
    }
    /**
     * The output of the bridge.
     *
     * A network output is delivered to your premises.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworkoutput.html
     */
    interface BridgeNetworkOutputProperty {
        /**
         * The network output IP Address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworkoutput.html#cfn-mediaconnect-bridge-bridgenetworkoutput-ipaddress
         */
        readonly ipAddress: string;
        /**
         * The network output name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworkoutput.html#cfn-mediaconnect-bridge-bridgenetworkoutput-name
         */
        readonly name: string;
        /**
         * The network output's gateway network name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworkoutput.html#cfn-mediaconnect-bridge-bridgenetworkoutput-networkname
         */
        readonly networkName: string;
        /**
         * The network output port.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworkoutput.html#cfn-mediaconnect-bridge-bridgenetworkoutput-port
         */
        readonly port: number;
        /**
         * The network output protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworkoutput.html#cfn-mediaconnect-bridge-bridgenetworkoutput-protocol
         */
        readonly protocol: string;
        /**
         * The network output TTL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworkoutput.html#cfn-mediaconnect-bridge-bridgenetworkoutput-ttl
         */
        readonly ttl: number;
    }
    /**
     * The bridge's source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgesource.html
     */
    interface BridgeSourceProperty {
        /**
         * The source of the bridge.
         *
         * A flow source originates in MediaConnect as an existing cloud flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgesource.html#cfn-mediaconnect-bridge-bridgesource-flowsource
         */
        readonly flowSource?: CfnBridge.BridgeFlowSourceProperty | cdk.IResolvable;
        /**
         * The source of the bridge.
         *
         * A network source originates at your premises.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgesource.html#cfn-mediaconnect-bridge-bridgesource-networksource
         */
        readonly networkSource?: CfnBridge.BridgeNetworkSourceProperty | cdk.IResolvable;
    }
    /**
     * The source of the bridge.
     *
     * A network source originates at your premises.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworksource.html
     */
    interface BridgeNetworkSourceProperty {
        /**
         * The network source multicast IP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworksource.html#cfn-mediaconnect-bridge-bridgenetworksource-multicastip
         */
        readonly multicastIp: string;
        /**
         * The name of the network source.
         *
         * This name is used to reference the source and must be unique among sources in this bridge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworksource.html#cfn-mediaconnect-bridge-bridgenetworksource-name
         */
        readonly name: string;
        /**
         * The network source's gateway network name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworksource.html#cfn-mediaconnect-bridge-bridgenetworksource-networkname
         */
        readonly networkName: string;
        /**
         * The network source port.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworksource.html#cfn-mediaconnect-bridge-bridgenetworksource-port
         */
        readonly port: number;
        /**
         * The network source protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworksource.html#cfn-mediaconnect-bridge-bridgenetworksource-protocol
         */
        readonly protocol: string;
    }
    /**
     * The source of the bridge.
     *
     * A flow source originates in MediaConnect as an existing cloud flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgeflowsource.html
     */
    interface BridgeFlowSourceProperty {
        /**
         * The ARN of the cloud flow used as a source of this bridge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgeflowsource.html#cfn-mediaconnect-bridge-bridgeflowsource-flowarn
         */
        readonly flowArn: string;
        /**
         * The name of the VPC interface attachment to use for this source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgeflowsource.html#cfn-mediaconnect-bridge-bridgeflowsource-flowvpcinterfaceattachment
         */
        readonly flowVpcInterfaceAttachment?: cdk.IResolvable | CfnBridge.VpcInterfaceAttachmentProperty;
        /**
         * The name of the flow source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgeflowsource.html#cfn-mediaconnect-bridge-bridgeflowsource-name
         */
        readonly name: string;
    }
    /**
     * The VPC interface that you want to send your output to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-vpcinterfaceattachment.html
     */
    interface VpcInterfaceAttachmentProperty {
        /**
         * The name of the VPC interface that you want to send your output to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-vpcinterfaceattachment.html#cfn-mediaconnect-bridge-vpcinterfaceattachment-vpcinterfacename
         */
        readonly vpcInterfaceName?: string;
    }
}
/**
 * Properties for defining a `CfnBridge`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html
 */
export interface CfnBridgeProps {
    /**
     * Create a bridge with the egress bridge type.
     *
     * An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html#cfn-mediaconnect-bridge-egressgatewaybridge
     */
    readonly egressGatewayBridge?: CfnBridge.EgressGatewayBridgeProperty | cdk.IResolvable;
    /**
     * Create a bridge with the ingress bridge type.
     *
     * An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html#cfn-mediaconnect-bridge-ingressgatewaybridge
     */
    readonly ingressGatewayBridge?: CfnBridge.IngressGatewayBridgeProperty | cdk.IResolvable;
    /**
     * The name of the bridge.
     *
     * This name can not be modified after the bridge is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html#cfn-mediaconnect-bridge-name
     */
    readonly name: string;
    /**
     * The outputs that you want to add to this bridge.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html#cfn-mediaconnect-bridge-outputs
     */
    readonly outputs?: Array<CfnBridge.BridgeOutputProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The bridge placement Amazon Resource Number (ARN).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html#cfn-mediaconnect-bridge-placementarn
     */
    readonly placementArn: string;
    /**
     * The settings for source failover.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html#cfn-mediaconnect-bridge-sourcefailoverconfig
     */
    readonly sourceFailoverConfig?: CfnBridge.FailoverConfigProperty | cdk.IResolvable;
    /**
     * The sources that you want to add to this bridge.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html#cfn-mediaconnect-bridge-sources
     */
    readonly sources: Array<CfnBridge.BridgeSourceProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * Adds outputs to an existing bridge.
 *
 * @cloudformationResource AWS::MediaConnect::BridgeOutput
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgeoutput.html
 */
export declare class CfnBridgeOutput extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBridgeOutput from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBridgeOutput;
    /**
     * The ARN of the bridge that you want to describe.
     */
    bridgeArn: string;
    /**
     * The network output name.
     */
    name: string;
    /**
     * Add a network output to an existing bridge.
     */
    networkOutput: CfnBridgeOutput.BridgeNetworkOutputProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBridgeOutputProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBridgeOutput {
    /**
     * The output of the bridge.
     *
     * A network output is delivered to your premises.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgeoutput-bridgenetworkoutput.html
     */
    interface BridgeNetworkOutputProperty {
        /**
         * The network output IP Address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgeoutput-bridgenetworkoutput.html#cfn-mediaconnect-bridgeoutput-bridgenetworkoutput-ipaddress
         */
        readonly ipAddress: string;
        /**
         * The network output's gateway network name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgeoutput-bridgenetworkoutput.html#cfn-mediaconnect-bridgeoutput-bridgenetworkoutput-networkname
         */
        readonly networkName: string;
        /**
         * The network output port.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgeoutput-bridgenetworkoutput.html#cfn-mediaconnect-bridgeoutput-bridgenetworkoutput-port
         */
        readonly port: number;
        /**
         * The network output protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgeoutput-bridgenetworkoutput.html#cfn-mediaconnect-bridgeoutput-bridgenetworkoutput-protocol
         */
        readonly protocol: string;
        /**
         * The network output TTL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgeoutput-bridgenetworkoutput.html#cfn-mediaconnect-bridgeoutput-bridgenetworkoutput-ttl
         */
        readonly ttl: number;
    }
}
/**
 * Properties for defining a `CfnBridgeOutput`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgeoutput.html
 */
export interface CfnBridgeOutputProps {
    /**
     * The ARN of the bridge that you want to describe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgeoutput.html#cfn-mediaconnect-bridgeoutput-bridgearn
     */
    readonly bridgeArn: string;
    /**
     * The network output name.
     *
     * This name is used to reference the output and must be unique among outputs in this bridge.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgeoutput.html#cfn-mediaconnect-bridgeoutput-name
     */
    readonly name: string;
    /**
     * Add a network output to an existing bridge.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgeoutput.html#cfn-mediaconnect-bridgeoutput-networkoutput
     */
    readonly networkOutput: CfnBridgeOutput.BridgeNetworkOutputProperty | cdk.IResolvable;
}
/**
 * Adds sources to an existing bridge.
 *
 * @cloudformationResource AWS::MediaConnect::BridgeSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html
 */
export declare class CfnBridgeSource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBridgeSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBridgeSource;
    /**
     * The ARN of the bridge that you want to describe.
     */
    bridgeArn: string;
    /**
     * Add a flow source to an existing bridge.
     */
    flowSource?: CfnBridgeSource.BridgeFlowSourceProperty | cdk.IResolvable;
    /**
     * The name of the flow source.
     */
    name: string;
    /**
     * Add a network source to an existing bridge.
     */
    networkSource?: CfnBridgeSource.BridgeNetworkSourceProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBridgeSourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBridgeSource {
    /**
     * The source of the bridge.
     *
     * A network source originates at your premises.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgenetworksource.html
     */
    interface BridgeNetworkSourceProperty {
        /**
         * The network source multicast IP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgenetworksource.html#cfn-mediaconnect-bridgesource-bridgenetworksource-multicastip
         */
        readonly multicastIp: string;
        /**
         * The network source's gateway network name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgenetworksource.html#cfn-mediaconnect-bridgesource-bridgenetworksource-networkname
         */
        readonly networkName: string;
        /**
         * The network source port.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgenetworksource.html#cfn-mediaconnect-bridgesource-bridgenetworksource-port
         */
        readonly port: number;
        /**
         * The network source protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgenetworksource.html#cfn-mediaconnect-bridgesource-bridgenetworksource-protocol
         */
        readonly protocol: string;
    }
    /**
     * The source of the bridge.
     *
     * A flow source originates in MediaConnect as an existing cloud flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgeflowsource.html
     */
    interface BridgeFlowSourceProperty {
        /**
         * The ARN of the cloud flow used as a source of this bridge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgeflowsource.html#cfn-mediaconnect-bridgesource-bridgeflowsource-flowarn
         */
        readonly flowArn: string;
        /**
         * The name of the VPC interface attachment to use for this source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgeflowsource.html#cfn-mediaconnect-bridgesource-bridgeflowsource-flowvpcinterfaceattachment
         */
        readonly flowVpcInterfaceAttachment?: cdk.IResolvable | CfnBridgeSource.VpcInterfaceAttachmentProperty;
    }
    /**
     * The VPC interface that you want to send your output to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-vpcinterfaceattachment.html
     */
    interface VpcInterfaceAttachmentProperty {
        /**
         * The name of the VPC interface that you want to send your output to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-vpcinterfaceattachment.html#cfn-mediaconnect-bridgesource-vpcinterfaceattachment-vpcinterfacename
         */
        readonly vpcInterfaceName?: string;
    }
}
/**
 * Properties for defining a `CfnBridgeSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html
 */
export interface CfnBridgeSourceProps {
    /**
     * The ARN of the bridge that you want to describe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-bridgearn
     */
    readonly bridgeArn: string;
    /**
     * Add a flow source to an existing bridge.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-flowsource
     */
    readonly flowSource?: CfnBridgeSource.BridgeFlowSourceProperty | cdk.IResolvable;
    /**
     * The name of the flow source.
     *
     * This name is used to reference the source and must be unique among sources in this bridge.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-name
     */
    readonly name: string;
    /**
     * Add a network source to an existing bridge.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-networksource
     */
    readonly networkSource?: CfnBridgeSource.BridgeNetworkSourceProperty | cdk.IResolvable;
}
/**
 * The AWS::MediaConnect::Flow resource defines a connection between one or more video sources and one or more outputs.
 *
 * For each flow, you specify the transport protocol to use, encryption information, and details for any outputs or entitlements that you want. AWS Elemental MediaConnect returns an ingest endpoint where you can send your live video as a single unicast stream. The service replicates and distributes the video to every output that you specify, whether inside or outside the AWS Cloud. You can also set up entitlements on a flow to allow other AWS accounts to access your content.
 *
 * @cloudformationResource AWS::MediaConnect::Flow
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html
 */
export declare class CfnFlow extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFlow from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFlow;
    /**
     * The outgoing IP address that MediaConnect uses to send video from the flow.
     *
     * @cloudformationAttribute EgressIp
     */
    readonly attrEgressIp: string;
    /**
     * The Amazon Resource Name (ARN) of the flow.
     *
     * @cloudformationAttribute FlowArn
     */
    readonly attrFlowArn: string;
    /**
     * The Availability Zone that the flow was created in. These options are limited to the Availability Zones within the current AWS Region.
     *
     * @cloudformationAttribute FlowAvailabilityZone
     */
    readonly attrFlowAvailabilityZone: string;
    /**
     * The IP address that the flow listens on for incoming content.
     *
     * @cloudformationAttribute Source.IngestIp
     */
    readonly attrSourceIngestIp: string;
    /**
     * The ARN of the source.
     *
     * @cloudformationAttribute Source.SourceArn
     */
    readonly attrSourceSourceArn: string;
    /**
     * The port that the flow listens on for incoming content. If the protocol of the source is Zixi, the port must be set to 2088.
     *
     * @cloudformationAttribute Source.SourceIngestPort
     */
    readonly attrSourceSourceIngestPort: string;
    /**
     * The Availability Zone that you want to create the flow in.
     */
    availabilityZone?: string;
    /**
     * The maintenance settings you want to use for the flow.
     */
    maintenance?: cdk.IResolvable | CfnFlow.MaintenanceProperty;
    /**
     * The media streams associated with the flow.
     */
    mediaStreams?: Array<cdk.IResolvable | CfnFlow.MediaStreamProperty> | cdk.IResolvable;
    /**
     * The name of the flow.
     */
    name: string;
    /**
     * The settings for the source that you want to use for the new flow.
     */
    source: cdk.IResolvable | CfnFlow.SourceProperty;
    /**
     * The settings for source failover.
     */
    sourceFailoverConfig?: CfnFlow.FailoverConfigProperty | cdk.IResolvable;
    /**
     * The VPC interfaces that you added to this flow.
     */
    vpcInterfaces?: Array<cdk.IResolvable | CfnFlow.VpcInterfaceProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFlowProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFlow {
    /**
     * The settings for source failover.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-failoverconfig.html
     */
    interface FailoverConfigProperty {
        /**
         * The type of failover you choose for this flow.
         *
         * MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams. The string for this property must be entered as MERGE or FAILOVER. No other string entry is valid.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-failoverconfig.html#cfn-mediaconnect-flow-failoverconfig-failovermode
         */
        readonly failoverMode?: string;
        /**
         * The size of the buffer (delay) that the service maintains.
         *
         * A larger buffer means a longer delay in transmitting the stream, but more room for error correction. A smaller buffer means a shorter delay, but less room for error correction. You can choose a value from 100-500 ms. If you keep this field blank, the service uses the default value of 200 ms. This setting only applies when Failover Mode is set to MERGE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-failoverconfig.html#cfn-mediaconnect-flow-failoverconfig-recoverywindow
         */
        readonly recoveryWindow?: number;
        /**
         * The priority you want to assign to a source.
         *
         * You can have a primary stream and a backup stream or two equally prioritized streams. This setting only applies when Failover Mode is set to FAILOVER.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-failoverconfig.html#cfn-mediaconnect-flow-failoverconfig-sourcepriority
         */
        readonly sourcePriority?: cdk.IResolvable | CfnFlow.SourcePriorityProperty;
        /**
         * The state of source failover on the flow.
         *
         * If the state is inactive, the flow can have only one source. If the state is active, the flow can have one or two sources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-failoverconfig.html#cfn-mediaconnect-flow-failoverconfig-state
         */
        readonly state?: string;
    }
    /**
     * The priority you want to assign to a source.
     *
     * You can have a primary stream and a backup stream or two equally prioritized streams. This setting only applies when Failover Mode is set to FAILOVER.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-sourcepriority.html
     */
    interface SourcePriorityProperty {
        /**
         * The name of the source you choose as the primary source for this flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-sourcepriority.html#cfn-mediaconnect-flow-sourcepriority-primarysource
         */
        readonly primarySource: string;
    }
    /**
     * The details of the sources of the flow.
     *
     * If you are creating a flow with a VPC source, you must first create the flow with a temporary standard source by doing the following:
     *
     * - Use CloudFormation to create a flow with a standard source that uses the flow’s public IP address.
     * - Use CloudFormation to create the VPC interface to add to this flow. This can also be done as part of the previous step.
     * - After CloudFormation has created the flow and the VPC interface, update the source to point to the VPC interface that you created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html
     */
    interface SourceProperty {
        /**
         * The type of encryption that is used on the content ingested from the source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-decryption
         */
        readonly decryption?: CfnFlow.EncryptionProperty | cdk.IResolvable;
        /**
         * A description of the source.
         *
         * This description is not visible outside of the current AWS account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-description
         */
        readonly description?: string;
        /**
         * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.
         *
         * The entitlement is set by the content originator and the ARN is generated as part of the originator’s flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-entitlementarn
         */
        readonly entitlementArn?: string;
        /**
         * The source configuration for cloud flows receiving a stream from a bridge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-gatewaybridgesource
         */
        readonly gatewayBridgeSource?: CfnFlow.GatewayBridgeSourceProperty | cdk.IResolvable;
        /**
         * The IP address that the flow listens on for incoming content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-ingestip
         */
        readonly ingestIp?: string;
        /**
         * The port that the flow listens on for incoming content.
         *
         * If the protocol of the source is Zixi, the port must be set to 2088.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-ingestport
         */
        readonly ingestPort?: number;
        /**
         * The maximum bitrate for RIST, RTP, and RTP-FEC streams.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-maxbitrate
         */
        readonly maxBitrate?: number;
        /**
         * The maximum latency in milliseconds for a RIST or Zixi-based source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-maxlatency
         */
        readonly maxLatency?: number;
        /**
         * The size of the buffer (in milliseconds) to use to sync incoming source data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-maxsyncbuffer
         */
        readonly maxSyncBuffer?: number;
        /**
         * The media stream that is associated with the source, and the parameters for that association.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-mediastreamsourceconfigurations
         */
        readonly mediaStreamSourceConfigurations?: Array<cdk.IResolvable | CfnFlow.MediaStreamSourceConfigurationProperty> | cdk.IResolvable;
        /**
         * The minimum latency in milliseconds for SRT-based streams.
         *
         * In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-minlatency
         */
        readonly minLatency?: number;
        /**
         * The name of the source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-name
         */
        readonly name?: string;
        /**
         * The protocol that is used by the source.
         *
         * AWS CloudFormation does not currently support CDI or ST 2110 JPEG XS source protocols.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-protocol
         */
        readonly protocol?: string;
        /**
         * The port that the flow uses to send outbound requests to initiate connection with the sender.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-sendercontrolport
         */
        readonly senderControlPort?: number;
        /**
         * The IP address that the flow communicates with to initiate connection with the sender.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-senderipaddress
         */
        readonly senderIpAddress?: string;
        /**
         * The ARN of the source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-sourcearn
         */
        readonly sourceArn?: string;
        /**
         * The port that the flow listens on for incoming content.
         *
         * If the protocol of the source is Zixi, the port must be set to 2088.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-sourceingestport
         */
        readonly sourceIngestPort?: string;
        /**
         * Source IP or domain name for SRT-caller protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-sourcelisteneraddress
         */
        readonly sourceListenerAddress?: string;
        /**
         * Source port for SRT-caller protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-sourcelistenerport
         */
        readonly sourceListenerPort?: number;
        /**
         * The stream ID that you want to use for the transport.
         *
         * This parameter applies only to Zixi-based streams.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-streamid
         */
        readonly streamId?: string;
        /**
         * The name of the VPC interface that the source content comes from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-vpcinterfacename
         */
        readonly vpcInterfaceName?: string;
        /**
         * The range of IP addresses that are allowed to contribute content to your source.
         *
         * Format the IP addresses as a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html#cfn-mediaconnect-flow-source-whitelistcidr
         */
        readonly whitelistCidr?: string;
    }
    /**
     * Information about the encryption of the flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html
     */
    interface EncryptionProperty {
        /**
         * The type of algorithm that is used for static key encryption (such as aes128, aes192, or aes256).
         *
         * If you are using SPEKE or SRT-password encryption, this property must be left blank.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html#cfn-mediaconnect-flow-encryption-algorithm
         */
        readonly algorithm?: string;
        /**
         * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.
         *
         * This parameter is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html#cfn-mediaconnect-flow-encryption-constantinitializationvector
         */
        readonly constantInitializationVector?: string;
        /**
         * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.
         *
         * This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html#cfn-mediaconnect-flow-encryption-deviceid
         */
        readonly deviceId?: string;
        /**
         * The type of key that is used for the encryption.
         *
         * If you don't specify a `keyType` value, the service uses the default setting ( `static-key` ). Valid key types are: `static-key` , `speke` , and `srt-password` .
         *
         * @default - "static-key"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html#cfn-mediaconnect-flow-encryption-keytype
         */
        readonly keyType?: string;
        /**
         * The AWS Region that the API Gateway proxy endpoint was created in.
         *
         * This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html#cfn-mediaconnect-flow-encryption-region
         */
        readonly region?: string;
        /**
         * An identifier for the content.
         *
         * The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html#cfn-mediaconnect-flow-encryption-resourceid
         */
        readonly resourceId?: string;
        /**
         * The Amazon Resource Name (ARN) of the role that you created during setup (when you set up MediaConnect as a trusted entity).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html#cfn-mediaconnect-flow-encryption-rolearn
         */
        readonly roleArn: string;
        /**
         * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html#cfn-mediaconnect-flow-encryption-secretarn
         */
        readonly secretArn?: string;
        /**
         * The URL from the API Gateway proxy that you set up to talk to your key server.
         *
         * This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html#cfn-mediaconnect-flow-encryption-url
         */
        readonly url?: string;
    }
    /**
     * The source configuration for cloud flows receiving a stream from a bridge.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-gatewaybridgesource.html
     */
    interface GatewayBridgeSourceProperty {
        /**
         * The ARN of the bridge feeding this flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-gatewaybridgesource.html#cfn-mediaconnect-flow-gatewaybridgesource-bridgearn
         */
        readonly bridgeArn: string;
        /**
         * The name of the VPC interface attachment to use for this bridge source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-gatewaybridgesource.html#cfn-mediaconnect-flow-gatewaybridgesource-vpcinterfaceattachment
         */
        readonly vpcInterfaceAttachment?: cdk.IResolvable | CfnFlow.VpcInterfaceAttachmentProperty;
    }
    /**
     * The VPC interface that you want to send your output to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterfaceattachment.html
     */
    interface VpcInterfaceAttachmentProperty {
        /**
         * The name of the VPC interface that you want to send your output to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterfaceattachment.html#cfn-mediaconnect-flow-vpcinterfaceattachment-vpcinterfacename
         */
        readonly vpcInterfaceName?: string;
    }
    /**
     * The media stream that is associated with the source, and the parameters for that association.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastreamsourceconfiguration.html
     */
    interface MediaStreamSourceConfigurationProperty {
        /**
         * The format that was used to encode the data.
         *
         * For ancillary data streams, set the encoding name to `smpte291` .
         *
         * For audio streams, set the encoding name to `pcm` .
         *
         * For video, 2110 streams, set the encoding name to `raw` .
         *
         * For video, JPEG XS streams, set the encoding name to `jxsv` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastreamsourceconfiguration.html#cfn-mediaconnect-flow-mediastreamsourceconfiguration-encodingname
         */
        readonly encodingName: string;
        /**
         * The media streams that you want to associate with the source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastreamsourceconfiguration.html#cfn-mediaconnect-flow-mediastreamsourceconfiguration-inputconfigurations
         */
        readonly inputConfigurations?: Array<CfnFlow.InputConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A name that helps you distinguish one media stream from another.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastreamsourceconfiguration.html#cfn-mediaconnect-flow-mediastreamsourceconfiguration-mediastreamname
         */
        readonly mediaStreamName: string;
    }
    /**
     * The transport parameters associated with an incoming media stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-inputconfiguration.html
     */
    interface InputConfigurationProperty {
        /**
         * The port that the flow listens on for an incoming media stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-inputconfiguration.html#cfn-mediaconnect-flow-inputconfiguration-inputport
         */
        readonly inputPort: number;
        /**
         * The VPC interface where the media stream comes in from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-inputconfiguration.html#cfn-mediaconnect-flow-inputconfiguration-interface
         */
        readonly interface: CfnFlow.InterfaceProperty | cdk.IResolvable;
    }
    /**
     * The VPC interface that you want to use for the media stream associated with the output.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-interface.html
     */
    interface InterfaceProperty {
        /**
         * The name of the VPC interface that you want to use for the media stream associated with the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-interface.html#cfn-mediaconnect-flow-interface-name
         */
        readonly name: string;
    }
    /**
     * The details of a VPC interface.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterface.html
     */
    interface VpcInterfaceProperty {
        /**
         * The name for the VPC interface.
         *
         * This name must be unique within the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterface.html#cfn-mediaconnect-flow-vpcinterface-name
         */
        readonly name: string;
        /**
         * The IDs of the network interfaces that MediaConnect created in your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterface.html#cfn-mediaconnect-flow-vpcinterface-networkinterfaceids
         */
        readonly networkInterfaceIds?: Array<string>;
        /**
         * The type of network interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterface.html#cfn-mediaconnect-flow-vpcinterface-networkinterfacetype
         */
        readonly networkInterfaceType?: string;
        /**
         * The ARN of the IAM role that you created when you set up MediaConnect as a trusted service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterface.html#cfn-mediaconnect-flow-vpcinterface-rolearn
         */
        readonly roleArn: string;
        /**
         * A virtual firewall to control inbound and outbound traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterface.html#cfn-mediaconnect-flow-vpcinterface-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The subnet IDs that you specified for your VPC interface.
         *
         * A subnet ID is a range of IP addresses in your VPC. When you create your VPC, you specify a range of IPv4 addresses for the VPC in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. This is the primary CIDR block for your VPC. When you create a subnet for your VPC, you specify the CIDR block for the subnet, which is a subset of the VPC CIDR block.
         *
         * The subnets that you use across all VPC interfaces on the flow must be in the same Availability Zone as the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterface.html#cfn-mediaconnect-flow-vpcinterface-subnetid
         */
        readonly subnetId: string;
    }
    /**
     * A single track or stream of media that contains video, audio, or ancillary data.
     *
     * After you add a media stream to a flow, you can associate it with sources and outputs on that flow, as long as they use the CDI protocol or the ST 2110 JPEG XS protocol. Each source or output can consist of one or many media streams.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastream.html
     */
    interface MediaStreamProperty {
        /**
         * Attributes that are related to the media stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastream.html#cfn-mediaconnect-flow-mediastream-attributes
         */
        readonly attributes?: cdk.IResolvable | CfnFlow.MediaStreamAttributesProperty;
        /**
         * The sample rate for the stream.
         *
         * This value in measured in kHz.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastream.html#cfn-mediaconnect-flow-mediastream-clockrate
         */
        readonly clockRate?: number;
        /**
         * A description that can help you quickly identify what your media stream is used for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastream.html#cfn-mediaconnect-flow-mediastream-description
         */
        readonly description?: string;
        /**
         * The format type number (sometimes referred to as RTP payload type) of the media stream.
         *
         * MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastream.html#cfn-mediaconnect-flow-mediastream-fmt
         */
        readonly fmt?: number;
        /**
         * A unique identifier for the media stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastream.html#cfn-mediaconnect-flow-mediastream-mediastreamid
         */
        readonly mediaStreamId: number;
        /**
         * A name that helps you distinguish one media stream from another.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastream.html#cfn-mediaconnect-flow-mediastream-mediastreamname
         */
        readonly mediaStreamName: string;
        /**
         * The type of media stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastream.html#cfn-mediaconnect-flow-mediastream-mediastreamtype
         */
        readonly mediaStreamType: string;
        /**
         * The resolution of the video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastream.html#cfn-mediaconnect-flow-mediastream-videoformat
         */
        readonly videoFormat?: string;
    }
    /**
     * Attributes that are related to the media stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastreamattributes.html
     */
    interface MediaStreamAttributesProperty {
        /**
         * A set of parameters that define the media stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastreamattributes.html#cfn-mediaconnect-flow-mediastreamattributes-fmtp
         */
        readonly fmtp?: CfnFlow.FmtpProperty | cdk.IResolvable;
        /**
         * The audio language, in a format that is recognized by the receiver.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastreamattributes.html#cfn-mediaconnect-flow-mediastreamattributes-lang
         */
        readonly lang?: string;
    }
    /**
     * A set of parameters that define the media stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-fmtp.html
     */
    interface FmtpProperty {
        /**
         * The format of the audio channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-fmtp.html#cfn-mediaconnect-flow-fmtp-channelorder
         */
        readonly channelOrder?: string;
        /**
         * The format used for the representation of color.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-fmtp.html#cfn-mediaconnect-flow-fmtp-colorimetry
         */
        readonly colorimetry?: string;
        /**
         * The frame rate for the video stream, in frames/second.
         *
         * For example: 60000/1001.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-fmtp.html#cfn-mediaconnect-flow-fmtp-exactframerate
         */
        readonly exactFramerate?: string;
        /**
         * The pixel aspect ratio (PAR) of the video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-fmtp.html#cfn-mediaconnect-flow-fmtp-par
         */
        readonly par?: string;
        /**
         * The encoding range of the video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-fmtp.html#cfn-mediaconnect-flow-fmtp-range
         */
        readonly range?: string;
        /**
         * The type of compression that was used to smooth the video’s appearance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-fmtp.html#cfn-mediaconnect-flow-fmtp-scanmode
         */
        readonly scanMode?: string;
        /**
         * The transfer characteristic system (TCS) that is used in the video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-fmtp.html#cfn-mediaconnect-flow-fmtp-tcs
         */
        readonly tcs?: string;
    }
    /**
     * The maintenance setting of a flow.
     *
     * MediaConnect routinely performs maintenance on underlying systems for security, reliability, and operational performance. The maintenance activities include actions such as patching the operating system, updating drivers, or installing software and patches.
     *
     * You can select the day and time that maintenance events occur. This is called a maintenance window and is used every time a maintenance event is required. To change the day and time, you can edit the maintenance window using `MaintenanceDay` and `MaintenanceStartHour` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-maintenance.html
     */
    interface MaintenanceProperty {
        /**
         * A day of a week when the maintenance will happen.
         *
         * Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-maintenance.html#cfn-mediaconnect-flow-maintenance-maintenanceday
         */
        readonly maintenanceDay: string;
        /**
         * UTC time when the maintenance will happen.
         *
         * Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-maintenance.html#cfn-mediaconnect-flow-maintenance-maintenancestarthour
         */
        readonly maintenanceStartHour: string;
    }
}
/**
 * Properties for defining a `CfnFlow`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html
 */
export interface CfnFlowProps {
    /**
     * The Availability Zone that you want to create the flow in.
     *
     * These options are limited to the Availability Zones within the current AWS Region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * The maintenance settings you want to use for the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-maintenance
     */
    readonly maintenance?: cdk.IResolvable | CfnFlow.MaintenanceProperty;
    /**
     * The media streams associated with the flow.
     *
     * You can associate any of these media streams with sources and outputs on the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastreams
     */
    readonly mediaStreams?: Array<cdk.IResolvable | CfnFlow.MediaStreamProperty> | cdk.IResolvable;
    /**
     * The name of the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-name
     */
    readonly name: string;
    /**
     * The settings for the source that you want to use for the new flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source
     */
    readonly source: cdk.IResolvable | CfnFlow.SourceProperty;
    /**
     * The settings for source failover.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-sourcefailoverconfig
     */
    readonly sourceFailoverConfig?: CfnFlow.FailoverConfigProperty | cdk.IResolvable;
    /**
     * The VPC interfaces that you added to this flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-vpcinterfaces
     */
    readonly vpcInterfaces?: Array<cdk.IResolvable | CfnFlow.VpcInterfaceProperty> | cdk.IResolvable;
}
/**
 * The AWS::MediaConnect::FlowEntitlement resource defines the permission that an AWS account grants to another AWS account to allow access to the content in a specific AWS Elemental MediaConnect flow.
 *
 * The content originator grants an entitlement to a specific AWS account (the subscriber). When an entitlement is granted, the subscriber can create a flow using the originator's flow as the source. Each flow can have up to 50 entitlements.
 *
 * @cloudformationResource AWS::MediaConnect::FlowEntitlement
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html
 */
export declare class CfnFlowEntitlement extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFlowEntitlement from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFlowEntitlement;
    /**
     * The entitlement ARN.
     *
     * @cloudformationAttribute EntitlementArn
     */
    readonly attrEntitlementArn: string;
    /**
     * The percentage of the entitlement data transfer fee that you want the subscriber to be responsible for.
     */
    dataTransferSubscriberFeePercent?: number;
    /**
     * A description of the entitlement.
     */
    description: string;
    /**
     * The type of encryption that MediaConnect will use on the output that is associated with the entitlement.
     */
    encryption?: CfnFlowEntitlement.EncryptionProperty | cdk.IResolvable;
    /**
     * An indication of whether the new entitlement should be enabled or disabled as soon as it is created.
     */
    entitlementStatus?: string;
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    flowArn: string;
    /**
     * The name of the entitlement.
     */
    name: string;
    /**
     * The AWS account IDs that you want to share your content with.
     */
    subscribers: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFlowEntitlementProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFlowEntitlement {
    /**
     * Information about the encryption of the flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html
     */
    interface EncryptionProperty {
        /**
         * The type of algorithm that is used for static key encryption (such as aes128, aes192, or aes256).
         *
         * If you are using SPEKE or SRT-password encryption, this property must be left blank.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html#cfn-mediaconnect-flowentitlement-encryption-algorithm
         */
        readonly algorithm: string;
        /**
         * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.
         *
         * This parameter is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html#cfn-mediaconnect-flowentitlement-encryption-constantinitializationvector
         */
        readonly constantInitializationVector?: string;
        /**
         * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.
         *
         * This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html#cfn-mediaconnect-flowentitlement-encryption-deviceid
         */
        readonly deviceId?: string;
        /**
         * The type of key that is used for the encryption.
         *
         * If you don't specify a `keyType` value, the service uses the default setting ( `static-key` ). Valid key types are: `static-key` , `speke` , and `srt-password` .
         *
         * @default - "static-key"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html#cfn-mediaconnect-flowentitlement-encryption-keytype
         */
        readonly keyType?: string;
        /**
         * The AWS Region that the API Gateway proxy endpoint was created in.
         *
         * This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html#cfn-mediaconnect-flowentitlement-encryption-region
         */
        readonly region?: string;
        /**
         * An identifier for the content.
         *
         * The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html#cfn-mediaconnect-flowentitlement-encryption-resourceid
         */
        readonly resourceId?: string;
        /**
         * The Amazon Resource Name (ARN) of the role that you created during setup (when you set up MediaConnect as a trusted entity).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html#cfn-mediaconnect-flowentitlement-encryption-rolearn
         */
        readonly roleArn: string;
        /**
         * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html#cfn-mediaconnect-flowentitlement-encryption-secretarn
         */
        readonly secretArn?: string;
        /**
         * The URL from the API Gateway proxy that you set up to talk to your key server.
         *
         * This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html#cfn-mediaconnect-flowentitlement-encryption-url
         */
        readonly url?: string;
    }
}
/**
 * Properties for defining a `CfnFlowEntitlement`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html
 */
export interface CfnFlowEntitlementProps {
    /**
     * The percentage of the entitlement data transfer fee that you want the subscriber to be responsible for.
     *
     * @default - 0
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html#cfn-mediaconnect-flowentitlement-datatransfersubscriberfeepercent
     */
    readonly dataTransferSubscriberFeePercent?: number;
    /**
     * A description of the entitlement.
     *
     * This description appears only on the MediaConnect console and is not visible outside of the current AWS account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html#cfn-mediaconnect-flowentitlement-description
     */
    readonly description: string;
    /**
     * The type of encryption that MediaConnect will use on the output that is associated with the entitlement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html#cfn-mediaconnect-flowentitlement-encryption
     */
    readonly encryption?: CfnFlowEntitlement.EncryptionProperty | cdk.IResolvable;
    /**
     * An indication of whether the new entitlement should be enabled or disabled as soon as it is created.
     *
     * If you don’t specify the entitlementStatus field in your request, MediaConnect sets it to ENABLED.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html#cfn-mediaconnect-flowentitlement-entitlementstatus
     */
    readonly entitlementStatus?: string;
    /**
     * The Amazon Resource Name (ARN) of the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html#cfn-mediaconnect-flowentitlement-flowarn
     */
    readonly flowArn: string;
    /**
     * The name of the entitlement.
     *
     * This value must be unique within the current flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html#cfn-mediaconnect-flowentitlement-name
     */
    readonly name: string;
    /**
     * The AWS account IDs that you want to share your content with.
     *
     * The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html#cfn-mediaconnect-flowentitlement-subscribers
     */
    readonly subscribers: Array<string>;
}
/**
 * The AWS::MediaConnect::FlowOutput resource defines the destination address, protocol, and port that AWS Elemental MediaConnect sends the ingested video to.
 *
 * Each flow can have up to 50 outputs. An output can have the same protocol or a different protocol from the source. The following protocols are supported: RIST, RTP, RTP-FEC, SRT-listener, SRT-caller, Zixi pull, Zixi push, and Fujitsu-QoS. CDI and ST 2110 JPEG XS protocols are not currently supported by AWS CloudFormation.
 *
 * @cloudformationResource AWS::MediaConnect::FlowOutput
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html
 */
export declare class CfnFlowOutput extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFlowOutput from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFlowOutput;
    /**
     * The ARN of the output.
     *
     * @cloudformationAttribute OutputArn
     */
    readonly attrOutputArn: string;
    /**
     * The range of IP addresses that are allowed to initiate output requests to this flow.
     */
    cidrAllowList?: Array<string>;
    /**
     * A description of the output.
     */
    description?: string;
    /**
     * The IP address where you want to send the output.
     */
    destination?: string;
    /**
     * The encryption credentials that you want to use for the output.
     */
    encryption?: CfnFlowOutput.EncryptionProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the flow this output is attached to.
     */
    flowArn: string;
    /**
     * The maximum latency in milliseconds.
     */
    maxLatency?: number;
    /**
     * The definition for each media stream that is associated with the output.
     */
    mediaStreamOutputConfigurations?: Array<cdk.IResolvable | CfnFlowOutput.MediaStreamOutputConfigurationProperty> | cdk.IResolvable;
    /**
     * The minimum latency in milliseconds for SRT-based streams.
     */
    minLatency?: number;
    /**
     * The name of the output.
     */
    name?: string;
    /**
     * The port to use when MediaConnect distributes content to the output.
     */
    port?: number;
    /**
     * The protocol to use for the output.
     */
    protocol: string;
    /**
     * The identifier that is assigned to the Zixi receiver.
     */
    remoteId?: string;
    /**
     * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
     */
    smoothingLatency?: number;
    /**
     * The stream ID that you want to use for this transport.
     */
    streamId?: string;
    /**
     * The VPC interface that you want to send your output to.
     */
    vpcInterfaceAttachment?: cdk.IResolvable | CfnFlowOutput.VpcInterfaceAttachmentProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFlowOutputProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFlowOutput {
    /**
     * Information about the encryption of the flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encryption.html
     */
    interface EncryptionProperty {
        /**
         * The type of algorithm that is used for static key encryption (such as aes128, aes192, or aes256).
         *
         * If you are using SPEKE or SRT-password encryption, this property must be left blank.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encryption.html#cfn-mediaconnect-flowoutput-encryption-algorithm
         */
        readonly algorithm?: string;
        /**
         * The type of key that is used for the encryption.
         *
         * If you don't specify a `keyType` value, the service uses the default setting ( `static-key` ). Valid key types are: `static-key` , `speke` , and `srt-password` .
         *
         * @default - "static-key"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encryption.html#cfn-mediaconnect-flowoutput-encryption-keytype
         */
        readonly keyType?: string;
        /**
         * The Amazon Resource Name (ARN) of the role that you created during setup (when you set up MediaConnect as a trusted entity).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encryption.html#cfn-mediaconnect-flowoutput-encryption-rolearn
         */
        readonly roleArn: string;
        /**
         * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encryption.html#cfn-mediaconnect-flowoutput-encryption-secretarn
         */
        readonly secretArn: string;
    }
    /**
     * The VPC interface that you want to send your output to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-vpcinterfaceattachment.html
     */
    interface VpcInterfaceAttachmentProperty {
        /**
         * The name of the VPC interface that you want to send your output to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-vpcinterfaceattachment.html#cfn-mediaconnect-flowoutput-vpcinterfaceattachment-vpcinterfacename
         */
        readonly vpcInterfaceName?: string;
    }
    /**
     * The media stream that is associated with the output, and the parameters for that association.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-mediastreamoutputconfiguration.html
     */
    interface MediaStreamOutputConfigurationProperty {
        /**
         * The media streams that you want to associate with the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-mediastreamoutputconfiguration.html#cfn-mediaconnect-flowoutput-mediastreamoutputconfiguration-destinationconfigurations
         */
        readonly destinationConfigurations?: Array<CfnFlowOutput.DestinationConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The format that will be used to encode the data.
         *
         * For ancillary data streams, set the encoding name to `smpte291` .
         *
         * For audio streams, set the encoding name to `pcm` .
         *
         * For video streams on sources or outputs that use the CDI protocol, set the encoding name to `raw` .
         *
         * For video streams on sources or outputs that use the ST 2110 JPEG XS protocol, set the encoding name to `jxsv` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-mediastreamoutputconfiguration.html#cfn-mediaconnect-flowoutput-mediastreamoutputconfiguration-encodingname
         */
        readonly encodingName: string;
        /**
         * A collection of parameters that determine how MediaConnect will convert the content.
         *
         * These fields only apply to outputs on flows that have a CDI source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-mediastreamoutputconfiguration.html#cfn-mediaconnect-flowoutput-mediastreamoutputconfiguration-encodingparameters
         */
        readonly encodingParameters?: CfnFlowOutput.EncodingParametersProperty | cdk.IResolvable;
        /**
         * A name that helps you distinguish one media stream from another.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-mediastreamoutputconfiguration.html#cfn-mediaconnect-flowoutput-mediastreamoutputconfiguration-mediastreamname
         */
        readonly mediaStreamName: string;
    }
    /**
     * The definition of a media stream that is associated with the output.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-destinationconfiguration.html
     */
    interface DestinationConfigurationProperty {
        /**
         * The IP address where contents of the media stream will be sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-destinationconfiguration.html#cfn-mediaconnect-flowoutput-destinationconfiguration-destinationip
         */
        readonly destinationIp: string;
        /**
         * The port to use when the content of the media stream is distributed to the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-destinationconfiguration.html#cfn-mediaconnect-flowoutput-destinationconfiguration-destinationport
         */
        readonly destinationPort: number;
        /**
         * The VPC interface that is used for the media stream associated with the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-destinationconfiguration.html#cfn-mediaconnect-flowoutput-destinationconfiguration-interface
         */
        readonly interface: CfnFlowOutput.InterfaceProperty | cdk.IResolvable;
    }
    /**
     * The VPC interface that you want to use for the media stream associated with the output.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-interface.html
     */
    interface InterfaceProperty {
        /**
         * The name of the VPC interface that you want to use for the media stream associated with the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-interface.html#cfn-mediaconnect-flowoutput-interface-name
         */
        readonly name: string;
    }
    /**
     * A collection of parameters that determine how MediaConnect will convert the content.
     *
     * These fields only apply to outputs on flows that have a CDI source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encodingparameters.html
     */
    interface EncodingParametersProperty {
        /**
         * A value that is used to calculate compression for an output.
         *
         * The bitrate of the output is calculated as follows:
         *
         * Output bitrate = (1 / compressionFactor) * (source bitrate)
         *
         * This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are in the range of 3.0 to 10.0, inclusive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encodingparameters.html#cfn-mediaconnect-flowoutput-encodingparameters-compressionfactor
         */
        readonly compressionFactor: number;
        /**
         * A setting on the encoder that drives compression settings.
         *
         * This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encodingparameters.html#cfn-mediaconnect-flowoutput-encodingparameters-encoderprofile
         */
        readonly encoderProfile?: string;
    }
}
/**
 * Properties for defining a `CfnFlowOutput`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html
 */
export interface CfnFlowOutputProps {
    /**
     * The range of IP addresses that are allowed to initiate output requests to this flow.
     *
     * Format the IP addresses as a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-cidrallowlist
     */
    readonly cidrAllowList?: Array<string>;
    /**
     * A description of the output.
     *
     * This description is not visible outside of the current AWS account even if the account grants entitlements to other accounts.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-description
     */
    readonly description?: string;
    /**
     * The IP address where you want to send the output.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-destination
     */
    readonly destination?: string;
    /**
     * The encryption credentials that you want to use for the output.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-encryption
     */
    readonly encryption?: CfnFlowOutput.EncryptionProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the flow this output is attached to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-flowarn
     */
    readonly flowArn: string;
    /**
     * The maximum latency in milliseconds.
     *
     * This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-maxlatency
     */
    readonly maxLatency?: number;
    /**
     * The definition for each media stream that is associated with the output.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-mediastreamoutputconfigurations
     */
    readonly mediaStreamOutputConfigurations?: Array<cdk.IResolvable | CfnFlowOutput.MediaStreamOutputConfigurationProperty> | cdk.IResolvable;
    /**
     * The minimum latency in milliseconds for SRT-based streams.
     *
     * In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-minlatency
     */
    readonly minLatency?: number;
    /**
     * The name of the output.
     *
     * This value must be unique within the current flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-name
     */
    readonly name?: string;
    /**
     * The port to use when MediaConnect distributes content to the output.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-port
     */
    readonly port?: number;
    /**
     * The protocol to use for the output.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-protocol
     */
    readonly protocol: string;
    /**
     * The identifier that is assigned to the Zixi receiver.
     *
     * This parameter applies only to outputs that use Zixi pull.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-remoteid
     */
    readonly remoteId?: string;
    /**
     * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-smoothinglatency
     */
    readonly smoothingLatency?: number;
    /**
     * The stream ID that you want to use for this transport.
     *
     * This parameter applies only to Zixi and SRT caller-based streams.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-streamid
     */
    readonly streamId?: string;
    /**
     * The VPC interface that you want to send your output to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#cfn-mediaconnect-flowoutput-vpcinterfaceattachment
     */
    readonly vpcInterfaceAttachment?: cdk.IResolvable | CfnFlowOutput.VpcInterfaceAttachmentProperty;
}
/**
 * The AWS::MediaConnect::FlowSource resource is used to add additional sources to an existing flow.
 *
 * Adding an additional source requires Failover to be enabled. When you enable Failover, the additional source must use the same protocol as the existing source. A source is the external video content that includes configuration information (encryption and source type) and a network address. Each flow has at least one source. A standard source comes from a source other than another AWS Elemental MediaConnect flow, such as an on-premises encoder.
 *
 * @cloudformationResource AWS::MediaConnect::FlowSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html
 */
export declare class CfnFlowSource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFlowSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFlowSource;
    /**
     * The IP address that the flow listens on for incoming content.
     *
     * @cloudformationAttribute IngestIp
     */
    readonly attrIngestIp: string;
    /**
     * The ARN of the source.
     *
     * @cloudformationAttribute SourceArn
     */
    readonly attrSourceArn: string;
    /**
     * The port that the flow listens on for incoming content. If the protocol of the source is Zixi, the port must be set to 2088.
     *
     * @cloudformationAttribute SourceIngestPort
     */
    readonly attrSourceIngestPort: string;
    /**
     * The type of encryption that is used on the content ingested from the source.
     */
    decryption?: CfnFlowSource.EncryptionProperty | cdk.IResolvable;
    /**
     * A description of the source.
     */
    description: string;
    /**
     * The ARN of the entitlement that allows you to subscribe to the flow.
     */
    entitlementArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the flow this source is connected to.
     */
    flowArn?: string;
    /**
     * The source configuration for cloud flows receiving a stream from a bridge.
     */
    gatewayBridgeSource?: CfnFlowSource.GatewayBridgeSourceProperty | cdk.IResolvable;
    /**
     * The port that the flow listens on for incoming content.
     */
    ingestPort?: number;
    /**
     * The maximum bitrate for RIST, RTP, and RTP-FEC streams.
     */
    maxBitrate?: number;
    /**
     * The maximum latency in milliseconds.
     */
    maxLatency?: number;
    /**
     * The minimum latency in milliseconds for SRT-based streams.
     */
    minLatency?: number;
    /**
     * The name of the source.
     */
    name: string;
    /**
     * The protocol that the source uses to deliver the content to MediaConnect.
     */
    protocol?: string;
    /**
     * The port that the flow uses to send outbound requests to initiate connection with the sender.
     */
    senderControlPort?: number;
    /**
     * The IP address that the flow communicates with to initiate connection with the sender.
     */
    senderIpAddress?: string;
    /**
     * Source IP or domain name for SRT-caller protocol.
     */
    sourceListenerAddress?: string;
    /**
     * Source port for SRT-caller protocol.
     */
    sourceListenerPort?: number;
    /**
     * The stream ID that you want to use for this transport.
     */
    streamId?: string;
    /**
     * The name of the VPC interface that you want to send your output to.
     */
    vpcInterfaceName?: string;
    /**
     * The range of IP addresses that are allowed to contribute content to your source.
     */
    whitelistCidr?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFlowSourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFlowSource {
    /**
     * Information about the encryption of the flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html
     */
    interface EncryptionProperty {
        /**
         * The type of algorithm that is used for static key encryption (such as aes128, aes192, or aes256).
         *
         * If you are using SPEKE or SRT-password encryption, this property must be left blank.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html#cfn-mediaconnect-flowsource-encryption-algorithm
         */
        readonly algorithm?: string;
        /**
         * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.
         *
         * This parameter is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html#cfn-mediaconnect-flowsource-encryption-constantinitializationvector
         */
        readonly constantInitializationVector?: string;
        /**
         * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.
         *
         * This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html#cfn-mediaconnect-flowsource-encryption-deviceid
         */
        readonly deviceId?: string;
        /**
         * The type of key that is used for the encryption.
         *
         * If you don't specify a `keyType` value, the service uses the default setting ( `static-key` ). Valid key types are: `static-key` , `speke` , and `srt-password` .
         *
         * @default - "static-key"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html#cfn-mediaconnect-flowsource-encryption-keytype
         */
        readonly keyType?: string;
        /**
         * The AWS Region that the API Gateway proxy endpoint was created in.
         *
         * This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html#cfn-mediaconnect-flowsource-encryption-region
         */
        readonly region?: string;
        /**
         * An identifier for the content.
         *
         * The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html#cfn-mediaconnect-flowsource-encryption-resourceid
         */
        readonly resourceId?: string;
        /**
         * The Amazon Resource Name (ARN) of the role that you created during setup (when you set up MediaConnect as a trusted entity).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html#cfn-mediaconnect-flowsource-encryption-rolearn
         */
        readonly roleArn: string;
        /**
         * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html#cfn-mediaconnect-flowsource-encryption-secretarn
         */
        readonly secretArn?: string;
        /**
         * The URL from the API Gateway proxy that you set up to talk to your key server.
         *
         * This parameter is required for SPEKE encryption and is not valid for static key encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html#cfn-mediaconnect-flowsource-encryption-url
         */
        readonly url?: string;
    }
    /**
     * The source configuration for cloud flows receiving a stream from a bridge.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-gatewaybridgesource.html
     */
    interface GatewayBridgeSourceProperty {
        /**
         * The ARN of the bridge feeding this flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-gatewaybridgesource.html#cfn-mediaconnect-flowsource-gatewaybridgesource-bridgearn
         */
        readonly bridgeArn: string;
        /**
         * The name of the VPC interface attachment to use for this bridge source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-gatewaybridgesource.html#cfn-mediaconnect-flowsource-gatewaybridgesource-vpcinterfaceattachment
         */
        readonly vpcInterfaceAttachment?: cdk.IResolvable | CfnFlowSource.VpcInterfaceAttachmentProperty;
    }
    /**
     * The VPC interface that you want to send your output to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-vpcinterfaceattachment.html
     */
    interface VpcInterfaceAttachmentProperty {
        /**
         * The name of the VPC interface that you want to send your output to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-vpcinterfaceattachment.html#cfn-mediaconnect-flowsource-vpcinterfaceattachment-vpcinterfacename
         */
        readonly vpcInterfaceName?: string;
    }
}
/**
 * Properties for defining a `CfnFlowSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html
 */
export interface CfnFlowSourceProps {
    /**
     * The type of encryption that is used on the content ingested from the source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-decryption
     */
    readonly decryption?: CfnFlowSource.EncryptionProperty | cdk.IResolvable;
    /**
     * A description of the source.
     *
     * This description is not visible outside of the current AWS account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-description
     */
    readonly description: string;
    /**
     * The ARN of the entitlement that allows you to subscribe to the flow.
     *
     * The entitlement is set by the content originator, and the ARN is generated as part of the originator's flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-entitlementarn
     */
    readonly entitlementArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the flow this source is connected to.
     *
     * The flow must have Failover enabled to add an additional source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-flowarn
     */
    readonly flowArn?: string;
    /**
     * The source configuration for cloud flows receiving a stream from a bridge.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-gatewaybridgesource
     */
    readonly gatewayBridgeSource?: CfnFlowSource.GatewayBridgeSourceProperty | cdk.IResolvable;
    /**
     * The port that the flow listens on for incoming content.
     *
     * If the protocol of the source is Zixi, the port must be set to 2088.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-ingestport
     */
    readonly ingestPort?: number;
    /**
     * The maximum bitrate for RIST, RTP, and RTP-FEC streams.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-maxbitrate
     */
    readonly maxBitrate?: number;
    /**
     * The maximum latency in milliseconds.
     *
     * This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
     *
     * @default - 2000
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-maxlatency
     */
    readonly maxLatency?: number;
    /**
     * The minimum latency in milliseconds for SRT-based streams.
     *
     * In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
     *
     * @default - 2000
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-minlatency
     */
    readonly minLatency?: number;
    /**
     * The name of the source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-name
     */
    readonly name: string;
    /**
     * The protocol that the source uses to deliver the content to MediaConnect.
     *
     * Adding additional sources to an existing flow requires Failover to be enabled. When you enable Failover, the additional source must use the same protocol as the existing source. Only the following protocols support failover: Zixi-push, RTP-FEC, RTP, RIST and SRT protocols.
     *
     * If you use failover with SRT caller or listener, the `FailoverMode` property must be set to `FAILOVER` . The `FailoverMode` property is found in the `FailoverConfig` resource of the same flow ARN you used for the source's `FlowArn` property. SRT caller/listener does not support merge mode failover.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-protocol
     */
    readonly protocol?: string;
    /**
     * The port that the flow uses to send outbound requests to initiate connection with the sender.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-sendercontrolport
     */
    readonly senderControlPort?: number;
    /**
     * The IP address that the flow communicates with to initiate connection with the sender.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-senderipaddress
     */
    readonly senderIpAddress?: string;
    /**
     * Source IP or domain name for SRT-caller protocol.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-sourcelisteneraddress
     */
    readonly sourceListenerAddress?: string;
    /**
     * Source port for SRT-caller protocol.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-sourcelistenerport
     */
    readonly sourceListenerPort?: number;
    /**
     * The stream ID that you want to use for this transport.
     *
     * This parameter applies only to Zixi and SRT caller-based streams.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-streamid
     */
    readonly streamId?: string;
    /**
     * The name of the VPC interface that you want to send your output to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-vpcinterfacename
     */
    readonly vpcInterfaceName?: string;
    /**
     * The range of IP addresses that are allowed to contribute content to your source.
     *
     * Format the IP addresses as a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#cfn-mediaconnect-flowsource-whitelistcidr
     */
    readonly whitelistCidr?: string;
}
/**
 * The AWS::MediaConnect::FlowVpcInterface resource is a connection between your AWS Elemental MediaConnect flow and a virtual private cloud (VPC) that you created using the Amazon Virtual Private Cloud service.
 *
 * To avoid streaming your content over the public internet, you can add up to two VPC interfaces to your flow and use those connections to transfer content between your VPC and MediaConnect.
 *
 * You can update an existing flow to add a VPC interface. If you haven’t created the flow yet, you must create the flow with a temporary standard source by doing the following:
 *
 * - Use CloudFormation to create a flow with a standard source that uses to the flow’s public IP address.
 * - Use CloudFormation to create a VPC interface to add to this flow. This can also be done as part of the previous step.
 * - After CloudFormation has created the flow and the VPC interface, update the source to point to the VPC interface that you created.
 *
 * > The previous steps must be undone before the CloudFormation stack can be deleted. Because the source is manually updated in step 3, CloudFormation is not aware of this change. The source must be returned to a standard source before CloudFormation stack deletion.
 *
 * @cloudformationResource AWS::MediaConnect::FlowVpcInterface
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html
 */
export declare class CfnFlowVpcInterface extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFlowVpcInterface from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFlowVpcInterface;
    /**
     * The IDs of the network interfaces that MediaConnect created in your account.
     *
     * @cloudformationAttribute NetworkInterfaceIds
     */
    readonly attrNetworkInterfaceIds: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    flowArn: string;
    /**
     * The name of the VPC Interface.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the role that you created when you set up MediaConnect as a trusted service.
     */
    roleArn: string;
    /**
     * The VPC security groups that you want MediaConnect to use for your VPC configuration.
     */
    securityGroupIds: Array<string>;
    /**
     * The subnet IDs that you want to use for your VPC interface.
     */
    subnetId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFlowVpcInterfaceProps);
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
 * Properties for defining a `CfnFlowVpcInterface`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html
 */
export interface CfnFlowVpcInterfaceProps {
    /**
     * The Amazon Resource Name (ARN) of the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-flowarn
     */
    readonly flowArn: string;
    /**
     * The name of the VPC Interface.
     *
     * This value must be unique within the current flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of the role that you created when you set up MediaConnect as a trusted service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-rolearn
     */
    readonly roleArn: string;
    /**
     * The VPC security groups that you want MediaConnect to use for your VPC configuration.
     *
     * You must include at least one security group in the request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-securitygroupids
     */
    readonly securityGroupIds: Array<string>;
    /**
     * The subnet IDs that you want to use for your VPC interface.
     *
     * A range of IP addresses in your VPC. When you create your VPC, you specify a range of IPv4 addresses for the VPC in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. This is the primary CIDR block for your VPC. When you create a subnet for your VPC, you specify the CIDR block for the subnet, which is a subset of the VPC CIDR block.
     *
     * The subnets that you use across all VPC interfaces on the flow must be in the same Availability Zone as the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-subnetid
     */
    readonly subnetId: string;
}
/**
 * The AWS::MediaConnect::Gateway resource is used to create a new gateway.
 *
 * AWS Elemental MediaConnect Gateway is a feature of MediaConnect that allows the deployment of on-premises resources for transporting live video to and from the AWS Cloud. MediaConnect Gateway allows you to contribute live video to the AWS Cloud from on-premises hardware, as well as distribute live video from the AWS Cloud to your local data center.
 *
 * @cloudformationResource AWS::MediaConnect::Gateway
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html
 */
export declare class CfnGateway extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGateway from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGateway;
    /**
     * The Amazon Resource Name (ARN) of the gateway.
     *
     * @cloudformationAttribute GatewayArn
     */
    readonly attrGatewayArn: string;
    /**
     * The current state of the gateway. Possible values are: CREATING, ACTIVE, UPDATING, ERROR, DELETING, DELETED.
     *
     * @cloudformationAttribute GatewayState
     */
    readonly attrGatewayState: string;
    /**
     * The range of IP addresses that are allowed to contribute content or initiate output requests for flows communicating with this gateway.
     */
    egressCidrBlocks: Array<string>;
    /**
     * The name of the network.
     */
    name: string;
    /**
     * The list of networks that you want to add.
     */
    networks: Array<CfnGateway.GatewayNetworkProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGatewayProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGateway {
    /**
     * The network settings for a gateway.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-gateway-gatewaynetwork.html
     */
    interface GatewayNetworkProperty {
        /**
         * A unique IP address range to use for this network.
         *
         * These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-gateway-gatewaynetwork.html#cfn-mediaconnect-gateway-gatewaynetwork-cidrblock
         */
        readonly cidrBlock: string;
        /**
         * The name of the network.
         *
         * This name is used to reference the network and must be unique among networks in this gateway.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-gateway-gatewaynetwork.html#cfn-mediaconnect-gateway-gatewaynetwork-name
         */
        readonly name: string;
    }
}
/**
 * Properties for defining a `CfnGateway`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html
 */
export interface CfnGatewayProps {
    /**
     * The range of IP addresses that are allowed to contribute content or initiate output requests for flows communicating with this gateway.
     *
     * These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html#cfn-mediaconnect-gateway-egresscidrblocks
     */
    readonly egressCidrBlocks: Array<string>;
    /**
     * The name of the network.
     *
     * This name is used to reference the network and must be unique among networks in this gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html#cfn-mediaconnect-gateway-name
     */
    readonly name: string;
    /**
     * The list of networks that you want to add.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html#cfn-mediaconnect-gateway-networks
     */
    readonly networks: Array<CfnGateway.GatewayNetworkProperty | cdk.IResolvable> | cdk.IResolvable;
}
