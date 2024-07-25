import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified AWS IoT SiteWise Monitor portal or project resource.
 *
 * @cloudformationResource AWS::IoTSiteWise::AccessPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html
 */
export declare class CfnAccessPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccessPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccessPolicy;
    /**
     * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the access policy, which has the following format.
     *
     * `arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}`
     *
     * @cloudformationAttribute AccessPolicyArn
     */
    readonly attrAccessPolicyArn: string;
    /**
     * The ID of the access policy.
     *
     * @cloudformationAttribute AccessPolicyId
     */
    readonly attrAccessPolicyId: string;
    /**
     * The identity for this access policy.
     */
    accessPolicyIdentity: CfnAccessPolicy.AccessPolicyIdentityProperty | cdk.IResolvable;
    /**
     * The permission level for this access policy.
     */
    accessPolicyPermission: string;
    /**
     * The AWS IoT SiteWise Monitor resource for this access policy.
     */
    accessPolicyResource: CfnAccessPolicy.AccessPolicyResourceProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccessPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAccessPolicy {
    /**
     * The AWS IoT SiteWise Monitor resource for this access policy.
     *
     * Choose either a portal or a project.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyresource.html
     */
    interface AccessPolicyResourceProperty {
        /**
         * Identifies an AWS IoT SiteWise Monitor portal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyresource.html#cfn-iotsitewise-accesspolicy-accesspolicyresource-portal
         */
        readonly portal?: cdk.IResolvable | CfnAccessPolicy.PortalProperty;
        /**
         * Identifies a specific AWS IoT SiteWise Monitor project.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyresource.html#cfn-iotsitewise-accesspolicy-accesspolicyresource-project
         */
        readonly project?: cdk.IResolvable | CfnAccessPolicy.ProjectProperty;
    }
    /**
     * Identifies a specific AWS IoT SiteWise Monitor project.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-project.html
     */
    interface ProjectProperty {
        /**
         * The ID of the project.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-project.html#cfn-iotsitewise-accesspolicy-project-id
         */
        readonly id?: string;
    }
    /**
     * Identifies an AWS IoT SiteWise Monitor portal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-portal.html
     */
    interface PortalProperty {
        /**
         * The ID of the portal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-portal.html#cfn-iotsitewise-accesspolicy-portal-id
         */
        readonly id?: string;
    }
    /**
     * The identity (IAM Identity Center user, IAM Identity Center group, or IAM user) to which this access policy applies.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyidentity.html
     */
    interface AccessPolicyIdentityProperty {
        /**
         * An IAM role identity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyidentity.html#cfn-iotsitewise-accesspolicy-accesspolicyidentity-iamrole
         */
        readonly iamRole?: CfnAccessPolicy.IamRoleProperty | cdk.IResolvable;
        /**
         * An IAM user identity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyidentity.html#cfn-iotsitewise-accesspolicy-accesspolicyidentity-iamuser
         */
        readonly iamUser?: CfnAccessPolicy.IamUserProperty | cdk.IResolvable;
        /**
         * An IAM Identity Center user identity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyidentity.html#cfn-iotsitewise-accesspolicy-accesspolicyidentity-user
         */
        readonly user?: cdk.IResolvable | CfnAccessPolicy.UserProperty;
    }
    /**
     * Contains information for a user identity in an access policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-user.html
     */
    interface UserProperty {
        /**
         * The IAM Identity Center ID of the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-user.html#cfn-iotsitewise-accesspolicy-user-id
         */
        readonly id?: string;
    }
    /**
     * Contains information about an AWS Identity and Access Management user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-iamuser.html
     */
    interface IamUserProperty {
        /**
         * The ARN of the IAM user. For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide* .
         *
         * > If you delete the IAM user, access policies that contain this identity include an empty `arn` . You can delete the access policy for the IAM user that no longer exists.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-iamuser.html#cfn-iotsitewise-accesspolicy-iamuser-arn
         */
        readonly arn?: string;
    }
    /**
     * Contains information about an AWS Identity and Access Management role.
     *
     * For more information, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) in the *IAM User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-iamrole.html
     */
    interface IamRoleProperty {
        /**
         * The ARN of the IAM role.
         *
         * For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-iamrole.html#cfn-iotsitewise-accesspolicy-iamrole-arn
         */
        readonly arn?: string;
    }
}
/**
 * Properties for defining a `CfnAccessPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html
 */
export interface CfnAccessPolicyProps {
    /**
     * The identity for this access policy.
     *
     * Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html#cfn-iotsitewise-accesspolicy-accesspolicyidentity
     */
    readonly accessPolicyIdentity: CfnAccessPolicy.AccessPolicyIdentityProperty | cdk.IResolvable;
    /**
     * The permission level for this access policy.
     *
     * Note that a project `ADMINISTRATOR` is also known as a project owner.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html#cfn-iotsitewise-accesspolicy-accesspolicypermission
     */
    readonly accessPolicyPermission: string;
    /**
     * The AWS IoT SiteWise Monitor resource for this access policy.
     *
     * Choose either a portal or a project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html#cfn-iotsitewise-accesspolicy-accesspolicyresource
     */
    readonly accessPolicyResource: CfnAccessPolicy.AccessPolicyResourceProperty | cdk.IResolvable;
}
/**
 * Creates an asset from an existing asset model.
 *
 * For more information, see [Creating assets](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html) in the *AWS IoT SiteWise User Guide* .
 *
 * @cloudformationResource AWS::IoTSiteWise::Asset
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html
 */
