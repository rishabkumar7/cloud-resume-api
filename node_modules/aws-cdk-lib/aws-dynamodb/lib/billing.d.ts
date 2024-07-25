import { Capacity } from './capacity';
import { BillingMode } from './shared';
/**
 * Properties used to configure provisioned throughput for a DynamoDB table.
 */
export interface ThroughputProps {
    /**
     * The read capacity.
     */
    readonly readCapacity: Capacity;
    /**
     * The write capacity.
     */
    readonly writeCapacity: Capacity;
}
/**
 * Represents how capacity is managed and how you are charged for read and write throughput
 * for a DynamoDB table.
 */
export declare abstract class Billing {
    readonly mode: BillingMode;
    /**
     * Flexible billing option capable of serving requests without capacity planning.
     *
     * Note: Billing mode will be PAY_PER_REQUEST.
     */
    static onDemand(): Billing;
    /**
     * Specify the number of reads and writes per second that you need for your application.
     *
     * @param props specifiy read and write capacity configurations.
     */
    static provisioned(props: ThroughputProps): Billing;
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
