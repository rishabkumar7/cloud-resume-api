import { Construct } from "constructs";
import { CustomResourceProviderBase, CustomResourceProviderOptions } from "../../custom-resource-provider";
export declare class CfnUtilsProvider extends CustomResourceProviderBase {
    /**
     * Returns a stack-level singleton ARN (service token) for the custom resource provider.
     */
    static getOrCreate(scope: Construct, uniqueid: string, props?: CustomResourceProviderOptions): string;
    /**
     * Returns a stack-level singleton for the custom resource provider.
     */
    static getOrCreateProvider(scope: Construct, uniqueid: string, props?: CustomResourceProviderOptions): CfnUtilsProvider;
    constructor(scope: Construct, id: string, props?: CustomResourceProviderOptions);
}
