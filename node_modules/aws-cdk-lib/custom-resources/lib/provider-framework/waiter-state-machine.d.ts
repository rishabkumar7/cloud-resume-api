import { Construct } from 'constructs';
import { Grant, IGrantable } from '../../../aws-iam';
import { IFunction } from '../../../aws-lambda';
import { ILogGroup } from '../../../aws-logs';
import { LogLevel } from '../../../aws-stepfunctions';
import { Duration } from '../../../core';
/**
 * Log Options for the state machine.
 */
export interface LogOptions {
    /**
     * The log group where the execution history events will be logged.
     *
     * @default - a new log group will be created
     */
    readonly destination?: ILogGroup;
    /**
     * Determines whether execution data is included in your log.
     *
     * @default - false
     */
    readonly includeExecutionData?: boolean;
    /**
     * Defines which category of execution history events are logged.
     *
     * @default - ERROR
     */
    readonly level?: LogLevel;
}
/**
 * Initialization properties for the `WaiterStateMachine` construct.
 */
export interface WaiterStateMachineProps {
    /**
     * The main handler that notifies if the waiter to decide 'complete' or 'incomplete'.
     */
    readonly isCompleteHandler: IFunction;
    /**
     * The handler to call if the waiter times out and is incomplete.
     */
    readonly timeoutHandler: IFunction;
    /**
     * The interval to wait between attempts.
     */
    readonly interval: Duration;
    /**
     * Number of attempts.
     */
    readonly maxAttempts: number;
    /**
     * Backoff between attempts.
     */
    readonly backoffRate: number;
    /**
     * Defines what execution history events are logged and where they are logged.
     *
     * @default - A default log group will be created if logging is enabled.
     */
    readonly logOptions?: LogOptions;
    /**
     * Whether logging for the state machine is disabled.
     *
     * @default - false
     */
    readonly disableLogging?: boolean;
}
/**
 * A very simple StateMachine construct highly customized to the provider framework.
 * We previously used `CfnResource` instead of `CfnStateMachine` to avoid depending
 * on `aws-stepfunctions` module, but now it is okay.
 *
 * The state machine continuously calls the isCompleteHandler, until it succeeds or times out.
 * The handler is called `maxAttempts` times with an `interval` duration and a `backoffRate` rate.
 */
export declare class WaiterStateMachine extends Construct {
    /**
     * The ARN of the state machine.
     */
    readonly stateMachineArn: string;
    private readonly isCompleteHandler;
    constructor(scope: Construct, id: string, props: WaiterStateMachineProps);
    /**
     * Grant the given identity permissions on StartExecution of the state machine.
     */
    grantStartExecution(identity: IGrantable): Grant;
    private renderLoggingConfiguration;
}
