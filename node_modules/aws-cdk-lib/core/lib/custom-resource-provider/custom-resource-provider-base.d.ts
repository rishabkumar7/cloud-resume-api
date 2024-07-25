import { Construct } from 'constructs';
import { CustomResourceProviderOptions } from './shared';
/**
 * Initialization properties for `CustomResourceProviderBase`
 */
export interface CustomResourceProviderBaseProps extends CustomResourceProviderOptions {
    /**
     * A local file system directory with the provider's code. The code will be
     * bundled into a zip asset and wired to the provider's AWS Lambda function.
     */
    readonly codeDirectory: string;
    /**
     * The AWS Lambda runtime and version name to use for the provider.
     */
    readonly runtimeName: string;
}
/**
 * Base class for creating a custom resource provider
 */
export declare abstract class CustomResourceProviderBase extends Construct {
    /**
     * The hash of the lambda code backing this provider. Can be used to trigger updates
     * on code changes, even when the properties of a custom resource remain unchanged.
     */
    get codeHash(): string;
    private _codeHash?;
    private policyStatements?;
    private role?;
    /**
     * The ARN of the provider's AWS Lambda function which should be used as the `serviceToken` when defining a custom
     * resource.
     */
    readonly serviceToken: string;
    /**
     * The ARN of the provider's AWS Lambda function role.
     */
    readonly roleArn: string;
    protected constructor(scope: Construct, id: string, props: CustomResourceProviderBaseProps);
    /**
     * Add an IAM policy statement to the inline policy of the
     * provider's lambda function's role.
     *
     * **Please note**: this is a direct IAM JSON policy blob, *not* a `iam.PolicyStatement`
     * object like you will see in the rest of the CDK.
     *
     *
     * @example
     * declare const myProvider: CustomResourceProvider;
     *
     * myProvider.addToRolePolicy({
     *   Effect: 'Allow',
     *   Action: 's3:GetObject',
     *   Resource: '*',
     * });
     */
    addToRolePolicy(statement: any): void;
    private renderPolicies;
    private renderEnvironmentVariables;
    /**
     * Returns the code property for the custom resource as well as any metadata.
     * If the code is to be uploaded as an asset, the asset gets created in this function.
     */
    private createCodePropAndMetadata;
}
export type Code = {
    ZipFile: string;
} | {
    S3Bucket: string;
    S3Key: string;
};
