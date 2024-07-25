import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The resource represents an enabled control.
 *
 * It specifies an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.
 *
 * @cloudformationResource AWS::ControlTower::EnabledControl
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html
 */
export declare class CfnEnabledControl extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnabledControl from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnabledControl;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The ARN of the control.
     */
    controlIdentifier: string;
    /**
     * Array of `EnabledControlParameter` objects.
     */
    parameters?: Array<CfnEnabledControl.EnabledControlParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tags to be applied to the enabled control.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the organizational unit.
     */
    targetIdentifier: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEnabledControlProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEnabledControl {
    /**
     * A set of parameters that configure the behavior of the enabled control.
     *
     * Expressed as a key/value pair, where `Key` is of type `String` and `Value` is of type `Document` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledcontrol-enabledcontrolparameter.html
     */
    interface EnabledControlParameterProperty {
        /**
         * The key of a key/value pair.
         *
         * It is of type `string` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledcontrol-enabledcontrolparameter.html#cfn-controltower-enabledcontrol-enabledcontrolparameter-key
         */
        readonly key: string;
        /**
         * The value of a key/value pair.
         *
         * It can be of type `array` , `string` , `number` , `object` , or `boolean` . [Note: The *Type* field that follows may show a single type such as Number, which is only one possible type.]
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledcontrol-enabledcontrolparameter.html#cfn-controltower-enabledcontrol-enabledcontrolparameter-value
         */
        readonly value: any | Array<any | boolean | cdk.IResolvable | number | string> | boolean | cdk.IResolvable | number | string;
    }
}
/**
 * Properties for defining a `CfnEnabledControl`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html
 */
export interface CfnEnabledControlProps {
    /**
     * The ARN of the control.
     *
     * Only *Strongly recommended* and *Elective* controls are permitted, with the exception of the *Region deny* control. For information on how to find the `controlIdentifier` , see [the overview page](https://docs.aws.amazon.com//controltower/latest/APIReference/Welcome.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-controlidentifier
     */
    readonly controlIdentifier: string;
    /**
     * Array of `EnabledControlParameter` objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-parameters
     */
    readonly parameters?: Array<CfnEnabledControl.EnabledControlParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tags to be applied to the enabled control.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the organizational unit.
     *
     * For information on how to find the `targetIdentifier` , see [the overview page](https://docs.aws.amazon.com//controltower/latest/APIReference/Welcome.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-targetidentifier
     */
    readonly targetIdentifier: string;
}
/**
 * This resource represents a `Baseline` that has been applied to a target.
 *
 * @cloudformationResource AWS::ControlTower::EnabledBaseline
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html
 */
export declare class CfnEnabledBaseline extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnabledBaseline from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnabledBaseline;
    /**
     * The ARN of the `EnabledBaseline` resource.
     *
     * @cloudformationAttribute EnabledBaselineIdentifier
     */
    readonly attrEnabledBaselineIdentifier: string;
    /**
     * The specific `Baseline` enabled as part of the `EnabledBaseline` resource.
     */
    baselineIdentifier: string;
    /**
     * The enabled version of the `Baseline` .
     */
    baselineVersion: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Parameters that are applied when enabling this `Baseline` .
     */
    parameters?: Array<cdk.IResolvable | CfnEnabledBaseline.ParameterProperty> | cdk.IResolvable;
    /**
     * Tags associated with input to `EnableBaseline` .
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The target on which to enable the `Baseline` .
     */
    targetIdentifier: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEnabledBaselineProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEnabledBaseline {
    /**
     * A key-value parameter to an `EnabledBaseline` resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledbaseline-parameter.html
     */
    interface ParameterProperty {
        /**
         * A string denoting the parameter key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledbaseline-parameter.html#cfn-controltower-enabledbaseline-parameter-key
         */
        readonly key?: string;
        /**
         * A low-level `Document` object of any type (for example, a Java Object).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledbaseline-parameter.html#cfn-controltower-enabledbaseline-parameter-value
         */
        readonly value?: any | Array<any | boolean | cdk.IResolvable | number | string> | boolean | cdk.IResolvable | number | string;
    }
}
/**
 * Properties for defining a `CfnEnabledBaseline`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html
 */
export interface CfnEnabledBaselineProps {
    /**
     * The specific `Baseline` enabled as part of the `EnabledBaseline` resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-baselineidentifier
     */
    readonly baselineIdentifier: string;
    /**
     * The enabled version of the `Baseline` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-baselineversion
     */
    readonly baselineVersion: string;
    /**
     * Parameters that are applied when enabling this `Baseline` .
     *
     * These parameters configure the behavior of the baseline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-parameters
     */
    readonly parameters?: Array<cdk.IResolvable | CfnEnabledBaseline.ParameterProperty> | cdk.IResolvable;
    /**
     * Tags associated with input to `EnableBaseline` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The target on which to enable the `Baseline` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-targetidentifier
     */
    readonly targetIdentifier: string;
}
/**
 * Creates a new landing zone.
 *
 * This API call starts an asynchronous operation that creates and configures a landing zone, based on the parameters specified in the manifest JSON file.
 *
 * @cloudformationResource AWS::ControlTower::LandingZone
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-landingzone.html
 */
export declare class CfnLandingZone extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLandingZone from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLandingZone;
    /**
     * The ARN of the landing zone.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The drift status of the landing zone.
     *
     * @cloudformationAttribute DriftStatus
     */
    readonly attrDriftStatus: string;
    /**
     * The unique identifier of the landing zone.
     *
     * @cloudformationAttribute LandingZoneIdentifier
     */
    readonly attrLandingZoneIdentifier: string;
    /**
     * The latest available version of the landing zone.
     *
     * @cloudformationAttribute LatestAvailableVersion
     */
    readonly attrLatestAvailableVersion: string;
    /**
     * The landing zone deployment status. One of `ACTIVE` , `PROCESSING` , `FAILED` .
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The landing zone manifest JSON text file that specifies the landing zone configurations.
     */
    manifest: any | cdk.IResolvable;
    /**
     * Tags to be applied to the landing zone.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The landing zone's current deployed version.
     */
    version: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLandingZoneProps);
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
 * Properties for defining a `CfnLandingZone`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-landingzone.html
 */
export interface CfnLandingZoneProps {
    /**
     * The landing zone manifest JSON text file that specifies the landing zone configurations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-landingzone.html#cfn-controltower-landingzone-manifest
     */
    readonly manifest: any | cdk.IResolvable;
    /**
     * Tags to be applied to the landing zone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-landingzone.html#cfn-controltower-landingzone-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The landing zone's current deployed version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-landingzone.html#cfn-controltower-landingzone-version
     */
    readonly version: string;
}
