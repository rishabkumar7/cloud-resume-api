import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::DocDB::DBCluster` Amazon DocumentDB (with MongoDB compatibility) resource describes a DBCluster.
 *
 * Amazon DocumentDB is a fully managed, MongoDB-compatible document database engine. For more information, see [DBCluster](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBCluster.html) in the *Amazon DocumentDB Developer Guide* .
 *
 * @cloudformationResource AWS::DocDB::DBCluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html
 */
export declare class CfnDBCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBCluster;
    /**
     * The resource id for the cluster; for example: `cluster-ABCD1234EFGH5678IJKL90MNOP` . The cluster ID uniquely identifies the cluster and is used in things like IAM authentication policies.
     *
     * @cloudformationAttribute ClusterResourceId
     */
    readonly attrClusterResourceId: string;
    /**
     * The connection endpoint for the cluster, such as `sample-cluster.cluster-cozrlsfrcjoc.us-east-1.docdb.amazonaws.com` .
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The port number on which the cluster accepts connections. For example: `27017` .
     *
     * @cloudformationAttribute Port
     */
    readonly attrPort: string;
    /**
     * The reader endpoint for the cluster. For example: `sample-cluster.cluster-ro-cozrlsfrcjoc.us-east-1.docdb.amazonaws.com` .
     *
     * @cloudformationAttribute ReadEndpoint
     */
    readonly attrReadEndpoint: string;
    /**
     * A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.
     */
    availabilityZones?: Array<string>;
    /**
     * The number of days for which automated backups are retained. You must specify a minimum value of 1.
     */
    backupRetentionPeriod?: number;
    copyTagsToSnapshot?: boolean | cdk.IResolvable;
    /**
     * The cluster identifier. This parameter is stored as a lowercase string.
     */
    dbClusterIdentifier?: string;
    /**
     * The name of the cluster parameter group to associate with this cluster.
     */
    dbClusterParameterGroupName?: string;
    /**
     * A subnet group to associate with this cluster.
     */
    dbSubnetGroupName?: string;
    /**
     * Protects clusters from being accidentally deleted.
     */
    deletionProtection?: boolean | cdk.IResolvable;
    /**
     * The list of log types that need to be enabled for exporting to Amazon CloudWatch Logs.
     */
    enableCloudwatchLogsExports?: Array<string>;
    /**
     * The version number of the database engine to use.
     */
    engineVersion?: string;
    /**
     * The AWS KMS key identifier for an encrypted cluster.
     */
    kmsKeyId?: string;
    /**
     * The name of the master user for the cluster.
     */
    masterUsername?: string;
    /**
     * The password for the master database user.
     */
    masterUserPassword?: string;
    /**
     * Specifies the port that the database engine is listening on.
     */
    port?: number;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled using the `BackupRetentionPeriod` parameter.
     */
    preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    preferredMaintenanceWindow?: string;
    /**
     * The date and time to restore the cluster to.
     */
    restoreToTime?: string;
    /**
     * The type of restore to be performed. You can specify one of the following values:.
     */
    restoreType?: string;
    /**
     * The identifier for the snapshot or cluster snapshot to restore from.
     */
    snapshotIdentifier?: string;
    /**
     * The identifier of the source cluster from which to restore.
     */
    sourceDbClusterIdentifier?: string;
    /**
     * Specifies whether the cluster is encrypted.
     */
    storageEncrypted?: boolean | cdk.IResolvable;
    /**
     * The storage type to associate with the DB cluster.
     */
    storageType?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to be assigned to the cluster.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A value that is set to `true` to restore the cluster to the latest restorable backup time, and `false` otherwise.
     */
    useLatestRestorableTime?: boolean | cdk.IResolvable;
    /**
     * A list of EC2 VPC security groups to associate with this cluster.
     */
    vpcSecurityGroupIds?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDBClusterProps);
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
 * Properties for defining a `CfnDBCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html
 */
