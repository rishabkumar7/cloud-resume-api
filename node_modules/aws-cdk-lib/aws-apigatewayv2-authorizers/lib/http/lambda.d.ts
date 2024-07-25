import { HttpRouteAuthorizerBindOptions, HttpRouteAuthorizerConfig, IHttpRouteAuthorizer } from '../../../aws-apigatewayv2';
import { IFunction } from '../../../aws-lambda';
import { Duration } from '../../../core';
/**
 * Specifies the type responses the lambda returns
 */
export declare enum HttpLambdaResponseType {
    /** Returns simple boolean response */
    SIMPLE = 0,
    /** Returns an IAM Policy */
    IAM = 1
}
/**
 * Properties to initialize HttpTokenAuthorizer.
 */
export interface HttpLambdaAuthorizerProps {
    /**
     * Friendly authorizer name
     * @default - same value as `id` passed in the constructor.
     */
    readonly authorizerName?: string;
    /**
     * The identity source for which authorization is requested.
     *
     * @default ['$request.header.Authorization']
     */
    readonly identitySource?: string[];
    /**
     * How long APIGateway should cache the results. Max 1 hour.
     * Disable caching by setting this to `Duration.seconds(0)`.
     *
     * @default Duration.minutes(5)
     */
    readonly resultsCacheTtl?: Duration;
    /**
     * The types of responses the lambda can return
     *
     * If HttpLambdaResponseType.SIMPLE is included then
     * response format 2.0 will be used.
     *
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html#http-api-lambda-authorizer.payload-format-response
     *
     * @default [HttpLambdaResponseType.IAM]
     */
    readonly responseTypes?: HttpLambdaResponseType[];
}
/**
 * Authorize Http Api routes via a lambda function
 */
export declare class HttpLambdaAuthorizer implements IHttpRouteAuthorizer {
    private readonly id;
    private readonly handler;
    private readonly props;
    private authorizer?;
    private httpApi?;
    /**
     * Initialize a lambda authorizer to be bound with HTTP route.
     * @param id The id of the underlying construct
     * @param pool The lambda function handler to use for authorization
     * @param props Properties to configure the authorizer
     */
    constructor(id: string, handler: IFunction, props?: HttpLambdaAuthorizerProps);
    bind(options: HttpRouteAuthorizerBindOptions): HttpRouteAuthorizerConfig;
}
