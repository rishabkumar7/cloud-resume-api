import { Construct } from 'constructs';
import { CfnTable } from './dynamodb.generated';
import { EnableScalingProps, IScalableTableAttribute } from './scalable-attribute-api';
import { OperationsMetricOptions, SystemErrorsForOperationsMetricOptions, Attribute, BillingMode, ITable, SecondaryIndexProps, TableClass, LocalSecondaryIndexProps, TableEncryption, StreamViewType } from './shared';
import * as cloudwatch from '../../aws-cloudwatch';
import * as iam from '../../aws-iam';
import * as kinesis from '../../aws-kinesis';
import * as kms from '../../aws-kms';
import * as s3 from '../../aws-s3';
import { Resource, Duration, RemovalPolicy } from '../../core';
/**
 * Represents the table schema attributes.
 */
export interface SchemaOptions {
    /**
     * Partition key attribute definition.
     */
    readonly partitionKey: Attribute;
    /**
     * Sort key attribute definition.
     *
     * @default no sort key
     */
    readonly sortKey?: Attribute;
}
/**
 * Type of compression to use for imported data.
 */
export declare enum InputCompressionType {
    /**
     * GZIP compression.
     */
    GZIP = "GZIP",
    /**
     * ZSTD compression.
     */
    ZSTD = "ZSTD",
    /**
     * No compression.
     */
    NONE = "NONE"
}
/**
 * The options for imported source files in CSV format.
 */
export interface CsvOptions {
    /**
     * The delimiter used for separating items in the CSV file being imported.
     *
     * Valid delimiters are as follows:
     * - comma (`,`)
     * - tab (`\t`)
     * - colon (`:`)
     * - semicolon (`;`)
     * - pipe (`|`)
     * - space (` `)
     *
     * @default - use comma as a delimiter.
     */
    readonly delimiter?: string;
    /**
     * List of the headers used to specify a common header for all source CSV files being imported.
     *
     * **NOTE**: If this field is specified then the first line of each CSV file is treated as data instead of the header.
     * If this field is not specified the the first line of each CSV file is treated as the header.
     *
     * @default - the first line of the CSV file is treated as the header
     */
    readonly headerList?: string[];
}
/**
 * The format of the source data.
 */
export declare abstract class InputFormat {
    /**
     * DynamoDB JSON format.
     */
    static dynamoDBJson(): InputFormat;
    /**
     * Amazon Ion format.
     */
    static ion(): InputFormat;
    /**
     * CSV format.
     */
    static csv(options?: CsvOptions): InputFormat;
    /**
     * Valid CSV delimiters.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-csv.html#cfn-dynamodb-table-csv-delimiter
     */
    private static validCsvDelimiters;
    private static readableValidCsvDelimiters;
    /**
     * Render the input format and options.
     *
     * @internal
     */
    abstract _render(): Pick<CfnTable.ImportSourceSpecificationProperty, 'inputFormat' | 'inputFormatOptions'>;
}
/**
 *  Properties for importing data from the S3.
 */
export interface ImportSourceSpecification {
    /**
     * The compression type of the imported data.
     *
     * @default InputCompressionType.NONE
     */
    readonly compressionType?: InputCompressionType;
    /**
     * The format of the imported data.
     */
    readonly inputFormat: InputFormat;
    /**
     * The S3 bucket that is being imported from.
     */
    readonly bucket: s3.IBucket;
    /**
     * The account number of the S3 bucket that is being imported from.
     *
     * @default - no value
     */
    readonly bucketOwner?: string;
    /**
     * The key prefix shared by all S3 Objects that are being imported.
     *
     * @default - no value
     */
    readonly keyPrefix?: string;
}
/**
 * Properties of a DynamoDB Table
 *
 * Use `TableProps` for all table properties
 */
