import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html.
 *
 * @cloudformationResource AWS::RolesAnywhere::CRL
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html
 */
export declare class CfnCRL extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCRL from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCRL;
    /**
     * The unique primary identifier of the Crl
     *
     * @cloudformationAttribute CrlId
     */
    readonly attrCrlId: string;
    /**
     * The x509 v3 specified certificate revocation list (CRL).
     */
    crlData: string;
    /**
     * Specifies whether the certificate revocation list (CRL) is enabled.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The name of the certificate revocation list (CRL).
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags to attach to the certificate revocation list (CRL).
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for.
     */
    trustAnchorArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCRLProps);
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
 * Properties for defining a `CfnCRL`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html
 */
export interface CfnCRLProps {
    /**
     * The x509 v3 specified certificate revocation list (CRL).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html#cfn-rolesanywhere-crl-crldata
     */
    readonly crlData: string;
    /**
     * Specifies whether the certificate revocation list (CRL) is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html#cfn-rolesanywhere-crl-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The name of the certificate revocation list (CRL).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html#cfn-rolesanywhere-crl-name
     */
    readonly name: string;
    /**
     * A list of tags to attach to the certificate revocation list (CRL).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html#cfn-rolesanywhere-crl-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html#cfn-rolesanywhere-crl-trustanchorarn
     */
    readonly trustAnchorArn?: string;
}
/**
 * Creates a Profile.
 *
 * @cloudformationResource AWS::RolesAnywhere::Profile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html
 */
export declare class CfnProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProfile;
    /**
     * The ARN of the profile.
     *
     * @cloudformationAttribute ProfileArn
     */
    readonly attrProfileArn: string;
    /**
     * The unique primary identifier of the Profile
     *
     * @cloudformationAttribute ProfileId
     */
    readonly attrProfileId: string;
    /**
     * A mapping applied to the authenticating end-entity certificate.
     */
    attributeMappings?: Array<CfnProfile.AttributeMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The number of seconds vended session credentials will be valid for.
     */
    durationSeconds?: number;
    /**
     * The enabled status of the resource.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * A list of managed policy ARNs.
     */
    managedPolicyArns?: Array<string>;
    /**
     * The customer specified name of the resource.
     */
    name: string;
    /**
     * Specifies whether instance properties are required in CreateSession requests with this profile.
     */
    requireInstanceProperties?: boolean | cdk.IResolvable;
    /**
     * A list of IAM role ARNs that can be assumed when this profile is specified in a CreateSession request.
     */
    roleArns: Array<string>;
    /**
     * A session policy that will applied to the trust boundary of the vended session credentials.
     */
    sessionPolicy?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of Tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnProfile {
    /**
     * A mapping applied to the authenticating end-entity certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-profile-attributemapping.html
     */
    interface AttributeMappingProperty {
        /**
         * Fields (x509Subject, x509Issuer and x509SAN) within X.509 certificates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-profile-attributemapping.html#cfn-rolesanywhere-profile-attributemapping-certificatefield
         */
        readonly certificateField: string;
        /**
         * A list of mapping entries for every supported specifier or sub-field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-profile-attributemapping.html#cfn-rolesanywhere-profile-attributemapping-mappingrules
         */
        readonly mappingRules: Array<cdk.IResolvable | CfnProfile.MappingRuleProperty> | cdk.IResolvable;
    }
    /**
     * A single mapping entry for each supported specifier or sub-field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-profile-mappingrule.html
     */
    interface MappingRuleProperty {
        /**
         * Specifier within a certificate field, such as CN, OU, or UID from the Subject field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-profile-mappingrule.html#cfn-rolesanywhere-profile-mappingrule-specifier
         */
        readonly specifier: string;
    }
}
/**
 * Properties for defining a `CfnProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html
 */
