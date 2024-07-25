import { Construct } from 'constructs';
import { MapBase, MapBaseProps } from './map-base';
import { CatchProps, IChainable, INextable, ProcessorConfig, RetryProps } from '../types';
/**
 * Properties for defining a Map state
 */
export interface MapProps extends MapBaseProps {
    /**
     * The JSON that you want to override your default iteration input (mutually exclusive  with `itemSelector`).
     *
     * @deprecated Step Functions has deprecated the `parameters` field in favor of
     * the new `itemSelector` field
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/input-output-itemselector.html
     *
     * @default $
     */
    readonly parameters?: {
        [key: string]: any;
    };
}
/**
 * Define a Map state in the state machine
 *
 * A `Map` state can be used to run a set of steps for each element of an input array.
 * A Map state will execute the same steps for multiple entries of an array in the state input.
 *
 * While the Parallel state executes multiple branches of steps using the same input, a Map state
 * will execute the same steps for multiple entries of an array in the state input.
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html
 */
export declare class Map extends MapBase implements INextable {
    constructor(scope: Construct, id: string, props?: MapProps);
    /**
     * Define iterator state machine in Map.
     *
     * A Map must either have a non-empty iterator or a non-empty item processor (mutually exclusive  with `itemProcessor`).
     *
     * @deprecated - use `itemProcessor` instead.
     */
    iterator(iterator: IChainable): Map;
    /**
     * Return the Amazon States Language object for this state
     */
    toStateJson(): object;
    /**
     * Validate this state
     */
    protected validateState(): string[];
    /**
     * Render Parameters in ASL JSON format
     */
    private renderParameters;
    /**
     * Add retry configuration for this state
     *
     * This controls if and how the execution will be retried if a particular
     * error occurs.
     */
    addRetry(props?: RetryProps): Map;
    /**
     * Add a recovery handler for this state
     *
     * When a particular error occurs, execution will continue at the error
     * handler instead of failing the state machine execution.
     */
    addCatch(handler: IChainable, props?: CatchProps): Map;
    /**
     * Define item processor in Map.
     *
     * A Map must either have a non-empty iterator or a non-empty item processor (mutually exclusive  with `iterator`).
     */
    itemProcessor(processor: IChainable, config?: ProcessorConfig): Map;
}
