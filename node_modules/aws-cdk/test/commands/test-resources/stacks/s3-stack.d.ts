import * as cdk from 'aws-cdk-lib';
export interface GoodTypeScriptStackProps extends cdk.StackProps {
}
/**
 * AWS CloudFormation Sample Template S3_Website_Bucket_With_Retain_On_Delete: Sample template showing how to create a publicly accessible S3 bucket configured for website access with a deletion policy of retain on delete.
 */
export declare class GoodTypeScriptStack extends cdk.Stack {
    /**
     * URL for website hosted on S3
     */
    readonly websiteUrl: string;
    /**
     * Name of S3 bucket to hold website content
     */
    readonly s3BucketSecureUrl: string;
    constructor(scope: cdk.App, id: string, props?: GoodTypeScriptStackProps);
}
