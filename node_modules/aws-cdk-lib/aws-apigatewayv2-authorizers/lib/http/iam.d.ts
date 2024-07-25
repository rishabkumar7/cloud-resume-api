import { HttpRouteAuthorizerBindOptions, HttpRouteAuthorizerConfig, IHttpRouteAuthorizer } from '../../../aws-apigatewayv2';
/**
 * Authorize HTTP API Routes with IAM
 */
export declare class HttpIamAuthorizer implements IHttpRouteAuthorizer {
    bind(_options: HttpRouteAuthorizerBindOptions): HttpRouteAuthorizerConfig;
}
