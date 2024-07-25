import { WebSocketRouteAuthorizerBindOptions, WebSocketRouteAuthorizerConfig, IWebSocketRouteAuthorizer } from '../../../aws-apigatewayv2';
import { IFunction } from '../../../aws-lambda';
/**
 * Properties to initialize WebSocketTokenAuthorizer.
 */
export interface WebSocketLambdaAuthorizerProps {
    /**
     * The name of the authorizer
     * @default - same value as `id` passed in the constructor.
     */
    readonly authorizerName?: string;
    /**
     * The identity source for which authorization is requested.
     *
     * Request parameter match `'route.request.querystring|header.[a-zA-z0-9._-]+'`.
     * Staged variable match `'stageVariables.[a-zA-Z0-9._-]+'`.
     * Context parameter match `'context.[a-zA-Z0-9._-]+'`.
     *
     * @default ['route.request.header.Authorization']
     */
    readonly identitySource?: string[];
}
/**
 * Authorize WebSocket Api routes via a lambda function
 */
export declare class WebSocketLambdaAuthorizer implements IWebSocketRouteAuthorizer {
    private readonly id;
    private readonly handler;
    private readonly props;
    private authorizer?;
    private webSocketApi?;
    constructor(id: string, handler: IFunction, props?: WebSocketLambdaAuthorizerProps);
    bind(options: WebSocketRouteAuthorizerBindOptions): WebSocketRouteAuthorizerConfig;
}
