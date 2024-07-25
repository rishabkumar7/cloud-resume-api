import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The definition of a rule groups namespace in an Amazon Managed Service for Prometheus workspace.
 *
 * A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. For more information about rules files, see [Creating a rules file](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-ruler-rulesfile.html) , in the *Amazon Managed Service for Prometheus User Guide* .
 *
 * @cloudformationResource AWS::APS::RuleGroupsNamespace
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html
 */
export declare class CfnRuleGroupsNamespace extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRuleGroupsNamespace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRuleGroupsNamespace;
    /**
     * The ARN of the rule groups namespace. For example, `arn:aws:aps:<region>:123456789012:rulegroupsnamespace/ws-example1-1234-abcd-5678-ef90abcd1234/rulesfile1` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The rules file used in the namespace.
     */
    data: string;
    /**
     * The name of the rule groups namespace.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of tag keys and values that are associated with the rule groups namespace.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ID of the workspace to add the rule groups namespace.
     */
    workspace: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRuleGroupsNamespaceProps);
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
 * Properties for defining a `CfnRuleGroupsNamespace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html
 */
export interface CfnRuleGroupsNamespaceProps {
    /**
     * The rules file used in the namespace.
     *
     * For more details about the rules file, see [Creating a rules file](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-ruler-rulesfile.html) in the *Amazon Managed Service for Prometheus User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#cfn-aps-rulegroupsnamespace-data
     */
    readonly data: string;
    /**
     * The name of the rule groups namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#cfn-aps-rulegroupsnamespace-name
     */
    readonly name: string;
    /**
     * The list of tag keys and values that are associated with the rule groups namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#cfn-aps-rulegroupsnamespace-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ID of the workspace to add the rule groups namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#cfn-aps-rulegroupsnamespace-workspace
     */
    readonly workspace: string;
}
/**
 * An Amazon Managed Service for Prometheus workspace is a logical and isolated Prometheus server dedicated to ingesting, storing, and querying your Prometheus-compatible metrics.
 *
 * @cloudformationResource AWS::APS::Workspace
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html
 */
export declare class CfnWorkspace extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkspace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkspace;
    /**
     * The ARN of the workspace. For example, `arn:aws:aps:<region>:123456789012:workspace/ws-example1-1234-abcd-5678-ef90abcd1234` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Prometheus endpoint available for this workspace. For example, `https://aps-workspaces.<region>.amazonaws.com/workspaces/ws-example1-1234-abcd-5678-ef90abcd1234/api/v1/` .
     *
     * @cloudformationAttribute PrometheusEndpoint
     */
    readonly attrPrometheusEndpoint: string;
    /**
     * The unique ID for the workspace. For example, `ws-example1-1234-abcd-5678-ef90abcd1234` .
     *
     * @cloudformationAttribute WorkspaceId
     */
    readonly attrWorkspaceId: string;
    /**
     * The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace.
     */
    alertManagerDefinition?: string;
    /**
     * The alias that is assigned to this workspace to help identify it.
     */
    alias?: string;
    /**
     * (optional) The ARN for a customer managed AWS KMS key to use for encrypting data within your workspace.
     */
    kmsKeyArn?: string;
    /**
     * Contains information about the logging configuration for the workspace.
     */
    loggingConfiguration?: cdk.IResolvable | CfnWorkspace.LoggingConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of tag keys and values that are associated with the workspace.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnWorkspaceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWorkspace {
    /**
     * Contains information about the logging configuration for the workspace.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-loggingconfiguration.html
     */
    interface LoggingConfigurationProperty {
        /**
         * The ARN of the CloudWatch log group to which the vended log data will be published.
         *
         * This log group must exist prior to calling this operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-loggingconfiguration.html#cfn-aps-workspace-loggingconfiguration-loggrouparn
         */
        readonly logGroupArn?: string;
    }
}
/**
 * Properties for defining a `CfnWorkspace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html
 */
