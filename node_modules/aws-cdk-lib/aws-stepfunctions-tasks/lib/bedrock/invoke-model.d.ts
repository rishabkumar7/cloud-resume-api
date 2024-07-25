import { Construct } from 'constructs';
import { Guardrail } from './guardrail';
import * as bedrock from '../../../aws-bedrock';
import * as iam from '../../../aws-iam';
import * as s3 from '../../../aws-s3';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Location to retrieve the input data, prior to calling Bedrock InvokeModel.
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-bedrock.html
 */
export interface BedrockInvokeModelInputProps {
    /**
     * S3 object to retrieve the input data from.
     *
     * If the S3 location is not set, then the Body must be set.
     *
     * @default - Input data is retrieved from the `body` field
     */
    readonly s3Location?: s3.Location;
}
/**
 * Location where the Bedrock InvokeModel API response is written.
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-bedrock.html
 */
export interface BedrockInvokeModelOutputProps {
    /**
     * S3 object where the Bedrock InvokeModel API response is written.
     *
     * If you specify this field, the API response body is replaced with
     * a reference to the Amazon S3 location of the original output.
     *
     * @default - Response body is returned in the task result
     */
    readonly s3Location?: s3.Location;
}
/**
 * Properties for invoking a Bedrock Model
 */
export interface BedrockInvokeModelProps extends sfn.TaskStateBaseProps {
    /**
     * The Bedrock model that the task will invoke.
     *
     * @see https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html
     */
    readonly model: bedrock.IModel;
    /**
     * The input data for the Bedrock model invocation.
     *
     * The inference parameters contained in the body depend on the Bedrock model being used.
     *
     * The body must be in the format specified in the `contentType` field.
     * For example, if the content type is `application/json`, the body must be
     * JSON formatted.
     *
     * The body must be up to 256 KB in size. For input data that exceeds 256 KB,
     * use `input` instead to retrieve the input data from S3.
     *
     * You must specify either the `body` or the `input` field, but not both.
     *
     * @see https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html
     *
     * @default - Input data is retrieved from the location specified in the `input` field
     */
    readonly body?: sfn.TaskInput;
    /**
     * The desired MIME type of the inference body in the response.
     *
     * @see https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html
     * @default 'application/json'
     */
    readonly accept?: string;
    /**
     * The MIME type of the input data in the request.
     *
     * @see https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html
     * @default 'application/json'
     * @deprecated This property does not require configuration because the only acceptable value is 'application/json'.
     */
    readonly contentType?: string;
    /**
     * The source location to retrieve the input data from.
     *
     * @default - Input data is retrieved from the `body` field
     */
    readonly input?: BedrockInvokeModelInputProps;
    /**
     * The destination location where the API response is written.
     *
     * If you specify this field, the API response body is replaced with a reference to the
     * output location.
     *
     * @default - The API response body is returned in the result.
     */
    readonly output?: BedrockInvokeModelOutputProps;
    /**
     * The guardrail is applied to the invocation
     *
     * @default - No guardrail is applied to the invocation.
     */
    readonly guardrail?: Guardrail;
    /**
     * Specifies whether to enable or disable the Bedrock trace.
     *
     * @default - Trace is not enabled for the invocation.
     */
    readonly traceEnabled?: boolean;
}
/**
 * A Step Functions Task to invoke a model in Bedrock.
 *
 */
export declare class BedrockInvokeModel extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics: sfn.TaskMetricsConfig | undefined;
    protected readonly taskPolicies: iam.PolicyStatement[] | undefined;
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: BedrockInvokeModelProps);
    private renderPolicyStatements;
    /**
     * Provides the Bedrock InvokeModel service integration task configuration
     *
     * @internal
     */
    protected _renderTask(): any;
}
