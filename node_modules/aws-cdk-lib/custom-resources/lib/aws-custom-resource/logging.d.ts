import { Construct } from 'constructs';
/**
 * Properties used to initialize Logging.
 */
export interface LoggingProps {
    /**
     * Whether or not to log data associated with the API call response.
     *
     * @default true
     */
    readonly logApiResponseData?: boolean;
}
/**
 * A class used to configure Logging during AwsCustomResource SDK calls.
 */
export declare abstract class Logging {
    /**
     * Enables logging of all logged data in the lambda handler.
     *
     * This includes the event object, the API call response, all fields in the response object
     * returned by the lambda, and any errors encountered.
     */
    static all(): Logging;
    /**
     * Hides logging of data associated with the API call response. This includes hiding the raw API
     * call response and the `Data` field associated with the lambda handler response.
     */
    static withDataHidden(): Logging;
    /**
     * Whether or not to log data associated with the API call response.
     */
    private logApiResponseData?;
    protected constructor(props?: LoggingProps);
    /**
     * @internal
     */
    _render(scope: Construct): {
        logApiResponseData: boolean;
    } | {
        logApiResponseData?: undefined;
    };
}
