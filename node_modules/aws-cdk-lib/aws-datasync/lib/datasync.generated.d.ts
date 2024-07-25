import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::DataSync::Agent` resource activates an AWS DataSync agent that you've deployed for storage discovery or data transfers.
 *
 * The activation process associates the agent with your AWS account .
 *
 * For more information, see the following topics in the *AWS DataSync User Guide* :
 *
 * - [DataSync agent requirements](https://docs.aws.amazon.com/datasync/latest/userguide/agent-requirements.html)
 * - [DataSync network requirements](https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html)
 * - [Create a DataSync agent](https://docs.aws.amazon.com/datasync/latest/userguide/configure-agent.html)
 *
 * @cloudformationResource AWS::DataSync::Agent
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html
 */
export declare class CfnAgent extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAgent from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAgent;
    /**
     * The Amazon Resource Name (ARN) of the agent. Use the `ListAgents` operation to return a list of agents for your account and AWS Region .
     *
     * @cloudformationAttribute AgentArn
     */
    readonly attrAgentArn: string;
    /**
     * The type of endpoint that your agent is connected to. If the endpoint is a VPC endpoint, the agent is not accessible over the public internet.
     *
     * @cloudformationAttribute EndpointType
     */
    readonly attrEndpointType: string;
    /**
     * Specifies your DataSync agent's activation key.
     */
    activationKey?: string;
    /**
     * Specifies a name for your agent.
     */
    agentName?: string;
    /**
     * The Amazon Resource Names (ARNs) of the security groups used to protect your data transfer task subnets.
     */
    securityGroupArns?: Array<string>;
    /**
     * Specifies the ARN of the subnet where your VPC service endpoint is located.
     */
    subnetArns?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ID of the virtual private cloud (VPC) endpoint that the agent has access to.
     */
    vpcEndpointId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnAgentProps);
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
 * Properties for defining a `CfnAgent`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html
 */
export interface CfnAgentProps {
    /**
     * Specifies your DataSync agent's activation key.
     *
     * If you don't have an activation key, see [Activating your agent](https://docs.aws.amazon.com/datasync/latest/userguide/activate-agent.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-activationkey
     */
    readonly activationKey?: string;
    /**
     * Specifies a name for your agent.
     *
     * We recommend specifying a name that you can remember.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-agentname
     */
    readonly agentName?: string;
    /**
     * The Amazon Resource Names (ARNs) of the security groups used to protect your data transfer task subnets.
     *
     * See [SecurityGroupArns](https://docs.aws.amazon.com/datasync/latest/userguide/API_Ec2Config.html#DataSync-Type-Ec2Config-SecurityGroupArns) .
     *
     * *Pattern* : `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\-0-9]*:[0-9]{12}:security-group/.*$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-securitygrouparns
     */
    readonly securityGroupArns?: Array<string>;
    /**
     * Specifies the ARN of the subnet where your VPC service endpoint is located.
     *
     * You can only specify one ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-subnetarns
     */
    readonly subnetArns?: Array<string>;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     *
     * We recommend creating at least one tag for your agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ID of the virtual private cloud (VPC) endpoint that the agent has access to.
     *
     * This is the client-side VPC endpoint, powered by AWS PrivateLink . If you don't have an AWS PrivateLink VPC endpoint, see [AWS PrivateLink and VPC endpoints](https://docs.aws.amazon.com//vpc/latest/userguide/endpoint-services-overview.html) in the *Amazon VPC User Guide* .
     *
     * For more information about activating your agent in a private network based on a VPC, see [Using AWS DataSync in a Virtual Private Cloud](https://docs.aws.amazon.com/datasync/latest/userguide/datasync-in-vpc.html) in the *AWS DataSync User Guide.*
     *
     * A VPC endpoint ID looks like this: `vpce-01234d5aff67890e1` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-vpcendpointid
     */
    readonly vpcEndpointId?: string;
}
/**
 * Creates a transfer *location* for a Microsoft Azure Blob Storage container.
 *
 * AWS DataSync can use this location as a transfer source or destination.
 *
 * Before you begin, make sure you know [how DataSync accesses Azure Blob Storage](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access) and works with [access tiers](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access-tiers) and [blob types](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#blob-types) . You also need a [DataSync agent](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-creating-agent) that can connect to your container.
 *
 * @cloudformationResource AWS::DataSync::LocationAzureBlob
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html
 */
export declare class CfnLocationAzureBlob extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationAzureBlob from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationAzureBlob;
    /**
     * The ARN of the Azure Blob Storage transfer location that you created.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the Azure Blob Storage transfer location that you created.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container.
     */
    agentArns: Array<string>;
    /**
     * Specifies the access tier that you want your objects or files transferred into.
     */
    azureAccessTier?: string;
    /**
     * Specifies the authentication method DataSync uses to access your Azure Blob Storage.
     */
    azureBlobAuthenticationType: string;
    /**
     * Specifies the URL of the Azure Blob Storage container involved in your transfer.
     */
    azureBlobContainerUrl?: string;
    /**
     * Specifies the SAS configuration that allows DataSync to access your Azure Blob Storage.
     */
    azureBlobSasConfiguration?: CfnLocationAzureBlob.AzureBlobSasConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies the type of blob that you want your objects or files to be when transferring them into Azure Blob Storage.
     */
    azureBlobType?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Specifies path segments if you want to limit your transfer to a virtual directory in your container (for example, `/my/images` ).
     */
    subdirectory?: string;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationAzureBlobProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLocationAzureBlob {
    /**
     * The shared access signature (SAS) configuration that allows AWS DataSync to access your Microsoft Azure Blob Storage.
     *
     * For more information, see [SAS tokens](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-sas-tokens) for accessing your Azure Blob Storage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationazureblob-azureblobsasconfiguration.html
     */
    interface AzureBlobSasConfigurationProperty {
        /**
         * Specifies a SAS token that provides permissions to access your Azure Blob Storage.
         *
         * The token is part of the SAS URI string that comes after the storage resource URI and a question mark. A token looks something like this:
         *
         * `sp=r&st=2023-12-20T14:54:52Z&se=2023-12-20T22:54:52Z&spr=https&sv=2021-06-08&sr=c&sig=aBBKDWQvyuVcTPH9EBp%2FXTI9E%2F%2Fmq171%2BZU178wcwqU%3D`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationazureblob-azureblobsasconfiguration.html#cfn-datasync-locationazureblob-azureblobsasconfiguration-azureblobsastoken
         */
        readonly azureBlobSasToken: string;
    }
}
/**
 * Properties for defining a `CfnLocationAzureBlob`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html
 */
