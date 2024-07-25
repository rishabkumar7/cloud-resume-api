import { IApi } from './api';
import { ApiMapping } from './api-mapping';
import { DomainMappingOptions, IStage } from './stage';
import * as cloudwatch from '../../../aws-cloudwatch';
import { Resource } from '../../../core';
/**
 * Base class representing an API
 * @internal
 */
export declare abstract class ApiBase extends Resource implements IApi {
    abstract readonly apiId: string;
    abstract readonly apiEndpoint: string;
    metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
}
/**
 * Base class representing a Stage
 * @internal
 */
export declare abstract class StageBase extends Resource implements IStage {
    abstract readonly stageName: string;
    protected abstract readonly baseApi: IApi;
    /**
     * The created ApiMapping if domain mapping has been added
     * @internal
     */
    protected _apiMapping?: ApiMapping;
    /**
     * The URL to this stage.
     */
    abstract get url(): string;
    /**
     * @internal
     */
    protected _addDomainMapping(domainMapping: DomainMappingOptions): void;
    metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
}
