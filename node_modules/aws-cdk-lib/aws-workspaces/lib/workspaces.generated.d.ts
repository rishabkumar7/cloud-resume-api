import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::WorkSpaces::ConnectionAlias` resource specifies a connection alias.
 *
 * Connection aliases are used for cross-Region redirection. For more information, see [Cross-Region Redirection for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html) .
 *
 * @cloudformationResource AWS::WorkSpaces::ConnectionAlias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html
 */
export declare class CfnConnectionAlias extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnectionAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnectionAlias;
    /**
     * The identifier of the connection alias, returned as a string.
     *
     * @cloudformationAttribute AliasId
     */
    readonly attrAliasId: string;
    /**
     * The association status of the connection alias.
     *
     * @cloudformationAttribute Associations
     */
    readonly attrAssociations: cdk.IResolvable;
    /**
     * The current state of the connection alias, returned as a string.
     *
     * @cloudformationAttribute ConnectionAliasState
     */
    readonly attrConnectionAliasState: string;
    /**
     * The connection string specified for the connection alias.
     */
    connectionString: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to associate with the connection alias.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConnectionAliasProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConnectionAlias {
    /**
     * Describes a connection alias association that is used for cross-Region redirection.
     *
     * For more information, see [Cross-Region Redirection for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-connectionalias-connectionaliasassociation.html
     */
    interface ConnectionAliasAssociationProperty {
        /**
         * The identifier of the AWS account that associated the connection alias with a directory.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-connectionalias-connectionaliasassociation.html#cfn-workspaces-connectionalias-connectionaliasassociation-associatedaccountid
         */
        readonly associatedAccountId?: string;
        /**
         * The association status of the connection alias.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-connectionalias-connectionaliasassociation.html#cfn-workspaces-connectionalias-connectionaliasassociation-associationstatus
         */
        readonly associationStatus?: string;
        /**
         * The identifier of the connection alias association.
         *
         * You use the connection identifier in the DNS TXT record when you're configuring your DNS routing policies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-connectionalias-connectionaliasassociation.html#cfn-workspaces-connectionalias-connectionaliasassociation-connectionidentifier
         */
        readonly connectionIdentifier?: string;
        /**
         * The identifier of the directory associated with a connection alias.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-connectionalias-connectionaliasassociation.html#cfn-workspaces-connectionalias-connectionaliasassociation-resourceid
         */
        readonly resourceId?: string;
    }
}
/**
 * Properties for defining a `CfnConnectionAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html
 */
