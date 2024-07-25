import { Construct } from 'constructs';
import { IWebSocketApi } from './api';
import { Grant, IGrantable } from '../../../aws-iam';
import { StageOptions, IApi, IStage, StageAttributes } from '../common';
import { StageBase } from '../common/base';
/**
 * Represents the WebSocketStage
 */
export interface IWebSocketStage extends IStage {
    /**
     * The API this stage is associated to.
     */
    readonly api: IWebSocketApi;
    /**
     * The callback URL to this stage.
     * You can use the callback URL to send messages to the client from the backend system.
     * https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-basic-concept.html
     * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html
     */
    readonly callbackUrl: string;
}
/**
 * Properties to initialize an instance of `WebSocketStage`.
 */
export interface WebSocketStageProps extends StageOptions {
    /**
     * The WebSocket API to which this stage is associated.
     */
    readonly webSocketApi: IWebSocketApi;
    /**
     * The name of the stage.
     */
    readonly stageName: string;
}
/**
 * The attributes used to import existing WebSocketStage
 */
export interface WebSocketStageAttributes extends StageAttributes {
    /**
     * The API to which this stage is associated
     */
    readonly api: IWebSocketApi;
}
/**
 * Represents a stage where an instance of the API is deployed.
 * @resource AWS::ApiGatewayV2::Stage
 */
export declare class WebSocketStage extends StageBase implements IWebSocketStage {
    /**
     * Import an existing stage into this CDK app.
     */
    static fromWebSocketStageAttributes(scope: Construct, id: string, attrs: WebSocketStageAttributes): IWebSocketStage;
    protected readonly baseApi: IApi;
    readonly stageName: string;
    readonly api: IWebSocketApi;
    constructor(scope: Construct, id: string, props: WebSocketStageProps);
    /**
     * The websocket URL to this stage.
     */
    get url(): string;
    /**
     * The callback URL to this stage.
     */
    get callbackUrl(): string;
    /**
     * Grant access to the API Gateway management API for this WebSocket API Stage to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     */
    grantManagementApiAccess(identity: IGrantable): Grant;
}
