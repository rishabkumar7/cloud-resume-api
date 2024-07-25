import { Construct } from 'constructs';
import { IHttpApi } from './api';
import { Metric, MetricOptions } from '../../../aws-cloudwatch';
import { StageOptions, IStage, StageAttributes } from '../common';
import { IApi } from '../common/api';
import { StageBase } from '../common/base';
/**
 * Represents the HttpStage
 */
export interface IHttpStage extends IStage {
    /**
     * The API this stage is associated to.
     */
    readonly api: IHttpApi;
    /**
     * The custom domain URL to this stage
     */
    readonly domainUrl: string;
    /**
     * Metric for the number of client-side errors captured in a given period.
     *
     * @default - sum over 5 minutes
     */
    metricClientError(props?: MetricOptions): Metric;
    /**
     * Metric for the number of server-side errors captured in a given period.
     *
     * @default - sum over 5 minutes
     */
    metricServerError(props?: MetricOptions): Metric;
    /**
     * Metric for the amount of data processed in bytes.
     *
     * @default - sum over 5 minutes
     */
    metricDataProcessed(props?: MetricOptions): Metric;
    /**
     * Metric for the total number API requests in a given period.
     *
     * @default - SampleCount over 5 minutes
     */
    metricCount(props?: MetricOptions): Metric;
    /**
     * Metric for the time between when API Gateway relays a request to the backend
     * and when it receives a response from the backend.
     *
     * @default - no statistic
     */
    metricIntegrationLatency(props?: MetricOptions): Metric;
    /**
     * The time between when API Gateway receives a request from a client
     * and when it returns a response to the client.
     * The latency includes the integration latency and other API Gateway overhead.
     *
     * @default - no statistic
     */
    metricLatency(props?: MetricOptions): Metric;
}
/**
 * The options to create a new Stage for an HTTP API
 */
export interface HttpStageOptions extends StageOptions {
    /**
     * The name of the stage. See `StageName` class for more details.
     * @default '$default' the default stage of the API. This stage will have the URL at the root of the API endpoint.
     */
    readonly stageName?: string;
}
/**
 * Properties to initialize an instance of `HttpStage`.
 */
export interface HttpStageProps extends HttpStageOptions {
    /**
     * The HTTP API to which this stage is associated.
     */
    readonly httpApi: IHttpApi;
}
/**
 * The attributes used to import existing HttpStage
 */
export interface HttpStageAttributes extends StageAttributes {
    /**
     * The API to which this stage is associated
     */
    readonly api: IHttpApi;
}
declare abstract class HttpStageBase extends StageBase implements IHttpStage {
    abstract readonly domainUrl: string;
    abstract readonly api: IHttpApi;
    metricClientError(props?: MetricOptions): Metric;
    metricServerError(props?: MetricOptions): Metric;
    metricDataProcessed(props?: MetricOptions): Metric;
    metricCount(props?: MetricOptions): Metric;
    metricIntegrationLatency(props?: MetricOptions): Metric;
    metricLatency(props?: MetricOptions): Metric;
}
/**
 * Represents a stage where an instance of the API is deployed.
 * @resource AWS::ApiGatewayV2::Stage
 */
export declare class HttpStage extends HttpStageBase {
    /**
     * Import an existing stage into this CDK app.
     */
    static fromHttpStageAttributes(scope: Construct, id: string, attrs: HttpStageAttributes): IHttpStage;
    protected readonly baseApi: IApi;
    readonly stageName: string;
    readonly api: IHttpApi;
    constructor(scope: Construct, id: string, props: HttpStageProps);
    /**
     * The URL to this stage.
     */
    get url(): string;
    get domainUrl(): string;
}
export {};
