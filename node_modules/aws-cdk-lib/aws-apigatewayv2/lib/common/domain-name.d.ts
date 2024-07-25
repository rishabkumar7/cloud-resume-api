import { Construct } from 'constructs';
import { ICertificate } from '../../../aws-certificatemanager';
import { IBucket } from '../../../aws-s3';
import { IResource, Resource } from '../../../core';
/**
 * The minimum version of the SSL protocol that you want API Gateway to use for HTTPS connections.
 */
export declare enum SecurityPolicy {
    /** Cipher suite TLS 1.0 */
    TLS_1_0 = "TLS_1_0",
    /** Cipher suite TLS 1.2 */
    TLS_1_2 = "TLS_1_2"
}
/**
 * Endpoint type for a domain name.
 */
export declare enum EndpointType {
    /**
     * For an edge-optimized custom domain name.
     */
    EDGE = "EDGE",
    /**
     * For a regional custom domain name.
     */
    REGIONAL = "REGIONAL"
}
/**
 * Represents an APIGatewayV2 DomainName
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html
 */
export interface IDomainName extends IResource {
    /**
     * The custom domain name
     * @attribute
     */
    readonly name: string;
    /**
     * The domain name associated with the regional endpoint for this custom domain name.
     * @attribute
     */
    readonly regionalDomainName: string;
    /**
     * The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint.
     * @attribute
     */
    readonly regionalHostedZoneId: string;
}
/**
 * custom domain name attributes
 */
export interface DomainNameAttributes {
    /**
     * domain name string
     */
    readonly name: string;
    /**
     * The domain name associated with the regional endpoint for this custom domain name.
     */
    readonly regionalDomainName: string;
    /**
     * The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint.
     */
    readonly regionalHostedZoneId: string;
}
/**
 * properties used for creating the DomainName
 */
export interface DomainNameProps extends EndpointOptions {
    /**
     * The custom domain name
     */
    readonly domainName: string;
    /**
     * The mutual TLS authentication configuration for a custom domain name.
     * @default - mTLS is not configured.
     */
    readonly mtls?: MTLSConfig;
}
/**
 * properties for creating a domain name endpoint
 */
export interface EndpointOptions {
    /**
     * The ACM certificate for this domain name.
     * Certificate can be both ACM issued or imported.
     */
    readonly certificate: ICertificate;
    /**
     * The user-friendly name of the certificate that will be used by the endpoint for this domain name.
     * @default - No friendly certificate name
     */
    readonly certificateName?: string;
    /**
     * The type of endpoint for this DomainName.
     * @default EndpointType.REGIONAL
     */
    readonly endpointType?: EndpointType;
    /**
     * The Transport Layer Security (TLS) version + cipher suite for this domain name.
     * @default SecurityPolicy.TLS_1_2
     */
    readonly securityPolicy?: SecurityPolicy;
    /**
     * A public certificate issued by ACM to validate that you own a custom domain. This parameter is required
     * only when you configure mutual TLS authentication and you specify an ACM imported or private CA certificate
     * for `certificate`. The ownership certificate validates that you have permissions to use the domain name.
     * @default - only required when configuring mTLS
     */
    readonly ownershipCertificate?: ICertificate;
}
/**
 * The mTLS authentication configuration for a custom domain name.
 */
export interface MTLSConfig {
    /**
     * The bucket that the trust store is hosted in.
     */
    readonly bucket: IBucket;
    /**
     * The key in S3 to look at for the trust store
     */
    readonly key: string;
    /**
     *  The version of the S3 object that contains your truststore.
     *  To specify a version, you must have versioning enabled for the S3 bucket.
     *  @default - latest version
     */
    readonly version?: string;
}
/**
 * Custom domain resource for the API
 */
export declare class DomainName extends Resource implements IDomainName {
    /**
     * Import from attributes
     */
    static fromDomainNameAttributes(scope: Construct, id: string, attrs: DomainNameAttributes): IDomainName;
    readonly name: string;
    readonly regionalDomainName: string;
    readonly regionalHostedZoneId: string;
    private readonly domainNameConfigurations;
    constructor(scope: Construct, id: string, props: DomainNameProps);
    private configureMTLS;
    /**
     * Adds an endpoint to a domain name.
     * @param options domain name endpoint properties to be set
     */
    addEndpoint(options: EndpointOptions): void;
    private validateEndpointType;
}
