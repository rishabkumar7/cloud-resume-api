import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Describes an environment.
 *
 * @cloudformationResource AWS::WorkSpacesThinClient::Environment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html
 */
export declare class CfnEnvironment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
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
     * The activation code to register a device to the environment.
     *
     * @cloudformationAttribute ActivationCode
     */
    readonly attrActivationCode: string;
    /**
     * The Amazon Resource Name (ARN) of the environment.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The timestamp of when the environment was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The type of streaming desktop for the environment.
     *
     * @cloudformationAttribute DesktopType
     */
    readonly attrDesktopType: string;
    /**
     * Unique identifier of the environment.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the software set that is pending to be installed.
     *
     * @cloudformationAttribute PendingSoftwareSetId
     */
    readonly attrPendingSoftwareSetId: string;
    /**
     * The version of the software set that is pending to be installed.
     *
     * @cloudformationAttribute PendingSoftwareSetVersion
     */
    readonly attrPendingSoftwareSetVersion: string;
    /**
     * The number of devices registered to the environment.
     *
     * @cloudformationAttribute RegisteredDevicesCount
     */
    readonly attrRegisteredDevicesCount: number;
    /**
     * Describes if the software currently installed on all devices in the environment is a supported version.
     *
     * @cloudformationAttribute SoftwareSetComplianceStatus
     */
    readonly attrSoftwareSetComplianceStatus: string;
    /**
     * The timestamp of when the device was updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The ID of the software set to apply.
     */
    desiredSoftwareSetId?: string;
    /**
     * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.
     */
    desktopArn: string;
    /**
     * The URL for the identity provider login (only for environments that use AppStream 2.0).
     */
    desktopEndpoint?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.
     */
    kmsKeyArn?: string;
    /**
     * A specification for a time window to apply software updates.
     */
    maintenanceWindow?: cdk.IResolvable | CfnEnvironment.MaintenanceWindowProperty;
    /**
     * The name of the environment.
     */
    name?: string;
    /**
     * An option to define which software updates to apply.
     */
    softwareSetUpdateMode?: string;
    /**
     * An option to define if software updates should be applied within a maintenance window.
     */
    softwareSetUpdateSchedule?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
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
     * Describes the maintenance window for a thin client device.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-maintenancewindow.html
     */
    interface MaintenanceWindowProperty {
        /**
         * The option to set the maintenance window during the device local time or Universal Coordinated Time (UTC).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-maintenancewindow.html#cfn-workspacesthinclient-environment-maintenancewindow-applytimeof
         */
        readonly applyTimeOf?: string;
        /**
         * The days of the week during which the maintenance window is open.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-maintenancewindow.html#cfn-workspacesthinclient-environment-maintenancewindow-daysoftheweek
         */
        readonly daysOfTheWeek?: Array<string>;
        /**
         * The hour for the maintenance window end ( `00` - `23` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-maintenancewindow.html#cfn-workspacesthinclient-environment-maintenancewindow-endtimehour
         */
        readonly endTimeHour?: number;
        /**
         * The minutes for the maintenance window end ( `00` - `59` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-maintenancewindow.html#cfn-workspacesthinclient-environment-maintenancewindow-endtimeminute
         */
        readonly endTimeMinute?: number;
        /**
         * The hour for the maintenance window start ( `00` - `23` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-maintenancewindow.html#cfn-workspacesthinclient-environment-maintenancewindow-starttimehour
         */
        readonly startTimeHour?: number;
        /**
         * The minutes past the hour for the maintenance window start ( `00` - `59` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-maintenancewindow.html#cfn-workspacesthinclient-environment-maintenancewindow-starttimeminute
         */
        readonly startTimeMinute?: number;
        /**
         * An option to select the default or custom maintenance window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-maintenancewindow.html#cfn-workspacesthinclient-environment-maintenancewindow-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnEnvironment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html
 */
export interface CfnEnvironmentProps {
    /**
     * The ID of the software set to apply.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html#cfn-workspacesthinclient-environment-desiredsoftwaresetid
     */
    readonly desiredSoftwareSetId?: string;
    /**
     * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html#cfn-workspacesthinclient-environment-desktoparn
     */
    readonly desktopArn: string;
    /**
     * The URL for the identity provider login (only for environments that use AppStream 2.0).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html#cfn-workspacesthinclient-environment-desktopendpoint
     */
    readonly desktopEndpoint?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html#cfn-workspacesthinclient-environment-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * A specification for a time window to apply software updates.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html#cfn-workspacesthinclient-environment-maintenancewindow
     */
    readonly maintenanceWindow?: cdk.IResolvable | CfnEnvironment.MaintenanceWindowProperty;
    /**
     * The name of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html#cfn-workspacesthinclient-environment-name
     */
    readonly name?: string;
    /**
     * An option to define which software updates to apply.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html#cfn-workspacesthinclient-environment-softwaresetupdatemode
     */
    readonly softwareSetUpdateMode?: string;
    /**
     * An option to define if software updates should be applied within a maintenance window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html#cfn-workspacesthinclient-environment-softwaresetupdateschedule
     */
    readonly softwareSetUpdateSchedule?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html#cfn-workspacesthinclient-environment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
