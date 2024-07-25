import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Create a data store.
 *
 * @cloudformationResource AWS::HealthImaging::Datastore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html
 */
export declare class CfnDatastore extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDatastore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDatastore;
    /**
     * The timestamp when the data store was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) for the data store.
     *
     * @cloudformationAttribute DatastoreArn
     */
    readonly attrDatastoreArn: string;
    /**
     * The data store identifier.
     *
     * @cloudformationAttribute DatastoreId
     */
    readonly attrDatastoreId: string;
    /**
     * The data store status.
     *
     * @cloudformationAttribute DatastoreStatus
     */
    readonly attrDatastoreStatus: string;
    /**
     * The timestamp when the data store was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The data store name.
     */
    datastoreName?: string;
    /**
     * The Amazon Resource Name (ARN) assigned to the Key Management Service (KMS) key for accessing encrypted data.
     */
    kmsKeyArn?: string;
    /**
     * The tags provided when creating a data store.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDatastoreProps);
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
 * Properties for defining a `CfnDatastore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html
 */
export interface CfnDatastoreProps {
    /**
     * The data store name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html#cfn-healthimaging-datastore-datastorename
     */
    readonly datastoreName?: string;
    /**
     * The Amazon Resource Name (ARN) assigned to the Key Management Service (KMS) key for accessing encrypted data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html#cfn-healthimaging-datastore-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * The tags provided when creating a data store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html#cfn-healthimaging-datastore-tags
     */
    readonly tags?: Record<string, string>;
}
