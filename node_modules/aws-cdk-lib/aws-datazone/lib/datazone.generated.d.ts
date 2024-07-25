import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::DataZone::DataSource` resource specifies an Amazon DataZone data source that is used to import technical metadata of assets (data) from the source databases or data warehouses into Amazon DataZone.
 *
 * @cloudformationResource AWS::DataZone::DataSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html
 */
export declare class CfnDataSource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataSource;
    /**
     * The timestamp of when the data source was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The ID of the Amazon DataZone domain in which the data source exists.
     *
     * @cloudformationAttribute DomainId
     */
    readonly attrDomainId: string;
    /**
     * The ID of the environment in which the data source exists.
     *
     * @cloudformationAttribute EnvironmentId
     */
    readonly attrEnvironmentId: string;
    /**
     * The identifier of the data source run.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The count of the assets created during the last data source run.
     *
     * @cloudformationAttribute LastRunAssetCount
     */
    readonly attrLastRunAssetCount: cdk.IResolvable;
    /**
     * The timestamp of when the data source run was last performed.
     *
     * @cloudformationAttribute LastRunAt
     */
    readonly attrLastRunAt: string;
    /**
     * The status of the last data source run.
     *
     * @cloudformationAttribute LastRunStatus
     */
    readonly attrLastRunStatus: string;
    /**
     * The project ID included in the data source run activity.
     *
     * @cloudformationAttribute ProjectId
     */
    readonly attrProjectId: string;
    /**
     * The status of the data source.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The timestamp of when the data source was updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The metadata forms attached to the assets that the data source works with.
     */
    assetFormsInput?: Array<CfnDataSource.FormInputProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The configuration of the data source.
     */
    configuration?: CfnDataSource.DataSourceConfigurationInputProperty | cdk.IResolvable;
    /**
     * The description of the data source.
     */
    description?: string;
    /**
     * The ID of the Amazon DataZone domain where the data source is created.
     */
    domainIdentifier: string;
    /**
     * Specifies whether the data source is enabled.
     */
    enableSetting?: string;
    /**
     * The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
     */
    environmentIdentifier: string;
    /**
     * The name of the data source.
     */
    name: string;
    /**
     * The identifier of the Amazon DataZone project in which you want to add this data source.
     */
    projectIdentifier: string;
    /**
     * Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.
     */
    publishOnImport?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the business name generation is to be enabled for this data source.
     */
    recommendation?: cdk.IResolvable | CfnDataSource.RecommendationConfigurationProperty;
    /**
     * The schedule of the data source runs.
     */
    schedule?: cdk.IResolvable | CfnDataSource.ScheduleConfigurationProperty;
    /**
     * The type of the data source.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataSourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataSource {
    /**
     * The details of a metadata form.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-forminput.html
     */
    interface FormInputProperty {
        /**
         * The content of the metadata form.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-forminput.html#cfn-datazone-datasource-forminput-content
         */
        readonly content?: string;
        /**
         * The name of the metadata form.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-forminput.html#cfn-datazone-datasource-forminput-formname
         */
        readonly formName: string;
        /**
         * The ID of the metadata form type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-forminput.html#cfn-datazone-datasource-forminput-typeidentifier
         */
        readonly typeIdentifier?: string;
        /**
         * The revision of the metadata form type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-forminput.html#cfn-datazone-datasource-forminput-typerevision
         */
        readonly typeRevision?: string;
    }
    /**
     * The configuration of the data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-datasourceconfigurationinput.html
     */
    interface DataSourceConfigurationInputProperty {
        /**
         * The configuration of the AWS Glue data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-datasourceconfigurationinput.html#cfn-datazone-datasource-datasourceconfigurationinput-gluerunconfiguration
         */
        readonly glueRunConfiguration?: CfnDataSource.GlueRunConfigurationInputProperty | cdk.IResolvable;
        /**
         * The configuration of the Amazon Redshift data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-datasourceconfigurationinput.html#cfn-datazone-datasource-datasourceconfigurationinput-redshiftrunconfiguration
         */
        readonly redshiftRunConfiguration?: cdk.IResolvable | CfnDataSource.RedshiftRunConfigurationInputProperty;
    }
    /**
     * The configuration details of the AWS Glue data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-gluerunconfigurationinput.html
     */
    interface GlueRunConfigurationInputProperty {
        /**
         * Specifies whether to automatically import data quality metrics as part of the data source run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-gluerunconfigurationinput.html#cfn-datazone-datasource-gluerunconfigurationinput-autoimportdataqualityresult
         */
        readonly autoImportDataQualityResult?: boolean | cdk.IResolvable;
        /**
         * The data access role included in the configuration details of the AWS Glue data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-gluerunconfigurationinput.html#cfn-datazone-datasource-gluerunconfigurationinput-dataaccessrole
         */
        readonly dataAccessRole?: string;
        /**
         * The relational filter configurations included in the configuration details of the AWS Glue data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-gluerunconfigurationinput.html#cfn-datazone-datasource-gluerunconfigurationinput-relationalfilterconfigurations
         */
        readonly relationalFilterConfigurations: Array<cdk.IResolvable | CfnDataSource.RelationalFilterConfigurationProperty> | cdk.IResolvable;
    }
    /**
     * The relational filter configuration for the data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-relationalfilterconfiguration.html
     */
    interface RelationalFilterConfigurationProperty {
        /**
         * The database name specified in the relational filter configuration for the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-relationalfilterconfiguration.html#cfn-datazone-datasource-relationalfilterconfiguration-databasename
         */
        readonly databaseName: string;
        /**
         * The filter expressions specified in the relational filter configuration for the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-relationalfilterconfiguration.html#cfn-datazone-datasource-relationalfilterconfiguration-filterexpressions
         */
        readonly filterExpressions?: Array<CfnDataSource.FilterExpressionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The schema name specified in the relational filter configuration for the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-relationalfilterconfiguration.html#cfn-datazone-datasource-relationalfilterconfiguration-schemaname
         */
        readonly schemaName?: string;
    }
    /**
     * A filter expression in Amazon DataZone.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-filterexpression.html
     */
    interface FilterExpressionProperty {
        /**
         * The search filter expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-filterexpression.html#cfn-datazone-datasource-filterexpression-expression
         */
        readonly expression: string;
        /**
         * The search filter explresison type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-filterexpression.html#cfn-datazone-datasource-filterexpression-type
         */
        readonly type: string;
    }
    /**
     * The relational filter configurations included in the configuration details of the Amazon Redshift data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftrunconfigurationinput.html
     */
    interface RedshiftRunConfigurationInputProperty {
        /**
         * The data access role included in the configuration details of the Amazon Redshift data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftrunconfigurationinput.html#cfn-datazone-datasource-redshiftrunconfigurationinput-dataaccessrole
         */
        readonly dataAccessRole?: string;
        /**
         * The details of the credentials required to access an Amazon Redshift cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftrunconfigurationinput.html#cfn-datazone-datasource-redshiftrunconfigurationinput-redshiftcredentialconfiguration
         */
        readonly redshiftCredentialConfiguration: cdk.IResolvable | CfnDataSource.RedshiftCredentialConfigurationProperty;
        /**
         * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftrunconfigurationinput.html#cfn-datazone-datasource-redshiftrunconfigurationinput-redshiftstorage
         */
        readonly redshiftStorage: cdk.IResolvable | CfnDataSource.RedshiftStorageProperty;
        /**
         * The relational filter configurations included in the configuration details of the AWS Glue data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftrunconfigurationinput.html#cfn-datazone-datasource-redshiftrunconfigurationinput-relationalfilterconfigurations
         */
        readonly relationalFilterConfigurations: Array<cdk.IResolvable | CfnDataSource.RelationalFilterConfigurationProperty> | cdk.IResolvable;
    }
    /**
     * The details of the credentials required to access an Amazon Redshift cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftcredentialconfiguration.html
     */
    interface RedshiftCredentialConfigurationProperty {
        /**
         * The ARN of a secret manager for an Amazon Redshift cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftcredentialconfiguration.html#cfn-datazone-datasource-redshiftcredentialconfiguration-secretmanagerarn
         */
        readonly secretManagerArn: string;
    }
    /**
     * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftstorage.html
     */
    interface RedshiftStorageProperty {
        /**
         * The details of the Amazon Redshift cluster source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftstorage.html#cfn-datazone-datasource-redshiftstorage-redshiftclustersource
         */
        readonly redshiftClusterSource?: cdk.IResolvable | CfnDataSource.RedshiftClusterStorageProperty;
        /**
         * The details of the Amazon Redshift Serverless workgroup source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftstorage.html#cfn-datazone-datasource-redshiftstorage-redshiftserverlesssource
         */
        readonly redshiftServerlessSource?: cdk.IResolvable | CfnDataSource.RedshiftServerlessStorageProperty;
    }
    /**
     * The details of the Amazon Redshift cluster storage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftclusterstorage.html
     */
    interface RedshiftClusterStorageProperty {
        /**
         * The name of an Amazon Redshift cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftclusterstorage.html#cfn-datazone-datasource-redshiftclusterstorage-clustername
         */
        readonly clusterName: string;
    }
    /**
     * The details of the Amazon Redshift Serverless workgroup storage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftserverlessstorage.html
     */
    interface RedshiftServerlessStorageProperty {
        /**
         * The name of the Amazon Redshift Serverless workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftserverlessstorage.html#cfn-datazone-datasource-redshiftserverlessstorage-workgroupname
         */
        readonly workgroupName: string;
    }
    /**
     * The recommendation configuration for the data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-recommendationconfiguration.html
     */
    interface RecommendationConfigurationProperty {
        /**
         * Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-recommendationconfiguration.html#cfn-datazone-datasource-recommendationconfiguration-enablebusinessnamegeneration
         */
        readonly enableBusinessNameGeneration?: boolean | cdk.IResolvable;
    }
    /**
     * The details of the schedule of the data source runs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-scheduleconfiguration.html
     */
    interface ScheduleConfigurationProperty {
        /**
         * The schedule of the data source runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-scheduleconfiguration.html#cfn-datazone-datasource-scheduleconfiguration-schedule
         */
        readonly schedule?: string;
        /**
         * The timezone of the data source run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-scheduleconfiguration.html#cfn-datazone-datasource-scheduleconfiguration-timezone
         */
        readonly timezone?: string;
    }
}
/**
 * Properties for defining a `CfnDataSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html
 */
