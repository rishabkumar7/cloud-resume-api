import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a `MatchingWorkflow` object which stores the configuration of the data processing job to be run.
 *
 * It is important to note that there should not be a pre-existing `MatchingWorkflow` with the same name. To modify an existing workflow, utilize the `UpdateMatchingWorkflow` API.
 *
 * @cloudformationResource AWS::EntityResolution::MatchingWorkflow
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html
 */
export declare class CfnMatchingWorkflow extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMatchingWorkflow from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMatchingWorkflow;
    /**
     * The time of this MatchingWorkflow got created
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The time of this MatchingWorkflow got last updated at
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The default MatchingWorkflow arn
     *
     * @cloudformationAttribute WorkflowArn
     */
    readonly attrWorkflowArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A description of the workflow.
     */
    description?: string;
    /**
     * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName` .
     */
    inputSourceConfig: Array<CfnMatchingWorkflow.InputSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of `OutputSource` objects, each of which contains fields `OutputS3Path` , `ApplyNormalization` , and `Output` .
     */
    outputSourceConfig: Array<cdk.IResolvable | CfnMatchingWorkflow.OutputSourceProperty> | cdk.IResolvable;
    /**
     * An object which defines the `resolutionType` and the `ruleBasedProperties` .
     */
    resolutionTechniques: cdk.IResolvable | CfnMatchingWorkflow.ResolutionTechniquesProperty;
    /**
     * The Amazon Resource Name (ARN) of the IAM role.
     */
    roleArn: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The name of the workflow.
     */
    workflowName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMatchingWorkflowProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMatchingWorkflow {
    /**
     * An object which defines the `resolutionType` and the `ruleBasedProperties` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-resolutiontechniques.html
     */
    interface ResolutionTechniquesProperty {
        /**
         * The properties of the provider service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-resolutiontechniques.html#cfn-entityresolution-matchingworkflow-resolutiontechniques-providerproperties
         */
        readonly providerProperties?: cdk.IResolvable | CfnMatchingWorkflow.ProviderPropertiesProperty;
        /**
         * The type of matching.
         *
         * There are three types of matching: `RULE_MATCHING` , `ML_MATCHING` , and `PROVIDER` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-resolutiontechniques.html#cfn-entityresolution-matchingworkflow-resolutiontechniques-resolutiontype
         */
        readonly resolutionType?: string;
        /**
         * An object which defines the list of matching rules to run and has a field `Rules` , which is a list of rule objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-resolutiontechniques.html#cfn-entityresolution-matchingworkflow-resolutiontechniques-rulebasedproperties
         */
        readonly ruleBasedProperties?: cdk.IResolvable | CfnMatchingWorkflow.RuleBasedPropertiesProperty;
    }
    /**
     * An object which defines the list of matching rules to run and has a field `Rules` , which is a list of rule objects.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-rulebasedproperties.html
     */
    interface RuleBasedPropertiesProperty {
        /**
         * The comparison type.
         *
         * You can either choose `ONE_TO_ONE` or `MANY_TO_MANY` as the AttributeMatchingModel. When choosing `MANY_TO_MANY` , the system can match attributes across the sub-types of an attribute type. For example, if the value of the `Email` field of Profile A and the value of `BusinessEmail` field of Profile B matches, the two profiles are matched on the `Email` type. When choosing `ONE_TO_ONE` ,the system can only match if the sub-types are exact matches. For example, only when the value of the `Email` field of Profile A and the value of the `Email` field of Profile B matches, the two profiles are matched on the `Email` type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-rulebasedproperties.html#cfn-entityresolution-matchingworkflow-rulebasedproperties-attributematchingmodel
         */
        readonly attributeMatchingModel: string;
        /**
         * A list of `Rule` objects, each of which have fields `RuleName` and `MatchingKeys` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-rulebasedproperties.html#cfn-entityresolution-matchingworkflow-rulebasedproperties-rules
         */
        readonly rules: Array<cdk.IResolvable | CfnMatchingWorkflow.RuleProperty> | cdk.IResolvable;
    }
    /**
     * An object containing `RuleName` , and `MatchingKeys` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-rule.html
     */
    interface RuleProperty {
        /**
         * A list of `MatchingKeys` .
         *
         * The `MatchingKeys` must have been defined in the `SchemaMapping` . Two records are considered to match according to this rule if all of the `MatchingKeys` match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-rule.html#cfn-entityresolution-matchingworkflow-rule-matchingkeys
         */
        readonly matchingKeys: Array<string>;
        /**
         * A name for the matching rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-rule.html#cfn-entityresolution-matchingworkflow-rule-rulename
         */
        readonly ruleName: string;
    }
    /**
     * An object containing the `providerServiceARN` , `intermediateSourceConfiguration` , and `providerConfiguration` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-providerproperties.html
     */
    interface ProviderPropertiesProperty {
        /**
         * The Amazon S3 location that temporarily stores your data while it processes.
         *
         * Your information won't be saved permanently.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-providerproperties.html#cfn-entityresolution-matchingworkflow-providerproperties-intermediatesourceconfiguration
         */
        readonly intermediateSourceConfiguration?: CfnMatchingWorkflow.IntermediateSourceConfigurationProperty | cdk.IResolvable;
        /**
         * The required configuration fields to use with the provider service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-providerproperties.html#cfn-entityresolution-matchingworkflow-providerproperties-providerconfiguration
         */
        readonly providerConfiguration?: cdk.IResolvable | Record<string, string>;
        /**
         * The ARN of the provider service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-providerproperties.html#cfn-entityresolution-matchingworkflow-providerproperties-providerservicearn
         */
        readonly providerServiceArn: string;
    }
    /**
     * The Amazon S3 location that temporarily stores your data while it processes.
     *
     * Your information won't be saved permanently.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-intermediatesourceconfiguration.html
     */
    interface IntermediateSourceConfigurationProperty {
        /**
         * The Amazon S3 location (bucket and prefix).
         *
         * For example: `s3://provider_bucket/DOC-EXAMPLE-BUCKET`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-intermediatesourceconfiguration.html#cfn-entityresolution-matchingworkflow-intermediatesourceconfiguration-intermediates3path
         */
        readonly intermediateS3Path: string;
    }
    /**
     * An object containing `InputSourceARN` , `SchemaName` , and `ApplyNormalization` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-inputsource.html
     */
    interface InputSourceProperty {
        /**
         * Normalizes the attributes defined in the schema in the input data.
         *
         * For example, if an attribute has an `AttributeType` of `PHONE_NUMBER` , and the data in the input table is in a format of 1234567890, AWS Entity Resolution will normalize this field in the output to (123)-456-7890.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-inputsource.html#cfn-entityresolution-matchingworkflow-inputsource-applynormalization
         */
        readonly applyNormalization?: boolean | cdk.IResolvable;
        /**
         * An object containing `InputSourceARN` , `SchemaName` , and `ApplyNormalization` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-inputsource.html#cfn-entityresolution-matchingworkflow-inputsource-inputsourcearn
         */
        readonly inputSourceArn: string;
        /**
         * The name of the schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-inputsource.html#cfn-entityresolution-matchingworkflow-inputsource-schemaarn
         */
        readonly schemaArn: string;
    }
    /**
     * A list of `OutputAttribute` objects, each of which have the fields `Name` and `Hashed` .
     *
     * Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputsource.html
     */
    interface OutputSourceProperty {
        /**
         * Normalizes the attributes defined in the schema in the input data.
         *
         * For example, if an attribute has an `AttributeType` of `PHONE_NUMBER` , and the data in the input table is in a format of 1234567890, AWS Entity Resolution will normalize this field in the output to (123)-456-7890.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputsource.html#cfn-entityresolution-matchingworkflow-outputsource-applynormalization
         */
        readonly applyNormalization?: boolean | cdk.IResolvable;
        /**
         * Customer KMS ARN for encryption at rest.
         *
         * If not provided, system will use an AWS Entity Resolution managed KMS key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputsource.html#cfn-entityresolution-matchingworkflow-outputsource-kmsarn
         */
        readonly kmsArn?: string;
        /**
         * A list of `OutputAttribute` objects, each of which have the fields `Name` and `Hashed` .
         *
         * Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputsource.html#cfn-entityresolution-matchingworkflow-outputsource-output
         */
        readonly output: Array<cdk.IResolvable | CfnMatchingWorkflow.OutputAttributeProperty> | cdk.IResolvable;
        /**
         * The S3 path to which AWS Entity Resolution will write the output table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputsource.html#cfn-entityresolution-matchingworkflow-outputsource-outputs3path
         */
        readonly outputS3Path: string;
    }
    /**
     * A list of `OutputAttribute` objects, each of which have the fields `Name` and `Hashed` .
     *
     * Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputattribute.html
     */
    interface OutputAttributeProperty {
        /**
         * Enables the ability to hash the column values in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputattribute.html#cfn-entityresolution-matchingworkflow-outputattribute-hashed
         */
        readonly hashed?: boolean | cdk.IResolvable;
        /**
         * A name of a column to be written to the output.
         *
         * This must be an `InputField` name in the schema mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputattribute.html#cfn-entityresolution-matchingworkflow-outputattribute-name
         */
        readonly name: string;
    }
}
/**
 * Properties for defining a `CfnMatchingWorkflow`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html
 */
