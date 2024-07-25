import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a Device Advisor test suite.
 *
 * Requires permission to access the [CreateSuiteDefinition](https://docs.aws.amazon.com//service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @cloudformationResource AWS::IoTCoreDeviceAdvisor::SuiteDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html
 */
export declare class CfnSuiteDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSuiteDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSuiteDefinition;
    /**
     * The Arn of the Suite Definition.
     *
     * @cloudformationAttribute SuiteDefinitionArn
     */
    readonly attrSuiteDefinitionArn: string;
    /**
     * The version of the Suite Definition.
     *
     * @cloudformationAttribute SuiteDefinitionId
     */
    readonly attrSuiteDefinitionId: string;
    /**
     * The ID of the Suite Definition.
     *
     * @cloudformationAttribute SuiteDefinitionVersion
     */
    readonly attrSuiteDefinitionVersion: string;
    /**
     * The configuration of the Suite Definition. Listed below are the required elements of the `SuiteDefinitionConfiguration` .
     */
    suiteDefinitionConfiguration: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that can be used to manage the the Suite Definition.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSuiteDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSuiteDefinition {
    /**
     * Gets the suite definition configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration.html
     */
    interface SuiteDefinitionConfigurationProperty {
        /**
         * Gets the device permission ARN.
         *
         * This is a required parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration.html#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-devicepermissionrolearn
         */
        readonly devicePermissionRoleArn: string;
        /**
         * Gets the devices configured.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration.html#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-devices
         */
        readonly devices?: Array<CfnSuiteDefinition.DeviceUnderTestProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Gets the tests intended for qualification in a suite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration.html#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-intendedforqualification
         */
        readonly intendedForQualification?: boolean | cdk.IResolvable;
        /**
         * Gets the test suite root group.
         *
         * This is a required parameter. For updating or creating the latest qualification suite, if `intendedForQualification` is set to true, `rootGroup` can be an empty string. If `intendedForQualification` is false, `rootGroup` cannot be an empty string. If `rootGroup` is empty, and `intendedForQualification` is set to true, all the qualification tests are included, and the configuration is default.
         *
         * For a qualification suite, the minimum length is 0, and the maximum is 2048. For a non-qualification suite, the minimum length is 1, and the maximum is 2048.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration.html#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-rootgroup
         */
        readonly rootGroup: string;
        /**
         * Gets the suite definition name.
         *
         * This is a required parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration.html#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-suitedefinitionname
         */
        readonly suiteDefinitionName?: string;
    }
    /**
     * Information of a test device.
     *
     * A thing ARN, certificate ARN or device role ARN is required.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-deviceundertest.html
     */
    interface DeviceUnderTestProperty {
        /**
         * Lists device's certificate ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-deviceundertest.html#cfn-iotcoredeviceadvisor-suitedefinition-deviceundertest-certificatearn
         */
        readonly certificateArn?: string;
        /**
         * Lists device's thing ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-deviceundertest.html#cfn-iotcoredeviceadvisor-suitedefinition-deviceundertest-thingarn
         */
        readonly thingArn?: string;
    }
}
/**
 * Properties for defining a `CfnSuiteDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html
 */
export interface CfnSuiteDefinitionProps {
    /**
     * The configuration of the Suite Definition. Listed below are the required elements of the `SuiteDefinitionConfiguration` .
     *
     * - ***devicePermissionRoleArn*** - The device permission arn.
     *
     * This is a required element.
     *
     * *Type:* String
     * - ***devices*** - The list of configured devices under test. For more information on devices under test, see [DeviceUnderTest](https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_DeviceUnderTest.html)
     *
     * Not a required element.
     *
     * *Type:* List of devices under test
     * - ***intendedForQualification*** - The tests intended for qualification in a suite.
     *
     * Not a required element.
     *
     * *Type:* Boolean
     * - ***rootGroup*** - The test suite root group. For more information on creating and using root groups see the [Device Advisor workflow](https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-workflow.html) .
     *
     * This is a required element.
     *
     * *Type:* String
     * - ***suiteDefinitionName*** - The Suite Definition Configuration name.
     *
     * This is a required element.
     *
     * *Type:* String
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration
     */
    readonly suiteDefinitionConfiguration: any | cdk.IResolvable;
    /**
     * Metadata that can be used to manage the the Suite Definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html#cfn-iotcoredeviceadvisor-suitedefinition-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
