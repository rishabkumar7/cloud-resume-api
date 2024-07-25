import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Details about a filter.
 *
 * @cloudformationResource AWS::InspectorV2::Filter
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html
 */
export declare class CfnFilter extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFilter from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFilter;
    /**
     * The Amazon Resource Number (ARN) associated with this filter.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A description of the filter.
     */
    description?: string;
    /**
     * The action that is to be applied to the findings that match the filter.
     */
    filterAction: string;
    /**
     * Details on the filter criteria associated with this filter.
     */
    filterCriteria: CfnFilter.FilterCriteriaProperty | cdk.IResolvable;
    /**
     * The name of the filter.
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFilterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFilter {
    /**
     * Details on the criteria used to define the filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html
     */
    interface FilterCriteriaProperty {
        /**
         * Details of the AWS account IDs used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-awsaccountid
         */
        readonly awsAccountId?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details of the component IDs used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-componentid
         */
        readonly componentId?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details of the component types used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-componenttype
         */
        readonly componentType?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details of the Amazon EC2 instance image IDs used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-ec2instanceimageid
         */
        readonly ec2InstanceImageId?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details of the Amazon EC2 instance subnet IDs used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-ec2instancesubnetid
         */
        readonly ec2InstanceSubnetId?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details of the Amazon EC2 instance VPC IDs used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-ec2instancevpcid
         */
        readonly ec2InstanceVpcId?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details of the Amazon ECR image architecture types used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-ecrimagearchitecture
         */
        readonly ecrImageArchitecture?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details of the Amazon ECR image hashes used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-ecrimagehash
         */
        readonly ecrImageHash?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the Amazon ECR image push date and time used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-ecrimagepushedat
         */
        readonly ecrImagePushedAt?: Array<CfnFilter.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Details on the Amazon ECR registry used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-ecrimageregistry
         */
        readonly ecrImageRegistry?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the name of the Amazon ECR repository used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-ecrimagerepositoryname
         */
        readonly ecrImageRepositoryName?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * The tags attached to the Amazon ECR container image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-ecrimagetags
         */
        readonly ecrImageTags?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the finding ARNs used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-findingarn
         */
        readonly findingArn?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the finding status types used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-findingstatus
         */
        readonly findingStatus?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the finding types used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-findingtype
         */
        readonly findingType?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the date and time a finding was first seen used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-firstobservedat
         */
        readonly firstObservedAt?: Array<CfnFilter.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The Amazon Inspector score to filter on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-inspectorscore
         */
        readonly inspectorScore?: Array<cdk.IResolvable | CfnFilter.NumberFilterProperty> | cdk.IResolvable;
        /**
         * Details on the date and time a finding was last seen used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-lastobservedat
         */
        readonly lastObservedAt?: Array<CfnFilter.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Details on network protocol used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-networkprotocol
         */
        readonly networkProtocol?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the port ranges used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-portrange
         */
        readonly portRange?: Array<cdk.IResolvable | CfnFilter.PortRangeFilterProperty> | cdk.IResolvable;
        /**
         * Details on the related vulnerabilities used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-relatedvulnerabilities
         */
        readonly relatedVulnerabilities?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the resource IDs used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-resourceid
         */
        readonly resourceId?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the resource tags used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-resourcetags
         */
        readonly resourceTags?: Array<cdk.IResolvable | CfnFilter.MapFilterProperty> | cdk.IResolvable;
        /**
         * Details on the resource types used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-resourcetype
         */
        readonly resourceType?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the severity used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-severity
         */
        readonly severity?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the finding title used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-title
         */
        readonly title?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the date and time a finding was last updated at used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-updatedat
         */
        readonly updatedAt?: Array<CfnFilter.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Details on the vendor severity used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-vendorseverity
         */
        readonly vendorSeverity?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the vulnerability ID used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-vulnerabilityid
         */
        readonly vulnerabilityId?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the vulnerability score to filter findings by.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-vulnerabilitysource
         */
        readonly vulnerabilitySource?: Array<cdk.IResolvable | CfnFilter.StringFilterProperty> | cdk.IResolvable;
        /**
         * Details on the vulnerable packages used to filter findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html#cfn-inspectorv2-filter-filtercriteria-vulnerablepackages
         */
        readonly vulnerablePackages?: Array<cdk.IResolvable | CfnFilter.PackageFilterProperty> | cdk.IResolvable;
    }
    /**
     * An object that describes details of a map filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-mapfilter.html
     */
    interface MapFilterProperty {
        /**
         * The operator to use when comparing values in the filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-mapfilter.html#cfn-inspectorv2-filter-mapfilter-comparison
         */
        readonly comparison: string;
        /**
         * The tag key used in the filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-mapfilter.html#cfn-inspectorv2-filter-mapfilter-key
         */
        readonly key?: string;
        /**
         * The tag value used in the filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-mapfilter.html#cfn-inspectorv2-filter-mapfilter-value
         */
        readonly value?: string;
    }
    /**
     * An object that describes the details of a string filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-stringfilter.html
     */
    interface StringFilterProperty {
        /**
         * The operator to use when comparing values in the filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-stringfilter.html#cfn-inspectorv2-filter-stringfilter-comparison
         */
        readonly comparison: string;
        /**
         * The value to filter on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-stringfilter.html#cfn-inspectorv2-filter-stringfilter-value
         */
        readonly value: string;
    }
    /**
     * Contains details on the time range used to filter findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-datefilter.html
     */
    interface DateFilterProperty {
        /**
         * A timestamp representing the end of the time period filtered on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-datefilter.html#cfn-inspectorv2-filter-datefilter-endinclusive
         */
        readonly endInclusive?: number;
        /**
         * A timestamp representing the start of the time period filtered on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-datefilter.html#cfn-inspectorv2-filter-datefilter-startinclusive
         */
        readonly startInclusive?: number;
    }
    /**
     * An object that describes the details of a number filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-numberfilter.html
     */
    interface NumberFilterProperty {
        /**
         * The lowest number to be included in the filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-numberfilter.html#cfn-inspectorv2-filter-numberfilter-lowerinclusive
         */
        readonly lowerInclusive?: number;
        /**
         * The highest number to be included in the filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-numberfilter.html#cfn-inspectorv2-filter-numberfilter-upperinclusive
         */
        readonly upperInclusive?: number;
    }
    /**
     * An object that describes the details of a port range filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-portrangefilter.html
     */
    interface PortRangeFilterProperty {
        /**
         * The port number the port range begins at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-portrangefilter.html#cfn-inspectorv2-filter-portrangefilter-begininclusive
         */
        readonly beginInclusive?: number;
        /**
         * The port number the port range ends at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-portrangefilter.html#cfn-inspectorv2-filter-portrangefilter-endinclusive
         */
        readonly endInclusive?: number;
    }
    /**
     * Contains information on the details of a package filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-packagefilter.html
     */
    interface PackageFilterProperty {
        /**
         * An object that contains details on the package architecture type to filter on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-packagefilter.html#cfn-inspectorv2-filter-packagefilter-architecture
         */
        readonly architecture?: cdk.IResolvable | CfnFilter.StringFilterProperty;
        /**
         * An object that contains details on the package epoch to filter on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-packagefilter.html#cfn-inspectorv2-filter-packagefilter-epoch
         */
        readonly epoch?: cdk.IResolvable | CfnFilter.NumberFilterProperty;
        /**
         * An object that contains details on the name of the package to filter on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-packagefilter.html#cfn-inspectorv2-filter-packagefilter-name
         */
        readonly name?: cdk.IResolvable | CfnFilter.StringFilterProperty;
        /**
         * An object that contains details on the package release to filter on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-packagefilter.html#cfn-inspectorv2-filter-packagefilter-release
         */
        readonly release?: cdk.IResolvable | CfnFilter.StringFilterProperty;
        /**
         * An object that contains details on the source layer hash to filter on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-packagefilter.html#cfn-inspectorv2-filter-packagefilter-sourcelayerhash
         */
        readonly sourceLayerHash?: cdk.IResolvable | CfnFilter.StringFilterProperty;
        /**
         * The package version to filter on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-packagefilter.html#cfn-inspectorv2-filter-packagefilter-version
         */
        readonly version?: cdk.IResolvable | CfnFilter.StringFilterProperty;
    }
}
/**
 * Properties for defining a `CfnFilter`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html
 */
