import { WebSocketRouteAuthorizerBindOptions, WebSocketRouteAuthorizerConfig, IWebSocketRouteAuthorizer } from '../../../aws-apigatewayv2';
/**
 * Authorize WebSocket API Routes with IAM
 */
export declare class WebSocketIamAuthorizer implements IWebSocketRouteAuthorizer {
    bind(_options: WebSocketRouteAuthorizerBindOptions): WebSocketRouteAuthorizerConfig;
}
