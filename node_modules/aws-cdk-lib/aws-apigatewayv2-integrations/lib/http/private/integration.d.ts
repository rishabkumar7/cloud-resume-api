import { HttpConnectionType, HttpIntegrationType, HttpRouteIntegrationBindOptions, HttpRouteIntegrationConfig, HttpRouteIntegration, PayloadFormatVersion, HttpMethod, IVpcLink } from '../../../../aws-apigatewayv2';
import * as ec2 from '../../../../aws-ec2';
/**
 * Options required to use an existing vpcLink or configure a new one
 *
 * @internal
 */
export interface VpcLinkConfigurationOptions {
    /**
     * The vpc link to be used for the private integration
     *
     * @default - a new VpcLink is created
     */
    readonly vpcLink?: IVpcLink;
    /**
     * The vpc for which the VpcLink needs to be created
     *
     * @default undefined
     */
    readonly vpc?: ec2.IVpc;
}
/**
 * The HTTP Private integration resource for HTTP API
 *
 * @internal
 */
export declare abstract class HttpPrivateIntegration extends HttpRouteIntegration {
    protected httpMethod: HttpMethod;
    protected payloadFormatVersion: PayloadFormatVersion;
    protected integrationType: HttpIntegrationType;
    protected connectionType: HttpConnectionType;
    /**
     * Adds a vpcLink to the API if not passed in the options
     *
     * @internal
     */
    protected _configureVpcLink(bindOptions: HttpRouteIntegrationBindOptions, configOptions: VpcLinkConfigurationOptions): IVpcLink;
    abstract bind(options: HttpRouteIntegrationBindOptions): HttpRouteIntegrationConfig;
}
