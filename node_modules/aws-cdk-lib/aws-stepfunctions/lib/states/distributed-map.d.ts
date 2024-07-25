import { Construct } from 'constructs';
import { ItemBatcher } from './distributed-map/item-batcher';
import { IItemReader } from './distributed-map/item-reader';
import { ResultWriter } from './distributed-map/result-writer';
import { MapBase, MapBaseProps } from './map-base';
import { StateGraph } from '../state-graph';
import { StateMachineType } from '../state-machine';
import { CatchProps, IChainable, INextable, ProcessorConfig, RetryProps } from '../types';
/**
 * Properties for configuring a Distribute Map state
 */
export interface DistributedMapProps extends MapBaseProps {
    /**
     * MapExecutionType
     *
     * The execution type of the distributed map state
     *
     * This property overwrites ProcessorConfig.executionType
     *
     * @default StateMachineType.STANDARD
     */
    readonly mapExecutionType?: StateMachineType;
    /**
     * ItemReader
     *
     * Configuration for where to read items dataset in S3 to iterate
     *
     * @default - No itemReader
     */
    readonly itemReader?: IItemReader;
    /**
     * ToleratedFailurePercentage
     *
     * Percentage of failed items to tolerate in a Map Run, as static number
     *
     * @default - No toleratedFailurePercentage
     */
    readonly toleratedFailurePercentage?: number;
    /**
     * ToleratedFailurePercentagePath
     *
     * Percentage of failed items to tolerate in a Map Run, as JsonPath
     *
     * @default - No toleratedFailurePercentagePath
     */
    readonly toleratedFailurePercentagePath?: string;
    /**
     * ToleratedFailureCount
     *
     * Number of failed items to tolerate in a Map Run, as static number
     *
     * @default - No toleratedFailureCount
     */
    readonly toleratedFailureCount?: number;
    /**
     * ToleratedFailureCountPath
     *
     * Number of failed items to tolerate in a Map Run, as JsonPath
     *
     * @default - No toleratedFailureCountPath
     */
    readonly toleratedFailureCountPath?: string;
    /**
     * Label
     *
     * Unique name for the Distributed Map state added to each Map Run
     *
     * @default - No label
     */
    readonly label?: string;
    /**
     * Configuration for S3 location in which to save Map Run results
     *
     * @default - No resultWriter
     */
    readonly resultWriter?: ResultWriter;
    /**
     * Specifies to process a group of items in a single child workflow execution
     *
     * @default - No itemBatcher
     */
    readonly itemBatcher?: ItemBatcher;
}
/**
 * Define a Distributed Mode Map state in the state machine
 *
 * A `Map` state can be used to run a set of steps for each element of an input array.
 * A Map state will execute the same steps for multiple entries of an array in the state input.
 *
 * While the Parallel state executes multiple branches of steps using the same input, a Map state
 * will execute the same steps for multiple entries of an array in the state input.
 *
 * A `Map` state in `Distributed` mode will execute a child workflow for each iteration of the Map state.
 * This serves to increase concurrency and allows for larger workloads to be run in a single state machine.
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-distributed.html
 */
export declare class DistributedMap extends MapBase implements INextable {
    /**
     * Return whether the given object is a DistributedMap.
     */
    static isDistributedMap(x: any): x is DistributedMap;
    private readonly mapExecutionType?;
    private readonly itemReader?;
    private readonly toleratedFailurePercentage?;
    private readonly toleratedFailurePercentagePath?;
    private readonly toleratedFailureCount?;
    private readonly toleratedFailureCountPath?;
    private readonly label?;
    private readonly resultWriter?;
    private readonly itemBatcher?;
    constructor(scope: Construct, id: string, props?: DistributedMapProps);
    /**
     * Validate this state
     */
    protected validateState(): string[];
    protected whenBoundToGraph(graph: StateGraph): void;
    /**
     * Add retry configuration for this state
     *
     * This controls if and how the execution will be retried if a particular
     * error occurs.
     */
    addRetry(props?: RetryProps): DistributedMap;
    /**
     * Add a recovery handler for this state
     *
     * When a particular error occurs, execution will continue at the error
     * handler instead of failing the state machine execution.
     */
    addCatch(handler: IChainable, props?: CatchProps): DistributedMap;
    /**
     * Define item processor in a Distributed Map.
     *
     * A Distributed Map must have a non-empty item processor
     */
    itemProcessor(processor: IChainable, config?: ProcessorConfig): DistributedMap;
    /**
     * Return the Amazon States Language object for this state
     */
    toStateJson(): object;
    /**
     * Render the ItemReader as JSON object
     */
    private renderItemReader;
    /**
     * Render ResultWriter in ASL JSON format
     */
    private renderResultWriter;
    /**
     * Render ItemBatcher in ASL JSON format
     */
    private renderItemBatcher;
}
