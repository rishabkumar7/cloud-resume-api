import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for starting an AWS Glue Crawler as a task
 */
export interface GlueStartCrawlerRunProps extends sfn.TaskStateBaseProps {
    /**
     * Glue crawler name
     */
    readonly crawlerName: string;
}
/**
 * Starts an AWS Glue Crawler in a Task state
 *
 * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StartCrawler
 */
export declare class GlueStartCrawlerRun extends sfn.TaskStateBase {
    private readonly props;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: GlueStartCrawlerRunProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
}
