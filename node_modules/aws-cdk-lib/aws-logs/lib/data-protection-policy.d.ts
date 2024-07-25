import { Construct } from 'constructs';
import { ILogGroup } from './log-group';
import { IBucket } from '../../aws-s3';
/**
 * Creates a data protection policy for CloudWatch Logs log groups.
 */
export declare class DataProtectionPolicy {
    private readonly dataProtectionPolicyProps;
    constructor(props: DataProtectionPolicyProps);
    /**
     * @internal
     */
    _bind(_scope: Construct): DataProtectionPolicyConfig;
}
interface PolicyConfiguration {
    customDataIdentifier?: PolicyCustomDataIdentifier[];
}
interface PolicyCustomDataIdentifier {
    name: string;
    regex: string;
}
/**
 * Interface representing a data protection policy
 */
interface DataProtectionPolicyConfig {
    /**
     * Name of the data protection policy
     *
     * @default - 'data-protection-policy-cdk'
     */
    readonly name: string;
    /**
     * Description of the data protection policy
     *
     * @default - 'cdk generated data protection policy'
     */
    readonly description: string;
    /**
     * Version of the data protection policy
     */
    readonly version: string;
    /**
     * Configuration of the data protection policy. Currently supports custom data identifiers
     */
    readonly configuration: PolicyConfiguration;
    /**
     * Statements within the data protection policy. Must contain one Audit and one Redact statement
     */
    readonly statement: any;
}
/**
 * Properties for creating a data protection policy
 */
export interface DataProtectionPolicyProps {
    /**
     * Name of the data protection policy
     *
     * @default - 'data-protection-policy-cdk'
     */
    readonly name?: string;
    /**
     * Description of the data protection policy
     *
     * @default - 'cdk generated data protection policy'
     */
    readonly description?: string;
    /**
     * List of data protection identifiers.
     *
     * Managed data identifiers must be in the following list: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL-managed-data-identifiers.html
     * Custom data identifiers must have a valid regex defined: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL-custom-data-identifiers.html#custom-data-identifiers-constraints
     */
    readonly identifiers: DataIdentifier[];
    /**
     * CloudWatch Logs log group to send audit findings to. The log group must already exist prior to creating the data protection policy.
     *
     * @default - no CloudWatch Logs audit destination
     */
    readonly logGroupAuditDestination?: ILogGroup;
    /**
     * S3 bucket to send audit findings to. The bucket must already exist.
     *
     * @default - no S3 bucket audit destination
     */
    readonly s3BucketAuditDestination?: IBucket;
    /**
     * Amazon Kinesis Data Firehose delivery stream to send audit findings to. The delivery stream must already exist.
     *
     * @default - no firehose delivery stream audit destination
     */
    readonly deliveryStreamNameAuditDestination?: string;
}
/**
 * A data protection identifier. If an identifier is supported but not in this class, it can be passed in the constructor instead.
 */
