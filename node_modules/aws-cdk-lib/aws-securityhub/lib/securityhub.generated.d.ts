import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::SecurityHub::AutomationRule` resource specifies an automation rule based on input parameters.
 *
 * For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *AWS Security Hub User Guide* .
 *
 * @cloudformationResource AWS::SecurityHub::AutomationRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html
 */
export declare class CfnAutomationRule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAutomationRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAutomationRule;
    /**
     * A timestamp that indicates when the rule was created.
     *
     * Uses the `date-time` format specified in [RFC 3339 section 5.6, Internet Date/Time Format](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc3339#section-5.6) . The value cannot contain spaces. For example, `2020-03-22T13:22:13.933Z` .
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The principal that created the rule. For example, `arn:aws:sts::123456789012:assumed-role/Developer-Role/JaneDoe` .
     *
     * @cloudformationAttribute CreatedBy
     */
    readonly attrCreatedBy: string;
    /**
     * The Amazon Resource Name (ARN) of the automation rule that you create. For example, `arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111` .
     *
     * @cloudformationAttribute RuleArn
     */
    readonly attrRuleArn: string;
    /**
     * A timestamp that indicates when the rule was most recently updated.
     *
     * Uses the `date-time` format specified in [RFC 3339 section 5.6, Internet Date/Time Format](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc3339#section-5.6) . The value cannot contain spaces. For example, `2020-03-22T13:22:13.933Z` .
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * One or more actions to update finding fields if a finding matches the conditions specified in `Criteria` .
     */
    actions?: Array<CfnAutomationRule.AutomationRulesActionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A set of [AWS Security Finding Format (ASFF)](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html) finding field attributes and corresponding expected values that Security Hub uses to filter findings. If a rule is enabled and a finding matches the criteria specified in this parameter, Security Hub applies the rule action to the finding.
     */
    criteria?: CfnAutomationRule.AutomationRulesFindingFiltersProperty | cdk.IResolvable;
    /**
     * A description of the rule.
     */
    description?: string;
    /**
     * Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria.
     */
    isTerminal?: boolean | cdk.IResolvable;
    /**
     * The name of the rule.
     */
    ruleName?: string;
    /**
     * An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings.
     */
    ruleOrder?: number;
    /**
     * Whether the rule is active after it is created.
     */
    ruleStatus?: string;
    /**
     * User-defined tags associated with an automation rule.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnAutomationRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAutomationRule {
    /**
     * One or more actions to update finding fields if a finding matches the defined criteria of the rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesaction.html
     */
    interface AutomationRulesActionProperty {
        /**
         * Specifies that the automation rule action is an update to a finding field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesaction.html#cfn-securityhub-automationrule-automationrulesaction-findingfieldsupdate
         */
        readonly findingFieldsUpdate: CfnAutomationRule.AutomationRulesFindingFieldsUpdateProperty | cdk.IResolvable;
        /**
         * Specifies that the rule action should update the `Types` finding field.
         *
         * The `Types` finding field classifies findings in the format of namespace/category/classifier. For more information, see [Types taxonomy for ASFF](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html) in the *AWS Security Hub User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesaction.html#cfn-securityhub-automationrule-automationrulesaction-type
         */
        readonly type: string;
    }
    /**
     * Identifies the finding fields that the automation rule action updates when a finding matches the defined criteria.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html
     */
    interface AutomationRulesFindingFieldsUpdateProperty {
        /**
         * The rule action updates the `Confidence` field of a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-confidence
         */
        readonly confidence?: number;
        /**
         * The rule action updates the `Criticality` field of a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-criticality
         */
        readonly criticality?: number;
        /**
         * The rule action will update the `Note` field of a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-note
         */
        readonly note?: cdk.IResolvable | CfnAutomationRule.NoteUpdateProperty;
        /**
         * The rule action will update the `RelatedFindings` field of a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-relatedfindings
         */
        readonly relatedFindings?: Array<cdk.IResolvable | CfnAutomationRule.RelatedFindingProperty> | cdk.IResolvable;
        /**
         * The rule action will update the `Severity` field of a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-severity
         */
        readonly severity?: cdk.IResolvable | CfnAutomationRule.SeverityUpdateProperty;
        /**
         * The rule action updates the `Types` field of a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-types
         */
        readonly types?: Array<string>;
        /**
         * The rule action updates the `UserDefinedFields` field of a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-userdefinedfields
         */
        readonly userDefinedFields?: cdk.IResolvable | Record<string, string>;
        /**
         * The rule action updates the `VerificationState` field of a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-verificationstate
         */
        readonly verificationState?: string;
        /**
         * The rule action will update the `Workflow` field of a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-workflow
         */
        readonly workflow?: cdk.IResolvable | CfnAutomationRule.WorkflowUpdateProperty;
    }
    /**
     * The updated note.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-noteupdate.html
     */
    interface NoteUpdateProperty {
        /**
         * The updated note text.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-noteupdate.html#cfn-securityhub-automationrule-noteupdate-text
         */
        readonly text: string;
        /**
         * The principal that updated the note.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-noteupdate.html#cfn-securityhub-automationrule-noteupdate-updatedby
         */
        readonly updatedBy: any | cdk.IResolvable;
    }
    /**
     * Provides details about a list of findings that the current finding relates to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-relatedfinding.html
     */
    interface RelatedFindingProperty {
        /**
         * The product-generated identifier for a related finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-relatedfinding.html#cfn-securityhub-automationrule-relatedfinding-id
         */
        readonly id: any | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) for the product that generated a related finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-relatedfinding.html#cfn-securityhub-automationrule-relatedfinding-productarn
         */
        readonly productArn: string;
    }
    /**
     * Used to update information about the investigation into the finding.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-workflowupdate.html
     */
    interface WorkflowUpdateProperty {
        /**
         * The status of the investigation into the finding.
         *
         * The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to `SUPPRESSED` or `RESOLVED` does not prevent a new finding for the same issue.
         *
         * The allowed values are the following.
         *
         * - `NEW` - The initial state of a finding, before it is reviewed.
         *
         * Security Hub also resets `WorkFlowStatus` from `NOTIFIED` or `RESOLVED` to `NEW` in the following cases:
         *
         * - The record state changes from `ARCHIVED` to `ACTIVE` .
         * - The compliance status changes from `PASSED` to either `WARNING` , `FAILED` , or `NOT_AVAILABLE` .
         * - `NOTIFIED` - Indicates that you notified the resource owner about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.
         * - `RESOLVED` - The finding was reviewed and remediated and is now considered resolved.
         * - `SUPPRESSED` - Indicates that you reviewed the finding and do not believe that any action is needed. The finding is no longer updated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-workflowupdate.html#cfn-securityhub-automationrule-workflowupdate-status
         */
        readonly status: string;
    }
    /**
     * Updates to the severity information for a finding.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-severityupdate.html
     */
    interface SeverityUpdateProperty {
        /**
         * The severity value of the finding. The allowed values are the following.
         *
         * - `INFORMATIONAL` - No issue was found.
         * - `LOW` - The issue does not require action on its own.
         * - `MEDIUM` - The issue must be addressed but not urgently.
         * - `HIGH` - The issue must be addressed as a priority.
         * - `CRITICAL` - The issue must be remediated immediately to avoid it escalating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-severityupdate.html#cfn-securityhub-automationrule-severityupdate-label
         */
        readonly label?: string;
        /**
         * The normalized severity for the finding. This attribute is to be deprecated in favor of `Label` .
         *
         * If you provide `Normalized` and do not provide `Label` , `Label` is set automatically as follows.
         *
         * - 0 - `INFORMATIONAL`
         * - 1–39 - `LOW`
         * - 40–69 - `MEDIUM`
         * - 70–89 - `HIGH`
         * - 90–100 - `CRITICAL`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-severityupdate.html#cfn-securityhub-automationrule-severityupdate-normalized
         */
        readonly normalized?: number;
        /**
         * The native severity as defined by the AWS service or integrated partner product that generated the finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-severityupdate.html#cfn-securityhub-automationrule-severityupdate-product
         */
        readonly product?: number;
    }
    /**
     * The criteria that determine which findings a rule applies to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html
     */
    interface AutomationRulesFindingFiltersProperty {
        /**
         * The AWS account ID in which a finding was generated.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 100 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-awsaccountid
         */
        readonly awsAccountId?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The name of the company for the product that generated the finding.
         *
         * For control-based findings, the company is AWS .
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-companyname
         */
        readonly companyName?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The unique identifier of a standard in which a control is enabled.
         *
         * This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API response.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-complianceassociatedstandardsid
         */
        readonly complianceAssociatedStandardsId?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The security control ID for which a finding was generated. Security control IDs are the same across standards.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-compliancesecuritycontrolid
         */
        readonly complianceSecurityControlId?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The result of a security check. This field is only used for findings generated from controls.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-compliancestatus
         */
        readonly complianceStatus?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.
         *
         * `Confidence` is scored on a 0–100 basis using a ratio scale. A value of `0` means 0 percent confidence, and a value of `100` means 100 percent confidence. For example, a data exfiltration detection based on a statistical deviation of network traffic has low confidence because an actual exfiltration hasn't been verified. For more information, see [Confidence](https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-confidence) in the *AWS Security Hub User Guide* .
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-confidence
         */
        readonly confidence?: Array<cdk.IResolvable | CfnAutomationRule.NumberFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that indicates when this finding record was created.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-createdat
         */
        readonly createdAt?: Array<CfnAutomationRule.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The level of importance that is assigned to the resources that are associated with a finding.
         *
         * `Criticality` is scored on a 0–100 basis, using a ratio scale that supports only full integers. A score of `0` means that the underlying resources have no criticality, and a score of `100` is reserved for the most critical resources. For more information, see [Criticality](https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-criticality) in the *AWS Security Hub User Guide* .
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-criticality
         */
        readonly criticality?: Array<cdk.IResolvable | CfnAutomationRule.NumberFilterProperty> | cdk.IResolvable;
        /**
         * A finding's description.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-description
         */
        readonly description?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that indicates when the potential security issue captured by a finding was first observed by the security findings product.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-firstobservedat
         */
        readonly firstObservedAt?: Array<CfnAutomationRule.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The identifier for the solution-specific component that generated a finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 100 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-generatorid
         */
        readonly generatorId?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The product-specific identifier for a finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-id
         */
        readonly id?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that indicates when the potential security issue captured by a finding was most recently observed by the security findings product.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-lastobservedat
         */
        readonly lastObservedAt?: Array<CfnAutomationRule.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The text of a user-defined note that's added to a finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-notetext
         */
        readonly noteText?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The timestamp of when the note was updated.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-noteupdatedat
         */
        readonly noteUpdatedAt?: Array<CfnAutomationRule.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The principal that created a note.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-noteupdatedby
         */
        readonly noteUpdatedBy?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) for a third-party product that generated a finding in Security Hub.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-productarn
         */
        readonly productArn?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * Provides the name of the product that generated the finding. For control-based findings, the product name is Security Hub.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-productname
         */
        readonly productName?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * Provides the current state of a finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-recordstate
         */
        readonly recordState?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The product-generated identifier for a related finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-relatedfindingsid
         */
        readonly relatedFindingsId?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The ARN for the product that generated a related finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-relatedfindingsproductarn
         */
        readonly relatedFindingsProductArn?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * Custom fields and values about the resource that a finding pertains to.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourcedetailsother
         */
        readonly resourceDetailsOther?: Array<cdk.IResolvable | CfnAutomationRule.MapFilterProperty> | cdk.IResolvable;
        /**
         * The identifier for the given resource type.
         *
         * For AWS resources that are identified by Amazon Resource Names (ARNs), this is the ARN. For AWS resources that lack ARNs, this is the identifier as defined by the AWS service that created the resource. For non- AWS resources, this is a unique identifier that is associated with the resource.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 100 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourceid
         */
        readonly resourceId?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The partition in which the resource that the finding pertains to is located.
         *
         * A partition is a group of AWS Regions . Each AWS account is scoped to one partition.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourcepartition
         */
        readonly resourcePartition?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The AWS Region where the resource that a finding pertains to is located.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourceregion
         */
        readonly resourceRegion?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * A list of AWS tags associated with a resource at the time the finding was processed.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourcetags
         */
        readonly resourceTags?: Array<cdk.IResolvable | CfnAutomationRule.MapFilterProperty> | cdk.IResolvable;
        /**
         * A finding's title.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 100 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourcetype
         */
        readonly resourceType?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * The severity value of the finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-severitylabel
         */
        readonly severityLabel?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * Provides a URL that links to a page about the current finding in the finding product.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-sourceurl
         */
        readonly sourceUrl?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * A finding's title.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 100 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-title
         */
        readonly title?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * One or more finding types in the format of namespace/category/classifier that classify a finding.
         *
         * For a list of namespaces, classifiers, and categories, see [Types taxonomy for ASFF](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html) in the *AWS Security Hub User Guide* .
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-type
         */
        readonly type?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that indicates when the finding record was most recently updated.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-updatedat
         */
        readonly updatedAt?: Array<CfnAutomationRule.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of user-defined name and value string pairs added to a finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-userdefinedfields
         */
        readonly userDefinedFields?: Array<cdk.IResolvable | CfnAutomationRule.MapFilterProperty> | cdk.IResolvable;
        /**
         * Provides the veracity of a finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-verificationstate
         */
        readonly verificationState?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
        /**
         * Provides information about the status of the investigation into a finding.
         *
         * Array Members: Minimum number of 1 item. Maximum number of 20 items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html#cfn-securityhub-automationrule-automationrulesfindingfilters-workflowstatus
         */
        readonly workflowStatus?: Array<cdk.IResolvable | CfnAutomationRule.StringFilterProperty> | cdk.IResolvable;
    }
    /**
     * A string filter for filtering AWS Security Hub findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-stringfilter.html
     */
    interface StringFilterProperty {
        /**
         * The condition to apply to a string value when filtering Security Hub findings.
         *
         * To search for values that have the filter value, use one of the following comparison operators:
         *
         * - To search for values that include the filter value, use `CONTAINS` . For example, the filter `Title CONTAINS CloudFront` matches findings that have a `Title` that includes the string CloudFront.
         * - To search for values that exactly match the filter value, use `EQUALS` . For example, the filter `AwsAccountId EQUALS 123456789012` only matches findings that have an account ID of `123456789012` .
         * - To search for values that start with the filter value, use `PREFIX` . For example, the filter `ResourceRegion PREFIX us` matches findings that have a `ResourceRegion` that starts with `us` . A `ResourceRegion` that starts with a different value, such as `af` , `ap` , or `ca` , doesn't match.
         *
         * `CONTAINS` , `EQUALS` , and `PREFIX` filters on the same field are joined by `OR` . A finding matches if it matches any one of those filters. For example, the filters `Title CONTAINS CloudFront OR Title CONTAINS CloudWatch` match a finding that includes either `CloudFront` , `CloudWatch` , or both strings in the title.
         *
         * To search for values that don’t have the filter value, use one of the following comparison operators:
         *
         * - To search for values that exclude the filter value, use `NOT_CONTAINS` . For example, the filter `Title NOT_CONTAINS CloudFront` matches findings that have a `Title` that excludes the string CloudFront.
         * - To search for values other than the filter value, use `NOT_EQUALS` . For example, the filter `AwsAccountId NOT_EQUALS 123456789012` only matches findings that have an account ID other than `123456789012` .
         * - To search for values that don't start with the filter value, use `PREFIX_NOT_EQUALS` . For example, the filter `ResourceRegion PREFIX_NOT_EQUALS us` matches findings with a `ResourceRegion` that starts with a value other than `us` .
         *
         * `NOT_CONTAINS` , `NOT_EQUALS` , and `PREFIX_NOT_EQUALS` filters on the same field are joined by `AND` . A finding matches only if it matches all of those filters. For example, the filters `Title NOT_CONTAINS CloudFront AND Title NOT_CONTAINS CloudWatch` match a finding that excludes both `CloudFront` and `CloudWatch` in the title.
         *
         * You can’t have both a `CONTAINS` filter and a `NOT_CONTAINS` filter on the same field. Similarly, you can't provide both an `EQUALS` filter and a `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filter on the same field. Combining filters in this way returns an error. `CONTAINS` filters can only be used with other `CONTAINS` filters. `NOT_CONTAINS` filters can only be used with other `NOT_CONTAINS` filters.
         *
         * You can combine `PREFIX` filters with `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filters for the same field. Security Hub first processes the `PREFIX` filters, and then the `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filters.
         *
         * For example, for the following filters, Security Hub first identifies findings that have resource types that start with either `AwsIam` or `AwsEc2` . It then excludes findings that have a resource type of `AwsIamPolicy` and findings that have a resource type of `AwsEc2NetworkInterface` .
         *
         * - `ResourceType PREFIX AwsIam`
         * - `ResourceType PREFIX AwsEc2`
         * - `ResourceType NOT_EQUALS AwsIamPolicy`
         * - `ResourceType NOT_EQUALS AwsEc2NetworkInterface`
         *
         * `CONTAINS` and `NOT_CONTAINS` operators can be used only with automation rules. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *AWS Security Hub User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-stringfilter.html#cfn-securityhub-automationrule-stringfilter-comparison
         */
        readonly comparison: string;
        /**
         * The string filter value.
         *
         * Filter values are case sensitive. For example, the product name for control-based findings is `Security Hub` . If you provide `security hub` as the filter value, there's no match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-stringfilter.html#cfn-securityhub-automationrule-stringfilter-value
         */
        readonly value: string;
    }
    /**
     * A map filter for filtering AWS Security Hub findings.
     *
     * Each map filter provides the field to check for, the value to check for, and the comparison operator.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-mapfilter.html
     */
    interface MapFilterProperty {
        /**
         * The condition to apply to the key value when filtering Security Hub findings with a map filter.
         *
         * To search for values that have the filter value, use one of the following comparison operators:
         *
         * - To search for values that include the filter value, use `CONTAINS` . For example, for the `ResourceTags` field, the filter `Department CONTAINS Security` matches findings that include the value `Security` for the `Department` tag. In the same example, a finding with a value of `Security team` for the `Department` tag is a match.
         * - To search for values that exactly match the filter value, use `EQUALS` . For example, for the `ResourceTags` field, the filter `Department EQUALS Security` matches findings that have the value `Security` for the `Department` tag.
         *
         * `CONTAINS` and `EQUALS` filters on the same field are joined by `OR` . A finding matches if it matches any one of those filters. For example, the filters `Department CONTAINS Security OR Department CONTAINS Finance` match a finding that includes either `Security` , `Finance` , or both values.
         *
         * To search for values that don't have the filter value, use one of the following comparison operators:
         *
         * - To search for values that exclude the filter value, use `NOT_CONTAINS` . For example, for the `ResourceTags` field, the filter `Department NOT_CONTAINS Finance` matches findings that exclude the value `Finance` for the `Department` tag.
         * - To search for values other than the filter value, use `NOT_EQUALS` . For example, for the `ResourceTags` field, the filter `Department NOT_EQUALS Finance` matches findings that don’t have the value `Finance` for the `Department` tag.
         *
         * `NOT_CONTAINS` and `NOT_EQUALS` filters on the same field are joined by `AND` . A finding matches only if it matches all of those filters. For example, the filters `Department NOT_CONTAINS Security AND Department NOT_CONTAINS Finance` match a finding that excludes both the `Security` and `Finance` values.
         *
         * `CONTAINS` filters can only be used with other `CONTAINS` filters. `NOT_CONTAINS` filters can only be used with other `NOT_CONTAINS` filters.
         *
         * You can’t have both a `CONTAINS` filter and a `NOT_CONTAINS` filter on the same field. Similarly, you can’t have both an `EQUALS` filter and a `NOT_EQUALS` filter on the same field. Combining filters in this way returns an error.
         *
         * `CONTAINS` and `NOT_CONTAINS` operators can be used only with automation rules. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *AWS Security Hub User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-mapfilter.html#cfn-securityhub-automationrule-mapfilter-comparison
         */
        readonly comparison: string;
        /**
         * The key of the map filter.
         *
         * For example, for `ResourceTags` , `Key` identifies the name of the tag. For `UserDefinedFields` , `Key` is the name of the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-mapfilter.html#cfn-securityhub-automationrule-mapfilter-key
         */
        readonly key: string;
        /**
         * The value for the key in the map filter.
         *
         * Filter values are case sensitive. For example, one of the values for a tag called `Department` might be `Security` . If you provide `security` as the filter value, then there's no match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-mapfilter.html#cfn-securityhub-automationrule-mapfilter-value
         */
        readonly value: string;
    }
    /**
     * A date filter for querying findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-datefilter.html
     */
    interface DateFilterProperty {
        /**
         * A date range for the date filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-datefilter.html#cfn-securityhub-automationrule-datefilter-daterange
         */
        readonly dateRange?: CfnAutomationRule.DateRangeProperty | cdk.IResolvable;
        /**
         * A timestamp that provides the end date for the date filter.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-datefilter.html#cfn-securityhub-automationrule-datefilter-end
         */
        readonly end?: string;
        /**
         * A timestamp that provides the start date for the date filter.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-datefilter.html#cfn-securityhub-automationrule-datefilter-start
         */
        readonly start?: string;
    }
    /**
     * A date range for the date filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-daterange.html
     */
    interface DateRangeProperty {
        /**
         * A date range unit for the date filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-daterange.html#cfn-securityhub-automationrule-daterange-unit
         */
        readonly unit: string;
        /**
         * A date range value for the date filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-daterange.html#cfn-securityhub-automationrule-daterange-value
         */
        readonly value: number;
    }
    /**
     * A number filter for querying findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-numberfilter.html
     */
    interface NumberFilterProperty {
        /**
         * The equal-to condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-numberfilter.html#cfn-securityhub-automationrule-numberfilter-eq
         */
        readonly eq?: number;
        /**
         * The greater-than-equal condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-numberfilter.html#cfn-securityhub-automationrule-numberfilter-gte
         */
        readonly gte?: number;
        /**
         * The less-than-equal condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-numberfilter.html#cfn-securityhub-automationrule-numberfilter-lte
         */
        readonly lte?: number;
    }
}
/**
 * Properties for defining a `CfnAutomationRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html
 */
