import * as apigwv2 from '../../../aws-apigatewayv2';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties to initialize `HttpStepFunctionsIntegration`.
 */
export interface HttpStepFunctionsIntegrationProps {
    /**
     * Specifies how to transform HTTP requests before sending them to the backend.
     *
     * When the subtype is either `START_EXECUTION` or `START_SYNC_EXECUTION`,
     * it is necessary to specify the `StateMachineArn`.
     * Conversely, when the subtype is `STOP_EXECUTION`, the `ExecutionArn` must be specified.
     *
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html
     *
     * @default - specify only `StateMachineArn`
     */
    readonly parameterMapping?: apigwv2.ParameterMapping;
    /**
     * The subtype of the HTTP integration.
     *
     * Only subtypes starting with STEPFUNCTIONS_ can be specified.
     *
     * @default HttpIntegrationSubtype.STEPFUNCTIONS_START_EXECUTION
     */
    readonly subtype?: apigwv2.HttpIntegrationSubtype;
    /**
     * Statemachine that Integrates with API Gateway
     */
    readonly stateMachine: sfn.StateMachine;
}
/**
 * The StepFunctions integration resource for HTTP API
 */
export declare class HttpStepFunctionsIntegration extends apigwv2.HttpRouteIntegration {
    private readonly props;
    /**
     * @param id id of the underlying integration construct
     * @param props properties to configure the integration
     */
    constructor(id: string, props: HttpStepFunctionsIntegrationProps);
    bind(options: apigwv2.HttpRouteIntegrationBindOptions): apigwv2.HttpRouteIntegrationConfig;
    private determineActionBySubtype;
    private determineResourceArn;
}