export declare class CfnAsset extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAsset from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAsset;
    /**
     * The ARN of the asset.
     *
     * @cloudformationAttribute AssetArn
     */
    readonly attrAssetArn: string;
    /**
     * The ID of the asset.
     *
     * @cloudformationAttribute AssetId
     */
    readonly attrAssetId: string;
    /**
     * The ID of the asset, in UUID format.
     */
    assetDescription?: string;
    /**
     * The external ID of the asset model composite model.
     */
    assetExternalId?: string;
    /**
     * A list of asset hierarchies that each contain a `hierarchyId` .
     */
    assetHierarchies?: Array<CfnAsset.AssetHierarchyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The ID of the asset model from which to create the asset.
     */
    assetModelId: string;
    /**
     * A friendly name for the asset.
     */
    assetName: string;
    /**
     * The list of asset properties for the asset.
     */
    assetProperties?: Array<CfnAsset.AssetPropertyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs that contain metadata for the asset.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAssetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAsset {
    /**
     * Contains asset property information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assetproperty.html
     */
    interface AssetPropertyProperty {
        /**
         * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature` ).
         *
         * For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assetproperty.html#cfn-iotsitewise-asset-assetproperty-alias
         */
        readonly alias?: string;
        /**
         * The external ID of the property.
         *
         * For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assetproperty.html#cfn-iotsitewise-asset-assetproperty-externalid
         */
        readonly externalId?: string;
        /**
         * The ID of the asset property.
         *
         * > This is a return value and can't be set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assetproperty.html#cfn-iotsitewise-asset-assetproperty-id
         */
        readonly id?: string;
        /**
         * The `LogicalID` of the asset property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assetproperty.html#cfn-iotsitewise-asset-assetproperty-logicalid
         */
        readonly logicalId?: string;
        /**
         * The MQTT notification state (enabled or disabled) for this asset property.
         *
         * When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see [Interacting with other services](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html) in the *AWS IoT SiteWise User Guide* .
         *
         * If you omit this parameter, the notification state is set to `DISABLED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assetproperty.html#cfn-iotsitewise-asset-assetproperty-notificationstate
         */
        readonly notificationState?: string;
        /**
         * The unit (such as `Newtons` or `RPM` ) of the asset property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assetproperty.html#cfn-iotsitewise-asset-assetproperty-unit
         */
        readonly unit?: string;
    }
    /**
     * Describes an asset hierarchy that contains a hierarchy's name and ID.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assethierarchy.html
     */
    interface AssetHierarchyProperty {
        /**
         * The Id of the child asset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assethierarchy.html#cfn-iotsitewise-asset-assethierarchy-childassetid
         */
        readonly childAssetId: string;
        /**
         * The external ID of the hierarchy, if it has one.
         *
         * When you update an asset hierarchy, you may assign an external ID if it doesn't already have one. You can't change the external ID of an asset hierarchy that already has one. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assethierarchy.html#cfn-iotsitewise-asset-assethierarchy-externalid
         */
        readonly externalId?: string;
        /**
         * The ID of the hierarchy. This ID is a `hierarchyId` .
         *
         * > This is a return value and can't be set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assethierarchy.html#cfn-iotsitewise-asset-assethierarchy-id
         */
        readonly id?: string;
        /**
         * The ID of the hierarchy.
         *
         * This ID is a `hierarchyId` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assethierarchy.html#cfn-iotsitewise-asset-assethierarchy-logicalid
         */
        readonly logicalId?: string;
    }
}
/**
 * Properties for defining a `CfnAsset`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html
 */
