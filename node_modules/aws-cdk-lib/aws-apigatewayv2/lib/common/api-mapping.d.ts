import { Construct } from 'constructs';
import { IApi } from './api';
import { IDomainName } from './domain-name';
import { IStage } from './stage';
import { IResource, Resource } from '../../../core';
/**
 * Represents an ApiGatewayV2 ApiMapping resource
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html
 */
export interface IApiMapping extends IResource {
    /**
     * ID of the api mapping
     * @attribute
     */
    readonly apiMappingId: string;
}
/**
 * Properties used to create the ApiMapping resource
 */
export interface ApiMappingProps {
    /**
     * Api mapping key. The path where this stage should be mapped to on the domain
     * @default - undefined for the root path mapping.
     */
    readonly apiMappingKey?: string;
    /**
     * The Api to which this mapping is applied
     */
    readonly api: IApi;
    /**
     * custom domain name of the mapping target
     */
    readonly domainName: IDomainName;
    /**
     * stage for the ApiMapping resource
     * required for WebSocket API
     * defaults to default stage of an HTTP API
     *
     * @default - Default stage of the passed API for HTTP API, required for WebSocket API
     */
    readonly stage?: IStage;
}
/**
 * The attributes used to import existing ApiMapping
 */
export interface ApiMappingAttributes {
    /**
     * The API mapping ID
     */
    readonly apiMappingId: string;
}
/**
 * Create a new API mapping for API Gateway API endpoint.
 * @resource AWS::ApiGatewayV2::ApiMapping
 */
export declare class ApiMapping extends Resource implements IApiMapping {
    /**
     * import from API ID
     */
    static fromApiMappingAttributes(scope: Construct, id: string, attrs: ApiMappingAttributes): IApiMapping;
    /**
     * ID of the API Mapping
     */
    readonly apiMappingId: string;
    /**
     * API Mapping key
     */
    readonly mappingKey?: string;
    /**
     * API domain name
     */
    readonly domainName: IDomainName;
    constructor(scope: Construct, id: string, props: ApiMappingProps);
}
