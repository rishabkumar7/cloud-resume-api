import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a connector between AWS Private CA and an Active Directory.
 *
 * You must specify the private CA, directory ID, and security groups.
 *
 * @cloudformationResource AWS::PCAConnectorAD::Connector
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html
 */
export declare class CfnConnector extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnector from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnector;
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html) .
     *
     * @cloudformationAttribute ConnectorArn
     */
    readonly attrConnectorArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the certificate authority being used.
     */
    certificateAuthorityArn: string;
    /**
     * The identifier of the Active Directory.
     */
    directoryId: string;
    /**
     * Metadata assigned to a connector consisting of a key-value pair.
     */
    tags?: Record<string, string>;
    /**
     * Information of the VPC and security group(s) used with the connector.
     */
    vpcInformation: cdk.IResolvable | CfnConnector.VpcInformationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConnectorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConnector {
    /**
     * Information about your VPC and security groups used with the connector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-connector-vpcinformation.html
     */
    interface VpcInformationProperty {
        /**
         * The security groups used with the connector.
         *
         * You can use a maximum of 4 security groups with a connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-connector-vpcinformation.html#cfn-pcaconnectorad-connector-vpcinformation-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
    }
}
/**
 * Properties for defining a `CfnConnector`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html
 */
export interface CfnConnectorProps {
    /**
     * The Amazon Resource Name (ARN) of the certificate authority being used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#cfn-pcaconnectorad-connector-certificateauthorityarn
     */
    readonly certificateAuthorityArn: string;
    /**
     * The identifier of the Active Directory.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#cfn-pcaconnectorad-connector-directoryid
     */
    readonly directoryId: string;
    /**
     * Metadata assigned to a connector consisting of a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#cfn-pcaconnectorad-connector-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * Information of the VPC and security group(s) used with the connector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#cfn-pcaconnectorad-connector-vpcinformation
     */
    readonly vpcInformation: cdk.IResolvable | CfnConnector.VpcInformationProperty;
}
/**
 * Creates a directory registration that authorizes communication between AWS Private CA and an Active Directory.
 *
 * @cloudformationResource AWS::PCAConnectorAD::DirectoryRegistration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html
 */
export declare class CfnDirectoryRegistration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDirectoryRegistration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDirectoryRegistration;
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html) .
     *
     * @cloudformationAttribute DirectoryRegistrationArn
     */
    readonly attrDirectoryRegistrationArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The identifier of the Active Directory.
     */
    directoryId: string;
    /**
     * Metadata assigned to a directory registration consisting of a key-value pair.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDirectoryRegistrationProps);
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
 * Properties for defining a `CfnDirectoryRegistration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html
 */
export interface CfnDirectoryRegistrationProps {
    /**
     * The identifier of the Active Directory.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html#cfn-pcaconnectorad-directoryregistration-directoryid
     */
    readonly directoryId: string;
    /**
     * Metadata assigned to a directory registration consisting of a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html#cfn-pcaconnectorad-directoryregistration-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Creates a service principal name (SPN) for the service account in Active Directory.
 *
 * Kerberos authentication uses SPNs to associate a service instance with a service sign-in account.
 *
 * @cloudformationResource AWS::PCAConnectorAD::ServicePrincipalName
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html
 */
export declare class CfnServicePrincipalName extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnServicePrincipalName from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnServicePrincipalName;
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector.html](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html) .
     */
    connectorArn?: string;
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html) .
     */
    directoryRegistrationArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnServicePrincipalNameProps);
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
 * Properties for defining a `CfnServicePrincipalName`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html
 */
export interface CfnServicePrincipalNameProps {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector.html](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html#cfn-pcaconnectorad-serviceprincipalname-connectorarn
     */
    readonly connectorArn?: string;
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html#cfn-pcaconnectorad-serviceprincipalname-directoryregistrationarn
     */
    readonly directoryRegistrationArn?: string;
}
/**
 * Creates an Active Directory compatible certificate template.
 *
 * The connectors issues certificates using these templates based on the requester’s Active Directory group membership.
 *
 * @cloudformationResource AWS::PCAConnectorAD::Template
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html
 */