export interface CfnDBClusterProps {
    /**
     * A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-availabilityzones
     */
    readonly availabilityZones?: Array<string>;
    /**
     * The number of days for which automated backups are retained. You must specify a minimum value of 1.
     *
     * Default: 1
     *
     * Constraints:
     *
     * - Must be a value from 1 to 35.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-backupretentionperiod
     */
    readonly backupRetentionPeriod?: number;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-copytagstosnapshot
     */
    readonly copyTagsToSnapshot?: boolean | cdk.IResolvable;
    /**
     * The cluster identifier. This parameter is stored as a lowercase string.
     *
     * Constraints:
     *
     * - Must contain from 1 to 63 letters, numbers, or hyphens.
     * - The first character must be a letter.
     * - Cannot end with a hyphen or contain two consecutive hyphens.
     *
     * Example: `my-cluster`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-dbclusteridentifier
     */
    readonly dbClusterIdentifier?: string;
    /**
     * The name of the cluster parameter group to associate with this cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-dbclusterparametergroupname
     */
    readonly dbClusterParameterGroupName?: string;
    /**
     * A subnet group to associate with this cluster.
     *
     * Constraints: Must match the name of an existing `DBSubnetGroup` . Must not be default.
     *
     * Example: `mySubnetgroup`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-dbsubnetgroupname
     */
    readonly dbSubnetGroupName?: string;
    /**
     * Protects clusters from being accidentally deleted.
     *
     * If enabled, the cluster cannot be deleted unless it is modified and `DeletionProtection` is disabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-deletionprotection
     */
    readonly deletionProtection?: boolean | cdk.IResolvable;
    /**
     * The list of log types that need to be enabled for exporting to Amazon CloudWatch Logs.
     *
     * You can enable audit logs or profiler logs. For more information, see [Auditing Amazon DocumentDB Events](https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html) and [Profiling Amazon DocumentDB Operations](https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-enablecloudwatchlogsexports
     */
    readonly enableCloudwatchLogsExports?: Array<string>;
    /**
     * The version number of the database engine to use.
     *
     * The `--engine-version` will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-engineversion
     */
    readonly engineVersion?: string;
    /**
     * The AWS KMS key identifier for an encrypted cluster.
     *
     * The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS encryption key. If you are creating a cluster using the same AWS account that owns the AWS KMS encryption key that is used to encrypt the new cluster, you can use the AWS KMS key alias instead of the ARN for the AWS KMS encryption key.
     *
     * If an encryption key is not specified in `KmsKeyId` :
     *
     * - If the `StorageEncrypted` parameter is `true` , Amazon DocumentDB uses your default encryption key.
     *
     * AWS KMS creates the default encryption key for your AWS account . Your AWS account has a different default encryption key for each AWS Regions .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The name of the master user for the cluster.
     *
     * Constraints:
     *
     * - Must be from 1 to 63 letters or numbers.
     * - The first character must be a letter.
     * - Cannot be a reserved word for the chosen database engine.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-masterusername
     */
    readonly masterUsername?: string;
    /**
     * The password for the master database user.
     *
     * This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).
     *
     * Constraints: Must contain from 8 to 100 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-masteruserpassword
     */
    readonly masterUserPassword?: string;
    /**
     * Specifies the port that the database engine is listening on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-port
     */
    readonly port?: number;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled using the `BackupRetentionPeriod` parameter.
     *
     * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region .
     *
     * Constraints:
     *
     * - Must be in the format `hh24:mi-hh24:mi` .
     * - Must be in Universal Coordinated Time (UTC).
     * - Must not conflict with the preferred maintenance window.
     * - Must be at least 30 minutes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-preferredbackupwindow
     */
    readonly preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     *
     * Format: `ddd:hh24:mi-ddd:hh24:mi`
     *
     * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region , occurring on a random day of the week.
     *
     * Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun
     *
     * Constraints: Minimum 30-minute window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * The date and time to restore the cluster to.
     *
     * Valid values: A time in Universal Coordinated Time (UTC) format.
     *
     * Constraints:
     *
     * - Must be before the latest restorable time for the instance.
     * - Must be specified if the `UseLatestRestorableTime` parameter is not provided.
     * - Cannot be specified if the `UseLatestRestorableTime` parameter is `true` .
     * - Cannot be specified if the `RestoreType` parameter is `copy-on-write` .
     *
     * Example: `2015-03-07T23:45:00Z`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-restoretotime
     */
    readonly restoreToTime?: string;
    /**
     * The type of restore to be performed. You can specify one of the following values:.
     *
     * - `full-copy` - The new DB cluster is restored as a full copy of the source DB cluster.
     * - `copy-on-write` - The new DB cluster is restored as a clone of the source DB cluster.
     *
     * Constraints: You can't specify `copy-on-write` if the engine version of the source DB cluster is earlier than 1.11.
     *
     * If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-restoretype
     */
    readonly restoreType?: string;
    /**
     * The identifier for the snapshot or cluster snapshot to restore from.
     *
     * You can use either the name or the Amazon Resource Name (ARN) to specify a cluster snapshot. However, you can use only the ARN to specify a snapshot.
     *
     * Constraints:
     *
     * - Must match the identifier of an existing snapshot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-snapshotidentifier
     */
    readonly snapshotIdentifier?: string;
    /**
     * The identifier of the source cluster from which to restore.
     *
     * Constraints:
     *
     * - Must match the identifier of an existing `DBCluster` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-sourcedbclusteridentifier
     */
    readonly sourceDbClusterIdentifier?: string;
    /**
     * Specifies whether the cluster is encrypted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-storageencrypted
     */
    readonly storageEncrypted?: boolean | cdk.IResolvable;
    /**
     * The storage type to associate with the DB cluster.
     *
     * For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the *Amazon DocumentDB Developer Guide* .
     *
     * Valid values for storage type - `standard | iopt1`
     *
     * Default value is `standard`
     *
     * > When you create a DocumentDB DB cluster with the storage type set to `iopt1` , the storage type is returned in the response. The storage type isn't returned when you set it to `standard` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-storagetype
     */
    readonly storageType?: string;
    /**
     * The tags to be assigned to the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A value that is set to `true` to restore the cluster to the latest restorable backup time, and `false` otherwise.
     *
     * Default: `false`
     *
     * Constraints: Cannot be specified if the `RestoreToTime` parameter is provided.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-uselatestrestorabletime
     */
    readonly useLatestRestorableTime?: boolean | cdk.IResolvable;
    /**
     * A list of EC2 VPC security groups to associate with this cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds?: Array<string>;
}
/**
 * The `AWS::DocDB::DBClusterParameterGroup` Amazon DocumentDB (with MongoDB compatibility) resource describes a DBClusterParameterGroup.
 *
 * For more information, see [DBClusterParameterGroup](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBClusterParameterGroup.html) in the *Amazon DocumentDB Developer Guide* .
 *
 * Parameters in a cluster parameter group apply to all of the instances in a cluster.
 *
 * A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. To provide custom values for any of the parameters, you must modify the group after you create it. After you create a DB cluster parameter group, you must associate it with your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the DB instances in the cluster without failover.
 *
 * > After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the cluster parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the `character_set_database` parameter.
 *
 * @cloudformationResource AWS::DocDB::DBClusterParameterGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html
 */
export declare class CfnDBClusterParameterGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBClusterParameterGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBClusterParameterGroup;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The description for the cluster parameter group.
     */
    description: string;
    /**
     * The cluster parameter group family name.
     */
    family: string;
    /**
     * The name of the DB cluster parameter group.
     */
    name?: string;
    /**
     * Provides a list of parameters for the cluster parameter group.
     */
    parameters: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to be assigned to the cluster parameter group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBClusterParameterGroupProps);
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
 * Properties for defining a `CfnDBClusterParameterGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html
 */
export interface CfnDBClusterParameterGroupProps {
    /**
     * The description for the cluster parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html#cfn-docdb-dbclusterparametergroup-description
     */
    readonly description: string;
    /**
     * The cluster parameter group family name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html#cfn-docdb-dbclusterparametergroup-family
     */
    readonly family: string;
    /**
     * The name of the DB cluster parameter group.
     *
     * Constraints:
     *
     * - Must not match the name of an existing `DBClusterParameterGroup` .
     *
     * > This value is stored as a lowercase string.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html#cfn-docdb-dbclusterparametergroup-name
     */
    readonly name?: string;
    /**
     * Provides a list of parameters for the cluster parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html#cfn-docdb-dbclusterparametergroup-parameters
     */
    readonly parameters: any | cdk.IResolvable;
    /**
     * The tags to be assigned to the cluster parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html#cfn-docdb-dbclusterparametergroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DocDB::DBInstance` Amazon DocumentDB (with MongoDB compatibility) resource describes a DBInstance.
 *
 * For more information, see [DBInstance](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBInstance.html) in the *Amazon DocumentDB Developer Guide* .
 *
 * @cloudformationResource AWS::DocDB::DBInstance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html
 */
