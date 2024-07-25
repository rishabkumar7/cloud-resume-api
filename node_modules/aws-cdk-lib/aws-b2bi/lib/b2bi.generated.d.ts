import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Instantiates a capability based on the specified parameters.
 *
 * A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
 *
 * @cloudformationResource AWS::B2BI::Capability
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html
 */
export declare class CfnCapability extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCapability from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCapability;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific AWS resource, such as a capability, partnership, profile, or transformer.
     *
     * @cloudformationAttribute CapabilityArn
     */
    readonly attrCapabilityArn: string;
    /**
     * Returns a system-assigned unique identifier for the capability.
     *
     * @cloudformationAttribute CapabilityId
     */
    readonly attrCapabilityId: string;
    /**
     * Returns a timestamp for creation date and time of the capability.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Returns a timestamp that identifies the most recent date and time that the capability was modified.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Specifies a structure that contains the details for a capability.
     */
    configuration: CfnCapability.CapabilityConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability.
     */
    instructionsDocuments?: Array<cdk.IResolvable | CfnCapability.S3LocationProperty> | cdk.IResolvable;
    /**
     * The display name of the capability.
     */
    name: string;
    /**
     * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Returns the type of the capability.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCapabilityProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCapability {
    /**
     * A capability object.
     *
     * Currently, only EDI (electronic data interchange) capabilities are supported. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-capabilityconfiguration.html
     */
    interface CapabilityConfigurationProperty {
        /**
         * An EDI (electronic data interchange) configuration object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-capabilityconfiguration.html#cfn-b2bi-capability-capabilityconfiguration-edi
         */
        readonly edi: CfnCapability.EdiConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Specifies the details for the EDI (electronic data interchange) transformation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html
     */
    interface EdiConfigurationProperty {
        /**
         * Contains the Amazon S3 bucket and prefix for the location of the input file, which is contained in an `S3Location` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html#cfn-b2bi-capability-ediconfiguration-inputlocation
         */
        readonly inputLocation: cdk.IResolvable | CfnCapability.S3LocationProperty;
        /**
         * Contains the Amazon S3 bucket and prefix for the location of the output file, which is contained in an `S3Location` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html#cfn-b2bi-capability-ediconfiguration-outputlocation
         */
        readonly outputLocation: cdk.IResolvable | CfnCapability.S3LocationProperty;
        /**
         * Returns the system-assigned unique identifier for the transformer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html#cfn-b2bi-capability-ediconfiguration-transformerid
         */
        readonly transformerId: string;
        /**
         * Returns the type of the capability.
         *
         * Currently, only `edi` is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html#cfn-b2bi-capability-ediconfiguration-type
         */
        readonly type: CfnCapability.EdiTypeProperty | cdk.IResolvable;
    }
    /**
     * Specifies the details for the EDI standard that is being used for the transformer.
     *
     * Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-editype.html
     */
    interface EdiTypeProperty {
        /**
         * Returns the details for the EDI standard that is being used for the transformer.
         *
         * Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-editype.html#cfn-b2bi-capability-editype-x12details
         */
        readonly x12Details: cdk.IResolvable | CfnCapability.X12DetailsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-x12details.html
     */
    interface X12DetailsProperty {
        /**
         * Returns an enumerated type where each value identifies an X12 transaction set.
         *
         * Transaction sets are maintained by the X12 Accredited Standards Committee.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-x12details.html#cfn-b2bi-capability-x12details-transactionset
         */
        readonly transactionSet?: string;
        /**
         * Returns the version to use for the specified X12 transaction set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-x12details.html#cfn-b2bi-capability-x12details-version
         */
        readonly version?: string;
    }
    /**
     * Specifies the details for the Amazon S3 file location that is being used with AWS B2BI Data Interchange.
     *
     * File locations in Amazon S3 are identified using a combination of the bucket and key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-s3location.html
     */
    interface S3LocationProperty {
        /**
         * Specifies the name of the Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-s3location.html#cfn-b2bi-capability-s3location-bucketname
         */
        readonly bucketName?: string;
        /**
         * Specifies the Amazon S3 key for the file location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-s3location.html#cfn-b2bi-capability-s3location-key
         */
        readonly key?: string;
    }
}
/**
 * Properties for defining a `CfnCapability`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html
 */
export interface CfnCapabilityProps {
    /**
     * Specifies a structure that contains the details for a capability.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-configuration
     */
    readonly configuration: CfnCapability.CapabilityConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability.
     *
     * Each item contains the name of the bucket and the key, to identify the document's location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-instructionsdocuments
     */
    readonly instructionsDocuments?: Array<cdk.IResolvable | CfnCapability.S3LocationProperty> | cdk.IResolvable;
    /**
     * The display name of the capability.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-name
     */
    readonly name: string;
    /**
     * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type.
     *
     * You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Returns the type of the capability.
     *
     * Currently, only `edi` is supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-type
     */
    readonly type: string;
}
/**
 * Creates a partnership between a customer and a trading partner, based on the supplied parameters.
 *
 * A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
 *
 * @cloudformationResource AWS::B2BI::Partnership
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html
 */
export declare class CfnPartnership extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPartnership from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPartnership;
    /**
     * Returns a timestamp for creation date and time of the partnership.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Returns a timestamp that identifies the most recent date and time that the partnership was modified.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific AWS resource, such as a capability, partnership, profile, or transformer.
     *
     * @cloudformationAttribute PartnershipArn
     */
    readonly attrPartnershipArn: string;
    /**
     * Returns the unique, system-generated identifier for a partnership.
     *
     * @cloudformationAttribute PartnershipId
     */
    readonly attrPartnershipId: string;
    /**
     * Returns the unique, system-generated identifier for a trading partner.
     *
     * @cloudformationAttribute TradingPartnerId
     */
    readonly attrTradingPartnerId: string;
    /**
     * Returns one or more capabilities associated with this partnership.
     */
    capabilities?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    email: string;
    /**
     * Returns the name of the partnership.
     */
    name: string;
    phone?: string;
    /**
     * Returns the unique, system-generated identifier for the profile connected to this partnership.
     */
    profileId: string;
    /**
     * A key-value pair for a specific partnership.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPartnershipProps);
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
 * Properties for defining a `CfnPartnership`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html
 */
export interface CfnPartnershipProps {
    /**
     * Returns one or more capabilities associated with this partnership.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-capabilities
     */
    readonly capabilities?: Array<string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-email
     */
    readonly email: string;
    /**
     * Returns the name of the partnership.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-name
     */
    readonly name: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-phone
     */
    readonly phone?: string;
    /**
     * Returns the unique, system-generated identifier for the profile connected to this partnership.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-profileid
     */
    readonly profileId: string;
    /**
     * A key-value pair for a specific partnership.
     *
     * Tags are metadata that you can use to search for and group capabilities for various purposes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a customer profile.
 *
 * You can have up to five customer profiles, each representing a distinct private network. A profile is the mechanism used to create the concept of a private network.
 *
 * @cloudformationResource AWS::B2BI::Profile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html
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
     * Returns the timestamp for creation date and time of the profile.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Returns the name of the logging group.
     *
     * @cloudformationAttribute LogGroupName
     */
    readonly attrLogGroupName: string;
    /**
     * Returns the timestamp that identifies the most recent date and time that the profile was modified.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Returns an Amazon Resource Name (ARN) for the profile.
     *
     * @cloudformationAttribute ProfileArn
     */
    readonly attrProfileArn: string;
    /**
     * @cloudformationAttribute ProfileId
     */
    readonly attrProfileId: string;
    /**
     * Returns the name for the business associated with this profile.
     */
    businessName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    email?: string;
    /**
     * Specifies whether or not logging is enabled for this profile.
     */
    logging: string;
    /**
     * Returns the display name for profile.
     */
    name: string;
    phone: string;
    /**
     * A key-value pair for a specific profile.
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html
 */
export interface CfnProfileProps {
    /**
     * Returns the name for the business associated with this profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-businessname
     */
    readonly businessName: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-email
     */
    readonly email?: string;
    /**
     * Specifies whether or not logging is enabled for this profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-logging
     */
    readonly logging: string;
    /**
     * Returns the display name for profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-name
     */
    readonly name: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-phone
     */
    readonly phone: string;
    /**
     * A key-value pair for a specific profile.
     *
     * Tags are metadata that you can use to search for and group capabilities for various purposes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a transformer.
 *
 * A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
 *
 * @cloudformationResource AWS::B2BI::Transformer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html
 */
export declare class CfnTransformer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTransformer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTransformer;
    /**
     * Returns a timestamp indicating when the transformer was created. For example, `2023-07-20T19:58:44.624Z` .
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Returns a timestamp representing the date and time for the most recent change for the transformer object.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific transformer.
     *
     * @cloudformationAttribute TransformerArn
     */
    readonly attrTransformerArn: string;
    /**
     * The system-assigned unique identifier for the transformer.
     *
     * @cloudformationAttribute TransformerId
     */
    readonly attrTransformerId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Returns the details for the EDI standard that is being used for the transformer.
     */
    ediType: CfnTransformer.EdiTypeProperty | cdk.IResolvable;
    /**
     * Returns that the currently supported file formats for EDI transformations are `JSON` and `XML` .
     */
    fileFormat: string;
    /**
     * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     */
    mappingTemplate: string;
    /**
     * Returns the descriptive name for the transformer.
     */
    name: string;
    /**
     * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     */
    sampleDocument?: string;
    /**
     * Returns the state of the newly created transformer.
     */
    status: string;
    /**
     * A key-value pair for a specific transformer.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTransformerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTransformer {
    /**
     * Specifies the details for the EDI standard that is being used for the transformer.
     *
     * Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-editype.html
     */
    interface EdiTypeProperty {
        /**
         * Returns the details for the EDI standard that is being used for the transformer.
         *
         * Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-editype.html#cfn-b2bi-transformer-editype-x12details
         */
        readonly x12Details: cdk.IResolvable | CfnTransformer.X12DetailsProperty;
    }
    /**
     * A structure that contains the X12 transaction set and version.
     *
     * The X12 structure is used when the system transforms an EDI (electronic data interchange) file.
     *
     * > If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-x12details.html
     */
    interface X12DetailsProperty {
        /**
         * Returns an enumerated type where each value identifies an X12 transaction set.
         *
         * Transaction sets are maintained by the X12 Accredited Standards Committee.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-x12details.html#cfn-b2bi-transformer-x12details-transactionset
         */
        readonly transactionSet?: string;
        /**
         * Returns the version to use for the specified X12 transaction set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-x12details.html#cfn-b2bi-transformer-x12details-version
         */
        readonly version?: string;
    }
}
/**
 * Properties for defining a `CfnTransformer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html
 */
export interface CfnTransformerProps {
    /**
     * Returns the details for the EDI standard that is being used for the transformer.
     *
     * Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-editype
     */
    readonly ediType: CfnTransformer.EdiTypeProperty | cdk.IResolvable;
    /**
     * Returns that the currently supported file formats for EDI transformations are `JSON` and `XML` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-fileformat
     */
    readonly fileFormat: string;
    /**
     * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-mappingtemplate
     */
    readonly mappingTemplate: string;
    /**
     * Returns the descriptive name for the transformer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-name
     */
    readonly name: string;
    /**
     * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-sampledocument
     */
    readonly sampleDocument?: string;
    /**
     * Returns the state of the newly created transformer.
     *
     * The transformer can be either `active` or `inactive` . For the transformer to be used in a capability, its status must `active` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-status
     */
    readonly status: string;
    /**
     * A key-value pair for a specific transformer.
     *
     * Tags are metadata that you can use to search for and group capabilities for various purposes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
