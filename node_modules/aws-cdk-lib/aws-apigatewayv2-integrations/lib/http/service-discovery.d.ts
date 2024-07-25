import { HttpPrivateIntegrationOptions } from './base-types';
import { HttpPrivateIntegration } from './private/integration';
import { HttpRouteIntegrationBindOptions, HttpRouteIntegrationConfig } from '../../../aws-apigatewayv2';
import * as servicediscovery from '../../../aws-servicediscovery';
/**
 * Properties to initialize `HttpServiceDiscoveryIntegration`.
 */
export interface HttpServiceDiscoveryIntegrationProps extends HttpPrivateIntegrationOptions {
}
/**
 * The Service Discovery integration resource for HTTP API
 */
export declare class HttpServiceDiscoveryIntegration extends HttpPrivateIntegration {
    private readonly service;
    private readonly props;
    /**
     * @param id id of the underlying integration construct
     * @param service the service discovery resource to integrate with
     * @param props properties to configure the integration
     */
    constructor(id: string, service: servicediscovery.IService, props?: HttpServiceDiscoveryIntegrationProps);
    bind(_options: HttpRouteIntegrationBindOptions): HttpRouteIntegrationConfig;
}
