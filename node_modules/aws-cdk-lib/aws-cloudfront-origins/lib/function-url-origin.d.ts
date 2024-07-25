import * as cloudfront from '../../aws-cloudfront';
import * as lambda from '../../aws-lambda';
import * as cdk from '../../core';
/**
 * Properties for a Lambda Function URL Origin.
 */
export interface FunctionUrlOriginProps extends cloudfront.OriginProps {
    /**
     * Specifies how long, in seconds, CloudFront waits for a response from the origin.
     * The valid range is from 1 to 180 seconds, inclusive.
     *
     * Note that values over 60 seconds are possible only after a limit increase request for the origin response timeout quota
     * has been approved in the target account; otherwise, values over 60 seconds will produce an error at deploy time.
     *
     * @default Duration.seconds(30)
     */
    readonly readTimeout?: cdk.Duration;
    /**
     * Specifies how long, in seconds, CloudFront persists its connection to the origin.
     * The valid range is from 1 to 180 seconds, inclusive.
     *
     * Note that values over 60 seconds are possible only after a limit increase request for the origin response timeout quota
     * has been approved in the target account; otherwise, values over 60 seconds will produce an error at deploy time.
     *
     * @default Duration.seconds(5)
     */
    readonly keepaliveTimeout?: cdk.Duration;
}
/**
 * An Origin for a Lambda Function URL.
 */
export declare class FunctionUrlOrigin extends cloudfront.OriginBase {
    private readonly props;
    constructor(lambdaFunctionUrl: lambda.IFunctionUrl, props?: FunctionUrlOriginProps);
    protected renderCustomOriginConfig(): cloudfront.CfnDistribution.CustomOriginConfigProperty | undefined;
}
