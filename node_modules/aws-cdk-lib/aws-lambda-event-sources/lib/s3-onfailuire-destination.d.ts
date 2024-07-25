import { DlqDestinationConfig, IEventSourceDlq, IEventSourceMapping, IFunction } from '../../aws-lambda';
import * as s3 from '../../aws-s3';
/**
 * An S3 dead letter bucket destination configuration for a Lambda event source
 */
export declare class S3OnFailureDestination implements IEventSourceDlq {
    private readonly bucket;
    constructor(bucket: s3.IBucket);
    /**
     * Returns a destination configuration for the DLQ
     */
    bind(_target: IEventSourceMapping, targetHandler: IFunction): DlqDestinationConfig;
}
