import { Construct } from 'constructs';
import { State } from './state';
import { INextable } from '../types';
/**
 * Properties for defining a Fail state
 */
export interface FailProps {
    /**
     * Optional name for this state
     *
     * @default - The construct ID will be used as state name
     */
    readonly stateName?: string;
    /**
     * An optional description for this state
     *
     * @default - No comment
     */
    readonly comment?: string;
    /**
     * Error code used to represent this failure
     *
     * @default - No error code
     */
    readonly error?: string;
    /**
     * JsonPath expression to select part of the state to be the error to this state.
     *
     * You can also use an intrinsic function that returns a string to specify this property.
     * The allowed functions include States.Format, States.JsonToString, States.ArrayGetItem, States.Base64Encode, States.Base64Decode, States.Hash, and States.UUID.
     *
     * @default - No error path
     */
    readonly errorPath?: string;
    /**
     * A description for the cause of the failure
     *
     * @default - No description
     */
    readonly cause?: string;
    /**
     * JsonPath expression to select part of the state to be the cause to this state.
     *
     * You can also use an intrinsic function that returns a string to specify this property.
     * The allowed functions include States.Format, States.JsonToString, States.ArrayGetItem, States.Base64Encode, States.Base64Decode, States.Hash, and States.UUID.
     *
     * @default - No cause path
     */
    readonly causePath?: string;
}
/**
 * Define a Fail state in the state machine
 *
 * Reaching a Fail state terminates the state execution in failure.
 */
export declare class Fail extends State {
    private static allowedIntrinsics;
    readonly endStates: INextable[];
    private readonly error?;
    private readonly errorPath?;
    private readonly cause?;
    private readonly causePath?;
    constructor(scope: Construct, id: string, props?: FailProps);
    /**
     * Return the Amazon States Language object for this state
     */
    toStateJson(): object;
    /**
     * Validate this state
     */
    protected validateState(): string[];
    private isIntrinsicString;
    private isAllowedIntrinsic;
}
