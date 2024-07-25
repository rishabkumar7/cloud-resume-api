import { Construct } from 'constructs';
import { IHttpRouteAuthorizer } from './authorizer';
import { HttpRouteIntegration } from './integration';
import { BatchHttpRouteOptions, HttpMethod, HttpRoute } from './route';
import { IHttpStage, HttpStage, HttpStageOptions } from './stage';
import { VpcLink, VpcLinkProps } from './vpc-link';
import { Metric, MetricOptions } from '../../../aws-cloudwatch';
import { Duration } from '../../../core';
import { IApi } from '../common/api';
import { ApiBase } from '../common/base';
import { DomainMappingOptions } from '../common/stage';
/**
 * Represents an HTTP API
 */
export interface IHttpApi extends IApi {
    /**
     * Default Authorizer applied to all routes in the gateway.
     *
     * @attribute
     * @default - no default authorizer
     */
    readonly defaultAuthorizer?: IHttpRouteAuthorizer;
    /**
     * Default OIDC scopes attached to all routes in the gateway, unless explicitly configured on the route.
     * The scopes are used with a COGNITO_USER_POOLS authorizer to authorize the method invocation.
     *
     * @attribute
     * @default - no default authorization scopes
     */
    readonly defaultAuthorizationScopes?: string[];
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
    /**
     * Add a new VpcLink
     */
    addVpcLink(options: VpcLinkProps): VpcLink;
    /**
     * Get the "execute-api" ARN.
     * When 'ANY' is passed to the method, an ARN with the method set to '*' is obtained.
     *
     * @default - The default behavior applies when no specific method, path, or stage is provided.
     * In this case, the ARN will cover all methods, all resources, and all stages of this API.
     * Specifically, if 'method' is not specified, it defaults to '*', representing all methods.
     * If 'path' is not specified, it defaults to '/*', representing all paths.
     * If 'stage' is not specified, it also defaults to '*', representing all stages.
     */
    arnForExecuteApi(method?: string, path?: string, stage?: string): string;
}
/**
 * Properties to initialize an instance of `HttpApi`.
 */
export interface HttpApiProps {
    /**
     * Name for the HTTP API resource
     * @default - id of the HttpApi construct.
     */
    readonly apiName?: string;
    /**
     * The description of the API.
     * @default - none
     */
    readonly description?: string;
    /**
     * An integration that will be configured on the catch-all route ($default).
     * @default - none
     */
    readonly defaultIntegration?: HttpRouteIntegration;
    /**
     * Whether a default stage and deployment should be automatically created.
     * @default true
     */
    readonly createDefaultStage?: boolean;
    /**
     * Specifies a CORS configuration for an API.
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html
     * @default - CORS disabled.
     */
    readonly corsPreflight?: CorsPreflightOptions;
    /**
     * Configure a custom domain with the API mapping resource to the HTTP API
     *
     * @default - no default domain mapping configured. meaningless if `createDefaultStage` is `false`.
     */
    readonly defaultDomainMapping?: DomainMappingOptions;
    /**
     * Specifies whether clients can invoke your API using the default endpoint.
     * By default, clients can invoke your API with the default
     * `https://{api_id}.execute-api.{region}.amazonaws.com` endpoint. Enable
     * this if you would like clients to use your custom domain name.
     * @default false execute-api endpoint enabled.
     */
    readonly disableExecuteApiEndpoint?: boolean;
    /**
     * Default Authorizer applied to all routes in the gateway.
     *
     * @default - no default authorizer
     */
    readonly defaultAuthorizer?: IHttpRouteAuthorizer;
    /**
     * Default OIDC scopes attached to all routes in the gateway, unless explicitly configured on the route.
     * The scopes are used with a COGNITO_USER_POOLS authorizer to authorize the method invocation.
     *
     * @default - no default authorization scopes
     */
    readonly defaultAuthorizationScopes?: string[];
}
/**
 * Supported CORS HTTP methods
 */
export declare enum CorsHttpMethod {
    /** HTTP ANY */
    ANY = "*",
    /** HTTP DELETE */
    DELETE = "DELETE",
    /** HTTP GET */
    GET = "GET",
    /** HTTP HEAD */
    HEAD = "HEAD",
    /** HTTP OPTIONS */
    OPTIONS = "OPTIONS",
    /** HTTP PATCH */
    PATCH = "PATCH",
    /** HTTP POST */
    POST = "POST",
    /** HTTP PUT */
    PUT = "PUT"
}
/**
 * Options for the CORS Configuration
 */
