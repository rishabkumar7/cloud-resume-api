import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import { IFunction } from '../../../aws-lambda';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for calling an AWS service's API action from your
 * state machine across regions.
 */
export interface CallAwsServiceCrossRegionProps extends sfn.TaskStateBaseProps {
    /**
     * The AWS service to call in AWS SDK for JavaScript v3 format.
     *
     * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/
     * @example 's3'
     */
    readonly service: string;
    /**
     * The API action to call.
     *
     * Use camelCase.
     */
    readonly action: string;
    /**
     * Parameters for the API action call in AWS SDK for JavaScript v3 format.
     *
     * @default - no parameters
     */
    readonly parameters?: {
        [key: string]: any;
    };
    /**
     * The resources for the IAM statement that will be added to the Lambda
     * function role's policy to allow the state machine to make the API call.
     */
    readonly iamResources: string[];
    /**
     * The action for the IAM statement that will be added to the Lambda
     * function role's policy to allow the state machine to make the API call.
     *
     * By default the action for this IAM statement will be `service:action`.
     *
     * Use in the case where the IAM action name does not match with the
     * API service/action name, e.g. `s3:ListBuckets` requires `s3:ListAllMyBuckets`.
     *
     * @default - service:action
     */
    readonly iamAction?: string;
    /**
     * Additional IAM statements that will be added to the state machine
     * role's policy.
     *
     * Use in the case where the call requires more than a single statement to
     * be executed, e.g. `rekognition:detectLabels` requires also S3 permissions
     * to read the object on which it must act.
     *
     * @default - no additional statements are added
     */
    readonly additionalIamStatements?: iam.PolicyStatement[];
    /**
     * The AWS region to call this AWS API for.
     * @example 'us-east-1'
     */
    readonly region: string;
    /**
     * The AWS API endpoint.
     *
     * @default Do not override API endpoint.
     */
    readonly endpoint?: string;
    /**
     * Whether to retry on the backend Lambda service exceptions.
     *
     * This handles `Lambda.ServiceException`, `Lambda.AWSLambdaException`,
     * `Lambda.SdkClientException`, and `Lambda.ClientExecutionTimeoutException`
     * with an interval of 2 seconds, a back-off rate
     * of 2 and 6 maximum attempts.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/bp-lambda-serviceexception.html
     *
     * @default true
     */
    readonly retryOnServiceExceptions?: boolean;
}
/**
 * A Step Functions task to call an AWS service API across regions.
 *
 * This task creates a Lambda function to call cross-region AWS API and invokes it.
 */
export declare class CallAwsServiceCrossRegion extends sfn.TaskStateBase {
    private readonly props;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    protected readonly lambdaFunction: IFunction;
    constructor(scope: Construct, id: string, props: CallAwsServiceCrossRegionProps);
    /**
     * Provides the Lambda Invoke service integration task configuration
     *
     * @internal
     */
    protected _renderTask(): any;
}