export interface TableOptions extends SchemaOptions {
    /**
     * The read capacity for the table. Careful if you add Global Secondary Indexes, as
     * those will share the table's provisioned throughput.
     *
     * Can only be provided if billingMode is Provisioned.
     *
     * @default 5
     */
    readonly readCapacity?: number;
    /**
     * The write capacity for the table. Careful if you add Global Secondary Indexes, as
     * those will share the table's provisioned throughput.
     *
     * Can only be provided if billingMode is Provisioned.
     *
     * @default 5
     */
    readonly writeCapacity?: number;
    /**
     * Specify how you are charged for read and write throughput and how you manage capacity.
     *
     * @default PROVISIONED if `replicationRegions` is not specified, PAY_PER_REQUEST otherwise
     */
    readonly billingMode?: BillingMode;
    /**
     * Whether point-in-time recovery is enabled.
     * @default - point-in-time recovery is disabled
     */
    readonly pointInTimeRecovery?: boolean;
    /**
     * Specify the table class.
     * @default STANDARD
     */
    readonly tableClass?: TableClass;
    /**
     * Whether server-side encryption with an AWS managed customer master key is enabled.
     *
     * This property cannot be set if `serverSideEncryption` is set.
     *
     * > **NOTE**: if you set this to `CUSTOMER_MANAGED` and `encryptionKey` is not
     * > specified, the key that the Tablet generates for you will be created with
     * > default permissions. If you are using CDKv2, these permissions will be
     * > sufficient to enable the key for use with DynamoDB tables.  If you are
     * > using CDKv1, make sure the feature flag
     * > `@aws-cdk/aws-kms:defaultKeyPolicies` is set to `true` in your `cdk.json`.
     *
     * @default - The table is encrypted with an encryption key managed by DynamoDB, and you are not charged any fee for using it.
     */
    readonly encryption?: TableEncryption;
    /**
     * External KMS key to use for table encryption.
     *
     * This property can only be set if `encryption` is set to `TableEncryption.CUSTOMER_MANAGED`.
     *
     * @default - If `encryption` is set to `TableEncryption.CUSTOMER_MANAGED` and this
     * property is undefined, a new KMS key will be created and associated with this table.
     * If `encryption` and this property are both undefined, then the table is encrypted with
     * an encryption key managed by DynamoDB, and you are not charged any fee for using it.
     */
    readonly encryptionKey?: kms.IKey;
    /**
     * The name of TTL attribute.
     * @default - TTL is disabled
     */
    readonly timeToLiveAttribute?: string;
    /**
     * When an item in the table is modified, StreamViewType determines what information
     * is written to the stream for this table.
     *
     * @default - streams are disabled unless `replicationRegions` is specified
     */
    readonly stream?: StreamViewType;
    /**
     * The removal policy to apply to the DynamoDB Table.
     *
     * @default RemovalPolicy.RETAIN
     */
    readonly removalPolicy?: RemovalPolicy;
    /**
     * Regions where replica tables will be created
     *
     * @default - no replica tables are created
     */
    readonly replicationRegions?: string[];
    /**
     * The timeout for a table replication operation in a single region.
     *
     * @default Duration.minutes(30)
     */
    readonly replicationTimeout?: Duration;
    /**
     * Indicates whether CloudFormation stack waits for replication to finish.
     * If set to false, the CloudFormation resource will mark the resource as
     * created and replication will be completed asynchronously. This property is
     * ignored if replicationRegions property is not set.
     *
     * WARNING:
     * DO NOT UNSET this property if adding/removing multiple replicationRegions
     * in one deployment, as CloudFormation only supports one region replication
     * at a time. CDK overcomes this limitation by waiting for replication to
     * finish before starting new replicationRegion.
     *
     * If the custom resource which handles replication has a physical resource
     * ID with the format `region` instead of `tablename-region` (this would happen
     * if the custom resource hasn't received an event since v1.91.0), DO NOT SET
     * this property to false without making a change to the table name.
     * This will cause the existing replicas to be deleted.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicas
     * @default true
     */
    readonly waitForReplicationToFinish?: boolean;
    /**
     * Whether CloudWatch contributor insights is enabled.
     *
     * @default false
     */
    readonly contributorInsightsEnabled?: boolean;
    /**
     * Enables deletion protection for the table.
     *
     * @default false
     */
    readonly deletionProtection?: boolean;
    /**
     * The properties of data being imported from the S3 bucket source to the table.
     *
     * @default - no data import from the S3 bucket
     */
    readonly importSource?: ImportSourceSpecification;
    /**
     * Resource policy to assign to table.
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-resourcepolicy
     * @default - No resource policy statement
     */
    readonly resourcePolicy?: iam.PolicyDocument;
}
/**
 * Properties for a DynamoDB Table
 */
export interface TableProps extends TableOptions {
    /**
     * Enforces a particular physical table name.
     * @default <generated>
     */
    readonly tableName?: string;
    /**
     * Kinesis Data Stream to capture item-level changes for the table.
     *
     * @default - no Kinesis Data Stream
     */
    readonly kinesisStream?: kinesis.IStream;
}
/**
 * Properties for a global secondary index
 */
