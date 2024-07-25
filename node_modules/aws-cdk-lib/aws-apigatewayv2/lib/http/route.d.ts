import { Construct } from 'constructs';
import { IHttpApi } from './api';
import { IHttpRouteAuthorizer } from './authorizer';
import { HttpRouteIntegration } from './integration';
import * as iam from '../../../aws-iam';
import { Resource } from '../../../core';
import { IRoute } from '../common';
/**
 * Represents a Route for an HTTP API.
 */
export interface IHttpRoute extends IRoute {
    /**
     * The HTTP API associated with this route.
     */
    readonly httpApi: IHttpApi;
    /**
     * Returns the path component of this HTTP route, `undefined` if the path is the catch-all route.
     */
    readonly path?: string;
    /**
     * Returns the arn of the route.
     * @attribute
     */
    readonly routeArn: string;
    /**
     * Grant access to invoke the route.
     * This method requires that the authorizer of the route is undefined or is
     * an `HttpIamAuthorizer`.
     */
    grantInvoke(grantee: iam.IGrantable, options?: GrantInvokeOptions): iam.Grant;
}
/**
 * Options for granting invoke access.
 */
export interface GrantInvokeOptions {
    /**
     * The HTTP methods to allow.
     * @default - the HttpMethod of the route
     */
    readonly httpMethods?: HttpMethod[];
}
/**
 * Supported HTTP methods
 */
export declare enum HttpMethod {
    /** HTTP ANY */
    ANY = "ANY",
    /** HTTP DELETE */
    DELETE = "DELETE",
    /** HTTP GET */
    GET = "GET",
    /** HTTP HEAD */
    HEAD = "HEAD",
    /** HTTP OPTIONS */
    OPTIONS = "OPTIONS",
    /** HTTP PATCH */
    PATCH = "PATCH",
    /** HTTP POST */
    POST = "POST",
    /** HTTP PUT */
    PUT = "PUT"
}
/**
 * HTTP route in APIGateway is a combination of the HTTP method and the path component.
 * This class models that combination.
 */
export declare class HttpRouteKey {
    /**
     * The catch-all route of the API, i.e., when no other routes match
     */
    static readonly DEFAULT: HttpRouteKey;
    /**
     * Create a route key with the combination of the path and the method.
     * @param method default is 'ANY'
     */
    static with(path: string, method?: HttpMethod): HttpRouteKey;
    /**
     * The method of the route
     */
    readonly method: HttpMethod;
    /**
     * The key to the RouteKey as recognized by APIGateway
     */
    readonly key: string;
    /**
     * The path part of this RouteKey.
     * Returns `undefined` when `RouteKey.DEFAULT` is used.
     */
    readonly path?: string;
    private constructor();
}
/**
 * Options used when configuring multiple routes, at once.
 * The options here are the ones that would be configured for all being set up.
 */
export interface BatchHttpRouteOptions {
    /**
     * The integration to be configured on this route.
     */
    readonly integration: HttpRouteIntegration;
}
/**
 * Properties to initialize a new Route
 */
export interface HttpRouteProps extends BatchHttpRouteOptions {
    /**
     * the API the route is associated with
     */
    readonly httpApi: IHttpApi;
    /**
     * The key to this route. This is a combination of an HTTP method and an HTTP path.
     */
    readonly routeKey: HttpRouteKey;
    /**
     * Authorizer for a WebSocket API or an HTTP API.
     * @default - No authorizer
     */
    readonly authorizer?: IHttpRouteAuthorizer;
    /**
     * The list of OIDC scopes to include in the authorization.
     *
     * These scopes will be merged with the scopes from the attached authorizer
     * @default - no additional authorization scopes
     */
    readonly authorizationScopes?: string[];
}
/**
 * Route class that creates the Route for API Gateway HTTP API
 * @resource AWS::ApiGatewayV2::Route
 */
export declare class HttpRoute extends Resource implements IHttpRoute {
    readonly routeId: string;
    readonly httpApi: IHttpApi;
    readonly path?: string;
    readonly routeArn: string;
    private readonly method;
    private readonly authBindResult?;
    constructor(scope: Construct, id: string, props: HttpRouteProps);
    private produceRouteArn;
    grantInvoke(grantee: iam.IGrantable, options?: GrantInvokeOptions): iam.Grant;
}