export interface CfnAutomationRuleProps {
    /**
     * One or more actions to update finding fields if a finding matches the conditions specified in `Criteria` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-actions
     */
    readonly actions?: Array<CfnAutomationRule.AutomationRulesActionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A set of [AWS Security Finding Format (ASFF)](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html) finding field attributes and corresponding expected values that Security Hub uses to filter findings. If a rule is enabled and a finding matches the criteria specified in this parameter, Security Hub applies the rule action to the finding.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-criteria
     */
    readonly criteria?: CfnAutomationRule.AutomationRulesFindingFiltersProperty | cdk.IResolvable;
    /**
     * A description of the rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-description
     */
    readonly description?: string;
    /**
     * Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria.
     *
     * This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-isterminal
     */
    readonly isTerminal?: boolean | cdk.IResolvable;
    /**
     * The name of the rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-rulename
     */
    readonly ruleName?: string;
    /**
     * An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings.
     *
     * Security Hub applies rules with lower values for this parameter first.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-ruleorder
     */
    readonly ruleOrder?: number;
    /**
     * Whether the rule is active after it is created.
     *
     * If this parameter is equal to `ENABLED` , Security Hub applies the rule to findings and finding updates after the rule is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-rulestatus
     */
    readonly ruleStatus?: string;
    /**
     * User-defined tags associated with an automation rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * The `AWS::SecurityHub::Hub` resource specifies the enablement of the AWS Security Hub service in your AWS account .
 *
 * The service is enabled in the current AWS Region or the specified Region. You create a separate `Hub` resource in each Region in which you want to enable Security Hub .
 *
 * When you use this resource to enable Security Hub , default security standards are enabled. To disable default standards, set the `EnableDefaultStandards` property to `false` . You can use the [`AWS::SecurityHub::Standard`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html) resource to enable additional standards.
 *
 * When you use this resource to enable Security Hub , new controls are automatically enabled for your enabled standards. To disable automatic enablement of new controls, set the `AutoEnableControls` property to `false` .
 *
 * You must create an `AWS::SecurityHub::Hub` resource for an account before you can create other types of Security Hub resources for the account through AWS CloudFormation . Use a [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) , such as `"DependsOn": "Hub"` , to ensure that you've created an `AWS::SecurityHub::Hub` resource before creating other Security Hub resources for an account.
 *
 * @cloudformationResource AWS::SecurityHub::Hub
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html
 */
export declare class CfnHub extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnHub from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnHub;
    /**
     * The Amazon Resource Name (ARN) of the `Hub` resource that was retrieved.
     *
     * @cloudformationAttribute ARN
     */
    readonly attrArn: string;
    /**
     * The date and time when Security Hub was enabled in your account.
     *
     * @cloudformationAttribute SubscribedAt
     */
    readonly attrSubscribedAt: string;
    /**
     * Whether to automatically enable new controls when they are added to standards that are enabled.
     */
    autoEnableControls?: boolean | cdk.IResolvable;
    /**
     * Specifies whether an account has consolidated control findings turned on or off.
     */
    controlFindingGenerator?: string;
    /**
     * Whether to enable the security standards that Security Hub has designated as automatically enabled.
     */
    enableDefaultStandards?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnHubProps);
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
 * Properties for defining a `CfnHub`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html
 */
