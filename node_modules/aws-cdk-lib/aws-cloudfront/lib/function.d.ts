import { Construct } from 'constructs';
import { IKeyValueStore } from './key-value-store';
import { IResource, Resource } from '../../core';
/**
 * Represents the function's source code
 */
export declare abstract class FunctionCode {
    /**
     * Inline code for function
     * @returns code object with inline code.
     * @param code The actual function code
     */
    static fromInline(code: string): FunctionCode;
    /**
     * Code from external file for function
     * @returns code object with contents from file.
     * @param options the options for the external file
     */
    static fromFile(options: FileCodeOptions): FunctionCode;
    /**
     * renders the function code
     */
    abstract render(): string;
}
/**
 * Options when reading the function's code from an external file
 */
export interface FileCodeOptions {
    /**
     * The path of the file to read the code from
     */
    readonly filePath: string;
}
/**
 * Represents a CloudFront Function
 */
export interface IFunction extends IResource {
    /**
     * The name of the function.
     * @attribute
     */
    readonly functionName: string;
    /**
     * The ARN of the function.
     * @attribute
     */
    readonly functionArn: string;
}
/**
 * Attributes of an existing CloudFront Function to import it
 */
export interface FunctionAttributes {
    /**
     * The name of the function.
     */
    readonly functionName: string;
    /**
     * The ARN of the function.
     */
    readonly functionArn: string;
    /**
     * The Runtime of the function.
     * @default FunctionRuntime.JS_1_0
     */
    readonly functionRuntime?: string;
}
/**
 * Properties for creating a CloudFront Function
 */
export interface FunctionProps {
    /**
     * A name to identify the function.
     * @default - generated from the `id`
     */
    readonly functionName?: string;
    /**
     * A comment to describe the function.
     * @default - same as `functionName`
     */
    readonly comment?: string;
    /**
     * The source code of the function.
     */
    readonly code: FunctionCode;
    /**
     * The runtime environment for the function.
     * @default FunctionRuntime.JS_1_0 (unless `keyValueStore` is specified, then `FunctionRuntime.JS_2_0`)
     */
    readonly runtime?: FunctionRuntime;
    /**
     * The Key Value Store to associate with this function.
     *
     * In order to associate a Key Value Store, the `runtime` must be
     * `cloudfront-js-2.0` or newer.
     *
     * @default - no key value store is associated
     */
    readonly keyValueStore?: IKeyValueStore;
    /**
     * A flag that determines whether to automatically publish the function to the LIVE stage when it’s created.
     *
     * @default - true
     */
    readonly autoPublish?: boolean;
}
/**
 * A CloudFront Function
 *
 * @resource AWS::CloudFront::Function
 */
export declare class Function extends Resource implements IFunction {
    /** Imports a function by its name and ARN */
    static fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes): IFunction;
    /**
     * the name of the CloudFront function
     * @attribute
     */
    readonly functionName: string;
    /**
     * the ARN of the CloudFront function
     * @attribute
     */
    readonly functionArn: string;
    /**
     * the deployment stage of the CloudFront function
     * @attribute
     */
    readonly functionStage: string;
    /**
     * the runtime of the CloudFront function
     * @attribute
     */
    readonly functionRuntime: string;
    constructor(scope: Construct, id: string, props: FunctionProps);
    private generateName;
}
/**
 * The type of events that a CloudFront function can be invoked in response to.
 */
export declare enum FunctionEventType {
    /**
     * The viewer-request specifies the incoming request
     */
    VIEWER_REQUEST = "viewer-request",
    /**
     * The viewer-response specifies the outgoing response
     */
    VIEWER_RESPONSE = "viewer-response"
}
/**
 * Represents a CloudFront function and event type when using CF Functions.
 * The type of the `AddBehaviorOptions.functionAssociations` property.
 */
export interface FunctionAssociation {
    /**
     * The CloudFront function that will be invoked.
     */
    readonly function: IFunction;
    /** The type of event which should invoke the function. */
    readonly eventType: FunctionEventType;
}
/**
 * The function's runtime environment version.
 */
export declare class FunctionRuntime {
    readonly value: string;
    /**
     * cloudfront-js-1.0
     */
    static readonly JS_1_0: FunctionRuntime;
    /**
     * cloudfront-js-2.0
     */
    static readonly JS_2_0: FunctionRuntime;
    /**
     * A custom runtime string.
     *
     * Gives full control over the runtime string fragment.
     */
    static custom(runtimeString: string): FunctionRuntime;
    private constructor();
}