export interface CorsPreflightOptions {
    /**
     * Specifies whether credentials are included in the CORS request.
     * @default false
     */
    readonly allowCredentials?: boolean;
    /**
     * Represents a collection of allowed headers.
     * @default - No Headers are allowed.
     */
    readonly allowHeaders?: string[];
    /**
     * Represents a collection of allowed HTTP methods.
     * @default - No Methods are allowed.
     */
    readonly allowMethods?: CorsHttpMethod[];
    /**
     * Represents a collection of allowed origins.
     * @default - No Origins are allowed.
     */
    readonly allowOrigins?: string[];
    /**
     * Represents a collection of exposed headers.
     * @default - No Expose Headers are allowed.
     */
    readonly exposeHeaders?: string[];
    /**
     * The duration that the browser should cache preflight request results.
     * @default Duration.seconds(0)
     */
    readonly maxAge?: Duration;
}
/**
 * Options for the Route with Integration resource
 */
export interface AddRoutesOptions extends BatchHttpRouteOptions {
    /**
     * The path at which all of these routes are configured.
     */
    readonly path: string;
    /**
     * The HTTP methods to be configured
     * @default HttpMethod.ANY
     */
    readonly methods?: HttpMethod[];
    /**
     * Authorizer to be associated to these routes.
     *
     * Use NoneAuthorizer to remove the default authorizer for the api
     *
     * @default - uses the default authorizer if one is specified on the HttpApi
     */
    readonly authorizer?: IHttpRouteAuthorizer;
    /**
     * The list of OIDC scopes to include in the authorization.
     *
     * These scopes will override the default authorization scopes on the gateway.
     * Set to [] to remove default scopes
     *
     * @default - uses defaultAuthorizationScopes if configured on the API, otherwise none.
     */
    readonly authorizationScopes?: string[];
}
declare abstract class HttpApiBase extends ApiBase implements IHttpApi {
    abstract readonly apiId: string;
    abstract readonly httpApiId: string;
    abstract readonly apiEndpoint: string;
    private vpcLinks;
    metricClientError(props?: MetricOptions): Metric;
    metricServerError(props?: MetricOptions): Metric;
    metricDataProcessed(props?: MetricOptions): Metric;
    metricCount(props?: MetricOptions): Metric;
    metricIntegrationLatency(props?: MetricOptions): Metric;
    metricLatency(props?: MetricOptions): Metric;
    addVpcLink(options: VpcLinkProps): VpcLink;
    arnForExecuteApi(method?: string, path?: string, stage?: string): string;
}
/**
 * Attributes for importing an HttpApi into the CDK
 */
export interface HttpApiAttributes {
    /**
     * The identifier of the HttpApi
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#aws-resource-apigatewayv2-api-return-values
     */
    readonly httpApiId: string;
    /**
     * The endpoint URL of the HttpApi
     * @default - throws an error if apiEndpoint is accessed.
     */
    readonly apiEndpoint?: string;
}
/**
 * Create a new API Gateway HTTP API endpoint.
 * @resource AWS::ApiGatewayV2::Api
 */
export declare class HttpApi extends HttpApiBase {
    /**
     * Import an existing HTTP API into this CDK app.
     */
    static fromHttpApiAttributes(scope: Construct, id: string, attrs: HttpApiAttributes): IHttpApi;
    /**
     * A human friendly name for this HTTP API. Note that this is different from `httpApiId`.
     */
    readonly httpApiName?: string;
    readonly apiId: string;
    /**
     * The identifier of the HTTP API.
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#aws-resource-apigatewayv2-api-return-values
     */
    readonly httpApiId: string;
    /**
     * Specifies whether clients can invoke this HTTP API by using the default execute-api endpoint.
     */
    readonly disableExecuteApiEndpoint?: boolean;
    /**
     * The default stage of this API
     */
    readonly defaultStage: IHttpStage | undefined;
    /**
     * Default Authorizer applied to all routes in the gateway.
     */
    readonly defaultAuthorizer?: IHttpRouteAuthorizer;
    /**
     * Default OIDC scopes attached to all routes in the gateway, unless explicitly configured on the route.
     * The scopes are used with a COGNITO_USER_POOLS authorizer to authorize the method invocation.
     */
    readonly defaultAuthorizationScopes?: string[];
    private readonly _apiEndpoint;
    constructor(scope: Construct, id: string, props?: HttpApiProps);
    /**
     * Get the default endpoint for this API.
     */
    get apiEndpoint(): string;
    /**
     * Get the URL to the default stage of this API.
     * Returns `undefined` if `createDefaultStage` is unset.
     */
    get url(): string | undefined;
    /**
     * Add a new stage.
     */
    addStage(id: string, options: HttpStageOptions): HttpStage;
    /**
     * Add multiple routes that uses the same configuration. The routes all go to the same path, but for different
     * methods.
     */
    addRoutes(options: AddRoutesOptions): HttpRoute[];
}
export {};
