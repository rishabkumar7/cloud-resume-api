import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::CodeStarConnections::Connection resource can be used to connect external source providers with services like AWS CodePipeline .
 *
 * *Note:* A connection created through AWS CloudFormation is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.
 *
 * @cloudformationResource AWS::CodeStarConnections::Connection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html
 */
export declare class CfnConnection extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
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
     * The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection reference when the connection is shared between AWS services. For example: `arn:aws:codestar-connections:us-west-2:123456789012:connection/39e4c34d-e13a-4e94-a886-ea67651bf042` .
     *
     * @cloudformationAttribute ConnectionArn
     */
    readonly attrConnectionArn: string;
    /**
     * The current status of the connection. For example: `PENDING` , `AVAILABLE` , or `ERROR` .
     *
     * @cloudformationAttribute ConnectionStatus
     */
    readonly attrConnectionStatus: string;
    /**
     * The AWS account ID of the owner of the connection. For Bitbucket, this is the account ID of the owner of the Bitbucket repository. For example: `123456789012` .
     *
     * @cloudformationAttribute OwnerAccountId
     */
    readonly attrOwnerAccountId: string;
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
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies the tags applied to the resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html
 */
export interface CfnConnectionProps {
    /**
     * The name of the connection.
     *
     * Connection names must be unique in an AWS account .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-connectionname
     */
    readonly connectionName: string;
    /**
     * The Amazon Resource Name (ARN) of the host associated with the connection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-hostarn
     */
    readonly hostArn?: string;
    /**
     * The name of the external provider where your third-party code repository is configured.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-providertype
     */
    readonly providerType?: string;
    /**
     * Specifies the tags applied to the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Information about the repository link resource, such as the repository link ARN, the associated connection ARN, encryption key ARN, and owner ID.
 *
 * @cloudformationResource AWS::CodeStarConnections::RepositoryLink
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html
 */
export declare class CfnRepositoryLink extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRepositoryLink from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRepositoryLink;
    /**
     * The name of the external provider where your third-party code repository is configured.
     *
     * @cloudformationAttribute ProviderType
     */
    readonly attrProviderType: string;
    /**
     * A unique Amazon Resource Name (ARN) to designate the repository link.
     *
     * @cloudformationAttribute RepositoryLinkArn
     */
    readonly attrRepositoryLinkArn: string;
    /**
     * A UUID that uniquely identifies the RepositoryLink.
     *
     * @cloudformationAttribute RepositoryLinkId
     */
    readonly attrRepositoryLinkId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the connection associated with the repository link.
     */
    connectionArn: string;
    /**
     * The Amazon Resource Name (ARN) of the encryption key for the repository associated with the repository link.
     */
    encryptionKeyArn?: string;
    /**
     * The owner ID for the repository associated with the repository link, such as the owner ID in GitHub.
     */
    ownerId: string;
    /**
     * The name of the repository associated with the repository link.
     */
    repositoryName: string;
    /**
     * The tags for the repository to be associated with the repository link.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRepositoryLinkProps);
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
 * Properties for defining a `CfnRepositoryLink`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html
 */
export interface CfnRepositoryLinkProps {
    /**
     * The Amazon Resource Name (ARN) of the connection associated with the repository link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-connectionarn
     */
    readonly connectionArn: string;
    /**
     * The Amazon Resource Name (ARN) of the encryption key for the repository associated with the repository link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-encryptionkeyarn
     */
    readonly encryptionKeyArn?: string;
    /**
     * The owner ID for the repository associated with the repository link, such as the owner ID in GitHub.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-ownerid
     */
    readonly ownerId: string;
    /**
     * The name of the repository associated with the repository link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-repositoryname
     */
    readonly repositoryName: string;
    /**
     * The tags for the repository to be associated with the repository link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Information, such as repository, branch, provider, and resource names for a specific sync configuration.
 *
 * @cloudformationResource AWS::CodeStarConnections::SyncConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html
 */
export declare class CfnSyncConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSyncConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSyncConfiguration;
    /**
     * The owner ID for the repository associated with a specific sync configuration, such as the owner ID in GitHub.
     *
     * @cloudformationAttribute OwnerId
     */
    readonly attrOwnerId: string;
    /**
     * The name of the external provider where your third-party code repository is configured.
     *
     * @cloudformationAttribute ProviderType
     */
    readonly attrProviderType: string;
    /**
     * The name of the repository that is being synced to.
     *
     * @cloudformationAttribute RepositoryName
     */
    readonly attrRepositoryName: string;
    /**
     * The branch associated with a specific sync configuration.
     */
    branch: string;
    /**
     * The file path to the configuration file associated with a specific sync configuration.
     */
    configFile: string;
    /**
     * Whether to enable or disable publishing of deployment status to source providers.
     */
    publishDeploymentStatus?: string;
    /**
     * The ID of the repository link associated with a specific sync configuration.
     */
    repositoryLinkId: string;
    /**
     * The name of the connection resource associated with a specific sync configuration.
     */
    resourceName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with a specific sync configuration.
     */
    roleArn: string;
    /**
     * The type of sync for a specific sync configuration.
     */
    syncType: string;
    /**
     * When to trigger Git sync to begin the stack update.
     */
    triggerResourceUpdateOn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSyncConfigurationProps);
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
 * Properties for defining a `CfnSyncConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html
 */
export interface CfnSyncConfigurationProps {
    /**
     * The branch associated with a specific sync configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-branch
     */
    readonly branch: string;
    /**
     * The file path to the configuration file associated with a specific sync configuration.
     *
     * The path should point to an actual file in the sync configurations linked repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-configfile
     */
    readonly configFile: string;
    /**
     * Whether to enable or disable publishing of deployment status to source providers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-publishdeploymentstatus
     */
    readonly publishDeploymentStatus?: string;
    /**
     * The ID of the repository link associated with a specific sync configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-repositorylinkid
     */
    readonly repositoryLinkId: string;
    /**
     * The name of the connection resource associated with a specific sync configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-resourcename
     */
    readonly resourceName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with a specific sync configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-rolearn
     */
    readonly roleArn: string;
    /**
     * The type of sync for a specific sync configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-synctype
     */
    readonly syncType: string;
    /**
     * When to trigger Git sync to begin the stack update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-triggerresourceupdateon
     */
    readonly triggerResourceUpdateOn?: string;
}