export interface CfnAssetProps {
    /**
     * The ID of the asset, in UUID format.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html#cfn-iotsitewise-asset-assetdescription
     */
    readonly assetDescription?: string;
    /**
     * The external ID of the asset model composite model.
     *
     * For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html#cfn-iotsitewise-asset-assetexternalid
     */
    readonly assetExternalId?: string;
    /**
     * A list of asset hierarchies that each contain a `hierarchyId` .
     *
     * A hierarchy specifies allowed parent/child asset relationships.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html#cfn-iotsitewise-asset-assethierarchies
     */
    readonly assetHierarchies?: Array<CfnAsset.AssetHierarchyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The ID of the asset model from which to create the asset.
     *
     * This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html#cfn-iotsitewise-asset-assetmodelid
     */
    readonly assetModelId: string;
    /**
     * A friendly name for the asset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html#cfn-iotsitewise-asset-assetname
     */
    readonly assetName: string;
    /**
     * The list of asset properties for the asset.
     *
     * This object doesn't include properties that you define in composite models. You can find composite model properties in the `assetCompositeModels` object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html#cfn-iotsitewise-asset-assetproperties
     */
    readonly assetProperties?: Array<CfnAsset.AssetPropertyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of key-value pairs that contain metadata for the asset.
     *
     * For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html#cfn-iotsitewise-asset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an asset model from specified property and hierarchy definitions.
 *
 * You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see [Defining asset models](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html) in the *AWS IoT SiteWise User Guide* .
 *
 * You can create two types of asset models, `ASSET_MODEL` or `COMPONENT_MODEL` .
 *
 * - *ASSET_MODEL* – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.
 * - *COMPONENT_MODEL* – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.
 *
 * @cloudformationResource AWS::IoTSiteWise::AssetModel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html
 */
export declare class CfnAssetModel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAssetModel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAssetModel;
    /**
     * The ARN of the asset model, which has the following format.
     *
     * @cloudformationAttribute AssetModelArn
     */
    readonly attrAssetModelArn: string;
    /**
     * The ID of the asset model.
     *
     * @cloudformationAttribute AssetModelId
     */
    readonly attrAssetModelId: string;
    /**
     * The composite models that are part of this asset model.
     */
    assetModelCompositeModels?: Array<CfnAssetModel.AssetModelCompositeModelProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A description for the asset model.
     */
    assetModelDescription?: string;
    /**
     * The external ID of the asset model.
     */
    assetModelExternalId?: string;
    /**
     * The hierarchy definitions of the asset model.
     */
    assetModelHierarchies?: Array<CfnAssetModel.AssetModelHierarchyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A unique, friendly name for the asset model.
     */
    assetModelName: string;
    /**
     * The property definitions of the asset model.
     */
    assetModelProperties?: Array<CfnAssetModel.AssetModelPropertyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The type of asset model.
     */
    assetModelType?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs that contain metadata for the asset.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAssetModelProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAssetModel {
    /**
     * Contains information about a composite model in an asset model.
     *
     * This object contains the asset property definitions that you define in the composite model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html
     */
    interface AssetModelCompositeModelProperty {
        /**
         * The ID of a component model which is reused to create this composite model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-composedassetmodelid
         */
        readonly composedAssetModelId?: string;
        /**
         * The asset property definitions for this composite model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-compositemodelproperties
         */
        readonly compositeModelProperties?: Array<CfnAssetModel.AssetModelPropertyProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The description of the composite model.
         *
         * > If the composite model is a `component-model-based` composite model, the description is inherited from the `COMPONENT_MODEL` asset model and cannot be changed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-description
         */
        readonly description?: string;
        /**
         * The external ID of a composite model on this asset model.
         *
         * For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * > One of `ExternalId` or `Path` must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-externalid
         */
        readonly externalId?: string;
        /**
         * The ID of the asset model composite model.
         *
         * > This is a return value and can't be set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-id
         */
        readonly id?: string;
        /**
         * The name of the composite model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-name
         */
        readonly name: string;
        /**
         * The external ID of the parent composite model.
         *
         * For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-parentassetmodelcompositemodelexternalid
         */
        readonly parentAssetModelCompositeModelExternalId?: string;
        /**
         * The structured path to the property from the root of the asset using property names.
         *
         * Path is used as the ID if the asset model is a derived composite model.
         *
         * > One of `ExternalId` or `Path` must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-path
         */
        readonly path?: Array<string>;
        /**
         * The type of the composite model.
         *
         * For alarm composite models, this type is `AWS/ALARM` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-type
         */
        readonly type: string;
    }
    /**
     * Contains information about an asset model property.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html
     */
    interface AssetModelPropertyProperty {
        /**
         * The data type of the asset model property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html#cfn-iotsitewise-assetmodel-assetmodelproperty-datatype
         */
        readonly dataType: string;
        /**
         * The data type of the structure for this property.
         *
         * This parameter exists on properties that have the `STRUCT` data type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html#cfn-iotsitewise-assetmodel-assetmodelproperty-datatypespec
         */
        readonly dataTypeSpec?: string;
        /**
         * The external ID of the asset property.
         *
         * For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * > One of `ExternalId` or `LogicalId` must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html#cfn-iotsitewise-assetmodel-assetmodelproperty-externalid
         */
        readonly externalId?: string;
        /**
         * The ID of the property.
         *
         * > This is a return value and can't be set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html#cfn-iotsitewise-assetmodel-assetmodelproperty-id
         */
        readonly id?: string;
        /**
         * The `LogicalID` of the asset model property.
         *
         * > One of `ExternalId` or `LogicalId` must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html#cfn-iotsitewise-assetmodel-assetmodelproperty-logicalid
         */
        readonly logicalId?: string;
        /**
         * The name of the asset model property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html#cfn-iotsitewise-assetmodel-assetmodelproperty-name
         */
        readonly name: string;
        /**
         * Contains a property type, which can be one of `attribute` , `measurement` , `metric` , or `transform` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html#cfn-iotsitewise-assetmodel-assetmodelproperty-type
         */
        readonly type: cdk.IResolvable | CfnAssetModel.PropertyTypeProperty;
        /**
         * The unit of the asset model property, such as `Newtons` or `RPM` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html#cfn-iotsitewise-assetmodel-assetmodelproperty-unit
         */
        readonly unit?: string;
    }
    /**
     * Contains a property type, which can be one of `attribute` , `measurement` , `metric` , or `transform` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-propertytype.html
     */
    interface PropertyTypeProperty {
        /**
         * Specifies an asset attribute property.
         *
         * An attribute generally contains static information, such as the serial number of an [IIoT](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications) wind turbine.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-propertytype.html#cfn-iotsitewise-assetmodel-propertytype-attribute
         */
        readonly attribute?: CfnAssetModel.AttributeProperty | cdk.IResolvable;
        /**
         * Specifies an asset metric property.
         *
         * A metric contains a mathematical expression that uses aggregate functions to process all input data points over a time interval and output a single data point, such as to calculate the average hourly temperature.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-propertytype.html#cfn-iotsitewise-assetmodel-propertytype-metric
         */
        readonly metric?: cdk.IResolvable | CfnAssetModel.MetricProperty;
        /**
         * Specifies an asset transform property.
         *
         * A transform contains a mathematical expression that maps a property's data points from one form to another, such as a unit conversion from Celsius to Fahrenheit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-propertytype.html#cfn-iotsitewise-assetmodel-propertytype-transform
         */
        readonly transform?: cdk.IResolvable | CfnAssetModel.TransformProperty;
        /**
         * The type of property type, which can be one of `Attribute` , `Measurement` , `Metric` , or `Transform` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-propertytype.html#cfn-iotsitewise-assetmodel-propertytype-typename
         */
        readonly typeName: string;
    }
    /**
     * Contains an asset attribute property.
     *
     * For more information, see [Attributes](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes) in the *AWS IoT SiteWise User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-attribute.html
     */
    interface AttributeProperty {
        /**
         * The default value of the asset model property attribute.
         *
         * All assets that you create from the asset model contain this attribute value. You can update an attribute's value after you create an asset. For more information, see [Updating attribute values](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-attribute-values.html) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-attribute.html#cfn-iotsitewise-assetmodel-attribute-defaultvalue
         */
        readonly defaultValue?: string;
    }
    /**
     * Contains an asset metric property.
     *
     * With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).
     *
     * The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a *root* metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of `DOUBLE` and consume properties with data types of `INTEGER` or `DOUBLE` .
     *
     * For more information, see [Metrics](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics) in the *AWS IoT SiteWise User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metric.html
     */
    interface MetricProperty {
        /**
         * The mathematical expression that defines the metric aggregation function.
         *
         * You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.
         *
         * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metric.html#cfn-iotsitewise-assetmodel-metric-expression
         */
        readonly expression: string;
        /**
         * The list of variables used in the expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metric.html#cfn-iotsitewise-assetmodel-metric-variables
         */
        readonly variables: Array<CfnAssetModel.ExpressionVariableProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression.
         *
         * AWS IoT SiteWise computes one data point per `window` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metric.html#cfn-iotsitewise-assetmodel-metric-window
         */
        readonly window: cdk.IResolvable | CfnAssetModel.MetricWindowProperty;
    }
    /**
     * Contains expression variable information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-expressionvariable.html
     */
    interface ExpressionVariableProperty {
        /**
         * The friendly name of the variable to be used in the expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-expressionvariable.html#cfn-iotsitewise-assetmodel-expressionvariable-name
         */
        readonly name: string;
        /**
         * The variable that identifies an asset property from which to use values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-expressionvariable.html#cfn-iotsitewise-assetmodel-expressionvariable-value
         */
        readonly value: cdk.IResolvable | CfnAssetModel.VariableValueProperty;
    }
    /**
     * Identifies a property value used in an expression.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html
     */
    interface VariableValueProperty {
        /**
         * The external ID of the hierarchy being referenced.
         *
         * For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html#cfn-iotsitewise-assetmodel-variablevalue-hierarchyexternalid
         */
        readonly hierarchyExternalId?: string;
        /**
         * The ID of the hierarchy to query for the property ID.
         *
         * You can use the hierarchy's name instead of the hierarchy's ID. If the hierarchy has an external ID, you can specify `externalId:` followed by the external ID. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * You use a hierarchy ID instead of a model ID because you can have several hierarchies using the same model and therefore the same `propertyId` . For example, you might have separately grouped assets that come from the same asset model. For more information, see [Asset hierarchies](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html#cfn-iotsitewise-assetmodel-variablevalue-hierarchyid
         */
        readonly hierarchyId?: string;
        /**
         * The `LogicalID` of the hierarchy to query for the `PropertyLogicalID` .
         *
         * You use a `hierarchyLogicalID` instead of a model ID because you can have several hierarchies using the same model and therefore the same property. For example, you might have separately grouped assets that come from the same asset model. For more information, see [Defining relationships between asset models (hierarchies)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html#cfn-iotsitewise-assetmodel-variablevalue-hierarchylogicalid
         */
        readonly hierarchyLogicalId?: string;
        /**
         * The external ID of the property being referenced.
         *
         * For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html#cfn-iotsitewise-assetmodel-variablevalue-propertyexternalid
         */
        readonly propertyExternalId?: string;
        /**
         * The ID of the property to use as the variable.
         *
         * You can use the property `name` if it's from the same asset model. If the property has an external ID, you can specify `externalId:` followed by the external ID. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * > This is a return value and can't be set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html#cfn-iotsitewise-assetmodel-variablevalue-propertyid
         */
        readonly propertyId?: string;
        /**
         * The `LogicalID` of the property that is being referenced.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html#cfn-iotsitewise-assetmodel-variablevalue-propertylogicalid
         */
        readonly propertyLogicalId?: string;
        /**
         * The path of the property.
         *
         * Each step of the path is the name of the step. See the following example:
         *
         * `PropertyPath: Name: AssetModelName Name: Composite1 Name: NestedComposite`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html#cfn-iotsitewise-assetmodel-variablevalue-propertypath
         */
        readonly propertyPath?: Array<cdk.IResolvable | CfnAssetModel.PropertyPathDefinitionProperty> | cdk.IResolvable;
    }
    /**
     * Represents one level between a composite model and the root of the asset model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-propertypathdefinition.html
     */
    interface PropertyPathDefinitionProperty {
        /**
         * The name of the path segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-propertypathdefinition.html#cfn-iotsitewise-assetmodel-propertypathdefinition-name
         */
        readonly name: string;
    }
    /**
     * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metricwindow.html
     */
    interface MetricWindowProperty {
        /**
         * The tumbling time interval window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metricwindow.html#cfn-iotsitewise-assetmodel-metricwindow-tumbling
         */
        readonly tumbling?: cdk.IResolvable | CfnAssetModel.TumblingWindowProperty;
    }
    /**
     * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time window.
     *
     * You can use this window in metrics to aggregate data from properties and other assets.
     *
     * You can use `m` , `h` , `d` , and `w` when you specify an interval or offset. Note that `m` represents minutes, `h` represents hours, `d` represents days, and `w` represents weeks. You can also use `s` to represent seconds in `offset` .
     *
     * The `interval` and `offset` parameters support the [ISO 8601 format](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/ISO_8601) . For example, `PT5S` represents 5 seconds, `PT5M` represents 5 minutes, and `PT5H` represents 5 hours.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-tumblingwindow.html
     */
    interface TumblingWindowProperty {
        /**
         * The time interval for the tumbling window. The interval time must be between 1 minute and 1 week.
         *
         * AWS IoT SiteWise computes the `1w` interval the end of Sunday at midnight each week (UTC), the `1d` interval at the end of each day at midnight (UTC), the `1h` interval at the end of each hour, and so on.
         *
         * When AWS IoT SiteWise aggregates data points for metric computations, the start of each interval is exclusive and the end of each interval is inclusive. AWS IoT SiteWise places the computed data point at the end of the interval.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-tumblingwindow.html#cfn-iotsitewise-assetmodel-tumblingwindow-interval
         */
        readonly interval: string;
        /**
         * The offset for the tumbling window. The `offset` parameter accepts the following:.
         *
         * - The offset time.
         *
         * For example, if you specify `18h` for `offset` and `1d` for `interval` , AWS IoT SiteWise aggregates data in one of the following ways:
         *
         * - If you create the metric before or at 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) on the day when you create the metric.
         * - If you create the metric after 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) the next day.
         * - The ISO 8601 format.
         *
         * For example, if you specify `PT18H` for `offset` and `1d` for `interval` , AWS IoT SiteWise aggregates data in one of the following ways:
         *
         * - If you create the metric before or at 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) on the day when you create the metric.
         * - If you create the metric after 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) the next day.
         * - The 24-hour clock.
         *
         * For example, if you specify `00:03:00` for `offset` , `5m` for `interval` , and you create the metric at 2 PM (UTC), you get the first aggregation result at 2:03 PM (UTC). You get the second aggregation result at 2:08 PM (UTC).
         * - The offset time zone.
         *
         * For example, if you specify `2021-07-23T18:00-08` for `offset` and `1d` for `interval` , AWS IoT SiteWise aggregates data in one of the following ways:
         *
         * - If you create the metric before or at 6 PM (PST), you get the first aggregation result at 6 PM (PST) on the day when you create the metric.
         * - If you create the metric after 6 PM (PST), you get the first aggregation result at 6 PM (PST) the next day.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-tumblingwindow.html#cfn-iotsitewise-assetmodel-tumblingwindow-offset
         */
        readonly offset?: string;
    }
    /**
     * Contains an asset transform property.
     *
     * A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of `DOUBLE` and consume properties with data types of `INTEGER` or `DOUBLE` .
     *
     * For more information, see [Transforms](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms) in the *AWS IoT SiteWise User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-transform.html
     */
    interface TransformProperty {
        /**
         * The mathematical expression that defines the transformation function.
         *
         * You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.
         *
         * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-transform.html#cfn-iotsitewise-assetmodel-transform-expression
         */
        readonly expression: string;
        /**
         * The list of variables used in the expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-transform.html#cfn-iotsitewise-assetmodel-transform-variables
         */
        readonly variables: Array<CfnAssetModel.ExpressionVariableProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.html
     */
    interface AssetModelHierarchyProperty {
        /**
         * The ID of the asset model, in UUID format.
         *
         * All assets in this hierarchy must be instances of the `childAssetModelId` asset model. AWS IoT SiteWise will always return the actual asset model ID for this value. However, when you are specifying this value as part of a call to [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) , you may provide either the asset model ID or else `externalId:` followed by the asset model's external ID. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.html#cfn-iotsitewise-assetmodel-assetmodelhierarchy-childassetmodelid
         */
        readonly childAssetModelId: string;
        /**
         * The external ID (if any) provided in the [CreateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html) or [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) operation. You can assign an external ID by specifying this value as part of a call to [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) . However, you can't change the external ID if one is already assigned. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
         *
         * > One of `ExternalId` or `LogicalId` must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.html#cfn-iotsitewise-assetmodel-assetmodelhierarchy-externalid
         */
        readonly externalId?: string;
        /**
         * The ID of the asset model hierarchy. This ID is a `hierarchyId` .
         *
         * > This is a return value and can't be set.
         *
         * - If you are callling [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) to create a *new* hierarchy: You can specify its ID here, if desired. AWS IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
         * - If you are calling UpdateAssetModel to modify an *existing* hierarchy: This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.html#cfn-iotsitewise-assetmodel-assetmodelhierarchy-id
         */
        readonly id?: string;
        /**
         * The `LogicalID` of the asset model hierarchy. This ID is a `hierarchyLogicalId` .
         *
         * > One of `ExternalId` or `LogicalId` must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.html#cfn-iotsitewise-assetmodel-assetmodelhierarchy-logicalid
         */
        readonly logicalId?: string;
        /**
         * The name of the asset model hierarchy that you specify by using the [CreateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html) or [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) API operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.html#cfn-iotsitewise-assetmodel-assetmodelhierarchy-name
         */
        readonly name: string;
    }
}
/**
 * Properties for defining a `CfnAssetModel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html
 */
export interface CfnAssetModelProps {
    /**
     * The composite models that are part of this asset model.
     *
     * It groups properties (such as attributes, measurements, transforms, and metrics) and child composite models that model parts of your industrial equipment. Each composite model has a type that defines the properties that the composite model supports. Use composite models to define alarms on this asset model.
     *
     * > When creating custom composite models, you need to use [CreateAssetModelCompositeModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html) . For more information, see [Creating custom composite models (Components)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-custom-composite-models.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodels
     */
    readonly assetModelCompositeModels?: Array<CfnAssetModel.AssetModelCompositeModelProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A description for the asset model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodeldescription
     */
    readonly assetModelDescription?: string;
    /**
     * The external ID of the asset model.
     *
     * For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelexternalid
     */
    readonly assetModelExternalId?: string;
    /**
     * The hierarchy definitions of the asset model.
     *
     * Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see [Asset hierarchies](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the *AWS IoT SiteWise User Guide* .
     *
     * You can specify up to 10 hierarchies per asset model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelhierarchies
     */
    readonly assetModelHierarchies?: Array<CfnAssetModel.AssetModelHierarchyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A unique, friendly name for the asset model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelname
     */
    readonly assetModelName: string;
    /**
     * The property definitions of the asset model.
     *
     * For more information, see [Asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html) in the *AWS IoT SiteWise User Guide* .
     *
     * You can specify up to 200 properties per asset model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelproperties
     */
    readonly assetModelProperties?: Array<CfnAssetModel.AssetModelPropertyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The type of asset model.
     *
     * - *ASSET_MODEL* – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.
     * - *COMPONENT_MODEL* – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodeltype
     */
    readonly assetModelType?: string;
    /**
     * A list of key-value pairs that contain metadata for the asset.
     *
     * For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a dashboard in an AWS IoT SiteWise Monitor project.
 *
 * @cloudformationResource AWS::IoTSiteWise::Dashboard
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html
 */
export declare class CfnDashboard extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDashboard from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDashboard;
    /**
     * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the dashboard, which has the following format.
     *
     * `arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId}`
     *
     * @cloudformationAttribute DashboardArn
     */
    readonly attrDashboardArn: string;
    /**
     * The ID of the dashboard.
     *
     * @cloudformationAttribute DashboardId
     */
    readonly attrDashboardId: string;
    /**
     * The dashboard definition specified in a JSON literal.
     */
    dashboardDefinition: string;
    /**
     * A description for the dashboard.
     */
    dashboardDescription: string;
    /**
     * A friendly name for the dashboard.
     */
    dashboardName: string;
    /**
     * The ID of the project in which to create the dashboard.
     */
    projectId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs that contain metadata for the dashboard.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDashboardProps);
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
 * Properties for defining a `CfnDashboard`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html
 */
export interface CfnDashboardProps {
    /**
     * The dashboard definition specified in a JSON literal.
     *
     * For detailed information, see [Creating dashboards (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html#cfn-iotsitewise-dashboard-dashboarddefinition
     */
    readonly dashboardDefinition: string;
    /**
     * A description for the dashboard.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html#cfn-iotsitewise-dashboard-dashboarddescription
     */
    readonly dashboardDescription: string;
    /**
     * A friendly name for the dashboard.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html#cfn-iotsitewise-dashboard-dashboardname
     */
    readonly dashboardName: string;
    /**
     * The ID of the project in which to create the dashboard.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html#cfn-iotsitewise-dashboard-projectid
     */
    readonly projectId?: string;
    /**
     * A list of key-value pairs that contain metadata for the dashboard.
     *
     * For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html#cfn-iotsitewise-dashboard-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to AWS IoT SiteWise .
 *
 * For more information, see [Ingesting data using a gateway](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html) in the *AWS IoT SiteWise User Guide* .
 *
 * @cloudformationResource AWS::IoTSiteWise::Gateway
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html
 */
export declare class CfnGateway extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
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
     * The ID for the gateway.
     *
     * @cloudformationAttribute GatewayId
     */
    readonly attrGatewayId: string;
    /**
     * A list of gateway capability summaries that each contain a namespace and status.
     */
    gatewayCapabilitySummaries?: Array<CfnGateway.GatewayCapabilitySummaryProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A unique, friendly name for the gateway.
     */
    gatewayName: string;
    /**
     * The gateway's platform.
     */
    gatewayPlatform: CfnGateway.GatewayPlatformProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs that contain metadata for the gateway.
     */
    tagsRaw?: Array<cdk.CfnTag>;
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
     * Contains a summary of a gateway capability configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewaycapabilitysummary.html
     */
    interface GatewayCapabilitySummaryProperty {
        /**
         * The JSON document that defines the configuration for the gateway capability.
         *
         * For more information, see [Configuring data sources (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli) in the *AWS IoT SiteWise User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewaycapabilitysummary.html#cfn-iotsitewise-gateway-gatewaycapabilitysummary-capabilityconfiguration
         */
        readonly capabilityConfiguration?: string;
        /**
         * The namespace of the capability configuration.
         *
         * For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace `iotsitewise:opcuacollector:version` , where `version` is a number such as `1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewaycapabilitysummary.html#cfn-iotsitewise-gateway-gatewaycapabilitysummary-capabilitynamespace
         */
        readonly capabilityNamespace: string;
    }
    /**
     * Contains a gateway's platform information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewayplatform.html
     */
    interface GatewayPlatformProperty {
        /**
         * A gateway that runs on AWS IoT Greengrass .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewayplatform.html#cfn-iotsitewise-gateway-gatewayplatform-greengrass
         */
        readonly greengrass?: CfnGateway.GreengrassProperty | cdk.IResolvable;
        /**
         * A gateway that runs on AWS IoT Greengrass V2 .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewayplatform.html#cfn-iotsitewise-gateway-gatewayplatform-greengrassv2
         */
        readonly greengrassV2?: CfnGateway.GreengrassV2Property | cdk.IResolvable;
    }
    /**
     * Contains details for a gateway that runs on AWS IoT Greengrass V2 .
     *
     * To create a gateway that runs on AWS IoT Greengrass V2 , you must deploy the IoT SiteWise Edge component to your gateway device. Your [Greengrass device role](https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html) must use the `AWSIoTSiteWiseEdgeAccess` policy. For more information, see [Using AWS IoT SiteWise at the edge](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-greengrassv2.html
     */
    interface GreengrassV2Property {
        /**
         * The name of the AWS IoT thing for your AWS IoT Greengrass V2 core device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-greengrassv2.html#cfn-iotsitewise-gateway-greengrassv2-coredevicethingname
         */
        readonly coreDeviceThingName: string;
    }
    /**
     * Contains details for a gateway that runs on AWS IoT Greengrass .
     *
     * To create a gateway that runs on AWS IoT Greengrass , you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise . For more information, see [Ingesting data using a gateway](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-greengrass.html
     */
    interface GreengrassProperty {
        /**
         * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Greengrass group. For more information about how to find a group's ARN, see [ListGroups](https://docs.aws.amazon.com/greengrass/v1/apireference/listgroups-get.html) and [GetGroup](https://docs.aws.amazon.com/greengrass/v1/apireference/getgroup-get.html) in the *AWS IoT Greengrass V1 API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-greengrass.html#cfn-iotsitewise-gateway-greengrass-grouparn
         */
        readonly groupArn: string;
    }
}
/**
 * Properties for defining a `CfnGateway`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html
 */
export interface CfnGatewayProps {
    /**
     * A list of gateway capability summaries that each contain a namespace and status.
     *
     * Each gateway capability defines data sources for the gateway. To retrieve a capability configuration's definition, use [DescribeGatewayCapabilityConfiguration](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewaycapabilitysummaries
     */
    readonly gatewayCapabilitySummaries?: Array<CfnGateway.GatewayCapabilitySummaryProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A unique, friendly name for the gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewayname
     */
    readonly gatewayName: string;
    /**
     * The gateway's platform.
     *
     * You can only specify one platform in a gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewayplatform
     */
    readonly gatewayPlatform: CfnGateway.GatewayPlatformProperty | cdk.IResolvable;
    /**
     * A list of key-value pairs that contain metadata for the gateway.
     *
     * For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a portal, which can contain projects and dashboards.
 *
 * AWS IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.
 *
 * > Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see [Adding or removing portal administrators](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins) in the *AWS IoT SiteWise User Guide* .
 *
 * @cloudformationResource AWS::IoTSiteWise::Portal
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html
 */
export declare class CfnPortal extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPortal from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPortal;
    /**
     * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the portal, which has the following format.
     *
     * `arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}`
     *
     * @cloudformationAttribute PortalArn
     */
    readonly attrPortalArn: string;
    /**
     * The IAM Identity Center application generated client ID (used with IAM Identity Center APIs).
     *
     * @cloudformationAttribute PortalClientId
     */
    readonly attrPortalClientId: string;
    /**
     * The ID of the created portal.
     *
     * @cloudformationAttribute PortalId
     */
    readonly attrPortalId: string;
    /**
     * The public URL for the AWS IoT SiteWise Monitor portal.
     *
     * @cloudformationAttribute PortalStartUrl
     */
    readonly attrPortalStartUrl: string;
    /**
     * Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal.
     */
    alarms?: any | cdk.IResolvable;
    /**
     * The email address that sends alarm notifications.
     */
    notificationSenderEmail?: string;
    /**
     * The service to use to authenticate users to the portal. Choose from the following options:.
     */
    portalAuthMode?: string;
    /**
     * The AWS administrator's contact email address.
     */
    portalContactEmail: string;
    /**
     * A description for the portal.
     */
    portalDescription?: string;
    /**
     * A friendly name for the portal.
     */
    portalName: string;
    /**
     * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see [Using service roles for AWS IoT SiteWise Monitor](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html) in the *AWS IoT SiteWise User Guide* .
     */
    roleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs that contain metadata for the portal.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPortalProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPortal {
    /**
     * Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal.
     *
     * You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see [Monitoring with alarms](https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html) in the *AWS IoT SiteWise Application Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-portal-alarms.html
     */
    interface AlarmsProperty {
        /**
         * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-portal-alarms.html#cfn-iotsitewise-portal-alarms-alarmrolearn
         */
        readonly alarmRoleArn?: string;
        /**
         * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Lambda function that manages alarm notifications. For more information, see [Managing alarm notifications](https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html) in the *AWS IoT Events Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-portal-alarms.html#cfn-iotsitewise-portal-alarms-notificationlambdaarn
         */
        readonly notificationLambdaArn?: string;
    }
}
/**
 * Properties for defining a `CfnPortal`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html
 */
export interface CfnPortalProps {
    /**
     * Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal.
     *
     * You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see [Monitoring with alarms](https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html) in the *AWS IoT SiteWise Application Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html#cfn-iotsitewise-portal-alarms
     */
    readonly alarms?: any | cdk.IResolvable;
    /**
     * The email address that sends alarm notifications.
     *
     * > If you use the [AWS IoT Events managed Lambda function](https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html) to manage your emails, you must [verify the sender email address in Amazon SES](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html#cfn-iotsitewise-portal-notificationsenderemail
     */
    readonly notificationSenderEmail?: string;
    /**
     * The service to use to authenticate users to the portal. Choose from the following options:.
     *
     * - `SSO` – The portal uses AWS IAM Identity Center to authenticate users and manage user permissions. Before you can create a portal that uses IAM Identity Center, you must enable IAM Identity Center. For more information, see [Enabling IAM Identity Center](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso) in the *AWS IoT SiteWise User Guide* . This option is only available in AWS Regions other than the China Regions.
     * - `IAM` – The portal uses AWS Identity and Access Management to authenticate users and manage user permissions.
     *
     * You can't change this value after you create a portal.
     *
     * Default: `SSO`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html#cfn-iotsitewise-portal-portalauthmode
     */
    readonly portalAuthMode?: string;
    /**
     * The AWS administrator's contact email address.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html#cfn-iotsitewise-portal-portalcontactemail
     */
    readonly portalContactEmail: string;
    /**
     * A description for the portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html#cfn-iotsitewise-portal-portaldescription
     */
    readonly portalDescription?: string;
    /**
     * A friendly name for the portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html#cfn-iotsitewise-portal-portalname
     */
    readonly portalName: string;
    /**
     * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see [Using service roles for AWS IoT SiteWise Monitor](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html#cfn-iotsitewise-portal-rolearn
     */
    readonly roleArn: string;
    /**
     * A list of key-value pairs that contain metadata for the portal.
     *
     * For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html#cfn-iotsitewise-portal-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a project in the specified portal.
 *
 * > Make sure that the project name and description don't contain confidential information.
 *
 * @cloudformationResource AWS::IoTSiteWise::Project
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html
 */
export declare class CfnProject extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProject from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProject;
    /**
     * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the project, which has the following format.
     *
     * `arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}`
     *
     * @cloudformationAttribute ProjectArn
     */
    readonly attrProjectArn: string;
    /**
     * The ID of the project.
     *
     * @cloudformationAttribute ProjectId
     */
    readonly attrProjectId: string;
    /**
     * A list that contains the IDs of each asset associated with the project.
     */
    assetIds?: Array<string>;
    /**
     * The ID of the portal in which to create the project.
     */
    portalId: string;
    /**
     * A description for the project.
     */
    projectDescription?: string;
    /**
     * A friendly name for the project.
     */
    projectName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs that contain metadata for the project.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProjectProps);
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
 * Properties for defining a `CfnProject`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html
 */
export interface CfnProjectProps {
    /**
     * A list that contains the IDs of each asset associated with the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html#cfn-iotsitewise-project-assetids
     */
    readonly assetIds?: Array<string>;
    /**
     * The ID of the portal in which to create the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html#cfn-iotsitewise-project-portalid
     */
    readonly portalId: string;
    /**
     * A description for the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html#cfn-iotsitewise-project-projectdescription
     */
    readonly projectDescription?: string;
    /**
     * A friendly name for the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html#cfn-iotsitewise-project-projectname
     */
    readonly projectName: string;
    /**
     * A list of key-value pairs that contain metadata for the project.
     *
     * For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *AWS IoT SiteWise User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html#cfn-iotsitewise-project-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
