import { HttpPrivateIntegrationOptions } from './base-types';
import { HttpPrivateIntegration } from './private/integration';
import { HttpRouteIntegrationBindOptions, HttpRouteIntegrationConfig } from '../../../aws-apigatewayv2';
import * as elbv2 from '../../../aws-elasticloadbalancingv2';
/**
 * Properties to initialize `HttpNlbIntegration`.
 */
export interface HttpNlbIntegrationProps extends HttpPrivateIntegrationOptions {
}
/**
 * The Network Load Balancer integration resource for HTTP API
 */
export declare class HttpNlbIntegration extends HttpPrivateIntegration {
    private readonly listener;
    private readonly props;
    /**
     * @param id id of the underlying integration construct
     * @param listener the ELB network listener
     * @param props properties to configure the integration
     */
    constructor(id: string, listener: elbv2.INetworkListener, props?: HttpNlbIntegrationProps);
    bind(options: HttpRouteIntegrationBindOptions): HttpRouteIntegrationConfig;
}