export declare class CfnDBInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBInstance;
    /**
     * The connection endpoint for the instance. For example: `sample-cluster.cluster-abcdefghijkl.us-east-1.docdb.amazonaws.com` .
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The port number on which the database accepts connections, such as `27017` .
     *
     * @cloudformationAttribute Port
     */
    readonly attrPort: string;
    /**
     * This parameter does not apply to Amazon DocumentDB.
     */
    autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The Amazon EC2 Availability Zone that the instance is created in.
     */
    availabilityZone?: string;
    /**
     * The CA certificate identifier to use for the DB instance's server certificate.
     */
    caCertificateIdentifier?: string;
    /**
     * Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.
     */
    certificateRotationRestart?: boolean | cdk.IResolvable;
    /**
     * The identifier of the cluster that the instance will belong to.
     */
    dbClusterIdentifier: string;
    /**
     * The compute and memory capacity of the instance;
     */
    dbInstanceClass: string;
    /**
     * The instance identifier. This parameter is stored as a lowercase string.
     */
    dbInstanceIdentifier?: string;
    /**
     * A value that indicates whether to enable Performance Insights for the DB Instance.
     */
    enablePerformanceInsights?: boolean | cdk.IResolvable;
    /**
     * The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    preferredMaintenanceWindow?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to be assigned to the instance.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBInstanceProps);
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
 * Properties for defining a `CfnDBInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html
 */
