import { Construct } from "constructs";
import { CustomResourceProviderBase, CustomResourceProviderOptions } from "../../../core";
export declare class RestrictDefaultSgProvider extends CustomResourceProviderBase {
    /**
     * Returns a stack-level singleton ARN (service token) for the custom resource provider.
     */
    static getOrCreate(scope: Construct, uniqueid: string, props?: CustomResourceProviderOptions): string;
    /**
     * Returns a stack-level singleton for the custom resource provider.
     */
    static getOrCreateProvider(scope: Construct, uniqueid: string, props?: CustomResourceProviderOptions): RestrictDefaultSgProvider;
    constructor(scope: Construct, id: string, props?: CustomResourceProviderOptions);
}
