import { Construct } from 'constructs';
import * as iam from '../../aws-iam';
import * as s3 from '../../aws-s3';
import * as s3_assets from '../../aws-s3-assets';
/**
 * Source information.
 */
export interface SourceConfig {
    /**
     * The source bucket to deploy from.
     */
    readonly bucket: s3.IBucket;
    /**
     * An S3 object key in the source bucket that points to a zip file.
     */
    readonly zipObjectKey: string;
    /**
     * A set of markers to substitute in the source content.
     * @default - no markers
     */
    readonly markers?: Record<string, any>;
}
/**
 * Bind context for ISources
 */
export interface DeploymentSourceContext {
    /**
     * The role for the handler
     */
    readonly handlerRole: iam.IRole;
}
/**
 * Represents a source for bucket deployments.
 */
export interface ISource {
    /**
     * Binds the source to a bucket deployment.
     * @param scope The construct tree context.
     */
    bind(scope: Construct, context?: DeploymentSourceContext): SourceConfig;
}
/**
 * Specifies bucket deployment source.
 *
 * Usage:
 *
 *     Source.bucket(bucket, key)
 *     Source.asset('/local/path/to/directory')
 *     Source.asset('/local/path/to/a/file.zip')
 *     Source.data('hello/world/file.txt', 'Hello, world!')
 *     Source.jsonData('config.json', { baz: topic.topicArn })
 *     Source.yamlData('config.yaml', { baz: topic.topicArn })
 *
 */
export declare class Source {
    /**
     * Uses a .zip file stored in an S3 bucket as the source for the destination bucket contents.
     *
     * Make sure you trust the producer of the archive.
     *
     * If the `bucket` parameter is an "out-of-app" reference "imported" via static methods such
     * as `s3.Bucket.fromBucketName`, be cautious about the bucket's encryption key. In general,
     * CDK does not query for additional properties of imported constructs at synthesis time.
     * For example, for a bucket created from `s3.Bucket.fromBucketName`, CDK does not know
     * its `IBucket.encryptionKey` property, and therefore will NOT give KMS permissions to the
     * Lambda execution role of the `BucketDeployment` construct. If you want the
     * `kms:Decrypt` and `kms:DescribeKey` permissions on the bucket's encryption key
     * to be added automatically, reference the imported bucket via `s3.Bucket.fromBucketAttributes`
     * and pass in the `encryptionKey` attribute explicitly.
     *
     * @example
     * declare const destinationBucket: s3.Bucket;
     * const sourceBucket = s3.Bucket.fromBucketAttributes(this, 'SourceBucket', {
     *   bucketArn: 'arn:aws:s3:::my-source-bucket-name',
     *   encryptionKey: kms.Key.fromKeyArn(
     *     this,
     *     'SourceBucketEncryptionKey',
     *     'arn:aws:kms:us-east-1:123456789012:key/<key-id>'
     *   ),
     * });
     * const deployment = new s3deploy.BucketDeployment(this, 'DeployFiles', {
     *   sources: [s3deploy.Source.bucket(sourceBucket, 'source.zip')],
     *   destinationBucket,
     * });
     *
     * @param bucket The S3 Bucket
     * @param zipObjectKey The S3 object key of the zip file with contents
     */
    static bucket(bucket: s3.IBucket, zipObjectKey: string): ISource;
    /**
     * Uses a local asset as the deployment source.
     *
     * If the local asset is a .zip archive, make sure you trust the
     * producer of the archive.
     *
     * @param path The path to a local .zip file or a directory
     */
    static asset(path: string, options?: s3_assets.AssetOptions): ISource;
    /**
     * Deploys an object with the specified string contents into the bucket. The
     * content can include deploy-time values (such as `snsTopic.topicArn`) that
     * will get resolved only during deployment.
     *
     * To store a JSON object use `Source.jsonData()`.
     * To store YAML content use `Source.yamlData()`.
     *
     * @param objectKey The destination S3 object key (relative to the root of the
     * S3 deployment).
     * @param data The data to be stored in the object.
     */
    static data(objectKey: string, data: string): ISource;
    /**
     * Deploys an object with the specified JSON object into the bucket. The
     * object can include deploy-time values (such as `snsTopic.topicArn`) that
     * will get resolved only during deployment.
     *
     * @param objectKey The destination S3 object key (relative to the root of the
     * S3 deployment).
     * @param obj A JSON object.
     */
    static jsonData(objectKey: string, obj: any): ISource;
    /**
     * Deploys an object with the specified JSON object formatted as YAML into the bucket.
     * The object can include deploy-time values (such as `snsTopic.topicArn`) that
     * will get resolved only during deployment.
     *
     * @param objectKey The destination S3 object key (relative to the root of the
     * S3 deployment).
     * @param obj A JSON object.
     */
    static yamlData(objectKey: string, obj: any): ISource;
    private constructor();
}