export interface CfnProfileProps {
    /**
     * A mapping applied to the authenticating end-entity certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-attributemappings
     */
    readonly attributeMappings?: Array<CfnProfile.AttributeMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The number of seconds vended session credentials will be valid for.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-durationseconds
     */
    readonly durationSeconds?: number;
    /**
     * The enabled status of the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * A list of managed policy ARNs.
     *
     * Managed policies identified by this list will be applied to the vended session credentials.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-managedpolicyarns
     */
    readonly managedPolicyArns?: Array<string>;
    /**
     * The customer specified name of the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-name
     */
    readonly name: string;
    /**
     * Specifies whether instance properties are required in CreateSession requests with this profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-requireinstanceproperties
     */
    readonly requireInstanceProperties?: boolean | cdk.IResolvable;
    /**
     * A list of IAM role ARNs that can be assumed when this profile is specified in a CreateSession request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-rolearns
     */
    readonly roleArns: Array<string>;
    /**
     * A session policy that will applied to the trust boundary of the vended session credentials.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-sessionpolicy
     */
    readonly sessionPolicy?: string;
    /**
     * A list of Tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a TrustAnchor.
 *
 * @cloudformationResource AWS::RolesAnywhere::TrustAnchor
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html
 */
export declare class CfnTrustAnchor extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTrustAnchor from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTrustAnchor;
    /**
     * The ARN of the trust anchor.
     *
     * @cloudformationAttribute TrustAnchorArn
     */
    readonly attrTrustAnchorArn: string;
    /**
     * The unique identifier of the trust anchor.
     *
     * @cloudformationAttribute TrustAnchorId
     */
    readonly attrTrustAnchorId: string;
    /**
     * Indicates whether the trust anchor is enabled.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The name of the trust anchor.
     */
    name: string;
    /**
     * A list of notification settings to be associated to the trust anchor.
     */
    notificationSettings?: Array<cdk.IResolvable | CfnTrustAnchor.NotificationSettingProperty> | cdk.IResolvable;
    /**
     * The trust anchor type and its related certificate data.
     */
    source: cdk.IResolvable | CfnTrustAnchor.SourceProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to attach to the trust anchor.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTrustAnchorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTrustAnchor {
    /**
     * Customizable notification settings that will be applied to notification events.
     *
     * IAM Roles Anywhere consumes these settings while notifying across multiple channels - CloudWatch metrics, EventBridge, and AWS Health Dashboard .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-notificationsetting.html
     */
    interface NotificationSettingProperty {
        /**
         * The specified channel of notification.
         *
         * IAM Roles Anywhere uses CloudWatch metrics, EventBridge, and AWS Health Dashboard to notify for an event.
         *
         * > In the absence of a specific channel, IAM Roles Anywhere applies this setting to 'ALL' channels.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-notificationsetting.html#cfn-rolesanywhere-trustanchor-notificationsetting-channel
         */
        readonly channel?: string;
        /**
         * Indicates whether the notification setting is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-notificationsetting.html#cfn-rolesanywhere-trustanchor-notificationsetting-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The event to which this notification setting is applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-notificationsetting.html#cfn-rolesanywhere-trustanchor-notificationsetting-event
         */
        readonly event: string;
        /**
         * The number of days before a notification event.
         *
         * This value is required for a notification setting that is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-notificationsetting.html#cfn-rolesanywhere-trustanchor-notificationsetting-threshold
         */
        readonly threshold?: number;
    }
    /**
     * Object representing the TrustAnchor type and its related certificate data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-source.html
     */
    interface SourceProperty {
        /**
         * A union object representing the data field of the TrustAnchor depending on its type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-source.html#cfn-rolesanywhere-trustanchor-source-sourcedata
         */
        readonly sourceData?: cdk.IResolvable | CfnTrustAnchor.SourceDataProperty;
        /**
         * The type of the TrustAnchor.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-source.html#cfn-rolesanywhere-trustanchor-source-sourcetype
         */
        readonly sourceType?: string;
    }
    /**
     * A union object representing the data field of the TrustAnchor depending on its type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-sourcedata.html
     */
    interface SourceDataProperty {
        /**
         * The root certificate of the AWS Private Certificate Authority specified by this ARN is used in trust validation for temporary credential requests.
         *
         * Included for trust anchors of type `AWS_ACM_PCA` .
         *
         * > This field is not supported in your region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-sourcedata.html#cfn-rolesanywhere-trustanchor-sourcedata-acmpcaarn
         */
        readonly acmPcaArn?: string;
        /**
         * The PEM-encoded data for the certificate anchor.
         *
         * Included for trust anchors of type `CERTIFICATE_BUNDLE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-sourcedata.html#cfn-rolesanywhere-trustanchor-sourcedata-x509certificatedata
         */
        readonly x509CertificateData?: string;
    }
}
/**
 * Properties for defining a `CfnTrustAnchor`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html
 */
export interface CfnTrustAnchorProps {
    /**
     * Indicates whether the trust anchor is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html#cfn-rolesanywhere-trustanchor-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The name of the trust anchor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html#cfn-rolesanywhere-trustanchor-name
     */
    readonly name: string;
    /**
     * A list of notification settings to be associated to the trust anchor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html#cfn-rolesanywhere-trustanchor-notificationsettings
     */
    readonly notificationSettings?: Array<cdk.IResolvable | CfnTrustAnchor.NotificationSettingProperty> | cdk.IResolvable;
    /**
     * The trust anchor type and its related certificate data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html#cfn-rolesanywhere-trustanchor-source
     */
    readonly source: cdk.IResolvable | CfnTrustAnchor.SourceProperty;
    /**
     * The tags to attach to the trust anchor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html#cfn-rolesanywhere-trustanchor-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
