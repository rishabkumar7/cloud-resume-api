import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * This resource specifies browser settings that can be associated with a web portal.
 *
 * Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.
 *
 * @cloudformationResource AWS::WorkSpacesWeb::BrowserSettings
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html
 */
export declare class CfnBrowserSettings extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBrowserSettings from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBrowserSettings;
    /**
     * A list of web portal ARNs that the browser settings resource is associated with.
     *
     * @cloudformationAttribute AssociatedPortalArns
     */
    readonly attrAssociatedPortalArns: Array<string>;
    /**
     * The ARN of the browser settings.
     *
     * @cloudformationAttribute BrowserSettingsArn
     */
    readonly attrBrowserSettingsArn: string;
    /**
     * Additional encryption context of the browser settings.
     */
    additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions.
     */
    browserPolicy?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The custom managed key of the browser settings.
     */
    customerManagedKey?: string;
    /**
     * The tags to add to the browser settings resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnBrowserSettingsProps);
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
 * Properties for defining a `CfnBrowserSettings`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html
 */
export interface CfnBrowserSettingsProps {
    /**
     * Additional encryption context of the browser settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#cfn-workspacesweb-browsersettings-additionalencryptioncontext
     */
    readonly additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#cfn-workspacesweb-browsersettings-browserpolicy
     */
    readonly browserPolicy?: string;
    /**
     * The custom managed key of the browser settings.
     *
     * *Pattern* : `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#cfn-workspacesweb-browsersettings-customermanagedkey
     */
    readonly customerManagedKey?: string;
    /**
     * The tags to add to the browser settings resource.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#cfn-workspacesweb-browsersettings-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * This resource specifies an identity provider that is then associated with a web portal.
 *
 * This resource is not required if your portal's `AuthenticationType` is IAM Identity Center.
 *
 * @cloudformationResource AWS::WorkSpacesWeb::IdentityProvider
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html
 */
export declare class CfnIdentityProvider extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIdentityProvider from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIdentityProvider;
    /**
     * The ARN of the identity provider.
     *
     * @cloudformationAttribute IdentityProviderArn
     */
    readonly attrIdentityProviderArn: string;
    /**
     * The identity provider details. The following list describes the provider detail keys for each identity provider type.
     */
    identityProviderDetails: cdk.IResolvable | Record<string, string>;
    /**
     * The identity provider name.
     */
    identityProviderName: string;
    /**
     * The identity provider type.
     */
    identityProviderType: string;
    /**
     * The ARN of the identity provider.
     */
    portalArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIdentityProviderProps);
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
 * Properties for defining a `CfnIdentityProvider`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html
 */
export interface CfnIdentityProviderProps {
    /**
     * The identity provider details. The following list describes the provider detail keys for each identity provider type.
     *
     * - For Google and Login with Amazon:
     *
     * - `client_id`
     * - `client_secret`
     * - `authorize_scopes`
     * - For Facebook:
     *
     * - `client_id`
     * - `client_secret`
     * - `authorize_scopes`
     * - `api_version`
     * - For Sign in with Apple:
     *
     * - `client_id`
     * - `team_id`
     * - `key_id`
     * - `private_key`
     * - `authorize_scopes`
     * - For OIDC providers:
     *
     * - `client_id`
     * - `client_secret`
     * - `attributes_request_method`
     * - `oidc_issuer`
     * - `authorize_scopes`
     * - `authorize_url` *if not available from discovery URL specified by oidc_issuer key*
     * - `token_url` *if not available from discovery URL specified by oidc_issuer key*
     * - `attributes_url` *if not available from discovery URL specified by oidc_issuer key*
     * - `jwks_uri` *if not available from discovery URL specified by oidc_issuer key*
     * - For SAML providers:
     *
     * - `MetadataFile` OR `MetadataURL`
     * - `IDPSignout` (boolean) *optional*
     * - `IDPInit` (boolean) *optional*
     * - `RequestSigningAlgorithm` (string) *optional* - Only accepts `rsa-sha256`
     * - `EncryptedResponses` (boolean) *optional*
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html#cfn-workspacesweb-identityprovider-identityproviderdetails
     */
    readonly identityProviderDetails: cdk.IResolvable | Record<string, string>;
    /**
     * The identity provider name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html#cfn-workspacesweb-identityprovider-identityprovidername
     */
    readonly identityProviderName: string;
    /**
     * The identity provider type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html#cfn-workspacesweb-identityprovider-identityprovidertype
     */
    readonly identityProviderType: string;
    /**
     * The ARN of the identity provider.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html#cfn-workspacesweb-identityprovider-portalarn
     */
    readonly portalArn?: string;
}
/**
 * This resource specifies IP access settings that can be associated with a web portal.
 *
 * For more information, see [Set up IP access controls (optional)](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/ip-access-controls.html) .
 *
 * @cloudformationResource AWS::WorkSpacesWeb::IpAccessSettings
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html
 */
