import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an *alias* , or a friendly name, for an AWS Payment Cryptography key.
 *
 * You can use an alias to identify a key in the console and when you call cryptographic operations such as [EncryptData](https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_EncryptData.html) or [DecryptData](https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_DecryptData.html) .
 *
 * You can associate the alias with any key in the same AWS Region . Each alias is associated with only one key at a time, but a key can have multiple aliases. You can't create an alias without a key. The alias must be unique in the account and AWS Region , but you can create another alias with the same name in a different AWS Region .
 *
 * To change the key that's associated with the alias, call [UpdateAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html) . To delete the alias, call [DeleteAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html) . These operations don't affect the underlying key. To get the alias that you created, call [ListAliases](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html) .
 *
 * *Cross-account use* : This operation can't be used across different AWS accounts.
 *
 * *Related operations:*
 *
 * - [DeleteAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html)
 * - [GetAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetAlias.html)
 * - [ListAliases](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html)
 * - [UpdateAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html)
 *
 * @cloudformationResource AWS::PaymentCryptography::Alias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-alias.html
 */
export declare class CfnAlias extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAlias;
    /**
     * A friendly name that you can use to refer to a key. The value must begin with `alias/` .
     */
    aliasName: string;
    /**
     * The `KeyARN` of the key associated with the alias.
     */
    keyArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAliasProps);
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
 * Properties for defining a `CfnAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-alias.html
 */
export interface CfnAliasProps {
    /**
     * A friendly name that you can use to refer to a key. The value must begin with `alias/` .
     *
     * > Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in AWS CloudTrail logs and other output.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-alias.html#cfn-paymentcryptography-alias-aliasname
     */
    readonly aliasName: string;
    /**
     * The `KeyARN` of the key associated with the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-alias.html#cfn-paymentcryptography-alias-keyarn
     */
    readonly keyArn?: string;
}
/**
 * Creates an AWS Payment Cryptography key, a logical representation of a cryptographic key, that is unique in your account and AWS Region .
 *
 * You use keys for cryptographic functions such as encryption and decryption.
 *
 * In addition to the key material used in cryptographic operations, an AWS Payment Cryptography key includes metadata such as the key ARN, key usage, key origin, creation date, description, and key state.
 *
 * When you create a key, you specify both immutable and mutable data about the key. The immutable data contains key attributes that define the scope and cryptographic operations that you can perform using the key, for example key class (example: `SYMMETRIC_KEY` ), key algorithm (example: `TDES_2KEY` ), key usage (example: `TR31_P0_PIN_ENCRYPTION_KEY` ) and key modes of use (example: `Encrypt` ). For information about valid combinations of key attributes, see [Understanding key attributes](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html) in the *AWS Payment Cryptography User Guide* . The mutable data contained within a key includes usage timestamp and key deletion timestamp and can be modified after creation.
 *
 * AWS Payment Cryptography binds key attributes to keys using key blocks when you store or export them. AWS Payment Cryptography stores the key contents wrapped and never stores or transmits them in the clear.
 *
 * *Cross-account use* : This operation can't be used across different AWS accounts.
 *
 * *Related operations:*
 *
 * - [DeleteKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteKey.html)
 * - [GetKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetKey.html)
 * - [ListKeys](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListKeys.html)
 *
 * @cloudformationResource AWS::PaymentCryptography::Key
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html
 */
export declare class CfnKey extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnKey from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnKey;
    /**
     * @cloudformationAttribute KeyIdentifier
     */
    readonly attrKeyIdentifier: string;
    /**
     * The source of the key material. For keys created within AWS Payment Cryptography, the value is `AWS_PAYMENT_CRYPTOGRAPHY` . For keys imported into AWS Payment Cryptography, the value is `EXTERNAL` .
     *
     * @cloudformationAttribute KeyOrigin
     */
    readonly attrKeyOrigin: string;
    /**
     * The state of key that is being created or deleted.
     *
     * @cloudformationAttribute KeyState
     */
    readonly attrKeyState: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Specifies whether the key is enabled.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the key is exportable.
     */
    exportable: boolean | cdk.IResolvable;
    /**
     * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key.
     */
    keyAttributes: cdk.IResolvable | CfnKey.KeyAttributesProperty;
    /**
     * The algorithm that AWS Payment Cryptography uses to calculate the key check value (KCV).
     */
    keyCheckValueAlgorithm?: string;
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnKeyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnKey {
    /**
     * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key.
     *
     * This data is immutable after the key is created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keyattributes.html
     */
    interface KeyAttributesProperty {
        /**
         * The key algorithm to be use during creation of an AWS Payment Cryptography key.
         *
         * For symmetric keys, AWS Payment Cryptography supports `AES` and `TDES` algorithms. For asymmetric keys, AWS Payment Cryptography supports `RSA` and `ECC_NIST` algorithms.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keyattributes.html#cfn-paymentcryptography-key-keyattributes-keyalgorithm
         */
        readonly keyAlgorithm: string;
        /**
         * The type of AWS Payment Cryptography key to create, which determines the classiﬁcation of the cryptographic method and whether AWS Payment Cryptography key contains a symmetric key or an asymmetric key pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keyattributes.html#cfn-paymentcryptography-key-keyattributes-keyclass
         */
        readonly keyClass: string;
        /**
         * The list of cryptographic operations that you can perform using the key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keyattributes.html#cfn-paymentcryptography-key-keyattributes-keymodesofuse
         */
        readonly keyModesOfUse: cdk.IResolvable | CfnKey.KeyModesOfUseProperty;
        /**
         * The cryptographic usage of an AWS Payment Cryptography key as deﬁned in section A.5.2 of the TR-31 spec.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keyattributes.html#cfn-paymentcryptography-key-keyattributes-keyusage
         */
        readonly keyUsage: string;
    }
    /**
     * The list of cryptographic operations that you can perform using the key.
     *
     * The modes of use are deﬁned in section A.5.3 of the TR-31 spec.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html
     */
    interface KeyModesOfUseProperty {
        /**
         * Speciﬁes whether an AWS Payment Cryptography key can be used to decrypt data.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html#cfn-paymentcryptography-key-keymodesofuse-decrypt
         */
        readonly decrypt?: boolean | cdk.IResolvable;
        /**
         * Speciﬁes whether an AWS Payment Cryptography key can be used to derive new keys.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html#cfn-paymentcryptography-key-keymodesofuse-derivekey
         */
        readonly deriveKey?: boolean | cdk.IResolvable;
        /**
         * Speciﬁes whether an AWS Payment Cryptography key can be used to encrypt data.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html#cfn-paymentcryptography-key-keymodesofuse-encrypt
         */
        readonly encrypt?: boolean | cdk.IResolvable;
        /**
         * Speciﬁes whether an AWS Payment Cryptography key can be used to generate and verify other card and PIN verification keys.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html#cfn-paymentcryptography-key-keymodesofuse-generate
         */
        readonly generate?: boolean | cdk.IResolvable;
        /**
         * Speciﬁes whether an AWS Payment Cryptography key has no special restrictions other than the restrictions implied by `KeyUsage` .
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html#cfn-paymentcryptography-key-keymodesofuse-norestrictions
         */
        readonly noRestrictions?: boolean | cdk.IResolvable;
        /**
         * Speciﬁes whether an AWS Payment Cryptography key can be used for signing.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html#cfn-paymentcryptography-key-keymodesofuse-sign
         */
        readonly sign?: boolean | cdk.IResolvable;
        /**
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html#cfn-paymentcryptography-key-keymodesofuse-unwrap
         */
        readonly unwrap?: boolean | cdk.IResolvable;
        /**
         * Speciﬁes whether an AWS Payment Cryptography key can be used to verify signatures.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html#cfn-paymentcryptography-key-keymodesofuse-verify
         */
        readonly verify?: boolean | cdk.IResolvable;
        /**
         * Speciﬁes whether an AWS Payment Cryptography key can be used to wrap other keys.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html#cfn-paymentcryptography-key-keymodesofuse-wrap
         */
        readonly wrap?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnKey`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html
 */
export interface CfnKeyProps {
    /**
     * Specifies whether the key is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html#cfn-paymentcryptography-key-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the key is exportable.
     *
     * This data is immutable after the key is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html#cfn-paymentcryptography-key-exportable
     */
    readonly exportable: boolean | cdk.IResolvable;
    /**
     * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key.
     *
     * This data is immutable after the key is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html#cfn-paymentcryptography-key-keyattributes
     */
    readonly keyAttributes: cdk.IResolvable | CfnKey.KeyAttributesProperty;
    /**
     * The algorithm that AWS Payment Cryptography uses to calculate the key check value (KCV).
     *
     * It is used to validate the key integrity.
     *
     * For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html#cfn-paymentcryptography-key-keycheckvaluealgorithm
     */
    readonly keyCheckValueAlgorithm?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html#cfn-paymentcryptography-key-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
