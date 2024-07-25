import { HttpRouteAuthorizerBindOptions, HttpRouteAuthorizerConfig, IHttpRouteAuthorizer } from '../../../aws-apigatewayv2';
/**
 * Properties to initialize HttpJwtAuthorizer.
 */
export interface HttpJwtAuthorizerProps {
    /**
     * The name of the authorizer
     * @default - same value as `id` passed in the constructor
     */
    readonly authorizerName?: string;
    /**
     * The identity source for which authorization is requested.
     *
     * @default ['$request.header.Authorization']
     */
    readonly identitySource?: string[];
    /**
     * A list of the intended recipients of the JWT.
     * A valid JWT must provide an aud that matches at least one entry in this list.
     */
    readonly jwtAudience: string[];
}
/**
 * Authorize Http Api routes on whether the requester is registered as part of
 * an AWS Cognito user pool.
 */
export declare class HttpJwtAuthorizer implements IHttpRouteAuthorizer {
    private readonly id;
    private readonly jwtIssuer;
    private readonly props;
    private authorizer?;
    /**
     * Initialize a JWT authorizer to be bound with HTTP route.
     * @param id The id of the underlying construct
     * @param jwtIssuer The base domain of the identity provider that issues JWT
     * @param props Properties to configure the authorizer
     */
    constructor(id: string, jwtIssuer: string, props: HttpJwtAuthorizerProps);
    bind(options: HttpRouteAuthorizerBindOptions): HttpRouteAuthorizerConfig;
}
