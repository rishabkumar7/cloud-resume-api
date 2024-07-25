import { SystemErrorsForOperationsMetricOptions, OperationsMetricOptions, ITable } from './shared';
import { IMetric, Metric, MetricOptions } from '../../aws-cloudwatch';
import { AddToResourcePolicyResult, Grant, IGrantable, IResourceWithPolicy, PolicyDocument, PolicyStatement } from '../../aws-iam';
import { IKey } from '../../aws-kms';
import { Resource } from '../../core';
/**
 * Represents an instance of a DynamoDB table.
 */
export interface ITableV2 extends ITable {
    /**
     * The ID of the table.
     *
     * @attribute
     */
    readonly tableId?: string;
}
/**
 * Base class for a DynamoDB table.
 */
export declare abstract class TableBaseV2 extends Resource implements ITableV2, IResourceWithPolicy {
    /**
     * The ARN of the table.
     *
     * @attribute
     */
    abstract readonly tableArn: string;
    /**
     * The name of the table.
     *
     * @attribute
     */
    abstract readonly tableName: string;
    /**
     * The stream ARN of the table.
     *
     * @attribute
     */
    abstract readonly tableStreamArn?: string;
    /**
     * The ID of the table.
     *
     * @attribute
     */
    abstract readonly tableId?: string;
    /**
     * The KMS encryption key for the table.
     */
    abstract readonly encryptionKey?: IKey;
    /**
     * The resource policy for the table
     */
    abstract resourcePolicy?: PolicyDocument;
    protected abstract readonly region: string;
    protected abstract get hasIndex(): boolean;
    /**
     * Adds an IAM policy statement associated with this table to an IAM principal's policy.
     *
     * Note: If `encryptionKey` is present, appropriate grants to the key needs to be added
     * separately using the `table.encryptionKey.grant*` methods.
     *
     * @param grantee the principal (no-op if undefined)
     * @param actions the set of actions to allow (i.e., 'dynamodb:PutItem', 'dynamodb:GetItem', etc.)
     */
    grant(grantee: IGrantable, ...actions: string[]): Grant;
    /**
     * Adds an IAM policy statement associated with this table to an IAM principal's policy.
     *
     * Note: If `encryptionKey` is present, appropriate grants to the key needs to be added
     * separately using the `table.encryptionKey.grant*` methods.
     *
     * @param grantee the principal (no-op if undefined)
     * @param actions the set of actions to allow (i.e., 'dynamodb:DescribeStream', 'dynamodb:GetRecords', etc.)
     */
    grantStream(grantee: IGrantable, ...actions: string[]): Grant;
    /**
     * Adds an IAM policy statement associated with this table to an IAM principal's policy.
     *
     * Actions: DescribeStream, GetRecords, GetShardIterator, ListStreams.
     *
     * Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
     * table if one was configured.
     *
     * @param grantee the principal to grant access to
     */
    grantStreamRead(grantee: IGrantable): Grant;
    /**
     * Permits an IAM principal to list streams attached to this table.
     *
     * @param grantee the principal to grant access to
     */
    grantTableListStreams(grantee: IGrantable): Grant;
    /**
     * Permits an IAM principal all data read operations on this table.
     *
     * Actions: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, DescribeTable.
     *
     * Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
     * table if one was configured.
     *
     * @param grantee the principal to grant access to
     */
    grantReadData(grantee: IGrantable): Grant;
    /**
     * Permits an IAM principal all data write operations on this table.
     *
     * Actions: BatchWriteItem, PutItem, UpdateItem, DeleteItem, DescribeTable.
     *
     * Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
     * table if one was configured.
     *
     * @param grantee the principal to grant access to
     */
    grantWriteData(grantee: IGrantable): Grant;
    /**
     * Permits an IAM principal to all data read/write operations on this table.
     *
     * Actions: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, BatchWriteItem, PutItem, UpdateItem,
     * DeleteItem, DescribeTable.
     *
     * Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
     * table if one was configured.
     *
     * @param grantee the principal to grant access to
     */
    grantReadWriteData(grantee: IGrantable): Grant;
    /**
     * Permits an IAM principal to all DynamoDB operations ('dynamodb:*') on this table.
     *
     * Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
     * table if one was configured.
     *
     * @param grantee the principal to grant access to
     */
    grantFullAccess(grantee: IGrantable): Grant;
    /**
     * Return the given named metric for this table.
     *
     * By default, the metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metric(metricName: string, props?: MetricOptions): Metric;
    /**
     * Metric for the consumed read capacity units for this table.
     *
     * By default, the metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricConsumedReadCapacityUnits(props?: MetricOptions): Metric;
    /**
     * Metric for the consumed write capacity units for this table.
     *
     * By default, the metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricConsumedWriteCapacityUnits(props?: MetricOptions): Metric;
    /**
     * Metric for the user errors for this table.
     *
     * Note: This metric reports user errors across all the tables in the account and region the table
     * resides in.
     *
     * By default, the metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricUserErrors(props?: MetricOptions): Metric;
    /**
     * Metric for the conditional check failed requests for this table.
     *
     * By default, the metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricConditionalCheckFailedRequests(props?: MetricOptions): Metric;
    /**
     * Metric for the successful request latency for this table.
     *
     * By default, the metric will be calculated as an average over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricSuccessfulRequestLatency(props?: MetricOptions): Metric;
    /**
     * How many requests are throttled on this table for the given operation
     *
     * By default, the metric will be calculated as an average over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricThrottledRequestsForOperation(operation: string, props?: OperationsMetricOptions): IMetric;
    /**
     * How many requests are throttled on this table. This will sum errors across all possible operations.
     *
     * By default, each individual metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricThrottledRequestsForOperations(props?: OperationsMetricOptions): IMetric;
    /**
     * Metric for the system errors for this table. This will sum errors across all possible operations.
     *
     * By default, each individual metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     */
    metricSystemErrorsForOperations(props?: SystemErrorsForOperationsMetricOptions): IMetric;
    /**
     * How many requests are throttled on this table.
     *
     * By default, each individual metric will be calculated as a sum over a period of 5 minutes.
     * You can customize this by using the `statistic` and `period` properties.
     *
     * @deprecated Do not use this function. It returns an invalid metric. Use `metricThrottledRequestsForOperation` instead.
     */
    metricThrottledRequests(props?: MetricOptions): Metric;
    /**
     * Metric for the system errors this table
     *
     * @deprecated use `metricSystemErrorsForOperations`.
     */
    metricSystemErrors(props?: MetricOptions): Metric;
    /**
     * Create a math expression for operations.
     */
    private sumMetricsForOperations;
    /**
     * Create a map of metrics that can be used in a math expression.
     *
     * Using the return value of this function as the `usingMetrics` property in `cloudwatch.MathExpression` allows you to
     * use the keys of this map as metric names inside you expression.
     */
    private createMetricForOperations;
    /**
     * Adds an IAM policy statement associated with this table to an IAM principal's policy.
     *
     * @param grantee the principal (no-op if undefined)
     * @param options options for keyActions, tableActions, and streamActions
     */
    private combinedGrant;
    private configureMetric;
    /**
     * Adds a statement to the resource policy associated with this file system.
     * A resource policy will be automatically created upon the first call to `addToResourcePolicy`.
     *
     * Note that this does not work with imported file systems.
     *
     * @param statement The policy statement to add
     */
    addToResourcePolicy(statement: PolicyStatement): AddToResourcePolicyResult;
}
