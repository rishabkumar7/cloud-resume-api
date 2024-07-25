import { Construct } from "constructs";
import * as lambda from "../../../aws-lambda";
export declare class ApproveLambdaFunction extends lambda.Function {
    constructor(scope: Construct, id: string, props?: lambda.FunctionOptions);
}
