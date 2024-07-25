import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a data export and specifies the data query, the delivery preference, and any optional resource tags.
 *
 * A `DataQuery` consists of both a `QueryStatement` and `TableConfigurations` .
 *
 * The `QueryStatement` is an SQL statement. Data Exports only supports a limited subset of the SQL syntax. For more information on the SQL syntax that is supported, see [Data query](https://docs.aws.amazon.com/cur/latest/userguide/de-data-query.html) . To view the available tables and columns, see the [Data Exports table dictionary](https://docs.aws.amazon.com/cur/latest/userguide/de-table-dictionary.html) .
 *
 * The `TableConfigurations` is a collection of specified `TableProperties` for the table being queried in the `QueryStatement` . TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. However, tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified. For more information on table configurations, see [Data query](https://docs.aws.amazon.com/cur/latest/userguide/de-data-query.html) . To view the table properties available for each table, see the [Data Exports table dictionary](https://docs.aws.amazon.com/cur/latest/userguide/de-table-dictionary.html) or use the `ListTables` API to get a response of all tables and their available properties.
 *
 * @cloudformationResource AWS::BCMDataExports::Export
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html
 */
export declare class CfnExport extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnExport from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnExport;
    /**
     * The Amazon Resource Name (ARN) for this export.
     *
     * @cloudformationAttribute ExportArn
     */
    readonly attrExportArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The details that are available for an export.
     */
    export: CfnExport.ExportProperty | cdk.IResolvable;
    tags?: Array<CfnExport.ResourceTagProperty>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnExportProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnExport {
    /**
     * The details that are available for an export.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-export.html
     */
    interface ExportProperty {
        /**
         * The data query for this specific data export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-export.html#cfn-bcmdataexports-export-export-dataquery
         */
        readonly dataQuery: CfnExport.DataQueryProperty | cdk.IResolvable;
        /**
         * The description for this specific data export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-export.html#cfn-bcmdataexports-export-export-description
         */
        readonly description?: string;
        /**
         * The destination configuration for this specific data export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-export.html#cfn-bcmdataexports-export-export-destinationconfigurations
         */
        readonly destinationConfigurations: CfnExport.DestinationConfigurationsProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) for this export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-export.html#cfn-bcmdataexports-export-export-exportarn
         */
        readonly exportArn?: string;
        /**
         * The name of this specific data export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-export.html#cfn-bcmdataexports-export-export-name
         */
        readonly name: string;
        /**
         * The cadence for AWS to update the export in your S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-export.html#cfn-bcmdataexports-export-export-refreshcadence
         */
        readonly refreshCadence: cdk.IResolvable | CfnExport.RefreshCadenceProperty;
    }
    /**
     * The SQL query of column selections and row filters from the data table you want.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-dataquery.html
     */
    interface DataQueryProperty {
        /**
         * The query statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-dataquery.html#cfn-bcmdataexports-export-dataquery-querystatement
         */
        readonly queryStatement: string;
        /**
         * The table configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-dataquery.html#cfn-bcmdataexports-export-dataquery-tableconfigurations
         */
        readonly tableConfigurations?: cdk.IResolvable | Record<string, cdk.IResolvable | Record<string, string>>;
    }
    /**
     * The destinations used for data exports.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-destinationconfigurations.html
     */
    interface DestinationConfigurationsProperty {
        /**
         * An object that describes the destination of the data exports file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-destinationconfigurations.html#cfn-bcmdataexports-export-destinationconfigurations-s3destination
         */
        readonly s3Destination: cdk.IResolvable | CfnExport.S3DestinationProperty;
    }
    /**
     * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a data exports file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3destination.html
     */
    interface S3DestinationProperty {
        /**
         * The name of the Amazon S3 bucket used as the destination of a data export file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3destination.html#cfn-bcmdataexports-export-s3destination-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * The output configuration for the data export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3destination.html#cfn-bcmdataexports-export-s3destination-s3outputconfigurations
         */
        readonly s3OutputConfigurations: cdk.IResolvable | CfnExport.S3OutputConfigurationsProperty;
        /**
         * The S3 path prefix you want prepended to the name of your data export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3destination.html#cfn-bcmdataexports-export-s3destination-s3prefix
         */
        readonly s3Prefix: string;
        /**
         * The S3 bucket Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3destination.html#cfn-bcmdataexports-export-s3destination-s3region
         */
        readonly s3Region: string;
    }
    /**
     * The compression type, file format, and overwrite preference for the data export.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3outputconfigurations.html
     */
    interface S3OutputConfigurationsProperty {
        /**
         * The compression type for the data export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3outputconfigurations.html#cfn-bcmdataexports-export-s3outputconfigurations-compression
         */
        readonly compression: string;
        /**
         * The file format for the data export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3outputconfigurations.html#cfn-bcmdataexports-export-s3outputconfigurations-format
         */
        readonly format: string;
        /**
         * The output type for the data export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3outputconfigurations.html#cfn-bcmdataexports-export-s3outputconfigurations-outputtype
         */
        readonly outputType: string;
        /**
         * The rule to follow when generating a version of the data export file.
         *
         * You have the choice to overwrite the previous version or to be delivered in addition to the previous versions. Overwriting exports can save on Amazon S3 storage costs. Creating new export versions allows you to track the changes in cost and usage data over time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3outputconfigurations.html#cfn-bcmdataexports-export-s3outputconfigurations-overwrite
         */
        readonly overwrite: string;
    }
    /**
     * The cadence for AWS to update the data export in your S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-refreshcadence.html
     */
    interface RefreshCadenceProperty {
        /**
         * The frequency that data exports are updated.
         *
         * The export refreshes each time the source data updates, up to three times daily.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-refreshcadence.html#cfn-bcmdataexports-export-refreshcadence-frequency
         */
        readonly frequency: string;
    }
    /**
     * The tag structure that contains a tag key and value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-resourcetag.html
     */
    interface ResourceTagProperty {
        /**
         * The key that's associated with the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-resourcetag.html#cfn-bcmdataexports-export-resourcetag-key
         */
        readonly key: string;
        /**
         * The value that's associated with the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-resourcetag.html#cfn-bcmdataexports-export-resourcetag-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnExport`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html
 */
export interface CfnExportProps {
    /**
     * The details that are available for an export.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-export
     */
    readonly export: CfnExport.ExportProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-tags
     */
    readonly tags?: Array<CfnExport.ResourceTagProperty>;
}