export interface CfnLocationAzureBlobProps {
    /**
     * Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container.
     *
     * You can specify more than one agent. For more information, see [Using multiple agents for your transfer](https://docs.aws.amazon.com/datasync/latest/userguide/multiple-agents.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-agentarns
     */
    readonly agentArns: Array<string>;
    /**
     * Specifies the access tier that you want your objects or files transferred into.
     *
     * This only applies when using the location as a transfer destination. For more information, see [Access tiers](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access-tiers) .
     *
     * @default - "HOT"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureaccesstier
     */
    readonly azureAccessTier?: string;
    /**
     * Specifies the authentication method DataSync uses to access your Azure Blob Storage.
     *
     * DataSync can access blob storage using a shared access signature (SAS).
     *
     * @default - "SAS"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureblobauthenticationtype
     */
    readonly azureBlobAuthenticationType: string;
    /**
     * Specifies the URL of the Azure Blob Storage container involved in your transfer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureblobcontainerurl
     */
    readonly azureBlobContainerUrl?: string;
    /**
     * Specifies the SAS configuration that allows DataSync to access your Azure Blob Storage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureblobsasconfiguration
     */
    readonly azureBlobSasConfiguration?: CfnLocationAzureBlob.AzureBlobSasConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies the type of blob that you want your objects or files to be when transferring them into Azure Blob Storage.
     *
     * Currently, DataSync only supports moving data into Azure Blob Storage as block blobs. For more information on blob types, see the [Azure Blob Storage documentation](https://docs.aws.amazon.com/https://learn.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs) .
     *
     * @default - "BLOCK"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureblobtype
     */
    readonly azureBlobType?: string;
    /**
     * Specifies path segments if you want to limit your transfer to a virtual directory in your container (for example, `/my/images` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     *
     * We recommend creating at least a name tag for your transfer location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataSync::LocationEFS` resource creates an endpoint for an Amazon EFS file system.
 *
 * AWS DataSync can access this endpoint as a source or destination location.
 *
 * @cloudformationResource AWS::DataSync::LocationEFS
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html
 */
export declare class CfnLocationEFS extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationEFS from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationEFS;
    /**
     * The Amazon Resource Name (ARN) of the Amazon EFS file system.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the Amazon EFS file system.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to access the Amazon EFS file system.
     */
    accessPointArn?: string;
    /**
     * Specifies the subnet and security groups DataSync uses to access your Amazon EFS file system.
     */
    ec2Config: CfnLocationEFS.Ec2ConfigProperty | cdk.IResolvable;
    /**
     * Specifies the ARN for the Amazon EFS file system.
     */
    efsFilesystemArn?: string;
    /**
     * Specifies an AWS Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.
     */
    fileSystemAccessRoleArn?: string;
    /**
     * Specifies whether you want DataSync to use Transport Layer Security (TLS) 1.2 encryption when it copies data to or from the Amazon EFS file system.
     */
    inTransitEncryption?: string;
    /**
     * Specifies a mount path for your Amazon EFS file system.
     */
    subdirectory?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies the key-value pair that represents a tag that you want to add to the resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationEFSProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLocationEFS {
    /**
     * The subnet and security groups that AWS DataSync uses to access your Amazon EFS file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationefs-ec2config.html
     */
    interface Ec2ConfigProperty {
        /**
         * Specifies the Amazon Resource Names (ARNs) of the security groups associated with an Amazon EFS file system's mount target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationefs-ec2config.html#cfn-datasync-locationefs-ec2config-securitygrouparns
         */
        readonly securityGroupArns: Array<string>;
        /**
         * Specifies the ARN of a subnet where DataSync creates the [network interfaces](https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces) for managing traffic during your transfer.
         *
         * The subnet must be located:
         *
         * - In the same virtual private cloud (VPC) as the Amazon EFS file system.
         * - In the same Availability Zone as at least one mount target for the Amazon EFS file system.
         *
         * > You don't need to specify a subnet that includes a file system mount target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationefs-ec2config.html#cfn-datasync-locationefs-ec2config-subnetarn
         */
        readonly subnetArn: string;
    }
}
/**
 * Properties for defining a `CfnLocationEFS`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html
 */
export interface CfnLocationEFSProps {
    /**
     * Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to access the Amazon EFS file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-accesspointarn
     */
    readonly accessPointArn?: string;
    /**
     * Specifies the subnet and security groups DataSync uses to access your Amazon EFS file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-ec2config
     */
    readonly ec2Config: CfnLocationEFS.Ec2ConfigProperty | cdk.IResolvable;
    /**
     * Specifies the ARN for the Amazon EFS file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-efsfilesystemarn
     */
    readonly efsFilesystemArn?: string;
    /**
     * Specifies an AWS Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-filesystemaccessrolearn
     */
    readonly fileSystemAccessRoleArn?: string;
    /**
     * Specifies whether you want DataSync to use Transport Layer Security (TLS) 1.2 encryption when it copies data to or from the Amazon EFS file system.
     *
     * If you specify an access point using `AccessPointArn` or an IAM role using `FileSystemAccessRoleArn` , you must set this parameter to `TLS1_2` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-intransitencryption
     */
    readonly inTransitEncryption?: string;
    /**
     * Specifies a mount path for your Amazon EFS file system.
     *
     * This is where DataSync reads or writes data (depending on if this is a source or destination location). By default, DataSync uses the root directory, but you can also include subdirectories.
     *
     * > You must specify a value with forward slashes (for example, `/path/to/folder` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * Specifies the key-value pair that represents a tag that you want to add to the resource.
     *
     * The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataSync::LocationFSxLustre` resource specifies an endpoint for an Amazon FSx for Lustre file system.
 *
 * @cloudformationResource AWS::DataSync::LocationFSxLustre
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html
 */
export declare class CfnLocationFSxLustre extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationFSxLustre from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationFSxLustre;
    /**
     * The ARN of the specified FSx for Lustre file system location.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the specified FSx for Lustre file system location.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * The Amazon Resource Name (ARN) for the FSx for Lustre file system.
     */
    fsxFilesystemArn?: string;
    /**
     * The ARNs of the security groups that are used to configure the FSx for Lustre file system.
     */
    securityGroupArns: Array<string>;
    /**
     * A subdirectory in the location's path.
     */
    subdirectory?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The key-value pair that represents a tag that you want to add to the resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationFSxLustreProps);
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
 * Properties for defining a `CfnLocationFSxLustre`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html
 */
export interface CfnLocationFSxLustreProps {
    /**
     * The Amazon Resource Name (ARN) for the FSx for Lustre file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#cfn-datasync-locationfsxlustre-fsxfilesystemarn
     */
    readonly fsxFilesystemArn?: string;
    /**
     * The ARNs of the security groups that are used to configure the FSx for Lustre file system.
     *
     * *Pattern* : `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\-0-9]*:[0-9]{12}:security-group/.*$`
     *
     * *Length constraints* : Maximum length of 128.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#cfn-datasync-locationfsxlustre-securitygrouparns
     */
    readonly securityGroupArns: Array<string>;
    /**
     * A subdirectory in the location's path.
     *
     * This subdirectory in the FSx for Lustre file system is used to read data from the FSx for Lustre source location or write data to the FSx for Lustre destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#cfn-datasync-locationfsxlustre-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * The key-value pair that represents a tag that you want to add to the resource.
     *
     * The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#cfn-datasync-locationfsxlustre-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataSync::LocationFSxONTAP` resource creates an endpoint for an Amazon FSx for NetApp ONTAP file system.
 *
 * AWS DataSync can access this endpoint as a source or destination location.
 *
 * @cloudformationResource AWS::DataSync::LocationFSxONTAP
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html
 */
export declare class CfnLocationFSxONTAP extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationFSxONTAP from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationFSxONTAP;
    /**
     * The ARN of the FSx for ONTAP file system in the specified location.
     *
     * @cloudformationAttribute FsxFilesystemArn
     */
    readonly attrFsxFilesystemArn: string;
    /**
     * The ARN of the specified location.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the specified location.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.
     */
    protocol?: cdk.IResolvable | CfnLocationFSxONTAP.ProtocolProperty;
    /**
     * Specifies the Amazon Resource Names (ARNs) of the security groups that DataSync can use to access your FSx for ONTAP file system.
     */
    securityGroupArns: Array<string>;
    /**
     * Specifies the ARN of the storage virtual machine (SVM) in your file system where you want to copy data to or from.
     */
    storageVirtualMachineArn: string;
    /**
     * Specifies a path to the file share in the SVM where you'll copy your data.
     */
    subdirectory?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationFSxONTAPProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLocationFSxONTAP {
    /**
     * Specifies the data transfer protocol that AWS DataSync uses to access your Amazon FSx file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-protocol.html
     */
    interface ProtocolProperty {
        /**
         * Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your FSx for ONTAP file system's storage virtual machine (SVM).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-protocol.html#cfn-datasync-locationfsxontap-protocol-nfs
         */
        readonly nfs?: cdk.IResolvable | CfnLocationFSxONTAP.NFSProperty;
        /**
         * Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your FSx for ONTAP file system's SVM.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-protocol.html#cfn-datasync-locationfsxontap-protocol-smb
         */
        readonly smb?: cdk.IResolvable | CfnLocationFSxONTAP.SMBProperty;
    }
    /**
     * Specifies the Server Message Block (SMB) protocol configuration that AWS DataSync uses to access a storage virtual machine (SVM) on your Amazon FSx for NetApp ONTAP file system.
     *
     * For more information, see [Accessing FSx for ONTAP file systems](https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smb.html
     */
    interface SMBProperty {
        /**
         * Specifies the fully qualified domain name (FQDN) of the Microsoft Active Directory that your storage virtual machine (SVM) belongs to.
         *
         * If you have multiple domains in your environment, configuring this setting makes sure that DataSync connects to the right SVM.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smb.html#cfn-datasync-locationfsxontap-smb-domain
         */
        readonly domain?: string;
        /**
         * Specifies how DataSync can access a location using the SMB protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smb.html#cfn-datasync-locationfsxontap-smb-mountoptions
         */
        readonly mountOptions: cdk.IResolvable | CfnLocationFSxONTAP.SmbMountOptionsProperty;
        /**
         * Specifies the password of a user who has permission to access your SVM.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smb.html#cfn-datasync-locationfsxontap-smb-password
         */
        readonly password: string;
        /**
         * Specifies a user name that can mount the location and access the files, folders, and metadata that you need in the SVM.
         *
         * If you provide a user in your Active Directory, note the following:
         *
         * - If you're using AWS Directory Service for Microsoft Active Directory , the user must be a member of the AWS Delegated FSx Administrators group.
         * - If you're using a self-managed Active Directory, the user must be a member of either the Domain Admins group or a custom group that you specified for file system administration when you created your file system.
         *
         * Make sure that the user has the permissions it needs to copy the data you want:
         *
         * - `SE_TCB_NAME` : Required to set object ownership and file metadata. With this privilege, you also can copy NTFS discretionary access lists (DACLs).
         * - `SE_SECURITY_NAME` : May be needed to copy NTFS system access control lists (SACLs). This operation specifically requires the Windows privilege, which is granted to members of the Domain Admins group. If you configure your task to copy SACLs, make sure that the user has the required privileges. For information about copying SACLs, see [Ownership and permissions-related options](https://docs.aws.amazon.com/datasync/latest/userguide/create-task.html#configure-ownership-and-permissions) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smb.html#cfn-datasync-locationfsxontap-smb-user
         */
        readonly user: string;
    }
    /**
     * Specifies the version of the Server Message Block (SMB) protocol that AWS DataSync uses to access an SMB file server.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smbmountoptions.html
     */
    interface SmbMountOptionsProperty {
        /**
         * By default, DataSync automatically chooses an SMB protocol version based on negotiation with your SMB file server.
         *
         * You also can configure DataSync to use a specific SMB version, but we recommend doing this only if DataSync has trouble negotiating with the SMB file server automatically.
         *
         * These are the following options for configuring the SMB version:
         *
         * - `AUTOMATIC` (default): DataSync and the SMB file server negotiate the highest version of SMB that they mutually support between 2.1 and 3.1.1.
         *
         * This is the recommended option. If you instead choose a specific version that your file server doesn't support, you may get an `Operation Not Supported` error.
         * - `SMB3` : Restricts the protocol negotiation to only SMB version 3.0.2.
         * - `SMB2` : Restricts the protocol negotiation to only SMB version 2.1.
         * - `SMB2_0` : Restricts the protocol negotiation to only SMB version 2.0.
         * - `SMB1` : Restricts the protocol negotiation to only SMB version 1.0.
         *
         * > The `SMB1` option isn't available when [creating an Amazon FSx for NetApp ONTAP location](https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxOntap.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smbmountoptions.html#cfn-datasync-locationfsxontap-smbmountoptions-version
         */
        readonly version?: string;
    }
    /**
     * Specifies the Network File System (NFS) protocol configuration that AWS DataSync uses to access a storage virtual machine (SVM) on your Amazon FSx for NetApp ONTAP file system.
     *
     * For more information, see [Accessing FSx for ONTAP file systems](https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfs.html
     */
    interface NFSProperty {
        /**
         * Specifies how DataSync can access a location using the NFS protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfs.html#cfn-datasync-locationfsxontap-nfs-mountoptions
         */
        readonly mountOptions: cdk.IResolvable | CfnLocationFSxONTAP.NfsMountOptionsProperty;
    }
    /**
     * Specifies how DataSync can access a location using the NFS protocol.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfsmountoptions.html
     */
    interface NfsMountOptionsProperty {
        /**
         * Specifies the NFS version that you want DataSync to use when mounting your NFS share.
         *
         * If the server refuses to use the version specified, the task fails.
         *
         * You can specify the following options:
         *
         * - `AUTOMATIC` (default): DataSync chooses NFS version 4.1.
         * - `NFS3` : Stateless protocol version that allows for asynchronous writes on the server.
         * - `NFSv4_0` : Stateful, firewall-friendly protocol version that supports delegations and pseudo file systems.
         * - `NFSv4_1` : Stateful protocol version that supports sessions, directory delegations, and parallel data processing. NFS version 4.1 also includes all features available in version 4.0.
         *
         * > DataSync currently only supports NFS version 3 with Amazon FSx for NetApp ONTAP locations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfsmountoptions.html#cfn-datasync-locationfsxontap-nfsmountoptions-version
         */
        readonly version?: string;
    }
}
/**
 * Properties for defining a `CfnLocationFSxONTAP`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html
 */
export interface CfnLocationFSxONTAPProps {
    /**
     * Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-protocol
     */
    readonly protocol?: cdk.IResolvable | CfnLocationFSxONTAP.ProtocolProperty;
    /**
     * Specifies the Amazon Resource Names (ARNs) of the security groups that DataSync can use to access your FSx for ONTAP file system.
     *
     * You must configure the security groups to allow outbound traffic on the following ports (depending on the protocol that you're using):
     *
     * - *Network File System (NFS)* : TCP ports 111, 635, and 2049
     * - *Server Message Block (SMB)* : TCP port 445
     *
     * Your file system's security groups must also allow inbound traffic on the same port.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-securitygrouparns
     */
    readonly securityGroupArns: Array<string>;
    /**
     * Specifies the ARN of the storage virtual machine (SVM) in your file system where you want to copy data to or from.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-storagevirtualmachinearn
     */
    readonly storageVirtualMachineArn: string;
    /**
     * Specifies a path to the file share in the SVM where you'll copy your data.
     *
     * You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares). For example, your mount path might be `/vol1` , `/vol1/tree1` , or `/share1` .
     *
     * > Don't specify a junction path in the SVM's root volume. For more information, see [Managing FSx for ONTAP storage virtual machines](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html) in the *Amazon FSx for NetApp ONTAP User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     *
     * We recommend creating at least a name tag for your location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataSync::LocationFSxOpenZFS` resource specifies an endpoint for an Amazon FSx for OpenZFS file system.
 *
 * @cloudformationResource AWS::DataSync::LocationFSxOpenZFS
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html
 */
export declare class CfnLocationFSxOpenZFS extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationFSxOpenZFS from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationFSxOpenZFS;
    /**
     * The ARN of the specified FSx for OpenZFS file system location.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the specified FSx for OpenZFS file system location.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * The Amazon Resource Name (ARN) of the FSx for OpenZFS file system.
     */
    fsxFilesystemArn?: string;
    /**
     * The type of protocol that AWS DataSync uses to access your file system.
     */
    protocol: cdk.IResolvable | CfnLocationFSxOpenZFS.ProtocolProperty;
    /**
     * The ARNs of the security groups that are used to configure the FSx for OpenZFS file system.
     */
    securityGroupArns: Array<string>;
    /**
     * A subdirectory in the location's path that must begin with `/fsx` .
     */
    subdirectory?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The key-value pair that represents a tag that you want to add to the resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationFSxOpenZFSProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLocationFSxOpenZFS {
    /**
     * Represents the protocol that AWS DataSync uses to access your Amazon FSx for OpenZFS file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-protocol.html
     */
    interface ProtocolProperty {
        /**
         * Represents the Network File System (NFS) protocol that DataSync uses to access your FSx for OpenZFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-protocol.html#cfn-datasync-locationfsxopenzfs-protocol-nfs
         */
        readonly nfs?: cdk.IResolvable | CfnLocationFSxOpenZFS.NFSProperty;
    }
    /**
     * Represents the Network File System (NFS) protocol that AWS DataSync uses to access your Amazon FSx for OpenZFS file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-nfs.html
     */
    interface NFSProperty {
        /**
         * Represents the mount options that are available for DataSync to access an NFS location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-nfs.html#cfn-datasync-locationfsxopenzfs-nfs-mountoptions
         */
        readonly mountOptions: cdk.IResolvable | CfnLocationFSxOpenZFS.MountOptionsProperty;
    }
    /**
     * Represents the mount options that are available for DataSync to access a Network File System (NFS) location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-mountoptions.html
     */
    interface MountOptionsProperty {
        /**
         * The specific NFS version that you want DataSync to use to mount your NFS share.
         *
         * If the server refuses to use the version specified, the sync will fail. If you don't specify a version, DataSync defaults to `AUTOMATIC` . That is, DataSync automatically selects a version based on negotiation with the NFS server.
         *
         * You can specify the following NFS versions:
         *
         * - *[NFSv3](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc1813)* : Stateless protocol version that allows for asynchronous writes on the server.
         * - *[NFSv4.0](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc3530)* : Stateful, firewall-friendly protocol version that supports delegations and pseudo file systems.
         * - *[NFSv4.1](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc5661)* : Stateful protocol version that supports sessions, directory delegations, and parallel data processing. Version 4.1 also includes all features available in version 4.0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-mountoptions.html#cfn-datasync-locationfsxopenzfs-mountoptions-version
         */
        readonly version?: string;
    }
}
/**
 * Properties for defining a `CfnLocationFSxOpenZFS`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html
 */
export interface CfnLocationFSxOpenZFSProps {
    /**
     * The Amazon Resource Name (ARN) of the FSx for OpenZFS file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html#cfn-datasync-locationfsxopenzfs-fsxfilesystemarn
     */
    readonly fsxFilesystemArn?: string;
    /**
     * The type of protocol that AWS DataSync uses to access your file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html#cfn-datasync-locationfsxopenzfs-protocol
     */
    readonly protocol: cdk.IResolvable | CfnLocationFSxOpenZFS.ProtocolProperty;
    /**
     * The ARNs of the security groups that are used to configure the FSx for OpenZFS file system.
     *
     * *Pattern* : `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\-0-9]*:[0-9]{12}:security-group/.*$`
     *
     * *Length constraints* : Maximum length of 128.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html#cfn-datasync-locationfsxopenzfs-securitygrouparns
     */
    readonly securityGroupArns: Array<string>;
    /**
     * A subdirectory in the location's path that must begin with `/fsx` .
     *
     * DataSync uses this subdirectory to read or write data (depending on whether the file system is a source or destination location).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html#cfn-datasync-locationfsxopenzfs-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * The key-value pair that represents a tag that you want to add to the resource.
     *
     * The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html#cfn-datasync-locationfsxopenzfs-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataSync::LocationFSxWindows` resource specifies an endpoint for an Amazon FSx for Windows Server file system.
 *
 * @cloudformationResource AWS::DataSync::LocationFSxWindows
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html
 */
export declare class CfnLocationFSxWindows extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationFSxWindows from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationFSxWindows;
    /**
     * The ARN of the specified FSx for Windows Server file system location.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the specified FSx for Windows Server file system location.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * Specifies the name of the Microsoft Active Directory domain that the FSx for Windows File Server file system belongs to.
     */
    domain?: string;
    /**
     * Specifies the Amazon Resource Name (ARN) for the FSx for Windows File Server file system.
     */
    fsxFilesystemArn?: string;
    /**
     * Specifies the password of the user with the permissions to mount and access the files, folders, and file metadata in your FSx for Windows File Server file system.
     */
    password?: string;
    /**
     * The Amazon Resource Names (ARNs) of the security groups that are used to configure the FSx for Windows File Server file system.
     */
    securityGroupArns: Array<string>;
    /**
     * Specifies a mount path for your file system using forward slashes.
     */
    subdirectory?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The user who has the permissions to access files and folders in the FSx for Windows File Server file system.
     */
    user: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationFSxWindowsProps);
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
 * Properties for defining a `CfnLocationFSxWindows`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html
 */
export interface CfnLocationFSxWindowsProps {
    /**
     * Specifies the name of the Microsoft Active Directory domain that the FSx for Windows File Server file system belongs to.
     *
     * If you have multiple Active Directory domains in your environment, configuring this parameter makes sure that DataSync connects to the right file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-domain
     */
    readonly domain?: string;
    /**
     * Specifies the Amazon Resource Name (ARN) for the FSx for Windows File Server file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-fsxfilesystemarn
     */
    readonly fsxFilesystemArn?: string;
    /**
     * Specifies the password of the user with the permissions to mount and access the files, folders, and file metadata in your FSx for Windows File Server file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-password
     */
    readonly password?: string;
    /**
     * The Amazon Resource Names (ARNs) of the security groups that are used to configure the FSx for Windows File Server file system.
     *
     * *Pattern* : `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\-0-9]*:[0-9]{12}:security-group/.*$`
     *
     * *Length constraints* : Maximum length of 128.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-securitygrouparns
     */
    readonly securityGroupArns: Array<string>;
    /**
     * Specifies a mount path for your file system using forward slashes.
     *
     * This is where DataSync reads or writes data (depending on if this is a source or destination location).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     *
     * We recommend creating at least a name tag for your location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The user who has the permissions to access files and folders in the FSx for Windows File Server file system.
     *
     * For information about choosing a user name that ensures sufficient permissions to files, folders, and metadata, see [user](https://docs.aws.amazon.com/datasync/latest/userguide/create-fsx-location.html#FSxWuser) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-user
     */
    readonly user: string;
}
/**
 * The `AWS::DataSync::LocationHDFS` resource specifies an endpoint for a Hadoop Distributed File System (HDFS).
 *
 * @cloudformationResource AWS::DataSync::LocationHDFS
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html
 */
export declare class CfnLocationHDFS extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationHDFS from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationHDFS;
    /**
     * The Amazon Resource Name (ARN) of the HDFS cluster location to describe.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the HDFS cluster location.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * The Amazon Resource Names (ARNs) of the agents that are used to connect to the HDFS cluster.
     */
    agentArns: Array<string>;
    /**
     * The authentication mode used to determine identity of user.
     */
    authenticationType: string;
    /**
     * The size of data blocks to write into the HDFS cluster.
     */
    blockSize?: number;
    /**
     * The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys.
     */
    kerberosKeytab?: string;
    /**
     * The `krb5.conf` file that contains the Kerberos configuration information. You can load the `krb5.conf` by providing a string of the file's contents or an Amazon S3 presigned URL of the file. If `KERBEROS` is specified for `AuthType` , this value is required.
     */
    kerberosKrb5Conf?: string;
    /**
     * The Kerberos principal with access to the files and folders on the HDFS cluster.
     */
    kerberosPrincipal?: string;
    /**
     * The URI of the HDFS cluster's Key Management Server (KMS).
     */
    kmsKeyProviderUri?: string;
    /**
     * The NameNode that manages the HDFS namespace.
     */
    nameNodes: Array<cdk.IResolvable | CfnLocationHDFS.NameNodeProperty> | cdk.IResolvable;
    /**
     * The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster.
     */
    qopConfiguration?: cdk.IResolvable | CfnLocationHDFS.QopConfigurationProperty;
    /**
     * The number of DataNodes to replicate the data to when writing to the HDFS cluster.
     */
    replicationFactor?: number;
    /**
     * The user name used to identify the client on the host operating system.
     */
    simpleUser?: string;
    /**
     * A subdirectory in the HDFS cluster.
     */
    subdirectory?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The key-value pair that represents the tag that you want to add to the location.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationHDFSProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLocationHDFS {
    /**
     * The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS) cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-qopconfiguration.html
     */
    interface QopConfigurationProperty {
        /**
         * The data transfer protection setting configured on the HDFS cluster.
         *
         * This setting corresponds to your `dfs.data.transfer.protection` setting in the `hdfs-site.xml` file on your Hadoop cluster.
         *
         * @default - "PRIVACY"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-qopconfiguration.html#cfn-datasync-locationhdfs-qopconfiguration-datatransferprotection
         */
        readonly dataTransferProtection?: string;
        /**
         * The Remote Procedure Call (RPC) protection setting configured on the HDFS cluster.
         *
         * This setting corresponds to your `hadoop.rpc.protection` setting in your `core-site.xml` file on your Hadoop cluster.
         *
         * @default - "PRIVACY"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-qopconfiguration.html#cfn-datasync-locationhdfs-qopconfiguration-rpcprotection
         */
        readonly rpcProtection?: string;
    }
    /**
     * The NameNode of the Hadoop Distributed File System (HDFS).
     *
     * The NameNode manages the file system's namespace and performs operations such as opening, closing, and renaming files and directories. The NameNode also contains the information to map blocks of data to the DataNodes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-namenode.html
     */
    interface NameNodeProperty {
        /**
         * The hostname of the NameNode in the HDFS cluster.
         *
         * This value is the IP address or Domain Name Service (DNS) name of the NameNode. An agent that's installed on-premises uses this hostname to communicate with the NameNode in the network.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-namenode.html#cfn-datasync-locationhdfs-namenode-hostname
         */
        readonly hostname: string;
        /**
         * The port that the NameNode uses to listen to client requests.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-namenode.html#cfn-datasync-locationhdfs-namenode-port
         */
        readonly port: number;
    }
}
/**
 * Properties for defining a `CfnLocationHDFS`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html
 */
export interface CfnLocationHDFSProps {
    /**
     * The Amazon Resource Names (ARNs) of the agents that are used to connect to the HDFS cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-agentarns
     */
    readonly agentArns: Array<string>;
    /**
     * The authentication mode used to determine identity of user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-authenticationtype
     */
    readonly authenticationType: string;
    /**
     * The size of data blocks to write into the HDFS cluster.
     *
     * The block size must be a multiple of 512 bytes. The default block size is 128 mebibytes (MiB).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-blocksize
     */
    readonly blockSize?: number;
    /**
     * The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys.
     *
     * Provide the base64-encoded file text. If `KERBEROS` is specified for `AuthType` , this value is required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-kerberoskeytab
     */
    readonly kerberosKeytab?: string;
    /**
     * The `krb5.conf` file that contains the Kerberos configuration information. You can load the `krb5.conf` by providing a string of the file's contents or an Amazon S3 presigned URL of the file. If `KERBEROS` is specified for `AuthType` , this value is required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-kerberoskrb5conf
     */
    readonly kerberosKrb5Conf?: string;
    /**
     * The Kerberos principal with access to the files and folders on the HDFS cluster.
     *
     * > If `KERBEROS` is specified for `AuthenticationType` , this parameter is required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-kerberosprincipal
     */
    readonly kerberosPrincipal?: string;
    /**
     * The URI of the HDFS cluster's Key Management Server (KMS).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-kmskeyprovideruri
     */
    readonly kmsKeyProviderUri?: string;
    /**
     * The NameNode that manages the HDFS namespace.
     *
     * The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-namenodes
     */
    readonly nameNodes: Array<cdk.IResolvable | CfnLocationHDFS.NameNodeProperty> | cdk.IResolvable;
    /**
     * The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster.
     *
     * If `QopConfiguration` isn't specified, `RpcProtection` and `DataTransferProtection` default to `PRIVACY` . If you set `RpcProtection` or `DataTransferProtection` , the other parameter assumes the same value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-qopconfiguration
     */
    readonly qopConfiguration?: cdk.IResolvable | CfnLocationHDFS.QopConfigurationProperty;
    /**
     * The number of DataNodes to replicate the data to when writing to the HDFS cluster.
     *
     * By default, data is replicated to three DataNodes.
     *
     * @default - 3
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-replicationfactor
     */
    readonly replicationFactor?: number;
    /**
     * The user name used to identify the client on the host operating system.
     *
     * > If `SIMPLE` is specified for `AuthenticationType` , this parameter is required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-simpleuser
     */
    readonly simpleUser?: string;
    /**
     * A subdirectory in the HDFS cluster.
     *
     * This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to `/` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * The key-value pair that represents the tag that you want to add to the location.
     *
     * The value can be an empty string. We recommend using tags to name your resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#cfn-datasync-locationhdfs-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataSync::LocationNFS` resource specifies a Network File System (NFS) file server that AWS DataSync can use as a transfer source or destination.
 *
 * @cloudformationResource AWS::DataSync::LocationNFS
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html
 */
export declare class CfnLocationNFS extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationNFS from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationNFS;
    /**
     * The Amazon Resource Name (ARN) of the NFS location that you created.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the NFS location that you created.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * Specifies the options that DataSync can use to mount your NFS file server.
     */
    mountOptions?: cdk.IResolvable | CfnLocationNFS.MountOptionsProperty;
    /**
     * Specifies the Amazon Resource Name (ARN) of the DataSync agent that want to connect to your NFS file server.
     */
    onPremConfig: cdk.IResolvable | CfnLocationNFS.OnPremConfigProperty;
    /**
     * Specifies the Domain Name System (DNS) name or IP version 4 address of the NFS file server that your DataSync agent connects to.
     */
    serverHostname?: string;
    /**
     * Specifies the export path in your NFS file server that you want DataSync to mount.
     */
    subdirectory?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationNFSProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLocationNFS {
    /**
     * Specifies the options that DataSync can use to mount your NFS file server.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-mountoptions.html
     */
    interface MountOptionsProperty {
        /**
         * Specifies the NFS version that you want DataSync to use when mounting your NFS share.
         *
         * If the server refuses to use the version specified, the task fails.
         *
         * You can specify the following options:
         *
         * - `AUTOMATIC` (default): DataSync chooses NFS version 4.1.
         * - `NFS3` : Stateless protocol version that allows for asynchronous writes on the server.
         * - `NFSv4_0` : Stateful, firewall-friendly protocol version that supports delegations and pseudo file systems.
         * - `NFSv4_1` : Stateful protocol version that supports sessions, directory delegations, and parallel data processing. NFS version 4.1 also includes all features available in version 4.0.
         *
         * > DataSync currently only supports NFS version 3 with Amazon FSx for NetApp ONTAP locations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-mountoptions.html#cfn-datasync-locationnfs-mountoptions-version
         */
        readonly version?: string;
    }
    /**
     * The AWS DataSync agents that are connecting to a Network File System (NFS) location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-onpremconfig.html
     */
    interface OnPremConfigProperty {
        /**
         * The Amazon Resource Names (ARNs) of the agents connecting to a transfer location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-onpremconfig.html#cfn-datasync-locationnfs-onpremconfig-agentarns
         */
        readonly agentArns: Array<string>;
    }
}
/**
 * Properties for defining a `CfnLocationNFS`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html
 */
export interface CfnLocationNFSProps {
    /**
     * Specifies the options that DataSync can use to mount your NFS file server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#cfn-datasync-locationnfs-mountoptions
     */
    readonly mountOptions?: cdk.IResolvable | CfnLocationNFS.MountOptionsProperty;
    /**
     * Specifies the Amazon Resource Name (ARN) of the DataSync agent that want to connect to your NFS file server.
     *
     * You can specify more than one agent. For more information, see [Using multiple agents for transfers](https://docs.aws.amazon.com/datasync/latest/userguide/multiple-agents.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#cfn-datasync-locationnfs-onpremconfig
     */
    readonly onPremConfig: cdk.IResolvable | CfnLocationNFS.OnPremConfigProperty;
    /**
     * Specifies the Domain Name System (DNS) name or IP version 4 address of the NFS file server that your DataSync agent connects to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#cfn-datasync-locationnfs-serverhostname
     */
    readonly serverHostname?: string;
    /**
     * Specifies the export path in your NFS file server that you want DataSync to mount.
     *
     * This path (or a subdirectory of the path) is where DataSync transfers data to or from. For information on configuring an export for DataSync, see [Accessing NFS file servers](https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#accessing-nfs) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#cfn-datasync-locationnfs-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     *
     * We recommend creating at least a name tag for your location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#cfn-datasync-locationnfs-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataSync::LocationObjectStorage` resource specifies an endpoint for a self-managed object storage bucket.
 *
 * For more information about self-managed object storage locations, see [Creating a Location for Object Storage](https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html) .
 *
 * @cloudformationResource AWS::DataSync::LocationObjectStorage
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html
 */
export declare class CfnLocationObjectStorage extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationObjectStorage from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationObjectStorage;
    /**
     * The Amazon Resource Name (ARN) of the specified object storage location.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the specified object storage location.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * Specifies the access key (for example, a user name) if credentials are required to authenticate with the object storage server.
     */
    accessKey?: string;
    /**
     * Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can securely connect with your location.
     */
    agentArns: Array<string>;
    /**
     * Specifies the name of the object storage bucket involved in the transfer.
     */
    bucketName?: string;
    /**
     * Specifies the secret key (for example, a password) if credentials are required to authenticate with the object storage server.
     */
    secretKey?: string;
    /**
     * Specifies a certificate chain for DataSync to authenticate with your object storage system if the system uses a private or self-signed certificate authority (CA).
     */
    serverCertificate?: string;
    /**
     * Specifies the domain name or IP address of the object storage server.
     */
    serverHostname?: string;
    /**
     * Specifies the port that your object storage server accepts inbound network traffic on (for example, port 443).
     */
    serverPort?: number;
    /**
     * Specifies the protocol that your object storage server uses to communicate.
     */
    serverProtocol?: string;
    /**
     * Specifies the object prefix for your object storage server.
     */
    subdirectory?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies the key-value pair that represents a tag that you want to add to the resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationObjectStorageProps);
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
 * Properties for defining a `CfnLocationObjectStorage`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html
 */
export interface CfnLocationObjectStorageProps {
    /**
     * Specifies the access key (for example, a user name) if credentials are required to authenticate with the object storage server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-accesskey
     */
    readonly accessKey?: string;
    /**
     * Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can securely connect with your location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-agentarns
     */
    readonly agentArns: Array<string>;
    /**
     * Specifies the name of the object storage bucket involved in the transfer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-bucketname
     */
    readonly bucketName?: string;
    /**
     * Specifies the secret key (for example, a password) if credentials are required to authenticate with the object storage server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-secretkey
     */
    readonly secretKey?: string;
    /**
     * Specifies a certificate chain for DataSync to authenticate with your object storage system if the system uses a private or self-signed certificate authority (CA).
     *
     * You must specify a single `.pem` file with a full certificate chain (for example, `file:///home/user/.ssh/object_storage_certificates.pem` ).
     *
     * The certificate chain might include:
     *
     * - The object storage system's certificate
     * - All intermediate certificates (if there are any)
     * - The root certificate of the signing CA
     *
     * You can concatenate your certificates into a `.pem` file (which can be up to 32768 bytes before base64 encoding). The following example `cat` command creates an `object_storage_certificates.pem` file that includes three certificates:
     *
     * `cat object_server_certificate.pem intermediate_certificate.pem ca_root_certificate.pem > object_storage_certificates.pem`
     *
     * To use this parameter, configure `ServerProtocol` to `HTTPS` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-servercertificate
     */
    readonly serverCertificate?: string;
    /**
     * Specifies the domain name or IP address of the object storage server.
     *
     * A DataSync agent uses this hostname to mount the object storage server in a network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-serverhostname
     */
    readonly serverHostname?: string;
    /**
     * Specifies the port that your object storage server accepts inbound network traffic on (for example, port 443).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-serverport
     */
    readonly serverPort?: number;
    /**
     * Specifies the protocol that your object storage server uses to communicate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-serverprotocol
     */
    readonly serverProtocol?: string;
    /**
     * Specifies the object prefix for your object storage server.
     *
     * If this is a source location, DataSync only copies objects with this prefix. If this is a destination location, DataSync writes all objects with this prefix.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * Specifies the key-value pair that represents a tag that you want to add to the resource.
     *
     * Tags can help you manage, filter, and search for your resources. We recommend creating a name tag for your location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataSync::LocationS3` resource specifies an endpoint for an Amazon S3 bucket.
 *
 * For more information, see [Create an Amazon S3 location](https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli) in the *AWS DataSync User Guide* .
 *
 * @cloudformationResource AWS::DataSync::LocationS3
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html
 */
export declare class CfnLocationS3 extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationS3 from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationS3;
    /**
     * The Amazon Resource Name (ARN) of the specified Amazon S3 location.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the specified Amazon S3 location.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * The ARN of the Amazon S3 bucket.
     */
    s3BucketArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.
     */
    s3Config: cdk.IResolvable | CfnLocationS3.S3ConfigProperty;
    /**
     * The Amazon S3 storage class that you want to store your files in when this location is used as a task destination.
     */
    s3StorageClass?: string;
    /**
     * Specifies a prefix in the S3 bucket that DataSync reads from or writes to (depending on whether the bucket is a source or destination location).
     */
    subdirectory?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationS3Props);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLocationS3 {
    /**
     * Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that DataSync uses to access your S3 bucket.
     *
     * For more information, see [Accessing S3 buckets](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-access) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locations3-s3config.html
     */
    interface S3ConfigProperty {
        /**
         * Specifies the ARN of the IAM role that DataSync uses to access your S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locations3-s3config.html#cfn-datasync-locations3-s3config-bucketaccessrolearn
         */
        readonly bucketAccessRoleArn: string;
    }
}
/**
 * Properties for defining a `CfnLocationS3`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html
 */
export interface CfnLocationS3Props {
    /**
     * The ARN of the Amazon S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#cfn-datasync-locations3-s3bucketarn
     */
    readonly s3BucketArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.
     *
     * For detailed information about using such a role, see [Creating a Location for Amazon S3](https://docs.aws.amazon.com/datasync/latest/userguide/working-with-locations.html#create-s3-location) in the *AWS DataSync User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#cfn-datasync-locations3-s3config
     */
    readonly s3Config: cdk.IResolvable | CfnLocationS3.S3ConfigProperty;
    /**
     * The Amazon S3 storage class that you want to store your files in when this location is used as a task destination.
     *
     * For buckets in AWS Regions , the storage class defaults to S3 Standard.
     *
     * For more information about S3 storage classes, see [Amazon S3 Storage Classes](https://docs.aws.amazon.com/s3/storage-classes/) . Some storage classes have behaviors that can affect your S3 storage costs. For detailed information, see [Considerations When Working with Amazon S3 Storage Classes in DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes) .
     *
     * @default - "STANDARD"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#cfn-datasync-locations3-s3storageclass
     */
    readonly s3StorageClass?: string;
    /**
     * Specifies a prefix in the S3 bucket that DataSync reads from or writes to (depending on whether the bucket is a source or destination location).
     *
     * > DataSync can't transfer objects with a prefix that begins with a slash ( `/` ) or includes `//` , `/./` , or `/../` patterns. For example:
     * >
     * > - `/photos`
     * > - `photos//2006/January`
     * > - `photos/./2006/February`
     * > - `photos/../2006/March`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#cfn-datasync-locations3-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     *
     * We recommend creating at least a name tag for your transfer location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#cfn-datasync-locations3-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataSync::LocationSMB` resource specifies a Server Message Block (SMB) location.
 *
 * @cloudformationResource AWS::DataSync::LocationSMB
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html
 */
export declare class CfnLocationSMB extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocationSMB from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocationSMB;
    /**
     * The Amazon Resource Name (ARN) of the specified SMB file system.
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * The URI of the specified SMB location.
     *
     * @cloudformationAttribute LocationUri
     */
    readonly attrLocationUri: string;
    /**
     * The Amazon Resource Names (ARNs) of agents to use for a Server Message Block (SMB) location.
     */
    agentArns: Array<string>;
    /**
     * Specifies the name of the Active Directory domain that your SMB file server belongs to.
     */
    domain?: string;
    /**
     * Specifies the version of the SMB protocol that DataSync uses to access your SMB file server.
     */
    mountOptions?: cdk.IResolvable | CfnLocationSMB.MountOptionsProperty;
    /**
     * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
     */
    password?: string;
    /**
     * Specifies the Domain Name Service (DNS) name or IP address of the SMB file server that your DataSync agent will mount.
     */
    serverHostname?: string;
    /**
     * The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination.
     */
    subdirectory?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The user who can mount the share and has the permissions to access files and folders in the SMB share.
     */
    user: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationSMBProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLocationSMB {
    /**
     * Specifies the version of the SMB protocol that DataSync uses to access your SMB file server.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-mountoptions.html
     */
    interface MountOptionsProperty {
        /**
         * By default, DataSync automatically chooses an SMB protocol version based on negotiation with your SMB file server.
         *
         * You also can configure DataSync to use a specific SMB version, but we recommend doing this only if DataSync has trouble negotiating with the SMB file server automatically.
         *
         * These are the following options for configuring the SMB version:
         *
         * - `AUTOMATIC` (default): DataSync and the SMB file server negotiate the highest version of SMB that they mutually support between 2.1 and 3.1.1.
         *
         * This is the recommended option. If you instead choose a specific version that your file server doesn't support, you may get an `Operation Not Supported` error.
         * - `SMB3` : Restricts the protocol negotiation to only SMB version 3.0.2.
         * - `SMB2` : Restricts the protocol negotiation to only SMB version 2.1.
         * - `SMB2_0` : Restricts the protocol negotiation to only SMB version 2.0.
         * - `SMB1` : Restricts the protocol negotiation to only SMB version 1.0.
         *
         * > The `SMB1` option isn't available when [creating an Amazon FSx for NetApp ONTAP location](https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxOntap.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-mountoptions.html#cfn-datasync-locationsmb-mountoptions-version
         */
        readonly version?: string;
    }
}
/**
 * Properties for defining a `CfnLocationSMB`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html
 */
export interface CfnLocationSMBProps {
    /**
     * The Amazon Resource Names (ARNs) of agents to use for a Server Message Block (SMB) location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-agentarns
     */
    readonly agentArns: Array<string>;
    /**
     * Specifies the name of the Active Directory domain that your SMB file server belongs to.
     *
     * If you have multiple Active Directory domains in your environment, configuring this parameter makes sure that DataSync connects to the right file server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-domain
     */
    readonly domain?: string;
    /**
     * Specifies the version of the SMB protocol that DataSync uses to access your SMB file server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-mountoptions
     */
    readonly mountOptions?: cdk.IResolvable | CfnLocationSMB.MountOptionsProperty;
    /**
     * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-password
     */
    readonly password?: string;
    /**
     * Specifies the Domain Name Service (DNS) name or IP address of the SMB file server that your DataSync agent will mount.
     *
     * > You can't specify an IP version 6 (IPv6) address.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-serverhostname
     */
    readonly serverHostname?: string;
    /**
     * The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination.
     *
     * The SMB path should be a path that's exported by the SMB server, or a subdirectory of that path. The path should be such that it can be mounted by other SMB clients in your network.
     *
     * > `Subdirectory` must be specified with forward slashes. For example, `/path/to/folder` .
     *
     * To transfer all the data in the folder you specified, DataSync must have permissions to mount the SMB share, as well as to access all the data in that share. To ensure this, either make sure that the user name and password specified belongs to the user who can mount the share, and who has the appropriate permissions for all of the files and directories that you want DataSync to access, or use credentials of a member of the Backup Operators group to mount the share. Doing either one enables the agent to access the data. For the agent to access directories, you must additionally enable all execute access.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-subdirectory
     */
    readonly subdirectory?: string;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     *
     * We recommend creating at least a name tag for your location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The user who can mount the share and has the permissions to access files and folders in the SMB share.
     *
     * For information about choosing a user name that ensures sufficient permissions to files, folders, and metadata, see [user](https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#SMBuser) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-user
     */
    readonly user: string;
}
/**
 * The `AWS::DataSync::StorageSystem` resource creates an AWS resource for an on-premises storage system that you want DataSync Discovery to collect information about.
 *
 * For more information, see [discovering your storage with DataSync Discovery.](https://docs.aws.amazon.com/datasync/latest/userguide/understanding-your-storage.html)
 *
 * @cloudformationResource AWS::DataSync::StorageSystem
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html
 */
export declare class CfnStorageSystem extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStorageSystem from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStorageSystem;
    /**
     * Indicates whether your DataSync agent can connect to your on-premises storage system.
     *
     * @cloudformationAttribute ConnectivityStatus
     */
    readonly attrConnectivityStatus: string;
    /**
     * The ARN of the secret that stores your on-premises storage system's credentials. DataSync Discovery stores these credentials in [AWS Secrets Manager](https://docs.aws.amazon.com/datasync/latest/userguide/discovery-configure-storage.html#discovery-add-storage) .
     *
     * @cloudformationAttribute SecretsManagerArn
     */
    readonly attrSecretsManagerArn: string;
    /**
     * The ARN of the on-premises storage system that you're using with DataSync Discovery.
     *
     * @cloudformationAttribute StorageSystemArn
     */
    readonly attrStorageSystemArn: string;
    /**
     * Specifies the Amazon Resource Name (ARN) of the DataSync agent that connects to and reads from your on-premises storage system's management interface.
     */
    agentArns: Array<string>;
    /**
     * Specifies the ARN of the Amazon CloudWatch log group for monitoring and logging discovery job events.
     */
    cloudWatchLogGroupArn?: string;
    /**
     * Specifies a familiar name for your on-premises storage system.
     */
    name?: string;
    /**
     * Specifies the server name and network port required to connect with the management interface of your on-premises storage system.
     */
    serverConfiguration: cdk.IResolvable | CfnStorageSystem.ServerConfigurationProperty;
    /**
     * Specifies the user name and password for accessing your on-premises storage system's management interface.
     */
    serverCredentials?: cdk.IResolvable | CfnStorageSystem.ServerCredentialsProperty;
    /**
     * Specifies the type of on-premises storage system that you want DataSync Discovery to collect information about.
     */
    systemType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStorageSystemProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStorageSystem {
    /**
     * The credentials that provide DataSync Discovery read access to your on-premises storage system's management interface.
     *
     * DataSync Discovery stores these credentials in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) . For more information, see [Accessing your on-premises storage system](https://docs.aws.amazon.com/datasync/latest/userguide/discovery-configure-storage.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-servercredentials.html
     */
    interface ServerCredentialsProperty {
        /**
         * Specifies the password for your storage system's management interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-servercredentials.html#cfn-datasync-storagesystem-servercredentials-password
         */
        readonly password: string;
        /**
         * Specifies the user name for your storage system's management interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-servercredentials.html#cfn-datasync-storagesystem-servercredentials-username
         */
        readonly username: string;
    }
    /**
     * The network settings that DataSync Discovery uses to connect with your on-premises storage system's management interface.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-serverconfiguration.html
     */
    interface ServerConfigurationProperty {
        /**
         * The domain name or IP address of your storage system's management interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-serverconfiguration.html#cfn-datasync-storagesystem-serverconfiguration-serverhostname
         */
        readonly serverHostname: string;
        /**
         * The network port for accessing the storage system's management interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-serverconfiguration.html#cfn-datasync-storagesystem-serverconfiguration-serverport
         */
        readonly serverPort?: number;
    }
}
/**
 * Properties for defining a `CfnStorageSystem`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html
 */
export interface CfnStorageSystemProps {
    /**
     * Specifies the Amazon Resource Name (ARN) of the DataSync agent that connects to and reads from your on-premises storage system's management interface.
     *
     * You can only specify one ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-agentarns
     */
    readonly agentArns: Array<string>;
    /**
     * Specifies the ARN of the Amazon CloudWatch log group for monitoring and logging discovery job events.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-cloudwatchloggrouparn
     */
    readonly cloudWatchLogGroupArn?: string;
    /**
     * Specifies a familiar name for your on-premises storage system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-name
     */
    readonly name?: string;
    /**
     * Specifies the server name and network port required to connect with the management interface of your on-premises storage system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-serverconfiguration
     */
    readonly serverConfiguration: cdk.IResolvable | CfnStorageSystem.ServerConfigurationProperty;
    /**
     * Specifies the user name and password for accessing your on-premises storage system's management interface.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-servercredentials
     */
    readonly serverCredentials?: cdk.IResolvable | CfnStorageSystem.ServerCredentialsProperty;
    /**
     * Specifies the type of on-premises storage system that you want DataSync Discovery to collect information about.
     *
     * > DataSync Discovery currently supports NetApp Fabric-Attached Storage (FAS) and All Flash FAS (AFF) systems running ONTAP 9.7 or later.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-systemtype
     */
    readonly systemType: string;
    /**
     * Specifies labels that help you categorize, filter, and search for your AWS resources.
     *
     * We recommend creating at least a name tag for your on-premises storage system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataSync::Task` resource specifies a task.
 *
 * A task is a set of two locations (source and destination) and a set of `Options` that you use to control the behavior of a task. If you don't specify `Options` when you create a task, AWS DataSync populates them with service defaults.
 *
 * @cloudformationResource AWS::DataSync::Task
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html
 */
export declare class CfnTask extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTask from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTask;
    /**
     * The ARNs of the destination elastic network interfaces (ENIs) that were created for your subnet.
     *
     * @cloudformationAttribute DestinationNetworkInterfaceArns
     */
    readonly attrDestinationNetworkInterfaceArns: Array<string>;
    /**
     * The ARNs of the source ENIs that were created for your subnet.
     *
     * @cloudformationAttribute SourceNetworkInterfaceArns
     */
    readonly attrSourceNetworkInterfaceArns: Array<string>;
    /**
     * The status of the task that was described.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The ARN of the task.
     *
     * @cloudformationAttribute TaskArn
     */
    readonly attrTaskArn: string;
    /**
     * Specifies the Amazon Resource Name (ARN) of an Amazon CloudWatch log group for monitoring your task.
     */
    cloudWatchLogGroupArn?: string;
    /**
     * The Amazon Resource Name (ARN) of an AWS storage resource's location.
     */
    destinationLocationArn: string;
    /**
     * Specifies exclude filters that define the files, objects, and folders in your source location that you don't want DataSync to transfer.
     */
    excludes?: Array<CfnTask.FilterRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies include filters define the files, objects, and folders in your source location that you want DataSync to transfer.
     */
    includes?: Array<CfnTask.FilterRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The configuration of the manifest that lists the files or objects that you want DataSync to transfer.
     */
    manifestConfig?: cdk.IResolvable | CfnTask.ManifestConfigProperty;
    /**
     * Specifies the name of your task.
     */
    name?: string;
    /**
     * Specifies your task's settings, such as preserving file metadata, verifying data integrity, among other options.
     */
    options?: cdk.IResolvable | CfnTask.OptionsProperty;
    /**
     * Specifies a schedule for when you want your task to run.
     */
    schedule?: cdk.IResolvable | CfnTask.TaskScheduleProperty;
    /**
     * Specifies the ARN of your transfer's source location.
     */
    sourceLocationArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies the tags that you want to apply to your task.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies how you want to configure a task report, which provides detailed information about your DataSync transfer.
     */
    taskReportConfig?: cdk.IResolvable | CfnTask.TaskReportConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTaskProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTask {
    /**
     * Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-filterrule.html
     */
    interface FilterRuleProperty {
        /**
         * The type of filter rule to apply.
         *
         * AWS DataSync only supports the SIMPLE_PATTERN rule type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-filterrule.html#cfn-datasync-task-filterrule-filtertype
         */
        readonly filterType?: string;
        /**
         * A single filter string that consists of the patterns to include or exclude.
         *
         * The patterns are delimited by "|" (that is, a pipe), for example: `/folder1|/folder2`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-filterrule.html#cfn-datasync-task-filterrule-value
         */
        readonly value?: string;
    }
    /**
     * Represents the options that are available to control the behavior of a [StartTaskExecution](https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html) operation. This behavior includes preserving metadata, such as user ID (UID), group ID (GID), and file permissions; overwriting files in the destination; data integrity verification; and so on.
     *
     * A task has a set of default options associated with it. If you don't specify an option in [StartTaskExecution](https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html) , the default value is used. You can override the default options on each task execution by specifying an overriding `Options` value to [StartTaskExecution](https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html
     */
    interface OptionsProperty {
        /**
         * A file metadata value that shows the last time that a file was accessed (that is, when the file was read or written to).
         *
         * If you set `Atime` to `BEST_EFFORT` , AWS DataSync attempts to preserve the original `Atime` attribute on all source files (that is, the version before the PREPARING phase). However, `Atime` 's behavior is not fully standard across platforms, so AWS DataSync can only do this on a best-effort basis.
         *
         * Default value: `BEST_EFFORT`
         *
         * `BEST_EFFORT` : Attempt to preserve the per-file `Atime` value (recommended).
         *
         * `NONE` : Ignore `Atime` .
         *
         * > If `Atime` is set to `BEST_EFFORT` , `Mtime` must be set to `PRESERVE` .
         * >
         * > If `Atime` is set to `NONE` , `Mtime` must also be `NONE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-atime
         */
        readonly atime?: string;
        /**
         * A value that limits the bandwidth used by AWS DataSync .
         *
         * For example, if you want AWS DataSync to use a maximum of 1 MB, set this value to `1048576` (=1024*1024).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-bytespersecond
         */
        readonly bytesPerSecond?: number;
        /**
         * The group ID (GID) of the file's owners.
         *
         * Default value: `INT_VALUE`
         *
         * `INT_VALUE` : Preserve the integer value of the user ID (UID) and group ID (GID) (recommended).
         *
         * `NAME` : Currently not supported.
         *
         * `NONE` : Ignore the UID and GID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-gid
         */
        readonly gid?: string;
        /**
         * Specifies the type of logs that DataSync publishes to a Amazon CloudWatch Logs log group.
         *
         * To specify the log group, see [CloudWatchLogGroupArn](https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html#DataSync-CreateTask-request-CloudWatchLogGroupArn) .
         *
         * - `BASIC` - Publishes logs with only basic information (such as transfer errors).
         * - `TRANSFER` - Publishes logs for all files or objects that your DataSync task transfers and performs data-integrity checks on.
         * - `OFF` - No logs are published.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-loglevel
         */
        readonly logLevel?: string;
        /**
         * A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.
         *
         * This option is required for cases when you need to run the same task more than one time.
         *
         * Default value: `PRESERVE`
         *
         * `PRESERVE` : Preserve original `Mtime` (recommended)
         *
         * `NONE` : Ignore `Mtime` .
         *
         * > If `Mtime` is set to `PRESERVE` , `Atime` must be set to `BEST_EFFORT` .
         * >
         * > If `Mtime` is set to `NONE` , `Atime` must also be set to `NONE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-mtime
         */
        readonly mtime?: string;
        /**
         * Specifies whether you want DataSync to `PRESERVE` object tags (default behavior) when transferring between object storage systems.
         *
         * If you want your DataSync task to ignore object tags, specify the `NONE` value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-objecttags
         */
        readonly objectTags?: string;
        /**
         * Specifies whether DataSync should modify or preserve data at the destination location.
         *
         * - `ALWAYS` (default) - DataSync modifies data in the destination location when source data (including metadata) has changed.
         *
         * If DataSync overwrites objects, you might incur additional charges for certain Amazon S3 storage classes (for example, for retrieval or early deletion). For more information, see [Storage class considerations with Amazon S3 transfers](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes) .
         * - `NEVER` - DataSync doesn't overwrite data in the destination location even if the source data has changed. You can use this option to protect against overwriting changes made to files or objects in the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-overwritemode
         */
        readonly overwriteMode?: string;
        /**
         * A value that determines which users or groups can access a file for a specific purpose, such as reading, writing, or execution of the file.
         *
         * This option should be set only for Network File System (NFS), Amazon EFS, and Amazon S3 locations. For more information about what metadata is copied by DataSync, see [Metadata Copied by DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied) .
         *
         * Default value: `PRESERVE`
         *
         * `PRESERVE` : Preserve POSIX-style permissions (recommended).
         *
         * `NONE` : Ignore permissions.
         *
         * > AWS DataSync can preserve extant permissions of a source location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-posixpermissions
         */
        readonly posixPermissions?: string;
        /**
         * A value that specifies whether files in the destination that don't exist in the source file system are preserved.
         *
         * This option can affect your storage costs. If your task deletes objects, you might incur minimum storage duration charges for certain storage classes. For detailed information, see [Considerations when working with Amazon S3 storage classes in DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes) in the *AWS DataSync User Guide* .
         *
         * Default value: `PRESERVE`
         *
         * `PRESERVE` : Ignore destination files that aren't present in the source (recommended).
         *
         * `REMOVE` : Delete destination files that aren't present in the source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-preservedeletedfiles
         */
        readonly preserveDeletedFiles?: string;
        /**
         * A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and re-create the files with that device name and metadata on the destination.
         *
         * DataSync does not copy the contents of such devices, only the name and metadata.
         *
         * > AWS DataSync can't sync the actual contents of such devices, because they are nonterminal and don't return an end-of-file (EOF) marker.
         *
         * Default value: `NONE`
         *
         * `NONE` : Ignore special devices (recommended).
         *
         * `PRESERVE` : Preserve character and block device metadata. This option isn't currently supported for Amazon EFS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-preservedevices
         */
        readonly preserveDevices?: string;
        /**
         * A value that determines which components of the SMB security descriptor are copied from source to destination objects.
         *
         * This value is only used for transfers between SMB and Amazon FSx for Windows File Server locations, or between two Amazon FSx for Windows File Server locations. For more information about how DataSync handles metadata, see [How DataSync Handles Metadata and Special Files](https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html) .
         *
         * Default value: `OWNER_DACL`
         *
         * `OWNER_DACL` : For each copied object, DataSync copies the following metadata:
         *
         * - Object owner.
         * - NTFS discretionary access control lists (DACLs), which determine whether to grant access to an object.
         *
         * When you use option, DataSync does NOT copy the NTFS system access control lists (SACLs), which are used by administrators to log attempts to access a secured object.
         *
         * `OWNER_DACL_SACL` : For each copied object, DataSync copies the following metadata:
         *
         * - Object owner.
         * - NTFS discretionary access control lists (DACLs), which determine whether to grant access to an object.
         * - NTFS system access control lists (SACLs), which are used by administrators to log attempts to access a secured object.
         *
         * Copying SACLs requires granting additional permissions to the Windows user that DataSync uses to access your SMB location. For information about choosing a user that ensures sufficient permissions to files, folders, and metadata, see [user](https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#SMBuser) .
         *
         * `NONE` : None of the SMB security descriptor components are copied. Destination objects are owned by the user that was provided for accessing the destination location. DACLs and SACLs are set based on the destination server’s configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-securitydescriptorcopyflags
         */
        readonly securityDescriptorCopyFlags?: string;
        /**
         * Specifies whether your transfer tasks should be put into a queue during certain scenarios when [running multiple tasks](https://docs.aws.amazon.com/datasync/latest/userguide/run-task.html#running-multiple-tasks) . This is `ENABLED` by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-taskqueueing
         */
        readonly taskQueueing?: string;
        /**
         * A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing it to the destination location.
         *
         * `CHANGED` : DataSync copies only data or metadata that is new or different from the source location to the destination location.
         *
         * `ALL` : DataSync copies all source location content to the destination, without comparing it to existing content on the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-transfermode
         */
        readonly transferMode?: string;
        /**
         * The user ID (UID) of the file's owner.
         *
         * Default value: `INT_VALUE`
         *
         * `INT_VALUE` : Preserve the integer value of the UID and group ID (GID) (recommended).
         *
         * `NAME` : Currently not supported
         *
         * `NONE` : Ignore the UID and GID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-uid
         */
        readonly uid?: string;
        /**
         * A value that determines whether a data integrity verification is performed at the end of a task execution after all data and metadata have been transferred.
         *
         * For more information, see [Configure task settings](https://docs.aws.amazon.com/datasync/latest/userguide/create-task.html) .
         *
         * Default value: `POINT_IN_TIME_CONSISTENT`
         *
         * `ONLY_FILES_TRANSFERRED` (recommended): Perform verification only on files that were transferred.
         *
         * `POINT_IN_TIME_CONSISTENT` : Scan the entire source and entire destination at the end of the transfer to verify that the source and destination are fully synchronized. This option isn't supported when transferring to S3 Glacier or S3 Glacier Deep Archive storage classes.
         *
         * `NONE` : No additional verification is done at the end of the transfer, but all data transmissions are integrity-checked with checksum verification during the transfer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-verifymode
         */
        readonly verifyMode?: string;
    }
    /**
     * Configures your AWS DataSync task to run on a [schedule](https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html) (at a minimum interval of 1 hour).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskschedule.html
     */
    interface TaskScheduleProperty {
        /**
         * Specifies your task schedule by using a cron expression in UTC time.
         *
         * For information about cron expression syntax, see the [*Amazon EventBridge User Guide*](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cron-expressions.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskschedule.html#cfn-datasync-task-taskschedule-scheduleexpression
         */
        readonly scheduleExpression?: string;
        /**
         * Specifies whether to enable or disable your task schedule.
         *
         * Your schedule is enabled by default, but there can be situations where you need to disable it. For example, you might need to perform maintenance on a storage system before you can begin a recurring DataSync transfer.
         *
         * DataSync might disable your schedule automatically if your task fails repeatedly with the same error. For more information, see the [*DataSync User Guide*](https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html#pause-task-schedule) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskschedule.html#cfn-datasync-task-taskschedule-status
         */
        readonly status?: string;
    }
    /**
     * Specifies how you want to configure a task report, which provides detailed information about for your AWS DataSync transfer.
     *
     * For more information, see [Task reports](https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskreportconfig.html
     */
    interface TaskReportConfigProperty {
        /**
         * Specifies the Amazon S3 bucket where DataSync uploads your task report.
         *
         * For more information, see [Task reports](https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html#task-report-access) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskreportconfig.html#cfn-datasync-task-taskreportconfig-destination
         */
        readonly destination: CfnTask.DestinationProperty | cdk.IResolvable;
        /**
         * Specifies whether your task report includes the new version of each object transferred into an S3 bucket.
         *
         * This only applies if you [enable versioning on your bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html) . Keep in mind that setting this to `INCLUDE` can increase the duration of your task execution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskreportconfig.html#cfn-datasync-task-taskreportconfig-objectversionids
         */
        readonly objectVersionIds?: string;
        /**
         * Specifies the type of task report that you want:.
         *
         * - `SUMMARY_ONLY` : Provides necessary details about your task, including the number of files, objects, and directories transferred and transfer duration.
         * - `STANDARD` : Provides complete details about your task, including a full list of files, objects, and directories that were transferred, skipped, verified, and more.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskreportconfig.html#cfn-datasync-task-taskreportconfig-outputtype
         */
        readonly outputType: string;
        /**
         * Customizes the reporting level for aspects of your task report.
         *
         * For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that DataSync attempted to delete in your destination location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskreportconfig.html#cfn-datasync-task-taskreportconfig-overrides
         */
        readonly overrides?: cdk.IResolvable | CfnTask.OverridesProperty;
        /**
         * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
         *
         * - `ERRORS_ONLY` : A report shows what DataSync was unable to transfer, skip, verify, and delete.
         * - `SUCCESSES_AND_ERRORS` : A report shows what DataSync was able and unable to transfer, skip, verify, and delete.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskreportconfig.html#cfn-datasync-task-taskreportconfig-reportlevel
         */
        readonly reportLevel?: string;
    }
    /**
     * Specifies where DataSync uploads your [task report](https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-destination.html
     */
    interface DestinationProperty {
        /**
         * Specifies the Amazon S3 bucket where DataSync uploads your task report.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-destination.html#cfn-datasync-task-destination-s3
         */
        readonly s3?: cdk.IResolvable | CfnTask.S3Property;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-s3.html
     */
    interface S3Property {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-s3.html#cfn-datasync-task-s3-bucketaccessrolearn
         */
        readonly bucketAccessRoleArn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-s3.html#cfn-datasync-task-s3-s3bucketarn
         */
        readonly s3BucketArn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-s3.html#cfn-datasync-task-s3-subdirectory
         */
        readonly subdirectory?: string;
    }
    /**
     * Customizes the reporting level for aspects of your task report.
     *
     * For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that DataSync attempted to delete in your destination location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-overrides.html
     */
    interface OverridesProperty {
        /**
         * Specifies the level of reporting for the files, objects, and directories that DataSync attempted to delete in your destination location.
         *
         * This only applies if you [configure your task](https://docs.aws.amazon.com/datasync/latest/userguide/configure-metadata.html) to delete data in the destination that isn't in the source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-overrides.html#cfn-datasync-task-overrides-deleted
         */
        readonly deleted?: CfnTask.DeletedProperty | cdk.IResolvable;
        /**
         * Specifies the level of reporting for the files, objects, and directories that DataSync attempted to skip during your transfer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-overrides.html#cfn-datasync-task-overrides-skipped
         */
        readonly skipped?: cdk.IResolvable | CfnTask.SkippedProperty;
        /**
         * Specifies the level of reporting for the files, objects, and directories that DataSync attempted to transfer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-overrides.html#cfn-datasync-task-overrides-transferred
         */
        readonly transferred?: cdk.IResolvable | CfnTask.TransferredProperty;
        /**
         * Specifies the level of reporting for the files, objects, and directories that DataSync attempted to verify during your transfer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-overrides.html#cfn-datasync-task-overrides-verified
         */
        readonly verified?: cdk.IResolvable | CfnTask.VerifiedProperty;
    }
    /**
     * The reporting level for the verified section of your DataSync task report.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-verified.html
     */
    interface VerifiedProperty {
        /**
         * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
         *
         * - `ERRORS_ONLY` : A report shows what DataSync was unable to verify.
         * - `SUCCESSES_AND_ERRORS` : A report shows what DataSync was able and unable to verify.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-verified.html#cfn-datasync-task-verified-reportlevel
         */
        readonly reportLevel?: string;
    }
    /**
     * The reporting level for the skipped section of your DataSync task report.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-skipped.html
     */
    interface SkippedProperty {
        /**
         * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
         *
         * - `ERRORS_ONLY` : A report shows what DataSync was unable to skip.
         * - `SUCCESSES_AND_ERRORS` : A report shows what DataSync was able and unable to skip.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-skipped.html#cfn-datasync-task-skipped-reportlevel
         */
        readonly reportLevel?: string;
    }
    /**
     * The reporting level for the transferred section of your DataSync task report.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-transferred.html
     */
    interface TransferredProperty {
        /**
         * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
         *
         * - `ERRORS_ONLY` : A report shows what DataSync was unable to transfer.
         * - `SUCCESSES_AND_ERRORS` : A report shows what DataSync was able and unable to transfer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-transferred.html#cfn-datasync-task-transferred-reportlevel
         */
        readonly reportLevel?: string;
    }
    /**
     * The reporting level for the deleted section of your DataSync task report.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-deleted.html
     */
    interface DeletedProperty {
        /**
         * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
         *
         * - `ERRORS_ONLY` : A report shows what DataSync was unable to delete.
         * - `SUCCESSES_AND_ERRORS` : A report shows what DataSync was able and unable to delete.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-deleted.html#cfn-datasync-task-deleted-reportlevel
         */
        readonly reportLevel?: string;
    }
    /**
     * Configures a manifest, which is a list of files or objects that you want AWS DataSync to transfer.
     *
     * For more information and configuration examples, see [Specifying what DataSync transfers by using a manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfig.html
     */
    interface ManifestConfigProperty {
        /**
         * Specifies what DataSync uses the manifest for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfig.html#cfn-datasync-task-manifestconfig-action
         */
        readonly action?: string;
        /**
         * Specifies the file format of your manifest.
         *
         * For more information, see [Creating a manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html#transferring-with-manifest-create) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfig.html#cfn-datasync-task-manifestconfig-format
         */
        readonly format?: string;
        /**
         * Specifies the manifest that you want DataSync to use and where it's hosted.
         *
         * > You must specify this parameter if you're configuring a new manifest on or after February 7, 2024.
         * >
         * > If you don't, you'll get a 400 status code and `ValidationException` error stating that you're missing the IAM role for DataSync to access the S3 bucket where you're hosting your manifest. For more information, see [Providing DataSync access to your manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html#transferring-with-manifest-access) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfig.html#cfn-datasync-task-manifestconfig-source
         */
        readonly source: cdk.IResolvable | CfnTask.SourceProperty;
    }
    /**
     * Specifies the manifest that you want AWS DataSync to use and where it's hosted.
     *
     * For more information and configuration examples, see [Specifying what DataSync transfers by using a manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-source.html
     */
    interface SourceProperty {
        /**
         * Specifies the S3 bucket where you're hosting your manifest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-source.html#cfn-datasync-task-source-s3
         */
        readonly s3?: cdk.IResolvable | CfnTask.ManifestConfigSourceS3Property;
    }
    /**
     * Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.
     *
     * For more information and configuration examples, see [Specifying what DataSync transfers by using a manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfigsources3.html
     */
    interface ManifestConfigSourceS3Property {
        /**
         * Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest.
         *
         * For more information, see [Providing DataSync access to your manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html#transferring-with-manifest-access) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfigsources3.html#cfn-datasync-task-manifestconfigsources3-bucketaccessrolearn
         */
        readonly bucketAccessRoleArn?: string;
        /**
         * Specifies the Amazon S3 object key of your manifest.
         *
         * This can include a prefix (for example, `prefix/my-manifest.csv` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfigsources3.html#cfn-datasync-task-manifestconfigsources3-manifestobjectpath
         */
        readonly manifestObjectPath?: string;
        /**
         * Specifies the object version ID of the manifest that you want DataSync to use.
         *
         * If you don't set this, DataSync uses the latest version of the object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfigsources3.html#cfn-datasync-task-manifestconfigsources3-manifestobjectversionid
         */
        readonly manifestObjectVersionId?: string;
        /**
         * Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfigsources3.html#cfn-datasync-task-manifestconfigsources3-s3bucketarn
         */
        readonly s3BucketArn?: string;
    }
}
/**
 * Properties for defining a `CfnTask`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html
 */
export interface CfnTaskProps {
    /**
     * Specifies the Amazon Resource Name (ARN) of an Amazon CloudWatch log group for monitoring your task.
     *
     * For more information, see [Monitoring DataSync with Amazon CloudWatch](https://docs.aws.amazon.com/datasync/latest/userguide/monitor-datasync.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-cloudwatchloggrouparn
     */
    readonly cloudWatchLogGroupArn?: string;
    /**
     * The Amazon Resource Name (ARN) of an AWS storage resource's location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-destinationlocationarn
     */
    readonly destinationLocationArn: string;
    /**
     * Specifies exclude filters that define the files, objects, and folders in your source location that you don't want DataSync to transfer.
     *
     * For more information and examples, see [Specifying what DataSync transfers by using filters](https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-excludes
     */
    readonly excludes?: Array<CfnTask.FilterRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies include filters define the files, objects, and folders in your source location that you want DataSync to transfer.
     *
     * For more information and examples, see [Specifying what DataSync transfers by using filters](https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-includes
     */
    readonly includes?: Array<CfnTask.FilterRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The configuration of the manifest that lists the files or objects that you want DataSync to transfer.
     *
     * For more information, see [Specifying what DataSync transfers by using a manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-manifestconfig
     */
    readonly manifestConfig?: cdk.IResolvable | CfnTask.ManifestConfigProperty;
    /**
     * Specifies the name of your task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-name
     */
    readonly name?: string;
    /**
     * Specifies your task's settings, such as preserving file metadata, verifying data integrity, among other options.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options
     */
    readonly options?: cdk.IResolvable | CfnTask.OptionsProperty;
    /**
     * Specifies a schedule for when you want your task to run.
     *
     * For more information, see [Scheduling your task](https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-schedule
     */
    readonly schedule?: cdk.IResolvable | CfnTask.TaskScheduleProperty;
    /**
     * Specifies the ARN of your transfer's source location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-sourcelocationarn
     */
    readonly sourceLocationArn: string;
    /**
     * Specifies the tags that you want to apply to your task.
     *
     * *Tags* are key-value pairs that help you manage, filter, and search for your DataSync resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies how you want to configure a task report, which provides detailed information about your DataSync transfer.
     *
     * For more information, see [Monitoring your DataSync transfers with task reports](https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html) .
     *
     * When using this parameter, your caller identity (the role that you're using DataSync with) must have the `iam:PassRole` permission. The [AWSDataSyncFullAccess](https://docs.aws.amazon.com/datasync/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-awsdatasyncfullaccess) policy includes this permission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskreportconfig
     */
    readonly taskReportConfig?: cdk.IResolvable | CfnTask.TaskReportConfigProperty;
}
