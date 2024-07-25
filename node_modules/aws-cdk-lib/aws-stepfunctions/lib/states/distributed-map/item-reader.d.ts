import * as iam from '../../../../aws-iam';
import { IBucket } from '../../../../aws-s3';
/**
 * Base interface for Item Reader configurations
 */
export interface IItemReader {
    /**
     * S3 Bucket containing objects to iterate over or a file with a list to iterate over
     */
    readonly bucket: IBucket;
    /**
     * The Amazon S3 API action that Step Functions must invoke depending on the specified dataset.
     */
    readonly resource: string;
    /**
     * Limits the number of items passed to the Distributed Map state
     *
     * @default - Distributed Map state will iterate over all items provided by the ItemReader
     */
    readonly maxItems?: number;
    /**
     * Render the ItemReader as JSON object
     */
    render(): any;
    /**
     * Compile policy statements to provide relevent permissions to the state machine
     */
    providePolicyStatements(): iam.PolicyStatement[];
}
/**
 * Base interface for Item Reader configuration properties
 */
export interface ItemReaderProps {
    /**
     * S3 Bucket containing objects to iterate over or a file with a list to iterate over
     */
    readonly bucket: IBucket;
    /**
     * Limits the number of items passed to the Distributed Map state
     *
     * @default - Distributed Map state will iterate over all items provided by the ItemReader
     */
    readonly maxItems?: number;
}
/**
 * Properties for configuring an Item Reader that iterates over objects in an S3 bucket
 */
export interface S3ObjectsItemReaderProps extends ItemReaderProps {
    /**
     * S3 prefix used to limit objects to iterate over
     *
     * @default - No prefix
     */
    readonly prefix?: string;
}
/**
 * Item Reader configuration for iterating over objects in an S3 bucket
 */
export declare class S3ObjectsItemReader implements IItemReader {
    /**
     * S3 Bucket containing objects to iterate over
     */
    readonly bucket: IBucket;
    /**
     * ARN for the `listObjectsV2` method of the S3 API
     * This API method is used to iterate all objects in the S3 bucket/prefix
     */
    readonly resource: string;
    /**
     * S3 prefix used to limit objects to iterate over
     *
     * @default - No prefix
     */
    readonly prefix?: string;
    /**
     * Limits the number of items passed to the Distributed Map state
     *
     * @default - Distributed Map state will iterate over all items provided by the ItemReader
     */
    readonly maxItems?: number;
    constructor(props: S3ObjectsItemReaderProps);
    /**
     * Renders the ItemReader configuration as JSON object
     * @returns - JSON object
     */
    render(): any;
    /**
     * Compile policy statements to provide relevent permissions to the state machine
     */
    providePolicyStatements(): iam.PolicyStatement[];
}
/**
 * Base interface for Item Reader configuration properties the iterate over entries in a S3 file
 */
export interface S3FileItemReaderProps extends ItemReaderProps {
    /**
     * Key of file stored in S3 bucket containing an array to iterate over
     */
    readonly key: string;
}
/**
 * Base Item Reader configuration for iterating over entries in a S3 file
 */
declare abstract class S3FileItemReader implements IItemReader {
    /**
     * S3 Bucket containing a file with a list to iterate over
     */
    readonly bucket: IBucket;
    /**
     * S3 key of a file with a list to iterate over
     */
    readonly key: string;
    /**
     * ARN for the `getObject` method of the S3 API
     * This API method is used to iterate all objects in the S3 bucket/prefix
     */
    readonly resource: string;
    /**
     * Limits the number of items passed to the Distributed Map state
     *
     * @default - No maxItems
     */
    readonly maxItems?: number;
    protected abstract readonly inputType: string;
    constructor(props: S3FileItemReaderProps);
    /**
     * Renders the ItemReader configuration as JSON object
     * @returns - JSON object
     */
    render(): any;
    /**
     * Compile policy statements to provide relevent permissions to the state machine
     */
    providePolicyStatements(): iam.PolicyStatement[];
}
/**
 * Item Reader configuration for iterating over items in a JSON array stored in a S3 file
 */
export declare class S3JsonItemReader extends S3FileItemReader {
    protected readonly inputType: string;
}
/**
 * CSV header location options
 */
export declare enum CsvHeaderLocation {
    /**
     * Headers will be read from first row of CSV file
     */
    FIRST_ROW = "FIRST_ROW",
    /**
     * Headers are provided in CSVHeaders property
     */
    GIVEN = "GIVEN"
}
/**
 * Configuration for CSV header options for a CSV Item Reader
 */
export declare class CsvHeaders {
    /**
     * Configures S3CsvItemReader to read headers from the first row of the CSV file
     * @returns - CsvHeaders
     */
    static useFirstRow(): CsvHeaders;
    /**
     * Configures S3CsvItemReader to use the headers provided in the `headers` parameter
     * @param headers - List of headers
     * @returns - CsvHeaders
     */
    static use(headers: string[]): CsvHeaders;
    /**
     * Location of headers in CSV file
     */
    readonly headerLocation: CsvHeaderLocation;
    /**
     * List of headers if `headerLocation` is `GIVEN`
     */
    readonly headers?: string[];
    private constructor();
}
/**
 * Properties for configuring an Item Reader that iterates over items in a CSV file in S3
 */
export interface S3CsvItemReaderProps extends S3FileItemReaderProps {
    /**
     * CSV file header configuration
     *
     * @default - CsvHeaders with CsvHeadersLocation.FIRST_ROW
     */
    readonly csvHeaders?: CsvHeaders;
}
/**
 * Item Reader configuration for iterating over items in a CSV file stored in S3
 */
export declare class S3CsvItemReader extends S3FileItemReader {
    /**
     * CSV headers configuration
     */
    readonly csvHeaders: CsvHeaders;
    protected readonly inputType: string;
    constructor(props: S3CsvItemReaderProps);
    render(): any;
}
/**
 * Item Reader configuration for iterating over items in a S3 inventory manifest file stored in S3
 */
export declare class S3ManifestItemReader extends S3FileItemReader {
    protected readonly inputType: string;
}
export {};
