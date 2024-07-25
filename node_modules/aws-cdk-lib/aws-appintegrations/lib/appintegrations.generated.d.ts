import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates and persists a DataIntegration resource.
 *
 * @cloudformationResource AWS::AppIntegrations::DataIntegration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html
 */
export declare class CfnDataIntegration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataIntegration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataIntegration;
    /**
     * The Amazon Resource Name (ARN) for the DataIntegration.
     *
     * @cloudformationAttribute DataIntegrationArn
     */
    readonly attrDataIntegrationArn: string;
    /**
     * A unique identifier.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A description of the DataIntegration.
     */
    description?: string;
    /**
     * The configuration for what files should be pulled from the source.
     */
    fileConfiguration?: CfnDataIntegration.FileConfigurationProperty | cdk.IResolvable;
    /**
     * The KMS key for the DataIntegration.
     */
    kmsKey: string;
    /**
     * The name of the DataIntegration.
     */
    name: string;
    /**
     * The configuration for what data should be pulled from the source.
     */
    objectConfiguration?: any | cdk.IResolvable;
    /**
     * The name of the data and how often it should be pulled from the source.
     */
    scheduleConfig?: cdk.IResolvable | CfnDataIntegration.ScheduleConfigProperty;
    /**
     * The URI of the data source.
     */
    sourceUri: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataIntegrationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataIntegration {
    /**
     * The name of the data and how often it should be pulled from the source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-scheduleconfig.html
     */
    interface ScheduleConfigProperty {
        /**
         * The start date for objects to import in the first flow run as an Unix/epoch timestamp in milliseconds or in ISO-8601 format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-scheduleconfig.html#cfn-appintegrations-dataintegration-scheduleconfig-firstexecutionfrom
         */
        readonly firstExecutionFrom?: string;
        /**
         * The name of the object to pull from the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-scheduleconfig.html#cfn-appintegrations-dataintegration-scheduleconfig-object
         */
        readonly object?: string;
        /**
         * How often the data should be pulled from data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-scheduleconfig.html#cfn-appintegrations-dataintegration-scheduleconfig-scheduleexpression
         */
        readonly scheduleExpression: string;
    }
    /**
     * The configuration for what files should be pulled from the source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-fileconfiguration.html
     */
    interface FileConfigurationProperty {
        /**
         * Restrictions for what files should be pulled from the source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-fileconfiguration.html#cfn-appintegrations-dataintegration-fileconfiguration-filters
         */
        readonly filters?: any | cdk.IResolvable;
        /**
         * Identifiers for the source folders to pull all files from recursively.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-fileconfiguration.html#cfn-appintegrations-dataintegration-fileconfiguration-folders
         */
        readonly folders: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDataIntegration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html
 */
export interface CfnDataIntegrationProps {
    /**
     * A description of the DataIntegration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-description
     */
    readonly description?: string;
    /**
     * The configuration for what files should be pulled from the source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-fileconfiguration
     */
    readonly fileConfiguration?: CfnDataIntegration.FileConfigurationProperty | cdk.IResolvable;
    /**
     * The KMS key for the DataIntegration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-kmskey
     */
    readonly kmsKey: string;
    /**
     * The name of the DataIntegration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-name
     */
    readonly name: string;
    /**
     * The configuration for what data should be pulled from the source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-objectconfiguration
     */
    readonly objectConfiguration?: any | cdk.IResolvable;
    /**
     * The name of the data and how often it should be pulled from the source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-scheduleconfig
     */
    readonly scheduleConfig?: cdk.IResolvable | CfnDataIntegration.ScheduleConfigProperty;
    /**
     * The URI of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-sourceuri
     */
    readonly sourceUri: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an event integration.
 *
 * You provide a name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that will push events to that bus. No objects are created in your account, only metadata that is persisted on the EventIntegration control plane.
 *
 * @cloudformationResource AWS::AppIntegrations::EventIntegration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html
 */
export declare class CfnEventIntegration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventIntegration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventIntegration;
    /**
     * The Amazon Resource Name (ARN) of the event integration.
     *
     * @cloudformationAttribute EventIntegrationArn
     */
    readonly attrEventIntegrationArn: string;
    /**
     * The event integration description.
     */
    description?: string;
    /**
     * The Amazon EventBridge bus for the event integration.
     */
    eventBridgeBus: string;
    /**
     * The event integration filter.
     */
    eventFilter: CfnEventIntegration.EventFilterProperty | cdk.IResolvable;
    /**
     * The name of the event integration.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventIntegrationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEventIntegration {
    /**
     * The event integration filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-eventintegration-eventfilter.html
     */
    interface EventFilterProperty {
        /**
         * The source of the events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-eventintegration-eventfilter.html#cfn-appintegrations-eventintegration-eventfilter-source
         */
        readonly source: string;
    }
}
/**
 * Properties for defining a `CfnEventIntegration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html
 */
export interface CfnEventIntegrationProps {
    /**
     * The event integration description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html#cfn-appintegrations-eventintegration-description
     */
    readonly description?: string;
    /**
     * The Amazon EventBridge bus for the event integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html#cfn-appintegrations-eventintegration-eventbridgebus
     */
    readonly eventBridgeBus: string;
    /**
     * The event integration filter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html#cfn-appintegrations-eventintegration-eventfilter
     */
    readonly eventFilter: CfnEventIntegration.EventFilterProperty | cdk.IResolvable;
    /**
     * The name of the event integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html#cfn-appintegrations-eventintegration-name
     */
    readonly name: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html#cfn-appintegrations-eventintegration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates and persists an Application resource.
 *
 * @cloudformationResource AWS::AppIntegrations::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplication from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplication;
    /**
     * The Amazon Resource Name (ARN) of the Application.
     *
     * @cloudformationAttribute ApplicationArn
     */
    readonly attrApplicationArn: string;
    /**
     * A unique identifier for the Application.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The configuration for where the application should be loaded from.
     */
    applicationSourceConfig: CfnApplication.ApplicationSourceConfigProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the application.
     */
    description: string;
    /**
     * The name of the application.
     */
    name: string;
    /**
     * The namespace of the application.
     */
    namespace?: string;
    /**
     * The configuration of events or requests that the application has access to.
     */
    permissions?: Array<string>;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplication {
    /**
     * The configuration for where the application should be loaded from.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-application-applicationsourceconfig.html
     */
    interface ApplicationSourceConfigProperty {
        /**
         * The external URL source for the application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-application-applicationsourceconfig.html#cfn-appintegrations-application-applicationsourceconfig-externalurlconfig
         */
        readonly externalUrlConfig: CfnApplication.ExternalUrlConfigProperty | cdk.IResolvable;
    }
    /**
     * The external URL source for the application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-application-externalurlconfig.html
     */
    interface ExternalUrlConfigProperty {
        /**
         * The URL to access the application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-application-externalurlconfig.html#cfn-appintegrations-application-externalurlconfig-accessurl
         */
        readonly accessUrl: string;
        /**
         * Additional URLs to allow list if different than the access URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-application-externalurlconfig.html#cfn-appintegrations-application-externalurlconfig-approvedorigins
         */
        readonly approvedOrigins?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html
 */
export interface CfnApplicationProps {
    /**
     * The configuration for where the application should be loaded from.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html#cfn-appintegrations-application-applicationsourceconfig
     */
    readonly applicationSourceConfig: CfnApplication.ApplicationSourceConfigProperty | cdk.IResolvable;
    /**
     * The description of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html#cfn-appintegrations-application-description
     */
    readonly description: string;
    /**
     * The name of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html#cfn-appintegrations-application-name
     */
    readonly name: string;
    /**
     * The namespace of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html#cfn-appintegrations-application-namespace
     */
    readonly namespace?: string;
    /**
     * The configuration of events or requests that the application has access to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html#cfn-appintegrations-application-permissions
     */
    readonly permissions?: Array<string>;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html#cfn-appintegrations-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