export interface CfnConnectionAliasProps {
    /**
     * The connection string specified for the connection alias.
     *
     * The connection string must be in the form of a fully qualified domain name (FQDN), such as `www.example.com` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html#cfn-workspaces-connectionalias-connectionstring
     */
    readonly connectionString: string;
    /**
     * The tags to associate with the connection alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html#cfn-workspaces-connectionalias-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::WorkSpaces::Workspace` resource specifies a WorkSpace.
 *
 * Updates are not supported for the `BundleId` , `RootVolumeEncryptionEnabled` , `UserVolumeEncryptionEnabled` , or `VolumeEncryptionKey` properties. To update these properties, you must also update a property that triggers a replacement, such as the `UserName` property.
 *
 * @cloudformationResource AWS::WorkSpaces::Workspace
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html
 */
export declare class CfnWorkspace extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkspace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkspace;
    /**
     * The identifier of the WorkSpace, returned as a string.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The identifier of the bundle for the WorkSpace.
     */
    bundleId: string;
    /**
     * The identifier of the AWS Directory Service directory for the WorkSpace.
     */
    directoryId: string;
    /**
     * Indicates whether the data stored on the root volume is encrypted.
     */
    rootVolumeEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags for the WorkSpace.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The user name of the user for the WorkSpace.
     */
    userName: string;
    /**
     * Indicates whether the data stored on the user volume is encrypted.
     */
    userVolumeEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * The symmetric AWS KMS key used to encrypt data stored on your WorkSpace.
     */
    volumeEncryptionKey?: string;
    /**
     * The WorkSpace properties.
     */
    workspaceProperties?: cdk.IResolvable | CfnWorkspace.WorkspacePropertiesProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWorkspaceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWorkspace {
    /**
     * Information about a WorkSpace.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspace-workspaceproperties.html
     */
    interface WorkspacePropertiesProperty {
        /**
         * The compute type.
         *
         * For more information, see [Amazon WorkSpaces Bundles](https://docs.aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspace-workspaceproperties.html#cfn-workspaces-workspace-workspaceproperties-computetypename
         */
        readonly computeTypeName?: string;
        /**
         * The size of the root volume.
         *
         * For important information about how to modify the size of the root and user volumes, see [Modify a WorkSpace](https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspace-workspaceproperties.html#cfn-workspaces-workspace-workspaceproperties-rootvolumesizegib
         */
        readonly rootVolumeSizeGib?: number;
        /**
         * The running mode.
         *
         * For more information, see [Manage the WorkSpace Running Mode](https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspace-workspaceproperties.html#cfn-workspaces-workspace-workspaceproperties-runningmode
         */
        readonly runningMode?: string;
        /**
         * The time after a user logs off when WorkSpaces are automatically stopped.
         *
         * Configured in 60-minute intervals.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspace-workspaceproperties.html#cfn-workspaces-workspace-workspaceproperties-runningmodeautostoptimeoutinminutes
         */
        readonly runningModeAutoStopTimeoutInMinutes?: number;
        /**
         * The size of the user storage.
         *
         * For important information about how to modify the size of the root and user volumes, see [Modify a WorkSpace](https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspace-workspaceproperties.html#cfn-workspaces-workspace-workspaceproperties-uservolumesizegib
         */
        readonly userVolumeSizeGib?: number;
    }
}
/**
 * Properties for defining a `CfnWorkspace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html
 */
export interface CfnWorkspaceProps {
    /**
     * The identifier of the bundle for the WorkSpace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-bundleid
     */
    readonly bundleId: string;
    /**
     * The identifier of the AWS Directory Service directory for the WorkSpace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-directoryid
     */
    readonly directoryId: string;
    /**
     * Indicates whether the data stored on the root volume is encrypted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-rootvolumeencryptionenabled
     */
    readonly rootVolumeEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * The tags for the WorkSpace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The user name of the user for the WorkSpace.
     *
     * This user name must exist in the AWS Directory Service directory for the WorkSpace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-username
     */
    readonly userName: string;
    /**
     * Indicates whether the data stored on the user volume is encrypted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-uservolumeencryptionenabled
     */
    readonly userVolumeEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * The symmetric AWS KMS key used to encrypt data stored on your WorkSpace.
     *
     * Amazon WorkSpaces does not support asymmetric KMS keys.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-volumeencryptionkey
     */
    readonly volumeEncryptionKey?: string;
    /**
     * The WorkSpace properties.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-workspaceproperties
     */
    readonly workspaceProperties?: cdk.IResolvable | CfnWorkspace.WorkspacePropertiesProperty;
}
/**
 * Describes a pool of WorkSpaces.
 *
 * @cloudformationResource AWS::WorkSpaces::WorkspacesPool
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html
 */
export declare class CfnWorkspacesPool extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkspacesPool from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkspacesPool;
    /**
     * The time the pool was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) for the pool.
     *
     * @cloudformationAttribute PoolArn
     */
    readonly attrPoolArn: string;
    /**
     * The identifier of the pool.
     *
     * @cloudformationAttribute PoolId
     */
    readonly attrPoolId: string;
    /**
     * The persistent application settings for users of the pool.
     */
    applicationSettings?: CfnWorkspacesPool.ApplicationSettingsProperty | cdk.IResolvable;
    /**
     * The identifier of the bundle used by the pool.
     */
    bundleId: string;
    /**
     * Describes the user capacity for the pool.
     */
    capacity: CfnWorkspacesPool.CapacityProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the pool.
     */
    description?: string;
    /**
     * The identifier of the directory used by the pool.
     */
    directoryId: string;
    /**
     * The name of the pool.
     */
    poolName: string;
    /**
     * The tags for the pool.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The amount of time that a pool session remains active after users disconnect.
     */
    timeoutSettings?: cdk.IResolvable | CfnWorkspacesPool.TimeoutSettingsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWorkspacesPoolProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWorkspacesPool {
    /**
     * Describes the user capacity for the pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-capacity.html
     */
    interface CapacityProperty {
        /**
         * The desired number of user sessions for the WorkSpaces in the pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-capacity.html#cfn-workspaces-workspacespool-capacity-desiredusersessions
         */
        readonly desiredUserSessions: number;
    }
    /**
     * The persistent application settings for users in the pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-applicationsettings.html
     */
    interface ApplicationSettingsProperty {
        /**
         * The path prefix for the S3 bucket where users’ persistent application settings are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-applicationsettings.html#cfn-workspaces-workspacespool-applicationsettings-settingsgroup
         */
        readonly settingsGroup?: string;
        /**
         * Enables or disables persistent application settings for users during their pool sessions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-applicationsettings.html#cfn-workspaces-workspacespool-applicationsettings-status
         */
        readonly status: string;
    }
    /**
     * Describes the timeout settings for the pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-timeoutsettings.html
     */
    interface TimeoutSettingsProperty {
        /**
         * Specifies the amount of time, in seconds, that a streaming session remains active after users disconnect.
         *
         * If users try to reconnect to the streaming session after a disconnection or network interruption within the time set, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-timeoutsettings.html#cfn-workspaces-workspacespool-timeoutsettings-disconnecttimeoutinseconds
         */
        readonly disconnectTimeoutInSeconds?: number;
        /**
         * The amount of time in seconds a connection will stay active while idle.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-timeoutsettings.html#cfn-workspaces-workspacespool-timeoutsettings-idledisconnecttimeoutinseconds
         */
        readonly idleDisconnectTimeoutInSeconds?: number;
        /**
         * Specifies the maximum amount of time, in seconds, that a streaming session can remain active.
         *
         * If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-timeoutsettings.html#cfn-workspaces-workspacespool-timeoutsettings-maxuserdurationinseconds
         */
        readonly maxUserDurationInSeconds?: number;
    }
}
/**
 * Properties for defining a `CfnWorkspacesPool`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html
 */
export interface CfnWorkspacesPoolProps {
    /**
     * The persistent application settings for users of the pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-applicationsettings
     */
    readonly applicationSettings?: CfnWorkspacesPool.ApplicationSettingsProperty | cdk.IResolvable;
    /**
     * The identifier of the bundle used by the pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-bundleid
     */
    readonly bundleId: string;
    /**
     * Describes the user capacity for the pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-capacity
     */
    readonly capacity: CfnWorkspacesPool.CapacityProperty | cdk.IResolvable;
    /**
     * The description of the pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-description
     */
    readonly description?: string;
    /**
     * The identifier of the directory used by the pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-directoryid
     */
    readonly directoryId: string;
    /**
     * The name of the pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-poolname
     */
    readonly poolName: string;
    /**
     * The tags for the pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The amount of time that a pool session remains active after users disconnect.
     *
     * If they try to reconnect to the pool session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new pool instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-timeoutsettings
     */
    readonly timeoutSettings?: cdk.IResolvable | CfnWorkspacesPool.TimeoutSettingsProperty;
}
