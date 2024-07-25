import { IBucket } from '../../aws-s3';
import { IParameter } from '../../aws-ssm';
/**
 * Base construct for a credential specification (CredSpec).
 */
export declare class CredentialSpec {
    /**
     * Helper method to generate the ARN for a S3 object. Used to avoid duplication of logic in derived classes.
     */
    protected static arnForS3Object(bucket: IBucket, key: string): string;
    /**
     * Helper method to generate the ARN for a SSM parameter. Used to avoid duplication of logic in derived classes.
     */
    protected static arnForSsmParameter(parameter: IParameter): string;
    /**
     * Prefix string based on the type of CredSpec.
     */
    readonly prefixId: string;
    /**
     * Location or ARN from where to retrieve the CredSpec file.
     */
    readonly fileLocation: string;
    /**
     * @param fileLocation Location or ARN from where to retrieve the CredSpec file
     */
    constructor(prefixId: string, fileLocation: string);
    /**
     * Called when the container is initialized to allow this object to bind
     * to the stack.
     */
    bind(): CredentialSpecConfig;
}
/**
 * Credential specification (CredSpec) file.
 */
export declare class DomainJoinedCredentialSpec extends CredentialSpec {
    /**
     * Loads the CredSpec from a S3 bucket object.
     *
     * @param bucket The S3 bucket
     * @param key The object key
     * @returns CredSpec with it's locations set to the S3 object's ARN.
     */
    static fromS3Bucket(bucket: IBucket, key: string): DomainJoinedCredentialSpec;
    /**
     * Loads the CredSpec from a SSM parameter.
     *
     * @param parameter The SSM parameter
     * @returns CredSpec with it's locations set to the SSM parameter's ARN.
     */
    static fromSsmParameter(parameter: IParameter): DomainJoinedCredentialSpec;
    constructor(fileLocation: string);
}
/**
 * Credential specification for domainless gMSA.
 */
export declare class DomainlessCredentialSpec extends CredentialSpec {
    /**
     * Loads the CredSpec from a S3 bucket object.
     *
     * @param bucket The S3 bucket
     * @param key The object key
     * @returns CredSpec with it's locations set to the S3 object's ARN.
     */
    static fromS3Bucket(bucket: IBucket, key: string): DomainlessCredentialSpec;
    /**
     * Loads the CredSpec from a SSM parameter.
     *
     * @param parameter The SSM parameter
     * @returns CredSpec with it's locations set to the SSM parameter's ARN.
     */
    static fromSsmParameter(parameter: IParameter): DomainlessCredentialSpec;
    constructor(fileLocation: string);
}
/**
 * Configuration for a credential specification (CredSpec) used for a ECS container.
 */
export interface CredentialSpecConfig {
    /**
     * Prefix used for the CredSpec string.
     */
    readonly typePrefix: string;
    /**
     * Location of the CredSpec file.
     */
    readonly location: string;
}