export interface CfnMatchingWorkflowProps {
    /**
     * A description of the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-description
     */
    readonly description?: string;
    /**
     * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-inputsourceconfig
     */
    readonly inputSourceConfig: Array<CfnMatchingWorkflow.InputSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of `OutputSource` objects, each of which contains fields `OutputS3Path` , `ApplyNormalization` , and `Output` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-outputsourceconfig
     */
    readonly outputSourceConfig: Array<cdk.IResolvable | CfnMatchingWorkflow.OutputSourceProperty> | cdk.IResolvable;
    /**
     * An object which defines the `resolutionType` and the `ruleBasedProperties` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-resolutiontechniques
     */
    readonly resolutionTechniques: cdk.IResolvable | CfnMatchingWorkflow.ResolutionTechniquesProperty;
    /**
     * The Amazon Resource Name (ARN) of the IAM role.
     *
     * AWS Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-rolearn
     */
    readonly roleArn: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the workflow.
     *
     * There can't be multiple `MatchingWorkflows` with the same name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-workflowname
     */
    readonly workflowName: string;
}
/**
 * Creates a schema mapping, which defines the schema of the input customer records table.
 *
 * The `SchemaMapping` also provides AWS Entity Resolution with some metadata about the table, such as the attribute types of the columns and which columns to match on.
 *
 * @cloudformationResource AWS::EntityResolution::SchemaMapping
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html
 */
