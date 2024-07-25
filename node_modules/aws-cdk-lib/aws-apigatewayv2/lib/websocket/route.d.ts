import { Construct } from 'constructs';
import { IWebSocketApi } from './api';
import { IWebSocketRouteAuthorizer } from './authorizer';
import { WebSocketRouteIntegration } from './integration';
import { Resource } from '../../../core';
import { IRoute } from '../common';
/**
 * Represents a Route for an WebSocket API.
 */
export interface IWebSocketRoute extends IRoute {
    /**
     * The WebSocket API associated with this route.
     */
    readonly webSocketApi: IWebSocketApi;
    /**
     * The key to this route.
     * @attribute
     */
    readonly routeKey: string;
}
/**
 * Options used to add route to the API
 */
export interface WebSocketRouteOptions {
    /**
     * The integration to be configured on this route.
     */
    readonly integration: WebSocketRouteIntegration;
    /**
     * The authorize to this route. You can only set authorizer to a $connect route.
     *
     * @default - No Authorizer
     */
    readonly authorizer?: IWebSocketRouteAuthorizer;
    /**
     * Should the route send a response to the client
     * @default false
     */
    readonly returnResponse?: boolean;
}
/**
 * Properties to initialize a new Route
 */
export interface WebSocketRouteProps extends WebSocketRouteOptions {
    /**
     * The API the route is associated with.
     */
    readonly webSocketApi: IWebSocketApi;
    /**
     * The key to this route.
     */
    readonly routeKey: string;
    /**
     * Whether the route requires an API Key to be provided
     * @default false
     */
    readonly apiKeyRequired?: boolean;
}
/**
 * Route class that creates the Route for API Gateway WebSocket API
 * @resource AWS::ApiGatewayV2::Route
 */
export declare class WebSocketRoute extends Resource implements IWebSocketRoute {
    readonly routeId: string;
    readonly webSocketApi: IWebSocketApi;
    readonly routeKey: string;
    /**
     * Integration response ID
     */
    readonly integrationResponseId?: string;
    constructor(scope: Construct, id: string, props: WebSocketRouteProps);
}
