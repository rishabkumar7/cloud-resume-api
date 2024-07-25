import { Construct } from 'constructs';
import { IHttpApi } from './api';
import { HttpMethod, IHttpRoute } from './route';
import { IRole } from '../../../aws-iam';
import { Duration, Resource } from '../../../core';
import { IIntegration } from '../common';
import { ParameterMapping } from '../parameter-mapping';
/**
 * Represents an Integration for an HTTP API.
 */
export interface IHttpIntegration extends IIntegration {
    /** The HTTP API associated with this integration */
    readonly httpApi: IHttpApi;
}
/**
 * Supported integration types
 */
export declare enum HttpIntegrationType {
    /**
     * Integration type is an HTTP proxy.
     *
     * For integrating the route or method request with an HTTP endpoint, with the
     * client request passed through as-is. This is also referred to as HTTP proxy
     * integration. For HTTP API private integrations, use an HTTP_PROXY integration.
     *
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-http.html
     */
    HTTP_PROXY = "HTTP_PROXY",
    /**
     * Integration type is an AWS proxy.
     *
     * For integrating the route or method request with a Lambda function or other
     * AWS service action. This integration is also referred to as a Lambda proxy
     * integration.
     *
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
     */
    AWS_PROXY = "AWS_PROXY"
}
/**
 * Supported integration subtypes
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html
 */
export declare enum HttpIntegrationSubtype {
    /**
     * EventBridge PutEvents integration
     */
    EVENTBRIDGE_PUT_EVENTS = "EventBridge-PutEvents",
    /**
     * SQS SendMessage integration
     */
    SQS_SEND_MESSAGE = "SQS-SendMessage",
    /**
     * SQS ReceiveMessage integration,
     */
    SQS_RECEIVE_MESSAGE = "SQS-ReceiveMessage",
    /**
     * SQS DeleteMessage integration,
     */
    SQS_DELETE_MESSAGE = "SQS-DeleteMessage",
    /**
     * SQS PurgeQueue integration
     */
    SQS_PURGE_QUEUE = "SQS-PurgeQueue",
    /**
     * AppConfig GetConfiguration integration
     */
    APPCONFIG_GET_CONFIGURATION = "AppConfig-GetConfiguration",
    /**
     * Kinesis PutRecord integration
     */
    KINESIS_PUT_RECORD = "Kinesis-PutRecord",
    /**
     * Step Functions StartExecution integration
     */
    STEPFUNCTIONS_START_EXECUTION = "StepFunctions-StartExecution",
    /**
     * Step Functions StartSyncExecution integration
     */
    STEPFUNCTIONS_START_SYNC_EXECUTION = "StepFunctions-StartSyncExecution",
    /**
     * Step Functions StopExecution integration
     */
    STEPFUNCTIONS_STOP_EXECUTION = "StepFunctions-StopExecution"
}
/**
 * Credentials used for AWS Service integrations.
 */
export declare abstract class IntegrationCredentials {
    /**
     * Use the specified role for integration requests
     */
    static fromRole(role: IRole): IntegrationCredentials;
    /** Use the calling user's identity to call the integration */
    static useCallerIdentity(): IntegrationCredentials;
    /**
     * The ARN of the credentials
     */
    abstract readonly credentialsArn: string;
}
/**
 * Supported connection types
 */
export declare enum HttpConnectionType {
    /**
     * For private connections between API Gateway and resources in a VPC
     */
    VPC_LINK = "VPC_LINK",
    /**
     * For connections through public routable internet
     */
    INTERNET = "INTERNET"
}
/**
 * Payload format version for lambda proxy integration
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
export declare class PayloadFormatVersion {
    /** Version 1.0 */
    static readonly VERSION_1_0: PayloadFormatVersion;
    /** Version 2.0 */
    static readonly VERSION_2_0: PayloadFormatVersion;
    /**
     * A custom payload version.
     * Typically used if there is a version number that the CDK doesn't support yet
     */
    static custom(version: string): PayloadFormatVersion;
    /** version as a string */
    readonly version: string;
    private constructor();
}
/**
 * The integration properties
 */
