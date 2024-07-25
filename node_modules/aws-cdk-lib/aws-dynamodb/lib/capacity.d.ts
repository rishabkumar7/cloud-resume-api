/**
 * Capacity modes
 */
export declare enum CapacityMode {
    /**
     * Fixed
     */
    FIXED = "FIXED",
    /**
     * Autoscaled
     */
    AUTOSCALED = "AUTOSCALED"
}
/**
 * Options used to configure autoscaled capacity.
 */
export interface AutoscaledCapacityOptions {
    /**
     * The maximum allowable capacity.
     */
    readonly maxCapacity: number;
    /**
     * The minimum allowable capacity.
     *
     * @default 1
     */
    readonly minCapacity?: number;
    /**
     * The ratio of consumed capacity units to provisioned capacity units.
     *
     * Note: Target utilization percent cannot be less than 20 and cannot be greater
     * than 90.
     *
     * @default 70
     */
    readonly targetUtilizationPercent?: number;
    /**
     * If you want to switch a table's billing mode from on-demand to provisioned or
     * from provisioned to on-demand, you must specify a value for this property for
     * each autoscaled resource.
     *
     * @default no seed capacity
     */
    readonly seedCapacity?: number;
}
/**
 * Represents the amount of read and write operations supported by a DynamoDB table.
 */
export declare abstract class Capacity {
    readonly mode: CapacityMode;
    /**
     * Provisioned throughput capacity is configured with fixed capacity units.
     *
     * Note: You cannot configure write capacity using fixed capacity mode.
     *
     * @param iops the number of I/O operations per second.
     */
    static fixed(iops: number): Capacity;
    /**
     * Dynamically adjusts provisioned throughput capacity on your behalf in response to actual
     * traffic patterns.
     *
     * @param options options used to configure autoscaled capacity mode.
     */
    static autoscaled(options: AutoscaledCapacityOptions): Capacity;
    private constructor();
    /**
     * @internal
     */
    abstract _renderReadCapacity(): any;
    /**
     * @internal
     */
    abstract _renderWriteCapacity(): any;
}
