import { WebSocketRouteIntegration, WebSocketRouteIntegrationConfig, WebSocketRouteIntegrationBindOptions } from '../../../aws-apigatewayv2';
/**
 * Mock WebSocket Integration
 */
export declare class WebSocketMockIntegration extends WebSocketRouteIntegration {
    /**
     * @param id id of the underlying integration construct
     */
    constructor(id: string);
    bind(options: WebSocketRouteIntegrationBindOptions): WebSocketRouteIntegrationConfig;
}
