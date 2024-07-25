import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Assigns access to a Principal for a specified AWS account using a specified permission set.
 *
 * > The term *principal* here refers to a user or group that is defined in IAM Identity Center .
 *
 * @cloudformationResource AWS::SSO::Assignment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html
 */
export declare class CfnAssignment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAssignment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAssignment;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    instanceArn: string;
    /**
     * The ARN of the permission set.
     */
    permissionSetArn: string;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group.
     */
    principalId: string;
    /**
     * The entity type for which the assignment will be created.
     */
    principalType: string;
    /**
     * TargetID is an AWS account identifier, (For example, 123456789012).
     */
    targetId: string;
    /**
     * The entity type for which the assignment will be created.
     */
    targetType: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAssignmentProps);
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
 * Properties for defining a `CfnAssignment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html
 */
export interface CfnAssignmentProps {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     *
     * For more information about ARNs, see [Amazon Resource Names (ARNs) and AWS Service Namespaces](https://docs.aws.amazon.com//general/latest/gr/aws-arns-and-namespaces.html) in the *AWS General Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html#cfn-sso-assignment-instancearn
     */
    readonly instanceArn: string;
    /**
     * The ARN of the permission set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html#cfn-sso-assignment-permissionsetarn
     */
    readonly permissionSetArn: string;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group.
     *
     * PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the [IAM Identity Center Identity Store API Reference](https://docs.aws.amazon.com//singlesignon/latest/IdentityStoreAPIReference/welcome.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html#cfn-sso-assignment-principalid
     */
    readonly principalId: string;
    /**
     * The entity type for which the assignment will be created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html#cfn-sso-assignment-principaltype
     */
    readonly principalType: string;
    /**
     * TargetID is an AWS account identifier, (For example, 123456789012).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html#cfn-sso-assignment-targetid
     */
    readonly targetId: string;
    /**
     * The entity type for which the assignment will be created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html#cfn-sso-assignment-targettype
     */
    readonly targetType: string;
}
/**
 * Enables the attribute-based access control (ABAC) feature for the specified IAM Identity Center instance.
 *
 * You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see [Attribute-Based Access Control](https://docs.aws.amazon.com//singlesignon/latest/userguide/abac.html) in the *IAM Identity Center User Guide* .
 *
 * > The `InstanceAccessControlAttributeConfiguration` property has been deprecated but is still supported for backwards compatibility purposes. We recommend that you use the `AccessControlAttributes` property instead.
 *
 * @cloudformationResource AWS::SSO::InstanceAccessControlAttributeConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html
 */
export declare class CfnInstanceAccessControlAttributeConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInstanceAccessControlAttributeConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInstanceAccessControlAttributeConfiguration;
    /**
     * Lists the attributes that are configured for ABAC in the specified IAM Identity Center instance.
     */
    accessControlAttributes?: Array<CfnInstanceAccessControlAttributeConfiguration.AccessControlAttributeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes.
     *
     * @deprecated this property has been deprecated
     */
    instanceAccessControlAttributeConfiguration?: CfnInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfigurationProperty | cdk.IResolvable;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    instanceArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInstanceAccessControlAttributeConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInstanceAccessControlAttributeConfiguration {
    /**
     * These are IAM Identity Center identity store attributes that you can configure for use in attributes-based access control (ABAC).
     *
     * You can create permissions policies that determine who can access your AWS resources based upon the configured attribute values. When you enable ABAC and specify `AccessControlAttributes` , IAM Identity Center passes the attribute values of the authenticated user into IAM for use in policy evaluation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute.html
     */
    interface AccessControlAttributeProperty {
        /**
         * The name of the attribute associated with your identities in your identity source.
         *
         * This is used to map a specified attribute in your identity source with an attribute in IAM Identity Center .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute.html#cfn-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute-key
         */
        readonly key: string;
        /**
         * The value used for mapping a specified attribute to an identity source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute.html#cfn-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute-value
         */
        readonly value: CfnInstanceAccessControlAttributeConfiguration.AccessControlAttributeValueProperty | cdk.IResolvable;
    }
    /**
     * The value used for mapping a specified attribute to an identity source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributevalue.html
     */
    interface AccessControlAttributeValueProperty {
        /**
         * The identity source to use when mapping a specified attribute to IAM Identity Center .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributevalue.html#cfn-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributevalue-source
         */
        readonly source: Array<string>;
    }
    /**
     * The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes.
     *
     * We recomend that you use  AccessControlAttributes property instead.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-instanceaccesscontrolattributeconfiguration.html
     */
    interface InstanceAccessControlAttributeConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-instanceaccesscontrolattributeconfiguration.html#cfn-sso-instanceaccesscontrolattributeconfiguration-instanceaccesscontrolattributeconfiguration-accesscontrolattributes
         */
        readonly accessControlAttributes: Array<CfnInstanceAccessControlAttributeConfiguration.AccessControlAttributeProperty | cdk.IResolvable> | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnInstanceAccessControlAttributeConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html
 */
export interface CfnInstanceAccessControlAttributeConfigurationProps {
    /**
     * Lists the attributes that are configured for ABAC in the specified IAM Identity Center instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html#cfn-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributes
     */
    readonly accessControlAttributes?: Array<CfnInstanceAccessControlAttributeConfiguration.AccessControlAttributeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes.
     *
     * We recomend that you use  AccessControlAttributes property instead.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html#cfn-sso-instanceaccesscontrolattributeconfiguration-instanceaccesscontrolattributeconfiguration
     */
    readonly instanceAccessControlAttributeConfiguration?: CfnInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfigurationProperty | cdk.IResolvable;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html#cfn-sso-instanceaccesscontrolattributeconfiguration-instancearn
     */
    readonly instanceArn: string;
}
/**
 * Specifies a permission set within a specified IAM Identity Center instance.
 *
 * @cloudformationResource AWS::SSO::PermissionSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html
 */
export declare class CfnPermissionSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPermissionSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPermissionSet;
    /**
     * The permission set ARN of the permission set, such as `arn:aws:sso:::permissionSet/ins-instanceid/ps-permissionsetid` .
     *
     * @cloudformationAttribute PermissionSetArn
     */
    readonly attrPermissionSetArn: string;
    /**
     * Specifies the names and paths of the customer managed policies that you have attached to your permission set.
     */
    customerManagedPolicyReferences?: Array<CfnPermissionSet.CustomerManagedPolicyReferenceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the `PermissionSet` .
     */
    description?: string;
    /**
     * The inline policy that is attached to the permission set.
     */
    inlinePolicy?: any | cdk.IResolvable;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    instanceArn: string;
    /**
     * A structure that stores the details of the AWS managed policy.
     */
    managedPolicies?: Array<string>;
    /**
     * The name of the permission set.
     */
    name: string;
    /**
     * Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary.
     */
    permissionsBoundary?: cdk.IResolvable | CfnPermissionSet.PermissionsBoundaryProperty;
    /**
     * Used to redirect users within the application during the federation authentication process.
     */
    relayStateType?: string;
    /**
     * The length of time that the application user sessions are valid for in the ISO-8601 standard.
     */
    sessionDuration?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to attach to the new `PermissionSet` .
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPermissionSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPermissionSet {
    /**
     * Specifies the name and path of a customer managed policy.
     *
     * You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html
     */
    interface CustomerManagedPolicyReferenceProperty {
        /**
         * The name of the IAM policy that you have configured in each account where you want to deploy your permission set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-name
         */
        readonly name: string;
        /**
         * The path to the IAM policy that you have configured in each account where you want to deploy your permission set.
         *
         * The default is `/` . For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-path
         */
        readonly path?: string;
    }
    /**
     * Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary.
     *
     * Specify either `CustomerManagedPolicyReference` to use the name and path of a customer managed policy, or `ManagedPolicyArn` to use the ARN of an AWS managed policy. A permissions boundary represents the maximum permissions that any policy can grant your role. For more information, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide* .
     *
     * > Policies used as permissions boundaries don't provide permissions. You must also attach an IAM policy to the role. To learn how the effective permissions for a role are evaluated, see [IAM JSON policy evaluation logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html) in the *IAM User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html
     */
    interface PermissionsBoundaryProperty {
        /**
         * Specifies the name and path of a customer managed policy.
         *
         * You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-customermanagedpolicyreference
         */
        readonly customerManagedPolicyReference?: CfnPermissionSet.CustomerManagedPolicyReferenceProperty | cdk.IResolvable;
        /**
         * The AWS managed policy ARN that you want to attach to a permission set as a permissions boundary.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-managedpolicyarn
         */
        readonly managedPolicyArn?: string;
    }
}
/**
 * Properties for defining a `CfnPermissionSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html
 */
