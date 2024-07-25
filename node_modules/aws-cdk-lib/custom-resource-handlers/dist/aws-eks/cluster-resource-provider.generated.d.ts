import { Construct } from "constructs";
import * as lambda from "../../../aws-lambda";
export declare class ClusterResourceOnEventFunction extends lambda.Function {
    constructor(scope: Construct, id: string, props?: lambda.FunctionOptions);
}
export declare class ClusterResourceIsCompleteFunction extends lambda.Function {
    constructor(scope: Construct, id: string, props?: lambda.FunctionOptions);
}
