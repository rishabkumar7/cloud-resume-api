/**
 * The CA certificate used for a DB instance.
 *
 * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html
 */
export declare class CaCertificate {
    private readonly identifier;
    /**
     * rds-ca-2019 certificate authority
     */
    static readonly RDS_CA_2019: CaCertificate;
    /**
     * rds-ca-ecc384-g1 certificate authority
     */
    static readonly RDS_CA_ECC384_G1: CaCertificate;
    /**
     * rds-ca-rsa2048-g1 certificate authority
     *
     * @deprecated use RDS_CA_RSA2048_G1 (slight misspelling)
     */
    static readonly RDS_CA_RDS2048_G1: CaCertificate;
    /**
     * rds-ca-rsa2048-g1 certificate authority
     */
    static readonly RDS_CA_RSA2048_G1: CaCertificate;
    /**
     * rds-ca-rsa4096-g1 certificate authority
     *
     * @deprecated use RDS_CA_RSA4096_G1 (slight misspelling)
     */
    static readonly RDS_CA_RDS4096_G1: CaCertificate;
    /**
     * rds-ca-rsa4096-g1 certificate authority
     */
    static readonly RDS_CA_RSA4096_G1: CaCertificate;
    /**
     * Custom CA certificate
     *
     * @param identifier - CA certificate identifier
     */
    static of(identifier: string): CaCertificate;
    /**
     * @param identifier - CA certificate identifier
     */
    private constructor();
    /**
     * Returns the CA certificate identifier as a string
     */
    toString(): string;
}