export declare class CfnSchemaMapping extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSchemaMapping from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSchemaMapping;
    /**
     * The time of this SchemaMapping got created
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The boolean value that indicates whether or not a SchemaMapping has MatchingWorkflows that are associated with
     *
     * @cloudformationAttribute HasWorkflows
     */
    readonly attrHasWorkflows: cdk.IResolvable;
    /**
     * The SchemaMapping arn associated with the Schema
     *
     * @cloudformationAttribute SchemaArn
     */
    readonly attrSchemaArn: string;
    /**
     * The time of this SchemaMapping got last updated at
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A description of the schema.
     */
    description?: string;
    /**
     * A list of `MappedInputFields` .
     */
    mappedInputFields: Array<cdk.IResolvable | CfnSchemaMapping.SchemaInputAttributeProperty> | cdk.IResolvable;
    /**
     * The name of the schema.
     */
    schemaName: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSchemaMappingProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSchemaMapping {
    /**
     * An object containing `FieldName` , `Type` , `GroupName` , `MatchKey` , and `SubType` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-schemamapping-schemainputattribute.html
     */
    interface SchemaInputAttributeProperty {
        /**
         * A string containing the field name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-schemamapping-schemainputattribute.html#cfn-entityresolution-schemamapping-schemainputattribute-fieldname
         */
        readonly fieldName: string;
        /**
         * A string that instructs AWS Entity Resolution to combine several columns into a unified column with the identical attribute type.
         *
         * For example, when working with columns such as `first_name` , `middle_name` , and `last_name` , assigning them a common `groupName` will prompt AWS Entity Resolution to concatenate them into a single value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-schemamapping-schemainputattribute.html#cfn-entityresolution-schemamapping-schemainputattribute-groupname
         */
        readonly groupName?: string;
        /**
         * A key that allows grouping of multiple input attributes into a unified matching group.
         *
         * For example, consider a scenario where the source table contains various addresses, such as `business_address` and `shipping_address` . By assigning a `matchKey` called `address` to both attributes, AWS Entity Resolution will match records across these fields to create a consolidated matching group. If no `matchKey` is specified for a column, it won't be utilized for matching purposes but will still be included in the output table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-schemamapping-schemainputattribute.html#cfn-entityresolution-schemamapping-schemainputattribute-matchkey
         */
        readonly matchKey?: string;
        /**
         * The subtype of the attribute, selected from a list of values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-schemamapping-schemainputattribute.html#cfn-entityresolution-schemamapping-schemainputattribute-subtype
         */
        readonly subType?: string;
        /**
         * The type of the attribute, selected from a list of values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-schemamapping-schemainputattribute.html#cfn-entityresolution-schemamapping-schemainputattribute-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnSchemaMapping`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html
 */
export interface CfnSchemaMappingProps {
    /**
     * A description of the schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-description
     */
    readonly description?: string;
    /**
     * A list of `MappedInputFields` .
     *
     * Each `MappedInputField` corresponds to a column the source data table, and contains column name plus additional information that AWS Entity Resolution uses for matching.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-mappedinputfields
     */
    readonly mappedInputFields: Array<cdk.IResolvable | CfnSchemaMapping.SchemaInputAttributeProperty> | cdk.IResolvable;
    /**
     * The name of the schema.
     *
     * There can't be multiple `SchemaMappings` with the same name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-schemaname
     */
    readonly schemaName: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an `IdMappingWorkflow` object which stores the configuration of the data processing job to be run.
 *
 * Each `IdMappingWorkflow` must have a unique workflow name. To modify an existing workflow, use the `UpdateIdMappingWorkflow` API.
 *
 * @cloudformationResource AWS::EntityResolution::IdMappingWorkflow
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html
 */
export declare class CfnIdMappingWorkflow extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIdMappingWorkflow from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIdMappingWorkflow;
    /**
     * The time of this IdMappingWorkflow got created
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The time of this IdMappingWorkflow got last updated at
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The default IdMappingWorkflow arn
     *
     * @cloudformationAttribute WorkflowArn
     */
    readonly attrWorkflowArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A description of the workflow.
     */
    description?: string;
    /**
     * An object which defines the `idMappingType` and the `providerProperties` .
     */
    idMappingTechniques: CfnIdMappingWorkflow.IdMappingTechniquesProperty | cdk.IResolvable;
    /**
     * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName` .
     */
    inputSourceConfig: Array<CfnIdMappingWorkflow.IdMappingWorkflowInputSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of `IdMappingWorkflowOutputSource` objects, each of which contains fields `OutputS3Path` and `Output` .
     */
    outputSourceConfig?: Array<CfnIdMappingWorkflow.IdMappingWorkflowOutputSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role.
     */
    roleArn: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The name of the workflow.
     */
    workflowName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIdMappingWorkflowProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIdMappingWorkflow {
    /**
     * An object containing `InputSourceARN` , `SchemaName` , and `Type` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowinputsource.html
     */
    interface IdMappingWorkflowInputSourceProperty {
        /**
         * An AWS Glue table ARN for the input source table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowinputsource.html#cfn-entityresolution-idmappingworkflow-idmappingworkflowinputsource-inputsourcearn
         */
        readonly inputSourceArn: string;
        /**
         * The ARN (Amazon Resource Name) that AWS Entity Resolution generated for the `SchemaMapping` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowinputsource.html#cfn-entityresolution-idmappingworkflow-idmappingworkflowinputsource-schemaarn
         */
        readonly schemaArn?: string;
        /**
         * The type of ID namespace. There are two types: `SOURCE` and `TARGET` .
         *
         * The `SOURCE` contains configurations for `sourceId` data that will be processed in an ID mapping workflow.
         *
         * The `TARGET` contains a configuration of `targetId` to which all `sourceIds` will resolve to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowinputsource.html#cfn-entityresolution-idmappingworkflow-idmappingworkflowinputsource-type
         */
        readonly type?: string;
    }
    /**
     * A list of `IdMappingWorkflowOutputSource` objects, each of which contains fields `OutputS3Path` and `Output` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowoutputsource.html
     */
    interface IdMappingWorkflowOutputSourceProperty {
        /**
         * Customer AWS KMS ARN for encryption at rest.
         *
         * If not provided, system will use an AWS Entity Resolution managed KMS key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowoutputsource.html#cfn-entityresolution-idmappingworkflow-idmappingworkflowoutputsource-kmsarn
         */
        readonly kmsArn?: string;
        /**
         * The S3 path to which AWS Entity Resolution will write the output table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowoutputsource.html#cfn-entityresolution-idmappingworkflow-idmappingworkflowoutputsource-outputs3path
         */
        readonly outputS3Path: string;
    }
    /**
     * An object which defines the ID mapping techniques and provider configurations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingtechniques.html
     */
    interface IdMappingTechniquesProperty {
        /**
         * The type of ID mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingtechniques.html#cfn-entityresolution-idmappingworkflow-idmappingtechniques-idmappingtype
         */
        readonly idMappingType?: string;
        /**
         * An object which defines any additional configurations required by the provider service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingtechniques.html#cfn-entityresolution-idmappingworkflow-idmappingtechniques-providerproperties
         */
        readonly providerProperties?: cdk.IResolvable | CfnIdMappingWorkflow.ProviderPropertiesProperty;
    }
    /**
     * An object containing the `providerServiceARN` , `intermediateSourceConfiguration` , and `providerConfiguration` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-providerproperties.html
     */
    interface ProviderPropertiesProperty {
        /**
         * The Amazon S3 location that temporarily stores your data while it processes.
         *
         * Your information won't be saved permanently.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-providerproperties.html#cfn-entityresolution-idmappingworkflow-providerproperties-intermediatesourceconfiguration
         */
        readonly intermediateSourceConfiguration?: CfnIdMappingWorkflow.IntermediateSourceConfigurationProperty | cdk.IResolvable;
        /**
         * The required configuration fields to use with the provider service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-providerproperties.html#cfn-entityresolution-idmappingworkflow-providerproperties-providerconfiguration
         */
        readonly providerConfiguration?: cdk.IResolvable | Record<string, string>;
        /**
         * The ARN of the provider service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-providerproperties.html#cfn-entityresolution-idmappingworkflow-providerproperties-providerservicearn
         */
        readonly providerServiceArn: string;
    }
    /**
     * The Amazon S3 location that temporarily stores your data while it processes.
     *
     * Your information won't be saved permanently.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-intermediatesourceconfiguration.html
     */
    interface IntermediateSourceConfigurationProperty {
        /**
         * The Amazon S3 location (bucket and prefix).
         *
         * For example: `s3://provider_bucket/DOC-EXAMPLE-BUCKET`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-intermediatesourceconfiguration.html#cfn-entityresolution-idmappingworkflow-intermediatesourceconfiguration-intermediates3path
         */
        readonly intermediateS3Path: string;
    }
}
/**
 * Properties for defining a `CfnIdMappingWorkflow`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html
 */
export interface CfnIdMappingWorkflowProps {
    /**
     * A description of the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-description
     */
    readonly description?: string;
    /**
     * An object which defines the `idMappingType` and the `providerProperties` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingtechniques
     */
    readonly idMappingTechniques: CfnIdMappingWorkflow.IdMappingTechniquesProperty | cdk.IResolvable;
    /**
     * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-inputsourceconfig
     */
    readonly inputSourceConfig: Array<CfnIdMappingWorkflow.IdMappingWorkflowInputSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of `IdMappingWorkflowOutputSource` objects, each of which contains fields `OutputS3Path` and `Output` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-outputsourceconfig
     */
    readonly outputSourceConfig?: Array<CfnIdMappingWorkflow.IdMappingWorkflowOutputSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role.
     *
     * AWS Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-rolearn
     */
    readonly roleArn: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the workflow.
     *
     * There can't be multiple `IdMappingWorkflows` with the same name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-workflowname
     */
    readonly workflowName: string;
}
/**
 * Creates an ID namespace object which will help customers provide metadata explaining their dataset and how to use it.
 *
 * Each ID namespace must have a unique name. To modify an existing ID namespace, use the `UpdateIdNamespace` API.
 *
 * @cloudformationResource AWS::EntityResolution::IdNamespace
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html
 */
export declare class CfnIdNamespace extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIdNamespace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIdNamespace;
    /**
     * The date and time when the IdNamespace was created
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The arn associated with the IdNamespace
     *
     * @cloudformationAttribute IdNamespaceArn
     */
    readonly attrIdNamespaceArn: string;
    /**
     * The date and time when the IdNamespace was updated
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the ID namespace.
     */
    description?: string;
    /**
     * Determines the properties of `IdMappingWorflow` where this `IdNamespace` can be used as a `Source` or a `Target` .
     */
    idMappingWorkflowProperties?: Array<CfnIdNamespace.IdNamespaceIdMappingWorkflowPropertiesProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the ID namespace.
     */
    idNamespaceName: string;
    /**
     * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName` .
     */
    inputSourceConfig?: Array<CfnIdNamespace.IdNamespaceInputSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role.
     */
    roleArn?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The type of ID namespace. There are two types: `SOURCE` and `TARGET` .
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIdNamespaceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIdNamespace {
    /**
     * An object containing `InputSourceARN` and `SchemaName` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-idnamespaceinputsource.html
     */
    interface IdNamespaceInputSourceProperty {
        /**
         * An AWS Glue table ARN for the input source table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-idnamespaceinputsource.html#cfn-entityresolution-idnamespace-idnamespaceinputsource-inputsourcearn
         */
        readonly inputSourceArn: string;
        /**
         * The name of the schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-idnamespaceinputsource.html#cfn-entityresolution-idnamespace-idnamespaceinputsource-schemaname
         */
        readonly schemaName?: string;
    }
    /**
     * An object containing `IdMappingType` and `ProviderProperties` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-idnamespaceidmappingworkflowproperties.html
     */
    interface IdNamespaceIdMappingWorkflowPropertiesProperty {
        /**
         * The type of ID mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-idnamespaceidmappingworkflowproperties.html#cfn-entityresolution-idnamespace-idnamespaceidmappingworkflowproperties-idmappingtype
         */
        readonly idMappingType: string;
        /**
         * An object which defines any additional configurations required by the provider service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-idnamespaceidmappingworkflowproperties.html#cfn-entityresolution-idnamespace-idnamespaceidmappingworkflowproperties-providerproperties
         */
        readonly providerProperties?: cdk.IResolvable | CfnIdNamespace.NamespaceProviderPropertiesProperty;
    }
    /**
     * An object containing `ProviderConfiguration` and `ProviderServiceArn` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-namespaceproviderproperties.html
     */
    interface NamespaceProviderPropertiesProperty {
        /**
         * An object which defines any additional configurations required by the provider service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-namespaceproviderproperties.html#cfn-entityresolution-idnamespace-namespaceproviderproperties-providerconfiguration
         */
        readonly providerConfiguration?: cdk.IResolvable | Record<string, string>;
        /**
         * The Amazon Resource Name (ARN) of the provider service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-namespaceproviderproperties.html#cfn-entityresolution-idnamespace-namespaceproviderproperties-providerservicearn
         */
        readonly providerServiceArn: string;
    }
}
/**
 * Properties for defining a `CfnIdNamespace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html
 */
export interface CfnIdNamespaceProps {
    /**
     * The description of the ID namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-description
     */
    readonly description?: string;
    /**
     * Determines the properties of `IdMappingWorflow` where this `IdNamespace` can be used as a `Source` or a `Target` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-idmappingworkflowproperties
     */
    readonly idMappingWorkflowProperties?: Array<CfnIdNamespace.IdNamespaceIdMappingWorkflowPropertiesProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the ID namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-idnamespacename
     */
    readonly idNamespaceName: string;
    /**
     * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-inputsourceconfig
     */
    readonly inputSourceConfig?: Array<CfnIdNamespace.IdNamespaceInputSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role.
     *
     * AWS Entity Resolution assumes this role to access the resources defined in this `IdNamespace` on your behalf as part of the workflow run.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-rolearn
     */
    readonly roleArn?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of ID namespace. There are two types: `SOURCE` and `TARGET` .
     *
     * The `SOURCE` contains configurations for `sourceId` data that will be processed in an ID mapping workflow.
     *
     * The `TARGET` contains a configuration of `targetId` to which all `sourceIds` will resolve to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-type
     */
    readonly type: string;
}
/**
 * Adds a policy statement object.
 *
 * To retrieve a list of existing policy statements, use the `GetPolicy` API.
 *
 * @cloudformationResource AWS::EntityResolution::PolicyStatement
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html
 */
export declare class CfnPolicyStatement extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPolicyStatement from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPolicyStatement;
    /**
     * The action that the principal can use on the resource.
     */
    action?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the resource that will be accessed by the principal.
     */
    arn: string;
    /**
     * A set of condition keys that you can use in key policies.
     */
    condition?: string;
    /**
     * Determines whether the permissions specified in the policy are to be allowed ( `Allow` ) or denied ( `Deny` ).
     */
    effect?: string;
    /**
     * The AWS service or AWS account that can access the resource defined as ARN.
     */
    principal?: Array<string>;
    /**
     * A statement identifier that differentiates the statement from others in the same policy.
     */
    statementId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPolicyStatementProps);
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
 * Properties for defining a `CfnPolicyStatement`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html
 */
export interface CfnPolicyStatementProps {
    /**
     * The action that the principal can use on the resource.
     *
     * For example, `entityresolution:GetIdMappingJob` , `entityresolution:GetMatchingJob` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-action
     */
    readonly action?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the resource that will be accessed by the principal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-arn
     */
    readonly arn: string;
    /**
     * A set of condition keys that you can use in key policies.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-condition
     */
    readonly condition?: string;
    /**
     * Determines whether the permissions specified in the policy are to be allowed ( `Allow` ) or denied ( `Deny` ).
     *
     * > If you set the value of the `effect` parameter to `Deny` for the `AddPolicyStatement` operation, you must also set the value of the `effect` parameter in the `policy` to `Deny` for the `PutPolicy` operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-effect
     */
    readonly effect?: string;
    /**
     * The AWS service or AWS account that can access the resource defined as ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-principal
     */
    readonly principal?: Array<string>;
    /**
     * A statement identifier that differentiates the statement from others in the same policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-statementid
     */
    readonly statementId: string;
}