export declare class CfnTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTemplate;
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html) .
     *
     * @cloudformationAttribute TemplateArn
     */
    readonly attrTemplateArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html) .
     */
    connectorArn: string;
    /**
     * Template configuration to define the information included in certificates.
     */
    definition: cdk.IResolvable | CfnTemplate.TemplateDefinitionProperty;
    /**
     * Name of the templates.
     */
    name: string;
    /**
     * This setting allows the major version of a template to be increased automatically.
     */
    reenrollAllCertificateHolders?: boolean | cdk.IResolvable;
    /**
     * Metadata assigned to a template consisting of a key-value pair.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTemplate {
    /**
     * Template configuration to define the information included in certificates.
     *
     * Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatedefinition.html
     */
    interface TemplateDefinitionProperty {
        /**
         * Template configuration to define the information included in certificates.
         *
         * Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatedefinition.html#cfn-pcaconnectorad-template-templatedefinition-templatev2
         */
        readonly templateV2?: cdk.IResolvable | CfnTemplate.TemplateV2Property;
        /**
         * Template configuration to define the information included in certificates.
         *
         * Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatedefinition.html#cfn-pcaconnectorad-template-templatedefinition-templatev3
         */
        readonly templateV3?: cdk.IResolvable | CfnTemplate.TemplateV3Property;
        /**
         * Template configuration to define the information included in certificates.
         *
         * Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatedefinition.html#cfn-pcaconnectorad-template-templatedefinition-templatev4
         */
        readonly templateV4?: cdk.IResolvable | CfnTemplate.TemplateV4Property;
    }
    /**
     * v4 template schema that can use either Legacy Cryptographic Providers or Key Storage Providers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html
     */
    interface TemplateV4Property {
        /**
         * Certificate validity describes the validity and renewal periods of a certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html#cfn-pcaconnectorad-template-templatev4-certificatevalidity
         */
        readonly certificateValidity: CfnTemplate.CertificateValidityProperty | cdk.IResolvable;
        /**
         * Enrollment flags describe the enrollment settings for certificates using the existing private key and deleting expired or revoked certificates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html#cfn-pcaconnectorad-template-templatev4-enrollmentflags
         */
        readonly enrollmentFlags: CfnTemplate.EnrollmentFlagsV4Property | cdk.IResolvable;
        /**
         * Extensions describe the key usage extensions and application policies for a template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html#cfn-pcaconnectorad-template-templatev4-extensions
         */
        readonly extensions: CfnTemplate.ExtensionsV4Property | cdk.IResolvable;
        /**
         * General flags describe whether the template is used for computers or users and if the template can be used with autoenrollment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html#cfn-pcaconnectorad-template-templatev4-generalflags
         */
        readonly generalFlags: CfnTemplate.GeneralFlagsV4Property | cdk.IResolvable;
        /**
         * Specifies the hash algorithm used to hash the private key.
         *
         * Hash algorithm can only be specified when using Key Storage Providers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html#cfn-pcaconnectorad-template-templatev4-hashalgorithm
         */
        readonly hashAlgorithm?: string;
        /**
         * Private key attributes allow you to specify the minimal key length, key spec, key usage, and cryptographic providers for the private key of a certificate for v4 templates.
         *
         * V4 templates allow you to use either Key Storage Providers or Legacy Cryptographic Service Providers. You specify the cryptography provider category in private key flags.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html#cfn-pcaconnectorad-template-templatev4-privatekeyattributes
         */
        readonly privateKeyAttributes: cdk.IResolvable | CfnTemplate.PrivateKeyAttributesV4Property;
        /**
         * Private key flags for v4 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, if an alternate signature algorithm should be used, and if certificates are renewed using the same private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html#cfn-pcaconnectorad-template-templatev4-privatekeyflags
         */
        readonly privateKeyFlags: cdk.IResolvable | CfnTemplate.PrivateKeyFlagsV4Property;
        /**
         * Subject name flags describe the subject name and subject alternate name that is included in a certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html#cfn-pcaconnectorad-template-templatev4-subjectnameflags
         */
        readonly subjectNameFlags: cdk.IResolvable | CfnTemplate.SubjectNameFlagsV4Property;
        /**
         * List of templates in Active Directory that are superseded by this template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html#cfn-pcaconnectorad-template-templatev4-supersededtemplates
         */
        readonly supersededTemplates?: Array<string>;
    }
    /**
     * Information to include in the subject name and alternate subject name of the certificate.
     *
     * The subject name can be common name, directory path, DNS as common name, or left blank. You can optionally include email to the subject name for user templates. If you leave the subject name blank then you must set a subject alternate name. The subject alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email, service principal name (SPN), and user principal name (UPN). You can leave the SAN blank. If you leave the SAN blank, then you must set a subject name.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html
     */
    interface SubjectNameFlagsV4Property {
        /**
         * Include the common name in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html#cfn-pcaconnectorad-template-subjectnameflagsv4-requirecommonname
         */
        readonly requireCommonName?: boolean | cdk.IResolvable;
        /**
         * Include the directory path in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html#cfn-pcaconnectorad-template-subjectnameflagsv4-requiredirectorypath
         */
        readonly requireDirectoryPath?: boolean | cdk.IResolvable;
        /**
         * Include the DNS as common name in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html#cfn-pcaconnectorad-template-subjectnameflagsv4-requirednsascn
         */
        readonly requireDnsAsCn?: boolean | cdk.IResolvable;
        /**
         * Include the subject's email in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html#cfn-pcaconnectorad-template-subjectnameflagsv4-requireemail
         */
        readonly requireEmail?: boolean | cdk.IResolvable;
        /**
         * Include the globally unique identifier (GUID) in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequiredirectoryguid
         */
        readonly sanRequireDirectoryGuid?: boolean | cdk.IResolvable;
        /**
         * Include the DNS in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequiredns
         */
        readonly sanRequireDns?: boolean | cdk.IResolvable;
        /**
         * Include the domain DNS in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequiredomaindns
         */
        readonly sanRequireDomainDns?: boolean | cdk.IResolvable;
        /**
         * Include the subject's email in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequireemail
         */
        readonly sanRequireEmail?: boolean | cdk.IResolvable;
        /**
         * Include the service principal name (SPN) in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequirespn
         */
        readonly sanRequireSpn?: boolean | cdk.IResolvable;
        /**
         * Include the user principal name (UPN) in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequireupn
         */
        readonly sanRequireUpn?: boolean | cdk.IResolvable;
    }
    /**
     * Private key flags for v4 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, if an alternate signature algorithm should be used, and if certificates are renewed using the same private key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv4.html
     */
    interface PrivateKeyFlagsV4Property {
        /**
         * Defines the minimum client compatibility.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv4.html#cfn-pcaconnectorad-template-privatekeyflagsv4-clientversion
         */
        readonly clientVersion: string;
        /**
         * Allows the private key to be exported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv4.html#cfn-pcaconnectorad-template-privatekeyflagsv4-exportablekey
         */
        readonly exportableKey?: boolean | cdk.IResolvable;
        /**
         * Requires the PKCS #1 v2.1 signature format for certificates. You should verify that your CA, objects, and applications can accept this signature format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv4.html#cfn-pcaconnectorad-template-privatekeyflagsv4-requirealternatesignaturealgorithm
         */
        readonly requireAlternateSignatureAlgorithm?: boolean | cdk.IResolvable;
        /**
         * Renew certificate using the same private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv4.html#cfn-pcaconnectorad-template-privatekeyflagsv4-requiresamekeyrenewal
         */
        readonly requireSameKeyRenewal?: boolean | cdk.IResolvable;
        /**
         * Require user input when using the private key for enrollment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv4.html#cfn-pcaconnectorad-template-privatekeyflagsv4-strongkeyprotectionrequired
         */
        readonly strongKeyProtectionRequired?: boolean | cdk.IResolvable;
        /**
         * Specifies the cryptographic service provider category used to generate private keys.
         *
         * Set to TRUE to use Legacy Cryptographic Service Providers and FALSE to use Key Storage Providers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv4.html#cfn-pcaconnectorad-template-privatekeyflagsv4-uselegacyprovider
         */
        readonly useLegacyProvider?: boolean | cdk.IResolvable;
    }
    /**
     * Defines the attributes of the private key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv4.html
     */
    interface PrivateKeyAttributesV4Property {
        /**
         * Defines the algorithm used to generate the private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv4.html#cfn-pcaconnectorad-template-privatekeyattributesv4-algorithm
         */
        readonly algorithm?: string;
        /**
         * Defines the cryptographic providers used to generate the private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv4.html#cfn-pcaconnectorad-template-privatekeyattributesv4-cryptoproviders
         */
        readonly cryptoProviders?: Array<string>;
        /**
         * Defines the purpose of the private key.
         *
         * Set it to "KEY_EXCHANGE" or "SIGNATURE" value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv4.html#cfn-pcaconnectorad-template-privatekeyattributesv4-keyspec
         */
        readonly keySpec: string;
        /**
         * The key usage property defines the purpose of the private key contained in the certificate.
         *
         * You can specify specific purposes using property flags or all by using property type ALL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv4.html#cfn-pcaconnectorad-template-privatekeyattributesv4-keyusageproperty
         */
        readonly keyUsageProperty?: cdk.IResolvable | CfnTemplate.KeyUsagePropertyProperty;
        /**
         * Set the minimum key length of the private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv4.html#cfn-pcaconnectorad-template-privatekeyattributesv4-minimalkeylength
         */
        readonly minimalKeyLength: number;
    }
    /**
     * The key usage property defines the purpose of the private key contained in the certificate.
     *
     * You can specify specific purposes using property flags or all by using property type ALL.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageproperty.html
     */
    interface KeyUsagePropertyProperty {
        /**
         * You can specify key usage for encryption, key agreement, and signature.
         *
         * You can use property flags or property type but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageproperty.html#cfn-pcaconnectorad-template-keyusageproperty-propertyflags
         */
        readonly propertyFlags?: cdk.IResolvable | CfnTemplate.KeyUsagePropertyFlagsProperty;
        /**
         * You can specify all key usages using property type ALL.
         *
         * You can use property type or property flags but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageproperty.html#cfn-pcaconnectorad-template-keyusageproperty-propertytype
         */
        readonly propertyType?: string;
    }
    /**
     * Specifies key usage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusagepropertyflags.html
     */
    interface KeyUsagePropertyFlagsProperty {
        /**
         * Allows key for encryption and decryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusagepropertyflags.html#cfn-pcaconnectorad-template-keyusagepropertyflags-decrypt
         */
        readonly decrypt?: boolean | cdk.IResolvable;
        /**
         * Allows key exchange without encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusagepropertyflags.html#cfn-pcaconnectorad-template-keyusagepropertyflags-keyagreement
         */
        readonly keyAgreement?: boolean | cdk.IResolvable;
        /**
         * Allow key use for digital signature.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusagepropertyflags.html#cfn-pcaconnectorad-template-keyusagepropertyflags-sign
         */
        readonly sign?: boolean | cdk.IResolvable;
    }
    /**
     * General flags for v4 template schema that defines if the template is for a machine or a user and if the template can be issued using autoenrollment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv4.html
     */
    interface GeneralFlagsV4Property {
        /**
         * Allows certificate issuance using autoenrollment.
         *
         * Set to TRUE to allow autoenrollment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv4.html#cfn-pcaconnectorad-template-generalflagsv4-autoenrollment
         */
        readonly autoEnrollment?: boolean | cdk.IResolvable;
        /**
         * Defines if the template is for machines or users.
         *
         * Set to TRUE if the template is for machines. Set to FALSE if the template is for users
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv4.html#cfn-pcaconnectorad-template-generalflagsv4-machinetype
         */
        readonly machineType?: boolean | cdk.IResolvable;
    }
    /**
     * Information describing the end of the validity period of the certificate.
     *
     * This parameter sets the “Not After” date for the certificate. Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see Validity in RFC 5280. This value is unaffected when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the ValidityNotBefore value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-certificatevalidity.html
     */
    interface CertificateValidityProperty {
        /**
         * Renewal period is the period of time before certificate expiration when a new certificate will be requested.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-certificatevalidity.html#cfn-pcaconnectorad-template-certificatevalidity-renewalperiod
         */
        readonly renewalPeriod: cdk.IResolvable | CfnTemplate.ValidityPeriodProperty;
        /**
         * Information describing the end of the validity period of the certificate.
         *
         * This parameter sets the “Not After” date for the certificate. Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see Validity in RFC 5280. This value is unaffected when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the ValidityNotBefore value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-certificatevalidity.html#cfn-pcaconnectorad-template-certificatevalidity-validityperiod
         */
        readonly validityPeriod: cdk.IResolvable | CfnTemplate.ValidityPeriodProperty;
    }
    /**
     * Information describing the end of the validity period of the certificate.
     *
     * This parameter sets the “Not After” date for the certificate. Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in hours, days, months, or years. For more information, see Validity in RFC 5280. This value is unaffected when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the ValidityNotBefore value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-validityperiod.html
     */
    interface ValidityPeriodProperty {
        /**
         * The numeric value for the validity period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-validityperiod.html#cfn-pcaconnectorad-template-validityperiod-period
         */
        readonly period: number;
        /**
         * The unit of time.
         *
         * You can select hours, days, weeks, months, and years.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-validityperiod.html#cfn-pcaconnectorad-template-validityperiod-periodtype
         */
        readonly periodType: string;
    }
    /**
     * Certificate extensions for v4 template schema.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv4.html
     */
    interface ExtensionsV4Property {
        /**
         * Application policies specify what the certificate is used for and its purpose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv4.html#cfn-pcaconnectorad-template-extensionsv4-applicationpolicies
         */
        readonly applicationPolicies?: CfnTemplate.ApplicationPoliciesProperty | cdk.IResolvable;
        /**
         * The key usage extension defines the purpose (e.g., encipherment, signature) of the key contained in the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv4.html#cfn-pcaconnectorad-template-extensionsv4-keyusage
         */
        readonly keyUsage: cdk.IResolvable | CfnTemplate.KeyUsageProperty;
    }
    /**
     * Application policies describe what the certificate can be used for.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-applicationpolicies.html
     */
    interface ApplicationPoliciesProperty {
        /**
         * Marks the application policy extension as critical.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-applicationpolicies.html#cfn-pcaconnectorad-template-applicationpolicies-critical
         */
        readonly critical?: boolean | cdk.IResolvable;
        /**
         * Application policies describe what the certificate can be used for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-applicationpolicies.html#cfn-pcaconnectorad-template-applicationpolicies-policies
         */
        readonly policies: Array<CfnTemplate.ApplicationPolicyProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Application policies describe what the certificate can be used for.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-applicationpolicy.html
     */
    interface ApplicationPolicyProperty {
        /**
         * The object identifier (OID) of an application policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-applicationpolicy.html#cfn-pcaconnectorad-template-applicationpolicy-policyobjectidentifier
         */
        readonly policyObjectIdentifier?: string;
        /**
         * The type of application policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-applicationpolicy.html#cfn-pcaconnectorad-template-applicationpolicy-policytype
         */
        readonly policyType?: string;
    }
    /**
     * The key usage extension defines the purpose (e.g., encipherment, signature) of the key contained in the certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusage.html
     */
    interface KeyUsageProperty {
        /**
         * Sets the key usage extension to critical.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusage.html#cfn-pcaconnectorad-template-keyusage-critical
         */
        readonly critical?: boolean | cdk.IResolvable;
        /**
         * The key usage flags represent the purpose (e.g., encipherment, signature) of the key contained in the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusage.html#cfn-pcaconnectorad-template-keyusage-usageflags
         */
        readonly usageFlags: cdk.IResolvable | CfnTemplate.KeyUsageFlagsProperty;
    }
    /**
     * The key usage flags represent the purpose (e.g., encipherment, signature) of the key contained in the certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageflags.html
     */
    interface KeyUsageFlagsProperty {
        /**
         * DataEncipherment is asserted when the subject public key is used for directly enciphering raw user data without the use of an intermediate symmetric cipher.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageflags.html#cfn-pcaconnectorad-template-keyusageflags-dataencipherment
         */
        readonly dataEncipherment?: boolean | cdk.IResolvable;
        /**
         * The digitalSignature is asserted when the subject public key is used for verifying digital signatures.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageflags.html#cfn-pcaconnectorad-template-keyusageflags-digitalsignature
         */
        readonly digitalSignature?: boolean | cdk.IResolvable;
        /**
         * KeyAgreement is asserted when the subject public key is used for key agreement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageflags.html#cfn-pcaconnectorad-template-keyusageflags-keyagreement
         */
        readonly keyAgreement?: boolean | cdk.IResolvable;
        /**
         * KeyEncipherment is asserted when the subject public key is used for enciphering private or secret keys, i.e., for key transport.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageflags.html#cfn-pcaconnectorad-template-keyusageflags-keyencipherment
         */
        readonly keyEncipherment?: boolean | cdk.IResolvable;
        /**
         * NonRepudiation is asserted when the subject public key is used to verify digital signatures.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageflags.html#cfn-pcaconnectorad-template-keyusageflags-nonrepudiation
         */
        readonly nonRepudiation?: boolean | cdk.IResolvable;
    }
    /**
     * Template configurations for v4 template schema.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv4.html
     */
    interface EnrollmentFlagsV4Property {
        /**
         * Allow renewal using the same key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv4.html#cfn-pcaconnectorad-template-enrollmentflagsv4-enablekeyreuseonnttokenkeysetstoragefull
         */
        readonly enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdk.IResolvable;
        /**
         * Include symmetric algorithms allowed by the subject.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv4.html#cfn-pcaconnectorad-template-enrollmentflagsv4-includesymmetricalgorithms
         */
        readonly includeSymmetricAlgorithms?: boolean | cdk.IResolvable;
        /**
         * This flag instructs the CA to not include the security extension szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections 2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows Kerberos elevation-of-privilege vulnerability.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv4.html#cfn-pcaconnectorad-template-enrollmentflagsv4-nosecurityextension
         */
        readonly noSecurityExtension?: boolean | cdk.IResolvable;
        /**
         * Delete expired or revoked certificates instead of archiving them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv4.html#cfn-pcaconnectorad-template-enrollmentflagsv4-removeinvalidcertificatefrompersonalstore
         */
        readonly removeInvalidCertificateFromPersonalStore?: boolean | cdk.IResolvable;
        /**
         * Require user interaction when the subject is enrolled and the private key associated with the certificate is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv4.html#cfn-pcaconnectorad-template-enrollmentflagsv4-userinteractionrequired
         */
        readonly userInteractionRequired?: boolean | cdk.IResolvable;
    }
    /**
     * v3 template schema that uses Key Storage Providers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html
     */
    interface TemplateV3Property {
        /**
         * Certificate validity describes the validity and renewal periods of a certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html#cfn-pcaconnectorad-template-templatev3-certificatevalidity
         */
        readonly certificateValidity: CfnTemplate.CertificateValidityProperty | cdk.IResolvable;
        /**
         * Enrollment flags describe the enrollment settings for certificates such as using the existing private key and deleting expired or revoked certificates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html#cfn-pcaconnectorad-template-templatev3-enrollmentflags
         */
        readonly enrollmentFlags: CfnTemplate.EnrollmentFlagsV3Property | cdk.IResolvable;
        /**
         * Extensions describe the key usage extensions and application policies for a template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html#cfn-pcaconnectorad-template-templatev3-extensions
         */
        readonly extensions: CfnTemplate.ExtensionsV3Property | cdk.IResolvable;
        /**
         * General flags describe whether the template is used for computers or users and if the template can be used with autoenrollment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html#cfn-pcaconnectorad-template-templatev3-generalflags
         */
        readonly generalFlags: CfnTemplate.GeneralFlagsV3Property | cdk.IResolvable;
        /**
         * Specifies the hash algorithm used to hash the private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html#cfn-pcaconnectorad-template-templatev3-hashalgorithm
         */
        readonly hashAlgorithm: string;
        /**
         * Private key attributes allow you to specify the algorithm, minimal key length, key spec, key usage, and cryptographic providers for the private key of a certificate for v3 templates.
         *
         * V3 templates allow you to use Key Storage Providers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html#cfn-pcaconnectorad-template-templatev3-privatekeyattributes
         */
        readonly privateKeyAttributes: cdk.IResolvable | CfnTemplate.PrivateKeyAttributesV3Property;
        /**
         * Private key flags for v3 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, and if an alternate signature algorithm should be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html#cfn-pcaconnectorad-template-templatev3-privatekeyflags
         */
        readonly privateKeyFlags: cdk.IResolvable | CfnTemplate.PrivateKeyFlagsV3Property;
        /**
         * Subject name flags describe the subject name and subject alternate name that is included in a certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html#cfn-pcaconnectorad-template-templatev3-subjectnameflags
         */
        readonly subjectNameFlags: cdk.IResolvable | CfnTemplate.SubjectNameFlagsV3Property;
        /**
         * List of templates in Active Directory that are superseded by this template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html#cfn-pcaconnectorad-template-templatev3-supersededtemplates
         */
        readonly supersededTemplates?: Array<string>;
    }
    /**
     * Information to include in the subject name and alternate subject name of the certificate.
     *
     * The subject name can be common name, directory path, DNS as common name, or left blank. You can optionally include email to the subject name for user templates. If you leave the subject name blank then you must set a subject alternate name. The subject alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email, service principal name (SPN), and user principal name (UPN). You can leave the SAN blank. If you leave the SAN blank, then you must set a subject name.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html
     */
    interface SubjectNameFlagsV3Property {
        /**
         * Include the common name in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html#cfn-pcaconnectorad-template-subjectnameflagsv3-requirecommonname
         */
        readonly requireCommonName?: boolean | cdk.IResolvable;
        /**
         * Include the directory path in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html#cfn-pcaconnectorad-template-subjectnameflagsv3-requiredirectorypath
         */
        readonly requireDirectoryPath?: boolean | cdk.IResolvable;
        /**
         * Include the DNS as common name in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html#cfn-pcaconnectorad-template-subjectnameflagsv3-requirednsascn
         */
        readonly requireDnsAsCn?: boolean | cdk.IResolvable;
        /**
         * Include the subject's email in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html#cfn-pcaconnectorad-template-subjectnameflagsv3-requireemail
         */
        readonly requireEmail?: boolean | cdk.IResolvable;
        /**
         * Include the globally unique identifier (GUID) in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequiredirectoryguid
         */
        readonly sanRequireDirectoryGuid?: boolean | cdk.IResolvable;
        /**
         * Include the DNS in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequiredns
         */
        readonly sanRequireDns?: boolean | cdk.IResolvable;
        /**
         * Include the domain DNS in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequiredomaindns
         */
        readonly sanRequireDomainDns?: boolean | cdk.IResolvable;
        /**
         * Include the subject's email in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequireemail
         */
        readonly sanRequireEmail?: boolean | cdk.IResolvable;
        /**
         * Include the service principal name (SPN) in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequirespn
         */
        readonly sanRequireSpn?: boolean | cdk.IResolvable;
        /**
         * Include the user principal name (UPN) in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequireupn
         */
        readonly sanRequireUpn?: boolean | cdk.IResolvable;
    }
    /**
     * Private key flags for v3 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, and if an alternate signature algorithm should be used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv3.html
     */
    interface PrivateKeyFlagsV3Property {
        /**
         * Defines the minimum client compatibility.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv3.html#cfn-pcaconnectorad-template-privatekeyflagsv3-clientversion
         */
        readonly clientVersion: string;
        /**
         * Allows the private key to be exported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv3.html#cfn-pcaconnectorad-template-privatekeyflagsv3-exportablekey
         */
        readonly exportableKey?: boolean | cdk.IResolvable;
        /**
         * Reguires the PKCS #1 v2.1 signature format for certificates. You should verify that your CA, objects, and applications can accept this signature format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv3.html#cfn-pcaconnectorad-template-privatekeyflagsv3-requirealternatesignaturealgorithm
         */
        readonly requireAlternateSignatureAlgorithm?: boolean | cdk.IResolvable;
        /**
         * Requirer user input when using the private key for enrollment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv3.html#cfn-pcaconnectorad-template-privatekeyflagsv3-strongkeyprotectionrequired
         */
        readonly strongKeyProtectionRequired?: boolean | cdk.IResolvable;
    }
    /**
     * Defines the attributes of the private key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv3.html
     */
    interface PrivateKeyAttributesV3Property {
        /**
         * Defines the algorithm used to generate the private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv3.html#cfn-pcaconnectorad-template-privatekeyattributesv3-algorithm
         */
        readonly algorithm: string;
        /**
         * Defines the cryptographic providers used to generate the private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv3.html#cfn-pcaconnectorad-template-privatekeyattributesv3-cryptoproviders
         */
        readonly cryptoProviders?: Array<string>;
        /**
         * Defines the purpose of the private key.
         *
         * Set it to "KEY_EXCHANGE" or "SIGNATURE" value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv3.html#cfn-pcaconnectorad-template-privatekeyattributesv3-keyspec
         */
        readonly keySpec: string;
        /**
         * The key usage property defines the purpose of the private key contained in the certificate.
         *
         * You can specify specific purposes using property flags or all by using property type ALL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv3.html#cfn-pcaconnectorad-template-privatekeyattributesv3-keyusageproperty
         */
        readonly keyUsageProperty: cdk.IResolvable | CfnTemplate.KeyUsagePropertyProperty;
        /**
         * Set the minimum key length of the private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv3.html#cfn-pcaconnectorad-template-privatekeyattributesv3-minimalkeylength
         */
        readonly minimalKeyLength: number;
    }
    /**
     * General flags for v3 template schema that defines if the template is for a machine or a user and if the template can be issued using autoenrollment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv3.html
     */
    interface GeneralFlagsV3Property {
        /**
         * Allows certificate issuance using autoenrollment.
         *
         * Set to TRUE to allow autoenrollment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv3.html#cfn-pcaconnectorad-template-generalflagsv3-autoenrollment
         */
        readonly autoEnrollment?: boolean | cdk.IResolvable;
        /**
         * Defines if the template is for machines or users.
         *
         * Set to TRUE if the template is for machines. Set to FALSE if the template is for users
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv3.html#cfn-pcaconnectorad-template-generalflagsv3-machinetype
         */
        readonly machineType?: boolean | cdk.IResolvable;
    }
    /**
     * Certificate extensions for v3 template schema.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv3.html
     */
    interface ExtensionsV3Property {
        /**
         * Application policies specify what the certificate is used for and its purpose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv3.html#cfn-pcaconnectorad-template-extensionsv3-applicationpolicies
         */
        readonly applicationPolicies?: CfnTemplate.ApplicationPoliciesProperty | cdk.IResolvable;
        /**
         * The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv3.html#cfn-pcaconnectorad-template-extensionsv3-keyusage
         */
        readonly keyUsage: cdk.IResolvable | CfnTemplate.KeyUsageProperty;
    }
    /**
     * Template configurations for v3 template schema.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv3.html
     */
    interface EnrollmentFlagsV3Property {
        /**
         * Allow renewal using the same key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv3.html#cfn-pcaconnectorad-template-enrollmentflagsv3-enablekeyreuseonnttokenkeysetstoragefull
         */
        readonly enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdk.IResolvable;
        /**
         * Include symmetric algorithms allowed by the subject.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv3.html#cfn-pcaconnectorad-template-enrollmentflagsv3-includesymmetricalgorithms
         */
        readonly includeSymmetricAlgorithms?: boolean | cdk.IResolvable;
        /**
         * This flag instructs the CA to not include the security extension szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections 2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows Kerberos elevation-of-privilege vulnerability.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv3.html#cfn-pcaconnectorad-template-enrollmentflagsv3-nosecurityextension
         */
        readonly noSecurityExtension?: boolean | cdk.IResolvable;
        /**
         * Delete expired or revoked certificates instead of archiving them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv3.html#cfn-pcaconnectorad-template-enrollmentflagsv3-removeinvalidcertificatefrompersonalstore
         */
        readonly removeInvalidCertificateFromPersonalStore?: boolean | cdk.IResolvable;
        /**
         * Require user interaction when the subject is enrolled and the private key associated with the certificate is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv3.html#cfn-pcaconnectorad-template-enrollmentflagsv3-userinteractionrequired
         */
        readonly userInteractionRequired?: boolean | cdk.IResolvable;
    }
    /**
     * v2 template schema that uses Legacy Cryptographic Providers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html
     */
    interface TemplateV2Property {
        /**
         * Certificate validity describes the validity and renewal periods of a certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html#cfn-pcaconnectorad-template-templatev2-certificatevalidity
         */
        readonly certificateValidity: CfnTemplate.CertificateValidityProperty | cdk.IResolvable;
        /**
         * Enrollment flags describe the enrollment settings for certificates such as using the existing private key and deleting expired or revoked certificates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html#cfn-pcaconnectorad-template-templatev2-enrollmentflags
         */
        readonly enrollmentFlags: CfnTemplate.EnrollmentFlagsV2Property | cdk.IResolvable;
        /**
         * Extensions describe the key usage extensions and application policies for a template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html#cfn-pcaconnectorad-template-templatev2-extensions
         */
        readonly extensions: CfnTemplate.ExtensionsV2Property | cdk.IResolvable;
        /**
         * General flags describe whether the template is used for computers or users and if the template can be used with autoenrollment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html#cfn-pcaconnectorad-template-templatev2-generalflags
         */
        readonly generalFlags: CfnTemplate.GeneralFlagsV2Property | cdk.IResolvable;
        /**
         * Private key attributes allow you to specify the minimal key length, key spec, and cryptographic providers for the private key of a certificate for v2 templates.
         *
         * V2 templates allow you to use Legacy Cryptographic Service Providers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html#cfn-pcaconnectorad-template-templatev2-privatekeyattributes
         */
        readonly privateKeyAttributes: cdk.IResolvable | CfnTemplate.PrivateKeyAttributesV2Property;
        /**
         * Private key flags for v2 templates specify the client compatibility, if the private key can be exported, and if user input is required when using a private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html#cfn-pcaconnectorad-template-templatev2-privatekeyflags
         */
        readonly privateKeyFlags: cdk.IResolvable | CfnTemplate.PrivateKeyFlagsV2Property;
        /**
         * Subject name flags describe the subject name and subject alternate name that is included in a certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html#cfn-pcaconnectorad-template-templatev2-subjectnameflags
         */
        readonly subjectNameFlags: cdk.IResolvable | CfnTemplate.SubjectNameFlagsV2Property;
        /**
         * List of templates in Active Directory that are superseded by this template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html#cfn-pcaconnectorad-template-templatev2-supersededtemplates
         */
        readonly supersededTemplates?: Array<string>;
    }
    /**
     * Information to include in the subject name and alternate subject name of the certificate.
     *
     * The subject name can be common name, directory path, DNS as common name, or left blank. You can optionally include email to the subject name for user templates. If you leave the subject name blank then you must set a subject alternate name. The subject alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email, service principal name (SPN), and user principal name (UPN). You can leave the SAN blank. If you leave the SAN blank, then you must set a subject name.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html
     */
    interface SubjectNameFlagsV2Property {
        /**
         * Include the common name in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html#cfn-pcaconnectorad-template-subjectnameflagsv2-requirecommonname
         */
        readonly requireCommonName?: boolean | cdk.IResolvable;
        /**
         * Include the directory path in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html#cfn-pcaconnectorad-template-subjectnameflagsv2-requiredirectorypath
         */
        readonly requireDirectoryPath?: boolean | cdk.IResolvable;
        /**
         * Include the DNS as common name in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html#cfn-pcaconnectorad-template-subjectnameflagsv2-requirednsascn
         */
        readonly requireDnsAsCn?: boolean | cdk.IResolvable;
        /**
         * Include the subject's email in the subject name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html#cfn-pcaconnectorad-template-subjectnameflagsv2-requireemail
         */
        readonly requireEmail?: boolean | cdk.IResolvable;
        /**
         * Include the globally unique identifier (GUID) in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequiredirectoryguid
         */
        readonly sanRequireDirectoryGuid?: boolean | cdk.IResolvable;
        /**
         * Include the DNS in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequiredns
         */
        readonly sanRequireDns?: boolean | cdk.IResolvable;
        /**
         * Include the domain DNS in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequiredomaindns
         */
        readonly sanRequireDomainDns?: boolean | cdk.IResolvable;
        /**
         * Include the subject's email in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequireemail
         */
        readonly sanRequireEmail?: boolean | cdk.IResolvable;
        /**
         * Include the service principal name (SPN) in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequirespn
         */
        readonly sanRequireSpn?: boolean | cdk.IResolvable;
        /**
         * Include the user principal name (UPN) in the subject alternate name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequireupn
         */
        readonly sanRequireUpn?: boolean | cdk.IResolvable;
    }
    /**
     * Private key flags for v2 templates specify the client compatibility, if the private key can be exported, and if user input is required when using a private key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv2.html
     */
    interface PrivateKeyFlagsV2Property {
        /**
         * Defines the minimum client compatibility.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv2.html#cfn-pcaconnectorad-template-privatekeyflagsv2-clientversion
         */
        readonly clientVersion: string;
        /**
         * Allows the private key to be exported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv2.html#cfn-pcaconnectorad-template-privatekeyflagsv2-exportablekey
         */
        readonly exportableKey?: boolean | cdk.IResolvable;
        /**
         * Require user input when using the private key for enrollment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv2.html#cfn-pcaconnectorad-template-privatekeyflagsv2-strongkeyprotectionrequired
         */
        readonly strongKeyProtectionRequired?: boolean | cdk.IResolvable;
    }
    /**
     * Defines the attributes of the private key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv2.html
     */
    interface PrivateKeyAttributesV2Property {
        /**
         * Defines the cryptographic providers used to generate the private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv2.html#cfn-pcaconnectorad-template-privatekeyattributesv2-cryptoproviders
         */
        readonly cryptoProviders?: Array<string>;
        /**
         * Defines the purpose of the private key.
         *
         * Set it to "KEY_EXCHANGE" or "SIGNATURE" value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv2.html#cfn-pcaconnectorad-template-privatekeyattributesv2-keyspec
         */
        readonly keySpec: string;
        /**
         * Set the minimum key length of the private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv2.html#cfn-pcaconnectorad-template-privatekeyattributesv2-minimalkeylength
         */
        readonly minimalKeyLength: number;
    }
    /**
     * General flags for v2 template schema that defines if the template is for a machine or a user and if the template can be issued using autoenrollment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv2.html
     */
    interface GeneralFlagsV2Property {
        /**
         * Allows certificate issuance using autoenrollment.
         *
         * Set to TRUE to allow autoenrollment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv2.html#cfn-pcaconnectorad-template-generalflagsv2-autoenrollment
         */
        readonly autoEnrollment?: boolean | cdk.IResolvable;
        /**
         * Defines if the template is for machines or users.
         *
         * Set to TRUE if the template is for machines. Set to FALSE if the template is for users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv2.html#cfn-pcaconnectorad-template-generalflagsv2-machinetype
         */
        readonly machineType?: boolean | cdk.IResolvable;
    }
    /**
     * Certificate extensions for v2 template schema.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv2.html
     */
    interface ExtensionsV2Property {
        /**
         * Application policies specify what the certificate is used for and its purpose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv2.html#cfn-pcaconnectorad-template-extensionsv2-applicationpolicies
         */
        readonly applicationPolicies?: CfnTemplate.ApplicationPoliciesProperty | cdk.IResolvable;
        /**
         * The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv2.html#cfn-pcaconnectorad-template-extensionsv2-keyusage
         */
        readonly keyUsage: cdk.IResolvable | CfnTemplate.KeyUsageProperty;
    }
    /**
     * Template configurations for v2 template schema.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv2.html
     */
    interface EnrollmentFlagsV2Property {
        /**
         * Allow renewal using the same key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv2.html#cfn-pcaconnectorad-template-enrollmentflagsv2-enablekeyreuseonnttokenkeysetstoragefull
         */
        readonly enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdk.IResolvable;
        /**
         * Include symmetric algorithms allowed by the subject.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv2.html#cfn-pcaconnectorad-template-enrollmentflagsv2-includesymmetricalgorithms
         */
        readonly includeSymmetricAlgorithms?: boolean | cdk.IResolvable;
        /**
         * This flag instructs the CA to not include the security extension szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections 2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows Kerberos elevation-of-privilege vulnerability.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv2.html#cfn-pcaconnectorad-template-enrollmentflagsv2-nosecurityextension
         */
        readonly noSecurityExtension?: boolean | cdk.IResolvable;
        /**
         * Delete expired or revoked certificates instead of archiving them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv2.html#cfn-pcaconnectorad-template-enrollmentflagsv2-removeinvalidcertificatefrompersonalstore
         */
        readonly removeInvalidCertificateFromPersonalStore?: boolean | cdk.IResolvable;
        /**
         * Require user interaction when the subject is enrolled and the private key associated with the certificate is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv2.html#cfn-pcaconnectorad-template-enrollmentflagsv2-userinteractionrequired
         */
        readonly userInteractionRequired?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html
 */
export interface CfnTemplateProps {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-connectorarn
     */
    readonly connectorArn: string;
    /**
     * Template configuration to define the information included in certificates.
     *
     * Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-definition
     */
    readonly definition: cdk.IResolvable | CfnTemplate.TemplateDefinitionProperty;
    /**
     * Name of the templates.
     *
     * Template names must be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-name
     */
    readonly name: string;
    /**
     * This setting allows the major version of a template to be increased automatically.
     *
     * All members of Active Directory groups that are allowed to enroll with a template will receive a new certificate issued using that template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-reenrollallcertificateholders
     */
    readonly reenrollAllCertificateHolders?: boolean | cdk.IResolvable;
    /**
     * Metadata assigned to a template consisting of a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Create a group access control entry.
 *
 * Allow or deny Active Directory groups from enrolling and/or autoenrolling with the template based on the group security identifiers (SIDs).
 *
 * @cloudformationResource AWS::PCAConnectorAD::TemplateGroupAccessControlEntry
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html
 */
export declare class CfnTemplateGroupAccessControlEntry extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTemplateGroupAccessControlEntry from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTemplateGroupAccessControlEntry;
    /**
     * Permissions to allow or deny an Active Directory group to enroll or autoenroll certificates issued against a template.
     */
    accessRights: CfnTemplateGroupAccessControlEntry.AccessRightsProperty | cdk.IResolvable;
    /**
     * Name of the Active Directory group.
     */
    groupDisplayName: string;
    /**
     * Security identifier (SID) of the group object from Active Directory.
     */
    groupSecurityIdentifier?: string;
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html) .
     */
    templateArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTemplateGroupAccessControlEntryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTemplateGroupAccessControlEntry {
    /**
     * Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a template.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-templategroupaccesscontrolentry-accessrights.html
     */
    interface AccessRightsProperty {
        /**
         * Allow or deny an Active Directory group from autoenrolling certificates issued against a template.
         *
         * The Active Directory group must be allowed to enroll to allow autoenrollment
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-templategroupaccesscontrolentry-accessrights.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-accessrights-autoenroll
         */
        readonly autoEnroll?: string;
        /**
         * Allow or deny an Active Directory group from enrolling certificates issued against a template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-templategroupaccesscontrolentry-accessrights.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-accessrights-enroll
         */
        readonly enroll?: string;
    }
}
/**
 * Properties for defining a `CfnTemplateGroupAccessControlEntry`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html
 */
export interface CfnTemplateGroupAccessControlEntryProps {
    /**
     * Permissions to allow or deny an Active Directory group to enroll or autoenroll certificates issued against a template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-accessrights
     */
    readonly accessRights: CfnTemplateGroupAccessControlEntry.AccessRightsProperty | cdk.IResolvable;
    /**
     * Name of the Active Directory group.
     *
     * This name does not need to match the group name in Active Directory.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-groupdisplayname
     */
    readonly groupDisplayName: string;
    /**
     * Security identifier (SID) of the group object from Active Directory.
     *
     * The SID starts with "S-".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-groupsecurityidentifier
     */
    readonly groupSecurityIdentifier?: string;
    /**
     * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-templatearn
     */
    readonly templateArn?: string;
}