export interface CfnPermissionSetProps {
    /**
     * Specifies the names and paths of the customer managed policies that you have attached to your permission set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#cfn-sso-permissionset-customermanagedpolicyreferences
     */
    readonly customerManagedPolicyReferences?: Array<CfnPermissionSet.CustomerManagedPolicyReferenceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the `PermissionSet` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#cfn-sso-permissionset-description
     */
    readonly description?: string;
    /**
     * The inline policy that is attached to the permission set.
     *
     * > For `Length Constraints` , if a valid ARN is provided for a permission set, it is possible for an empty inline policy to be returned.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#cfn-sso-permissionset-inlinepolicy
     */
    readonly inlinePolicy?: any | cdk.IResolvable;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     *
     * For more information about ARNs, see [Amazon Resource Names (ARNs) and AWS Service Namespaces](https://docs.aws.amazon.com//general/latest/gr/aws-arns-and-namespaces.html) in the *AWS General Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#cfn-sso-permissionset-instancearn
     */
    readonly instanceArn: string;
    /**
     * A structure that stores the details of the AWS managed policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#cfn-sso-permissionset-managedpolicies
     */
    readonly managedPolicies?: Array<string>;
    /**
     * The name of the permission set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#cfn-sso-permissionset-name
     */
    readonly name: string;
    /**
     * Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary.
     *
     * Specify either `CustomerManagedPolicyReference` to use the name and path of a customer managed policy, or `ManagedPolicyArn` to use the ARN of an AWS managed policy. A permissions boundary represents the maximum permissions that any policy can grant your role. For more information, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide* .
     *
     * > Policies used as permissions boundaries don't provide permissions. You must also attach an IAM policy to the role. To learn how the effective permissions for a role are evaluated, see [IAM JSON policy evaluation logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html) in the *IAM User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#cfn-sso-permissionset-permissionsboundary
     */
    readonly permissionsBoundary?: cdk.IResolvable | CfnPermissionSet.PermissionsBoundaryProperty;
    /**
     * Used to redirect users within the application during the federation authentication process.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#cfn-sso-permissionset-relaystatetype
     */
    readonly relayStateType?: string;
    /**
     * The length of time that the application user sessions are valid for in the ISO-8601 standard.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#cfn-sso-permissionset-sessionduration
     */
    readonly sessionDuration?: string;
    /**
     * The tags to attach to the new `PermissionSet` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#cfn-sso-permissionset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an application in IAM Identity Center for the given application provider.
 *
 * @cloudformationResource AWS::SSO::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplication from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplication;
    /**
     * The ARN of the application.
     *
     * @cloudformationAttribute ApplicationArn
     */
    readonly attrApplicationArn: string;
    /**
     * The ARN of the application provider for this application.
     */
    applicationProviderArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the application.
     */
    description?: string;
    /**
     * The ARN of the instance of IAM Identity Center that is configured with this application.
     */
    instanceArn: string;
    /**
     * The name of the application.
     */
    name: string;
    /**
     * A structure that describes the options for the access portal associated with this application.
     */
    portalOptions?: cdk.IResolvable | CfnApplication.PortalOptionsConfigurationProperty;
    /**
     * The current status of the application in this instance of IAM Identity Center.
     */
    status?: string;
    /**
     * Specifies tags to be attached to the application.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplication {
    /**
     * A structure that describes the options for the portal associated with an application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-application-portaloptionsconfiguration.html
     */
    interface PortalOptionsConfigurationProperty {
        /**
         * A structure that describes the sign-in options for the access portal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-application-portaloptionsconfiguration.html#cfn-sso-application-portaloptionsconfiguration-signinoptions
         */
        readonly signInOptions?: cdk.IResolvable | CfnApplication.SignInOptionsProperty;
        /**
         * Indicates whether this application is visible in the access portal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-application-portaloptionsconfiguration.html#cfn-sso-application-portaloptionsconfiguration-visibility
         */
        readonly visibility?: string;
    }
    /**
     * A structure that describes the sign-in options for an application portal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-application-signinoptions.html
     */
    interface SignInOptionsProperty {
        /**
         * The URL that accepts authentication requests for an application.
         *
         * This is a required parameter if the `Origin` parameter is `APPLICATION` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-application-signinoptions.html#cfn-sso-application-signinoptions-applicationurl
         */
        readonly applicationUrl?: string;
        /**
         * This determines how IAM Identity Center navigates the user to the target application.
         *
         * It can be one of the following values:
         *
         * - `APPLICATION` : IAM Identity Center redirects the customer to the configured `ApplicationUrl` .
         * - `IDENTITY_CENTER` : IAM Identity Center uses SAML identity-provider initiated authentication to sign the customer directly into a SAML-based application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-application-signinoptions.html#cfn-sso-application-signinoptions-origin
         */
        readonly origin: string;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html
 */
export interface CfnApplicationProps {
    /**
     * The ARN of the application provider for this application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-applicationproviderarn
     */
    readonly applicationProviderArn: string;
    /**
     * The description of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-description
     */
    readonly description?: string;
    /**
     * The ARN of the instance of IAM Identity Center that is configured with this application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-name
     */
    readonly name: string;
    /**
     * A structure that describes the options for the access portal associated with this application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-portaloptions
     */
    readonly portalOptions?: cdk.IResolvable | CfnApplication.PortalOptionsConfigurationProperty;
    /**
     * The current status of the application in this instance of IAM Identity Center.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-status
     */
    readonly status?: string;
    /**
     * Specifies tags to be attached to the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * A structure that describes an assignment of a principal to an application.
 *
 * @cloudformationResource AWS::SSO::ApplicationAssignment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html
 */
export declare class CfnApplicationAssignment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationAssignment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationAssignment;
    /**
     * The ARN of the application that has principals assigned.
     */
    applicationArn: string;
    /**
     * The unique identifier of the principal assigned to the application.
     */
    principalId: string;
    /**
     * The type of the principal assigned to the application.
     */
    principalType: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationAssignmentProps);
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
 * Properties for defining a `CfnApplicationAssignment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html
 */
export interface CfnApplicationAssignmentProps {
    /**
     * The ARN of the application that has principals assigned.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html#cfn-sso-applicationassignment-applicationarn
     */
    readonly applicationArn: string;
    /**
     * The unique identifier of the principal assigned to the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html#cfn-sso-applicationassignment-principalid
     */
    readonly principalId: string;
    /**
     * The type of the principal assigned to the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html#cfn-sso-applicationassignment-principaltype
     */
    readonly principalType: string;
}
/**
 * Creates an instance of IAM Identity Center for a standalone AWS account that is not managed by AWS Organizations or a member AWS account in an organization.
 *
 * You can create only one instance per account and across all AWS Regions .
 *
 * The CreateInstance request is rejected if the following apply:
 *
 * - The instance is created within the organization management account.
 * - An instance already exists in the same account.
 *
 * @cloudformationResource AWS::SSO::Instance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html
 */
export declare class CfnInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInstance;
    /**
     * The identifier of the identity store that is connected to the Identity Center instance.
     *
     * @cloudformationAttribute IdentityStoreId
     */
    readonly attrIdentityStoreId: string;
    /**
     * The ARN of the Identity Center instance under which the operation will be executed. For more information about ARNs, see [Amazon Resource
     * Names (ARNs) and AWS Service Namespaces](https://docs.aws.amazon.com//general/latest/gr/aws-arns-and-namespaces.html) in the *AWS General Reference* .
     *
     * @cloudformationAttribute InstanceArn
     */
    readonly attrInstanceArn: string;
    /**
     * The AWS account ID number of the owner of the Identity Center instance.
     *
     * @cloudformationAttribute OwnerAccountId
     */
    readonly attrOwnerAccountId: string;
    /**
     * The current status of this Identity Center instance.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the Identity Center instance.
     */
    name?: string;
    /**
     * Specifies tags to be attached to the instance of IAM Identity Center.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnInstanceProps);
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
 * Properties for defining a `CfnInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html
 */
export interface CfnInstanceProps {
    /**
     * The name of the Identity Center instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html#cfn-sso-instance-name
     */
    readonly name?: string;
    /**
     * Specifies tags to be attached to the instance of IAM Identity Center.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html#cfn-sso-instance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
