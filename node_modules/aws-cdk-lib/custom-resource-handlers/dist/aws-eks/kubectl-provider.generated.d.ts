import { Construct } from "constructs";
import * as lambda from "../../../aws-lambda";
export declare class KubectlFunction extends lambda.Function {
    constructor(scope: Construct, id: string, props?: lambda.FunctionOptions);
}
