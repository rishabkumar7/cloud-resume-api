import { HttpRouteAuthorizerBindOptions, HttpRouteAuthorizerConfig, IHttpRouteAuthorizer } from '../../../aws-apigatewayv2';
import { IUserPool, IUserPoolClient } from '../../../aws-cognito';
/**
 * Properties to initialize HttpUserPoolAuthorizer.
 */
export interface HttpUserPoolAuthorizerProps {
    /**
     * The user pool clients that should be used to authorize requests with the user pool.
     * @default - a new client will be created for the given user pool
     */
    readonly userPoolClients?: IUserPoolClient[];
    /**
     * The AWS region in which the user pool is present
     * @default - same region as the Route the authorizer is attached to.
     */
    readonly userPoolRegion?: string;
    /**
     * Friendly name of the authorizer
     * @default - same value as `id` passed in the constructor
     */
    readonly authorizerName?: string;
    /**
     * The identity source for which authorization is requested.
     *
     * @default ['$request.header.Authorization']
     */
    readonly identitySource?: string[];
}
/**
 * Authorize Http Api routes on whether the requester is registered as part of
 * an AWS Cognito user pool.
 */
export declare class HttpUserPoolAuthorizer implements IHttpRouteAuthorizer {
    private readonly id;
    private readonly pool;
    private readonly props;
    private authorizer?;
    /**
     * Initialize a Cognito user pool authorizer to be bound with HTTP route.
     * @param id The id of the underlying construct
     * @param pool The user pool to use for authorization
     * @param props Properties to configure the authorizer
     */
    constructor(id: string, pool: IUserPool, props?: HttpUserPoolAuthorizerProps);
    bind(options: HttpRouteAuthorizerBindOptions): HttpRouteAuthorizerConfig;
}
