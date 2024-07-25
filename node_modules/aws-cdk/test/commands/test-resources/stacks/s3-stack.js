"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodTypeScriptStack = void 0;
const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
/**
 * AWS CloudFormation Sample Template S3_Website_Bucket_With_Retain_On_Delete: Sample template showing how to create a publicly accessible S3 bucket configured for website access with a deletion policy of retain on delete.
 */
class GoodTypeScriptStack extends cdk.Stack {
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        // Resources
        const s3Bucket = new s3.CfnBucket(this, 'S3Bucket', {
            accessControl: 'PublicRead',
            websiteConfiguration: {
                indexDocument: 'index.html',
                errorDocument: 'error.html',
            },
        });
        s3Bucket.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
        // Outputs
        this.websiteUrl = s3Bucket.attrWebsiteUrl;
        new cdk.CfnOutput(this, 'CfnOutputWebsiteURL', {
            key: 'WebsiteURL',
            description: 'URL for website hosted on S3',
            value: this.websiteUrl.toString(),
        });
        this.s3BucketSecureUrl = [
            'https://',
            s3Bucket.attrDomainName,
        ].join('');
        new cdk.CfnOutput(this, 'CfnOutputS3BucketSecureURL', {
            key: 'S3BucketSecureURL',
            description: 'Name of S3 bucket to hold website content',
            value: this.s3BucketSecureUrl.toString(),
        });
    }
}
exports.GoodTypeScriptStack = GoodTypeScriptStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzMy1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFDbkMseUNBQXlDO0FBS3pDOztHQUVHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQVVoRCxZQUFtQixLQUFjLEVBQUUsRUFBVSxFQUFFLFFBQWtDLEVBQUU7UUFDakYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsWUFBWTtRQUNaLE1BQU0sUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ2xELGFBQWEsRUFBRSxZQUFZO1lBQzNCLG9CQUFvQixFQUFFO2dCQUNwQixhQUFhLEVBQUUsWUFBWTtnQkFDM0IsYUFBYSxFQUFFLFlBQVk7YUFDNUI7U0FDRixDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDO1FBRWxFLFVBQVU7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDMUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUM3QyxHQUFHLEVBQUUsWUFBWTtZQUNqQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVyxDQUFDLFFBQVEsRUFBRTtTQUNuQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkIsVUFBVTtZQUNWLFFBQVEsQ0FBQyxjQUFjO1NBQ3hCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSw0QkFBNEIsRUFBRTtZQUNwRCxHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLFdBQVcsRUFBRSwyQ0FBMkM7WUFDeEQsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBa0IsQ0FBQyxRQUFRLEVBQUU7U0FDMUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBeENELGtEQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgKiBhcyBzMyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtczMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2RUeXBlU2NyaXB0U3RhY2tQcm9wcyBleHRlbmRzIGNkay5TdGFja1Byb3BzIHtcbn1cblxuLyoqXG4gKiBBV1MgQ2xvdWRGb3JtYXRpb24gU2FtcGxlIFRlbXBsYXRlIFMzX1dlYnNpdGVfQnVja2V0X1dpdGhfUmV0YWluX09uX0RlbGV0ZTogU2FtcGxlIHRlbXBsYXRlIHNob3dpbmcgaG93IHRvIGNyZWF0ZSBhIHB1YmxpY2x5IGFjY2Vzc2libGUgUzMgYnVja2V0IGNvbmZpZ3VyZWQgZm9yIHdlYnNpdGUgYWNjZXNzIHdpdGggYSBkZWxldGlvbiBwb2xpY3kgb2YgcmV0YWluIG9uIGRlbGV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEdvb2RUeXBlU2NyaXB0U3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICAvKipcbiAgICogVVJMIGZvciB3ZWJzaXRlIGhvc3RlZCBvbiBTM1xuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHdlYnNpdGVVcmw7XG4gIC8qKlxuICAgKiBOYW1lIG9mIFMzIGJ1Y2tldCB0byBob2xkIHdlYnNpdGUgY29udGVudFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHMzQnVja2V0U2VjdXJlVXJsO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM6IEdvb2RUeXBlU2NyaXB0U3RhY2tQcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBSZXNvdXJjZXNcbiAgICBjb25zdCBzM0J1Y2tldCA9IG5ldyBzMy5DZm5CdWNrZXQodGhpcywgJ1MzQnVja2V0Jywge1xuICAgICAgYWNjZXNzQ29udHJvbDogJ1B1YmxpY1JlYWQnLFxuICAgICAgd2Vic2l0ZUNvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgaW5kZXhEb2N1bWVudDogJ2luZGV4Lmh0bWwnLFxuICAgICAgICBlcnJvckRvY3VtZW50OiAnZXJyb3IuaHRtbCcsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHMzQnVja2V0LmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPSBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgLy8gT3V0cHV0c1xuICAgIHRoaXMud2Vic2l0ZVVybCA9IHMzQnVja2V0LmF0dHJXZWJzaXRlVXJsO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdDZm5PdXRwdXRXZWJzaXRlVVJMJywge1xuICAgICAga2V5OiAnV2Vic2l0ZVVSTCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VSTCBmb3Igd2Vic2l0ZSBob3N0ZWQgb24gUzMnLFxuICAgICAgdmFsdWU6IHRoaXMud2Vic2l0ZVVybCEudG9TdHJpbmcoKSxcbiAgICB9KTtcbiAgICB0aGlzLnMzQnVja2V0U2VjdXJlVXJsID0gW1xuICAgICAgJ2h0dHBzOi8vJyxcbiAgICAgIHMzQnVja2V0LmF0dHJEb21haW5OYW1lLFxuICAgIF0uam9pbignJyk7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0Nmbk91dHB1dFMzQnVja2V0U2VjdXJlVVJMJywge1xuICAgICAga2V5OiAnUzNCdWNrZXRTZWN1cmVVUkwnLFxuICAgICAgZGVzY3JpcHRpb246ICdOYW1lIG9mIFMzIGJ1Y2tldCB0byBob2xkIHdlYnNpdGUgY29udGVudCcsXG4gICAgICB2YWx1ZTogdGhpcy5zM0J1Y2tldFNlY3VyZVVybCEudG9TdHJpbmcoKSxcbiAgICB9KTtcbiAgfVxufVxuIl19