export interface CfnHubProps {
    /**
     * Whether to automatically enable new controls when they are added to standards that are enabled.
     *
     * By default, this is set to `true` , and new controls are enabled automatically. To not automatically enable new controls, set this to `false` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#cfn-securityhub-hub-autoenablecontrols
     */
    readonly autoEnableControls?: boolean | cdk.IResolvable;
    /**
     * Specifies whether an account has consolidated control findings turned on or off.
     *
     * If the value for this field is set to `SECURITY_CONTROL` , Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.
     *
     * If the value for this field is set to `STANDARD_CONTROL` , Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.
     *
     * The value for this field in a member account matches the value in the administrator account. For accounts that aren't part of an organization, the default value of this field is `SECURITY_CONTROL` if you enabled Security Hub on or after February 23, 2023.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#cfn-securityhub-hub-controlfindinggenerator
     */
    readonly controlFindingGenerator?: string;
    /**
     * Whether to enable the security standards that Security Hub has designated as automatically enabled.
     *
     * If you don't provide a value for `EnableDefaultStandards` , it is set to `true` , and the designated standards are automatically enabled in each AWS Region where you enable Security Hub . If you don't want to enable the designated standards, set `EnableDefaultStandards` to `false` .
     *
     * Currently, the automatically enabled standards are the Center for Internet Security (CIS) AWS Foundations Benchmark v1.2.0 and AWS Foundational Security Best Practices (FSBP).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#cfn-securityhub-hub-enabledefaultstandards
     */
    readonly enableDefaultStandards?: boolean | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#cfn-securityhub-hub-tags
     */
    readonly tags?: any;
}
/**
 * The `AWS::SecurityHub::Standard` resource specifies the enablement of a security standard.
 *
 * The standard is identified by the `StandardsArn` property. To view a list of Security Hub standards and their Amazon Resource Names (ARNs), use the [`DescribeStandards`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.
 *
 * You must create a separate `AWS::SecurityHub::Standard` resource for each standard that you want to enable.
 *
 * For more information about Security Hub standards, see [Security Hub standards reference](https://docs.aws.amazon.com/securityhub/latest/userguide/standards-reference.html) in the *AWS Security Hub User Guide* .
 *
 * @cloudformationResource AWS::SecurityHub::Standard
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html
 */
export declare class CfnStandard extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStandard from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStandard;
    /**
     * The ARN of a resource that represents your subscription to a supported standard.
     *
     * @cloudformationAttribute StandardsSubscriptionArn
     */
    readonly attrStandardsSubscriptionArn: string;
    /**
     * Specifies which controls are to be disabled in a standard.
     */
    disabledStandardsControls?: Array<cdk.IResolvable | CfnStandard.StandardsControlProperty> | cdk.IResolvable;
    /**
     * The ARN of the standard that you want to enable.
     */
    standardsArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStandardProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStandard {
    /**
     * Provides details about an individual security control.
     *
     * For a list of Security Hub controls, see [Security Hub controls reference](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-controls-reference.html) in the *AWS Security Hub User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-standard-standardscontrol.html
     */
    interface StandardsControlProperty {
        /**
         * A user-defined reason for changing a control's enablement status in a specified standard.
         *
         * If you are disabling a control, then this property is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-standard-standardscontrol.html#cfn-securityhub-standard-standardscontrol-reason
         */
        readonly reason?: string;
        /**
         * The Amazon Resource Name (ARN) of the control.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-standard-standardscontrol.html#cfn-securityhub-standard-standardscontrol-standardscontrolarn
         */
        readonly standardsControlArn: string;
    }
}
/**
 * Properties for defining a `CfnStandard`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html
 */
export interface CfnStandardProps {
    /**
     * Specifies which controls are to be disabled in a standard.
     *
     * *Maximum* : `100`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html#cfn-securityhub-standard-disabledstandardscontrols
     */
    readonly disabledStandardsControls?: Array<cdk.IResolvable | CfnStandard.StandardsControlProperty> | cdk.IResolvable;
    /**
     * The ARN of the standard that you want to enable.
     *
     * To view a list of available Security Hub standards and their ARNs, use the [`DescribeStandards`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html#cfn-securityhub-standard-standardsarn
     */
    readonly standardsArn: string;
}
/**
 * The `AWS::SecurityHub::ConfigurationPolicy` resource creates a central configuration policy with the defined settings.
 *
 * Only the AWS Security Hub delegated administrator can create this resource in the home Region. For more information, see [Central configuration in Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html) in the *AWS Security Hub User Guide* .
 *
 * @cloudformationResource AWS::SecurityHub::ConfigurationPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html
 */
