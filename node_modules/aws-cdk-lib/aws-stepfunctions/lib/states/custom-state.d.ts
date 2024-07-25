import { Construct } from 'constructs';
import { State } from './state';
import { Chain } from '..';
import { CatchProps, IChainable, INextable, RetryProps } from '../types';
/**
 * Properties for defining a custom state definition
 */
export interface CustomStateProps {
    /**
     * Amazon States Language (JSON-based) definition of the state
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html
     */
    readonly stateJson: {
        [key: string]: any;
    };
}
/**
 * State defined by supplying Amazon States Language (ASL) in the state machine.
 *
 */
export declare class CustomState extends State implements IChainable, INextable {
    readonly endStates: INextable[];
    /**
     * Amazon States Language (JSON-based) definition of the state
     */
    private readonly stateJson;
    constructor(scope: Construct, id: string, props: CustomStateProps);
    /**
     * Add retry configuration for this state
     *
     * This controls if and how the execution will be retried if a particular
     * error occurs.
     */
    addRetry(props?: RetryProps): CustomState;
    /**
     * Add a recovery handler for this state
     *
     * When a particular error occurs, execution will continue at the error
     * handler instead of failing the state machine execution.
     */
    addCatch(handler: IChainable, props?: CatchProps): CustomState;
    /**
     * Continue normal execution with the given state
     */
    next(next: IChainable): Chain;
    /**
     * Returns the Amazon States Language object for this state
     */
    toStateJson(): object;
    private hasMultipleRetrySources;
    private hasMultipleCatchSources;
    private addMultipleRetrySourcesWarning;
    private addMultipleCatchSourcesWarning;
}
