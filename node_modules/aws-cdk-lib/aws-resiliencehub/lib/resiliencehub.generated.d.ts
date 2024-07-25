import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an AWS Resilience Hub application.
 *
 * An AWS Resilience Hub application is a collection of AWS resources structured to prevent and recover AWS application disruptions. To describe a AWS Resilience Hub application, you provide an application name, resources from one or more AWS CloudFormation stacks, AWS Resource Groups , Terraform state files, AppRegistry applications, and an appropriate resiliency policy. In addition, you can also add resources that are located on Amazon Elastic Kubernetes Service (Amazon EKS) clusters as optional resources. For more information about the number of resources supported per application, see [Service quotas](https://docs.aws.amazon.com/general/latest/gr/resiliencehub.html#limits_resiliencehub) .
 *
 * After you create an AWS Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).
 *
 * @cloudformationResource AWS::ResilienceHub::App
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html
 */
export declare class CfnApp extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApp from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApp;
    /**
     * The Amazon Resource Name (ARN) of the applcation.
     *
     * @cloudformationAttribute AppArn
     */
    readonly attrAppArn: string;
    /**
     * Indicates if compliance drifts (deviations) were detected while running an assessment for your application.
     *
     * @cloudformationAttribute DriftStatus
     */
    readonly attrDriftStatus: string;
    /**
     * Assessment execution schedule with 'Daily' or 'Disabled' values.
     */
    appAssessmentSchedule?: string;
    /**
     * A JSON string that provides information about your application structure.
     */
    appTemplateBody: string;
    /**
     * Optional description for an application.
     */
    description?: string;
    /**
     * The list of events you would like to subscribe and get notification for.
     */
    eventSubscriptions?: Array<CfnApp.EventSubscriptionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Name for the application.
     */
    name: string;
    /**
     * Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.
     */
    permissionModel?: cdk.IResolvable | CfnApp.PermissionModelProperty;
    /**
     * The Amazon Resource Name (ARN) of the resiliency policy.
     */
    resiliencyPolicyArn?: string;
    /**
     * An array of `ResourceMapping` objects.
     */
    resourceMappings: Array<cdk.IResolvable | CfnApp.ResourceMappingProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags assigned to the resource.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAppProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApp {
    /**
     * Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-permissionmodel.html
     */
    interface PermissionModelProperty {
        /**
         * Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts.
         *
         * These ARNs are used for querying purposes while importing resources and assessing your application.
         *
         * > - These ARNs are required only when your resources are in other accounts and you have different role name in these accounts. Else, the invoker role name will be used in the other accounts.
         * > - These roles must have a trust policy with `iam:AssumeRole` permission to the invoker role in the primary account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-permissionmodel.html#cfn-resiliencehub-app-permissionmodel-crossaccountrolearns
         */
        readonly crossAccountRoleArns?: Array<string>;
        /**
         * Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.
         *
         * > - You must have `iam:passRole` permission for this role while creating or updating the application.
         * > - Currently, `invokerRoleName` accepts only `[A-Za-z0-9_+=,.@-]` characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-permissionmodel.html#cfn-resiliencehub-app-permissionmodel-invokerrolename
         */
        readonly invokerRoleName?: string;
        /**
         * Defines how AWS Resilience Hub scans your resources.
         *
         * It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-permissionmodel.html#cfn-resiliencehub-app-permissionmodel-type
         */
        readonly type: string;
    }
    /**
     * Defines a resource mapping.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-resourcemapping.html
     */
    interface ResourceMappingProperty {
        /**
         * Name of the Amazon Elastic Kubernetes Service cluster and namespace that this resource is mapped to when the `mappingType` is `EKS` .
         *
         * > This parameter accepts values in "eks-cluster/namespace" format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-resourcemapping.html#cfn-resiliencehub-app-resourcemapping-ekssourcename
         */
        readonly eksSourceName?: string;
        /**
         * Name of the AWS CloudFormation stack this resource is mapped to when the `mappingType` is `CfnStack` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-resourcemapping.html#cfn-resiliencehub-app-resourcemapping-logicalstackname
         */
        readonly logicalStackName?: string;
        /**
         * Specifies the type of resource mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-resourcemapping.html#cfn-resiliencehub-app-resourcemapping-mappingtype
         */
        readonly mappingType: string;
        /**
         * Identifier of the physical resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-resourcemapping.html#cfn-resiliencehub-app-resourcemapping-physicalresourceid
         */
        readonly physicalResourceId: cdk.IResolvable | CfnApp.PhysicalResourceIdProperty;
        /**
         * Name of the resource that this resource is mapped to when the `mappingType` is `Resource` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-resourcemapping.html#cfn-resiliencehub-app-resourcemapping-resourcename
         */
        readonly resourceName?: string;
        /**
         * Name of the Terraform source that this resource is mapped to when the `mappingType` is `Terraform` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-resourcemapping.html#cfn-resiliencehub-app-resourcemapping-terraformsourcename
         */
        readonly terraformSourceName?: string;
    }
    /**
     * Defines a physical resource identifier.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-physicalresourceid.html
     */
    interface PhysicalResourceIdProperty {
        /**
         * The AWS account that owns the physical resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-physicalresourceid.html#cfn-resiliencehub-app-physicalresourceid-awsaccountid
         */
        readonly awsAccountId?: string;
        /**
         * The AWS Region that the physical resource is located in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-physicalresourceid.html#cfn-resiliencehub-app-physicalresourceid-awsregion
         */
        readonly awsRegion?: string;
        /**
         * Identifier of the physical resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-physicalresourceid.html#cfn-resiliencehub-app-physicalresourceid-identifier
         */
        readonly identifier: string;
        /**
         * Specifies the type of physical resource identifier.
         *
         * - **Arn** - The resource identifier is an Amazon Resource Name (ARN) and it can identify the following list of resources:
         *
         * - `AWS::ECS::Service`
         * - `AWS::EFS::FileSystem`
         * - `AWS::ElasticLoadBalancingV2::LoadBalancer`
         * - `AWS::Lambda::Function`
         * - `AWS::SNS::Topic`
         * - **Native** - The resource identifier is an AWS Resilience Hub -native identifier and it can identify the following list of resources:
         *
         * - `AWS::ApiGateway::RestApi`
         * - `AWS::ApiGatewayV2::Api`
         * - `AWS::AutoScaling::AutoScalingGroup`
         * - `AWS::DocDB::DBCluster`
         * - `AWS::DocDB::DBGlobalCluster`
         * - `AWS::DocDB::DBInstance`
         * - `AWS::DynamoDB::GlobalTable`
         * - `AWS::DynamoDB::Table`
         * - `AWS::EC2::EC2Fleet`
         * - `AWS::EC2::Instance`
         * - `AWS::EC2::NatGateway`
         * - `AWS::EC2::Volume`
         * - `AWS::ElasticLoadBalancing::LoadBalancer`
         * - `AWS::RDS::DBCluster`
         * - `AWS::RDS::DBInstance`
         * - `AWS::RDS::GlobalCluster`
         * - `AWS::Route53::RecordSet`
         * - `AWS::S3::Bucket`
         * - `AWS::SQS::Queue`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-physicalresourceid.html#cfn-resiliencehub-app-physicalresourceid-type
         */
        readonly type: string;
    }
    /**
     * Indicates an event you would like to subscribe and get notification for.
     *
     * Currently, AWS Resilience Hub supports notifications only for *Drift detected* and *Scheduled assessment failure* events.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-eventsubscription.html
     */
    interface EventSubscriptionProperty {
        /**
         * The type of event you would like to subscribe and get notification for.
         *
         * Currently, AWS Resilience Hub supports notifications only for *Drift detected* ( `DriftDetected` ) and *Scheduled assessment failure* ( `ScheduledAssessmentFailure` ) events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-eventsubscription.html#cfn-resiliencehub-app-eventsubscription-eventtype
         */
        readonly eventType: string;
        /**
         * Unique name to identify an event subscription.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-eventsubscription.html#cfn-resiliencehub-app-eventsubscription-name
         */
        readonly name: string;
        /**
         * Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.
         *
         * The format for this ARN is: `arn:partition:sns:region:account:topic-name` . For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *AWS General Reference* guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-eventsubscription.html#cfn-resiliencehub-app-eventsubscription-snstopicarn
         */
        readonly snsTopicArn?: string;
    }
}
/**
 * Properties for defining a `CfnApp`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html
 */