export interface CfnDBInstanceProps {
    /**
     * This parameter does not apply to Amazon DocumentDB.
     *
     * Amazon DocumentDB does not perform minor version upgrades regardless of the value set.
     *
     * Default: `false`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#cfn-docdb-dbinstance-autominorversionupgrade
     */
    readonly autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The Amazon EC2 Availability Zone that the instance is created in.
     *
     * Default: A random, system-chosen Availability Zone in the endpoint's AWS Region .
     *
     * Example: `us-east-1d`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#cfn-docdb-dbinstance-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * The CA certificate identifier to use for the DB instance's server certificate.
     *
     * For more information, see [Updating Your Amazon DocumentDB TLS Certificates](https://docs.aws.amazon.com/documentdb/latest/developerguide/ca_cert_rotation.html) and [Encrypting Data in Transit](https://docs.aws.amazon.com/documentdb/latest/developerguide/security.encryption.ssl.html) in the *Amazon DocumentDB Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#cfn-docdb-dbinstance-cacertificateidentifier
     */
    readonly caCertificateIdentifier?: string;
    /**
     * Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.
     *
     * By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
     *
     * > Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
     *
     * If you are using SSL/TLS to connect to the DB instance, see [Updating Your Amazon DocumentDB TLS Certificates](https://docs.aws.amazon.com/documentdb/latest/developerguide/ca_cert_rotation.html) and [Encrypting Data in Transit](https://docs.aws.amazon.com/documentdb/latest/developerguide/security.encryption.ssl.html) in the *Amazon DocumentDB Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#cfn-docdb-dbinstance-certificaterotationrestart
     */
    readonly certificateRotationRestart?: boolean | cdk.IResolvable;
    /**
     * The identifier of the cluster that the instance will belong to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#cfn-docdb-dbinstance-dbclusteridentifier
     */
    readonly dbClusterIdentifier: string;
    /**
     * The compute and memory capacity of the instance;
     *
     * for example, `db.m4.large` . If you change the class of an instance there can be some interruption in the cluster's service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#cfn-docdb-dbinstance-dbinstanceclass
     */
    readonly dbInstanceClass: string;
    /**
     * The instance identifier. This parameter is stored as a lowercase string.
     *
     * Constraints:
     *
     * - Must contain from 1 to 63 letters, numbers, or hyphens.
     * - The first character must be a letter.
     * - Cannot end with a hyphen or contain two consecutive hyphens.
     *
     * Example: `mydbinstance`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#cfn-docdb-dbinstance-dbinstanceidentifier
     */
    readonly dbInstanceIdentifier?: string;
    /**
     * A value that indicates whether to enable Performance Insights for the DB Instance.
     *
     * For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#cfn-docdb-dbinstance-enableperformanceinsights
     */
    readonly enablePerformanceInsights?: boolean | cdk.IResolvable;
    /**
     * The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).
     *
     * Format: `ddd:hh24:mi-ddd:hh24:mi`
     *
     * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region , occurring on a random day of the week.
     *
     * Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun
     *
     * Constraints: Minimum 30-minute window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#cfn-docdb-dbinstance-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * The tags to be assigned to the instance.
     *
     * You can assign up to 10 tags to an instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#cfn-docdb-dbinstance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DocDB::DBSubnetGroup` Amazon DocumentDB (with MongoDB compatibility) resource describes a DBSubnetGroup.
 *
 * subnet groups must contain at least one subnet in at least two Availability Zones in the AWS Region . For more information, see [DBSubnetGroup](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBSubnetGroup.html) in the *Amazon DocumentDB Developer Guide* .
 *
 * @cloudformationResource AWS::DocDB::DBSubnetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html
 */
export declare class CfnDBSubnetGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBSubnetGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBSubnetGroup;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The description for the subnet group.
     */
    dbSubnetGroupDescription: string;
    /**
     * The name for the subnet group. This value is stored as a lowercase string.
     */
    dbSubnetGroupName?: string;
    /**
     * The Amazon EC2 subnet IDs for the subnet group.
     */
    subnetIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to be assigned to the subnet group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBSubnetGroupProps);
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
 * Properties for defining a `CfnDBSubnetGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html
 */
export interface CfnDBSubnetGroupProps {
    /**
     * The description for the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html#cfn-docdb-dbsubnetgroup-dbsubnetgroupdescription
     */
    readonly dbSubnetGroupDescription: string;
    /**
     * The name for the subnet group. This value is stored as a lowercase string.
     *
     * Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.
     *
     * Example: `mySubnetgroup`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html#cfn-docdb-dbsubnetgroup-dbsubnetgroupname
     */
    readonly dbSubnetGroupName?: string;
    /**
     * The Amazon EC2 subnet IDs for the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html#cfn-docdb-dbsubnetgroup-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * The tags to be assigned to the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html#cfn-docdb-dbsubnetgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an Amazon DocumentDB event notification subscription.
 *
 * This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.
 *
 * You can specify the type of source ( `SourceType` ) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources ( `SourceIds` ) that trigger the events, and you can provide a list of event categories ( `EventCategories` ) for events that you want to be notified of. For example, you can specify `SourceType = db-instance` , `SourceIds = mydbinstance1, mydbinstance2` and `EventCategories = Availability, Backup` .
 *
 * If you specify both the `SourceType` and `SourceIds` (such as `SourceType = db-instance` and `SourceIdentifier = myDBInstance1` ), you are notified of all the `db-instance` events for the specified source. If you specify a `SourceType` but do not specify a `SourceIdentifier` , you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the `SourceType` or the `SourceIdentifier` , you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.
 *
 * @cloudformationResource AWS::DocDB::EventSubscription
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html
 */
export declare class CfnEventSubscription extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventSubscription from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventSubscription;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A Boolean value;
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * A list of event categories for a `SourceType` that you want to subscribe to.
     */
    eventCategories?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the SNS topic created for event notification.
     */
    snsTopicArn: string;
    /**
     * The list of identifiers of the event sources for which events are returned.
     */
    sourceIds?: Array<string>;
    /**
     * The type of source that is generating the events.
     */
    sourceType?: string;
    /**
     * The name of the subscription.
     */
    subscriptionName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventSubscriptionProps);
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
 * Properties for defining a `CfnEventSubscription`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html
 */
export interface CfnEventSubscriptionProps {
    /**
     * A Boolean value;
     *
     * set to `true` to activate the subscription, set to `false` to create the subscription but not active it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html#cfn-docdb-eventsubscription-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * A list of event categories for a `SourceType` that you want to subscribe to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html#cfn-docdb-eventsubscription-eventcategories
     */
    readonly eventCategories?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the SNS topic created for event notification.
     *
     * Amazon SNS creates the ARN when you create a topic and subscribe to it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html#cfn-docdb-eventsubscription-snstopicarn
     */
    readonly snsTopicArn: string;
    /**
     * The list of identifiers of the event sources for which events are returned.
     *
     * If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
     *
     * Constraints:
     *
     * - If `SourceIds` are provided, `SourceType` must also be provided.
     * - If the source type is an instance, a `DBInstanceIdentifier` must be provided.
     * - If the source type is a security group, a `DBSecurityGroupName` must be provided.
     * - If the source type is a parameter group, a `DBParameterGroupName` must be provided.
     * - If the source type is a snapshot, a `DBSnapshotIdentifier` must be provided.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html#cfn-docdb-eventsubscription-sourceids
     */
    readonly sourceIds?: Array<string>;
    /**
     * The type of source that is generating the events.
     *
     * For example, if you want to be notified of events generated by an instance, you would set this parameter to `db-instance` . If this value is not specified, all events are returned.
     *
     * Valid values: `db-instance` , `db-cluster` , `db-parameter-group` , `db-security-group` , `db-cluster-snapshot`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html#cfn-docdb-eventsubscription-sourcetype
     */
    readonly sourceType?: string;
    /**
     * The name of the subscription.
     *
     * Constraints: The name must be fewer than 255 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html#cfn-docdb-eventsubscription-subscriptionname
     */
    readonly subscriptionName?: string;
}
