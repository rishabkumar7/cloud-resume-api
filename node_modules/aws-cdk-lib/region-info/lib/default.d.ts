/**
 * Provides default values for certain regional information points.
 * This class is no longer needed because service principals are no longer needed except in very specific cases
 * that are handled in the IAM ServicePrincipal class.
 * @deprecated - Service principals are now globally `<SERVICE>.amazonaws.com`, use iam.ServicePrincipal instead.
 */
export declare class Default {
    /**
     * The default value for a VPC Endpoint Service name prefix, useful if you do
     * not have a synthesize-time region literal available (all you have is
     * `{ "Ref": "AWS::Region" }`)
     *
     * @deprecated - Use VpceEndpointService.DEFAULT_PREFIX instead
     */
    static readonly VPC_ENDPOINT_SERVICE_NAME_PREFIX = "com.amazonaws.vpce";
    /**
     * Computes a "standard" AWS Service principal for a given service, region and suffix. This is useful for example when
     * you need to compute a service principal name, but you do not have a synthesize-time region literal available (so
     * all you have is `{ "Ref": "AWS::Region" }`). This way you get the same defaulting behavior that is normally used
     * for built-in data.
     *
     * @param serviceFqn the name of the service (s3, s3.amazonaws.com, ...)
     * @param region    the region in which the service principal is needed.
     * @param urlSuffix deprecated and ignored.
     *
     * @deprecated - Service principals are now globally `<SERVICE>.amazonaws.com`, use iam.ServicePrincipal instead.
     */
    static servicePrincipal(serviceFqn: string, region: string, urlSuffix: string): string;
    private constructor();
}