export interface CfnAppProps {
    /**
     * Assessment execution schedule with 'Daily' or 'Disabled' values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-appassessmentschedule
     */
    readonly appAssessmentSchedule?: string;
    /**
     * A JSON string that provides information about your application structure.
     *
     * To learn more about the `appTemplateBody` template, see the sample template in [Sample appTemplateBody template](https://docs.aws.amazon.com//resilience-hub/latest/APIReference/API_PutDraftAppVersionTemplate.html#API_PutDraftAppVersionTemplate_Examples) .
     *
     * The `appTemplateBody` JSON string has the following structure:
     *
     * - *`resources`*
     *
     * The list of logical resources that needs to be included in the AWS Resilience Hub application.
     *
     * Type: Array
     *
     * > Don't add the resources that you want to exclude.
     *
     * Each `resources` array item includes the following fields:
     *
     * - *`logicalResourceId`*
     *
     * The logical identifier of the resource.
     *
     * Type: Object
     *
     * Each `logicalResourceId` object includes the following fields:
     *
     * - `identifier`
     *
     * Identifier of the resource.
     *
     * Type: String
     * - `logicalStackName`
     *
     * Name of the AWS CloudFormation stack this resource belongs to.
     *
     * Type: String
     * - `resourceGroupName`
     *
     * Name of the resource group this resource belongs to.
     *
     * Type: String
     * - `terraformSourceName`
     *
     * Name of the Terraform S3 state file this resource belongs to.
     *
     * Type: String
     * - `eksSourceName`
     *
     * Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.
     *
     * > This parameter accepts values in "eks-cluster/namespace" format.
     *
     * Type: String
     * - *`type`*
     *
     * The type of resource.
     *
     * Type: string
     * - *`name`*
     *
     * Name of the resource.
     *
     * Type: String
     * - `additionalInfo`
     *
     * Additional configuration parameters for an AWS Resilience Hub application. If you want to implement `additionalInfo` through the AWS Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com//resilience-hub/latest/userguide/app-config-param.html) .
     *
     * > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
     * >
     * > Key: `"failover-regions"`
     * >
     * > Value: `"[{"region":"<REGION>", "accounts":[{"id":"<ACCOUNT_ID>"}]}]"`
     * - *`appComponents`*
     *
     * The list of Application Components (AppComponent) that this resource belongs to. If an AppComponent is not part of the AWS Resilience Hub application, it will be added.
     *
     * Type: Array
     *
     * Each `appComponents` array item includes the following fields:
     *
     * - `name`
     *
     * Name of the AppComponent.
     *
     * Type: String
     * - `type`
     *
     * The type of AppComponent. For more information about the types of AppComponent, see [Grouping resources in an AppComponent](https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html) .
     *
     * Type: String
     * - `resourceNames`
     *
     * The list of included resources that are assigned to the AppComponent.
     *
     * Type: Array of strings
     * - `additionalInfo`
     *
     * Additional configuration parameters for an AWS Resilience Hub application. If you want to implement `additionalInfo` through the AWS Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com//resilience-hub/latest/userguide/app-config-param.html) .
     *
     * > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
     * >
     * > Key: `"failover-regions"`
     * >
     * > Value: `"[{"region":"<REGION>", "accounts":[{"id":"<ACCOUNT_ID>"}]}]"`
     * - *`excludedResources`*
     *
     * The list of logical resource identifiers to be excluded from the application.
     *
     * Type: Array
     *
     * > Don't add the resources that you want to include.
     *
     * Each `excludedResources` array item includes the following fields:
     *
     * - *`logicalResourceIds`*
     *
     * The logical identifier of the resource.
     *
     * Type: Object
     *
     * > You can configure only one of the following fields:
     * >
     * > - `logicalStackName`
     * > - `resourceGroupName`
     * > - `terraformSourceName`
     * > - `eksSourceName`
     *
     * Each `logicalResourceIds` object includes the following fields:
     *
     * - `identifier`
     *
     * The identifier of the resource.
     *
     * Type: String
     * - `logicalStackName`
     *
     * Name of the AWS CloudFormation stack this resource belongs to.
     *
     * Type: String
     * - `resourceGroupName`
     *
     * Name of the resource group this resource belongs to.
     *
     * Type: String
     * - `terraformSourceName`
     *
     * Name of the Terraform S3 state file this resource belongs to.
     *
     * Type: String
     * - `eksSourceName`
     *
     * Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.
     *
     * > This parameter accepts values in "eks-cluster/namespace" format.
     *
     * Type: String
     * - *`version`*
     *
     * The AWS Resilience Hub application version.
     * - `additionalInfo`
     *
     * Additional configuration parameters for an AWS Resilience Hub application. If you want to implement `additionalInfo` through the AWS Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com//resilience-hub/latest/userguide/app-config-param.html) .
     *
     * > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
     * >
     * > Key: `"failover-regions"`
     * >
     * > Value: `"[{"region":"<REGION>", "accounts":[{"id":"<ACCOUNT_ID>"}]}]"`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-apptemplatebody
     */
    readonly appTemplateBody: string;
    /**
     * Optional description for an application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-description
     */
    readonly description?: string;
    /**
     * The list of events you would like to subscribe and get notification for.
     *
     * Currently, AWS Resilience Hub supports notifications only for *Drift detected* and *Scheduled assessment failure* events.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-eventsubscriptions
     */
    readonly eventSubscriptions?: Array<CfnApp.EventSubscriptionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Name for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-name
     */
    readonly name: string;
    /**
     * Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-permissionmodel
     */
    readonly permissionModel?: cdk.IResolvable | CfnApp.PermissionModelProperty;
    /**
     * The Amazon Resource Name (ARN) of the resiliency policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-resiliencypolicyarn
     */
    readonly resiliencyPolicyArn?: string;
    /**
     * An array of `ResourceMapping` objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-resourcemappings
     */
    readonly resourceMappings: Array<cdk.IResolvable | CfnApp.ResourceMappingProperty> | cdk.IResolvable;
    /**
     * Tags assigned to the resource.
     *
     * A tag is a label that you assign to an AWS resource. Each tag consists of a key/value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Defines a resiliency policy.
 *
 * > AWS Resilience Hub allows you to provide a value of zero for `rtoInSecs` and `rpoInSecs` of your resiliency policy. But, while assessing your application, the lowest possible assessment result is near zero. Hence, if you provide value zero for `rtoInSecs` and `rpoInSecs` , the estimated workload RTO and estimated workload RPO result will be near zero and the *Compliance status* for your application will be set to *Policy breached* .
 *
 * @cloudformationResource AWS::ResilienceHub::ResiliencyPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html
 */
export declare class CfnResiliencyPolicy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResiliencyPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResiliencyPolicy;
    /**
     * Amazon Resource Name (ARN) of the resiliency policy.
     *
     * @cloudformationAttribute PolicyArn
     */
    readonly attrPolicyArn: string;
    /**
     * Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
     */
    dataLocationConstraint?: string;
    /**
     * The resiliency policy.
     */
    policy: cdk.IResolvable | Record<string, CfnResiliencyPolicy.FailurePolicyProperty | cdk.IResolvable>;
    /**
     * The description for the policy.
     */
    policyDescription?: string;
    /**
     * The name of the policy.
     */
    policyName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags assigned to the resource.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The tier for this resiliency policy, ranging from the highest severity ( `MissionCritical` ) to lowest ( `NonCritical` ).
     */
    tier: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResiliencyPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnResiliencyPolicy {
    /**
     * Defines a failure policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-resiliencypolicy-failurepolicy.html
     */
    interface FailurePolicyProperty {
        /**
         * Recovery Point Objective (RPO) in seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-resiliencypolicy-failurepolicy.html#cfn-resiliencehub-resiliencypolicy-failurepolicy-rpoinsecs
         */
        readonly rpoInSecs: number;
        /**
         * Recovery Time Objective (RTO) in seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-resiliencypolicy-failurepolicy.html#cfn-resiliencehub-resiliencypolicy-failurepolicy-rtoinsecs
         */
        readonly rtoInSecs: number;
    }
}
/**
 * Properties for defining a `CfnResiliencyPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html
 */
export interface CfnResiliencyPolicyProps {
    /**
     * Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-datalocationconstraint
     */
    readonly dataLocationConstraint?: string;
    /**
     * The resiliency policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-policy
     */
    readonly policy: cdk.IResolvable | Record<string, CfnResiliencyPolicy.FailurePolicyProperty | cdk.IResolvable>;
    /**
     * The description for the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-policydescription
     */
    readonly policyDescription?: string;
    /**
     * The name of the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-policyname
     */
    readonly policyName: string;
    /**
     * Tags assigned to the resource.
     *
     * A tag is a label that you assign to an AWS resource. Each tag consists of a key/value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The tier for this resiliency policy, ranging from the highest severity ( `MissionCritical` ) to lowest ( `NonCritical` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-tier
     */
    readonly tier: string;
}
