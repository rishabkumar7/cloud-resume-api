import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a new analysis template.
 *
 * @cloudformationResource AWS::CleanRooms::AnalysisTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html
 */
export declare class CfnAnalysisTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAnalysisTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAnalysisTemplate;
    /**
     * Returns the identifier for the analysis template.
     *
     * Example: `a1b2c3d4-5678-90ab-cdef-EXAMPLE2222`
     *
     * @cloudformationAttribute AnalysisTemplateIdentifier
     */
    readonly attrAnalysisTemplateIdentifier: string;
    /**
     * Returns the Amazon Resource Name (ARN) of the analysis template.
     *
     * Example: `arn:aws:cleanrooms:us-east-1:111122223333:membership/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111/analysistemplates/a1b2c3d4-5678-90ab-cdef-EXAMPLE2222`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the unique ARN for the analysis template’s associated collaboration.
     *
     * Example: `arn:aws:cleanrooms:us-east-1:111122223333:collaboration/a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`
     *
     * @cloudformationAttribute CollaborationArn
     */
    readonly attrCollaborationArn: string;
    /**
     * Returns the unique ID for the associated collaboration of the analysis template.
     *
     * Example: `a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`
     *
     * @cloudformationAttribute CollaborationIdentifier
     */
    readonly attrCollaborationIdentifier: string;
    /**
     * Returns the Amazon Resource Name (ARN) of the member who created the analysis template.
     *
     * Example: `arn:aws:cleanrooms:us-east-1:111122223333:membership/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`
     *
     * @cloudformationAttribute MembershipArn
     */
    readonly attrMembershipArn: string;
    /**
     * @cloudformationAttribute Schema
     */
    readonly attrSchema: cdk.IResolvable;
    /**
     * @cloudformationAttribute Schema.ReferencedTables
     */
    readonly attrSchemaReferencedTables: Array<string>;
    /**
     * The parameters of the analysis template.
     */
    analysisParameters?: Array<CfnAnalysisTemplate.AnalysisParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the analysis template.
     */
    description?: string;
    /**
     * The format of the analysis template.
     */
    format: string;
    /**
     * The identifier for a membership resource.
     */
    membershipIdentifier: string;
    /**
     * The name of the analysis template.
     */
    name: string;
    /**
     * The source of the analysis template.
     */
    source: CfnAnalysisTemplate.AnalysisSourceProperty | cdk.IResolvable;
    /**
     * An optional label that you can assign to a resource when you create it.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAnalysisTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAnalysisTemplate {
    /**
     * Optional.
     *
     * The member who can query can provide this placeholder for a literal data value in an analysis template.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysisparameter.html
     */
    interface AnalysisParameterProperty {
        /**
         * Optional.
         *
         * The default value that is applied in the analysis template. The member who can query can override this value in the query editor.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysisparameter.html#cfn-cleanrooms-analysistemplate-analysisparameter-defaultvalue
         */
        readonly defaultValue?: string;
        /**
         * The name of the parameter.
         *
         * The name must use only alphanumeric, underscore (_), or hyphen (-) characters but cannot start or end with a hyphen.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysisparameter.html#cfn-cleanrooms-analysistemplate-analysisparameter-name
         */
        readonly name: string;
        /**
         * The type of parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysisparameter.html#cfn-cleanrooms-analysistemplate-analysisparameter-type
         */
        readonly type: string;
    }
    /**
     * The structure that defines the body of the analysis template.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysissource.html
     */
    interface AnalysisSourceProperty {
        /**
         * The query text.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysissource.html#cfn-cleanrooms-analysistemplate-analysissource-text
         */
        readonly text: string;
    }
    /**
     * A relation within an analysis.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysisschema.html
     */
    interface AnalysisSchemaProperty {
        /**
         * The tables referenced in the analysis schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysisschema.html#cfn-cleanrooms-analysistemplate-analysisschema-referencedtables
         */
        readonly referencedTables: Array<string>;
    }
}
/**
 * Properties for defining a `CfnAnalysisTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html
 */