export declare class CfnIpAccessSettings extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIpAccessSettings from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIpAccessSettings;
    /**
     * A list of web portal ARNs that this IP access settings resource is associated with.
     *
     * @cloudformationAttribute AssociatedPortalArns
     */
    readonly attrAssociatedPortalArns: Array<string>;
    /**
     * The creation date timestamp of the IP access settings.
     *
     * @cloudformationAttribute CreationDate
     */
    readonly attrCreationDate: string;
    /**
     * The ARN of the IP access settings resource.
     *
     * @cloudformationAttribute IpAccessSettingsArn
     */
    readonly attrIpAccessSettingsArn: string;
    /**
     * Additional encryption context of the IP access settings.
     */
    additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The custom managed key of the IP access settings.
     */
    customerManagedKey?: string;
    /**
     * The description of the IP access settings.
     */
    description?: string;
    /**
     * The display name of the IP access settings.
     */
    displayName?: string;
    /**
     * The IP rules of the IP access settings.
     */
    ipRules: Array<CfnIpAccessSettings.IpRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The tags to add to the IP access settings resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIpAccessSettingsProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIpAccessSettings {
    /**
     * The IP rules of the IP access settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-ipaccesssettings-iprule.html
     */
    interface IpRuleProperty {
        /**
         * The description of the IP rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-ipaccesssettings-iprule.html#cfn-workspacesweb-ipaccesssettings-iprule-description
         */
        readonly description?: string;
        /**
         * The IP range of the IP rule.
         *
         * This can either be a single IP address or a range using CIDR notation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-ipaccesssettings-iprule.html#cfn-workspacesweb-ipaccesssettings-iprule-iprange
         */
        readonly ipRange: string;
    }
}
/**
 * Properties for defining a `CfnIpAccessSettings`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html
 */
