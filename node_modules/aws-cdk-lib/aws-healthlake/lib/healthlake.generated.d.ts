import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a Data Store that can ingest and export FHIR formatted data.
 *
 * > Please note that when a user tries to do an Update operation via CloudFormation, changes to the Data Store name, Type Version, PreloadDataConfig, or SSEConfiguration will delete their existing Data Store for the stack and create a new one. This will lead to potential loss of data.
 *
 * @cloudformationResource AWS::HealthLake::FHIRDatastore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html
 */
export declare class CfnFHIRDatastore extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFHIRDatastore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFHIRDatastore;
    /**
     * The time that a Data Store was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: cdk.IResolvable;
    /**
     * @cloudformationAttribute CreatedAt.Nanos
     */
    readonly attrCreatedAtNanos: number;
    /**
     * @cloudformationAttribute CreatedAt.Seconds
     */
    readonly attrCreatedAtSeconds: string;
    /**
     * The Data Store ARN is generated during the creation of the Data Store and can be found in the output from the initial Data Store creation request.
     *
     * @cloudformationAttribute DatastoreArn
     */
    readonly attrDatastoreArn: string;
    /**
     * The endpoint for the created Data Store.
     *
     * @cloudformationAttribute DatastoreEndpoint
     */
    readonly attrDatastoreEndpoint: string;
    /**
     * The Amazon generated Data Store id. This id is in the output from the initial Data Store creation call.
     *
     * @cloudformationAttribute DatastoreId
     */
    readonly attrDatastoreId: string;
    /**
     * The status of the FHIR Data Store. Possible statuses are ‘CREATING’, ‘ACTIVE’, ‘DELETING’, ‘DELETED’.
     *
     * @cloudformationAttribute DatastoreStatus
     */
    readonly attrDatastoreStatus: string;
    /**
     * The user generated name for the data store.
     */
    datastoreName?: string;
    /**
     * The FHIR version of the data store.
     */
    datastoreTypeVersion: string;
    /**
     * The identity provider configuration that you gave when the data store was created.
     */
    identityProviderConfiguration?: CfnFHIRDatastore.IdentityProviderConfigurationProperty | cdk.IResolvable;
    /**
     * The preloaded data configuration for the data store.
     */
    preloadDataConfig?: cdk.IResolvable | CfnFHIRDatastore.PreloadDataConfigProperty;
    /**
     * The server-side encryption key configuration for a customer provided encryption key specified for creating a data store.
     */
    sseConfiguration?: cdk.IResolvable | CfnFHIRDatastore.SseConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFHIRDatastoreProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFHIRDatastore {
    /**
     * The identity provider configuration that you gave when the data store was created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-identityproviderconfiguration.html
     */
    interface IdentityProviderConfigurationProperty {
        /**
         * The authorization strategy that you selected when you created the data store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-identityproviderconfiguration.html#cfn-healthlake-fhirdatastore-identityproviderconfiguration-authorizationstrategy
         */
        readonly authorizationStrategy: string;
        /**
         * If you enabled fine-grained authorization when you created the data store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-identityproviderconfiguration.html#cfn-healthlake-fhirdatastore-identityproviderconfiguration-finegrainedauthorizationenabled
         */
        readonly fineGrainedAuthorizationEnabled?: boolean | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the Lambda function that you want to use to decode the access token created by the authorization server.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-identityproviderconfiguration.html#cfn-healthlake-fhirdatastore-identityproviderconfiguration-idplambdaarn
         */
        readonly idpLambdaArn?: string;
        /**
         * The JSON metadata elements that you want to use in your identity provider configuration.
         *
         * Required elements are listed based on the launch specification of the SMART application. For more information on all possible elements, see [Metadata](https://docs.aws.amazon.com/https://build.fhir.org/ig/HL7/smart-app-launch/conformance.html#metadata) in SMART's App Launch specification.
         *
         * `authorization_endpoint` : The URL to the OAuth2 authorization endpoint.
         *
         * `grant_types_supported` : An array of grant types that are supported at the token endpoint. You must provide at least one grant type option. Valid options are `authorization_code` and `client_credentials` .
         *
         * `token_endpoint` : The URL to the OAuth2 token endpoint.
         *
         * `capabilities` : An array of strings of the SMART capabilities that the authorization server supports.
         *
         * `code_challenge_methods_supported` : An array of strings of supported PKCE code challenge methods. You must include the `S256` method in the array of PKCE code challenge methods.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-identityproviderconfiguration.html#cfn-healthlake-fhirdatastore-identityproviderconfiguration-metadata
         */
        readonly metadata?: string;
    }
    /**
     * Optional parameter to preload data upon creation of the data store.
     *
     * Currently, the only supported preloaded data is synthetic data generated from Synthea.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-preloaddataconfig.html
     */
    interface PreloadDataConfigProperty {
        /**
         * The type of preloaded data.
         *
         * Only Synthea preloaded data is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-preloaddataconfig.html#cfn-healthlake-fhirdatastore-preloaddataconfig-preloaddatatype
         */
        readonly preloadDataType: string;
    }
    /**
     * The server-side encryption key configuration for a customer provided encryption key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-sseconfiguration.html
     */
    interface SseConfigurationProperty {
        /**
         * The server-side encryption key configuration for a customer provided encryption key (CMK).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-sseconfiguration.html#cfn-healthlake-fhirdatastore-sseconfiguration-kmsencryptionconfig
         */
        readonly kmsEncryptionConfig: cdk.IResolvable | CfnFHIRDatastore.KmsEncryptionConfigProperty;
    }
    /**
     * The customer-managed-key(CMK) used when creating a Data Store.
     *
     * If a customer owned key is not specified, an Amazon owned key will be used for encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-kmsencryptionconfig.html
     */
    interface KmsEncryptionConfigProperty {
        /**
         * The type of customer-managed-key(CMK) used for encryption.
         *
         * The two types of supported CMKs are customer owned CMKs and Amazon owned CMKs. For more information on CMK types, see [KmsEncryptionConfig](https://docs.aws.amazon.com/healthlake/latest/APIReference/API_KmsEncryptionConfig.html#HealthLake-Type-KmsEncryptionConfig-CmkType) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-kmsencryptionconfig.html#cfn-healthlake-fhirdatastore-kmsencryptionconfig-cmktype
         */
        readonly cmkType: string;
        /**
         * The KMS encryption key id/alias used to encrypt the data store contents at rest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-kmsencryptionconfig.html#cfn-healthlake-fhirdatastore-kmsencryptionconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
    /**
     * The time that a Data Store was created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-createdat.html
     */
    interface CreatedAtProperty {
        /**
         * Nanoseconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-createdat.html#cfn-healthlake-fhirdatastore-createdat-nanos
         */
        readonly nanos: number;
        /**
         * Seconds since epoch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-createdat.html#cfn-healthlake-fhirdatastore-createdat-seconds
         */
        readonly seconds: string;
    }
}
/**
 * Properties for defining a `CfnFHIRDatastore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html
 */
export interface CfnFHIRDatastoreProps {
    /**
     * The user generated name for the data store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-datastorename
     */
    readonly datastoreName?: string;
    /**
     * The FHIR version of the data store.
     *
     * The only supported version is R4.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-datastoretypeversion
     */
    readonly datastoreTypeVersion: string;
    /**
     * The identity provider configuration that you gave when the data store was created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-identityproviderconfiguration
     */
    readonly identityProviderConfiguration?: CfnFHIRDatastore.IdentityProviderConfigurationProperty | cdk.IResolvable;
    /**
     * The preloaded data configuration for the data store.
     *
     * Only data preloaded from Synthea is supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-preloaddataconfig
     */
    readonly preloadDataConfig?: cdk.IResolvable | CfnFHIRDatastore.PreloadDataConfigProperty;
    /**
     * The server-side encryption key configuration for a customer provided encryption key specified for creating a data store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-sseconfiguration
     */
    readonly sseConfiguration?: cdk.IResolvable | CfnFHIRDatastore.SseConfigurationProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
