import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Defines the information necessary to create a training dataset.
 *
 * In Clean Rooms ML, the `TrainingDataset` is metadata that points to a Glue table, which is read only during `AudienceModel` creation.
 *
 * @cloudformationResource AWS::CleanRoomsML::TrainingDataset
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html
 */
export declare class CfnTrainingDataset extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTrainingDataset from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTrainingDataset;
    /**
     * The status of the training dataset.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon Resource Name (ARN) of the training dataset.
     *
     * @cloudformationAttribute TrainingDatasetArn
     */
    readonly attrTrainingDatasetArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the training dataset.
     */
    description?: string;
    /**
     * The name of the training dataset.
     */
    name: string;
    /**
     * The ARN of the IAM role that Clean Rooms ML can assume to read the data referred to in the `dataSource` field of each dataset.
     */
    roleArn: string;
    /**
     * The optional metadata that you apply to the resource to help you categorize and organize them.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * An array of information that lists the Dataset objects, which specifies the dataset type and details on its location and schema.
     */
    trainingData: Array<CfnTrainingDataset.DatasetProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTrainingDatasetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTrainingDataset {
    /**
     * Defines where the training dataset is located, what type of data it contains, and how to access the data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-dataset.html
     */
    interface DatasetProperty {
        /**
         * A DatasetInputConfig object that defines the data source and schema mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-dataset.html#cfn-cleanroomsml-trainingdataset-dataset-inputconfig
         */
        readonly inputConfig: CfnTrainingDataset.DatasetInputConfigProperty | cdk.IResolvable;
        /**
         * What type of information is found in the dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-dataset.html#cfn-cleanroomsml-trainingdataset-dataset-type
         */
        readonly type: string;
    }
    /**
     * Defines the Glue data source and schema mapping information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-datasetinputconfig.html
     */
    interface DatasetInputConfigProperty {
        /**
         * A DataSource object that specifies the Glue data source for the training data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-datasetinputconfig.html#cfn-cleanroomsml-trainingdataset-datasetinputconfig-datasource
         */
        readonly dataSource: CfnTrainingDataset.DataSourceProperty | cdk.IResolvable;
        /**
         * The schema information for the training data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-datasetinputconfig.html#cfn-cleanroomsml-trainingdataset-datasetinputconfig-schema
         */
        readonly schema: Array<CfnTrainingDataset.ColumnSchemaProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Metadata for a column.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-columnschema.html
     */
    interface ColumnSchemaProperty {
        /**
         * The name of a column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-columnschema.html#cfn-cleanroomsml-trainingdataset-columnschema-columnname
         */
        readonly columnName: string;
        /**
         * The data type of column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-columnschema.html#cfn-cleanroomsml-trainingdataset-columnschema-columntypes
         */
        readonly columnTypes: Array<string>;
    }
    /**
     * Defines information about the Glue data source that contains the training data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-datasource.html
     */
    interface DataSourceProperty {
        /**
         * A GlueDataSource object that defines the catalog ID, database name, and table name for the training data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-datasource.html#cfn-cleanroomsml-trainingdataset-datasource-gluedatasource
         */
        readonly glueDataSource: CfnTrainingDataset.GlueDataSourceProperty | cdk.IResolvable;
    }
    /**
     * Defines the Glue data source that contains the training data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-gluedatasource.html
     */
    interface GlueDataSourceProperty {
        /**
         * The Glue catalog that contains the training data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-gluedatasource.html#cfn-cleanroomsml-trainingdataset-gluedatasource-catalogid
         */
        readonly catalogId?: string;
        /**
         * The Glue database that contains the training data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-gluedatasource.html#cfn-cleanroomsml-trainingdataset-gluedatasource-databasename
         */
        readonly databaseName: string;
        /**
         * The Glue table that contains the training data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-gluedatasource.html#cfn-cleanroomsml-trainingdataset-gluedatasource-tablename
         */
        readonly tableName: string;
    }
}
/**
 * Properties for defining a `CfnTrainingDataset`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html
 */
export interface CfnTrainingDatasetProps {
    /**
     * The description of the training dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html#cfn-cleanroomsml-trainingdataset-description
     */
    readonly description?: string;
    /**
     * The name of the training dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html#cfn-cleanroomsml-trainingdataset-name
     */
    readonly name: string;
    /**
     * The ARN of the IAM role that Clean Rooms ML can assume to read the data referred to in the `dataSource` field of each dataset.
     *
     * Passing a role across accounts is not allowed. If you pass a role that isn't in your account, you get an `AccessDeniedException` error.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html#cfn-cleanroomsml-trainingdataset-rolearn
     */
    readonly roleArn: string;
    /**
     * The optional metadata that you apply to the resource to help you categorize and organize them.
     *
     * Each tag consists of a key and an optional value, both of which you define.
     *
     * The following basic restrictions apply to tags:
     *
     * - Maximum number of tags per resource - 50.
     * - For each resource, each tag key must be unique, and each tag key can have only one value.
     * - Maximum key length - 128 Unicode characters in UTF-8.
     * - Maximum value length - 256 Unicode characters in UTF-8.
     * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     * - Tag keys and values are case sensitive.
     * - Do not use `aws:` , `AWS:` , or any upper or lowercase combination of such as a prefix for keys as it is reserved. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html#cfn-cleanroomsml-trainingdataset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * An array of information that lists the Dataset objects, which specifies the dataset type and details on its location and schema.
     *
     * You must provide a role that has read access to these tables.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html#cfn-cleanroomsml-trainingdataset-trainingdata
     */
    readonly trainingData: Array<CfnTrainingDataset.DatasetProperty | cdk.IResolvable> | cdk.IResolvable;
}