export declare class DataIdentifier {
    readonly name: string;
    static readonly ADDRESS: DataIdentifier;
    static readonly AWSSECRETKEY: DataIdentifier;
    static readonly BANKACCOUNTNUMBER_DE: DataIdentifier;
    static readonly BANKACCOUNTNUMBER_ES: DataIdentifier;
    static readonly BANKACCOUNTNUMBER_FR: DataIdentifier;
    static readonly BANKACCOUNTNUMBER_GB: DataIdentifier;
    static readonly BANKACCOUNTNUMBER_IT: DataIdentifier;
    static readonly BANKACCOUNTNUMBER_US: DataIdentifier;
    static readonly CEPCODE_BR: DataIdentifier;
    static readonly CNPJ_BR: DataIdentifier;
    static readonly CPFCODE_BR: DataIdentifier;
    static readonly CREDITCARDEXPIRATION: DataIdentifier;
    static readonly CREDITCARDNUMBER: DataIdentifier;
    static readonly CREDITCARDSECURITYCODE: DataIdentifier;
    static readonly DRIVERSLICENSE_AT: DataIdentifier;
    static readonly DRIVERSLICENSE_AU: DataIdentifier;
    static readonly DRIVERSLICENSE_BE: DataIdentifier;
    static readonly DRIVERSLICENSE_BG: DataIdentifier;
    static readonly DRIVERSLICENSE_CA: DataIdentifier;
    static readonly DRIVERSLICENSE_CY: DataIdentifier;
    static readonly DRIVERSLICENSE_CZ: DataIdentifier;
    static readonly DRIVERSLICENSE_DE: DataIdentifier;
    static readonly DRIVERSLICENSE_DK: DataIdentifier;
    static readonly DRIVERSLICENSE_EE: DataIdentifier;
    static readonly DRIVERSLICENSE_ES: DataIdentifier;
    static readonly DRIVERSLICENSE_FI: DataIdentifier;
    static readonly DRIVERSLICENSE_FR: DataIdentifier;
    static readonly DRIVERSLICENSE_GB: DataIdentifier;
    static readonly DRIVERSLICENSE_GR: DataIdentifier;
    static readonly DRIVERSLICENSE_HR: DataIdentifier;
    static readonly DRIVERSLICENSE_HU: DataIdentifier;
    static readonly DRIVERSLICENSE_IE: DataIdentifier;
    static readonly DRIVERSLICENSE_IT: DataIdentifier;
    static readonly DRIVERSLICENSE_LT: DataIdentifier;
    static readonly DRIVERSLICENSE_LU: DataIdentifier;
    static readonly DRIVERSLICENSE_LV: DataIdentifier;
    static readonly DRIVERSLICENSE_MT: DataIdentifier;
    static readonly DRIVERSLICENSE_NL: DataIdentifier;
    static readonly DRIVERSLICENSE_PL: DataIdentifier;
    static readonly DRIVERSLICENSE_PT: DataIdentifier;
    static readonly DRIVERSLICENSE_RO: DataIdentifier;
    static readonly DRIVERSLICENSE_SE: DataIdentifier;
    static readonly DRIVERSLICENSE_SI: DataIdentifier;
    static readonly DRIVERSLICENSE_SK: DataIdentifier;
    static readonly DRIVERSLICENSE_US: DataIdentifier;
    static readonly DRUGENFORCEMENTAGENCYNUMBER_US: DataIdentifier;
    static readonly ELECTORALROLLNUMBER_GB: DataIdentifier;
    static readonly EMAILADDRESS: DataIdentifier;
    static readonly HEALTHINSURANCECARDNUMBER_EU: DataIdentifier;
    static readonly HEALTHINSURANCECLAIMNUMBER_US: DataIdentifier;
    static readonly HEALTHINSURANCENUMBER_FR: DataIdentifier;
    static readonly HEALTHCAREPROCEDURECODE_US: DataIdentifier;
    static readonly INDIVIDUALTAXIDENTIFICATIONNUMBER_US: DataIdentifier;
    static readonly INSEECODE_FR: DataIdentifier;
    static readonly IPADDRESS: DataIdentifier;
    static readonly LATLONG: DataIdentifier;
    static readonly MEDICAREBENEFICIARYNUMBER_US: DataIdentifier;
    static readonly NAME: DataIdentifier;
    static readonly NATIONALDRUGCODE_US: DataIdentifier;
    static readonly NATIONALIDENTIFICATIONNUMBER_DE: DataIdentifier;
    static readonly NATIONALIDENTIFICATIONNUMBER_ES: DataIdentifier;
    static readonly NATIONALIDENTIFICATIONNUMBER_IT: DataIdentifier;
    static readonly NATIONALINSURANCENUMBER_GB: DataIdentifier;
    static readonly NATIONALPROVIDERID_US: DataIdentifier;
    static readonly NHSNUMBER_GB: DataIdentifier;
    static readonly NIENUMBER_ES: DataIdentifier;
    static readonly NIFNUMBER_ES: DataIdentifier;
    static readonly OPENSSHPRIVATEKEY: DataIdentifier;
    static readonly PASSPORTNUMBER_CA: DataIdentifier;
    static readonly PASSPORTNUMBER_DE: DataIdentifier;
    static readonly PASSPORTNUMBER_ES: DataIdentifier;
    static readonly PASSPORTNUMBER_FR: DataIdentifier;
    static readonly PASSPORTNUMBER_GB: DataIdentifier;
    static readonly PASSPORTNUMBER_IT: DataIdentifier;
    static readonly PASSPORTNUMBER_US: DataIdentifier;
    static readonly PERMANENTRESIDENCENUMBER_CA: DataIdentifier;
    static readonly PERSONALHEALTHNUMBER_CA: DataIdentifier;
    static readonly PGPPRIVATEKEY: DataIdentifier;
    static readonly PHONENUMBER_BR: DataIdentifier;
    static readonly PHONENUMBER_DE: DataIdentifier;
    static readonly PHONENUMBER_ES: DataIdentifier;
    static readonly PHONENUMBER_FR: DataIdentifier;
    static readonly PHONENUMBER_GB: DataIdentifier;
    static readonly PHONENUMBER_IT: DataIdentifier;
    static readonly PHONENUMBER_US: DataIdentifier;
    static readonly PKCSPRIVATEKEY: DataIdentifier;
    static readonly POSTALCODE_CA: DataIdentifier;
    static readonly PUTTYPRIVATEKEY: DataIdentifier;
    static readonly RGNUMBER_BR: DataIdentifier;
    static readonly SOCIALINSURANCENUMBER_CA: DataIdentifier;
    static readonly SSN_ES: DataIdentifier;
    static readonly SSN_US: DataIdentifier;
    static readonly TAXID_DE: DataIdentifier;
    static readonly TAXID_ES: DataIdentifier;
    static readonly TAXID_FR: DataIdentifier;
    static readonly TAXID_GB: DataIdentifier;
    static readonly VEHICLEIDENTIFICATIONNUMBER: DataIdentifier;
    static readonly ZIPCODE_US: DataIdentifier;
    /**
     * Create a managed data identifier not in the list of static members. This is used to maintain forward compatibility, in case a new managed identifier is supported but not updated in CDK yet.
     * @param name - name of the identifier.
     */
    constructor(name: string);
    toString(): string;
}
/**
 * A custom data identifier. Include a custom data identifier name and regular expression in the JSON policy used to define the data protection policy.
 */
export declare class CustomDataIdentifier extends DataIdentifier {
    readonly name: string;
    readonly regex: string;
    /**
     * Create a custom data identifier.
     * @param name - the name of the custom data identifier. This cannot share the same name as a managed data identifier.
     * @param regex - the regular expression to detect and mask log events for.
     */
    constructor(name: string, regex: string);
    /**
     * String representation of a CustomDataIdentifier
     * @returns the name and RegEx of the custom data identifier
     */
    toString(): string;
}
export {};
