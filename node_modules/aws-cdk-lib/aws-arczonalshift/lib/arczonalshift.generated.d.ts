import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The zonal autoshift configuration for a resource includes the practice run configuration and the status for running autoshifts, zonal autoshift status.
 *
 * When a resource has a practice run configuation, Route 53 ARC starts weekly zonal shifts for the resource, to shift traffic away from an Availability Zone. Weekly practice runs help you to make sure that your application can continue to operate normally with the loss of one Availability Zone.
 *
 * You can update the zonal autoshift autoshift status to enable or disable zonal autoshift. When zonal autoshift is `ENABLED` , you authorize AWS to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery. Traffic is also shifted away for the required weekly practice runs.
 *
 * @cloudformationResource AWS::ARCZonalShift::ZonalAutoshiftConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html
 */
export declare class CfnZonalAutoshiftConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnZonalAutoshiftConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnZonalAutoshiftConfiguration;
    /**
     * A practice run configuration for a resource includes the Amazon CloudWatch alarms that you've specified for a practice run, as well as any blocked dates or blocked windows for the practice run.
     */
    practiceRunConfiguration?: cdk.IResolvable | CfnZonalAutoshiftConfiguration.PracticeRunConfigurationProperty;
    /**
     * The identifier for the resource that AWS shifts traffic for.
     */
    resourceIdentifier: string;
    /**
     * When zonal autoshift is `ENABLED` , you authorize AWS to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery.
     */
    zonalAutoshiftStatus?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnZonalAutoshiftConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnZonalAutoshiftConfiguration {
    /**
     * A practice run configuration for a resource includes the Amazon CloudWatch alarms that you've specified for a practice run, as well as any blocked dates or blocked windows for the practice run.
     *
     * When a resource has a practice run configuation, Route 53 ARC starts weekly zonal shifts for the resource, to shift traffic away from an Availability Zone. Weekly practice runs help you to make sure that your application can continue to operate normally with the loss of one Availability Zone.
     *
     * You can update or delete a practice run configuration. When you delete a practice run configuration, zonal autoshift is disabled for the resource. A practice run configuration is required when zonal autoshift is enabled.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration.html
     */
    interface PracticeRunConfigurationProperty {
        /**
         * An array of one or more dates that you can specify when AWS does not start practice runs for a resource.
         *
         * Dates are in UTC.
         *
         * Specify blocked dates in the format `YYYY-MM-DD` , separated by spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration-blockeddates
         */
        readonly blockedDates?: Array<string>;
        /**
         * An array of one or more days and times that you can specify when Route 53 ARC does not start practice runs for a resource.
         *
         * Days and times are in UTC.
         *
         * Specify blocked windows in the format `DAY:HH:MM-DAY:HH:MM` , separated by spaces. For example, `MON:18:30-MON:19:30 TUE:18:30-TUE:19:30` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration-blockedwindows
         */
        readonly blockedWindows?: Array<string>;
        /**
         * An optional alarm that you can specify that blocks practice runs when the alarm is in an `ALARM` state.
         *
         * When a blocking alarm goes into an `ALARM` state, it prevents practice runs from being started, and ends practice runs that are in progress.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration-blockingalarms
         */
        readonly blockingAlarms?: Array<CfnZonalAutoshiftConfiguration.ControlConditionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The alarm that you specify to monitor the health of your application during practice runs.
         *
         * When the outcome alarm goes into an `ALARM` state, the practice run is ended and the outcome is set to `FAILED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration-outcomealarms
         */
        readonly outcomeAlarms: Array<CfnZonalAutoshiftConfiguration.ControlConditionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A control condition is an alarm that you specify for a practice run.
     *
     * When you configure practice runs with zonal autoshift for a resource, you specify Amazon CloudWatch alarms, which you create in CloudWatch to use with the practice run. The alarms that you specify are an *outcome alarm* , to monitor application health during practice runs and, optionally, a *blocking alarm* , to block practice runs from starting or to interrupt a practice run in progress.
     *
     * Control condition alarms do not apply for autoshifts.
     *
     * For more information, see [Considerations when you configure zonal autoshift](https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.considerations.html) in the Route 53 ARC Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-controlcondition.html
     */
    interface ControlConditionProperty {
        /**
         * The Amazon Resource Name (ARN) for an Amazon CloudWatch alarm that you specify as a control condition for a practice run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-controlcondition.html#cfn-arczonalshift-zonalautoshiftconfiguration-controlcondition-alarmidentifier
         */
        readonly alarmIdentifier: string;
        /**
         * The type of alarm specified for a practice run.
         *
         * You can only specify Amazon CloudWatch alarms for practice runs, so the only valid value is `CLOUDWATCH` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-controlcondition.html#cfn-arczonalshift-zonalautoshiftconfiguration-controlcondition-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnZonalAutoshiftConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html
 */
export interface CfnZonalAutoshiftConfigurationProps {
    /**
     * A practice run configuration for a resource includes the Amazon CloudWatch alarms that you've specified for a practice run, as well as any blocked dates or blocked windows for the practice run.
     *
     * When a resource has a practice run configuration, Route 53 ARC shifts traffic for the resource weekly for practice runs.
     *
     * Practice runs are required for zonal autoshift. The zonal shifts that Route 53 ARC starts for practice runs help you to ensure that shifting away traffic from an Availability Zone during an autoshift is safe for your application.
     *
     * You can update or delete a practice run configuration. Before you delete a practice run configuration, you must disable zonal autoshift for the resource. A practice run configuration is required when zonal autoshift is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration
     */
    readonly practiceRunConfiguration?: cdk.IResolvable | CfnZonalAutoshiftConfiguration.PracticeRunConfigurationProperty;
    /**
     * The identifier for the resource that AWS shifts traffic for.
     *
     * The identifier is the Amazon Resource Name (ARN) for the resource.
     *
     * At this time, supported resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-resourceidentifier
     */
    readonly resourceIdentifier: string;
    /**
     * When zonal autoshift is `ENABLED` , you authorize AWS to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery.
     *
     * Traffic is also shifted away for the required weekly practice runs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-zonalautoshiftstatus
     */
    readonly zonalAutoshiftStatus?: string;
}
