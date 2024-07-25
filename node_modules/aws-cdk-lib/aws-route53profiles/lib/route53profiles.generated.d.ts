import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * A complex type that includes settings for a Route 53 Profile.
 *
 * @cloudformationResource AWS::Route53Profiles::Profile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profile.html
 */
export declare class CfnProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
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
     * The Amazon Resource Name (ARN) of the Profile.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The `ClientToken` value that was assigned when the Profile was created.
     *
     * @cloudformationAttribute ClientToken
     */
    readonly attrClientToken: string;
    /**
     * ID of the Profile.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Name of the Profile.
     */
    name: string;
    /**
     * A list of the tag keys and values that you want to associate with the profile.
     */
    tags?: Array<cdk.CfnTag>;
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
/**
 * Properties for defining a `CfnProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profile.html
 */
export interface CfnProfileProps {
    /**
     * Name of the Profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profile.html#cfn-route53profiles-profile-name
     */
    readonly name: string;
    /**
     * A list of the tag keys and values that you want to associate with the profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profile.html#cfn-route53profiles-profile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * An association between a Route 53 Profile and a VPC.
 *
 * @cloudformationResource AWS::Route53Profiles::ProfileAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html
 */
export declare class CfnProfileAssociation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProfileAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProfileAssociation;
    /**
     * ID of the Profile association.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Amazon Resource Name (ARN) of the profile association to a VPC.
     */
    arn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Name of the Profile association.
     */
    name: string;
    /**
     * ID of the Profile.
     */
    profileId: string;
    /**
     * The ID of the VPC.
     */
    resourceId: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProfileAssociationProps);
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
 * Properties for defining a `CfnProfileAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html
 */
export interface CfnProfileAssociationProps {
    /**
     * The Amazon Resource Name (ARN) of the profile association to a VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-arn
     */
    readonly arn?: string;
    /**
     * Name of the Profile association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-name
     */
    readonly name: string;
    /**
     * ID of the Profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-profileid
     */
    readonly profileId: string;
    /**
     * The ID of the VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-resourceid
     */
    readonly resourceId: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The association between a Route 53 Profile and resources.
 *
 * @cloudformationResource AWS::Route53Profiles::ProfileResourceAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileresourceassociation.html
 */
export declare class CfnProfileResourceAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProfileResourceAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProfileResourceAssociation;
    /**
     * ID of the Profile resource association.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Resource type, such as a private hosted zone, or DNS Firewall rule group.
     *
     * @cloudformationAttribute ResourceType
     */
    readonly attrResourceType: string;
    /**
     * Name of the Profile resource association.
     */
    name: string;
    /**
     * Profile ID of the Profile that the resources are associated with.
     */
    profileId: string;
    /**
     * The Amazon Resource Name (ARN) of the resource association.
     */
    resourceArn: string;
    /**
     * If the DNS resource is a DNS Firewall rule group, this indicates the priority.
     */
    resourceProperties?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProfileResourceAssociationProps);
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
 * Properties for defining a `CfnProfileResourceAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileresourceassociation.html
 */
export interface CfnProfileResourceAssociationProps {
    /**
     * Name of the Profile resource association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileresourceassociation.html#cfn-route53profiles-profileresourceassociation-name
     */
    readonly name: string;
    /**
     * Profile ID of the Profile that the resources are associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileresourceassociation.html#cfn-route53profiles-profileresourceassociation-profileid
     */
    readonly profileId: string;
    /**
     * The Amazon Resource Name (ARN) of the resource association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileresourceassociation.html#cfn-route53profiles-profileresourceassociation-resourcearn
     */
    readonly resourceArn: string;
    /**
     * If the DNS resource is a DNS Firewall rule group, this indicates the priority.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileresourceassociation.html#cfn-route53profiles-profileresourceassociation-resourceproperties
     */
    readonly resourceProperties?: string;
}