export interface CfnIpAccessSettingsProps {
    /**
     * Additional encryption context of the IP access settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-additionalencryptioncontext
     */
    readonly additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * The custom managed key of the IP access settings.
     *
     * *Pattern* : `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-customermanagedkey
     */
    readonly customerManagedKey?: string;
    /**
     * The description of the IP access settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-description
     */
    readonly description?: string;
    /**
     * The display name of the IP access settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-displayname
     */
    readonly displayName?: string;
    /**
     * The IP rules of the IP access settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-iprules
     */
    readonly ipRules: Array<CfnIpAccessSettings.IpRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The tags to add to the IP access settings resource.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * This resource specifies network settings that can be associated with a web portal.
 *
 * Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.
 *
 * The VPC must have default tenancy. VPCs with dedicated tenancy are not supported.
 *
 * For availability consideration, you must have at least two subnets created in two different Availability Zones. WorkSpaces Secure Browser is available in a subset of the Availability Zones for each supported Region. For more information, see [Supported Availability Zones](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/availability-zones.html) .
 *
 * @cloudformationResource AWS::WorkSpacesWeb::NetworkSettings
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html
 */
export declare class CfnNetworkSettings extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNetworkSettings from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNetworkSettings;
    /**
     * A list of web portal ARNs that this network settings is associated with.
     *
     * @cloudformationAttribute AssociatedPortalArns
     */
    readonly attrAssociatedPortalArns: Array<string>;
    /**
     * The ARN of the network settings.
     *
     * @cloudformationAttribute NetworkSettingsArn
     */
    readonly attrNetworkSettingsArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * One or more security groups used to control access from streaming instances to your VPC.
     */
    securityGroupIds: Array<string>;
    /**
     * The subnets in which network interfaces are created to connect streaming instances to your VPC.
     */
    subnetIds: Array<string>;
    /**
     * The tags to add to the network settings resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The VPC that streaming instances will connect to.
     */
    vpcId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNetworkSettingsProps);
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
 * Properties for defining a `CfnNetworkSettings`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html
 */
export interface CfnNetworkSettingsProps {
    /**
     * One or more security groups used to control access from streaming instances to your VPC.
     *
     * *Pattern* : `^[\w+\-]+$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#cfn-workspacesweb-networksettings-securitygroupids
     */
    readonly securityGroupIds: Array<string>;
    /**
     * The subnets in which network interfaces are created to connect streaming instances to your VPC.
     *
     * At least two of these subnets must be in different availability zones.
     *
     * *Pattern* : `^subnet-([0-9a-f]{8}|[0-9a-f]{17})$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#cfn-workspacesweb-networksettings-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * The tags to add to the network settings resource.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#cfn-workspacesweb-networksettings-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The VPC that streaming instances will connect to.
     *
     * *Pattern* : `^vpc-[0-9a-z]*$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#cfn-workspacesweb-networksettings-vpcid
     */
    readonly vpcId: string;
}
/**
 * This resource specifies a web portal, which users use to start browsing sessions.
 *
 * A `Standard` web portal can't start browsing sessions unless you have at defined and associated an `IdentityProvider` and `NetworkSettings` resource. An `IAM Identity Center` web portal does not require an `IdentityProvider` resource.
 *
 * For more information about web portals, see [What is Amazon WorkSpaces Secure Browser?](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/what-is-workspaces-web.html.html) .
 *
 * @cloudformationResource AWS::WorkSpacesWeb::Portal
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html
 */
export declare class CfnPortal extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
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
     * The browser that users see when using a streaming session.
     *
     * @cloudformationAttribute BrowserType
     */
    readonly attrBrowserType: string;
    /**
     * The creation date of the web portal.
     *
     * @cloudformationAttribute CreationDate
     */
    readonly attrCreationDate: string;
    /**
     * The ARN of the web portal.
     *
     * @cloudformationAttribute PortalArn
     */
    readonly attrPortalArn: string;
    /**
     * The endpoint URL of the web portal that users access in order to start streaming sessions.
     *
     * @cloudformationAttribute PortalEndpoint
     */
    readonly attrPortalEndpoint: string;
    /**
     * The status of the web portal.
     *
     * @cloudformationAttribute PortalStatus
     */
    readonly attrPortalStatus: string;
    /**
     * The renderer that is used in streaming sessions.
     *
     * @cloudformationAttribute RendererType
     */
    readonly attrRendererType: string;
    /**
     * The SAML metadata of the service provider.
     *
     * @cloudformationAttribute ServiceProviderSamlMetadata
     */
    readonly attrServiceProviderSamlMetadata: string;
    /**
     * A message that explains why the web portal is in its current status.
     *
     * @cloudformationAttribute StatusReason
     */
    readonly attrStatusReason: string;
    /**
     * The additional encryption context of the portal.
     */
    additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * The type of authentication integration points used when signing into the web portal. Defaults to `Standard` .
     */
    authenticationType?: string;
    /**
     * The ARN of the browser settings that is associated with this web portal.
     */
    browserSettingsArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The customer managed key of the web portal.
     */
    customerManagedKey?: string;
    /**
     * The name of the web portal.
     */
    displayName?: string;
    /**
     * The type and resources of the underlying instance.
     */
    instanceType?: string;
    /**
     * The ARN of the IP access settings that is associated with the web portal.
     */
    ipAccessSettingsArn?: string;
    /**
     * The maximum number of concurrent sessions for the portal.
     */
    maxConcurrentSessions?: number;
    /**
     * The ARN of the network settings that is associated with the web portal.
     */
    networkSettingsArn?: string;
    /**
     * The tags to add to the web portal.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the trust store that is associated with the web portal.
     */
    trustStoreArn?: string;
    /**
     * The ARN of the user access logging settings that is associated with the web portal.
     */
    userAccessLoggingSettingsArn?: string;
    /**
     * The ARN of the user settings that is associated with the web portal.
     */
    userSettingsArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnPortalProps);
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
 * Properties for defining a `CfnPortal`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html
 */
