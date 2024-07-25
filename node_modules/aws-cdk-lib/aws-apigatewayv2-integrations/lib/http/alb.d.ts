import { HttpPrivateIntegrationOptions } from './base-types';
import { HttpPrivateIntegration } from './private/integration';
import { HttpRouteIntegrationBindOptions, HttpRouteIntegrationConfig } from '../../../aws-apigatewayv2';
import * as elbv2 from '../../../aws-elasticloadbalancingv2';
/**
 * Properties to initialize `HttpAlbIntegration`.
 */
export interface HttpAlbIntegrationProps extends HttpPrivateIntegrationOptions {
}
/**
 * The Application Load Balancer integration resource for HTTP API
 */
export declare class HttpAlbIntegration extends HttpPrivateIntegration {
    private readonly listener;
    private readonly props;
    /**
     * @param id id of the underlying integration construct
     * @param listener the ELB application listener
     * @param props properties to configure the integration
     */
    constructor(id: string, listener: elbv2.IApplicationListener, props?: HttpAlbIntegrationProps);
    bind(options: HttpRouteIntegrationBindOptions): HttpRouteIntegrationConfig;
}