export interface CfnAnalysisTemplateProps {
    /**
     * The parameters of the analysis template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysisparameters
     */
    readonly analysisParameters?: Array<CfnAnalysisTemplate.AnalysisParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the analysis template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-description
     */
    readonly description?: string;
    /**
     * The format of the analysis template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-format
     */
    readonly format: string;
    /**
     * The identifier for a membership resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-membershipidentifier
     */
    readonly membershipIdentifier: string;
    /**
     * The name of the analysis template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-name
     */
    readonly name: string;
    /**
     * The source of the analysis template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-source
     */
    readonly source: CfnAnalysisTemplate.AnalysisSourceProperty | cdk.IResolvable;
    /**
     * An optional label that you can assign to a resource when you create it.
     *
     * Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new collaboration.
 *
 * @cloudformationResource AWS::CleanRooms::Collaboration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html
 */
export declare class CfnCollaboration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCollaboration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCollaboration;
    /**
     * Returns the Amazon Resource Name (ARN) of the specified collaboration.
     *
     * Example: `arn:aws:cleanrooms:us-east-1:111122223333:collaboration/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the unique identifier of the specified collaboration.
     *
     * Example: `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`
     *
     * @cloudformationAttribute CollaborationIdentifier
     */
    readonly attrCollaborationIdentifier: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A display name of the collaboration creator.
     */
    creatorDisplayName: string;
    /**
     * The abilities granted to the collaboration creator.
     */
    creatorMemberAbilities: Array<string>;
    /**
     * An object representing the collaboration member's payment responsibilities set by the collaboration creator.
     */
    creatorPaymentConfiguration?: cdk.IResolvable | CfnCollaboration.PaymentConfigurationProperty;
    /**
     * The settings for client-side encryption for cryptographic computing.
     */
    dataEncryptionMetadata?: CfnCollaboration.DataEncryptionMetadataProperty | cdk.IResolvable;
    /**
     * A description of the collaboration provided by the collaboration owner.
     */
    description: string;
    /**
     * A list of initial members, not including the creator.
     */
    members: Array<cdk.IResolvable | CfnCollaboration.MemberSpecificationProperty> | cdk.IResolvable;
    /**
     * A human-readable identifier provided by the collaboration owner.
     */
    name: string;
    /**
     * An indicator as to whether query logging has been enabled or disabled for the collaboration.
     */
    queryLogStatus: string;
    /**
     * An optional label that you can assign to a resource when you create it.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCollaborationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCollaboration {
    /**
     * The settings for client-side encryption for cryptographic computing.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-dataencryptionmetadata.html
     */
    interface DataEncryptionMetadataProperty {
        /**
         * Indicates whether encrypted tables can contain cleartext data ( `TRUE` ) or are to cryptographically process every column ( `FALSE` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-dataencryptionmetadata.html#cfn-cleanrooms-collaboration-dataencryptionmetadata-allowcleartext
         */
        readonly allowCleartext: boolean | cdk.IResolvable;
        /**
         * Indicates whether Fingerprint columns can contain duplicate entries ( `TRUE` ) or are to contain only non-repeated values ( `FALSE` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-dataencryptionmetadata.html#cfn-cleanrooms-collaboration-dataencryptionmetadata-allowduplicates
         */
        readonly allowDuplicates: boolean | cdk.IResolvable;
        /**
         * Indicates whether Fingerprint columns can be joined on any other Fingerprint column with a different name ( `TRUE` ) or can only be joined on Fingerprint columns of the same name ( `FALSE` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-dataencryptionmetadata.html#cfn-cleanrooms-collaboration-dataencryptionmetadata-allowjoinsoncolumnswithdifferentnames
         */
        readonly allowJoinsOnColumnsWithDifferentNames: boolean | cdk.IResolvable;
        /**
         * Indicates whether NULL values are to be copied as NULL to encrypted tables ( `TRUE` ) or cryptographically processed ( `FALSE` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-dataencryptionmetadata.html#cfn-cleanrooms-collaboration-dataencryptionmetadata-preservenulls
         */
        readonly preserveNulls: boolean | cdk.IResolvable;
    }
    /**
     * Basic metadata used to construct a new member.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberspecification.html
     */
    interface MemberSpecificationProperty {
        /**
         * The identifier used to reference members of the collaboration.
         *
         * Currently only supports AWS account ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberspecification.html#cfn-cleanrooms-collaboration-memberspecification-accountid
         */
        readonly accountId: string;
        /**
         * The member's display name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberspecification.html#cfn-cleanrooms-collaboration-memberspecification-displayname
         */
        readonly displayName: string;
        /**
         * The abilities granted to the collaboration member.
         *
         * *Allowed Values* : `CAN_QUERY` | `CAN_RECEIVE_RESULTS`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberspecification.html#cfn-cleanrooms-collaboration-memberspecification-memberabilities
         */
        readonly memberAbilities: Array<string>;
        /**
         * The collaboration member's payment responsibilities set by the collaboration creator.
         *
         * If the collaboration creator hasn't speciﬁed anyone as the member paying for query compute costs, then the member who can query is the default payer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberspecification.html#cfn-cleanrooms-collaboration-memberspecification-paymentconfiguration
         */
        readonly paymentConfiguration?: cdk.IResolvable | CfnCollaboration.PaymentConfigurationProperty;
    }
    /**
     * An object representing the collaboration member's payment responsibilities set by the collaboration creator.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-paymentconfiguration.html
     */
    interface PaymentConfigurationProperty {
        /**
         * The collaboration member's payment responsibilities set by the collaboration creator for query compute costs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-paymentconfiguration.html#cfn-cleanrooms-collaboration-paymentconfiguration-querycompute
         */
        readonly queryCompute: cdk.IResolvable | CfnCollaboration.QueryComputePaymentConfigProperty;
    }
    /**
     * An object representing the collaboration member's payment responsibilities set by the collaboration creator for query compute costs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-querycomputepaymentconfig.html
     */
    interface QueryComputePaymentConfigProperty {
        /**
         * Indicates whether the collaboration creator has configured the collaboration member to pay for query compute costs ( `TRUE` ) or has not configured the collaboration member to pay for query compute costs ( `FALSE` ).
         *
         * Exactly one member can be configured to pay for query compute costs. An error is returned if the collaboration creator sets a `TRUE` value for more than one member in the collaboration.
         *
         * If the collaboration creator hasn't specified anyone as the member paying for query compute costs, then the member who can query is the default payer. An error is returned if the collaboration creator sets a `FALSE` value for the member who can query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-querycomputepaymentconfig.html#cfn-cleanrooms-collaboration-querycomputepaymentconfig-isresponsible
         */
        readonly isResponsible: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnCollaboration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html
 */
export interface CfnCollaborationProps {
    /**
     * A display name of the collaboration creator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-creatordisplayname
     */
    readonly creatorDisplayName: string;
    /**
     * The abilities granted to the collaboration creator.
     *
     * *Allowed values* `CAN_QUERY` | `CAN_RECEIVE_RESULTS`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-creatormemberabilities
     */
    readonly creatorMemberAbilities: Array<string>;
    /**
     * An object representing the collaboration member's payment responsibilities set by the collaboration creator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-creatorpaymentconfiguration
     */
    readonly creatorPaymentConfiguration?: cdk.IResolvable | CfnCollaboration.PaymentConfigurationProperty;
    /**
     * The settings for client-side encryption for cryptographic computing.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-dataencryptionmetadata
     */
    readonly dataEncryptionMetadata?: CfnCollaboration.DataEncryptionMetadataProperty | cdk.IResolvable;
    /**
     * A description of the collaboration provided by the collaboration owner.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-description
     */
    readonly description: string;
    /**
     * A list of initial members, not including the creator.
     *
     * This list is immutable.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-members
     */
    readonly members: Array<cdk.IResolvable | CfnCollaboration.MemberSpecificationProperty> | cdk.IResolvable;
    /**
     * A human-readable identifier provided by the collaboration owner.
     *
     * Display names are not unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-name
     */
    readonly name: string;
    /**
     * An indicator as to whether query logging has been enabled or disabled for the collaboration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-querylogstatus
     */
    readonly queryLogStatus: string;
    /**
     * An optional label that you can assign to a resource when you create it.
     *
     * Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new configured table resource.
 *
 * @cloudformationResource AWS::CleanRooms::ConfiguredTable
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html
 */
export declare class CfnConfiguredTable extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfiguredTable from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfiguredTable;
    /**
     * Returns the Amazon Resource Name (ARN) of the specified configured table.
     *
     * Example: `arn:aws:cleanrooms:us-east-1:111122223333:configuredtable/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the unique identifier of the specified configured table.
     *
     * Example: `a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`
     *
     * @cloudformationAttribute ConfiguredTableIdentifier
     */
    readonly attrConfiguredTableIdentifier: string;
    /**
     * The columns within the underlying AWS Glue table that can be utilized within collaborations.
     */
    allowedColumns: Array<string>;
    /**
     * The analysis method for the configured table.
     */
    analysisMethod: string;
    /**
     * The entire created analysis rule.
     */
    analysisRules?: Array<CfnConfiguredTable.AnalysisRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A description for the configured table.
     */
    description?: string;
    /**
     * A name for the configured table.
     */
    name: string;
    /**
     * The AWS Glue table that this configured table represents.
     */
    tableReference: cdk.IResolvable | CfnConfiguredTable.TableReferenceProperty;
    /**
     * An optional label that you can assign to a resource when you create it.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfiguredTableProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfiguredTable {
    /**
     * A pointer to the dataset that underlies this table.
     *
     * Currently, this can only be an AWS Glue table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-tablereference.html
     */
    interface TableReferenceProperty {
        /**
         * If present, a reference to the AWS Glue table referred to by this table reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-tablereference.html#cfn-cleanrooms-configuredtable-tablereference-glue
         */
        readonly glue: CfnConfiguredTable.GlueTableReferenceProperty | cdk.IResolvable;
    }
    /**
     * A reference to a table within an AWS Glue data catalog.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-gluetablereference.html
     */
    interface GlueTableReferenceProperty {
        /**
         * The name of the database the AWS Glue table belongs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-gluetablereference.html#cfn-cleanrooms-configuredtable-gluetablereference-databasename
         */
        readonly databaseName: string;
        /**
         * The name of the AWS Glue table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-gluetablereference.html#cfn-cleanrooms-configuredtable-gluetablereference-tablename
         */
        readonly tableName: string;
    }
    /**
     * A specification about how data from the configured table can be used in a query.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrule.html
     */
    interface AnalysisRuleProperty {
        /**
         * A policy that describes the associated data usage limitations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrule.html#cfn-cleanrooms-configuredtable-analysisrule-policy
         */
        readonly policy: CfnConfiguredTable.ConfiguredTableAnalysisRulePolicyProperty | cdk.IResolvable;
        /**
         * The type of analysis rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrule.html#cfn-cleanrooms-configuredtable-analysisrule-type
         */
        readonly type: string;
    }
    /**
     * Controls on the query specifications that can be run on a configured table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-configuredtableanalysisrulepolicy.html
     */
    interface ConfiguredTableAnalysisRulePolicyProperty {
        /**
         * Controls on the query specifications that can be run on a configured table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-configuredtableanalysisrulepolicy.html#cfn-cleanrooms-configuredtable-configuredtableanalysisrulepolicy-v1
         */
        readonly v1: CfnConfiguredTable.ConfiguredTableAnalysisRulePolicyV1Property | cdk.IResolvable;
    }
    /**
     * Controls on the query specifications that can be run on a configured table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1.html
     */
    interface ConfiguredTableAnalysisRulePolicyV1Property {
        /**
         * Analysis rule type that enables only aggregation queries on a configured table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1.html#cfn-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1-aggregation
         */
        readonly aggregation?: CfnConfiguredTable.AnalysisRuleAggregationProperty | cdk.IResolvable;
        /**
         * Analysis rule type that enables custom SQL queries on a configured table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1.html#cfn-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1-custom
         */
        readonly custom?: CfnConfiguredTable.AnalysisRuleCustomProperty | cdk.IResolvable;
        /**
         * Analysis rule type that enables only list queries on a configured table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1.html#cfn-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1-list
         */
        readonly list?: CfnConfiguredTable.AnalysisRuleListProperty | cdk.IResolvable;
    }
    /**
     * A type of analysis rule that enables query structure and specified queries that produce aggregate statistics.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisruleaggregation.html
     */
    interface AnalysisRuleAggregationProperty {
        /**
         * The columns that query runners are allowed to use in aggregation queries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisruleaggregation.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-aggregatecolumns
         */
        readonly aggregateColumns: Array<CfnConfiguredTable.AggregateColumnProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Which logical operators (if any) are to be used in an INNER JOIN match condition.
         *
         * Default is `AND` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisruleaggregation.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-allowedjoinoperators
         */
        readonly allowedJoinOperators?: Array<string>;
        /**
         * The columns that query runners are allowed to select, group by, or filter by.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisruleaggregation.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-dimensioncolumns
         */
        readonly dimensionColumns: Array<string>;
        /**
         * Columns in configured table that can be used in join statements and/or as aggregate columns.
         *
         * They can never be outputted directly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisruleaggregation.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-joincolumns
         */
        readonly joinColumns: Array<string>;
        /**
         * Control that requires member who runs query to do a join with their configured table and/or other configured table in query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisruleaggregation.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-joinrequired
         */
        readonly joinRequired?: string;
        /**
         * Columns that must meet a specific threshold value (after an aggregation function is applied to it) for each output row to be returned.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisruleaggregation.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-outputconstraints
         */
        readonly outputConstraints: Array<CfnConfiguredTable.AggregationConstraintProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Set of scalar functions that are allowed to be used on dimension columns and the output of aggregation of metrics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisruleaggregation.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-scalarfunctions
         */
        readonly scalarFunctions: Array<string>;
    }
    /**
     * Constraint on query output removing output rows that do not meet a minimum number of distinct values of a specified column.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-aggregationconstraint.html
     */
    interface AggregationConstraintProperty {
        /**
         * Column in aggregation constraint for which there must be a minimum number of distinct values in an output row for it to be in the query output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-aggregationconstraint.html#cfn-cleanrooms-configuredtable-aggregationconstraint-columnname
         */
        readonly columnName: string;
        /**
         * The minimum number of distinct values that an output row must be an aggregation of.
         *
         * Minimum threshold of distinct values for a specified column that must exist in an output row for it to be in the query output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-aggregationconstraint.html#cfn-cleanrooms-configuredtable-aggregationconstraint-minimum
         */
        readonly minimum: number;
        /**
         * The type of aggregation the constraint allows.
         *
         * The only valid value is currently `COUNT_DISTINCT`.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-aggregationconstraint.html#cfn-cleanrooms-configuredtable-aggregationconstraint-type
         */
        readonly type: string;
    }
    /**
     * Column in configured table that can be used in aggregate function in query.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-aggregatecolumn.html
     */
    interface AggregateColumnProperty {
        /**
         * Column names in configured table of aggregate columns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-aggregatecolumn.html#cfn-cleanrooms-configuredtable-aggregatecolumn-columnnames
         */
        readonly columnNames: Array<string>;
        /**
         * Aggregation function that can be applied to aggregate column in query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-aggregatecolumn.html#cfn-cleanrooms-configuredtable-aggregatecolumn-function
         */
        readonly function: string;
    }
    /**
     * A type of analysis rule that enables row-level analysis.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrulelist.html
     */
    interface AnalysisRuleListProperty {
        /**
         * The logical operators (if any) that are to be used in an INNER JOIN match condition.
         *
         * Default is `AND` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrulelist.html#cfn-cleanrooms-configuredtable-analysisrulelist-allowedjoinoperators
         */
        readonly allowedJoinOperators?: Array<string>;
        /**
         * Columns that can be used to join a configured table with the table of the member who can query and other members' configured tables.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrulelist.html#cfn-cleanrooms-configuredtable-analysisrulelist-joincolumns
         */
        readonly joinColumns: Array<string>;
        /**
         * Columns that can be listed in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrulelist.html#cfn-cleanrooms-configuredtable-analysisrulelist-listcolumns
         */
        readonly listColumns: Array<string>;
    }
    /**
     * A type of analysis rule that enables the table owner to approve custom SQL queries on their configured tables.
     *
     * It supports differential privacy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrulecustom.html
     */
    interface AnalysisRuleCustomProperty {
        /**
         * The ARN of the analysis templates that are allowed by the custom analysis rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrulecustom.html#cfn-cleanrooms-configuredtable-analysisrulecustom-allowedanalyses
         */
        readonly allowedAnalyses: Array<string>;
        /**
         * The IDs of the AWS accounts that are allowed to query by the custom analysis rule.
         *
         * Required when `allowedAnalyses` is `ANY_QUERY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrulecustom.html#cfn-cleanrooms-configuredtable-analysisrulecustom-allowedanalysisproviders
         */
        readonly allowedAnalysisProviders?: Array<string>;
        /**
         * The differential privacy configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrulecustom.html#cfn-cleanrooms-configuredtable-analysisrulecustom-differentialprivacy
         */
        readonly differentialPrivacy?: CfnConfiguredTable.DifferentialPrivacyProperty | cdk.IResolvable;
    }
    /**
     * The analysis method for the configured tables.
     *
     * The only valid value is currently `DIRECT_QUERY`.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-differentialprivacy.html
     */
    interface DifferentialPrivacyProperty {
        /**
         * The name of the column, such as user_id, that contains the unique identifier of your users, whose privacy you want to protect.
         *
         * If you want to turn on differential privacy for two or more tables in a collaboration, you must configure the same column as the user identifier column in both analysis rules.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-differentialprivacy.html#cfn-cleanrooms-configuredtable-differentialprivacy-columns
         */
        readonly columns: Array<CfnConfiguredTable.DifferentialPrivacyColumnProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Specifies the name of the column that contains the unique identifier of your users, whose privacy you want to protect.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-differentialprivacycolumn.html
     */
    interface DifferentialPrivacyColumnProperty {
        /**
         * The name of the column, such as user_id, that contains the unique identifier of your users, whose privacy you want to protect.
         *
         * If you want to turn on differential privacy for two or more tables in a collaboration, you must configure the same column as the user identifier column in both analysis rules.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-differentialprivacycolumn.html#cfn-cleanrooms-configuredtable-differentialprivacycolumn-name
         */
        readonly name: string;
    }
}
/**
 * Properties for defining a `CfnConfiguredTable`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html
 */
export interface CfnConfiguredTableProps {
    /**
     * The columns within the underlying AWS Glue table that can be utilized within collaborations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-allowedcolumns
     */
    readonly allowedColumns: Array<string>;
    /**
     * The analysis method for the configured table.
     *
     * The only valid value is currently `DIRECT_QUERY`.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysismethod
     */
    readonly analysisMethod: string;
    /**
     * The entire created analysis rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrules
     */
    readonly analysisRules?: Array<CfnConfiguredTable.AnalysisRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A description for the configured table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-description
     */
    readonly description?: string;
    /**
     * A name for the configured table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-name
     */
    readonly name: string;
    /**
     * The AWS Glue table that this configured table represents.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-tablereference
     */
    readonly tableReference: cdk.IResolvable | CfnConfiguredTable.TableReferenceProperty;
    /**
     * An optional label that you can assign to a resource when you create it.
     *
     * Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a configured table association.
 *
 * A configured table association links a configured table with a collaboration.
 *
 * @cloudformationResource AWS::CleanRooms::ConfiguredTableAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html
 */
export declare class CfnConfiguredTableAssociation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfiguredTableAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfiguredTableAssociation;
    /**
     * Returns the Amazon Resource Name (ARN) of the specified configured table association.
     *
     * Example: `arn:aws:cleanrooms:us-east-1:111122223333:configuredtable/a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the unique identifier of the specified configured table association.
     *
     * Example: `a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`
     *
     * @cloudformationAttribute ConfiguredTableAssociationIdentifier
     */
    readonly attrConfiguredTableAssociationIdentifier: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A unique identifier for the configured table to be associated to.
     */
    configuredTableIdentifier: string;
    /**
     * A description of the configured table association.
     */
    description?: string;
    /**
     * The unique ID for the membership this configured table association belongs to.
     */
    membershipIdentifier: string;
    /**
     * The name of the configured table association, in lowercase.
     */
    name: string;
    /**
     * The service will assume this role to access catalog metadata and query the table.
     */
    roleArn: string;
    /**
     * An optional label that you can assign to a resource when you create it.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfiguredTableAssociationProps);
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
 * Properties for defining a `CfnConfiguredTableAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html
 */
export interface CfnConfiguredTableAssociationProps {
    /**
     * A unique identifier for the configured table to be associated to.
     *
     * Currently accepts a configured table ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html#cfn-cleanrooms-configuredtableassociation-configuredtableidentifier
     */
    readonly configuredTableIdentifier: string;
    /**
     * A description of the configured table association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html#cfn-cleanrooms-configuredtableassociation-description
     */
    readonly description?: string;
    /**
     * The unique ID for the membership this configured table association belongs to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html#cfn-cleanrooms-configuredtableassociation-membershipidentifier
     */
    readonly membershipIdentifier: string;
    /**
     * The name of the configured table association, in lowercase.
     *
     * The table is identified by this name when running protected queries against the underlying data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html#cfn-cleanrooms-configuredtableassociation-name
     */
    readonly name: string;
    /**
     * The service will assume this role to access catalog metadata and query the table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html#cfn-cleanrooms-configuredtableassociation-rolearn
     */
    readonly roleArn: string;
    /**
     * An optional label that you can assign to a resource when you create it.
     *
     * Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html#cfn-cleanrooms-configuredtableassociation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a membership for a specific collaboration identifier and joins the collaboration.
 *
 * @cloudformationResource AWS::CleanRooms::Membership
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html
 */
export declare class CfnMembership extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMembership from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMembership;
    /**
     * Returns the Amazon Resource Name (ARN) of the specified membership.
     *
     * Example: `arn:aws:cleanrooms:us-east-1:111122223333:membership/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the Amazon Resource Name (ARN) of the specified collaboration.
     *
     * Example: `arn:aws:cleanrooms:us-east-1:111122223333:collaboration/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`
     *
     * @cloudformationAttribute CollaborationArn
     */
    readonly attrCollaborationArn: string;
    /**
     * Returns the unique identifier of the specified collaboration creator account.
     *
     * Example: `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`
     *
     * @cloudformationAttribute CollaborationCreatorAccountId
     */
    readonly attrCollaborationCreatorAccountId: string;
    /**
     * Returns the unique identifier of the specified membership.
     *
     * Example: `a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`
     *
     * @cloudformationAttribute MembershipIdentifier
     */
    readonly attrMembershipIdentifier: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The unique ID for the associated collaboration.
     */
    collaborationIdentifier: string;
    /**
     * The default protected query result configuration as specified by the member who can receive results.
     */
    defaultResultConfiguration?: cdk.IResolvable | CfnMembership.MembershipProtectedQueryResultConfigurationProperty;
    /**
     * The payment responsibilities accepted by the collaboration member.
     */
    paymentConfiguration?: cdk.IResolvable | CfnMembership.MembershipPaymentConfigurationProperty;
    /**
     * An indicator as to whether query logging has been enabled or disabled for the membership.
     */
    queryLogStatus: string;
    /**
     * An optional label that you can assign to a resource when you create it.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMembershipProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMembership {
    /**
     * Contains configurations for protected query results.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryresultconfiguration.html
     */
    interface MembershipProtectedQueryResultConfigurationProperty {
        /**
         * Configuration for protected query results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryresultconfiguration.html#cfn-cleanrooms-membership-membershipprotectedqueryresultconfiguration-outputconfiguration
         */
        readonly outputConfiguration: cdk.IResolvable | CfnMembership.MembershipProtectedQueryOutputConfigurationProperty;
        /**
         * The unique ARN for an IAM role that is used by AWS Clean Rooms to write protected query results to the result location, given by the member who can receive results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryresultconfiguration.html#cfn-cleanrooms-membership-membershipprotectedqueryresultconfiguration-rolearn
         */
        readonly roleArn?: string;
    }
    /**
     * Contains configurations for protected query results.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryoutputconfiguration.html
     */
    interface MembershipProtectedQueryOutputConfigurationProperty {
        /**
         * Required configuration for a protected query with an `S3` output type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryoutputconfiguration.html#cfn-cleanrooms-membership-membershipprotectedqueryoutputconfiguration-s3
         */
        readonly s3: cdk.IResolvable | CfnMembership.ProtectedQueryS3OutputConfigurationProperty;
    }
    /**
     * Contains the configuration to write the query results to S3.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-protectedquerys3outputconfiguration.html
     */
    interface ProtectedQueryS3OutputConfigurationProperty {
        /**
         * The S3 bucket to unload the protected query results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-protectedquerys3outputconfiguration.html#cfn-cleanrooms-membership-protectedquerys3outputconfiguration-bucket
         */
        readonly bucket: string;
        /**
         * The S3 prefix to unload the protected query results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-protectedquerys3outputconfiguration.html#cfn-cleanrooms-membership-protectedquerys3outputconfiguration-keyprefix
         */
        readonly keyPrefix?: string;
        /**
         * Intended file format of the result.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-protectedquerys3outputconfiguration.html#cfn-cleanrooms-membership-protectedquerys3outputconfiguration-resultformat
         */
        readonly resultFormat: string;
    }
    /**
     * An object representing the payment responsibilities accepted by the collaboration member.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershippaymentconfiguration.html
     */
    interface MembershipPaymentConfigurationProperty {
        /**
         * The payment responsibilities accepted by the collaboration member for query compute costs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershippaymentconfiguration.html#cfn-cleanrooms-membership-membershippaymentconfiguration-querycompute
         */
        readonly queryCompute: cdk.IResolvable | CfnMembership.MembershipQueryComputePaymentConfigProperty;
    }
    /**
     * An object representing the payment responsibilities accepted by the collaboration member for query compute costs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipquerycomputepaymentconfig.html
     */
    interface MembershipQueryComputePaymentConfigProperty {
        /**
         * Indicates whether the collaboration member has accepted to pay for query compute costs ( `TRUE` ) or has not accepted to pay for query compute costs ( `FALSE` ).
         *
         * If the collaboration creator has not specified anyone to pay for query compute costs, then the member who can query is the default payer.
         *
         * An error message is returned for the following reasons:
         *
         * - If you set the value to `FALSE` but you are responsible to pay for query compute costs.
         * - If you set the value to `TRUE` but you are not responsible to pay for query compute costs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipquerycomputepaymentconfig.html#cfn-cleanrooms-membership-membershipquerycomputepaymentconfig-isresponsible
         */
        readonly isResponsible: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnMembership`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html
 */
export interface CfnMembershipProps {
    /**
     * The unique ID for the associated collaboration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-collaborationidentifier
     */
    readonly collaborationIdentifier: string;
    /**
     * The default protected query result configuration as specified by the member who can receive results.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-defaultresultconfiguration
     */
    readonly defaultResultConfiguration?: cdk.IResolvable | CfnMembership.MembershipProtectedQueryResultConfigurationProperty;
    /**
     * The payment responsibilities accepted by the collaboration member.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-paymentconfiguration
     */
    readonly paymentConfiguration?: cdk.IResolvable | CfnMembership.MembershipPaymentConfigurationProperty;
    /**
     * An indicator as to whether query logging has been enabled or disabled for the membership.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-querylogstatus
     */
    readonly queryLogStatus: string;
    /**
     * An optional label that you can assign to a resource when you create it.
     *
     * Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * An object that defines the privacy budget template.
 *
 * @cloudformationResource AWS::CleanRooms::PrivacyBudgetTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html
 */
export declare class CfnPrivacyBudgetTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPrivacyBudgetTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPrivacyBudgetTemplate;
    /**
     * The ARN of the privacy budget template.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ARN of the collaboration that contains this privacy budget template.
     *
     * @cloudformationAttribute CollaborationArn
     */
    readonly attrCollaborationArn: string;
    /**
     * The unique ID of the collaboration that contains this privacy budget template.
     *
     * @cloudformationAttribute CollaborationIdentifier
     */
    readonly attrCollaborationIdentifier: string;
    /**
     * The Amazon Resource Name (ARN) of the member who created the privacy budget template.
     *
     * @cloudformationAttribute MembershipArn
     */
    readonly attrMembershipArn: string;
    /**
     * A unique identifier for one of your memberships for a collaboration. The privacy budget template is created in the collaboration that this membership belongs to. Accepts a membership ID.
     *
     * @cloudformationAttribute PrivacyBudgetTemplateIdentifier
     */
    readonly attrPrivacyBudgetTemplateIdentifier: string;
    /**
     * How often the privacy budget refreshes.
     */
    autoRefresh: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The identifier for a membership resource.
     */
    membershipIdentifier: string;
    /**
     * Specifies the epislon and noise parameters for the privacy budget template.
     */
    parameters: cdk.IResolvable | CfnPrivacyBudgetTemplate.ParametersProperty;
    /**
     * Specifies the type of the privacy budget template.
     */
    privacyBudgetType: string;
    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPrivacyBudgetTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPrivacyBudgetTemplate {
    /**
     * Specifies the epislon and noise parameters for the privacy budget template.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-privacybudgettemplate-parameters.html
     */
    interface ParametersProperty {
        /**
         * The epsilon value that you want to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-privacybudgettemplate-parameters.html#cfn-cleanrooms-privacybudgettemplate-parameters-epsilon
         */
        readonly epsilon: number;
        /**
         * Noise added per query is measured in terms of the number of users whose contributions you want to obscure.
         *
         * This value governs the rate at which the privacy budget is depleted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-privacybudgettemplate-parameters.html#cfn-cleanrooms-privacybudgettemplate-parameters-usersnoiseperquery
         */
        readonly usersNoisePerQuery: number;
    }
}
/**
 * Properties for defining a `CfnPrivacyBudgetTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html
 */
export interface CfnPrivacyBudgetTemplateProps {
    /**
     * How often the privacy budget refreshes.
     *
     * > If you plan to regularly bring new data into the collaboration, use `CALENDAR_MONTH` to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queried across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html#cfn-cleanrooms-privacybudgettemplate-autorefresh
     */
    readonly autoRefresh: string;
    /**
     * The identifier for a membership resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html#cfn-cleanrooms-privacybudgettemplate-membershipidentifier
     */
    readonly membershipIdentifier: string;
    /**
     * Specifies the epislon and noise parameters for the privacy budget template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html#cfn-cleanrooms-privacybudgettemplate-parameters
     */
    readonly parameters: cdk.IResolvable | CfnPrivacyBudgetTemplate.ParametersProperty;
    /**
     * Specifies the type of the privacy budget template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html#cfn-cleanrooms-privacybudgettemplate-privacybudgettype
     */
    readonly privacyBudgetType: string;
    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html#cfn-cleanrooms-privacybudgettemplate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
