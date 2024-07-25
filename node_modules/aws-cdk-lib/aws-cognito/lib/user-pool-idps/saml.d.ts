import { Construct } from 'constructs';
import { UserPoolIdentityProviderProps } from './base';
import { UserPoolIdentityProviderBase } from './private/user-pool-idp-base';
/**
 * Properties to initialize UserPoolIdentityProviderSaml.
 */
export interface UserPoolIdentityProviderSamlProps extends UserPoolIdentityProviderProps {
    /**
     * The name of the provider. Must be between 3 and 32 characters.
     *
     * @default - the unique ID of the construct
     */
    readonly name?: string;
    /**
     * Identifiers
     *
     * Identifiers can be used to redirect users to the correct IdP in multitenant apps.
     *
     * @default - no identifiers used
     */
    readonly identifiers?: string[];
    /**
     * The SAML metadata.
     */
    readonly metadata: UserPoolIdentityProviderSamlMetadata;
    /**
     * Whether to enable the "Sign-out flow" feature.
     *
     * @default - false
     */
    readonly idpSignout?: boolean;
    /**
     * Whether to require encrypted SAML assertions from IdP.
     *
     * @see https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-SAML-signing-encryption.html#cognito-user-pools-SAML-encryption
     *
     * @default false
     */
    readonly encryptedResponses?: boolean;
    /**
     * The signing algorithm for SAML requests.
     *
     * @see https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-SAML-signing-encryption.html#cognito-user-pools-SAML-signing
     *
     * @default - don't sign requests
     */
    readonly requestSigningAlgorithm?: SigningAlgorithm;
    /**
     * Whether to enable IdP-initiated SAML auth flows.
     *
     * @default false
     */
    readonly idpInitiated?: boolean;
}
/**
 * Signing algorithms for SAML requests.
 */
export declare enum SigningAlgorithm {
    /**
     * RSA with SHA-256.
     */
    RSA_SHA256 = "rsa-sha256"
}
/**
 * Metadata types that can be used for a SAML user pool identity provider.
 */
export declare enum UserPoolIdentityProviderSamlMetadataType {
    /** Metadata provided via a URL. */
    URL = "url",
    /** Metadata provided via the contents of a file. */
    FILE = "file"
}
/**
 * Metadata for a SAML user pool identity provider.
 */
export declare class UserPoolIdentityProviderSamlMetadata {
    readonly metadataContent: string;
    readonly metadataType: UserPoolIdentityProviderSamlMetadataType;
    /**
     * Specify SAML metadata via a URL.
     */
    static url(url: string): UserPoolIdentityProviderSamlMetadata;
    /**
     * Specify SAML metadata via the contents of a file.
     */
    static file(fileContent: string): UserPoolIdentityProviderSamlMetadata;
    /**
     * Construct the metadata for a SAML identity provider.
     *
     * @param metadataContent A URL hosting SAML metadata, or the content of a file containing SAML metadata.
     * @param metadataType The type of metadata, either a URL or file content.
     */
    private constructor();
}
/**
 * Represents an identity provider that integrates with SAML.
 * @resource AWS::Cognito::UserPoolIdentityProvider
 */
export declare class UserPoolIdentityProviderSaml extends UserPoolIdentityProviderBase {
    readonly providerName: string;
    constructor(scope: Construct, id: string, props: UserPoolIdentityProviderSamlProps);
    private getProviderName;
    private validateName;
}