export interface CfnDataSourceProps {
    /**
     * The metadata forms attached to the assets that the data source works with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-assetformsinput
     */
    readonly assetFormsInput?: Array<CfnDataSource.FormInputProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The configuration of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-configuration
     */
    readonly configuration?: CfnDataSource.DataSourceConfigurationInputProperty | cdk.IResolvable;
    /**
     * The description of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-description
     */
    readonly description?: string;
    /**
     * The ID of the Amazon DataZone domain where the data source is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-domainidentifier
     */
    readonly domainIdentifier: string;
    /**
     * Specifies whether the data source is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-enablesetting
     */
    readonly enableSetting?: string;
    /**
     * The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-environmentidentifier
     */
    readonly environmentIdentifier: string;
    /**
     * The name of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-name
     */
    readonly name: string;
    /**
     * The identifier of the Amazon DataZone project in which you want to add this data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-projectidentifier
     */
    readonly projectIdentifier: string;
    /**
     * Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-publishonimport
     */
    readonly publishOnImport?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the business name generation is to be enabled for this data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-recommendation
     */
    readonly recommendation?: cdk.IResolvable | CfnDataSource.RecommendationConfigurationProperty;
    /**
     * The schedule of the data source runs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-schedule
     */
    readonly schedule?: cdk.IResolvable | CfnDataSource.ScheduleConfigurationProperty;
    /**
     * The type of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-type
     */
    readonly type: string;
}
/**
 * The `AWS::DataZone::Domain` resource specifies an Amazon DataZone domain.
 *
 * You can use domains to organize your assets, users, and their projects.
 *
 * @cloudformationResource AWS::DataZone::Domain
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html
 */