export interface CfnPortalProps {
    /**
     * The additional encryption context of the portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-additionalencryptioncontext
     */
    readonly additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * The type of authentication integration points used when signing into the web portal. Defaults to `Standard` .
     *
     * `Standard` web portals are authenticated directly through your identity provider (IdP). User and group access to your web portal is controlled through your IdP. You need to include an IdP resource in your template to integrate your IdP with your web portal. Completing the configuration for your IdP requires exchanging WorkSpaces Secure Browser’s SP metadata with your IdP’s IdP metadata. If your IdP requires the SP metadata first before returning the IdP metadata, you should follow these steps:
     *
     * 1. Create and deploy a CloudFormation template with a `Standard` portal with no `IdentityProvider` resource.
     *
     * 2. Retrieve the SP metadata using `Fn:GetAtt` , the WorkSpaces Secure Browser console, or by the calling the `GetPortalServiceProviderMetadata` API.
     *
     * 3. Submit the data to your IdP.
     *
     * 4. Add an `IdentityProvider` resource to your CloudFormation template.
     *
     * `IAM Identity Center` web portals are authenticated through AWS IAM Identity Center . They provide additional features, such as IdP-initiated authentication. Identity sources (including external identity provider integration) and other identity provider information must be configured in IAM Identity Center . User and group assignment must be done through the WorkSpaces Secure Browser console. These cannot be configured in CloudFormation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-authenticationtype
     */
    readonly authenticationType?: string;
    /**
     * The ARN of the browser settings that is associated with this web portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-browsersettingsarn
     */
    readonly browserSettingsArn?: string;
    /**
     * The customer managed key of the web portal.
     *
     * *Pattern* : `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-customermanagedkey
     */
    readonly customerManagedKey?: string;
    /**
     * The name of the web portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-displayname
     */
    readonly displayName?: string;
    /**
     * The type and resources of the underlying instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-instancetype
     */
    readonly instanceType?: string;
    /**
     * The ARN of the IP access settings that is associated with the web portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-ipaccesssettingsarn
     */
    readonly ipAccessSettingsArn?: string;
    /**
     * The maximum number of concurrent sessions for the portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-maxconcurrentsessions
     */
    readonly maxConcurrentSessions?: number;
    /**
     * The ARN of the network settings that is associated with the web portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-networksettingsarn
     */
    readonly networkSettingsArn?: string;
    /**
     * The tags to add to the web portal.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the trust store that is associated with the web portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-truststorearn
     */
    readonly trustStoreArn?: string;
    /**
     * The ARN of the user access logging settings that is associated with the web portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-useraccessloggingsettingsarn
     */
    readonly userAccessLoggingSettingsArn?: string;
    /**
     * The ARN of the user settings that is associated with the web portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#cfn-workspacesweb-portal-usersettingsarn
     */
    readonly userSettingsArn?: string;
}
/**
 * This resource specifies a trust store that can be associated with a web portal.
 *
 * A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.
 *
 * @cloudformationResource AWS::WorkSpacesWeb::TrustStore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html
 */
