import { BuildSpec } from './build-spec';
import { ComputeType } from './compute-type';
import { BuildEnvironment, IBuildImage } from './project';
/**
 * A CodeBuild image running aarch64 Lambda.
 *
 * This class has a bunch of public constants that represent the CodeBuild aarch64 Lambda images.
 *
 * @see https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-available.html
 */
export declare class LinuxArmLambdaBuildImage implements IBuildImage {
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:nodejs18` build image. */
    static readonly AMAZON_LINUX_2_NODE_18: IBuildImage;
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:nodejs20` build image. */
    static readonly AMAZON_LINUX_2023_NODE_20: IBuildImage;
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:python3.11` build image. */
    static readonly AMAZON_LINUX_2_PYTHON_3_11: IBuildImage;
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:python3.12` build image. */
    static readonly AMAZON_LINUX_2023_PYTHON_3_12: IBuildImage;
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:ruby3.2` build image. */
    static readonly AMAZON_LINUX_2_RUBY_3_2: IBuildImage;
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:corretto21` build image. */
    static readonly AMAZON_LINUX_2023_CORRETTO_21: IBuildImage;
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:corretto17` build image. */
    static readonly AMAZON_LINUX_2_CORRETTO_17: IBuildImage;
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:corretto11` build image. */
    static readonly AMAZON_LINUX_2_CORRETTO_11: IBuildImage;
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:go1.21` build image. */
    static readonly AMAZON_LINUX_2_GO_1_21: IBuildImage;
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:dotnet6` build image. */
    static readonly AMAZON_LINUX_2_DOTNET_6: IBuildImage;
    /** The `aws/codebuild/amazonlinux-aarch64-lambda-standard:dotnet8` build image. */
    static readonly AMAZON_LINUX_2023_DOTNET_8: IBuildImage;
    /**
     * Uses a Docker image provided by CodeBuild.
     *
     * NOTE: In Lambda compute, since only specified images can be used, this method is set to private.
     *
     * @see https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-available.html
     *
     * @param id The image identifier
     * @example 'aws/codebuild/amazonlinux-aarch64-lambda-standard:nodejs18'
     * @returns A Docker image provided by CodeBuild.
     */
    private static fromCodeBuildImageId;
    readonly type = "ARM_LAMBDA_CONTAINER";
    readonly defaultComputeType = ComputeType.LAMBDA_1GB;
    readonly imageId: string;
    private constructor();
    validate(buildEnvironment: BuildEnvironment): string[];
    runScriptBuildspec(entrypoint: string): BuildSpec;
}
