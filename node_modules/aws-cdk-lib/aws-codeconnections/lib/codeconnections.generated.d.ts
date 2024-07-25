import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * A resource that is used to connect third-party source providers with services like CodePipeline.
 *
 * Note: A connection created through AWS CloudFormation , the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.
 *
 * @cloudformationResource AWS::CodeConnections::Connection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html
 */
export declare class CfnConnection extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnection;
    /**
     * The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection reference when the connection is shared between AWS services .
     *
     * > The ARN is never reused if the connection is deleted.
     *
     * @cloudformationAttribute ConnectionArn
     */
    readonly attrConnectionArn: string;
    /**
     * The current status of the connection.
     *
     * @cloudformationAttribute ConnectionStatus
     */
    readonly attrConnectionStatus: string;
    /**
     * The identifier of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.
     *
     * @cloudformationAttribute OwnerAccountId
     */
    readonly attrOwnerAccountId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the connection.
     */
    connectionName: string;
    /**
     * The Amazon Resource Name (ARN) of the host associated with the connection.
     */
    hostArn?: string;
    /**
     * The name of the external provider where your third-party code repository is configured.
     */
    providerType?: string;
    /**
     * Specifies the tags applied to a connection.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConnectionProps);
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
 * Properties for defining a `CfnConnection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html
 */
export interface CfnConnectionProps {
    /**
     * The name of the connection.
     *
     * Connection names must be unique in an AWS account .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#cfn-codeconnections-connection-connectionname
     */
    readonly connectionName: string;
    /**
     * The Amazon Resource Name (ARN) of the host associated with the connection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#cfn-codeconnections-connection-hostarn
     */
    readonly hostArn?: string;
    /**
     * The name of the external provider where your third-party code repository is configured.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#cfn-codeconnections-connection-providertype
     */
    readonly providerType?: string;
    /**
     * Specifies the tags applied to a connection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#cfn-codeconnections-connection-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