export declare class CfnTrustStore extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTrustStore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTrustStore;
    /**
     * A list of web portal ARNs that this trust store is associated with.
     *
     * @cloudformationAttribute AssociatedPortalArns
     */
    readonly attrAssociatedPortalArns: Array<string>;
    /**
     * The ARN of the trust store.
     *
     * @cloudformationAttribute TrustStoreArn
     */
    readonly attrTrustStoreArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A list of CA certificates to be added to the trust store.
     */
    certificateList: Array<string>;
    /**
     * The tags to add to the trust store.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTrustStoreProps);
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
 * Properties for defining a `CfnTrustStore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html
 */
export interface CfnTrustStoreProps {
    /**
     * A list of CA certificates to be added to the trust store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html#cfn-workspacesweb-truststore-certificatelist
     */
    readonly certificateList: Array<string>;
    /**
     * The tags to add to the trust store.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html#cfn-workspacesweb-truststore-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * This resource specifies user access logging settings that can be associated with a web portal.
 *
 * In order to receive logs from WorkSpaces Secure Browser, you must have an Amazon Kinesis Data Stream that starts with "amazon-workspaces-web-*". Your Amazon Kinesis data stream must either have server-side encryption turned off, or must use AWS managed keys for server-side encryption.
 *
 * For more information about setting server-side encryption in Amazon Kinesis , see [How Do I Get Started with Server-Side Encryption?](https://docs.aws.amazon.com/streams/latest/dev/getting-started-with-sse.html) .
 *
 * For more information about setting up user access logging, see [Set up user access logging](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/user-logging.html) .
 *
 * @cloudformationResource AWS::WorkSpacesWeb::UserAccessLoggingSettings
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsettings.html
 */
export declare class CfnUserAccessLoggingSettings extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserAccessLoggingSettings from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserAccessLoggingSettings;
    /**
     * A list of web portal ARNs that this user access logging settings is associated with.
     *
     * @cloudformationAttribute AssociatedPortalArns
     */
    readonly attrAssociatedPortalArns: Array<string>;
    /**
     * The ARN of the user access logging settings.
     *
     * @cloudformationAttribute UserAccessLoggingSettingsArn
     */
    readonly attrUserAccessLoggingSettingsArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The ARN of the Kinesis stream.
     */
    kinesisStreamArn: string;
    /**
     * The tags to add to the user access logging settings resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserAccessLoggingSettingsProps);
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
 * Properties for defining a `CfnUserAccessLoggingSettings`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsettings.html
 */
export interface CfnUserAccessLoggingSettingsProps {
    /**
     * The ARN of the Kinesis stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsettings.html#cfn-workspacesweb-useraccessloggingsettings-kinesisstreamarn
     */
    readonly kinesisStreamArn: string;
    /**
     * The tags to add to the user access logging settings resource.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsettings.html#cfn-workspacesweb-useraccessloggingsettings-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * This resource specifies user settings that can be associated with a web portal.
 *
 * Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices.
 *
 * @cloudformationResource AWS::WorkSpacesWeb::UserSettings
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html
 */
export declare class CfnUserSettings extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserSettings from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserSettings;
    /**
     * A list of web portal ARNs that this user settings resource is associated with.
     *
     * @cloudformationAttribute AssociatedPortalArns
     */
    readonly attrAssociatedPortalArns: Array<string>;
    /**
     * The ARN of the user settings.
     *
     * @cloudformationAttribute UserSettingsArn
     */
    readonly attrUserSettingsArn: string;
    /**
     * The additional encryption context of the user settings.
     */
    additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The configuration that specifies which cookies should be synchronized from the end user's local browser to the remote browser.
     */
    cookieSynchronizationConfiguration?: CfnUserSettings.CookieSynchronizationConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies whether the user can copy text from the streaming session to the local device.
     */
    copyAllowed: string;
    /**
     * The customer managed key used to encrypt sensitive information in the user settings.
     */
    customerManagedKey?: string;
    /**
     * The amount of time that a streaming session remains active after users disconnect.
     */
    disconnectTimeoutInMinutes?: number;
    /**
     * Specifies whether the user can download files from the streaming session to the local device.
     */
    downloadAllowed: string;
    /**
     * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
     */
    idleDisconnectTimeoutInMinutes?: number;
    /**
     * Specifies whether the user can paste text from the local device to the streaming session.
     */
    pasteAllowed: string;
    /**
     * Specifies whether the user can print to the local device.
     */
    printAllowed: string;
    /**
     * The tags to add to the user settings resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Specifies whether the user can upload files from the local device to the streaming session.
     */
    uploadAllowed: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserSettingsProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUserSettings {
    /**
     * The configuration that specifies which cookies should be synchronized from the end user's local browser to the remote browser.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiesynchronizationconfiguration.html
     */
    interface CookieSynchronizationConfigurationProperty {
        /**
         * The list of cookie specifications that are allowed to be synchronized to the remote browser.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiesynchronizationconfiguration.html#cfn-workspacesweb-usersettings-cookiesynchronizationconfiguration-allowlist
         */
        readonly allowlist: Array<CfnUserSettings.CookieSpecificationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The list of cookie specifications that are blocked from being synchronized to the remote browser.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiesynchronizationconfiguration.html#cfn-workspacesweb-usersettings-cookiesynchronizationconfiguration-blocklist
         */
        readonly blocklist?: Array<CfnUserSettings.CookieSpecificationProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Specifies a single cookie or set of cookies in an end user's browser.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiespecification.html
     */
    interface CookieSpecificationProperty {
        /**
         * The domain of the cookie.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiespecification.html#cfn-workspacesweb-usersettings-cookiespecification-domain
         */
        readonly domain: string;
        /**
         * The name of the cookie.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiespecification.html#cfn-workspacesweb-usersettings-cookiespecification-name
         */
        readonly name?: string;
        /**
         * The path of the cookie.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiespecification.html#cfn-workspacesweb-usersettings-cookiespecification-path
         */
        readonly path?: string;
    }
}
/**
 * Properties for defining a `CfnUserSettings`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html
 */
export interface CfnUserSettingsProps {
    /**
     * The additional encryption context of the user settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-additionalencryptioncontext
     */
    readonly additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * The configuration that specifies which cookies should be synchronized from the end user's local browser to the remote browser.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-cookiesynchronizationconfiguration
     */
    readonly cookieSynchronizationConfiguration?: CfnUserSettings.CookieSynchronizationConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies whether the user can copy text from the streaming session to the local device.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-copyallowed
     */
    readonly copyAllowed: string;
    /**
     * The customer managed key used to encrypt sensitive information in the user settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-customermanagedkey
     */
    readonly customerManagedKey?: string;
    /**
     * The amount of time that a streaming session remains active after users disconnect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-disconnecttimeoutinminutes
     */
    readonly disconnectTimeoutInMinutes?: number;
    /**
     * Specifies whether the user can download files from the streaming session to the local device.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-downloadallowed
     */
    readonly downloadAllowed: string;
    /**
     * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-idledisconnecttimeoutinminutes
     */
    readonly idleDisconnectTimeoutInMinutes?: number;
    /**
     * Specifies whether the user can paste text from the local device to the streaming session.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-pasteallowed
     */
    readonly pasteAllowed: string;
    /**
     * Specifies whether the user can print to the local device.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-printallowed
     */
    readonly printAllowed: string;
    /**
     * The tags to add to the user settings resource.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies whether the user can upload files from the local device to the streaming session.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#cfn-workspacesweb-usersettings-uploadallowed
     */
    readonly uploadAllowed: string;
}