export declare class CfnDomain extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomain from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomain;
    /**
     * The ARN of the Amazon DataZone domain.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A timestamp of when a Amazon DataZone domain was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The ID of the Amazon DataZone domain.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A timestamp of when a Amazon DataZone domain was last updated.
     *
     * @cloudformationAttribute LastUpdatedAt
     */
    readonly attrLastUpdatedAt: string;
    /**
     * The identifier of the AWS account that manages the domain.
     *
     * @cloudformationAttribute ManagedAccountId
     */
    readonly attrManagedAccountId: string;
    /**
     * The data portal URL for the Amazon DataZone domain.
     *
     * @cloudformationAttribute PortalUrl
     */
    readonly attrPortalUrl: string;
    /**
     * The status of the Amazon DataZone domain.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the Amazon DataZone domain.
     */
    description?: string;
    /**
     * The domain execution role that is created when an Amazon DataZone domain is created.
     */
    domainExecutionRole: string;
    /**
     * The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.
     */
    kmsKeyIdentifier?: string;
    /**
     * The name of the Amazon DataZone domain.
     */
    name: string;
    /**
     * The single sign-on details in Amazon DataZone.
     */
    singleSignOn?: cdk.IResolvable | CfnDomain.SingleSignOnProperty;
    /**
     * The tags specified for the Amazon DataZone domain.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDomainProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDomain {
    /**
     * The single sign-on details in Amazon DataZone.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-domain-singlesignon.html
     */
    interface SingleSignOnProperty {
        /**
         * The type of single sign-on in Amazon DataZone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-domain-singlesignon.html#cfn-datazone-domain-singlesignon-type
         */
        readonly type?: string;
        /**
         * The single sign-on user assignment in Amazon DataZone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-domain-singlesignon.html#cfn-datazone-domain-singlesignon-userassignment
         */
        readonly userAssignment?: string;
    }
}
/**
 * Properties for defining a `CfnDomain`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html
 */
