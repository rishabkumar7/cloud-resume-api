import * as iam from '../../../../aws-iam';
import { IBucket } from '../../../../aws-s3';
/**
 * Interface for Result Writer configuration properties
 */
export interface ResultWriterProps {
    /**
     * S3 Bucket in which to save Map Run results
     */
    readonly bucket: IBucket;
    /**
     * S3 prefix in which to save Map Run results
     *
     * @default - No prefix
     */
    readonly prefix?: string;
}
/**
 * Configuration for writing Distributed Map state results to S3
 */
export declare class ResultWriter {
    /**
     * S3 Bucket in which to save Map Run results
     */
    readonly bucket: IBucket;
    /**
     * S3 prefix in which to save Map Run results
     *
     * @default - No prefix
     */
    readonly prefix?: string;
    constructor(props: ResultWriterProps);
    /**
     * Render ResultWriter in ASL JSON format
     */
    render(): any;
    /**
     * Compile policy statements to provide relevent permissions to the state machine
     */
    providePolicyStatements(): iam.PolicyStatement[];
}
