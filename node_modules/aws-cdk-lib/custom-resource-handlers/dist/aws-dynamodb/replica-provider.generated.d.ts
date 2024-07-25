import { Construct } from "constructs";
import * as lambda from "../../../aws-lambda";
export declare class ReplicaOnEventFunction extends lambda.Function {
    constructor(scope: Construct, id: string, props?: lambda.FunctionOptions);
}
export declare class ReplicaIsCompleteFunction extends lambda.Function {
    constructor(scope: Construct, id: string, props?: lambda.FunctionOptions);
}