export interface CfnWorkspaceProps {
    /**
     * The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace.
     *
     * For details about the alert manager definition, see [Creating an alert manager configuration files](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alertmanager-config.html) in the *Amazon Managed Service for Prometheus User Guide* .
     *
     * The following example shows part of a CloudFormation YAML file with an embedded alert manager definition (following the `- |-` ).
     *
     * `Workspace: Type: AWS::APS::Workspace .... Properties: .... AlertManagerDefinition: Fn::Sub: - |- alertmanager_config: | templates: - 'default_template' route: receiver: example-sns receivers: - name: example-sns sns_configs: - topic_arn: 'arn:aws:sns:${AWS::Region}:${AWS::AccountId}:${TopicName}' -`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-alertmanagerdefinition
     */
    readonly alertManagerDefinition?: string;
    /**
     * The alias that is assigned to this workspace to help identify it.
     *
     * It does not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-alias
     */
    readonly alias?: string;
    /**
     * (optional) The ARN for a customer managed AWS KMS key to use for encrypting data within your workspace.
     *
     * For more information about using your own key in your workspace, see [Encryption at rest](https://docs.aws.amazon.com/prometheus/latest/userguide/encryption-at-rest-Amazon-Service-Prometheus.html) in the *Amazon Managed Service for Prometheus User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * Contains information about the logging configuration for the workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-loggingconfiguration
     */
    readonly loggingConfiguration?: cdk.IResolvable | CfnWorkspace.LoggingConfigurationProperty;
    /**
     * The list of tag keys and values that are associated with the workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * A scraper is a fully-managed agentless collector that discovers and pulls metrics automatically.
 *
 * A scraper pulls metrics from Prometheus-compatible sources within an Amazon EKS cluster, and sends them to your Amazon Managed Service for Prometheus workspace. Scrapers are flexible. You can configure the scraper to control what metrics are collected, the frequency of collection, what transformations are applied to the metrics, and more.
 *
 * An IAM role will be created for you that Amazon Managed Service for Prometheus uses to access the metrics in your cluster. You must configure this role with a policy that allows it to scrape metrics from your cluster. For more information, see [Configuring your Amazon EKS cluster](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-eks-setup) in the *Amazon Managed Service for Prometheus User Guide* .
 *
 * The `scrapeConfiguration` parameter contains the YAML configuration for the scraper.
 *
 * > For more information about collectors, including what metrics are collected, and how to configure the scraper, see [Using an AWS managed collector](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html) in the *Amazon Managed Service for Prometheus User Guide* .
 *
 * @cloudformationResource AWS::APS::Scraper
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html
 */
export declare class CfnScraper extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnScraper from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnScraper;
    /**
     * The Amazon Resource Name (ARN) of the scraper. For example, `arn:aws:aps:<region>:123456798012:scraper/s-example1-1234-abcd-5678-ef9012abcd34` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to discover and collect metrics on your behalf.
     *
     * For example, `arn:aws:iam::123456789012:role/service-role/AmazonGrafanaServiceRole-12example` .
     *
     * @cloudformationAttribute RoleArn
     */
    readonly attrRoleArn: string;
    /**
     * The ID of the scraper. For example, `s-example1-1234-abcd-5678-ef9012abcd34` .
     *
     * @cloudformationAttribute ScraperId
     */
    readonly attrScraperId: string;
    /**
     * An optional user-assigned scraper alias.
     */
    alias?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.
     */
    destination: CfnScraper.DestinationProperty | cdk.IResolvable;
    /**
     * The configuration in use by the scraper.
     */
    scrapeConfiguration: cdk.IResolvable | CfnScraper.ScrapeConfigurationProperty;
    /**
     * The Amazon EKS cluster from which the scraper collects metrics.
     */
    source: cdk.IResolvable | CfnScraper.SourceProperty;
    /**
     * (Optional) The list of tag keys and values associated with the scraper.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnScraperProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnScraper {
    /**
     * A scrape configuration for a scraper, base 64 encoded.
     *
     * For more information, see [Scraper configuration](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration) in the *Amazon Managed Service for Prometheus User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-scrapeconfiguration.html
     */
    interface ScrapeConfigurationProperty {
        /**
         * The base 64 encoded scrape configuration file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-scrapeconfiguration.html#cfn-aps-scraper-scrapeconfiguration-configurationblob
         */
        readonly configurationBlob: string;
    }
    /**
     * The source of collected metrics for a scraper.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-source.html
     */
    interface SourceProperty {
        /**
         * The Amazon EKS cluster from which a scraper collects metrics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-source.html#cfn-aps-scraper-source-eksconfiguration
         */
        readonly eksConfiguration: CfnScraper.EksConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The `EksConfiguration` structure describes the connection to the Amazon EKS cluster from which a scraper collects metrics.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-eksconfiguration.html
     */
    interface EksConfigurationProperty {
        /**
         * ARN of the Amazon EKS cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-eksconfiguration.html#cfn-aps-scraper-eksconfiguration-clusterarn
         */
        readonly clusterArn: string;
        /**
         * A list of the security group IDs for the Amazon EKS cluster VPC configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-eksconfiguration.html#cfn-aps-scraper-eksconfiguration-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * A list of subnet IDs for the Amazon EKS cluster VPC configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-eksconfiguration.html#cfn-aps-scraper-eksconfiguration-subnetids
         */
        readonly subnetIds: Array<string>;
    }
    /**
     * Where to send the metrics from a scraper.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-destination.html
     */
    interface DestinationProperty {
        /**
         * The Amazon Managed Service for Prometheus workspace to send metrics to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-destination.html#cfn-aps-scraper-destination-ampconfiguration
         */
        readonly ampConfiguration: CfnScraper.AmpConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The `AmpConfiguration` structure defines the Amazon Managed Service for Prometheus instance a scraper should send metrics to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-ampconfiguration.html
     */
    interface AmpConfigurationProperty {
        /**
         * ARN of the Amazon Managed Service for Prometheus workspace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-ampconfiguration.html#cfn-aps-scraper-ampconfiguration-workspacearn
         */
        readonly workspaceArn: string;
    }
}
/**
 * Properties for defining a `CfnScraper`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html
 */
export interface CfnScraperProps {
    /**
     * An optional user-assigned scraper alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-alias
     */
    readonly alias?: string;
    /**
     * The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-destination
     */
    readonly destination: CfnScraper.DestinationProperty | cdk.IResolvable;
    /**
     * The configuration in use by the scraper.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-scrapeconfiguration
     */
    readonly scrapeConfiguration: cdk.IResolvable | CfnScraper.ScrapeConfigurationProperty;
    /**
     * The Amazon EKS cluster from which the scraper collects metrics.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-source
     */
    readonly source: cdk.IResolvable | CfnScraper.SourceProperty;
    /**
     * (Optional) The list of tag keys and values associated with the scraper.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