export declare class CfnConfigurationPolicy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationPolicy;
    /**
     * The ARN of the configuration policy.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time, in UTC and ISO 8601 format.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The universally unique identifier (UUID) of the configuration policy. A self-managed configuration has no UUID. The identifier of a self-managed configuration is `SELF_MANAGED_SECURITY_HUB` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Indicates whether the service that the configuration policy applies to is enabled in the policy.
     *
     * @cloudformationAttribute ServiceEnabled
     */
    readonly attrServiceEnabled: cdk.IResolvable;
    /**
     * The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * An object that defines how AWS Security Hub is configured.
     */
    configurationPolicy: cdk.IResolvable | CfnConfigurationPolicy.PolicyProperty;
    /**
     * The description of the configuration policy.
     */
    description?: string;
    /**
     * The name of the configuration policy.
     */
    name: string;
    /**
     * User-defined tags associated with a configuration policy.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationPolicy {
    /**
     * An object that defines how AWS Security Hub is configured.
     *
     * It includes whether Security Hub is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub enables all other controls (including newly released controls).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-policy.html
     */
    interface PolicyProperty {
        /**
         * The AWS service that the configuration policy applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-policy.html#cfn-securityhub-configurationpolicy-policy-securityhub
         */
        readonly securityHub?: cdk.IResolvable | CfnConfigurationPolicy.SecurityHubPolicyProperty;
    }
    /**
     * An object that defines how AWS Security Hub is configured.
     *
     * The configuration policy includes whether Security Hub is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub enables all other controls (including newly released controls).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securityhubpolicy.html
     */
    interface SecurityHubPolicyProperty {
        /**
         * A list that defines which security standards are enabled in the configuration policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securityhubpolicy.html#cfn-securityhub-configurationpolicy-securityhubpolicy-enabledstandardidentifiers
         */
        readonly enabledStandardIdentifiers?: Array<string>;
        /**
         * An object that defines which security controls are enabled in the configuration policy.
         *
         * The enablement status of a control is aligned across all of the enabled standards in an account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securityhubpolicy.html#cfn-securityhub-configurationpolicy-securityhubpolicy-securitycontrolsconfiguration
         */
        readonly securityControlsConfiguration?: cdk.IResolvable | CfnConfigurationPolicy.SecurityControlsConfigurationProperty;
        /**
         * Indicates whether Security Hub is enabled in the policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securityhubpolicy.html#cfn-securityhub-configurationpolicy-securityhubpolicy-serviceenabled
         */
        readonly serviceEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * An object that defines which security controls are enabled in an AWS Security Hub configuration policy.
     *
     * The enablement status of a control is aligned across all of the enabled standards in an account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securitycontrolsconfiguration.html
     */
    interface SecurityControlsConfigurationProperty {
        /**
         * A list of security controls that are disabled in the configuration policy.
         *
         * Security Hub enables all other controls (including newly released controls) other than the listed controls.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securitycontrolsconfiguration.html#cfn-securityhub-configurationpolicy-securitycontrolsconfiguration-disabledsecuritycontrolidentifiers
         */
        readonly disabledSecurityControlIdentifiers?: Array<string>;
        /**
         * A list of security controls that are enabled in the configuration policy.
         *
         * Security Hub disables all other controls (including newly released controls) other than the listed controls.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securitycontrolsconfiguration.html#cfn-securityhub-configurationpolicy-securitycontrolsconfiguration-enabledsecuritycontrolidentifiers
         */
        readonly enabledSecurityControlIdentifiers?: Array<string>;
        /**
         * A list of security controls and control parameter values that are included in a configuration policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securitycontrolsconfiguration.html#cfn-securityhub-configurationpolicy-securitycontrolsconfiguration-securitycontrolcustomparameters
         */
        readonly securityControlCustomParameters?: Array<cdk.IResolvable | CfnConfigurationPolicy.SecurityControlCustomParameterProperty> | cdk.IResolvable;
    }
    /**
     * A list of security controls and control parameter values that are included in a configuration policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securitycontrolcustomparameter.html
     */
    interface SecurityControlCustomParameterProperty {
        /**
         * An object that specifies parameter values for a control in a configuration policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securitycontrolcustomparameter.html#cfn-securityhub-configurationpolicy-securitycontrolcustomparameter-parameters
         */
        readonly parameters?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnConfigurationPolicy.ParameterConfigurationProperty>;
        /**
         * The ID of the security control.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securitycontrolcustomparameter.html#cfn-securityhub-configurationpolicy-securitycontrolcustomparameter-securitycontrolid
         */
        readonly securityControlId?: string;
    }
    /**
     * An object that provides the current value of a security control parameter and identifies whether it has been customized.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parameterconfiguration.html
     */
    interface ParameterConfigurationProperty {
        /**
         * The current value of a control parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parameterconfiguration.html#cfn-securityhub-configurationpolicy-parameterconfiguration-value
         */
        readonly value?: cdk.IResolvable | CfnConfigurationPolicy.ParameterValueProperty;
        /**
         * Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior.
         *
         * When `ValueType` is set equal to `DEFAULT` , the default behavior can be a specific Security Hub default value, or the default behavior can be to ignore a specific parameter. When `ValueType` is set equal to `DEFAULT` , Security Hub ignores user-provided input for the `Value` field.
         *
         * When `ValueType` is set equal to `CUSTOM` , the `Value` field can't be empty.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parameterconfiguration.html#cfn-securityhub-configurationpolicy-parameterconfiguration-valuetype
         */
        readonly valueType: string;
    }
    /**
     * An object that includes the data type of a security control parameter and its current value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parametervalue.html
     */
    interface ParameterValueProperty {
        /**
         * A control parameter that is a boolean.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parametervalue.html#cfn-securityhub-configurationpolicy-parametervalue-boolean
         */
        readonly boolean?: boolean | cdk.IResolvable;
        /**
         * A control parameter that is a double.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parametervalue.html#cfn-securityhub-configurationpolicy-parametervalue-double
         */
        readonly double?: number;
        /**
         * A control parameter that is an enum.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parametervalue.html#cfn-securityhub-configurationpolicy-parametervalue-enum
         */
        readonly enum?: string;
        /**
         * A control parameter that is a list of enums.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parametervalue.html#cfn-securityhub-configurationpolicy-parametervalue-enumlist
         */
        readonly enumList?: Array<string>;
        /**
         * A control parameter that is an integer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parametervalue.html#cfn-securityhub-configurationpolicy-parametervalue-integer
         */
        readonly integer?: number;
        /**
         * A control parameter that is a list of integers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parametervalue.html#cfn-securityhub-configurationpolicy-parametervalue-integerlist
         */
        readonly integerList?: Array<number> | cdk.IResolvable;
        /**
         * A control parameter that is a string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parametervalue.html#cfn-securityhub-configurationpolicy-parametervalue-string
         */
        readonly string?: string;
        /**
         * A control parameter that is a list of strings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parametervalue.html#cfn-securityhub-configurationpolicy-parametervalue-stringlist
         */
        readonly stringList?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnConfigurationPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html
 */
export interface CfnConfigurationPolicyProps {
    /**
     * An object that defines how AWS Security Hub is configured.
     *
     * It includes whether Security Hub is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub enables all other controls (including newly released controls).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-configurationpolicy
     */
    readonly configurationPolicy: cdk.IResolvable | CfnConfigurationPolicy.PolicyProperty;
    /**
     * The description of the configuration policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-description
     */
    readonly description?: string;
    /**
     * The name of the configuration policy.
     *
     * Alphanumeric characters and the following ASCII characters are permitted: `-, ., !, *, /` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-name
     */
    readonly name: string;
    /**
     * User-defined tags associated with a configuration policy.
     *
     * For more information, see [Tagging AWS Security Hub resources](https://docs.aws.amazon.com/securityhub/latest/userguide/tagging-resources.html) in the *Security Hub user guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * The `AWS::SecurityHub::DelegatedAdmin` resource designates the delegated AWS Security Hub administrator account for an organization.
 *
 * You must enable the integration between Security Hub and AWS Organizations before you can designate a delegated Security Hub administrator. Only the management account for an organization can designate the delegated Security Hub administrator account. For more information, see [Designating the delegated Security Hub administrator](https://docs.aws.amazon.com/securityhub/latest/userguide/designate-orgs-admin-account.html#designate-admin-instructions) in the *AWS Security Hub User Guide* .
 *
 * To change the delegated administrator account, remove the current delegated administrator account, and then designate the new account.
 *
 * To designate multiple delegated administrators in different organizations and AWS Regions , we recommend using [AWS CloudFormation mappings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html) .
 *
 * Tags aren't supported for this resource.
 *
 * @cloudformationResource AWS::SecurityHub::DelegatedAdmin
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-delegatedadmin.html
 */
export declare class CfnDelegatedAdmin extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDelegatedAdmin from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDelegatedAdmin;
    /**
     * The ID of the delegated Security Hub administrator account, in the format of `accountID/Region` .
     *
     * @cloudformationAttribute DelegatedAdminIdentifier
     */
    readonly attrDelegatedAdminIdentifier: string;
    /**
     * Whether the delegated Security Hub administrator is set for the organization.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The AWS account identifier of the account to designate as the Security Hub administrator account.
     */
    adminAccountId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDelegatedAdminProps);
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
 * Properties for defining a `CfnDelegatedAdmin`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-delegatedadmin.html
 */
export interface CfnDelegatedAdminProps {
    /**
     * The AWS account identifier of the account to designate as the Security Hub administrator account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-delegatedadmin.html#cfn-securityhub-delegatedadmin-adminaccountid
     */
    readonly adminAccountId: string;
}
/**
 * The `AWS::SecurityHub::FindingAggregator` resource enables cross-Region aggregation.
 *
 * When cross-Region aggregation is enabled, you can aggregate findings, finding updates, insights, control compliance statuses, and security scores from one or more linked Regions to a single aggregation Region. You can then view and manage all of this data from the aggregation Region. For more details about cross-Region aggregation, see [Cross-Region aggregation](https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html) in the *AWS Security Hub User Guide*
 *
 * This resource must be created in the Region that you want to designate as your aggregation Region.
 *
 * Cross-Region aggregation is also a prerequisite for using [central configuration](https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html) in Security Hub .
 *
 * @cloudformationResource AWS::SecurityHub::FindingAggregator
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html
 */
export declare class CfnFindingAggregator extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFindingAggregator from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFindingAggregator;
    /**
     * The aggregation Region.
     *
     * @cloudformationAttribute FindingAggregationRegion
     */
    readonly attrFindingAggregationRegion: string;
    /**
     * The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and delete the finding aggregator.
     *
     * @cloudformationAttribute FindingAggregatorArn
     */
    readonly attrFindingAggregatorArn: string;
    /**
     * Indicates whether to aggregate findings from all of the available Regions in the current partition.
     */
    regionLinkingMode: string;
    /**
     * If `RegionLinkingMode` is `ALL_REGIONS_EXCEPT_SPECIFIED` , then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.
     */
    regions?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFindingAggregatorProps);
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
 * Properties for defining a `CfnFindingAggregator`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html
 */
export interface CfnFindingAggregatorProps {
    /**
     * Indicates whether to aggregate findings from all of the available Regions in the current partition.
     *
     * Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.
     *
     * The selected option also determines how to use the Regions provided in the Regions list.
     *
     * The options are as follows:
     *
     * - `ALL_REGIONS` - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
     * - `ALL_REGIONS_EXCEPT_SPECIFIED` - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the `Regions` parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
     * - `SPECIFIED_REGIONS` - Indicates to aggregate findings only from the Regions listed in the `Regions` parameter. Security Hub does not automatically aggregate findings from new Regions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html#cfn-securityhub-findingaggregator-regionlinkingmode
     */
    readonly regionLinkingMode: string;
    /**
     * If `RegionLinkingMode` is `ALL_REGIONS_EXCEPT_SPECIFIED` , then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.
     *
     * If `RegionLinkingMode` is `SPECIFIED_REGIONS` , then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html#cfn-securityhub-findingaggregator-regions
     */
    readonly regions?: Array<string>;
}
/**
 * The `AWS::SecurityHub::Insight` resource creates a custom insight in AWS Security Hub .
 *
 * An insight is a collection of findings that relate to a security issue that requires attention or remediation. For more information, see [Insights in AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-insights.html) in the *AWS Security Hub User Guide* .
 *
 * Tags aren't supported for this resource.
 *
 * @cloudformationResource AWS::SecurityHub::Insight
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html
 */
export declare class CfnInsight extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInsight from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInsight;
    /**
     * The ARN of a Security Hub insight.
     *
     * @cloudformationAttribute InsightArn
     */
    readonly attrInsightArn: string;
    /**
     * One or more attributes used to filter the findings included in the insight.
     */
    filters: CfnInsight.AwsSecurityFindingFiltersProperty | cdk.IResolvable;
    /**
     * The grouping attribute for the insight's findings.
     */
    groupByAttribute: string;
    /**
     * The name of a Security Hub insight.
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInsightProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInsight {
    /**
     * A collection of filters that are applied to all active findings aggregated by AWS Security Hub .
     *
     * You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html
     */
    interface AwsSecurityFindingFiltersProperty {
        /**
         * The AWS account ID in which a finding is generated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-awsaccountid
         */
        readonly awsAccountId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The name of the AWS account in which a finding is generated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-awsaccountname
         */
        readonly awsAccountName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The name of the findings provider (company) that owns the solution (product) that generates findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-companyname
         */
        readonly companyName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The unique identifier of a standard in which a control is enabled.
         *
         * This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-complianceassociatedstandardsid
         */
        readonly complianceAssociatedStandardsId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The unique identifier of a control across standards.
         *
         * Values for this field typically consist of an AWS service and a number, such as APIGateway.5.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-compliancesecuritycontrolid
         */
        readonly complianceSecurityControlId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The name of a security control parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-compliancesecuritycontrolparametersname
         */
        readonly complianceSecurityControlParametersName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The current value of a security control parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-compliancesecuritycontrolparametersvalue
         */
        readonly complianceSecurityControlParametersValue?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard, such as CIS AWS Foundations.
         *
         * Contains security standard-related finding details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-compliancestatus
         */
        readonly complianceStatus?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * A finding's confidence.
         *
         * Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.
         *
         * Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-confidence
         */
        readonly confidence?: Array<cdk.IResolvable | CfnInsight.NumberFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that indicates when the security findings provider created the potential security issue that a finding reflects.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-createdat
         */
        readonly createdAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The level of importance assigned to the resources associated with the finding.
         *
         * A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-criticality
         */
        readonly criticality?: Array<cdk.IResolvable | CfnInsight.NumberFilterProperty> | cdk.IResolvable;
        /**
         * A finding's description.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-description
         */
        readonly description?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The finding provider value for the finding confidence.
         *
         * Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.
         *
         * Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldsconfidence
         */
        readonly findingProviderFieldsConfidence?: Array<cdk.IResolvable | CfnInsight.NumberFilterProperty> | cdk.IResolvable;
        /**
         * The finding provider value for the level of importance assigned to the resources associated with the findings.
         *
         * A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldscriticality
         */
        readonly findingProviderFieldsCriticality?: Array<cdk.IResolvable | CfnInsight.NumberFilterProperty> | cdk.IResolvable;
        /**
         * The finding identifier of a related finding that is identified by the finding provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldsrelatedfindingsid
         */
        readonly findingProviderFieldsRelatedFindingsId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The ARN of the solution that generated a related finding that is identified by the finding provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldsrelatedfindingsproductarn
         */
        readonly findingProviderFieldsRelatedFindingsProductArn?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The finding provider value for the severity label.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldsseveritylabel
         */
        readonly findingProviderFieldsSeverityLabel?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The finding provider's original value for the severity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldsseverityoriginal
         */
        readonly findingProviderFieldsSeverityOriginal?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * One or more finding types that the finding provider assigned to the finding.
         *
         * Uses the format of `namespace/category/classifier` that classify a finding.
         *
         * Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual Behaviors | Sensitive Data Identifications
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldstypes
         */
        readonly findingProviderFieldsTypes?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that indicates when the security findings provider first observed the potential security issue that a finding captured.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-firstobservedat
         */
        readonly firstObservedAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding.
         *
         * In various security findings providers' solutions, this generator can be called a rule, a check, a detector, a plugin, etc.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-generatorid
         */
        readonly generatorId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The security findings provider-specific identifier for a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-id
         */
        readonly id?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * This field is deprecated.
         *
         * A keyword for a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-keyword
         */
        readonly keyword?: Array<cdk.IResolvable | CfnInsight.KeywordFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that indicates when the security findings provider most recently observed the potential security issue that a finding captured.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-lastobservedat
         */
        readonly lastObservedAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the malware that was observed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-malwarename
         */
        readonly malwareName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The filesystem path of the malware that was observed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-malwarepath
         */
        readonly malwarePath?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The state of the malware that was observed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-malwarestate
         */
        readonly malwareState?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The type of the malware that was observed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-malwaretype
         */
        readonly malwareType?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The destination domain of network-related information about a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networkdestinationdomain
         */
        readonly networkDestinationDomain?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The destination IPv4 address of network-related information about a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networkdestinationipv4
         */
        readonly networkDestinationIpV4?: Array<CfnInsight.IpFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The destination IPv6 address of network-related information about a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networkdestinationipv6
         */
        readonly networkDestinationIpV6?: Array<CfnInsight.IpFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The destination port of network-related information about a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networkdestinationport
         */
        readonly networkDestinationPort?: Array<cdk.IResolvable | CfnInsight.NumberFilterProperty> | cdk.IResolvable;
        /**
         * Indicates the direction of network traffic associated with a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networkdirection
         */
        readonly networkDirection?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The protocol of network-related information about a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networkprotocol
         */
        readonly networkProtocol?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The source domain of network-related information about a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networksourcedomain
         */
        readonly networkSourceDomain?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The source IPv4 address of network-related information about a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networksourceipv4
         */
        readonly networkSourceIpV4?: Array<CfnInsight.IpFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The source IPv6 address of network-related information about a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networksourceipv6
         */
        readonly networkSourceIpV6?: Array<CfnInsight.IpFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The source media access control (MAC) address of network-related information about a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networksourcemac
         */
        readonly networkSourceMac?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The source port of network-related information about a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-networksourceport
         */
        readonly networkSourcePort?: Array<cdk.IResolvable | CfnInsight.NumberFilterProperty> | cdk.IResolvable;
        /**
         * The text of a note.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-notetext
         */
        readonly noteText?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The timestamp of when the note was updated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-noteupdatedat
         */
        readonly noteUpdatedAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The principal that created a note.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-noteupdatedby
         */
        readonly noteUpdatedBy?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that identifies when the process was launched.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-processlaunchedat
         */
        readonly processLaunchedAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-processname
         */
        readonly processName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The parent process ID.
         *
         * This field accepts positive integers between `O` and `2147483647` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-processparentpid
         */
        readonly processParentPid?: Array<cdk.IResolvable | CfnInsight.NumberFilterProperty> | cdk.IResolvable;
        /**
         * The path to the process executable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-processpath
         */
        readonly processPath?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The process ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-processpid
         */
        readonly processPid?: Array<cdk.IResolvable | CfnInsight.NumberFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that identifies when the process was terminated.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-processterminatedat
         */
        readonly processTerminatedAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The ARN generated by Security Hub that uniquely identifies a third-party company (security findings provider) after this provider's product (solution that generates findings) is registered with Security Hub.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-productarn
         */
        readonly productArn?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * A data type where security findings providers can include additional solution-specific details that aren't part of the defined `AwsSecurityFinding` format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-productfields
         */
        readonly productFields?: Array<cdk.IResolvable | CfnInsight.MapFilterProperty> | cdk.IResolvable;
        /**
         * The name of the solution (product) that generates findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-productname
         */
        readonly productName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The recommendation of what to do about the issue described in a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-recommendationtext
         */
        readonly recommendationText?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The updated record state for the finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-recordstate
         */
        readonly recordState?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The Region from which the finding was generated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-region
         */
        readonly region?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The solution-generated identifier for a related finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-relatedfindingsid
         */
        readonly relatedFindingsId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The ARN of the solution that generated a related finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-relatedfindingsproductarn
         */
        readonly relatedFindingsProductArn?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The ARN of the application that is related to a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceapplicationarn
         */
        readonly resourceApplicationArn?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The name of the application that is related to a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceapplicationname
         */
        readonly resourceApplicationName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The IAM profile ARN of the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instanceiaminstanceprofilearn
         */
        readonly resourceAwsEc2InstanceIamInstanceProfileArn?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The Amazon Machine Image (AMI) ID of the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instanceimageid
         */
        readonly resourceAwsEc2InstanceImageId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The IPv4 addresses associated with the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instanceipv4addresses
         */
        readonly resourceAwsEc2InstanceIpV4Addresses?: Array<CfnInsight.IpFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The IPv6 addresses associated with the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instanceipv6addresses
         */
        readonly resourceAwsEc2InstanceIpV6Addresses?: Array<CfnInsight.IpFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The key name associated with the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instancekeyname
         */
        readonly resourceAwsEc2InstanceKeyName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The date and time the instance was launched.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instancelaunchedat
         */
        readonly resourceAwsEc2InstanceLaunchedAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The identifier of the subnet that the instance was launched in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instancesubnetid
         */
        readonly resourceAwsEc2InstanceSubnetId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The instance type of the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instancetype
         */
        readonly resourceAwsEc2InstanceType?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The identifier of the VPC that the instance was launched in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instancevpcid
         */
        readonly resourceAwsEc2InstanceVpcId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The creation date/time of the IAM access key related to a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsiamaccesskeycreatedat
         */
        readonly resourceAwsIamAccessKeyCreatedAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the principal that is associated with an IAM access key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsiamaccesskeyprincipalname
         */
        readonly resourceAwsIamAccessKeyPrincipalName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The status of the IAM access key related to a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsiamaccesskeystatus
         */
        readonly resourceAwsIamAccessKeyStatus?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * This field is deprecated.
         *
         * The username associated with the IAM access key related to a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsiamaccesskeyusername
         */
        readonly resourceAwsIamAccessKeyUserName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The name of an IAM user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsiamuserusername
         */
        readonly resourceAwsIamUserUserName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The canonical user ID of the owner of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawss3bucketownerid
         */
        readonly resourceAwsS3BucketOwnerId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The display name of the owner of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawss3bucketownername
         */
        readonly resourceAwsS3BucketOwnerName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The identifier of the image related to a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcecontainerimageid
         */
        readonly resourceContainerImageId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The name of the image related to a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcecontainerimagename
         */
        readonly resourceContainerImageName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that identifies when the container was started.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcecontainerlaunchedat
         */
        readonly resourceContainerLaunchedAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the container related to a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcecontainername
         */
        readonly resourceContainerName?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The details of a resource that doesn't have a specific subfield for the resource type defined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcedetailsother
         */
        readonly resourceDetailsOther?: Array<cdk.IResolvable | CfnInsight.MapFilterProperty> | cdk.IResolvable;
        /**
         * The canonical identifier for the given resource type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceid
         */
        readonly resourceId?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The canonical AWS partition name that the Region is assigned to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcepartition
         */
        readonly resourcePartition?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The canonical AWS external Region name where this resource is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceregion
         */
        readonly resourceRegion?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * A list of AWS tags associated with a resource at the time the finding was processed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcetags
         */
        readonly resourceTags?: Array<cdk.IResolvable | CfnInsight.MapFilterProperty> | cdk.IResolvable;
        /**
         * Specifies the type of the resource that details are provided for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcetype
         */
        readonly resourceType?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * Indicates whether or not sample findings are included in the filter results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-sample
         */
        readonly sample?: Array<CfnInsight.BooleanFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The label of a finding's severity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-severitylabel
         */
        readonly severityLabel?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * Deprecated. The normalized severity of a finding. Instead of providing `Normalized` , provide `Label` .
         *
         * The value of `Normalized` can be an integer between `0` and `100` .
         *
         * If you provide `Label` and do not provide `Normalized` , then `Normalized` is set automatically as follows.
         *
         * - `INFORMATIONAL` - 0
         * - `LOW` - 1
         * - `MEDIUM` - 40
         * - `HIGH` - 70
         * - `CRITICAL` - 90
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-severitynormalized
         */
        readonly severityNormalized?: Array<cdk.IResolvable | CfnInsight.NumberFilterProperty> | cdk.IResolvable;
        /**
         * Deprecated. This attribute isn't included in findings. Instead of providing `Product` , provide `Original` .
         *
         * The native severity as defined by the AWS service or integrated partner product that generated the finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-severityproduct
         */
        readonly severityProduct?: Array<cdk.IResolvable | CfnInsight.NumberFilterProperty> | cdk.IResolvable;
        /**
         * A URL that links to a page about the current finding in the security findings provider's solution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-sourceurl
         */
        readonly sourceUrl?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The category of a threat intelligence indicator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatorcategory
         */
        readonly threatIntelIndicatorCategory?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that identifies the last observation of a threat intelligence indicator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatorlastobservedat
         */
        readonly threatIntelIndicatorLastObservedAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The source of the threat intelligence.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatorsource
         */
        readonly threatIntelIndicatorSource?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The URL for more details from the source of the threat intelligence.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatorsourceurl
         */
        readonly threatIntelIndicatorSourceUrl?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The type of a threat intelligence indicator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatortype
         */
        readonly threatIntelIndicatorType?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The value of a threat intelligence indicator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatorvalue
         */
        readonly threatIntelIndicatorValue?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * A finding's title.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-title
         */
        readonly title?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * A finding type in the format of `namespace/category/classifier` that classifies a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-type
         */
        readonly type?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * A timestamp that indicates when the security findings provider last updated the finding record.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-updatedat
         */
        readonly updatedAt?: Array<CfnInsight.DateFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of name/value string pairs associated with the finding.
         *
         * These are custom, user-defined fields added to a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-userdefinedfields
         */
        readonly userDefinedFields?: Array<cdk.IResolvable | CfnInsight.MapFilterProperty> | cdk.IResolvable;
        /**
         * The veracity of a finding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-verificationstate
         */
        readonly verificationState?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * Indicates whether a software vulnerability in your environment has a known exploit.
         *
         * You can filter findings by this field only if you use Security Hub and Amazon Inspector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-vulnerabilitiesexploitavailable
         */
        readonly vulnerabilitiesExploitAvailable?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * Indicates whether a vulnerability is fixed in a newer version of the affected software packages.
         *
         * You can filter findings by this field only if you use Security Hub and Amazon Inspector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-vulnerabilitiesfixavailable
         */
        readonly vulnerabilitiesFixAvailable?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The workflow state of a finding.
         *
         * Note that this field is deprecated. To search for a finding based on its workflow status, use `WorkflowStatus` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-workflowstate
         */
        readonly workflowState?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
        /**
         * The status of the investigation into a finding. Allowed values are the following.
         *
         * - `NEW` - The initial state of a finding, before it is reviewed.
         *
         * Security Hub also resets the workflow status from `NOTIFIED` or `RESOLVED` to `NEW` in the following cases:
         *
         * - `RecordState` changes from `ARCHIVED` to `ACTIVE` .
         * - `Compliance.Status` changes from `PASSED` to either `WARNING` , `FAILED` , or `NOT_AVAILABLE` .
         * - `NOTIFIED` - Indicates that the resource owner has been notified about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.
         *
         * If one of the following occurs, the workflow status is changed automatically from `NOTIFIED` to `NEW` :
         *
         * - `RecordState` changes from `ARCHIVED` to `ACTIVE` .
         * - `Compliance.Status` changes from `PASSED` to `FAILED` , `WARNING` , or `NOT_AVAILABLE` .
         * - `SUPPRESSED` - Indicates that you reviewed the finding and do not believe that any action is needed.
         *
         * The workflow status of a `SUPPRESSED` finding does not change if `RecordState` changes from `ARCHIVED` to `ACTIVE` .
         * - `RESOLVED` - The finding was reviewed and remediated and is now considered resolved.
         *
         * The finding remains `RESOLVED` unless one of the following occurs:
         *
         * - `RecordState` changes from `ARCHIVED` to `ACTIVE` .
         * - `Compliance.Status` changes from `PASSED` to `FAILED` , `WARNING` , or `NOT_AVAILABLE` .
         *
         * In those cases, the workflow status is automatically reset to `NEW` .
         *
         * For findings from controls, if `Compliance.Status` is `PASSED` , then Security Hub automatically sets the workflow status to `RESOLVED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html#cfn-securityhub-insight-awssecurityfindingfilters-workflowstatus
         */
        readonly workflowStatus?: Array<cdk.IResolvable | CfnInsight.StringFilterProperty> | cdk.IResolvable;
    }
    /**
     * A string filter for filtering AWS Security Hub findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-stringfilter.html
     */
    interface StringFilterProperty {
        /**
         * The condition to apply to a string value when filtering Security Hub findings.
         *
         * To search for values that have the filter value, use one of the following comparison operators:
         *
         * - To search for values that include the filter value, use `CONTAINS` . For example, the filter `Title CONTAINS CloudFront` matches findings that have a `Title` that includes the string CloudFront.
         * - To search for values that exactly match the filter value, use `EQUALS` . For example, the filter `AwsAccountId EQUALS 123456789012` only matches findings that have an account ID of `123456789012` .
         * - To search for values that start with the filter value, use `PREFIX` . For example, the filter `ResourceRegion PREFIX us` matches findings that have a `ResourceRegion` that starts with `us` . A `ResourceRegion` that starts with a different value, such as `af` , `ap` , or `ca` , doesn't match.
         *
         * `CONTAINS` , `EQUALS` , and `PREFIX` filters on the same field are joined by `OR` . A finding matches if it matches any one of those filters. For example, the filters `Title CONTAINS CloudFront OR Title CONTAINS CloudWatch` match a finding that includes either `CloudFront` , `CloudWatch` , or both strings in the title.
         *
         * To search for values that don’t have the filter value, use one of the following comparison operators:
         *
         * - To search for values that exclude the filter value, use `NOT_CONTAINS` . For example, the filter `Title NOT_CONTAINS CloudFront` matches findings that have a `Title` that excludes the string CloudFront.
         * - To search for values other than the filter value, use `NOT_EQUALS` . For example, the filter `AwsAccountId NOT_EQUALS 123456789012` only matches findings that have an account ID other than `123456789012` .
         * - To search for values that don't start with the filter value, use `PREFIX_NOT_EQUALS` . For example, the filter `ResourceRegion PREFIX_NOT_EQUALS us` matches findings with a `ResourceRegion` that starts with a value other than `us` .
         *
         * `NOT_CONTAINS` , `NOT_EQUALS` , and `PREFIX_NOT_EQUALS` filters on the same field are joined by `AND` . A finding matches only if it matches all of those filters. For example, the filters `Title NOT_CONTAINS CloudFront AND Title NOT_CONTAINS CloudWatch` match a finding that excludes both `CloudFront` and `CloudWatch` in the title.
         *
         * You can’t have both a `CONTAINS` filter and a `NOT_CONTAINS` filter on the same field. Similarly, you can't provide both an `EQUALS` filter and a `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filter on the same field. Combining filters in this way returns an error. `CONTAINS` filters can only be used with other `CONTAINS` filters. `NOT_CONTAINS` filters can only be used with other `NOT_CONTAINS` filters.
         *
         * You can combine `PREFIX` filters with `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filters for the same field. Security Hub first processes the `PREFIX` filters, and then the `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filters.
         *
         * For example, for the following filters, Security Hub first identifies findings that have resource types that start with either `AwsIam` or `AwsEc2` . It then excludes findings that have a resource type of `AwsIamPolicy` and findings that have a resource type of `AwsEc2NetworkInterface` .
         *
         * - `ResourceType PREFIX AwsIam`
         * - `ResourceType PREFIX AwsEc2`
         * - `ResourceType NOT_EQUALS AwsIamPolicy`
         * - `ResourceType NOT_EQUALS AwsEc2NetworkInterface`
         *
         * `CONTAINS` and `NOT_CONTAINS` operators can be used only with automation rules. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *AWS Security Hub User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-stringfilter.html#cfn-securityhub-insight-stringfilter-comparison
         */
        readonly comparison: string;
        /**
         * The string filter value.
         *
         * Filter values are case sensitive. For example, the product name for control-based findings is `Security Hub` . If you provide `security hub` as the filter value, there's no match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-stringfilter.html#cfn-securityhub-insight-stringfilter-value
         */
        readonly value: string;
    }
    /**
     * A date filter for querying findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-datefilter.html
     */
    interface DateFilterProperty {
        /**
         * A date range for the date filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-datefilter.html#cfn-securityhub-insight-datefilter-daterange
         */
        readonly dateRange?: CfnInsight.DateRangeProperty | cdk.IResolvable;
        /**
         * A timestamp that provides the end date for the date filter.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-datefilter.html#cfn-securityhub-insight-datefilter-end
         */
        readonly end?: string;
        /**
         * A timestamp that provides the start date for the date filter.
         *
         * This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]` . The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
         *
         * - `YYYY-MM-DDTHH:MM:SSZ` (for example, `2019-01-31T23:00:00Z` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ` (for example, `2019-01-31T23:00:00.123456789Z` )
         * - `YYYY-MM-DDTHH:MM:SS+HH:MM` (for example, `2024-01-04T15:25:10+17:59` )
         * - `YYYY-MM-DDTHH:MM:SS-HHMM` (for example, `2024-01-04T15:25:10-1759` )
         * - `YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM` (for example, `2024-01-04T15:25:10.123456789+17:59` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-datefilter.html#cfn-securityhub-insight-datefilter-start
         */
        readonly start?: string;
    }
    /**
     * A date range for the date filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-daterange.html
     */
    interface DateRangeProperty {
        /**
         * A date range unit for the date filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-daterange.html#cfn-securityhub-insight-daterange-unit
         */
        readonly unit: string;
        /**
         * A date range value for the date filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-daterange.html#cfn-securityhub-insight-daterange-value
         */
        readonly value: number;
    }
    /**
     * A number filter for querying findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-numberfilter.html
     */
    interface NumberFilterProperty {
        /**
         * The equal-to condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-numberfilter.html#cfn-securityhub-insight-numberfilter-eq
         */
        readonly eq?: number;
        /**
         * The greater-than-equal condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-numberfilter.html#cfn-securityhub-insight-numberfilter-gte
         */
        readonly gte?: number;
        /**
         * The less-than-equal condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-numberfilter.html#cfn-securityhub-insight-numberfilter-lte
         */
        readonly lte?: number;
    }
    /**
     * A map filter for filtering AWS Security Hub findings.
     *
     * Each map filter provides the field to check for, the value to check for, and the comparison operator.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-mapfilter.html
     */
    interface MapFilterProperty {
        /**
         * The condition to apply to the key value when filtering Security Hub findings with a map filter.
         *
         * To search for values that have the filter value, use one of the following comparison operators:
         *
         * - To search for values that include the filter value, use `CONTAINS` . For example, for the `ResourceTags` field, the filter `Department CONTAINS Security` matches findings that include the value `Security` for the `Department` tag. In the same example, a finding with a value of `Security team` for the `Department` tag is a match.
         * - To search for values that exactly match the filter value, use `EQUALS` . For example, for the `ResourceTags` field, the filter `Department EQUALS Security` matches findings that have the value `Security` for the `Department` tag.
         *
         * `CONTAINS` and `EQUALS` filters on the same field are joined by `OR` . A finding matches if it matches any one of those filters. For example, the filters `Department CONTAINS Security OR Department CONTAINS Finance` match a finding that includes either `Security` , `Finance` , or both values.
         *
         * To search for values that don't have the filter value, use one of the following comparison operators:
         *
         * - To search for values that exclude the filter value, use `NOT_CONTAINS` . For example, for the `ResourceTags` field, the filter `Department NOT_CONTAINS Finance` matches findings that exclude the value `Finance` for the `Department` tag.
         * - To search for values other than the filter value, use `NOT_EQUALS` . For example, for the `ResourceTags` field, the filter `Department NOT_EQUALS Finance` matches findings that don’t have the value `Finance` for the `Department` tag.
         *
         * `NOT_CONTAINS` and `NOT_EQUALS` filters on the same field are joined by `AND` . A finding matches only if it matches all of those filters. For example, the filters `Department NOT_CONTAINS Security AND Department NOT_CONTAINS Finance` match a finding that excludes both the `Security` and `Finance` values.
         *
         * `CONTAINS` filters can only be used with other `CONTAINS` filters. `NOT_CONTAINS` filters can only be used with other `NOT_CONTAINS` filters.
         *
         * You can’t have both a `CONTAINS` filter and a `NOT_CONTAINS` filter on the same field. Similarly, you can’t have both an `EQUALS` filter and a `NOT_EQUALS` filter on the same field. Combining filters in this way returns an error.
         *
         * `CONTAINS` and `NOT_CONTAINS` operators can be used only with automation rules. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *AWS Security Hub User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-mapfilter.html#cfn-securityhub-insight-mapfilter-comparison
         */
        readonly comparison: string;
        /**
         * The key of the map filter.
         *
         * For example, for `ResourceTags` , `Key` identifies the name of the tag. For `UserDefinedFields` , `Key` is the name of the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-mapfilter.html#cfn-securityhub-insight-mapfilter-key
         */
        readonly key: string;
        /**
         * The value for the key in the map filter.
         *
         * Filter values are case sensitive. For example, one of the values for a tag called `Department` might be `Security` . If you provide `security` as the filter value, then there's no match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-mapfilter.html#cfn-securityhub-insight-mapfilter-value
         */
        readonly value: string;
    }
    /**
     * The IP filter for querying findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-ipfilter.html
     */
    interface IpFilterProperty {
        /**
         * A finding's CIDR value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-ipfilter.html#cfn-securityhub-insight-ipfilter-cidr
         */
        readonly cidr: string;
    }
    /**
     * Boolean filter for querying findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-booleanfilter.html
     */
    interface BooleanFilterProperty {
        /**
         * The value of the boolean.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-booleanfilter.html#cfn-securityhub-insight-booleanfilter-value
         */
        readonly value: boolean | cdk.IResolvable;
    }
    /**
     * A keyword filter for querying findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-keywordfilter.html
     */
    interface KeywordFilterProperty {
        /**
         * A value for the keyword.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-keywordfilter.html#cfn-securityhub-insight-keywordfilter-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnInsight`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html
 */
export interface CfnInsightProps {
    /**
     * One or more attributes used to filter the findings included in the insight.
     *
     * The insight only includes findings that match the criteria defined in the filters. You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-filters
     */
    readonly filters: CfnInsight.AwsSecurityFindingFiltersProperty | cdk.IResolvable;
    /**
     * The grouping attribute for the insight's findings.
     *
     * Indicates how to group the matching findings, and identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-groupbyattribute
     */
    readonly groupByAttribute: string;
    /**
     * The name of a Security Hub insight.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-name
     */
    readonly name: string;
}
/**
 * The `AWS::SecurityHub::OrganizationConfiguration` resource specifies the way that your AWS organization is configured in AWS Security Hub .
 *
 * Specifically, you can use this resource to specify the configuration type for your organization and whether to automatically Security Hub and security standards in new member accounts. For more information, see [Managing administrator and member accounts](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts.html) in the *AWS Security Hub User Guide* .
 *
 * @cloudformationResource AWS::SecurityHub::OrganizationConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html
 */
export declare class CfnOrganizationConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnOrganizationConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnOrganizationConfiguration;
    /**
     * Whether the maximum number of allowed member accounts are already associated with the Security Hub administrator account.
     *
     * @cloudformationAttribute MemberAccountLimitReached
     */
    readonly attrMemberAccountLimitReached: cdk.IResolvable;
    /**
     * The organization configuration identifier, formatted as `AccountId/Region/securityhub-organization-configuration` . For example, `123456789012/us-east-1/securityhub-organization-configuration` .
     *
     * @cloudformationAttribute OrganizationConfigurationIdentifier
     */
    readonly attrOrganizationConfigurationIdentifier: string;
    /**
     * Describes whether central configuration could be enabled as the `ConfigurationType` for the organization. If your `ConfigurationType` is local configuration, then the value of `Status` is always `ENABLED` .
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Provides an explanation if the value of `Status` is equal to `FAILED` when `ConfigurationType` is equal to `CENTRAL` .
     *
     * @cloudformationAttribute StatusMessage
     */
    readonly attrStatusMessage: string;
    /**
     * Whether to automatically enable Security Hub in new member accounts when they join the organization.
     */
    autoEnable: boolean | cdk.IResolvable;
    /**
     * Whether to automatically enable Security Hub [default standards](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html) in new member accounts when they join the organization.
     */
    autoEnableStandards?: string;
    /**
     * Indicates whether the organization uses local or central configuration.
     */
    configurationType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnOrganizationConfigurationProps);
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
 * Properties for defining a `CfnOrganizationConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html
 */
export interface CfnOrganizationConfigurationProps {
    /**
     * Whether to automatically enable Security Hub in new member accounts when they join the organization.
     *
     * If set to `true` , then Security Hub is automatically enabled in new accounts. If set to `false` , then Security Hub isn't enabled in new accounts automatically. The default value is `false` .
     *
     * If the `ConfigurationType` of your organization is set to `CENTRAL` , then this field is set to `false` and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration policy in which Security Hub is enabled and associate the policy with new organization accounts.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html#cfn-securityhub-organizationconfiguration-autoenable
     */
    readonly autoEnable: boolean | cdk.IResolvable;
    /**
     * Whether to automatically enable Security Hub [default standards](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html) in new member accounts when they join the organization.
     *
     * The default value of this parameter is equal to `DEFAULT` .
     *
     * If equal to `DEFAULT` , then Security Hub default standards are automatically enabled for new member accounts. If equal to `NONE` , then default standards are not automatically enabled for new member accounts.
     *
     * If the `ConfigurationType` of your organization is set to `CENTRAL` , then this field is set to `NONE` and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration policy in which specific security standards are enabled and associate the policy with new organization accounts.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html#cfn-securityhub-organizationconfiguration-autoenablestandards
     */
    readonly autoEnableStandards?: string;
    /**
     * Indicates whether the organization uses local or central configuration.
     *
     * If you use local configuration, the Security Hub delegated administrator can set `AutoEnable` to `true` and `AutoEnableStandards` to `DEFAULT` . This automatically enables Security Hub and default security standards in new organization accounts. These new account settings must be set separately in each AWS Region , and settings may be different in each Region.
     *
     * If you use central configuration, the delegated administrator can create configuration policies. Configuration policies can be used to configure Security Hub, security standards, and security controls in multiple accounts and Regions. If you want new organization accounts to use a specific configuration, you can create a configuration policy and associate it with the root or specific organizational units (OUs). New accounts will inherit the policy from the root or their assigned OU.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html#cfn-securityhub-organizationconfiguration-configurationtype
     */
    readonly configurationType?: string;
}
/**
 * The `AWS::SecurityHub::PolicyAssociation` resource specifies associations for a configuration policy or a self-managed configuration.
 *
 * You can associate a AWS Security Hub configuration policy or self-managed configuration with the organization root, organizational units (OUs), or AWS accounts . After a successful association, the configuration policy takes effect in the specified targets. For more information, see [Creating and associating Security Hub configuration policies](https://docs.aws.amazon.com/securityhub/latest/userguide/create-associate-policy.html) in the *AWS Security Hub User Guide* .
 *
 * @cloudformationResource AWS::SecurityHub::PolicyAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html
 */
export declare class CfnPolicyAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPolicyAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPolicyAssociation;
    /**
     * The association identifier, formatted as `TargetType/TargetId` . For example, `ACCOUNT/123456789012` .
     *
     * @cloudformationAttribute AssociationIdentifier
     */
    readonly attrAssociationIdentifier: string;
    /**
     * The current status of the association between the specified target and the configuration.
     *
     * @cloudformationAttribute AssociationStatus
     */
    readonly attrAssociationStatus: string;
    /**
     * The explanation for a `FAILED` value for `AssociationStatus` .
     *
     * @cloudformationAttribute AssociationStatusMessage
     */
    readonly attrAssociationStatusMessage: string;
    /**
     * Indicates whether the association between the specified target and the configuration was directly applied by the AWS Security Hub delegated administrator or inherited from a parent.
     *
     * @cloudformationAttribute AssociationType
     */
    readonly attrAssociationType: string;
    /**
     * The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The universally unique identifier (UUID) of the configuration policy.
     */
    configurationPolicyId: string;
    /**
     * The identifier of the target account, organizational unit, or the root.
     */
    targetId: string;
    /**
     * Specifies whether the target is an AWS account , organizational unit, or the root.
     */
    targetType: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPolicyAssociationProps);
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
 * Properties for defining a `CfnPolicyAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html
 */
export interface CfnPolicyAssociationProps {
    /**
     * The universally unique identifier (UUID) of the configuration policy.
     *
     * A self-managed configuration has no UUID. The identifier of a self-managed configuration is `SELF_MANAGED_SECURITY_HUB` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html#cfn-securityhub-policyassociation-configurationpolicyid
     */
    readonly configurationPolicyId: string;
    /**
     * The identifier of the target account, organizational unit, or the root.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html#cfn-securityhub-policyassociation-targetid
     */
    readonly targetId: string;
    /**
     * Specifies whether the target is an AWS account , organizational unit, or the root.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html#cfn-securityhub-policyassociation-targettype
     */
    readonly targetType: string;
}
/**
 * The `AWS::SecurityHub::ProductSubscription` resource creates a subscription to a third-party product that generates findings that you want to receive in AWS Security Hub .
 *
 * For a list of integrations to third-party products, see [Available third-party partner product integrations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-partner-providers.html) in the *AWS Security Hub User Guide* .
 *
 * To change a product subscription, remove the current product subscription resource, and then create a new one.
 *
 * Tags aren't supported for this resource.
 *
 * @cloudformationResource AWS::SecurityHub::ProductSubscription
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-productsubscription.html
 */
export declare class CfnProductSubscription extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProductSubscription from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProductSubscription;
    /**
     * The ARN of your subscription to the product to enable integrations for.
     *
     * @cloudformationAttribute ProductSubscriptionArn
     */
    readonly attrProductSubscriptionArn: string;
    /**
     * The ARN of the product to enable the integration for.
     */
    productArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProductSubscriptionProps);
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
 * Properties for defining a `CfnProductSubscription`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-productsubscription.html
 */
