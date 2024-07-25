import { WebSocketRouteIntegration, WebSocketRouteIntegrationBindOptions, WebSocketRouteIntegrationConfig, ContentHandling } from '../../../aws-apigatewayv2';
import { IFunction } from '../../../aws-lambda';
import { Duration } from '../../../core';
/**
 * Props for Lambda type integration for a WebSocket Api.
 */
export interface WebSocketLambdaIntegrationProps {
    /**
     * The maximum amount of time an integration will run before it returns without a response.
     * Must be between 50 milliseconds and 29 seconds.
     *
     * @default Duration.seconds(29)
     */
    readonly timeout?: Duration;
    /**
     * Specifies how to handle response payload content type conversions.
     *
     * @default - The response payload will be passed through from the integration response to
     * the route response or method response without modification.
     */
    readonly contentHandling?: ContentHandling;
}
/**
 * Lambda WebSocket Integration
 */
export declare class WebSocketLambdaIntegration extends WebSocketRouteIntegration {
    private readonly handler;
    private readonly props;
    private readonly _id;
    /**
     * @param id id of the underlying integration construct
     * @param handler the Lambda function handler
     * @param props properties to configure the integration
     */
    constructor(id: string, handler: IFunction, props?: WebSocketLambdaIntegrationProps);
    bind(options: WebSocketRouteIntegrationBindOptions): WebSocketRouteIntegrationConfig;
}
