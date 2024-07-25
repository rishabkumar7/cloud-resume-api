import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an empty dataset and adds it to the specified dataset group.
 *
 * Use [CreateDatasetImportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html) to import your training data to a dataset.
 *
 * There are 5 types of datasets:
 *
 * - Item interactions
 * - Items
 * - Users
 * - Action interactions (you can't use CloudFormation to create an Action interactions dataset)
 * - Actions (you can't use CloudFormation to create an Actions dataset)
 *
 * Each dataset type has an associated schema with required field types. Only the `Item interactions` dataset is required in order to train a model (also referred to as creating a solution).
 *
 * A dataset can be in one of the following states:
 *
 * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
 * - DELETE PENDING > DELETE IN_PROGRESS
 *
 * To get the status of the dataset, call [DescribeDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html) .
 *
 * **Related APIs** - [CreateDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html)
 * - [ListDatasets](https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html)
 * - [DescribeDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html)
 * - [DeleteDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html)
 *
 * @cloudformationResource AWS::Personalize::Dataset
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html
 */
export declare class CfnDataset extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataset from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataset;
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     *
     * @cloudformationAttribute DatasetArn
     */
    readonly attrDatasetArn: string;
    /**
     * The Amazon Resource Name (ARN) of the dataset group.
     */
    datasetGroupArn: string;
    /**
     * Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset.
     */
    datasetImportJob?: CfnDataset.DatasetImportJobProperty | cdk.IResolvable;
    /**
     * One of the following values:.
     */
    datasetType: string;
    /**
     * The name of the dataset.
     */
    name: string;
    /**
     * The ARN of the associated schema.
     */
    schemaArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDatasetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataset {
    /**
     * Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset.
     *
     * A dataset import job can be in one of the following states:
     *
     * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
     *
     * If you specify a dataset import job as part of a dataset, all dataset import job fields are required.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasetimportjob.html
     */
    interface DatasetImportJobProperty {
        /**
         * The Amazon Resource Name (ARN) of the dataset that receives the imported data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasetimportjob.html#cfn-personalize-dataset-datasetimportjob-datasetarn
         */
        readonly datasetArn?: string;
        /**
         * The ARN of the dataset import job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasetimportjob.html#cfn-personalize-dataset-datasetimportjob-datasetimportjobarn
         */
        readonly datasetImportJobArn?: string;
        /**
         * The Amazon S3 bucket that contains the training data to import.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasetimportjob.html#cfn-personalize-dataset-datasetimportjob-datasource
         */
        readonly dataSource?: any | cdk.IResolvable;
        /**
         * The name of the import job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasetimportjob.html#cfn-personalize-dataset-datasetimportjob-jobname
         */
        readonly jobName?: string;
        /**
         * The ARN of the IAM role that has permissions to read from the Amazon S3 data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasetimportjob.html#cfn-personalize-dataset-datasetimportjob-rolearn
         */
        readonly roleArn?: string;
    }
    /**
     * Describes the data source that contains the data to upload to a dataset, or the list of records to delete from Amazon Personalize.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasource.html
     */
    interface DataSourceProperty {
        /**
         * For dataset import jobs, the path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.
         *
         * For data deletion jobs, the path to the Amazon S3 bucket that stores the list of records to delete.
         *
         * For example:
         *
         * `s3://bucket-name/folder-name/fileName.csv`
         *
         * If your CSV files are in a folder in your Amazon S3 bucket and you want your import job or data deletion job to consider multiple files, you can specify the path to the folder. With a data deletion job, Amazon Personalize uses all files in the folder and any sub folder. Use the following syntax with a `/` after the folder name:
         *
         * `s3://bucket-name/folder-name/`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasource.html#cfn-personalize-dataset-datasource-datalocation
         */
        readonly dataLocation?: string;
    }
}
/**
 * Properties for defining a `CfnDataset`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html
 */
export interface CfnDatasetProps {
    /**
     * The Amazon Resource Name (ARN) of the dataset group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasetgrouparn
     */
    readonly datasetGroupArn: string;
    /**
     * Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset.
     *
     * If you specify a dataset import job as part of a dataset, all dataset import job fields are required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasetimportjob
     */
    readonly datasetImportJob?: CfnDataset.DatasetImportJobProperty | cdk.IResolvable;
    /**
     * One of the following values:.
     *
     * - Interactions
     * - Items
     * - Users
     *
     * > You can't use CloudFormation to create an Action Interactions or Actions dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasettype
     */
    readonly datasetType: string;
    /**
     * The name of the dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-name
     */
    readonly name: string;
    /**
     * The ARN of the associated schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-schemaarn
     */
    readonly schemaArn: string;
}
/**
 * A dataset group is a collection of related datasets (Item interactions, Users, Items, Actions, Action interactions).
 *
 * You create a dataset group by calling [CreateDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html) . You then create a dataset and add it to a dataset group by calling [CreateDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html) . The dataset group is used to create and train a solution by calling [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html) . A dataset group can contain only one of each type of dataset.
 *
 * You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.
 *
 * @cloudformationResource AWS::Personalize::DatasetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html
 */
export declare class CfnDatasetGroup extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDatasetGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDatasetGroup;
    /**
     * The Amazon Resource Name (ARN) of the dataset group.
     *
     * @cloudformationAttribute DatasetGroupArn
     */
    readonly attrDatasetGroupArn: string;
    /**
     * The domain of a Domain dataset group.
     */
    domain?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key used to encrypt the datasets.
     */
    kmsKeyArn?: string;
    /**
     * The name of the dataset group.
     */
    name: string;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that has permissions to access the AWS Key Management Service (KMS) key.
     */
    roleArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDatasetGroupProps);
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
 * Properties for defining a `CfnDatasetGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html
 */
export interface CfnDatasetGroupProps {
    /**
     * The domain of a Domain dataset group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html#cfn-personalize-datasetgroup-domain
     */
    readonly domain?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key used to encrypt the datasets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html#cfn-personalize-datasetgroup-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * The name of the dataset group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html#cfn-personalize-datasetgroup-name
     */
    readonly name: string;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that has permissions to access the AWS Key Management Service (KMS) key.
     *
     * Supplying an IAM role is only valid when also specifying a KMS key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html#cfn-personalize-datasetgroup-rolearn
     */
    readonly roleArn?: string;
}
/**
 * Creates an Amazon Personalize schema from the specified schema string.
 *
 * The schema you create must be in Avro JSON format.
 *
 * Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call [CreateDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html) .
 *
 * For more information on schemas, see [Datasets and schemas](https://docs.aws.amazon.com/personalize/latest/dg/how-it-works-dataset-schema.html) .
 *
 * **Related APIs** - [ListSchemas](https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html)
 * - [DescribeSchema](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html)
 * - [DeleteSchema](https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html)
 *
 * @cloudformationResource AWS::Personalize::Schema
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html
 */
export declare class CfnSchema extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSchema from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSchema;
    /**
     * The Amazon Resource Name (ARN) of the schema.
     *
     * @cloudformationAttribute SchemaArn
     */
    readonly attrSchemaArn: string;
    /**
     * The domain of a schema that you created for a dataset in a Domain dataset group.
     */
    domain?: string;
    /**
     * The name of the schema.
     */
    name: string;
    /**
     * The schema.
     */
    schema: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSchemaProps);
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
 * Properties for defining a `CfnSchema`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html
 */
export interface CfnSchemaProps {
    /**
     * The domain of a schema that you created for a dataset in a Domain dataset group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html#cfn-personalize-schema-domain
     */
    readonly domain?: string;
    /**
     * The name of the schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html#cfn-personalize-schema-name
     */
    readonly name: string;
    /**
     * The schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html#cfn-personalize-schema-schema
     */
    readonly schema: string;
}
/**
 * > After you create a solution, you can’t change its configuration.
 *
 * By default, all new solutions use automatic training. With automatic training, you incur training costs while your solution is active. You can't stop automatic training for a solution. To avoid unnecessary costs, make sure to delete the solution when you are finished. For information about training costs, see [Amazon Personalize pricing](https://docs.aws.amazon.com/https://aws.amazon.com/personalize/pricing/) .
 *
 * An object that provides information about a solution. A solution includes the custom recipe, customized parameters, and trained models (Solution Versions) that Amazon Personalize uses to generate recommendations.
 *
 * After you create a solution, you can’t change its configuration. If you need to make changes, you can [clone the solution](https://docs.aws.amazon.com/personalize/latest/dg/cloning-solution.html) with the Amazon Personalize console or create a new one.
 *
 * @cloudformationResource AWS::Personalize::Solution
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html
 */
export declare class CfnSolution extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSolution from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSolution;
    /**
     * The Amazon Resource Name (ARN) of the solution.
     *
     * @cloudformationAttribute SolutionArn
     */
    readonly attrSolutionArn: string;
    /**
     * The Amazon Resource Name (ARN) of the dataset group that provides the training data.
     */
    datasetGroupArn: string;
    /**
     * The event type (for example, 'click' or 'like') that is used for training the model.
     */
    eventType?: string;
    /**
     * The name of the solution.
     */
    name: string;
    /**
     * > We don't recommend enabling automated machine learning.
     */
    performAutoMl?: boolean | cdk.IResolvable;
    /**
     * Whether to perform hyperparameter optimization (HPO) on the chosen recipe.
     */
    performHpo?: boolean | cdk.IResolvable;
    /**
     * The ARN of the recipe used to create the solution.
     */
    recipeArn?: string;
    /**
     * Describes the configuration properties for the solution.
     */
    solutionConfig?: cdk.IResolvable | CfnSolution.SolutionConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSolutionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSolution {
    /**
     * Describes the configuration properties for the solution.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-solutionconfig.html
     */
    interface SolutionConfigProperty {
        /**
         * Lists the algorithm hyperparameters and their values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-solutionconfig.html#cfn-personalize-solution-solutionconfig-algorithmhyperparameters
         */
        readonly algorithmHyperParameters?: cdk.IResolvable | Record<string, string>;
        /**
         * The [AutoMLConfig](https://docs.aws.amazon.com/personalize/latest/dg/API_AutoMLConfig.html) object containing a list of recipes to search when AutoML is performed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-solutionconfig.html#cfn-personalize-solution-solutionconfig-automlconfig
         */
        readonly autoMlConfig?: any | cdk.IResolvable;
        /**
         * Only events with a value greater than or equal to this threshold are used for training a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-solutionconfig.html#cfn-personalize-solution-solutionconfig-eventvaluethreshold
         */
        readonly eventValueThreshold?: string;
        /**
         * Lists the feature transformation parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-solutionconfig.html#cfn-personalize-solution-solutionconfig-featuretransformationparameters
         */
        readonly featureTransformationParameters?: cdk.IResolvable | Record<string, string>;
        /**
         * Describes the properties for hyperparameter optimization (HPO).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-solutionconfig.html#cfn-personalize-solution-solutionconfig-hpoconfig
         */
        readonly hpoConfig?: any | cdk.IResolvable;
    }
    /**
     * Specifies the hyperparameters and their ranges.
     *
     * Hyperparameters can be categorical, continuous, or integer-valued.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-algorithmhyperparameterranges.html
     */
    interface AlgorithmHyperParameterRangesProperty {
        /**
         * Provides the name and range of a categorical hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-algorithmhyperparameterranges.html#cfn-personalize-solution-algorithmhyperparameterranges-categoricalhyperparameterranges
         */
        readonly categoricalHyperParameterRanges?: Array<CfnSolution.CategoricalHyperParameterRangeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Provides the name and range of a continuous hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-algorithmhyperparameterranges.html#cfn-personalize-solution-algorithmhyperparameterranges-continuoushyperparameterranges
         */
        readonly continuousHyperParameterRanges?: Array<CfnSolution.ContinuousHyperParameterRangeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Provides the name and range of an integer-valued hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-algorithmhyperparameterranges.html#cfn-personalize-solution-algorithmhyperparameterranges-integerhyperparameterranges
         */
        readonly integerHyperParameterRanges?: Array<CfnSolution.IntegerHyperParameterRangeProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Provides the name and range of an integer-valued hyperparameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-integerhyperparameterrange.html
     */
    interface IntegerHyperParameterRangeProperty {
        /**
         * The maximum allowable value for the hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-integerhyperparameterrange.html#cfn-personalize-solution-integerhyperparameterrange-maxvalue
         */
        readonly maxValue?: number;
        /**
         * The minimum allowable value for the hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-integerhyperparameterrange.html#cfn-personalize-solution-integerhyperparameterrange-minvalue
         */
        readonly minValue?: number;
        /**
         * The name of the hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-integerhyperparameterrange.html#cfn-personalize-solution-integerhyperparameterrange-name
         */
        readonly name?: string;
    }
    /**
     * Provides the name and range of a categorical hyperparameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-categoricalhyperparameterrange.html
     */
    interface CategoricalHyperParameterRangeProperty {
        /**
         * The name of the hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-categoricalhyperparameterrange.html#cfn-personalize-solution-categoricalhyperparameterrange-name
         */
        readonly name?: string;
        /**
         * A list of the categories for the hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-categoricalhyperparameterrange.html#cfn-personalize-solution-categoricalhyperparameterrange-values
         */
        readonly values?: Array<string>;
    }
    /**
     * Provides the name and range of a continuous hyperparameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-continuoushyperparameterrange.html
     */
    interface ContinuousHyperParameterRangeProperty {
        /**
         * The maximum allowable value for the hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-continuoushyperparameterrange.html#cfn-personalize-solution-continuoushyperparameterrange-maxvalue
         */
        readonly maxValue?: number;
        /**
         * The minimum allowable value for the hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-continuoushyperparameterrange.html#cfn-personalize-solution-continuoushyperparameterrange-minvalue
         */
        readonly minValue?: number;
        /**
         * The name of the hyperparameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-continuoushyperparameterrange.html#cfn-personalize-solution-continuoushyperparameterrange-name
         */
        readonly name?: string;
    }
    /**
     * When the solution performs AutoML ( `performAutoML` is true in [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html) ), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-automlconfig.html
     */
    interface AutoMLConfigProperty {
        /**
         * The metric to optimize.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-automlconfig.html#cfn-personalize-solution-automlconfig-metricname
         */
        readonly metricName?: string;
        /**
         * The list of candidate recipes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-automlconfig.html#cfn-personalize-solution-automlconfig-recipelist
         */
        readonly recipeList?: Array<string>;
    }
    /**
     * Describes the properties for hyperparameter optimization (HPO).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoconfig.html
     */
    interface HpoConfigProperty {
        /**
         * The hyperparameters and their allowable ranges.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoconfig.html#cfn-personalize-solution-hpoconfig-algorithmhyperparameterranges
         */
        readonly algorithmHyperParameterRanges?: CfnSolution.AlgorithmHyperParameterRangesProperty | cdk.IResolvable;
        /**
         * The metric to optimize during HPO.
         *
         * > Amazon Personalize doesn't support configuring the `hpoObjective` at this time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoconfig.html#cfn-personalize-solution-hpoconfig-hpoobjective
         */
        readonly hpoObjective?: CfnSolution.HpoObjectiveProperty | cdk.IResolvable;
        /**
         * Describes the resource configuration for HPO.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoconfig.html#cfn-personalize-solution-hpoconfig-hporesourceconfig
         */
        readonly hpoResourceConfig?: CfnSolution.HpoResourceConfigProperty | cdk.IResolvable;
    }
    /**
     * Describes the resource configuration for hyperparameter optimization (HPO).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hporesourceconfig.html
     */
    interface HpoResourceConfigProperty {
        /**
         * The maximum number of training jobs when you create a solution version.
         *
         * The maximum value for `maxNumberOfTrainingJobs` is `40` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hporesourceconfig.html#cfn-personalize-solution-hporesourceconfig-maxnumberoftrainingjobs
         */
        readonly maxNumberOfTrainingJobs?: string;
        /**
         * The maximum number of parallel training jobs when you create a solution version.
         *
         * The maximum value for `maxParallelTrainingJobs` is `10` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hporesourceconfig.html#cfn-personalize-solution-hporesourceconfig-maxparalleltrainingjobs
         */
        readonly maxParallelTrainingJobs?: string;
    }
    /**
     * The metric to optimize during hyperparameter optimization (HPO).
     *
     * > Amazon Personalize doesn't support configuring the `hpoObjective` at this time.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoobjective.html
     */
    interface HpoObjectiveProperty {
        /**
         * The name of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoobjective.html#cfn-personalize-solution-hpoobjective-metricname
         */
        readonly metricName?: string;
        /**
         * A regular expression for finding the metric in the training job logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoobjective.html#cfn-personalize-solution-hpoobjective-metricregex
         */
        readonly metricRegex?: string;
        /**
         * The type of the metric.
         *
         * Valid values are `Maximize` and `Minimize` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoobjective.html#cfn-personalize-solution-hpoobjective-type
         */
        readonly type?: string;
    }
}
/**
 * Properties for defining a `CfnSolution`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html
 */
export interface CfnSolutionProps {
    /**
     * The Amazon Resource Name (ARN) of the dataset group that provides the training data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-datasetgrouparn
     */
    readonly datasetGroupArn: string;
    /**
     * The event type (for example, 'click' or 'like') that is used for training the model.
     *
     * If no `eventType` is provided, Amazon Personalize uses all interactions for training with equal weight regardless of type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-eventtype
     */
    readonly eventType?: string;
    /**
     * The name of the solution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-name
     */
    readonly name: string;
    /**
     * > We don't recommend enabling automated machine learning.
     *
     * Instead, match your use case to the available Amazon Personalize recipes. For more information, see [Determining your use case.](https://docs.aws.amazon.com/personalize/latest/dg/determining-use-case.html)
     *
     * When true, Amazon Personalize performs a search for the best USER_PERSONALIZATION recipe from the list specified in the solution configuration ( `recipeArn` must not be specified). When false (the default), Amazon Personalize uses `recipeArn` for training.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-performautoml
     */
    readonly performAutoMl?: boolean | cdk.IResolvable;
    /**
     * Whether to perform hyperparameter optimization (HPO) on the chosen recipe.
     *
     * The default is `false` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-performhpo
     */
    readonly performHpo?: boolean | cdk.IResolvable;
    /**
     * The ARN of the recipe used to create the solution.
     *
     * This is required when `performAutoML` is false.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-recipearn
     */
    readonly recipeArn?: string;
    /**
     * Describes the configuration properties for the solution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-solutionconfig
     */
    readonly solutionConfig?: cdk.IResolvable | CfnSolution.SolutionConfigProperty;
}
