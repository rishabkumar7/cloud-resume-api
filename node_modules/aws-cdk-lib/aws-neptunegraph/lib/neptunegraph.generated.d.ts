import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS ::NeptuneGraph::Graph` resource creates an  graph.
 *
 * is a memory-optimized graph database engine for analytics. For more information, see [](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html) .
 *
 * You can use `AWS ::NeptuneGraph::Graph.DeletionProtection` to help guard against unintended deletion of your graph.
 *
 * @cloudformationResource AWS::NeptuneGraph::Graph
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html
 */
export declare class CfnGraph extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGraph from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGraph;
    /**
     * The connection endpoint for the graph. For example: `g-12a3bcdef4.us-east-1.neptune-graph.amazonaws.com`
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * The ARN of the graph. For example: `arn:aws:neptune-graph:us-east-1:111122223333:graph/g-12a3bcdef4`
     *
     * @cloudformationAttribute GraphArn
     */
    readonly attrGraphArn: string;
    /**
     * The ID of the graph. For example: `g-12a3bcdef4`
     *
     * @cloudformationAttribute GraphId
     */
    readonly attrGraphId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A value that indicates whether the graph has deletion protection enabled.
     */
    deletionProtection?: boolean | cdk.IResolvable;
    /**
     * The graph name. For example: `my-graph-1` .
     */
    graphName?: string;
    /**
     * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.
     */
    provisionedMemory: number;
    /**
     * Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated.
     */
    publicConnectivity?: boolean | cdk.IResolvable;
    /**
     * The number of replicas in other AZs.
     */
    replicaCount?: number;
    /**
     * Adds metadata tags to the new graph.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Specifies the number of dimensions for vector embeddings that will be loaded into the graph.
     */
    vectorSearchConfiguration?: cdk.IResolvable | CfnGraph.VectorSearchConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGraphProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGraph {
    /**
     * The vector-search configuration for the graph, which specifies the vector dimension to use in the vector index, if any.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptunegraph-graph-vectorsearchconfiguration.html
     */
    interface VectorSearchConfigurationProperty {
        /**
         * The number of dimensions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptunegraph-graph-vectorsearchconfiguration.html#cfn-neptunegraph-graph-vectorsearchconfiguration-vectorsearchdimension
         */
        readonly vectorSearchDimension: number;
    }
}
/**
 * Properties for defining a `CfnGraph`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html
 */
export interface CfnGraphProps {
    /**
     * A value that indicates whether the graph has deletion protection enabled.
     *
     * The graph can't be deleted when deletion protection is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-deletionprotection
     */
    readonly deletionProtection?: boolean | cdk.IResolvable;
    /**
     * The graph name. For example: `my-graph-1` .
     *
     * The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
     *
     * If you don't specify a graph name, a unique graph name is generated for you using the prefix `graph-for` , followed by a combination of `Stack Name` and a `UUID` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-graphname
     */
    readonly graphName?: string;
    /**
     * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.
     *
     * Min = 128
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-provisionedmemory
     */
    readonly provisionedMemory: number;
    /**
     * Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated.
     *
     * When the graph is publicly available, its domain name system (DNS) endpoint resolves to the public IP address from the internet. When the graph isn't publicly available, you need to create a `PrivateGraphEndpoint` in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.
     *
     * Default: If not specified, the default value is false.
     *
     * > If enabling public connectivity for the first time, there will be a delay while it is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-publicconnectivity
     */
    readonly publicConnectivity?: boolean | cdk.IResolvable;
    /**
     * The number of replicas in other AZs.
     *
     * Default: If not specified, the default value is 1.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-replicacount
     */
    readonly replicaCount?: number;
    /**
     * Adds metadata tags to the new graph.
     *
     * These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies the number of dimensions for vector embeddings that will be loaded into the graph.
     *
     * The value is specified as `dimension=` value. Max = 65,535
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-vectorsearchconfiguration
     */
    readonly vectorSearchConfiguration?: cdk.IResolvable | CfnGraph.VectorSearchConfigurationProperty;
}
/**
 * Create a private graph endpoint to allow private access from to the graph from within a VPC.
 *
 * You can attach security groups to the private graph endpoint.
 *
 * > VPC endpoint charges apply.
 *
 * @cloudformationResource AWS::NeptuneGraph::PrivateGraphEndpoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html
 */
export declare class CfnPrivateGraphEndpoint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPrivateGraphEndpoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPrivateGraphEndpoint;
    /**
     * PrivateGraphEndpoint resource identifier generated by concatenating the associated GraphIdentifier and VpcId with an underscore separator. For example, if GraphIdentifier is `g-12a3bcdef4` and VpcId is `vpc-111122223333aabbc` , the generated PrivateGraphEndpointIdentifier will be `g-12a3bcdef4_vpc-111122223333aabbc` .
     *
     * @cloudformationAttribute PrivateGraphEndpointIdentifier
     */
    readonly attrPrivateGraphEndpointIdentifier: string;
    /**
     * VPC endpoint that provides a private connection between the Graph and specified VPC. For example: `vpce-aabbaabbaabbaabba` .
     *
     * @cloudformationAttribute VpcEndpointId
     */
    readonly attrVpcEndpointId: string;
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphIdentifier: string;
    /**
     * Security groups to be attached to the private graph endpoint..
     */
    securityGroupIds?: Array<string>;
    /**
     * Subnets in which private graph endpoint ENIs are created.
     */
    subnetIds?: Array<string>;
    /**
     * The VPC in which the private graph endpoint needs to be created.
     */
    vpcId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPrivateGraphEndpointProps);
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
 * Properties for defining a `CfnPrivateGraphEndpoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html
 */
export interface CfnPrivateGraphEndpointProps {
    /**
     * The unique identifier of the Neptune Analytics graph.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html#cfn-neptunegraph-privategraphendpoint-graphidentifier
     */
    readonly graphIdentifier: string;
    /**
     * Security groups to be attached to the private graph endpoint..
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html#cfn-neptunegraph-privategraphendpoint-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * Subnets in which private graph endpoint ENIs are created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html#cfn-neptunegraph-privategraphendpoint-subnetids
     */
    readonly subnetIds?: Array<string>;
    /**
     * The VPC in which the private graph endpoint needs to be created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html#cfn-neptunegraph-privategraphendpoint-vpcid
     */
    readonly vpcId: string;
}
