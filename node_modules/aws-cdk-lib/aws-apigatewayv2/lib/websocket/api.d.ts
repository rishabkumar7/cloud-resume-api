import { Construct } from 'constructs';
import { WebSocketRoute, WebSocketRouteOptions } from './route';
import { Grant, IGrantable } from '../../../aws-iam';
import { IApi } from '../common/api';
import { ApiBase } from '../common/base';
/**
 * Represents a WebSocket API
 */
export interface IWebSocketApi extends IApi {
}
/**
 * Represents the currently available API Key Selection Expressions
 */
export declare class WebSocketApiKeySelectionExpression {
    readonly customApiKeySelector: string;
    /**
     * The API will extract the key value from the `x-api-key` header in the user request.
     */
    static readonly HEADER_X_API_KEY: WebSocketApiKeySelectionExpression;
    /**
      * The API will extract the key value from the `usageIdentifierKey` attribute in the `context` map,
      * returned by the Lambda Authorizer.
      * See https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-lambda-authorizer-output.html
      */
    static readonly AUTHORIZER_USAGE_IDENTIFIER_KEY: WebSocketApiKeySelectionExpression;
    /**
     * @param customApiKeySelector The expression used by API Gateway
     */
    constructor(customApiKeySelector: string);
}
/**
 * Props for WebSocket API
 */
export interface WebSocketApiProps {
    /**
     * Name for the WebSocket API resource
     * @default - id of the WebSocketApi construct.
     */
    readonly apiName?: string;
    /**
     * An API key selection expression. Providing this option will require an API Key be provided to access the API.
     * @default - Key is not required to access these APIs
     */
    readonly apiKeySelectionExpression?: WebSocketApiKeySelectionExpression;
    /**
     * The description of the API.
     * @default - none
     */
    readonly description?: string;
    /**
     * The route selection expression for the API
     * @default '$request.body.action'
     */
    readonly routeSelectionExpression?: string;
    /**
     * Options to configure a '$connect' route
     *
     * @default - no '$connect' route configured
     */
    readonly connectRouteOptions?: WebSocketRouteOptions;
    /**
     * Options to configure a '$disconnect' route
     *
     * @default - no '$disconnect' route configured
     */
    readonly disconnectRouteOptions?: WebSocketRouteOptions;
    /**
     * Options to configure a '$default' route
     *
     * @default - no '$default' route configured
     */
    readonly defaultRouteOptions?: WebSocketRouteOptions;
}
/**
 * Attributes for importing a WebSocketApi into the CDK
 */
export interface WebSocketApiAttributes {
    /**
     * The identifier of the WebSocketApi
     */
    readonly webSocketId: string;
    /**
     * The endpoint URL of the WebSocketApi
     * @default - throw san error if apiEndpoint is accessed.
     */
    readonly apiEndpoint?: string;
}
/**
 * Create a new API Gateway WebSocket API endpoint.
 * @resource AWS::ApiGatewayV2::Api
 */
export declare class WebSocketApi extends ApiBase implements IWebSocketApi {
    /**
     * Import an existing WebSocket API into this CDK app.
     */
    static fromWebSocketApiAttributes(scope: Construct, id: string, attrs: WebSocketApiAttributes): IWebSocketApi;
    readonly apiId: string;
    readonly apiEndpoint: string;
    /**
     * A human friendly name for this WebSocket API. Note that this is different from `webSocketApiId`.
     */
    readonly webSocketApiName?: string;
    constructor(scope: Construct, id: string, props?: WebSocketApiProps);
    /**
     * Add a new route
     */
    addRoute(routeKey: string, options: WebSocketRouteOptions): WebSocketRoute;
    /**
     * Grant access to the API Gateway management API for this WebSocket API to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     */
    grantManageConnections(identity: IGrantable): Grant;
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
