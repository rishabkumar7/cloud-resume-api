import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a test case for an application.
 *
 * For more information about test cases, see [Test cases](https://docs.aws.amazon.com/m2/latest/userguide/testing-test-cases.html) and [Application Testing concepts](https://docs.aws.amazon.com/m2/latest/userguide/concepts-apptest.html) in the *AWS Mainframe Modernization User Guide* .
 *
 * @cloudformationResource AWS::AppTest::TestCase
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html
 */
export declare class CfnTestCase extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTestCase from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTestCase;
    /**
     * The creation time of the test case.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The last update time of the test case.
     *
     * @cloudformationAttribute LastUpdateTime
     */
    readonly attrLastUpdateTime: string;
    /**
     * @cloudformationAttribute LatestVersion
     */
    readonly attrLatestVersion: cdk.IResolvable;
    /**
     * The status of the test case.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon Resource Name (ARN) of the test case.
     *
     * @cloudformationAttribute TestCaseArn
     */
    readonly attrTestCaseArn: string;
    /**
     * The response test case ID of the test case.
     *
     * @cloudformationAttribute TestCaseId
     */
    readonly attrTestCaseId: string;
    /**
     * The version of the test case.
     *
     * @cloudformationAttribute TestCaseVersion
     */
    readonly attrTestCaseVersion: cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the test case.
     */
    description?: string;
    /**
     * The name of the test case.
     */
    name: string;
    /**
     * The steps in the test case.
     */
    steps: Array<cdk.IResolvable | CfnTestCase.StepProperty> | cdk.IResolvable;
    /**
     * The specified tags of the test case.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTestCaseProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTestCase {
    /**
     * Defines a step.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-step.html
     */
    interface StepProperty {
        /**
         * The action of the step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-step.html#cfn-apptest-testcase-step-action
         */
        readonly action: cdk.IResolvable | CfnTestCase.StepActionProperty;
        /**
         * The description of the step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-step.html#cfn-apptest-testcase-step-description
         */
        readonly description?: string;
        /**
         * The name of the step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-step.html#cfn-apptest-testcase-step-name
         */
        readonly name: string;
    }
    /**
     * Specifies a step action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-stepaction.html
     */
    interface StepActionProperty {
        /**
         * The compare action of the step action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-stepaction.html#cfn-apptest-testcase-stepaction-compareaction
         */
        readonly compareAction?: CfnTestCase.CompareActionProperty | cdk.IResolvable;
        /**
         * The mainframe action of the step action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-stepaction.html#cfn-apptest-testcase-stepaction-mainframeaction
         */
        readonly mainframeAction?: cdk.IResolvable | CfnTestCase.MainframeActionProperty;
        /**
         * The resource action of the step action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-stepaction.html#cfn-apptest-testcase-stepaction-resourceaction
         */
        readonly resourceAction?: cdk.IResolvable | CfnTestCase.ResourceActionProperty;
    }
    /**
     * Specifies a resource action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-resourceaction.html
     */
    interface ResourceActionProperty {
        /**
         * The CloudFormation action of the resource action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-resourceaction.html#cfn-apptest-testcase-resourceaction-cloudformationaction
         */
        readonly cloudFormationAction?: CfnTestCase.CloudFormationActionProperty | cdk.IResolvable;
        /**
         * The AWS Mainframe Modernization managed application action of the resource action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-resourceaction.html#cfn-apptest-testcase-resourceaction-m2managedapplicationaction
         */
        readonly m2ManagedApplicationAction?: cdk.IResolvable | CfnTestCase.M2ManagedApplicationActionProperty;
        /**
         * The AWS Mainframe Modernization non-managed application action of the resource action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-resourceaction.html#cfn-apptest-testcase-resourceaction-m2nonmanagedapplicationaction
         */
        readonly m2NonManagedApplicationAction?: cdk.IResolvable | CfnTestCase.M2NonManagedApplicationActionProperty;
    }
    /**
     * Specifies the AWS Mainframe Modernization managed application action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2managedapplicationaction.html
     */
    interface M2ManagedApplicationActionProperty {
        /**
         * The action type of the AWS Mainframe Modernization managed application action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2managedapplicationaction.html#cfn-apptest-testcase-m2managedapplicationaction-actiontype
         */
        readonly actionType: string;
        /**
         * The properties of the AWS Mainframe Modernization managed application action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2managedapplicationaction.html#cfn-apptest-testcase-m2managedapplicationaction-properties
         */
        readonly properties?: cdk.IResolvable | CfnTestCase.M2ManagedActionPropertiesProperty;
        /**
         * The resource of the AWS Mainframe Modernization managed application action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2managedapplicationaction.html#cfn-apptest-testcase-m2managedapplicationaction-resource
         */
        readonly resource: string;
    }
    /**
     * Specifies the AWS Mainframe Modernization managed action properties.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2managedactionproperties.html
     */
    interface M2ManagedActionPropertiesProperty {
        /**
         * Force stops the AWS Mainframe Modernization managed action properties.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2managedactionproperties.html#cfn-apptest-testcase-m2managedactionproperties-forcestop
         */
        readonly forceStop?: boolean | cdk.IResolvable;
        /**
         * The import data set location of the AWS Mainframe Modernization managed action properties.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2managedactionproperties.html#cfn-apptest-testcase-m2managedactionproperties-importdatasetlocation
         */
        readonly importDataSetLocation?: string;
    }
    /**
     * Specifies the AWS Mainframe Modernization non-managed application action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2nonmanagedapplicationaction.html
     */
    interface M2NonManagedApplicationActionProperty {
        /**
         * The action type of the AWS Mainframe Modernization non-managed application action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2nonmanagedapplicationaction.html#cfn-apptest-testcase-m2nonmanagedapplicationaction-actiontype
         */
        readonly actionType: string;
        /**
         * The resource of the AWS Mainframe Modernization non-managed application action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2nonmanagedapplicationaction.html#cfn-apptest-testcase-m2nonmanagedapplicationaction-resource
         */
        readonly resource: string;
    }
    /**
     * Specifies the CloudFormation action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-cloudformationaction.html
     */
    interface CloudFormationActionProperty {
        /**
         * The action type of the CloudFormation action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-cloudformationaction.html#cfn-apptest-testcase-cloudformationaction-actiontype
         */
        readonly actionType?: string;
        /**
         * The resource of the CloudFormation action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-cloudformationaction.html#cfn-apptest-testcase-cloudformationaction-resource
         */
        readonly resource: string;
    }
    /**
     * Specifies the mainframe action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeaction.html
     */
    interface MainframeActionProperty {
        /**
         * The action type of the mainframe action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeaction.html#cfn-apptest-testcase-mainframeaction-actiontype
         */
        readonly actionType: cdk.IResolvable | CfnTestCase.MainframeActionTypeProperty;
        /**
         * The properties of the mainframe action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeaction.html#cfn-apptest-testcase-mainframeaction-properties
         */
        readonly properties?: cdk.IResolvable | CfnTestCase.MainframeActionPropertiesProperty;
        /**
         * The resource of the mainframe action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeaction.html#cfn-apptest-testcase-mainframeaction-resource
         */
        readonly resource: string;
    }
    /**
     * Specifies the mainframe action type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeactiontype.html
     */
    interface MainframeActionTypeProperty {
        /**
         * The batch of the mainframe action type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeactiontype.html#cfn-apptest-testcase-mainframeactiontype-batch
         */
        readonly batch?: CfnTestCase.BatchProperty | cdk.IResolvable;
        /**
         * The tn3270 port of the mainframe action type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeactiontype.html#cfn-apptest-testcase-mainframeactiontype-tn3270
         */
        readonly tn3270?: cdk.IResolvable | CfnTestCase.TN3270Property;
    }
    /**
     * Defines a batch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-batch.html
     */
    interface BatchProperty {
        /**
         * The job name of the batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-batch.html#cfn-apptest-testcase-batch-batchjobname
         */
        readonly batchJobName: string;
        /**
         * The batch job parameters of the batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-batch.html#cfn-apptest-testcase-batch-batchjobparameters
         */
        readonly batchJobParameters?: cdk.IResolvable | Record<string, string>;
        /**
         * The export data set names of the batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-batch.html#cfn-apptest-testcase-batch-exportdatasetnames
         */
        readonly exportDataSetNames?: Array<string>;
    }
    /**
     * Specifies the TN3270 protocol.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-tn3270.html
     */
    interface TN3270Property {
        /**
         * The data set names of the TN3270 protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-tn3270.html#cfn-apptest-testcase-tn3270-exportdatasetnames
         */
        readonly exportDataSetNames?: Array<string>;
        /**
         * The script of the TN3270 protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-tn3270.html#cfn-apptest-testcase-tn3270-script
         */
        readonly script: cdk.IResolvable | CfnTestCase.ScriptProperty;
    }
    /**
     * Specifies the script.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-script.html
     */
    interface ScriptProperty {
        /**
         * The script location of the scripts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-script.html#cfn-apptest-testcase-script-scriptlocation
         */
        readonly scriptLocation: string;
        /**
         * The type of the scripts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-script.html#cfn-apptest-testcase-script-type
         */
        readonly type: string;
    }
    /**
     * Specifies the mainframe action properties.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeactionproperties.html
     */
    interface MainframeActionPropertiesProperty {
        /**
         * The DMS task ARN of the mainframe action properties.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeactionproperties.html#cfn-apptest-testcase-mainframeactionproperties-dmstaskarn
         */
        readonly dmsTaskArn?: string;
    }
    /**
     * Compares the action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-compareaction.html
     */
    interface CompareActionProperty {
        /**
         * The input of the compare action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-compareaction.html#cfn-apptest-testcase-compareaction-input
         */
        readonly input: CfnTestCase.InputProperty | cdk.IResolvable;
        /**
         * The output of the compare action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-compareaction.html#cfn-apptest-testcase-compareaction-output
         */
        readonly output?: cdk.IResolvable | CfnTestCase.OutputProperty;
    }
    /**
     * Specifies the input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-input.html
     */
    interface InputProperty {
        /**
         * The file in the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-input.html#cfn-apptest-testcase-input-file
         */
        readonly file: CfnTestCase.InputFileProperty | cdk.IResolvable;
    }
    /**
     * Specifies the input file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-inputfile.html
     */
    interface InputFileProperty {
        /**
         * The file metadata of the input file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-inputfile.html#cfn-apptest-testcase-inputfile-filemetadata
         */
        readonly fileMetadata: CfnTestCase.FileMetadataProperty | cdk.IResolvable;
        /**
         * The source location of the input file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-inputfile.html#cfn-apptest-testcase-inputfile-sourcelocation
         */
        readonly sourceLocation: string;
        /**
         * The target location of the input file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-inputfile.html#cfn-apptest-testcase-inputfile-targetlocation
         */
        readonly targetLocation: string;
    }
    /**
     * Specifies a file metadata.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-filemetadata.html
     */
    interface FileMetadataProperty {
        /**
         * The database CDC of the file metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-filemetadata.html#cfn-apptest-testcase-filemetadata-databasecdc
         */
        readonly databaseCdc?: CfnTestCase.DatabaseCDCProperty | cdk.IResolvable;
        /**
         * The data sets of the file metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-filemetadata.html#cfn-apptest-testcase-filemetadata-datasets
         */
        readonly dataSets?: Array<CfnTestCase.DataSetProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Defines a data set.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-dataset.html
     */
    interface DataSetProperty {
        /**
         * The CCSID of the data set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-dataset.html#cfn-apptest-testcase-dataset-ccsid
         */
        readonly ccsid: string;
        /**
         * The format of the data set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-dataset.html#cfn-apptest-testcase-dataset-format
         */
        readonly format: string;
        /**
         * The length of the data set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-dataset.html#cfn-apptest-testcase-dataset-length
         */
        readonly length: number;
        /**
         * The name of the data set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-dataset.html#cfn-apptest-testcase-dataset-name
         */
        readonly name: string;
        /**
         * The type of the data set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-dataset.html#cfn-apptest-testcase-dataset-type
         */
        readonly type: string;
    }
    /**
     * Defines the Change Data Capture (CDC) of the database.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-databasecdc.html
     */
    interface DatabaseCDCProperty {
        /**
         * The source metadata of the database CDC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-databasecdc.html#cfn-apptest-testcase-databasecdc-sourcemetadata
         */
        readonly sourceMetadata: cdk.IResolvable | CfnTestCase.SourceDatabaseMetadataProperty;
        /**
         * The target metadata of the database CDC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-databasecdc.html#cfn-apptest-testcase-databasecdc-targetmetadata
         */
        readonly targetMetadata: cdk.IResolvable | CfnTestCase.TargetDatabaseMetadataProperty;
    }
    /**
     * Specifies the source database metadata.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-sourcedatabasemetadata.html
     */
    interface SourceDatabaseMetadataProperty {
        /**
         * The capture tool of the source database metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-sourcedatabasemetadata.html#cfn-apptest-testcase-sourcedatabasemetadata-capturetool
         */
        readonly captureTool: string;
        /**
         * The type of the source database metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-sourcedatabasemetadata.html#cfn-apptest-testcase-sourcedatabasemetadata-type
         */
        readonly type: string;
    }
    /**
     * Specifies a target database metadata.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-targetdatabasemetadata.html
     */
    interface TargetDatabaseMetadataProperty {
        /**
         * The capture tool of the target database metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-targetdatabasemetadata.html#cfn-apptest-testcase-targetdatabasemetadata-capturetool
         */
        readonly captureTool: string;
        /**
         * The type of the target database metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-targetdatabasemetadata.html#cfn-apptest-testcase-targetdatabasemetadata-type
         */
        readonly type: string;
    }
    /**
     * Specifies an output.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-output.html
     */
    interface OutputProperty {
        /**
         * The file of the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-output.html#cfn-apptest-testcase-output-file
         */
        readonly file: cdk.IResolvable | CfnTestCase.OutputFileProperty;
    }
    /**
     * Specifies an output file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-outputfile.html
     */
    interface OutputFileProperty {
        /**
         * The file location of the output file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-outputfile.html#cfn-apptest-testcase-outputfile-filelocation
         */
        readonly fileLocation?: string;
    }
    /**
     * Specifies the latest version of a test case.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-testcaselatestversion.html
     */
    interface TestCaseLatestVersionProperty {
        /**
         * The status of the test case latest version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-testcaselatestversion.html#cfn-apptest-testcase-testcaselatestversion-status
         */
        readonly status: string;
        /**
         * The version of the test case latest version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-testcaselatestversion.html#cfn-apptest-testcase-testcaselatestversion-version
         */
        readonly version: number;
    }
}
/**
 * Properties for defining a `CfnTestCase`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html
 */
export interface CfnTestCaseProps {
    /**
     * The description of the test case.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-description
     */
    readonly description?: string;
    /**
     * The name of the test case.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-name
     */
    readonly name: string;
    /**
     * The steps in the test case.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-steps
     */
    readonly steps: Array<cdk.IResolvable | CfnTestCase.StepProperty> | cdk.IResolvable;
    /**
     * The specified tags of the test case.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-tags
     */
    readonly tags?: Record<string, string>;
}
