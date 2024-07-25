import { Construct } from 'constructs';
import { CfnKeyValueStore } from './cloudfront.generated';
import * as s3 from '../../aws-s3';
import * as s3_assets from '../../aws-s3-assets';
import { Resource, IResource } from '../../core';
/**
 * The data to be imported to the key value store.
 */
export declare abstract class ImportSource {
    /**
     * An import source that exists as an object in an S3 bucket.
     *
     * @param bucket the S3 bucket that contains the data
     * @param key the key within the S3 bucket that contains the data
     */
    static fromBucket(bucket: s3.IBucket, key: string): ImportSource;
    /**
     * An import source that exists as a local file.
     *
     * @param path the path to the local file
     * @param options the configuration for the temporarily created S3 file
     */
    static fromAsset(path: string, options?: s3_assets.AssetOptions): ImportSource;
    /**
     * An import source that uses an inline string.
     *
     * @param data the contents of the KeyValueStore
     */
    static fromInline(data: string): ImportSource;
    /**
     * Called when the key value store is initialized to allow the import source to
     * be bound to the stack.
     *
     * The method is primarily intended for internal use.
     *
     * @param scope the binding scope
     * @internal
     */
    abstract _bind(scope: Construct): CfnKeyValueStore.ImportSourceProperty;
}
/**
 * An import source from an S3 object.
 */
export declare class S3ImportSource extends ImportSource {
    readonly bucket: s3.IBucket;
    readonly key: string;
    /**
     * @param bucket the S3 bucket that contains the data
     * @param key the key within the S3 bucket that contains the data
     */
    constructor(bucket: s3.IBucket, key: string);
    /**
     * @internal
     */
    _bind(_scope: Construct): CfnKeyValueStore.ImportSourceProperty;
}
/**
 * An import source from a local file.
 */
export declare class AssetImportSource extends ImportSource {
    readonly path: string;
    private readonly options;
    private asset?;
    /**
     * @param path the path to the local file
     * @param options the configuration for the temporarily created S3 file
     */
    constructor(path: string, options?: s3_assets.AssetOptions);
    /**
     * @internal
     */
    _bind(scope: Construct): CfnKeyValueStore.ImportSourceProperty;
}
/**
 * An import source from an inline string.
 */
export declare class InlineImportSource extends ImportSource {
    readonly data: string;
    private asset?;
    /**
     * @param data the contents of the KeyValueStore
     */
    constructor(data: string);
    /**
     * @internal
     */
    _bind(scope: Construct): CfnKeyValueStore.ImportSourceProperty;
}
/**
 * The properties to create a Key Value Store.
 */
export interface KeyValueStoreProps {
    /**
     * The unique name of the Key Value Store.
     *
     * @default A generated name
     */
    readonly keyValueStoreName?: string;
    /**
     * A comment for the Key Value Store
     *
     * @default No comment will be specified
     */
    readonly comment?: string;
    /**
     * The import source for the Key Value Store.
     *
     * This will populate the initial items in the Key Value Store. The
     * source data must be in a valid JSON format.
     *
     * @default No data will be imported to the store
     */
    readonly source?: ImportSource;
}
/**
 * A CloudFront Key Value Store.
 */
export interface IKeyValueStore extends IResource {
    /**
     * The ARN of the Key Value Store.
     *
     * @attribute
     */
    readonly keyValueStoreArn: string;
    /**
     * The Unique ID of the Key Value Store.
     *
     * @attribute
     */
    readonly keyValueStoreId: string;
    /**
     * The status of the Key Value Store.
     *
     * @attribute
     */
    readonly keyValueStoreStatus: string;
}
/**
 * A CloudFront Key Value Store.
 *
 * @resource AWS::CloudFront::KeyValueStore
 */
export declare class KeyValueStore extends Resource implements IKeyValueStore {
    /**
     * Import a Key Value Store using its ARN.
     */
    static fromKeyValueStoreArn(scope: Construct, id: string, keyValueStoreArn: string): IKeyValueStore;
    readonly keyValueStoreArn: string;
    readonly keyValueStoreId: string;
    readonly keyValueStoreStatus: string;
    constructor(scope: Construct, id: string, props?: KeyValueStoreProps);
}