export interface HttpIntegrationProps {
    /**
     * The HTTP API to which this integration should be bound.
     */
    readonly httpApi: IHttpApi;
    /**
     * Integration type
     */
    readonly integrationType: HttpIntegrationType;
    /**
     * Integration subtype.
     *
     * Used for AWS Service integrations, specifies the target of the integration.
     *
     * @default - none, required if no `integrationUri` is defined.
     */
    readonly integrationSubtype?: HttpIntegrationSubtype;
    /**
     * Integration URI.
     * This will be the function ARN in the case of `HttpIntegrationType.AWS_PROXY`,
     * or HTTP URL in the case of `HttpIntegrationType.HTTP_PROXY`.
     *
     * @default - none, required if no `integrationSubtype` is defined.
     */
    readonly integrationUri?: string;
    /**
     * The HTTP method to use when calling the underlying HTTP proxy
     * @default - none. required if the integration type is `HttpIntegrationType.HTTP_PROXY`.
     */
    readonly method?: HttpMethod;
    /**
     * The ID of the VPC link for a private integration. Supported only for HTTP APIs.
     *
     * @default - undefined
     */
    readonly connectionId?: string;
    /**
     * The type of the network connection to the integration endpoint
     *
     * @default HttpConnectionType.INTERNET
     */
    readonly connectionType?: HttpConnectionType;
    /**
     * The version of the payload format
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
     * @default - defaults to latest in the case of HttpIntegrationType.AWS_PROXY`, irrelevant otherwise.
     */
    readonly payloadFormatVersion?: PayloadFormatVersion;
    /**
     * Specifies the TLS configuration for a private integration
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-tlsconfig.html
     * @default undefined private integration traffic will use HTTP protocol
     */
    readonly secureServerName?: string;
    /**
     * The maximum amount of time an integration will run before it returns without a response.
     * Must be between 50 milliseconds and 29 seconds.
     *
     *  @default Duration.seconds(29)
     */
    readonly timeout?: Duration;
    /**
     * Specifies how to transform HTTP requests before sending them to the backend
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html
     * @default undefined requests are sent to the backend unmodified
     */
    readonly parameterMapping?: ParameterMapping;
    /**
     * The credentials with which to invoke the integration.
     *
     * @default - no credentials, use resource-based permissions on supported AWS services
     */
    readonly credentials?: IntegrationCredentials;
}
/**
 * The integration for an API route.
 * @resource AWS::ApiGatewayV2::Integration
 */
export declare class HttpIntegration extends Resource implements IHttpIntegration {
    readonly integrationId: string;
    readonly httpApi: IHttpApi;
    constructor(scope: Construct, id: string, props: HttpIntegrationProps);
}
/**
 * Options to the HttpRouteIntegration during its bind operation.
 */
export interface HttpRouteIntegrationBindOptions {
    /**
     * The route to which this is being bound.
     */
    readonly route: IHttpRoute;
    /**
     * The current scope in which the bind is occurring.
     * If the `HttpRouteIntegration` being bound creates additional constructs,
     * this will be used as their parent scope.
     */
    readonly scope: Construct;
}
/**
 * The interface that various route integration classes will inherit.
 */
export declare abstract class HttpRouteIntegration {
    private readonly id;
    private integration?;
    /**
     * Initialize an integration for a route on http api.
     * @param id id of the underlying `HttpIntegration` construct.
     */
    constructor(id: string);
    /**
     * Internal method called when binding this integration to the route.
     * @internal
     */
    _bindToRoute(options: HttpRouteIntegrationBindOptions): {
        readonly integrationId: string;
    };
    /**
     * Complete the binding of the integration to the route. In some cases, there is
     * some additional work to do, such as adding permissions for the API to access
     * the target. This work is necessary whether the integration has just been
     * created for this route or it is an existing one, previously created for other
     * routes. In most cases, however, concrete implementations do not need to
     * override this method.
     */
    protected completeBind(_options: HttpRouteIntegrationBindOptions): void;
    /**
     * Bind this integration to the route.
     */
    abstract bind(options: HttpRouteIntegrationBindOptions): HttpRouteIntegrationConfig;
}
/**
 * Config returned back as a result of the bind.
 */
export interface HttpRouteIntegrationConfig {
    /**
     * Integration type.
     */
    readonly type: HttpIntegrationType;
    /**
     * Integration subtype.
     *
     * @default - none, required if no `integrationUri` is defined.
     */
    readonly subtype?: HttpIntegrationSubtype;
    /**
     * Integration URI
     *
     * @default - none, required if no `integrationSubtype` is defined.
     */
    readonly uri?: string;
    /**
     * The HTTP method that must be used to invoke the underlying proxy.
     * Required for `HttpIntegrationType.HTTP_PROXY`
     * @default - undefined
     */
    readonly method?: HttpMethod;
    /**
     * The ID of the VPC link for a private integration. Supported only for HTTP APIs.
     *
     * @default - undefined
     */
    readonly connectionId?: string;
    /**
     * The type of the network connection to the integration endpoint
     *
     * @default HttpConnectionType.INTERNET
     */
    readonly connectionType?: HttpConnectionType;
    /**
     * Payload format version in the case of lambda proxy integration
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
     * @default - undefined
     */
    readonly payloadFormatVersion: PayloadFormatVersion;
    /**
     * Specifies the server name to verified by HTTPS when calling the backend integration
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-tlsconfig.html
     * @default undefined private integration traffic will use HTTP protocol
     */
    readonly secureServerName?: string;
    /**
     * The maximum amount of time an integration will run before it returns without a response.
     * Must be between 50 milliseconds and 29 seconds.
     *
     * @default Duration.seconds(29)
     */
    readonly timeout?: Duration;
    /**
    * Specifies how to transform HTTP requests before sending them to the backend
    * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html
    * @default undefined requests are sent to the backend unmodified
    */
    readonly parameterMapping?: ParameterMapping;
    /**
     * The credentials with which to invoke the integration.
     *
     * @default - no credentials, use resource-based permissions on supported AWS services
     */
    readonly credentials?: IntegrationCredentials;
}