export interface CfnProductSubscriptionProps {
    /**
     * The ARN of the product to enable the integration for.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-productsubscription.html#cfn-securityhub-productsubscription-productarn
     */
    readonly productArn: string;
}
/**
 * The `AWS::SecurityHub::SecurityControl` resource specifies custom parameter values for an AWS Security Hub control.
 *
 * For a list of controls that support custom parameters, see [Security Hub controls reference](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-controls-reference.html) . You can also use this resource to specify the use of default parameter values for a control. For more information about custom parameters, see [Custom control parameters](https://docs.aws.amazon.com/securityhub/latest/userguide/custom-control-parameters.html) in the *AWS Security Hub User Guide* .
 *
 * Tags aren't supported for this resource.
 *
 * @cloudformationResource AWS::SecurityHub::SecurityControl
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html
 */
export declare class CfnSecurityControl extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecurityControl from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecurityControl;
    /**
     * The most recent reason for updating the customizable properties of a security control.
     */
    lastUpdateReason?: string;
    /**
     * An object that identifies the name of a control parameter, its current value, and whether it has been customized.
     */
    parameters: cdk.IResolvable | Record<string, cdk.IResolvable | CfnSecurityControl.ParameterConfigurationProperty>;
    /**
     * The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1` . This parameter doesn't mention a specific standard.
     */
    securityControlArn?: string;
    /**
     * The unique identifier of a security control across standards.
     */
    securityControlId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSecurityControlProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSecurityControl {
    /**
     * An object that provides the current value of a security control parameter and identifies whether it has been customized.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-securitycontrol-parameterconfiguration.html
     */
    interface ParameterConfigurationProperty {
        /**
         * Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior.
         *
         * When `ValueType` is set equal to `DEFAULT` , the default behavior can be a specific Security Hub default value, or the default behavior can be to ignore a specific parameter. When `ValueType` is set equal to `DEFAULT` , Security Hub ignores user-provided input for the `Value` field.
         *
         * When `ValueType` is set equal to `CUSTOM` , the `Value` field can't be empty.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-securitycontrol-parameterconfiguration.html#cfn-securityhub-securitycontrol-parameterconfiguration-valuetype
         */
        readonly valueType: string;
    }
}
/**
 * Properties for defining a `CfnSecurityControl`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html
 */
export interface CfnSecurityControlProps {
    /**
     * The most recent reason for updating the customizable properties of a security control.
     *
     * This differs from the `UpdateReason` field of the [`BatchUpdateStandardsControlAssociations`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html) API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-lastupdatereason
     */
    readonly lastUpdateReason?: string;
    /**
     * An object that identifies the name of a control parameter, its current value, and whether it has been customized.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parameters
     */
    readonly parameters: cdk.IResolvable | Record<string, cdk.IResolvable | CfnSecurityControl.ParameterConfigurationProperty>;
    /**
     * The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1` . This parameter doesn't mention a specific standard.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-securitycontrolarn
     */
    readonly securityControlArn?: string;
    /**
     * The unique identifier of a security control across standards.
     *
     * Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-securitycontrolid
     */
    readonly securityControlId?: string;
}
