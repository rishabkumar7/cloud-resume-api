import { HttpRouteIntegrationBindOptions, HttpRouteIntegrationConfig, HttpRouteIntegration, PayloadFormatVersion, ParameterMapping } from '../../../aws-apigatewayv2';
import { IFunction } from '../../../aws-lambda';
import { Duration } from '../../../core';
/**
 * Lambda Proxy integration properties
 */
export interface HttpLambdaIntegrationProps {
    /**
     * Version of the payload sent to the lambda handler.
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
     * @default PayloadFormatVersion.VERSION_2_0
     */
    readonly payloadFormatVersion?: PayloadFormatVersion;
    /**
     * Specifies how to transform HTTP requests before sending them to the backend
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html
     * @default undefined requests are sent to the backend unmodified
     */
    readonly parameterMapping?: ParameterMapping;
    /**
     * The maximum amount of time an integration will run before it returns without a response.
     * Must be between 50 milliseconds and 29 seconds.
     *
     * @default Duration.seconds(29)
     */
    readonly timeout?: Duration;
}
/**
 * The Lambda Proxy integration resource for HTTP API
 */
export declare class HttpLambdaIntegration extends HttpRouteIntegration {
    private readonly handler;
    private readonly props;
    private readonly _id;
    /**
     * @param id id of the underlying integration construct
     * @param handler the Lambda handler to integrate with
     * @param props properties to configure the integration
     */
    constructor(id: string, handler: IFunction, props?: HttpLambdaIntegrationProps);
    protected completeBind(options: HttpRouteIntegrationBindOptions): void;
    bind(_options: HttpRouteIntegrationBindOptions): HttpRouteIntegrationConfig;
}