export interface CfnDomainProps {
    /**
     * The description of the Amazon DataZone domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-description
     */
    readonly description?: string;
    /**
     * The domain execution role that is created when an Amazon DataZone domain is created.
     *
     * The domain execution role is created in the AWS account that houses the Amazon DataZone domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-domainexecutionrole
     */
    readonly domainExecutionRole: string;
    /**
     * The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-kmskeyidentifier
     */
    readonly kmsKeyIdentifier?: string;
    /**
     * The name of the Amazon DataZone domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-name
     */
    readonly name: string;
    /**
     * The single sign-on details in Amazon DataZone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-singlesignon
     */
    readonly singleSignOn?: cdk.IResolvable | CfnDomain.SingleSignOnProperty;
    /**
     * The tags specified for the Amazon DataZone domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DataZone::Environment` resource specifies an Amazon DataZone environment, which is a collection of zero or more configured resources with a given set of IAM principals who can operate on those resources.
 *
 * @cloudformationResource AWS::DataZone::Environment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html
 */
export declare class CfnEnvironment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnvironment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnvironment;
    /**
     * The identifier of the AWS account in which an environment exists.
     *
     * @cloudformationAttribute AwsAccountId
     */
    readonly attrAwsAccountId: string;
    /**
     * The AWS Region in which an environment exists.
     *
     * @cloudformationAttribute AwsAccountRegion
     */
    readonly attrAwsAccountRegion: string;
    /**
     * The timestamp of when the environment was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon DataZone user who created the environment.
     *
     * @cloudformationAttribute CreatedBy
     */
    readonly attrCreatedBy: string;
    /**
     * The identifier of the Amazon DataZone domain in which the environment exists.
     *
     * @cloudformationAttribute DomainId
     */
    readonly attrDomainId: string;
    /**
     * The identifier of a blueprint with which an environment profile is created.
     *
     * @cloudformationAttribute EnvironmentBlueprintId
     */
    readonly attrEnvironmentBlueprintId: string;
    /**
     * The identifier of the environment profile with which the environment was created.
     *
     * @cloudformationAttribute EnvironmentProfileId
     */
    readonly attrEnvironmentProfileId: string;
    /**
     * The identifier of the environment.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The identifier of the project in which the environment exists.
     *
     * @cloudformationAttribute ProjectId
     */
    readonly attrProjectId: string;
    /**
     * The provider of the environment.
     *
     * @cloudformationAttribute Provider
     */
    readonly attrProvider: string;
    /**
     * The status of the environment.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The timestamp of when the environment was updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The description of the environment.
     */
    description?: string;
    /**
     * The identifier of the Amazon DataZone domain in which the environment is created.
     */
    domainIdentifier: string;
    /**
     * The identifier of the environment profile that is used to create this Amazon DataZone environment.
     */
    environmentProfileIdentifier: string;
    /**
     * The glossary terms that can be used in this Amazon DataZone environment.
     */
    glossaryTerms?: Array<string>;
    /**
     * The name of the Amazon DataZone environment.
     */
    name: string;
    /**
     * The identifier of the Amazon DataZone project in which this environment is created.
     */
    projectIdentifier: string;
    /**
     * The user parameters of this Amazon DataZone environment.
     */
    userParameters?: Array<CfnEnvironment.EnvironmentParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEnvironmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEnvironment {
    /**
     * The parameter details of the environment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environment-environmentparameter.html
     */
    interface EnvironmentParameterProperty {
        /**
         * The name of the environment parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environment-environmentparameter.html#cfn-datazone-environment-environmentparameter-name
         */
        readonly name?: string;
        /**
         * The value of the environment parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environment-environmentparameter.html#cfn-datazone-environment-environmentparameter-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnEnvironment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html
 */
export interface CfnEnvironmentProps {
    /**
     * The description of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-description
     */
    readonly description?: string;
    /**
     * The identifier of the Amazon DataZone domain in which the environment is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-domainidentifier
     */
    readonly domainIdentifier: string;
    /**
     * The identifier of the environment profile that is used to create this Amazon DataZone environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-environmentprofileidentifier
     */
    readonly environmentProfileIdentifier: string;
    /**
     * The glossary terms that can be used in this Amazon DataZone environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-glossaryterms
     */
    readonly glossaryTerms?: Array<string>;
    /**
     * The name of the Amazon DataZone environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-name
     */
    readonly name: string;
    /**
     * The identifier of the Amazon DataZone project in which this environment is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-projectidentifier
     */
    readonly projectIdentifier: string;
    /**
     * The user parameters of this Amazon DataZone environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-userparameters
     */
    readonly userParameters?: Array<CfnEnvironment.EnvironmentParameterProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * The configuration details of an environment blueprint.
 *
 * @cloudformationResource AWS::DataZone::EnvironmentBlueprintConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html
 */
export declare class CfnEnvironmentBlueprintConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnvironmentBlueprintConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnvironmentBlueprintConfiguration;
    /**
     * The timestamp of when an environment blueprint was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The identifier of the Amazon DataZone domain in which an environment blueprint exists.
     *
     * @cloudformationAttribute DomainId
     */
    readonly attrDomainId: string;
    /**
     * The identifier of the environment blueprint. This identifier should be used when creating environment profiles.
     *
     * @cloudformationAttribute EnvironmentBlueprintId
     */
    readonly attrEnvironmentBlueprintId: string;
    /**
     * The timestamp of when the environment blueprint was updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The identifier of the Amazon DataZone domain in which an environment blueprint exists.
     */
    domainIdentifier: string;
    /**
     * The enabled AWS Regions specified in a blueprint configuration.
     */
    enabledRegions: Array<string>;
    /**
     * The identifier of the environment blueprint.
     */
    environmentBlueprintIdentifier: string;
    /**
     * The ARN of the manage access role.
     */
    manageAccessRoleArn?: string;
    /**
     * The ARN of the provisioning role.
     */
    provisioningRoleArn?: string;
    /**
     * The regional parameters of the environment blueprint.
     */
    regionalParameters?: Array<cdk.IResolvable | CfnEnvironmentBlueprintConfiguration.RegionalParameterProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEnvironmentBlueprintConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEnvironmentBlueprintConfiguration {
    /**
     * The regional parameters in the environment blueprint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentblueprintconfiguration-regionalparameter.html
     */
    interface RegionalParameterProperty {
        /**
         * A string to string map containing parameters for the region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentblueprintconfiguration-regionalparameter.html#cfn-datazone-environmentblueprintconfiguration-regionalparameter-parameters
         */
        readonly parameters?: cdk.IResolvable | Record<string, string>;
        /**
         * The region specified in the environment parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentblueprintconfiguration-regionalparameter.html#cfn-datazone-environmentblueprintconfiguration-regionalparameter-region
         */
        readonly region?: string;
    }
}
/**
 * Properties for defining a `CfnEnvironmentBlueprintConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html
 */
export interface CfnEnvironmentBlueprintConfigurationProps {
    /**
     * The identifier of the Amazon DataZone domain in which an environment blueprint exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-domainidentifier
     */
    readonly domainIdentifier: string;
    /**
     * The enabled AWS Regions specified in a blueprint configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-enabledregions
     */
    readonly enabledRegions: Array<string>;
    /**
     * The identifier of the environment blueprint.
     *
     * In the current release, only the following values are supported: `DefaultDataLake` and `DefaultDataWarehouse` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-environmentblueprintidentifier
     */
    readonly environmentBlueprintIdentifier: string;
    /**
     * The ARN of the manage access role.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-manageaccessrolearn
     */
    readonly manageAccessRoleArn?: string;
    /**
     * The ARN of the provisioning role.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-provisioningrolearn
     */
    readonly provisioningRoleArn?: string;
    /**
     * The regional parameters of the environment blueprint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-regionalparameters
     */
    readonly regionalParameters?: Array<cdk.IResolvable | CfnEnvironmentBlueprintConfiguration.RegionalParameterProperty> | cdk.IResolvable;
}
/**
 * The details of an environment profile.
 *
 * @cloudformationResource AWS::DataZone::EnvironmentProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html
 */
export declare class CfnEnvironmentProfile extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnvironmentProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnvironmentProfile;
    /**
     * The timestamp of when an environment profile was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon DataZone user who created the environment profile.
     *
     * @cloudformationAttribute CreatedBy
     */
    readonly attrCreatedBy: string;
    /**
     * The identifier of the Amazon DataZone domain in which the environment profile exists.
     *
     * @cloudformationAttribute DomainId
     */
    readonly attrDomainId: string;
    /**
     * The identifier of a blueprint with which an environment profile is created.
     *
     * @cloudformationAttribute EnvironmentBlueprintId
     */
    readonly attrEnvironmentBlueprintId: string;
    /**
     * The identifier of the environment profile.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The identifier of a project in which an environment profile exists.
     *
     * @cloudformationAttribute ProjectId
     */
    readonly attrProjectId: string;
    /**
     * The timestamp of when the environment profile was updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The identifier of an AWS account in which an environment profile exists.
     */
    awsAccountId: string;
    /**
     * The AWS Region in which an environment profile exists.
     */
    awsAccountRegion: string;
    /**
     * The description of the environment profile.
     */
    description?: string;
    /**
     * The identifier of the Amazon DataZone domain in which the environment profile exists.
     */
    domainIdentifier: string;
    /**
     * The identifier of a blueprint with which an environment profile is created.
     */
    environmentBlueprintIdentifier: string;
    /**
     * The name of the environment profile.
     */
    name: string;
    /**
     * The identifier of a project in which an environment profile exists.
     */
    projectIdentifier: string;
    /**
     * The user parameters of this Amazon DataZone environment profile.
     */
    userParameters?: Array<CfnEnvironmentProfile.EnvironmentParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEnvironmentProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEnvironmentProfile {
    /**
     * The parameter details of an environment profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentprofile-environmentparameter.html
     */
    interface EnvironmentParameterProperty {
        /**
         * The name specified in the environment parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentprofile-environmentparameter.html#cfn-datazone-environmentprofile-environmentparameter-name
         */
        readonly name?: string;
        /**
         * The value of the environment profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentprofile-environmentparameter.html#cfn-datazone-environmentprofile-environmentparameter-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnEnvironmentProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html
 */
export interface CfnEnvironmentProfileProps {
    /**
     * The identifier of an AWS account in which an environment profile exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-awsaccountid
     */
    readonly awsAccountId: string;
    /**
     * The AWS Region in which an environment profile exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-awsaccountregion
     */
    readonly awsAccountRegion: string;
    /**
     * The description of the environment profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-description
     */
    readonly description?: string;
    /**
     * The identifier of the Amazon DataZone domain in which the environment profile exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-domainidentifier
     */
    readonly domainIdentifier: string;
    /**
     * The identifier of a blueprint with which an environment profile is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-environmentblueprintidentifier
     */
    readonly environmentBlueprintIdentifier: string;
    /**
     * The name of the environment profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-name
     */
    readonly name: string;
    /**
     * The identifier of a project in which an environment profile exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-projectidentifier
     */
    readonly projectIdentifier: string;
    /**
     * The user parameters of this Amazon DataZone environment profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-userparameters
     */
    readonly userParameters?: Array<CfnEnvironmentProfile.EnvironmentParameterProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * The details of a group profile in Amazon DataZone.
 *
 * @cloudformationResource AWS::DataZone::GroupProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-groupprofile.html
 */
export declare class CfnGroupProfile extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGroupProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGroupProfile;
    /**
     * The identifier of the Amazon DataZone domain in which a group profile exists.
     *
     * @cloudformationAttribute DomainId
     */
    readonly attrDomainId: string;
    /**
     * The name of a group profile.
     *
     * @cloudformationAttribute GroupName
     */
    readonly attrGroupName: string;
    /**
     * The ID of a group profile.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The identifier of the Amazon DataZone domain in which a group profile exists.
     */
    domainIdentifier: string;
    /**
     * The ID of the group of a project member.
     */
    groupIdentifier: string;
    /**
     * The status of a group profile.
     */
    status?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGroupProfileProps);
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
 * Properties for defining a `CfnGroupProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-groupprofile.html
 */
export interface CfnGroupProfileProps {
    /**
     * The identifier of the Amazon DataZone domain in which a group profile exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-groupprofile.html#cfn-datazone-groupprofile-domainidentifier
     */
    readonly domainIdentifier: string;
    /**
     * The ID of the group of a project member.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-groupprofile.html#cfn-datazone-groupprofile-groupidentifier
     */
    readonly groupIdentifier: string;
    /**
     * The status of a group profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-groupprofile.html#cfn-datazone-groupprofile-status
     */
    readonly status?: string;
}
/**
 * The `AWS::DataZone::Project` resource specifies an Amazon DataZone project.
 *
 * Projects enable a group of users to collaborate on various business use cases that involve publishing, discovering, subscribing to, and consuming data in the Amazon DataZone catalog. Project members consume assets from the Amazon DataZone catalog and produce new assets using one or more analytical workflows.
 *
 * @cloudformationResource AWS::DataZone::Project
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html
 */
export declare class CfnProject extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProject from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProject;
    /**
     * The timestamp of when a project was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon DataZone user who created the project.
     *
     * @cloudformationAttribute CreatedBy
     */
    readonly attrCreatedBy: string;
    /**
     * The identifier of a Amazon DataZone domain where the project exists.
     *
     * @cloudformationAttribute DomainId
     */
    readonly attrDomainId: string;
    /**
     * The identifier of a project.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The timestamp of when the project was last updated.
     *
     * @cloudformationAttribute LastUpdatedAt
     */
    readonly attrLastUpdatedAt: string;
    /**
     * The description of a project.
     */
    description?: string;
    /**
     * The identifier of a Amazon DataZone domain where the project exists.
     */
    domainIdentifier: string;
    /**
     * The glossary terms that can be used in this Amazon DataZone project.
     */
    glossaryTerms?: Array<string>;
    /**
     * The name of a project.
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProjectProps);
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
 * Properties for defining a `CfnProject`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html
 */
export interface CfnProjectProps {
    /**
     * The description of a project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-description
     */
    readonly description?: string;
    /**
     * The identifier of a Amazon DataZone domain where the project exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-domainidentifier
     */
    readonly domainIdentifier: string;
    /**
     * The glossary terms that can be used in this Amazon DataZone project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-glossaryterms
     */
    readonly glossaryTerms?: Array<string>;
    /**
     * The name of a project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-name
     */
    readonly name: string;
}
/**
 * The `AWS::DataZone::ProjectMembership` resource adds a member to an Amazon DataZone project.
 *
 * Project members consume assets from the Amazon DataZone catalog and produce new assets using one or more analytical workflows.
 *
 * @cloudformationResource AWS::DataZone::ProjectMembership
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html
 */
export declare class CfnProjectMembership extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProjectMembership from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProjectMembership;
    /**
     * The designated role of a project member.
     */
    designation: string;
    /**
     * The ID of the Amazon DataZone domain in which project membership is created.
     */
    domainIdentifier: string;
    /**
     * The details about a project member.
     */
    member: cdk.IResolvable | CfnProjectMembership.MemberProperty;
    /**
     * The ID of the project for which this project membership was created.
     */
    projectIdentifier: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProjectMembershipProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnProjectMembership {
    /**
     * The details about a project member.
     *
     * Important - this data type is a UNION, so only one of the following members can be specified when used or returned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectmembership-member.html
     */
    interface MemberProperty {
        /**
         * The ID of the group of a project member.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectmembership-member.html#cfn-datazone-projectmembership-member-groupidentifier
         */
        readonly groupIdentifier?: string;
        /**
         * The user ID of a project member.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectmembership-member.html#cfn-datazone-projectmembership-member-useridentifier
         */
        readonly userIdentifier?: string;
    }
}
/**
 * Properties for defining a `CfnProjectMembership`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html
 */
export interface CfnProjectMembershipProps {
    /**
     * The designated role of a project member.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#cfn-datazone-projectmembership-designation
     */
    readonly designation: string;
    /**
     * The ID of the Amazon DataZone domain in which project membership is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#cfn-datazone-projectmembership-domainidentifier
     */
    readonly domainIdentifier: string;
    /**
     * The details about a project member.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#cfn-datazone-projectmembership-member
     */
    readonly member: cdk.IResolvable | CfnProjectMembership.MemberProperty;
    /**
     * The ID of the project for which this project membership was created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#cfn-datazone-projectmembership-projectidentifier
     */
    readonly projectIdentifier: string;
}
/**
 * The `AWS::DataZone::SubscriptionTarget` resource specifies an Amazon DataZone subscription target.
 *
 * Subscription targets enable you to access the data to which you have subscribed in your projects. A subscription target specifies the location (for example, a database or a schema) and the required permissions (for example, an IAM role) that Amazon DataZone can use to establish a connection with the source data and to create the necessary grants so that members of the Amazon DataZone project can start querying the data to which they have subscribed.
 *
 * @cloudformationResource AWS::DataZone::SubscriptionTarget
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html
 */
export declare class CfnSubscriptionTarget extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSubscriptionTarget from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSubscriptionTarget;
    /**
     * The timestamp of when the subscription target was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon DataZone user who created the subscription target.
     *
     * @cloudformationAttribute CreatedBy
     */
    readonly attrCreatedBy: string;
    /**
     * The identifier of the Amazon DataZone domain in which the subscription target exists.
     *
     * @cloudformationAttribute DomainId
     */
    readonly attrDomainId: string;
    /**
     * The identifier of the environment of the subscription target.
     *
     * @cloudformationAttribute EnvironmentId
     */
    readonly attrEnvironmentId: string;
    /**
     * The identifier of the subscription target.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The identifier of the project specified in the subscription target.
     *
     * @cloudformationAttribute ProjectId
     */
    readonly attrProjectId: string;
    /**
     * The timestamp of when the subscription target was updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The Amazon DataZone user who updated the subscription target.
     *
     * @cloudformationAttribute UpdatedBy
     */
    readonly attrUpdatedBy: string;
    /**
     * The asset types included in the subscription target.
     */
    applicableAssetTypes: Array<string>;
    /**
     * The authorized principals included in the subscription target.
     */
    authorizedPrincipals: Array<string>;
    /**
     * The ID of the Amazon DataZone domain in which subscription target is created.
     */
    domainIdentifier: string;
    /**
     * The ID of the environment in which subscription target is created.
     */
    environmentIdentifier: string;
    /**
     * The manage access role that is used to create the subscription target.
     */
    manageAccessRole: string;
    /**
     * The name of the subscription target.
     */
    name: string;
    /**
     * The provider of the subscription target.
     */
    provider?: string;
    /**
     * The configuration of the subscription target.
     */
    subscriptionTargetConfig: Array<cdk.IResolvable | CfnSubscriptionTarget.SubscriptionTargetFormProperty> | cdk.IResolvable;
    /**
     * The type of the subscription target.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSubscriptionTargetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSubscriptionTarget {
    /**
     * The details of the subscription target configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-subscriptiontarget-subscriptiontargetform.html
     */
    interface SubscriptionTargetFormProperty {
        /**
         * The content of the subscription target configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-subscriptiontarget-subscriptiontargetform.html#cfn-datazone-subscriptiontarget-subscriptiontargetform-content
         */
        readonly content: string;
        /**
         * The form name included in the subscription target configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-subscriptiontarget-subscriptiontargetform.html#cfn-datazone-subscriptiontarget-subscriptiontargetform-formname
         */
        readonly formName: string;
    }
}
/**
 * Properties for defining a `CfnSubscriptionTarget`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html
 */
export interface CfnSubscriptionTargetProps {
    /**
     * The asset types included in the subscription target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-applicableassettypes
     */
    readonly applicableAssetTypes: Array<string>;
    /**
     * The authorized principals included in the subscription target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-authorizedprincipals
     */
    readonly authorizedPrincipals: Array<string>;
    /**
     * The ID of the Amazon DataZone domain in which subscription target is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-domainidentifier
     */
    readonly domainIdentifier: string;
    /**
     * The ID of the environment in which subscription target is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-environmentidentifier
     */
    readonly environmentIdentifier: string;
    /**
     * The manage access role that is used to create the subscription target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-manageaccessrole
     */
    readonly manageAccessRole: string;
    /**
     * The name of the subscription target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-name
     */
    readonly name: string;
    /**
     * The provider of the subscription target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-provider
     */
    readonly provider?: string;
    /**
     * The configuration of the subscription target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-subscriptiontargetconfig
     */
    readonly subscriptionTargetConfig: Array<cdk.IResolvable | CfnSubscriptionTarget.SubscriptionTargetFormProperty> | cdk.IResolvable;
    /**
     * The type of the subscription target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-type
     */
    readonly type: string;
}
/**
 * The user type of the user for which the user profile is created.
 *
 * @cloudformationResource AWS::DataZone::UserProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html
 */
export declare class CfnUserProfile extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserProfile;
    /**
     * @cloudformationAttribute Details
     */
    readonly attrDetails: cdk.IResolvable;
    /**
     * The identifier of a Amazon DataZone domain in which a user profile exists.
     *
     * @cloudformationAttribute DomainId
     */
    readonly attrDomainId: string;
    /**
     * The ID of the user profile.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The type of the user profile.
     *
     * @cloudformationAttribute Type
     */
    readonly attrType: string;
    /**
     * The identifier of a Amazon DataZone domain in which a user profile exists.
     */
    domainIdentifier: string;
    /**
     * The status of the user profile.
     */
    status?: string;
    /**
     * The identifier of the user for which the user profile is created.
     */
    userIdentifier: string;
    /**
     * The user type of the user for which the user profile is created.
     */
    userType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUserProfile {
    /**
     * The details of the user profile in Amazon DataZone.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-userprofiledetails.html
     */
    interface UserProfileDetailsProperty {
        /**
         * The IAM details included in the user profile details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-userprofiledetails.html#cfn-datazone-userprofile-userprofiledetails-iam
         */
        readonly iam?: CfnUserProfile.IamUserProfileDetailsProperty | cdk.IResolvable;
        /**
         * The single sign-on details included in the user profile details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-userprofiledetails.html#cfn-datazone-userprofile-userprofiledetails-sso
         */
        readonly sso?: cdk.IResolvable | CfnUserProfile.SsoUserProfileDetailsProperty;
    }
    /**
     * The details of an IAM user profile in Amazon DataZone.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-iamuserprofiledetails.html
     */
    interface IamUserProfileDetailsProperty {
        /**
         * The ARN of an IAM user profile in Amazon DataZone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-iamuserprofiledetails.html#cfn-datazone-userprofile-iamuserprofiledetails-arn
         */
        readonly arn?: string;
    }
    /**
     * The single sign-on details of the user profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-ssouserprofiledetails.html
     */
    interface SsoUserProfileDetailsProperty {
        /**
         * The first name included in the single sign-on details of the user profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-ssouserprofiledetails.html#cfn-datazone-userprofile-ssouserprofiledetails-firstname
         */
        readonly firstName?: string;
        /**
         * The last name included in the single sign-on details of the user profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-ssouserprofiledetails.html#cfn-datazone-userprofile-ssouserprofiledetails-lastname
         */
        readonly lastName?: string;
        /**
         * The username included in the single sign-on details of the user profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-ssouserprofiledetails.html#cfn-datazone-userprofile-ssouserprofiledetails-username
         */
        readonly username?: string;
    }
}
/**
 * Properties for defining a `CfnUserProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html
 */
export interface CfnUserProfileProps {
    /**
     * The identifier of a Amazon DataZone domain in which a user profile exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html#cfn-datazone-userprofile-domainidentifier
     */
    readonly domainIdentifier: string;
    /**
     * The status of the user profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html#cfn-datazone-userprofile-status
     */
    readonly status?: string;
    /**
     * The identifier of the user for which the user profile is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html#cfn-datazone-userprofile-useridentifier
     */
    readonly userIdentifier: string;
    /**
     * The user type of the user for which the user profile is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html#cfn-datazone-userprofile-usertype
     */
    readonly userType?: string;
}