export interface CfnFilterProps {
    /**
     * A description of the filter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-description
     */
    readonly description?: string;
    /**
     * The action that is to be applied to the findings that match the filter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filteraction
     */
    readonly filterAction: string;
    /**
     * Details on the filter criteria associated with this filter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria
     */
    readonly filterCriteria: CfnFilter.FilterCriteriaProperty | cdk.IResolvable;
    /**
     * The name of the filter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-name
     */
    readonly name: string;
}
/**
 * The CIS scan configuration.
 *
 * @cloudformationResource AWS::InspectorV2::CisScanConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html
 */
export declare class CfnCisScanConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCisScanConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCisScanConfiguration;
    /**
     * The CIS scan configuration's scan configuration ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the CIS scan configuration.
     */
    scanName?: string;
    /**
     * The CIS scan configuration's schedule.
     */
    schedule?: cdk.IResolvable | CfnCisScanConfiguration.ScheduleProperty;
    /**
     * The CIS scan configuration's CIS Benchmark level.
     */
    securityLevel?: string;
    /**
     * The CIS scan configuration's tags.
     */
    tags?: Record<string, string>;
    /**
     * The CIS scan configuration's targets.
     */
    targets?: CfnCisScanConfiguration.CisTargetsProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnCisScanConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCisScanConfiguration {
    /**
     * The schedule the CIS scan configuration runs on.
     *
     * Each CIS scan configuration has exactly one type of schedule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-schedule.html
     */
    interface ScheduleProperty {
        /**
         * A daily schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-schedule.html#cfn-inspectorv2-cisscanconfiguration-schedule-daily
         */
        readonly daily?: CfnCisScanConfiguration.DailyScheduleProperty | cdk.IResolvable;
        /**
         * A monthly schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-schedule.html#cfn-inspectorv2-cisscanconfiguration-schedule-monthly
         */
        readonly monthly?: cdk.IResolvable | CfnCisScanConfiguration.MonthlyScheduleProperty;
        /**
         * A one time schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-schedule.html#cfn-inspectorv2-cisscanconfiguration-schedule-onetime
         */
        readonly oneTime?: any | cdk.IResolvable;
        /**
         * A weekly schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-schedule.html#cfn-inspectorv2-cisscanconfiguration-schedule-weekly
         */
        readonly weekly?: cdk.IResolvable | CfnCisScanConfiguration.WeeklyScheduleProperty;
    }
    /**
     * A daily schedule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-dailyschedule.html
     */
    interface DailyScheduleProperty {
        /**
         * The schedule start time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-dailyschedule.html#cfn-inspectorv2-cisscanconfiguration-dailyschedule-starttime
         */
        readonly startTime: cdk.IResolvable | CfnCisScanConfiguration.TimeProperty;
    }
    /**
     * The time.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-time.html
     */
    interface TimeProperty {
        /**
         * The time of day in 24-hour format (00:00).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-time.html#cfn-inspectorv2-cisscanconfiguration-time-timeofday
         */
        readonly timeOfDay: string;
        /**
         * The timezone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-time.html#cfn-inspectorv2-cisscanconfiguration-time-timezone
         */
        readonly timeZone: string;
    }
    /**
     * A weekly schedule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-weeklyschedule.html
     */
    interface WeeklyScheduleProperty {
        /**
         * The weekly schedule's days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-weeklyschedule.html#cfn-inspectorv2-cisscanconfiguration-weeklyschedule-days
         */
        readonly days: Array<string>;
        /**
         * The weekly schedule's start time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-weeklyschedule.html#cfn-inspectorv2-cisscanconfiguration-weeklyschedule-starttime
         */
        readonly startTime: cdk.IResolvable | CfnCisScanConfiguration.TimeProperty;
    }
    /**
     * A monthly schedule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-monthlyschedule.html
     */
    interface MonthlyScheduleProperty {
        /**
         * The monthly schedule's day.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-monthlyschedule.html#cfn-inspectorv2-cisscanconfiguration-monthlyschedule-day
         */
        readonly day: string;
        /**
         * The monthly schedule's start time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-monthlyschedule.html#cfn-inspectorv2-cisscanconfiguration-monthlyschedule-starttime
         */
        readonly startTime: cdk.IResolvable | CfnCisScanConfiguration.TimeProperty;
    }
    /**
     * The CIS targets.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-cistargets.html
     */
    interface CisTargetsProperty {
        /**
         * The CIS target account ids.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-cistargets.html#cfn-inspectorv2-cisscanconfiguration-cistargets-accountids
         */
        readonly accountIds: Array<string>;
        /**
         * The CIS target resource tags.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-cistargets.html#cfn-inspectorv2-cisscanconfiguration-cistargets-targetresourcetags
         */
        readonly targetResourceTags?: cdk.IResolvable | Record<string, Array<string>>;
    }
}
/**
 * Properties for defining a `CfnCisScanConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html
 */
export interface CfnCisScanConfigurationProps {
    /**
     * The name of the CIS scan configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-scanname
     */
    readonly scanName?: string;
    /**
     * The CIS scan configuration's schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-schedule
     */
    readonly schedule?: cdk.IResolvable | CfnCisScanConfiguration.ScheduleProperty;
    /**
     * The CIS scan configuration's CIS Benchmark level.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-securitylevel
     */
    readonly securityLevel?: string;
    /**
     * The CIS scan configuration's tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The CIS scan configuration's targets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-targets
     */
    readonly targets?: CfnCisScanConfiguration.CisTargetsProperty | cdk.IResolvable;
}
