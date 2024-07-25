import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for creating a MediaConvert Job
 *
 * See the CreateJob API for complete documentation
 * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html#jobspost
 *
 */
export interface MediaConvertCreateJobProps extends sfn.TaskStateBaseProps {
    /**
     * The input data for the MediaConvert Create Job invocation
     */
    readonly createJobRequest: {
        [key: string]: any;
    };
}
/**
 * A Step Functions Task to create a job in MediaConvert.
 *
 * The JobConfiguration/Request Syntax is defined in the Parameters in the Task State
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-mediaconvert.html
 *
 * Response syntax: see CreateJobResponse schema
 * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html#jobs-response-examples
 *
 */
export declare class MediaConvertCreateJob extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics: sfn.TaskMetricsConfig | undefined;
    protected readonly taskPolicies: iam.PolicyStatement[] | undefined;
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: MediaConvertCreateJobProps);
    private renderPolicyStatements;
    /**
     * Provides the MediaConvert CreateJob Service Integration Task Configuration
     *
     * @internal
     */
    protected _renderTask(): any;
}
