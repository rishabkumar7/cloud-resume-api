import { Construct } from "constructs";
import * as lambda from "../../../aws-lambda";
export declare class CrossRegionAwsSdkSingletonFunction extends lambda.SingletonFunction {
    constructor(scope: Construct, id: string, props: CrossRegionAwsSdkSingletonFunctionProps);
}
/**
 * Initialization properties for CrossRegionAwsSdkSingletonFunction
 */
export interface CrossRegionAwsSdkSingletonFunctionProps extends lambda.FunctionOptions {
    /**
     * A unique identifier to identify this Lambda.
     *
     * The identifier should be unique across all custom resource providers.
     * We recommend generating a UUID per provider.
     */
    readonly uuid: string;
    /**
     * A descriptive name for the purpose of this Lambda.
     *
     * If the Lambda does not have a physical name, this string will be
     * reflected in its generated name. The combination of lambdaPurpose
     * and uuid must be unique.
     *
     * @default SingletonLambda
     */
    readonly lambdaPurpose?: string;
}
