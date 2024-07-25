/**
 * Transform SDK service/action to IAM action using metadata obtained from AWS SDK metadata.
 * Example: CloudWatchLogs with putRetentionPolicy => logs:PutRetentionPolicy
 */
export declare function awsSdkToIamAction(service: string, action: string): string;
