import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Applies an Amazon S3 bucket policy to an Amazon S3 directory bucket.
 *
 * - **Permissions** - If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity must both have the required permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. For more information about directory bucket policies and permissions, see [AWS Identity and Access Management (IAM) for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html) in the *Amazon S3 User Guide* .
 *
 * > To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's AWS account can perform the `GetBucketPolicy` , `PutBucketPolicy` , and `DeleteBucketPolicy` API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and AWS Organizations policies.
 *
 * The required permissions for CloudFormation to use are based on the operations that are performed on the stack.
 *
 * - Create
 *
 * - s3express:GetBucketPolicy
 * - s3express:PutBucketPolicy
 * - Read
 *
 * - s3express:GetBucketPolicy
 * - Update
 *
 * - s3express:GetBucketPolicy
 * - s3express:PutBucketPolicy
 * - Delete
 *
 * - s3express:GetBucketPolicy
 * - s3express:DeleteBucketPolicy
 * - List
 *
 * - s3express:GetBucketPolicy
 * - s3express:ListAllMyDirectoryBuckets
 *
 * For more information about example bucket policies, see [Example bucket policies for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-example-bucket-policies.html) in the *Amazon S3 User Guide* .
 *
 * The following operations are related to `AWS::S3Express::BucketPolicy` :
 *
 * - [PutBucketPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html)
 * - [GetBucketPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html)
 * - [DeleteBucketPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html)
 * - [ListDirectoryBuckets](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListDirectoryBuckets.html)
 *
 * @cloudformationResource AWS::S3Express::BucketPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-bucketpolicy.html
 */
export declare class CfnBucketPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBucketPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBucketPolicy;
    /**
     * The name of the S3 directory bucket to which the policy applies.
     */
    bucket: string;
    /**
     * A policy document containing permissions to add to the specified bucket.
     */
    policyDocument: any | cdk.IResolvable | string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBucketPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnBucketPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-bucketpolicy.html
 */
export interface CfnBucketPolicyProps {
    /**
     * The name of the S3 directory bucket to which the policy applies.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-bucketpolicy.html#cfn-s3express-bucketpolicy-bucket
     */
    readonly bucket: string;
    /**
     * A policy document containing permissions to add to the specified bucket.
     *
     * In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM. For more information, see the AWS::IAM::Policy [PolicyDocument](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument) resource description in this guide and [Policies and Permissions in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the *Amazon S3 User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-bucketpolicy.html#cfn-s3express-bucketpolicy-policydocument
     */
    readonly policyDocument: any | cdk.IResolvable | string;
}
/**
 * The `AWS::S3Express::DirectoryBucket` resource creates an Amazon S3 directory bucket in the same AWS Region where you create the AWS CloudFormation stack.
 *
 * To control how AWS CloudFormation handles the bucket when the stack is deleted, you can set a deletion policy for your bucket. You can choose to *retain* the bucket or to *delete* the bucket. For more information, see [DeletionPolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) .
 *
 * > You can only delete empty buckets. Deletion fails for buckets that have contents.
 *
 * - **Permissions** - The required permissions for CloudFormation to use are based on the operations that are performed on the stack.
 *
 * - Create
 *
 * - s3express:CreateBucket
 * - s3express:ListAllMyDirectoryBuckets
 * - Read
 *
 * - s3express:ListAllMyDirectoryBuckets
 * - Delete
 *
 * - s3express:DeleteBucket
 * - s3express:ListAllMyDirectoryBuckets
 * - List
 *
 * - s3express:ListAllMyDirectoryBuckets
 *
 * The following operations are related to `AWS::S3Express::DirectoryBucket` :
 *
 * - [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)
 * - [ListDirectoryBuckets](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListDirectoryBuckets.html)
 * - [DeleteBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html)
 *
 * @cloudformationResource AWS::S3Express::DirectoryBucket
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html
 */
export declare class CfnDirectoryBucket extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDirectoryBucket from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDirectoryBucket;
    /**
     * Returns the Amazon Resource Name (ARN) of the specified bucket.
     *
     * Example: `arn:aws:s3express: *us-west-2* : *account_id* :bucket/ *DOC-EXAMPLE-BUCKET* -- *usw2-az1* --x-s3`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A name for the bucket.
     */
    bucketName?: string;
    /**
     * The number of Availability Zone that's used for redundancy for the bucket.
     */
    dataRedundancy: string;
    /**
     * The name of the location where the bucket will be created.
     */
    locationName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDirectoryBucketProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnDirectoryBucket`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html
 */
export interface CfnDirectoryBucketProps {
    /**
     * A name for the bucket.
     *
     * The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone. The bucket name must also follow the format `*bucket_base_name* -- *az_id* --x-s3` (for example, `*DOC-EXAMPLE-BUCKET* -- *usw2-az1* --x-s3` ). If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide* .
     *
     * > If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-bucketname
     */
    readonly bucketName?: string;
    /**
     * The number of Availability Zone that's used for redundancy for the bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-dataredundancy
     */
    readonly dataRedundancy: string;
    /**
     * The name of the location where the bucket will be created.
     *
     * For directory buckets, the name of the location is the AZ ID of the Availability Zone where the bucket will be created. An example AZ ID value is `usw2-az1` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-locationname
     */
    readonly locationName: string;
}