export interface GlobalSecondaryIndexProps extends SecondaryIndexProps, SchemaOptions {
    /**
     * The read capacity for the global secondary index.
     *
     * Can only be provided if table billingMode is Provisioned or undefined.
     *
     * @default 5
     */
    readonly readCapacity?: number;
    /**
     * The write capacity for the global secondary index.
     *
     * Can only be provided if table billingMode is Provisioned or undefined.
     *
     * @default 5
     */
    readonly writeCapacity?: number;
}
/**
 * Reference to a dynamodb table.
 */
export interface TableAttributes {
    /**
     * The ARN of the dynamodb table.
     * One of this, or `tableName`, is required.
     *
     * @default - no table arn
     */
    readonly tableArn?: string;
    /**
     * The table name of the dynamodb table.
     * One of this, or `tableArn`, is required.
     *
     * @default - no table name
     */
    readonly tableName?: string;
    /**
     * The ARN of the table's stream.
     *
     * @default - no table stream
     */
    readonly tableStreamArn?: string;
    /**
     * KMS encryption key, if this table uses a customer-managed encryption key.
     *
     * @default - no key
     */
    readonly encryptionKey?: kms.IKey;
    /**
     * The name of the global indexes set for this Table.
     * Note that you need to set either this property,
     * or `localIndexes`,
     * if you want methods like grantReadData()
     * to grant permissions for indexes as well as the table itself.
     *
     * @default - no global indexes
     */
    readonly globalIndexes?: string[];
    /**
     * The name of the local indexes set for this Table.
     * Note that you need to set either this property,
     * or `globalIndexes`,
     * if you want methods like grantReadData()
     * to grant permissions for indexes as well as the table itself.
     *
     * @default - no local indexes
     */
    readonly localIndexes?: string[];
    /**
     * If set to true, grant methods always grant permissions for all indexes.
     * If false is provided, grant methods grant the permissions
     * only when `globalIndexes` or `localIndexes` is specified.
     *
     * @default - false
     */
    readonly grantIndexPermissions?: boolean;
}
export declare abstract class TableBase extends Resource implements ITable, iam.IResourceWithPolicy {
    /**
     * @attribute
     */
    abstract readonly tableArn: string;
    /**
     * @attribute
     */
    abstract readonly tableName: string;
    /**
     * @attribute
     */
    abstract readonly tableStreamArn?: string;
    /**
     * KMS encryption key, if this table uses a customer-managed encryption key.
     */
    abstract readonly encryptionKey?: kms.IKey;
    /**
     * Resource policy to assign to table.
     * @attribute
     */
    abstract resourcePolicy?: iam.PolicyDocument;
    protected readonly regionalArns: string[];
    /**
     * Adds an IAM policy statement associated with this table to an IAM
     * principal's policy.
     *
     * If `encryptionKey` is present, appropriate grants to the key needs to be added
     * separately using the `table.encryptionKey.grant*` methods.
     *
     * @param grantee The principal (no-op if undefined)
     * @param actions The set of actions to allow (i.e. "dynamodb:PutItem", "dynamodb:GetItem", ...)
     */
    grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;
    /**
     * Adds an IAM policy statement associated with this table's stream to an
     * IAM principal's policy.
     *
     * If `encryptionKey` is present, appropriate grants to the key needs to be added
     * separately using the `table.encryptionKey.grant*` methods.
     *
     * @param grantee The principal (no-op if undefined)
     * @param actions The set of actions to allow (i.e. "dynamodb:DescribeStream", "dynamodb:GetRecords", ...)
     */
    grantStream(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;
    /**
     * Permits an IAM principal all data read operations from this table:
     * BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, DescribeTable.
     *
     * Appropriate grants will also be added to the customer-managed KMS key
     * if one was configured.
     *
     * @param grantee The principal to grant access to
     */
    grantReadData(grantee: iam.IGrantable): iam.Grant;
    /**
     * Permits an IAM Principal to list streams attached to current dynamodb table.
     *
     * @param grantee The principal (no-op if undefined)
     */
    grantTableListStreams(grantee: iam.IGrantable): iam.Grant;
    /**
     * Permits an IAM principal all stream data read operations for this
     * table's stream:
     * DescribeStream, GetRecords, GetShardIterator, ListStreams.
     *
     * Appropriate grants will also be added to the customer-managed KMS key
     * if one was configured.
     *
     * @param grantee The principal to grant access to
     */
    grantStreamRead(grantee: iam.IGrantable): iam.Grant;
    /**
     * Permits an IAM principal all data write operations to this table:
     * BatchWriteItem, PutItem, UpdateItem, DeleteItem, DescribeTable.
     *
     * Appropriate grants will also be added to the customer-managed KMS key
     * if one was configured.
     *
     * @param grantee The principal to grant access to
     */
    grantWriteData(grantee: iam.IGrantable): iam.Grant;
    /**
     * Permits an IAM principal to all data read/write operations to this table.
     * BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan,
     * BatchWriteItem, PutItem, UpdateItem, DeleteItem, DescribeTable
     *
     * Appropriate grants will also be added to the customer-managed KMS key
     * if one was configured.
     *
     * @param grantee The principal to grant access to
     */
    grantReadWriteData(grantee: iam.IGrantable): iam.Grant;
    /**
     * Permits all DynamoDB operations ("dynamodb:*") to an IAM principal.
     *
     * Appropriate grants will also be added to the customer-managed KMS key
     * if one was configured.
     *
     * @param grantee The principal to grant access to
     */
    grantFullAccess(grantee: iam.IGrantable): iam.Grant;
    /**
     * Adds a statement to the resource policy associated with this file system.
     * A resource policy will be automatically created upon the first call to `addToResourcePolicy`.
     *
     * Note that this does not work with imported file systems.
     *
     * @param statement The policy statement to add
     */
    addToResourcePolicy(statement: iam.PolicyStatement): iam.AddToResourcePolicyResult;
    /**
     * Return the given named metric for this Table
     *
     * By default, the metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the consumed read capacity units this table
     *
     * By default, the metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricConsumedReadCapacityUnits(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the consumed write capacity units this table
     *
     * By default, the metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricConsumedWriteCapacityUnits(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the system errors this table
     *
     * @deprecated use `metricSystemErrorsForOperations`.
     */
    metricSystemErrors(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the user errors. Note that this metric reports user errors across all
     * the tables in the account and region the table resides in.
     *
     * By default, the metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricUserErrors(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the conditional check failed requests this table
     *
     * By default, the metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricConditionalCheckFailedRequests(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * How many requests are throttled on this table
     *
     * Default: sum over 5 minutes
     *
     * @deprecated Do not use this function. It returns an invalid metric. Use `metricThrottledRequestsForOperation` instead.
     */
    metricThrottledRequests(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the successful request latency this table.
     *
     * By default, the metric will be calculated as an average over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricSuccessfulRequestLatency(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * How many requests are throttled on this table, for the given operation
     *
     * Default: sum over 5 minutes
     */
    metricThrottledRequestsForOperation(operation: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * How many requests are throttled on this table.
     *
     * This will sum errors across all possible operations.
     * Note that by default, each individual metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricThrottledRequestsForOperations(props?: OperationsMetricOptions): cloudwatch.IMetric;
    /**
     * Metric for the system errors this table.
     *
     * This will sum errors across all possible operations.
     * Note that by default, each individual metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricSystemErrorsForOperations(props?: SystemErrorsForOperationsMetricOptions): cloudwatch.IMetric;
    /**
     * Create a math expression for operations.
     *
     * @param metricName The metric name.
     * @param expressionLabel Label for expression
     * @param props operation list
     */
    private sumMetricsForOperations;
    /**
     * Create a map of metrics that can be used in a math expression.
     *
     * Using the return value of this function as the `usingMetrics` property in `cloudwatch.MathExpression` allows you to
     * use the keys of this map as metric names inside you expression.
     *
     * @param metricName The metric name.
     * @param operations The list of operations to create metrics for.
     * @param props Properties for the individual metrics.
     * @param metricNameMapper Mapper function to allow controlling the individual metric name per operation.
     */
    private createMetricsForOperations;
    protected abstract get hasIndex(): boolean;
    /**
     * Adds an IAM policy statement associated with this table to an IAM
     * principal's policy.
     * @param grantee The principal (no-op if undefined)
     * @param opts Options for keyActions, tableActions and streamActions
     */
    private combinedGrant;
    private cannedMetric;
}
/**
 * Provides a DynamoDB table.
 */
export declare class Table extends TableBase {
    /**
     * Creates a Table construct that represents an external table via table name.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param tableName The table's name.
     */
    static fromTableName(scope: Construct, id: string, tableName: string): ITable;
    /**
     * Creates a Table construct that represents an external table via table arn.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param tableArn The table's ARN.
     */
    static fromTableArn(scope: Construct, id: string, tableArn: string): ITable;
    /**
     * Creates a Table construct that represents an external table.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param attrs A `TableAttributes` object.
     */
    static fromTableAttributes(scope: Construct, id: string, attrs: TableAttributes): ITable;
    readonly encryptionKey?: kms.IKey;
    /**
     * Resource policy to assign to DynamoDB Table.
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-resourcepolicy.html
     * @default - No resource policy statements are added to the created table.
     */
    resourcePolicy?: iam.PolicyDocument;
    /**
     * @attribute
     */
    readonly tableArn: string;
    /**
     * @attribute
     */
    readonly tableName: string;
    /**
     * @attribute
     */
    readonly tableStreamArn: string | undefined;
    private readonly table;
    private readonly keySchema;
    private readonly attributeDefinitions;
    private readonly globalSecondaryIndexes;
    private readonly localSecondaryIndexes;
    private readonly secondaryIndexSchemas;
    private readonly nonKeyAttributes;
    private readonly tablePartitionKey;
    private readonly tableSortKey?;
    private readonly billingMode;
    private readonly tableScaling;
    private readonly indexScaling;
    private readonly scalingRole;
    private readonly globalReplicaCustomResources;
    constructor(scope: Construct, id: string, props: TableProps);
    /**
     * Add a global secondary index of table.
     *
     * @param props the property of global secondary index
     */
    addGlobalSecondaryIndex(props: GlobalSecondaryIndexProps): void;
    /**
     * Add a local secondary index of table.
     *
     * @param props the property of local secondary index
     */
    addLocalSecondaryIndex(props: LocalSecondaryIndexProps): void;
    /**
     * Enable read capacity scaling for this table
     *
     * @returns An object to configure additional AutoScaling settings
     */
    autoScaleReadCapacity(props: EnableScalingProps): IScalableTableAttribute;
    /**
     * Enable write capacity scaling for this table
     *
     * @returns An object to configure additional AutoScaling settings for this attribute
     */
    autoScaleWriteCapacity(props: EnableScalingProps): IScalableTableAttribute;
    /**
     * Enable read capacity scaling for the given GSI
     *
     * @returns An object to configure additional AutoScaling settings for this attribute
     */
    autoScaleGlobalSecondaryIndexReadCapacity(indexName: string, props: EnableScalingProps): IScalableTableAttribute;
    /**
     * Enable write capacity scaling for the given GSI
     *
     * @returns An object to configure additional AutoScaling settings for this attribute
     */
    autoScaleGlobalSecondaryIndexWriteCapacity(indexName: string, props: EnableScalingProps): IScalableTableAttribute;
    /**
     * Get schema attributes of table or index.
     *
     * @returns Schema of table or index.
     */
    schema(indexName?: string): SchemaOptions;
    /**
     * Validate the table construct.
     *
     * @returns an array of validation error message
     */
    private validateTable;
    /**
     * Validate read and write capacity are not specified for on-demand tables (billing mode PAY_PER_REQUEST).
     *
     * @param props read and write capacity properties
     */
    private validateProvisioning;
    /**
     * Validate index name to check if a duplicate name already exists.
     *
     * @param indexName a name of global or local secondary index
     */
    private validateIndexName;
    /**
     * Validate non-key attributes by checking limits within secondary index, which may vary in future.
     *
     * @param nonKeyAttributes a list of non-key attribute names
     */
    private validateNonKeyAttributes;
    private buildIndexKeySchema;
    private buildIndexProjection;
    private findKey;
    private addKey;
    /**
     * Register the key attribute of table or secondary index to assemble attribute definitions of TableResourceProps.
     *
     * @param attribute the key attribute of table or secondary index
     */
    private registerAttribute;
    /**
     * Return the role that will be used for AutoScaling
     */
    private makeScalingRole;
    /**
     * Creates replica tables
     *
     * @param regions regions where to create tables
     */
    private createReplicaTables;
    /**
     * Whether this table has indexes
     */
    protected get hasIndex(): boolean;
    /**
     * Set up key properties and return the Table encryption property from the
     * user's configuration.
     */
    private parseEncryption;
    private renderImportSourceSpecification;
}
