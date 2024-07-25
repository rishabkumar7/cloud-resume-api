import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::GameLift::Alias` resource creates an alias for an Amazon GameLift (GameLift) fleet destination.
 *
 * There are two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias displays a message instead of routing players to an active fleet. For example, a terminal alias might display a URL link that directs players to an upgrade site. You can use aliases to define destinations in a game session queue or when requesting new game sessions.
 *
 * @cloudformationResource AWS::GameLift::Alias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html
 */
export declare class CfnAlias extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAlias;
    /**
     * A unique identifier for the alias. For example, `arn:aws:gamelift:us-west-1::alias/alias-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`
     *
     * Alias IDs are unique within a Region.
     *
     * @cloudformationAttribute AliasId
     */
    readonly attrAliasId: string;
    /**
     * A human-readable description of the alias.
     */
    description?: string;
    /**
     * A descriptive label that is associated with an alias.
     */
    name: string;
    /**
     * The routing configuration, including routing type and fleet target, for the alias.
     */
    routingStrategy: cdk.IResolvable | CfnAlias.RoutingStrategyProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAliasProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAlias {
    /**
     * The routing configuration for a fleet alias.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html
     */
    interface RoutingStrategyProperty {
        /**
         * A unique identifier for a fleet that the alias points to.
         *
         * If you specify `SIMPLE` for the `Type` property, you must specify this property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-fleetid
         */
        readonly fleetId?: string;
        /**
         * The message text to be used with a terminal routing strategy.
         *
         * If you specify `TERMINAL` for the `Type` property, you must specify this property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-message
         */
        readonly message?: string;
        /**
         * A type of routing strategy.
         *
         * Possible routing types include the following:
         *
         * - *SIMPLE* - The alias resolves to one specific fleet. Use this type when routing to active fleets.
         * - *TERMINAL* - The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a `TerminalRoutingStrategyException` with the message that you specified in the `Message` property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html
 */
export interface CfnAliasProps {
    /**
     * A human-readable description of the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-description
     */
    readonly description?: string;
    /**
     * A descriptive label that is associated with an alias.
     *
     * Alias names do not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-name
     */
    readonly name: string;
    /**
     * The routing configuration, including routing type and fleet target, for the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-routingstrategy
     */
    readonly routingStrategy: cdk.IResolvable | CfnAlias.RoutingStrategyProperty;
}
/**
 * The `AWS::GameLift::Build` resource creates a game server build that is installed and run on instances in an Amazon GameLift fleet.
 *
 * This resource points to an Amazon S3 location that contains a zip file with all of the components of the game server build.
 *
 * @cloudformationResource AWS::GameLift::Build
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html
 */
export declare class CfnBuild extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBuild from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBuild;
    /**
     * A unique identifier for the build.
     *
     * @cloudformationAttribute BuildId
     */
    readonly attrBuildId: string;
    /**
     * A descriptive label that is associated with a build.
     */
    name?: string;
    /**
     * The operating system that your game server binaries run on.
     */
    operatingSystem?: string;
    /**
     * A server SDK version you used when integrating your game server build with Amazon GameLift.
     */
    serverSdkVersion?: string;
    /**
     * Information indicating where your game build files are stored.
     */
    storageLocation?: cdk.IResolvable | CfnBuild.StorageLocationProperty;
    /**
     * Version information that is associated with this build.
     */
    version?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnBuildProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBuild {
    /**
     * The location in Amazon S3 where build or script files are stored for access by Amazon GameLift.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-storagelocation.html
     */
    interface StorageLocationProperty {
        /**
         * An Amazon S3 bucket identifier. The name of the S3 bucket.
         *
         * > Amazon GameLift doesn't support uploading from Amazon S3 buckets with names that contain a dot (.).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-storagelocation.html#cfn-gamelift-build-storagelocation-bucket
         */
        readonly bucket: string;
        /**
         * The name of the zip file that contains the build files or script files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-storagelocation.html#cfn-gamelift-build-storagelocation-key
         */
        readonly key: string;
        /**
         * A version of a stored file to retrieve, if the object versioning feature is turned on for the S3 bucket.
         *
         * Use this parameter to specify a specific version. If this parameter isn't set, Amazon GameLift retrieves the latest version of the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-storagelocation.html#cfn-gamelift-build-storagelocation-objectversion
         */
        readonly objectVersion?: string;
        /**
         * The ARNfor an IAM role that allows Amazon GameLift to access the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-storagelocation.html#cfn-gamelift-build-storagelocation-rolearn
         */
        readonly roleArn: string;
    }
}
/**
 * Properties for defining a `CfnBuild`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html
 */
export interface CfnBuildProps {
    /**
     * A descriptive label that is associated with a build.
     *
     * Build names do not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html#cfn-gamelift-build-name
     */
    readonly name?: string;
    /**
     * The operating system that your game server binaries run on.
     *
     * This value determines the type of fleet resources that you use for this build. If your game build contains multiple executables, they all must run on the same operating system. You must specify a valid operating system in this request. There is no default value. You can't change a build's operating system later.
     *
     * > Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in the [Amazon Linux 2 FAQs](https://docs.aws.amazon.com/https://aws.amazon.com/amazon-linux-2/faqs/) . For game servers that are hosted on AL2 and use Amazon GameLift server SDK 4.x., first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See [Migrate to Amazon GameLift server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html#cfn-gamelift-build-operatingsystem
     */
    readonly operatingSystem?: string;
    /**
     * A server SDK version you used when integrating your game server build with Amazon GameLift.
     *
     * For more information see [Integrate games with custom game servers](https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-custom-intro.html) . By default Amazon GameLift sets this value to `4.0.2` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html#cfn-gamelift-build-serversdkversion
     */
    readonly serverSdkVersion?: string;
    /**
     * Information indicating where your game build files are stored.
     *
     * Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket and your new build must be in the same Region.
     *
     * If a `StorageLocation` is specified, the size of your file can be found in your Amazon S3 bucket. Amazon GameLift will report a `SizeOnDisk` of 0.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html#cfn-gamelift-build-storagelocation
     */
    readonly storageLocation?: cdk.IResolvable | CfnBuild.StorageLocationProperty;
    /**
     * Version information that is associated with this build.
     *
     * Version strings do not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html#cfn-gamelift-build-version
     */
    readonly version?: string;
}
/**
 * The `AWS::GameLift::Fleet` resource creates an Amazon GameLift (GameLift) fleet to host custom game server or Realtime Servers.
 *
 * A fleet is a set of EC2 instances, configured with instructions to run game servers on each instance.
 *
 * @cloudformationResource AWS::GameLift::Fleet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html
 */
export declare class CfnFleet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFleet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFleet;
    /**
     * The maximum possible number of replica container groups that each fleet instance can have.
     *
     * @cloudformationAttribute ContainerGroupsConfiguration.ContainerGroupsPerInstance.MaxReplicaContainerGroupsPerInstance
     */
    readonly attrContainerGroupsConfigurationContainerGroupsPerInstanceMaxReplicaContainerGroupsPerInstance: number;
    /**
     * A unique identifier for the fleet.
     *
     * @cloudformationAttribute FleetId
     */
    readonly attrFleetId: string;
    /**
     * Amazon GameLift Anywhere configuration options.
     */
    anywhereConfiguration?: CfnFleet.AnywhereConfigurationProperty | cdk.IResolvable;
    /**
     * Current resource capacity settings for managed EC2 fleets and container fleets.
     */
    applyCapacity?: string;
    /**
     * A unique identifier for a build to be deployed on the new fleet.
     */
    buildId?: string;
    /**
     * Prompts Amazon GameLift to generate a TLS/SSL certificate for the fleet.
     */
    certificateConfiguration?: CfnFleet.CertificateConfigurationProperty | cdk.IResolvable;
    /**
     * The type of compute resource used to host your game servers.
     */
    computeType?: string;
    /**
     * *This data type is used with the Amazon GameLift containers feature, which is currently in public preview.*.
     */
    containerGroupsConfiguration?: CfnFleet.ContainerGroupsConfigurationProperty | cdk.IResolvable;
    /**
     * A description for the fleet.
     */
    description?: string;
    /**
     * The number of EC2 instances that you want this fleet to host.
     */
    desiredEc2Instances?: number;
    /**
     * The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet.
     */
    ec2InboundPermissions?: Array<CfnFleet.IpPermissionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon GameLift-supported Amazon EC2 instance type to use with EC2 and container fleets.
     */
    ec2InstanceType?: string;
    /**
     * Indicates whether to use On-Demand or Spot instances for this fleet.
     */
    fleetType?: string;
    /**
     * A unique identifier for an IAM role with access permissions to other AWS services.
     */
    instanceRoleArn?: string;
    /**
     * Indicates that fleet instances maintain a shared credentials file for the IAM role defined in `InstanceRoleArn` .
     */
    instanceRoleCredentialsProvider?: string;
    /**
     * A set of remote locations to deploy additional instances to and manage as part of the fleet.
     */
    locations?: Array<cdk.IResolvable | CfnFleet.LocationConfigurationProperty> | cdk.IResolvable;
    /**
     * This parameter is no longer used.
     *
     * @deprecated this property has been deprecated
     */
    logPaths?: Array<string>;
    /**
     * The maximum number of instances that are allowed in the specified fleet location.
     */
    maxSize?: number;
    /**
     * The name of an AWS CloudWatch metric group to add this fleet to.
     */
    metricGroups?: Array<string>;
    /**
     * The minimum number of instances that are allowed in the specified fleet location.
     */
    minSize?: number;
    /**
     * A descriptive label that is associated with a fleet.
     */
    name: string;
    /**
     * The status of termination protection for active game sessions on the fleet.
     */
    newGameSessionProtectionPolicy?: string;
    /**
     * Used when peering your Amazon GameLift fleet with a VPC, the unique identifier for the AWS account that owns the VPC.
     */
    peerVpcAwsAccountId?: string;
    /**
     * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet.
     */
    peerVpcId?: string;
    /**
     * A policy that limits the number of game sessions that an individual player can create on instances in this fleet within a specified span of time.
     */
    resourceCreationLimitPolicy?: cdk.IResolvable | CfnFleet.ResourceCreationLimitPolicyProperty;
    /**
     * Instructions for how to launch and maintain server processes on instances in the fleet.
     */
    runtimeConfiguration?: cdk.IResolvable | CfnFleet.RuntimeConfigurationProperty;
    /**
     * Rule that controls how a fleet is scaled.
     */
    scalingPolicies?: Array<cdk.IResolvable | CfnFleet.ScalingPolicyProperty> | cdk.IResolvable;
    /**
     * The unique identifier for a Realtime configuration script to be deployed on fleet instances.
     */
    scriptId?: string;
    /**
     * This parameter is no longer used but is retained for backward compatibility.
     *
     * @deprecated this property has been deprecated
     */
    serverLaunchParameters?: string;
    /**
     * This parameter is no longer used.
     *
     * @deprecated this property has been deprecated
     */
    serverLaunchPath?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFleetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFleet {
    /**
     * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet.
     *
     * New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, GameLift automatically opens two port ranges, one for TCP messaging and one for UDP.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html
     */
    interface IpPermissionProperty {
        /**
         * A starting value for a range of allowed port numbers.
         *
         * For fleets using Linux builds, only ports `22` and `1026-60000` are valid.
         *
         * For fleets using Windows builds, only ports `1026-60000` are valid.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html#cfn-gamelift-fleet-ippermission-fromport
         */
        readonly fromPort: number;
        /**
         * A range of allowed IP addresses.
         *
         * This value must be expressed in CIDR notation. Example: " `000.000.000.000/[subnet mask]` " or optionally the shortened version " `0.0.0.0/[subnet mask]` ".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html#cfn-gamelift-fleet-ippermission-iprange
         */
        readonly ipRange: string;
        /**
         * The network communication protocol used by the fleet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html#cfn-gamelift-fleet-ippermission-protocol
         */
        readonly protocol: string;
        /**
         * An ending value for a range of allowed port numbers.
         *
         * Port numbers are end-inclusive. This value must be equal to or greater than `FromPort` .
         *
         * For fleets using Linux builds, only ports `22` and `1026-60000` are valid.
         *
         * For fleets using Windows builds, only ports `1026-60000` are valid.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html#cfn-gamelift-fleet-ippermission-toport
         */
        readonly toPort: number;
    }
    /**
     * *This data type has been expanded to use with the Amazon GameLift containers feature, which is currently in public preview.*.
     *
     * A remote location where a multi-location fleet can deploy game servers for game hosting.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationconfiguration.html
     */
    interface LocationConfigurationProperty {
        /**
         * An AWS Region code, such as `us-west-2` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationconfiguration.html#cfn-gamelift-fleet-locationconfiguration-location
         */
        readonly location: string;
        /**
         * Current resource capacity settings for managed EC2 fleets and container fleets.
         *
         * For multi-location fleets, location values might refer to a fleet's remote location or its home Region.
         *
         * *Returned by:* [DescribeFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html) , [DescribeFleetLocationCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html) , [UpdateFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationconfiguration.html#cfn-gamelift-fleet-locationconfiguration-locationcapacity
         */
        readonly locationCapacity?: cdk.IResolvable | CfnFleet.LocationCapacityProperty;
    }
    /**
     * Current resource capacity settings for managed EC2 fleets and container fleets.
     *
     * For multi-location fleets, location values might refer to a fleet's remote location or its home Region.
     *
     * *Returned by:* [DescribeFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html) , [DescribeFleetLocationCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html) , [UpdateFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html
     */
    interface LocationCapacityProperty {
        /**
         * The number of Amazon EC2 instances you want to maintain in the specified fleet location.
         *
         * This value must fall between the minimum and maximum size limits. Changes in desired instance value can take up to 1 minute to be reflected when viewing the fleet's capacity settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html#cfn-gamelift-fleet-locationcapacity-desiredec2instances
         */
        readonly desiredEc2Instances: number;
        /**
         * The maximum number of instances that are allowed in the specified fleet location.
         *
         * If this parameter is not set, the default is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html#cfn-gamelift-fleet-locationcapacity-maxsize
         */
        readonly maxSize: number;
        /**
         * The minimum number of instances that are allowed in the specified fleet location.
         *
         * If this parameter is not set, the default is 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html#cfn-gamelift-fleet-locationcapacity-minsize
         */
        readonly minSize: number;
    }
    /**
     * A collection of server process configurations that describe the set of processes to run on each instance in a fleet.
     *
     * Server processes run either an executable in a custom game build or a Realtime Servers script. GameLift launches the configured processes, manages their life cycle, and replaces them as needed. Each instance checks regularly for an updated runtime configuration.
     *
     * A GameLift instance is limited to 50 processes running concurrently. To calculate the total number of processes in a runtime configuration, add the values of the `ConcurrentExecutions` parameter for each ServerProcess. Learn more about [Running Multiple Processes on a Fleet](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html
     */
    interface RuntimeConfigurationProperty {
        /**
         * The maximum amount of time (in seconds) allowed to launch a new game session and have it report ready to host players.
         *
         * During this time, the game session is in status `ACTIVATING` . If the game session does not become active before the timeout, it is ended and the game session status is changed to `TERMINATED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html#cfn-gamelift-fleet-runtimeconfiguration-gamesessionactivationtimeoutseconds
         */
        readonly gameSessionActivationTimeoutSeconds?: number;
        /**
         * The number of game sessions in status `ACTIVATING` to allow on an instance or container.
         *
         * This setting limits the instance resources that can be used for new game activations at any one time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html#cfn-gamelift-fleet-runtimeconfiguration-maxconcurrentgamesessionactivations
         */
        readonly maxConcurrentGameSessionActivations?: number;
        /**
         * A collection of server process configurations that identify what server processes to run on fleet computes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html#cfn-gamelift-fleet-runtimeconfiguration-serverprocesses
         */
        readonly serverProcesses?: Array<cdk.IResolvable | CfnFleet.ServerProcessProperty> | cdk.IResolvable;
    }
    /**
     * A set of instructions for launching server processes on each instance in a fleet.
     *
     * Server processes run either an executable in a custom game build or a Realtime Servers script.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html
     */
    interface ServerProcessProperty {
        /**
         * The number of server processes using this configuration that run concurrently on each instance or container..
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html#cfn-gamelift-fleet-serverprocess-concurrentexecutions
         */
        readonly concurrentExecutions: number;
        /**
         * The location of a game build executable or Realtime script.
         *
         * Game builds and Realtime scripts are installed on instances at the root:
         *
         * - Windows (custom game builds only): `C:\game` . Example: " `C:\game\MyGame\server.exe` "
         * - Linux: `/local/game` . Examples: " `/local/game/MyGame/server.exe` " or " `/local/game/MyRealtimeScript.js` "
         *
         * > Amazon GameLift doesn't support the use of setup scripts that launch the game executable. For custom game builds, this parameter must indicate the executable that calls the server SDK operations `initSDK()` and `ProcessReady()` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html#cfn-gamelift-fleet-serverprocess-launchpath
         */
        readonly launchPath: string;
        /**
         * An optional list of parameters to pass to the server executable or Realtime script on launch.
         *
         * Length Constraints: Minimum length of 1. Maximum length of 1024.
         *
         * Pattern: [A-Za-z0-9_:.+\/\\\- =@{},?'\[\]"]+
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html#cfn-gamelift-fleet-serverprocess-parameters
         */
        readonly parameters?: string;
    }
    /**
     * Amazon GameLift configuration options for your Anywhere fleets.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-anywhereconfiguration.html
     */
    interface AnywhereConfigurationProperty {
        /**
         * The cost to run your fleet per hour.
         *
         * Amazon GameLift uses the provided cost of your fleet to balance usage in queues. For more information about queues, see [Setting up queues](https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html) in the *Amazon GameLift Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-anywhereconfiguration.html#cfn-gamelift-fleet-anywhereconfiguration-cost
         */
        readonly cost: string;
    }
    /**
     * A policy that limits the number of game sessions a player can create on the same fleet.
     *
     * This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".
     *
     * The policy is evaluated when a player tries to create a new game session. For example, assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a `CreateGameSession` request, Amazon GameLift checks that the player (identified by `CreatorId` ) has created fewer than 10 game sessions in the past 60 minutes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-resourcecreationlimitpolicy.html
     */
    interface ResourceCreationLimitPolicyProperty {
        /**
         * A policy that puts limits on the number of game sessions that a player can create within a specified span of time.
         *
         * With this policy, you can control players' ability to consume available resources.
         *
         * The policy is evaluated when a player tries to create a new game session. On receiving a `CreateGameSession` request, Amazon GameLift checks that the player (identified by `CreatorId` ) has created fewer than game session limit in the specified time period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-resourcecreationlimitpolicy.html#cfn-gamelift-fleet-resourcecreationlimitpolicy-newgamesessionspercreator
         */
        readonly newGameSessionsPerCreator?: number;
        /**
         * The time span used in evaluating the resource creation limit policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-resourcecreationlimitpolicy.html#cfn-gamelift-fleet-resourcecreationlimitpolicy-policyperiodinminutes
         */
        readonly policyPeriodInMinutes?: number;
    }
    /**
     * Determines whether a TLS/SSL certificate is generated for a fleet.
     *
     * This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the [GameLift Server SDK](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html) operation `GetInstanceCertificate` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-certificateconfiguration.html
     */
    interface CertificateConfigurationProperty {
        /**
         * Indicates whether a TLS/SSL certificate is generated for a fleet.
         *
         * Valid values include:
         *
         * - *GENERATED* - Generate a TLS/SSL certificate for this fleet.
         * - *DISABLED* - (default) Do not generate a TLS/SSL certificate for this fleet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-certificateconfiguration.html#cfn-gamelift-fleet-certificateconfiguration-certificatetype
         */
        readonly certificateType: string;
    }
    /**
     * Rule that controls how a fleet is scaled.
     *
     * Scaling policies are uniquely identified by the combination of name and fleet ID.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html
     */
    interface ScalingPolicyProperty {
        /**
         * Comparison operator to use when measuring a metric against the threshold value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-comparisonoperator
         */
        readonly comparisonOperator?: string;
        /**
         * Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-evaluationperiods
         */
        readonly evaluationPeriods?: number;
        /**
         * The fleet location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-location
         */
        readonly location?: string;
        /**
         * Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.
         *
         * For detailed descriptions of fleet metrics, see [Monitor Amazon GameLift with Amazon CloudWatch](https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html) .
         *
         * - *ActivatingGameSessions* -- Game sessions in the process of being created.
         * - *ActiveGameSessions* -- Game sessions that are currently running.
         * - *ActiveInstances* -- Fleet instances that are currently running at least one game session.
         * - *AvailableGameSessions* -- Additional game sessions that fleet could host simultaneously, given current capacity.
         * - *AvailablePlayerSessions* -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included.
         * - *CurrentPlayerSessions* -- Player slots in active game sessions that are being used by a player or are reserved for a player.
         * - *IdleInstances* -- Active instances that are currently hosting zero game sessions.
         * - *PercentAvailableGameSessions* -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy.
         * - *PercentIdleInstances* -- Percentage of the total number of active instances that are hosting zero game sessions.
         * - *QueueDepth* -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination.
         * - *WaitTime* -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-metricname
         */
        readonly metricName: string;
        /**
         * A descriptive label that is associated with a fleet's scaling policy.
         *
         * Policy names do not need to be unique.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-name
         */
        readonly name: string;
        /**
         * The type of scaling policy to create.
         *
         * For a target-based policy, set the parameter *MetricName* to 'PercentAvailableGameSessions' and specify a *TargetConfiguration* . For a rule-based policy set the following parameters: *MetricName* , *ComparisonOperator* , *Threshold* , *EvaluationPeriods* , *ScalingAdjustmentType* , and *ScalingAdjustment* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-policytype
         */
        readonly policyType?: string;
        /**
         * Amount of adjustment to make, based on the scaling adjustment type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-scalingadjustment
         */
        readonly scalingAdjustment?: number;
        /**
         * The type of adjustment to make to a fleet's instance count.
         *
         * - *ChangeInCapacity* -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.
         * - *ExactCapacity* -- set the instance count to the scaling adjustment value.
         * - *PercentChangeInCapacity* -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-scalingadjustmenttype
         */
        readonly scalingAdjustmentType?: string;
        /**
         * Current status of the scaling policy.
         *
         * The scaling policy can be in force only when in an `ACTIVE` status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.
         *
         * - *ACTIVE* -- The scaling policy can be used for auto-scaling a fleet.
         * - *UPDATE_REQUESTED* -- A request to update the scaling policy has been received.
         * - *UPDATING* -- A change is being made to the scaling policy.
         * - *DELETE_REQUESTED* -- A request to delete the scaling policy has been received.
         * - *DELETING* -- The scaling policy is being deleted.
         * - *DELETED* -- The scaling policy has been deleted.
         * - *ERROR* -- An error occurred in creating the policy. It should be removed and recreated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-status
         */
        readonly status?: string;
        /**
         * An object that contains settings for a target-based scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-targetconfiguration
         */
        readonly targetConfiguration?: cdk.IResolvable | CfnFleet.TargetConfigurationProperty;
        /**
         * Metric value used to trigger a scaling event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-threshold
         */
        readonly threshold?: number;
        /**
         * The current status of the fleet's scaling policies in a requested fleet location.
         *
         * The status `PENDING_UPDATE` indicates that an update was requested for the fleet but has not yet been completed for the location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html#cfn-gamelift-fleet-scalingpolicy-updatestatus
         */
        readonly updateStatus?: string;
    }
    /**
     * Settings for a target-based scaling policy.
     *
     * A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-targetconfiguration.html
     */
    interface TargetConfigurationProperty {
        /**
         * Desired value to use with a target-based scaling policy.
         *
         * The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-targetconfiguration.html#cfn-gamelift-fleet-targetconfiguration-targetvalue
         */
        readonly targetValue: number;
    }
    /**
     * *This data type is used with the Amazon GameLift containers feature, which is currently in public preview.*.
     *
     * Configuration details for a set of container groups, for use when creating a fleet with compute type `CONTAINER` .
     *
     * *Used with:* `CreateFleet`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-containergroupsconfiguration.html
     */
    interface ContainerGroupsConfigurationProperty {
        /**
         * A set of ports to allow inbound traffic, including game clients, to connect to processes running in the container fleet.
         *
         * Connection ports are dynamically mapped to container ports, which are assigned to individual processes running in a container. The connection port range must have enough ports to map to all container ports across a fleet instance. To calculate the minimum connection ports needed, use the following formula:
         *
         * *[Total number of container ports as defined for containers in the replica container group] * [Desired or calculated number of replica container groups per instance] + [Total number of container ports as defined for containers in the daemon container group]*
         *
         * As a best practice, double the minimum number of connection ports.
         *
         * > Use the fleet's `EC2InboundPermissions` property to control external access to connection ports. Set this property to the connection port numbers that you want to open access to. See `IpPermission` for more details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-containergroupsconfiguration.html#cfn-gamelift-fleet-containergroupsconfiguration-connectionportrange
         */
        readonly connectionPortRange: CfnFleet.ConnectionPortRangeProperty | cdk.IResolvable;
        /**
         * The list of container group definition names to deploy to a new container fleet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-containergroupsconfiguration.html#cfn-gamelift-fleet-containergroupsconfiguration-containergroupdefinitionnames
         */
        readonly containerGroupDefinitionNames: Array<string>;
        /**
         * The number of container groups per instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-containergroupsconfiguration.html#cfn-gamelift-fleet-containergroupsconfiguration-containergroupsperinstance
         */
        readonly containerGroupsPerInstance?: CfnFleet.ContainerGroupsPerInstanceProperty | cdk.IResolvable;
    }
    /**
     * *This operation has been expanded to use with the Amazon GameLift containers feature, which is currently in public preview.*.
     *
     * The set of port numbers to open on each instance in a container fleet. Connection ports are used by inbound traffic to connect with processes that are running in containers on the fleet.
     *
     * *Part of:* `ContainerGroupsConfiguration` , `ContainerGroupsAttributes`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-connectionportrange.html
     */
    interface ConnectionPortRangeProperty {
        /**
         * Starting value for the port range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-connectionportrange.html#cfn-gamelift-fleet-connectionportrange-fromport
         */
        readonly fromPort: number;
        /**
         * Ending value for the port.
         *
         * Port numbers are end-inclusive. This value must be equal to or greater than `FromPort` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-connectionportrange.html#cfn-gamelift-fleet-connectionportrange-toport
         */
        readonly toPort: number;
    }
    /**
     * *This data type is used with the Amazon GameLift containers feature, which is currently in public preview.*.
     *
     * Determines how many replica container groups that Amazon GameLift deploys to each instance in a container fleet.
     *
     * Amazon GameLift calculates the maximum possible replica groups per instance based on the instance 's CPU and memory resources. When deploying a fleet, Amazon GameLift places replica container groups on each fleet instance based on the following:
     *
     * - If no desired value is set, Amazon GameLift places the calculated maximum.
     * - If a desired number is set to a value higher than the calculated maximum, fleet creation fails..
     * - If a desired number is set to a value lower than the calculated maximum, Amazon GameLift places the desired number.
     *
     * *Part of:* `ContainerGroupsConfiguration` , `ContainerGroupsAttributes`
     *
     * *Returned by:* `DescribeFleetAttributes` , `CreateFleet`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-containergroupsperinstance.html
     */
    interface ContainerGroupsPerInstanceProperty {
        /**
         * The desired number of replica container groups to place on each fleet instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-containergroupsperinstance.html#cfn-gamelift-fleet-containergroupsperinstance-desiredreplicacontainergroupsperinstance
         */
        readonly desiredReplicaContainerGroupsPerInstance?: number;
        /**
         * The maximum possible number of replica container groups that each fleet instance can have.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-containergroupsperinstance.html#cfn-gamelift-fleet-containergroupsperinstance-maxreplicacontainergroupsperinstance
         */
        readonly maxReplicaContainerGroupsPerInstance?: number;
    }
}
/**
 * Properties for defining a `CfnFleet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html
 */
export interface CfnFleetProps {
    /**
     * Amazon GameLift Anywhere configuration options.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-anywhereconfiguration
     */
    readonly anywhereConfiguration?: CfnFleet.AnywhereConfigurationProperty | cdk.IResolvable;
    /**
     * Current resource capacity settings for managed EC2 fleets and container fleets.
     *
     * For multi-location fleets, location values might refer to a fleet's remote location or its home Region.
     *
     * *Returned by:* [DescribeFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html) , [DescribeFleetLocationCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html) , [UpdateFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-applycapacity
     */
    readonly applyCapacity?: string;
    /**
     * A unique identifier for a build to be deployed on the new fleet.
     *
     * If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a `READY` status. This fleet setting cannot be changed once the fleet is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-buildid
     */
    readonly buildId?: string;
    /**
     * Prompts Amazon GameLift to generate a TLS/SSL certificate for the fleet.
     *
     * Amazon GameLift uses the certificates to encrypt traffic between game clients and the game servers running on Amazon GameLift. By default, the `CertificateConfiguration` is `DISABLED` . You can't change this property after you create the fleet.
     *
     * AWS Certificate Manager (ACM) certificates expire after 13 months. Certificate expiration can cause fleets to fail, preventing players from connecting to instances in the fleet. We recommend you replace fleets before 13 months, consider using fleet aliases for a smooth transition.
     *
     * > ACM isn't available in all AWS regions. A fleet creation request with certificate generation enabled in an unsupported Region, fails with a 4xx error. For more information about the supported Regions, see [Supported Regions](https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html) in the *AWS Certificate Manager User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-certificateconfiguration
     */
    readonly certificateConfiguration?: CfnFleet.CertificateConfigurationProperty | cdk.IResolvable;
    /**
     * The type of compute resource used to host your game servers.
     *
     * - `EC2` – The game server build is deployed to Amazon EC2 instances for cloud hosting. This is the default setting.
     * - `CONTAINER` – Container images with your game server build and supporting software are deployed to Amazon EC2 instances for cloud hosting. With this compute type, you must specify the `ContainerGroupsConfiguration` parameter.
     * - `ANYWHERE` – Game servers or container images with your game server and supporting software are deployed to compute resources that are provided and managed by you. With this compute type, you can also set the `AnywhereConfiguration` parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-computetype
     */
    readonly computeType?: string;
    /**
     * *This data type is used with the Amazon GameLift containers feature, which is currently in public preview.*.
     *
     * Configuration details for a set of container groups, for use when creating a fleet with compute type `CONTAINER` .
     *
     * *Used with:* `CreateFleet`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-containergroupsconfiguration
     */
    readonly containerGroupsConfiguration?: CfnFleet.ContainerGroupsConfigurationProperty | cdk.IResolvable;
    /**
     * A description for the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-description
     */
    readonly description?: string;
    /**
     * The number of EC2 instances that you want this fleet to host.
     *
     * When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-desiredec2instances
     */
    readonly desiredEc2Instances?: number;
    /**
     * The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet.
     *
     * Set this parameter for EC2 and container fleets. You can leave this parameter empty when creating the fleet, but you must call `UpdateFleetPortSettings` to set it before players can connect to game sessions. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. For Realtime Servers fleets, Amazon GameLift automatically sets TCP and UDP ranges.
     *
     * To manage inbound access for a container fleet, set this parameter to the same port numbers that you set for the fleet's connection port range. During the life of the fleet, update this parameter to control which connection ports are open to inbound traffic.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2inboundpermissions
     */
    readonly ec2InboundPermissions?: Array<CfnFleet.IpPermissionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon GameLift-supported Amazon EC2 instance type to use with EC2 and container fleets.
     *
     * Instance type determines the computing resources that will be used to host your game servers, including CPU, memory, storage, and networking capacity. See [Amazon Elastic Compute Cloud Instance Types](https://docs.aws.amazon.com/ec2/instance-types/) for detailed descriptions of Amazon EC2 instance types.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2instancetype
     */
    readonly ec2InstanceType?: string;
    /**
     * Indicates whether to use On-Demand or Spot instances for this fleet.
     *
     * By default, this property is set to `ON_DEMAND` . Learn more about when to use [On-Demand versus Spot Instances](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot) . This fleet property can't be changed after the fleet is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-fleettype
     */
    readonly fleetType?: string;
    /**
     * A unique identifier for an IAM role with access permissions to other AWS services.
     *
     * Any application that runs on an instance in the fleet--including install scripts, server processes, and other processes--can use these permissions to interact with AWS resources that you own or have access to. For more information about using the role with your game server builds, see [Communicate with other AWS resources from your fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html) . This attribute is used with fleets where `ComputeType` is "EC2" or "Container".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-instancerolearn
     */
    readonly instanceRoleArn?: string;
    /**
     * Indicates that fleet instances maintain a shared credentials file for the IAM role defined in `InstanceRoleArn` .
     *
     * Shared credentials allow applications that are deployed with the game server executable to communicate with other AWS resources. This property is used only when the game server is integrated with the server SDK version 5.x. For more information about using shared credentials, see [Communicate with other AWS resources from your fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html) . This attribute is used with fleets where `ComputeType` is "EC2" or "Container".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-instancerolecredentialsprovider
     */
    readonly instanceRoleCredentialsProvider?: string;
    /**
     * A set of remote locations to deploy additional instances to and manage as part of the fleet.
     *
     * This parameter can only be used when creating fleets in AWS Regions that support multiple locations. You can add any Amazon GameLift-supported AWS Region as a remote location, in the form of an AWS Region code, such as `us-west-2` or Local Zone code. To create a fleet with instances in the home Region only, don't set this parameter.
     *
     * When using this parameter, Amazon GameLift requires you to include your home location in the request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locations
     */
    readonly locations?: Array<cdk.IResolvable | CfnFleet.LocationConfigurationProperty> | cdk.IResolvable;
    /**
     * This parameter is no longer used.
     *
     * When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-logpaths
     */
    readonly logPaths?: Array<string>;
    /**
     * The maximum number of instances that are allowed in the specified fleet location.
     *
     * If this parameter is not set, the default is 1.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-maxsize
     */
    readonly maxSize?: number;
    /**
     * The name of an AWS CloudWatch metric group to add this fleet to.
     *
     * A metric group is used to aggregate the metrics for multiple fleets. You can specify an existing metric group name or set a new name to create a new metric group. A fleet can be included in only one metric group at a time.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-metricgroups
     */
    readonly metricGroups?: Array<string>;
    /**
     * The minimum number of instances that are allowed in the specified fleet location.
     *
     * If this parameter is not set, the default is 0.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-minsize
     */
    readonly minSize?: number;
    /**
     * A descriptive label that is associated with a fleet.
     *
     * Fleet names do not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-name
     */
    readonly name: string;
    /**
     * The status of termination protection for active game sessions on the fleet.
     *
     * By default, this property is set to `NoProtection` .
     *
     * - *NoProtection* - Game sessions can be terminated during active gameplay as a result of a scale-down event.
     * - *FullProtection* - Game sessions in `ACTIVE` status cannot be terminated during a scale-down event.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-newgamesessionprotectionpolicy
     */
    readonly newGameSessionProtectionPolicy?: string;
    /**
     * Used when peering your Amazon GameLift fleet with a VPC, the unique identifier for the AWS account that owns the VPC.
     *
     * You can find your account ID in the AWS Management Console under account settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcawsaccountid
     */
    readonly peerVpcAwsAccountId?: string;
    /**
     * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet.
     *
     * The VPC must be in the same Region as your fleet. To look up a VPC ID, use the [VPC Dashboard](https://docs.aws.amazon.com/vpc/) in the AWS Management Console . Learn more about VPC peering in [VPC Peering with Amazon GameLift Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcid
     */
    readonly peerVpcId?: string;
    /**
     * A policy that limits the number of game sessions that an individual player can create on instances in this fleet within a specified span of time.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-resourcecreationlimitpolicy
     */
    readonly resourceCreationLimitPolicy?: cdk.IResolvable | CfnFleet.ResourceCreationLimitPolicyProperty;
    /**
     * Instructions for how to launch and maintain server processes on instances in the fleet.
     *
     * The runtime configuration defines one or more server process configurations, each identifying a build executable or Realtime script file and the number of processes of that type to run concurrently.
     *
     * > The `RuntimeConfiguration` parameter is required unless the fleet is being configured using the older parameters `ServerLaunchPath` and `ServerLaunchParameters` , which are still supported for backward compatibility.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-runtimeconfiguration
     */
    readonly runtimeConfiguration?: cdk.IResolvable | CfnFleet.RuntimeConfigurationProperty;
    /**
     * Rule that controls how a fleet is scaled.
     *
     * Scaling policies are uniquely identified by the combination of name and fleet ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicies
     */
    readonly scalingPolicies?: Array<cdk.IResolvable | CfnFleet.ScalingPolicyProperty> | cdk.IResolvable;
    /**
     * The unique identifier for a Realtime configuration script to be deployed on fleet instances.
     *
     * You can use either the script ID or ARN. Scripts must be uploaded to Amazon GameLift prior to creating the fleet. This fleet property cannot be changed later.
     *
     * > You can't use the `!Ref` command to reference a script created with a CloudFormation template for the fleet property `ScriptId` . Instead, use `Fn::GetAtt Script.Arn` or `Fn::GetAtt Script.Id` to retrieve either of these properties as input for `ScriptId` . Alternatively, enter a `ScriptId` string manually.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scriptid
     */
    readonly scriptId?: string;
    /**
     * This parameter is no longer used but is retained for backward compatibility.
     *
     * Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-serverlaunchparameters
     */
    readonly serverLaunchParameters?: string;
    /**
     * This parameter is no longer used.
     *
     * Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-serverlaunchpath
     */
    readonly serverLaunchPath?: string;
}
/**
 * *This operation is used with the Amazon GameLift FleetIQ solution and game server groups.*.
 *
 * Creates a GameLift FleetIQ game server group for managing game hosting on a collection of Amazon EC2 instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your AWS account , and establishes a link between the two groups. You can view the status of your game server groups in the GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch.
 *
 * Before creating a new game server group, you must have the following:
 *
 * - An Amazon EC2 launch template that specifies how to launch Amazon EC2 instances with your game server build. For more information, see [Launching an Instance from a Launch Template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the *Amazon EC2 User Guide* .
 * - An IAM role that extends limited access to your AWS account to allow GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see [Create IAM roles for cross-service interaction](https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html) in the *GameLift FleetIQ Developer Guide* .
 *
 * To create a new game server group, specify a unique group name, IAM role and Amazon EC2 launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a GameLift FleetIQ metric.
 *
 * Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.
 *
 * *Learn more*
 *
 * [GameLift FleetIQ Guide](https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html)
 *
 * @cloudformationResource AWS::GameLift::GameServerGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html
 */
export declare class CfnGameServerGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGameServerGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGameServerGroup;
    /**
     * A unique identifier for the auto scaling group.
     *
     * @cloudformationAttribute AutoScalingGroupArn
     */
    readonly attrAutoScalingGroupArn: string;
    /**
     * A unique identifier for the game server group.
     *
     * @cloudformationAttribute GameServerGroupArn
     */
    readonly attrGameServerGroupArn: string;
    /**
     * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting.
     */
    autoScalingPolicy?: CfnGameServerGroup.AutoScalingPolicyProperty | cdk.IResolvable;
    /**
     * Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group.
     */
    balancingStrategy?: string;
    /**
     * The type of delete to perform.
     */
    deleteOption?: string;
    /**
     * A developer-defined identifier for the game server group.
     */
    gameServerGroupName: string;
    /**
     * A flag that indicates whether instances in the game server group are protected from early termination.
     */
    gameServerProtectionPolicy?: string;
    /**
     * The set of Amazon EC2 instance types that Amazon GameLift FleetIQ can use when balancing and automatically scaling instances in the corresponding Auto Scaling group.
     */
    instanceDefinitions: Array<CfnGameServerGroup.InstanceDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group.
     */
    launchTemplate?: cdk.IResolvable | CfnGameServerGroup.LaunchTemplateProperty;
    /**
     * The maximum number of instances allowed in the Amazon EC2 Auto Scaling group.
     */
    maxSize?: number;
    /**
     * The minimum number of instances allowed in the Amazon EC2 Auto Scaling group.
     */
    minSize?: number;
    /**
     * The Amazon Resource Name ( [ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html) ) for an IAM role that allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.
     */
    roleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of labels to assign to the new game server group resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A list of virtual private cloud (VPC) subnets to use with instances in the game server group.
     */
    vpcSubnets?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGameServerGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGameServerGroup {
    /**
     * *This data type is used with the GameLift FleetIQ and game server groups.*.
     *
     * Configuration settings for intelligent automatic scaling that uses target tracking. After the Auto Scaling group is created, all updates to Auto Scaling policies, including changing this policy and adding or removing other policies, is done directly on the Auto Scaling group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-autoscalingpolicy.html
     */
    interface AutoScalingPolicyProperty {
        /**
         * Length of time, in seconds, it takes for a new instance to start new game server processes and register with Amazon GameLift FleetIQ.
         *
         * Specifying a warm-up time can be useful, particularly with game servers that take a long time to start up, because it avoids prematurely starting new instances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-autoscalingpolicy.html#cfn-gamelift-gameservergroup-autoscalingpolicy-estimatedinstancewarmup
         */
        readonly estimatedInstanceWarmup?: number;
        /**
         * Settings for a target-based scaling policy applied to Auto Scaling group.
         *
         * These settings are used to create a target-based policy that tracks the GameLift FleetIQ metric `PercentUtilizedGameServers` and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-autoscalingpolicy.html#cfn-gamelift-gameservergroup-autoscalingpolicy-targettrackingconfiguration
         */
        readonly targetTrackingConfiguration: cdk.IResolvable | CfnGameServerGroup.TargetTrackingConfigurationProperty;
    }
    /**
     * *This data type is used with the Amazon GameLift FleetIQ and game server groups.*.
     *
     * Settings for a target-based scaling policy as part of a `GameServerGroupAutoScalingPolicy` . These settings are used to create a target-based policy that tracks the GameLift FleetIQ metric `"PercentUtilizedGameServers"` and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-targettrackingconfiguration.html
     */
    interface TargetTrackingConfigurationProperty {
        /**
         * Desired value to use with a game server group target-based scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-targettrackingconfiguration.html#cfn-gamelift-gameservergroup-targettrackingconfiguration-targetvalue
         */
        readonly targetValue: number;
    }
    /**
     * *This data type is used with the GameLift FleetIQ and game server groups.*.
     *
     * An Amazon EC2 launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. The launch template is specified when creating a new game server group with `GameServerGroup` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-launchtemplate.html
     */
    interface LaunchTemplateProperty {
        /**
         * A unique identifier for an existing Amazon EC2 launch template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-launchtemplate.html#cfn-gamelift-gameservergroup-launchtemplate-launchtemplateid
         */
        readonly launchTemplateId?: string;
        /**
         * A readable identifier for an existing Amazon EC2 launch template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-launchtemplate.html#cfn-gamelift-gameservergroup-launchtemplate-launchtemplatename
         */
        readonly launchTemplateName?: string;
        /**
         * The version of the Amazon EC2 launch template to use.
         *
         * If no version is specified, the default version will be used. With Amazon EC2, you can specify a default version for a launch template. If none is set, the default is the first version created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-launchtemplate.html#cfn-gamelift-gameservergroup-launchtemplate-version
         */
        readonly version?: string;
    }
    /**
     * *This data type is used with the Amazon GameLift FleetIQ and game server groups.*.
     *
     * An allowed instance type for a `GameServerGroup` . All game server groups must have at least two instance types defined for it. GameLift FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-instancedefinition.html
     */
    interface InstanceDefinitionProperty {
        /**
         * An Amazon EC2 instance type designation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-instancedefinition.html#cfn-gamelift-gameservergroup-instancedefinition-instancetype
         */
        readonly instanceType: string;
        /**
         * Instance weighting that indicates how much this instance type contributes to the total capacity of a game server group.
         *
         * Instance weights are used by Amazon GameLift FleetIQ to calculate the instance type's cost per unit hour and better identify the most cost-effective options. For detailed information on weighting instance capacity, see [Instance Weighting](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html) in the *Amazon Elastic Compute Cloud Auto Scaling User Guide* . Default value is "1".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-instancedefinition.html#cfn-gamelift-gameservergroup-instancedefinition-weightedcapacity
         */
        readonly weightedCapacity?: string;
    }
}
/**
 * Properties for defining a `CfnGameServerGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html
 */
export interface CfnGameServerGroupProps {
    /**
     * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting.
     *
     * The scaling policy uses the metric `"PercentUtilizedGameServers"` to maintain a buffer of idle game servers that can immediately accommodate new games and players. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the AWS console or APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-autoscalingpolicy
     */
    readonly autoScalingPolicy?: CfnGameServerGroup.AutoScalingPolicyProperty | cdk.IResolvable;
    /**
     * Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group.
     *
     * Method options include the following:
     *
     * - `SPOT_ONLY` - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced.
     * - `SPOT_PREFERRED` - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances.
     * - `ON_DEMAND_ONLY` - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-balancingstrategy
     */
    readonly balancingStrategy?: string;
    /**
     * The type of delete to perform.
     *
     * To delete a game server group, specify the `DeleteOption` . Options include the following:
     *
     * - `SAFE_DELETE` – (default) Terminates the game server group and Amazon EC2 Auto Scaling group only when it has no game servers that are in `UTILIZED` status.
     * - `FORCE_DELETE` – Terminates the game server group, including all active game servers regardless of their utilization status, and the Amazon EC2 Auto Scaling group.
     * - `RETAIN` – Does a safe delete of the game server group but retains the Amazon EC2 Auto Scaling group as is.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-deleteoption
     */
    readonly deleteOption?: string;
    /**
     * A developer-defined identifier for the game server group.
     *
     * The name is unique for each Region in each AWS account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-gameservergroupname
     */
    readonly gameServerGroupName: string;
    /**
     * A flag that indicates whether instances in the game server group are protected from early termination.
     *
     * Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by AWS regardless of protection status.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-gameserverprotectionpolicy
     */
    readonly gameServerProtectionPolicy?: string;
    /**
     * The set of Amazon EC2 instance types that Amazon GameLift FleetIQ can use when balancing and automatically scaling instances in the corresponding Auto Scaling group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-instancedefinitions
     */
    readonly instanceDefinitions: Array<CfnGameServerGroup.InstanceDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group.
     *
     * You can specify the template using either the template name or ID. For help with creating a launch template, see [Creating a Launch Template for an Auto Scaling Group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html) in the *Amazon Elastic Compute Cloud Auto Scaling User Guide* . After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the AWS console or APIs.
     *
     * > If you specify network interfaces in your launch template, you must explicitly set the property `AssociatePublicIpAddress` to "true". If no network interface is specified in the launch template, Amazon GameLift FleetIQ uses your account's default VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-launchtemplate
     */
    readonly launchTemplate?: cdk.IResolvable | CfnGameServerGroup.LaunchTemplateProperty;
    /**
     * The maximum number of instances allowed in the Amazon EC2 Auto Scaling group.
     *
     * During automatic scaling events, Amazon GameLift FleetIQ and EC2 do not scale up the group above this maximum. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the AWS console or APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-maxsize
     */
    readonly maxSize?: number;
    /**
     * The minimum number of instances allowed in the Amazon EC2 Auto Scaling group.
     *
     * During automatic scaling events, Amazon GameLift FleetIQ and Amazon EC2 do not scale down the group below this minimum. In production, this value should be set to at least 1. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the AWS console or APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-minsize
     */
    readonly minSize?: number;
    /**
     * The Amazon Resource Name ( [ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html) ) for an IAM role that allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-rolearn
     */
    readonly roleArn: string;
    /**
     * A list of labels to assign to the new game server group resource.
     *
     * Tags are developer-defined key-value pairs. Tagging AWS resources is useful for resource management, access management, and cost allocation. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *AWS General Reference* . Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags, respectively. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A list of virtual private cloud (VPC) subnets to use with instances in the game server group.
     *
     * By default, all Amazon GameLift FleetIQ-supported Availability Zones are used. You can use this parameter to specify VPCs that you've set up. This property cannot be updated after the game server group is created, and the corresponding Auto Scaling group will always use the property value that is set with this request, even if the Auto Scaling group is updated directly.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-vpcsubnets
     */
    readonly vpcSubnets?: Array<string>;
}
/**
 * The `AWS::GameLift::GameSessionQueue` resource creates a placement queue that processes requests for new game sessions.
 *
 * A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server, then prompts the game server to start a new game session. Queues can have destinations (GameLift fleets or aliases), which determine where the queue can place new game sessions. A queue can have destinations with varied fleet type (Spot and On-Demand), instance type, and AWS Region .
 *
 * @cloudformationResource AWS::GameLift::GameSessionQueue
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html
 */
export declare class CfnGameSessionQueue extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGameSessionQueue from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGameSessionQueue;
    /**
     * The unique Amazon Resource Name (ARN) for the `GameSessionQueue` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A descriptive label that is associated with a game session queue. Names are unique within each Region.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Information to be added to all events that are related to this game session queue.
     */
    customEventData?: string;
    /**
     * A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
     */
    destinations?: Array<CfnGameSessionQueue.DestinationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of locations where a queue is allowed to place new game sessions.
     */
    filterConfiguration?: CfnGameSessionQueue.FilterConfigurationProperty | cdk.IResolvable;
    /**
     * A descriptive label that is associated with game session queue.
     */
    name: string;
    /**
     * An SNS topic ARN that is set up to receive game session placement notifications.
     */
    notificationTarget?: string;
    /**
     * A set of policies that act as a sliding cap on player latency.
     */
    playerLatencyPolicies?: Array<cdk.IResolvable | CfnGameSessionQueue.PlayerLatencyPolicyProperty> | cdk.IResolvable;
    /**
     * Custom settings to use when prioritizing destinations and locations for game session placements.
     */
    priorityConfiguration?: cdk.IResolvable | CfnGameSessionQueue.PriorityConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of labels to assign to the new game session queue resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The maximum time, in seconds, that a new game session placement request remains in the queue.
     */
    timeoutInSeconds?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGameSessionQueueProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGameSessionQueue {
    /**
     * The queue setting that determines the highest latency allowed for individual players when placing a game session.
     *
     * When a latency policy is in force, a game session cannot be placed with any fleet in a Region where a player reports latency higher than the cap. Latency policies are only enforced when the placement request contains player latency information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-playerlatencypolicy.html
     */
    interface PlayerLatencyPolicyProperty {
        /**
         * The maximum latency value that is allowed for any player, in milliseconds.
         *
         * All policies must have a value set for this property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-playerlatencypolicy.html#cfn-gamelift-gamesessionqueue-playerlatencypolicy-maximumindividualplayerlatencymilliseconds
         */
        readonly maximumIndividualPlayerLatencyMilliseconds?: number;
        /**
         * The length of time, in seconds, that the policy is enforced while placing a new game session.
         *
         * A null value for this property means that the policy is enforced until the queue times out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-playerlatencypolicy.html#cfn-gamelift-gamesessionqueue-playerlatencypolicy-policydurationseconds
         */
        readonly policyDurationSeconds?: number;
    }
    /**
     * A fleet or alias designated in a game session queue.
     *
     * Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-gamesessionqueuedestination.html
     */
    interface GameSessionQueueDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) that is assigned to fleet or fleet alias.
         *
         * ARNs, which include a fleet ID or alias ID and a Region name, provide a unique identifier across all Regions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-gamesessionqueuedestination.html#cfn-gamelift-gamesessionqueue-gamesessionqueuedestination-destinationarn
         */
        readonly destinationArn?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-destination.html
     */
    interface DestinationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-destination.html#cfn-gamelift-gamesessionqueue-destination-destinationarn
         */
        readonly destinationArn?: string;
    }
    /**
     * A list of fleet locations where a game session queue can place new game sessions.
     *
     * You can use a filter to temporarily turn off placements for specific locations. For queues that have multi-location fleets, you can use a filter configuration allow placement with some, but not all of these locations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-filterconfiguration.html
     */
    interface FilterConfigurationProperty {
        /**
         * A list of locations to allow game session placement in, in the form of AWS Region codes such as `us-west-2` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-filterconfiguration.html#cfn-gamelift-gamesessionqueue-filterconfiguration-allowedlocations
         */
        readonly allowedLocations?: Array<string>;
    }
    /**
     * Custom prioritization settings for use by a game session queue when placing new game sessions with available game servers.
     *
     * When defined, this configuration replaces the default FleetIQ prioritization process, which is as follows:
     *
     * - If player latency data is included in a game session request, destinations and locations are prioritized first based on lowest average latency (1), then on lowest hosting cost (2), then on destination list order (3), and finally on location (alphabetical) (4). This approach ensures that the queue's top priority is to place game sessions where average player latency is lowest, and--if latency is the same--where the hosting cost is less, etc.
     * - If player latency data is not included, destinations and locations are prioritized first on destination list order (1), and then on location (alphabetical) (2). This approach ensures that the queue's top priority is to place game sessions on the first destination fleet listed. If that fleet has multiple locations, the game session is placed on the first location (when listed alphabetically).
     *
     * Changing the priority order will affect how game sessions are placed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-priorityconfiguration.html
     */
    interface PriorityConfigurationProperty {
        /**
         * The prioritization order to use for fleet locations, when the `PriorityOrder` property includes `LOCATION` .
         *
         * Locations are identified by AWS Region codes such as `us-west-2` . Each location can only be listed once.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-priorityconfiguration.html#cfn-gamelift-gamesessionqueue-priorityconfiguration-locationorder
         */
        readonly locationOrder?: Array<string>;
        /**
         * The recommended sequence to use when prioritizing where to place new game sessions.
         *
         * Each type can only be listed once.
         *
         * - `LATENCY` -- FleetIQ prioritizes locations where the average player latency (provided in each game session request) is lowest.
         * - `COST` -- FleetIQ prioritizes destinations with the lowest current hosting costs. Cost is evaluated based on the location, instance type, and fleet type (Spot or On-Demand) for each destination in the queue.
         * - `DESTINATION` -- FleetIQ prioritizes based on the order that destinations are listed in the queue configuration.
         * - `LOCATION` -- FleetIQ prioritizes based on the provided order of locations, as defined in `LocationOrder` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-priorityconfiguration.html#cfn-gamelift-gamesessionqueue-priorityconfiguration-priorityorder
         */
        readonly priorityOrder?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnGameSessionQueue`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html
 */
export interface CfnGameSessionQueueProps {
    /**
     * Information to be added to all events that are related to this game session queue.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-customeventdata
     */
    readonly customEventData?: string;
    /**
     * A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
     *
     * Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-destinations
     */
    readonly destinations?: Array<CfnGameSessionQueue.DestinationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of locations where a queue is allowed to place new game sessions.
     *
     * Locations are specified in the form of AWS Region codes, such as `us-west-2` . If this parameter is not set, game sessions can be placed in any queue location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-filterconfiguration
     */
    readonly filterConfiguration?: CfnGameSessionQueue.FilterConfigurationProperty | cdk.IResolvable;
    /**
     * A descriptive label that is associated with game session queue.
     *
     * Queue names must be unique within each Region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-name
     */
    readonly name: string;
    /**
     * An SNS topic ARN that is set up to receive game session placement notifications.
     *
     * See [Setting up notifications for game session placement](https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-notificationtarget
     */
    readonly notificationTarget?: string;
    /**
     * A set of policies that act as a sliding cap on player latency.
     *
     * FleetIQ works to deliver low latency for most players in a game session. These policies ensure that no individual player can be placed into a game with unreasonably high latency. Use multiple policies to gradually relax latency requirements a step at a time. Multiple policies are applied based on their maximum allowed latency, starting with the lowest value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-playerlatencypolicies
     */
    readonly playerLatencyPolicies?: Array<cdk.IResolvable | CfnGameSessionQueue.PlayerLatencyPolicyProperty> | cdk.IResolvable;
    /**
     * Custom settings to use when prioritizing destinations and locations for game session placements.
     *
     * This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-priorityconfiguration
     */
    readonly priorityConfiguration?: cdk.IResolvable | CfnGameSessionQueue.PriorityConfigurationProperty;
    /**
     * A list of labels to assign to the new game session queue resource.
     *
     * Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *AWS General Reference* . Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The maximum time, in seconds, that a new game session placement request remains in the queue.
     *
     * When a request exceeds this time, the game session placement changes to a `TIMED_OUT` status. By default, this property is set to `600` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-timeoutinseconds
     */
    readonly timeoutInSeconds?: number;
}
/**
 * The AWS::GameLift::Location resource creates a custom location for use in an Anywhere fleet.
 *
 * @cloudformationResource AWS::GameLift::Location
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-location.html
 */
export declare class CfnLocation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLocation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLocation;
    /**
     * A unique identifier for the custom location. For example, `arn:aws:gamelift:[region]::location/location-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912` .
     *
     * @cloudformationAttribute LocationArn
     */
    readonly attrLocationArn: string;
    /**
     * A descriptive name for the custom location.
     */
    locationName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of labels to assign to the new matchmaking configuration resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLocationProps);
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
 * Properties for defining a `CfnLocation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-location.html
 */
export interface CfnLocationProps {
    /**
     * A descriptive name for the custom location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-location.html#cfn-gamelift-location-locationname
     */
    readonly locationName: string;
    /**
     * A list of labels to assign to the new matchmaking configuration resource.
     *
     * Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *AWS General Rareference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-location.html#cfn-gamelift-location-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::GameLift::MatchmakingConfiguration` resource defines a new matchmaking configuration for use with FlexMatch.
 *
 * Whether you're using FlexMatch with GameLift hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're using GameLift hosting, it also defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes that are consistent with that configuration.
 *
 * @cloudformationResource AWS::GameLift::MatchmakingConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html
 */
export declare class CfnMatchmakingConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMatchmakingConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMatchmakingConfiguration;
    /**
     * The unique Amazon Resource Name (ARN) for the `MatchmakingConfiguration` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The `MatchmakingConfiguration` name, which is unique.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * A flag that determines whether a match that was created with this configuration must be accepted by the matched players.
     */
    acceptanceRequired: boolean | cdk.IResolvable;
    /**
     * The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.
     */
    acceptanceTimeoutSeconds?: number;
    /**
     * The number of player slots in a match to keep open for future players.
     */
    additionalPlayerCount?: number;
    /**
     * The method used to backfill game sessions that are created with this matchmaking configuration.
     */
    backfillMode?: string;
    /**
     * A time stamp indicating when this data object was created.
     */
    creationTime?: string;
    /**
     * Information to add to all events related to the matchmaking configuration.
     */
    customEventData?: string;
    /**
     * A description for the matchmaking configuration.
     */
    description?: string;
    /**
     * Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.
     */
    flexMatchMode?: string;
    /**
     * A set of custom properties for a game session, formatted as key-value pairs.
     */
    gameProperties?: Array<CfnMatchmakingConfiguration.GamePropertyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A set of custom game session properties, formatted as a single string value.
     */
    gameSessionData?: string;
    /**
     * The Amazon Resource Name ( [ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html) ) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::gamesessionqueue/<queue name>` . Queues can be located in any Region. Queues are used to start new Amazon GameLift-hosted game sessions for matches that are created with this matchmaking configuration. If `FlexMatchMode` is set to `STANDALONE` , do not set this parameter.
     */
    gameSessionQueueArns?: Array<string>;
    /**
     * A unique identifier for the matchmaking configuration.
     */
    name: string;
    /**
     * An SNS topic ARN that is set up to receive matchmaking notifications.
     */
    notificationTarget?: string;
    /**
     * The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.
     */
    requestTimeoutSeconds: number;
    /**
     * The Amazon Resource Name ( [ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html) ) associated with the GameLift matchmaking rule set resource that this configuration uses.
     */
    ruleSetArn?: string;
    /**
     * A unique identifier for the matchmaking rule set to use with this configuration.
     */
    ruleSetName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of labels to assign to the new matchmaking configuration resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMatchmakingConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMatchmakingConfiguration {
    /**
     * This key-value pair can store custom data about a game session.
     *
     * For example, you might use a `GameProperty` to track a game session's map, level of difficulty, or remaining time. The difficulty level could be specified like this: `{"Key": "difficulty", "Value":"Novice"}` .
     *
     * You can set game properties when creating a game session. You can also modify game properties of an active game session. When searching for game sessions, you can filter on game property keys and values. You can't delete game properties from a game session.
     *
     * For examples of working with game properties, see [Create a game session with properties](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#game-properties) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-matchmakingconfiguration-gameproperty.html
     */
    interface GamePropertyProperty {
        /**
         * The game property identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-matchmakingconfiguration-gameproperty.html#cfn-gamelift-matchmakingconfiguration-gameproperty-key
         */
        readonly key: string;
        /**
         * The game property value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-matchmakingconfiguration-gameproperty.html#cfn-gamelift-matchmakingconfiguration-gameproperty-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnMatchmakingConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html
 */
export interface CfnMatchmakingConfigurationProps {
    /**
     * A flag that determines whether a match that was created with this configuration must be accepted by the matched players.
     *
     * To require acceptance, set to `TRUE` . With this option enabled, matchmaking tickets use the status `REQUIRES_ACCEPTANCE` to indicate when a completed potential match is waiting for player acceptance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-acceptancerequired
     */
    readonly acceptanceRequired: boolean | cdk.IResolvable;
    /**
     * The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-acceptancetimeoutseconds
     */
    readonly acceptanceTimeoutSeconds?: number;
    /**
     * The number of player slots in a match to keep open for future players.
     *
     * For example, if the configuration's rule set specifies a match for a single 10-person team, and the additional player count is set to 2, 10 players will be selected for the match and 2 more player slots will be open for future players. This parameter is not used if `FlexMatchMode` is set to `STANDALONE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-additionalplayercount
     */
    readonly additionalPlayerCount?: number;
    /**
     * The method used to backfill game sessions that are created with this matchmaking configuration.
     *
     * Specify `MANUAL` when your game manages backfill requests manually or does not use the match backfill feature. Specify `AUTOMATIC` to have GameLift create a `StartMatchBackfill` request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in [Backfill Existing Games with FlexMatch](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html) . Automatic backfill is not available when `FlexMatchMode` is set to `STANDALONE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-backfillmode
     */
    readonly backfillMode?: string;
    /**
     * A time stamp indicating when this data object was created.
     *
     * Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-creationtime
     */
    readonly creationTime?: string;
    /**
     * Information to add to all events related to the matchmaking configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-customeventdata
     */
    readonly customEventData?: string;
    /**
     * A description for the matchmaking configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-description
     */
    readonly description?: string;
    /**
     * Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.
     *
     * - *STANDALONE* - FlexMatch forms matches and returns match information, including players and team assignments, in a [MatchmakingSucceeded](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded) event.
     * - *WITH_QUEUE* - FlexMatch forms matches and uses the specified Amazon GameLift queue to start a game session for the match.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-flexmatchmode
     */
    readonly flexMatchMode?: string;
    /**
     * A set of custom properties for a game session, formatted as key-value pairs.
     *
     * These properties are passed to a game server process with a request to start a new game session. See [Start a Game Session](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession) . This parameter is not used if `FlexMatchMode` is set to `STANDALONE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-gameproperties
     */
    readonly gameProperties?: Array<CfnMatchmakingConfiguration.GamePropertyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A set of custom game session properties, formatted as a single string value.
     *
     * This data is passed to a game server process with a request to start a new game session. See [Start a Game Session](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession) . This parameter is not used if `FlexMatchMode` is set to `STANDALONE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-gamesessiondata
     */
    readonly gameSessionData?: string;
    /**
     * The Amazon Resource Name ( [ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html) ) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::gamesessionqueue/<queue name>` . Queues can be located in any Region. Queues are used to start new Amazon GameLift-hosted game sessions for matches that are created with this matchmaking configuration. If `FlexMatchMode` is set to `STANDALONE` , do not set this parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-gamesessionqueuearns
     */
    readonly gameSessionQueueArns?: Array<string>;
    /**
     * A unique identifier for the matchmaking configuration.
     *
     * This name is used to identify the configuration associated with a matchmaking request or ticket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-name
     */
    readonly name: string;
    /**
     * An SNS topic ARN that is set up to receive matchmaking notifications.
     *
     * See [Setting up notifications for matchmaking](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html) for more information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-notificationtarget
     */
    readonly notificationTarget?: string;
    /**
     * The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.
     *
     * Requests that fail due to timing out can be resubmitted as needed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-requesttimeoutseconds
     */
    readonly requestTimeoutSeconds: number;
    /**
     * The Amazon Resource Name ( [ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html) ) associated with the GameLift matchmaking rule set resource that this configuration uses.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-rulesetarn
     */
    readonly ruleSetArn?: string;
    /**
     * A unique identifier for the matchmaking rule set to use with this configuration.
     *
     * You can use either the rule set name or ARN value. A matchmaking configuration can only use rule sets that are defined in the same Region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-rulesetname
     */
    readonly ruleSetName: string;
    /**
     * A list of labels to assign to the new matchmaking configuration resource.
     *
     * Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *AWS General Reference* . Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html#cfn-gamelift-matchmakingconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new rule set for FlexMatch matchmaking.
 *
 * A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type.
 *
 * To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.
 *
 * Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax.
 *
 * *Learn more*
 *
 * - [Build a rule set](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html)
 * - [Design a matchmaker](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html)
 * - [Matchmaking with FlexMatch](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html)
 *
 * @cloudformationResource AWS::GameLift::MatchmakingRuleSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html
 */
export declare class CfnMatchmakingRuleSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMatchmakingRuleSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMatchmakingRuleSet;
    /**
     * The unique Amazon Resource Name (ARN) assigned to the rule set.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"` ).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The unique name of the rule set.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * A unique identifier for the matchmaking rule set.
     */
    name: string;
    /**
     * A collection of matchmaking rules, formatted as a JSON string.
     */
    ruleSetBody: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of labels to assign to the new matchmaking rule set resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMatchmakingRuleSetProps);
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
 * Properties for defining a `CfnMatchmakingRuleSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html
 */
export interface CfnMatchmakingRuleSetProps {
    /**
     * A unique identifier for the matchmaking rule set.
     *
     * A matchmaking configuration identifies the rule set it uses by this name value. Note that the rule set name is different from the optional `name` field in the rule set body.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html#cfn-gamelift-matchmakingruleset-name
     */
    readonly name: string;
    /**
     * A collection of matchmaking rules, formatted as a JSON string.
     *
     * Comments are not allowed in JSON, but most elements support a description field.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html#cfn-gamelift-matchmakingruleset-rulesetbody
     */
    readonly ruleSetBody: string;
    /**
     * A list of labels to assign to the new matchmaking rule set resource.
     *
     * Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *AWS General Reference* . Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html#cfn-gamelift-matchmakingruleset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::GameLift::Script` resource creates a new script record for your Realtime Servers script.
 *
 * Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session.
 *
 * @cloudformationResource AWS::GameLift::Script
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-script.html
 */
export declare class CfnScript extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnScript from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnScript;
    /**
     * The unique Amazon Resource Name (ARN) for the script.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"` ).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * A unique identifier for a Realtime script.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The file size of the uploaded Realtime script, expressed in bytes. When files are uploaded from an S3 location, this value remains at "0".
     *
     * @cloudformationAttribute SizeOnDisk
     */
    readonly attrSizeOnDisk: number;
    /**
     * A descriptive label that is associated with a script.
     */
    name?: string;
    /**
     * The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored.
     */
    storageLocation: cdk.IResolvable | CfnScript.S3LocationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of labels to assign to the new script resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The version that is associated with a build or script.
     */
    version?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnScriptProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnScript {
    /**
     * The location in Amazon S3 where build or script files can be stored for access by Amazon GameLift.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-script-s3location.html
     */
    interface S3LocationProperty {
        /**
         * An Amazon S3 bucket identifier. Thename of the S3 bucket.
         *
         * > Amazon GameLift doesn't support uploading from Amazon S3 buckets with names that contain a dot (.).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-script-s3location.html#cfn-gamelift-script-s3location-bucket
         */
        readonly bucket: string;
        /**
         * The name of the zip file that contains the build files or script files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-script-s3location.html#cfn-gamelift-script-s3location-key
         */
        readonly key: string;
        /**
         * The version of the file, if object versioning is turned on for the bucket.
         *
         * Amazon GameLift uses this information when retrieving files from an S3 bucket that you own. Use this parameter to specify a specific version of the file. If not set, the latest version of the file is retrieved.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-script-s3location.html#cfn-gamelift-script-s3location-objectversion
         */
        readonly objectVersion?: string;
        /**
         * The Amazon Resource Name ( [ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html) ) for an IAM role that allows Amazon GameLift to access the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-script-s3location.html#cfn-gamelift-script-s3location-rolearn
         */
        readonly roleArn: string;
    }
}
/**
 * Properties for defining a `CfnScript`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-script.html
 */
export interface CfnScriptProps {
    /**
     * A descriptive label that is associated with a script.
     *
     * Script names do not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-script.html#cfn-gamelift-script-name
     */
    readonly name?: string;
    /**
     * The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored.
     *
     * The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the `ObjectVersion` parameter to specify an earlier version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-script.html#cfn-gamelift-script-storagelocation
     */
    readonly storageLocation: cdk.IResolvable | CfnScript.S3LocationProperty;
    /**
     * A list of labels to assign to the new script resource.
     *
     * Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *AWS General Reference* . Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-script.html#cfn-gamelift-script-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The version that is associated with a build or script.
     *
     * Version strings do not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-script.html#cfn-gamelift-script-version
     */
    readonly version?: string;
}
/**
 * *This data type is used with the Amazon GameLift containers feature, which is currently in public preview.*.
 *
 * The properties that describe a container group resource. Container group definition properties can't be updated. To change a property, create a new container group definition.
 *
 * *Used with:* `CreateContainerGroupDefinition`
 *
 * *Returned by:* `DescribeContainerGroupDefinition` , `ListContainerGroupDefinitions`
 *
 * @cloudformationResource AWS::GameLift::ContainerGroupDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html
 */
export declare class CfnContainerGroupDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContainerGroupDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContainerGroupDefinition;
    /**
     * The Amazon Resource Name ( [ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html) ) that is assigned to an Amazon GameLift `ContainerGroupDefinition` resource. It uniquely identifies the resource across all AWS Regions. Format is `arn:aws:gamelift:<region>::containergroupdefinition/[container group definition name]` .
     *
     * @cloudformationAttribute ContainerGroupDefinitionArn
     */
    readonly attrContainerGroupDefinitionArn: string;
    /**
     * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"` ).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The set of container definitions that are included in the container group.
     */
    containerDefinitions: Array<CfnContainerGroupDefinition.ContainerDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A descriptive identifier for the container group definition.
     */
    name: string;
    /**
     * The platform required for all containers in the container group definition.
     */
    operatingSystem: string;
    /**
     * The method for deploying the container group across fleet instances.
     */
    schedulingStrategy?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The amount of CPU units on a fleet instance to allocate for the container group.
     */
    totalCpuLimit: number;
    /**
     * The amount of memory (in MiB) on a fleet instance to allocate for the container group.
     */
    totalMemoryLimit: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnContainerGroupDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnContainerGroupDefinition {
    /**
     * *This data type is used with the Amazon GameLift containers feature, which is currently in public preview.*.
     *
     * Describes a container in a container fleet, the resources available to the container, and the commands that are run when the container starts. Container properties can't be updated. To change a property, create a new container group definition. See also `ContainerDefinitionInput` .
     *
     * *Part of:* `ContainerGroupDefinition`
     *
     * *Returned by:* `DescribeContainerGroupDefinition` , `ListContainerGroupDefinitions`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html
     */
    interface ContainerDefinitionProperty {
        /**
         * A command that's passed to the container on startup.
         *
         * Each argument for the command is an additional string in the array. See the [ContainerDefinition::command](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-command) parameter in the *Amazon Elastic Container Service API reference.*
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-command
         */
        readonly command?: Array<string>;
        /**
         * The container definition identifier.
         *
         * Container names are unique within a container group definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-containername
         */
        readonly containerName: string;
        /**
         * The number of CPU units that are reserved for the container.
         *
         * Note: 1 vCPU unit equals 1024 CPU units. If no resources are reserved, the container shares the total CPU limit for the container group.
         *
         * *Related data type:* `ContainerGroupDefinition$TotalCpuLimit`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-cpu
         */
        readonly cpu?: number;
        /**
         * Indicates that the container relies on the status of other containers in the same container group during its startup and shutdown sequences.
         *
         * A container might have dependencies on multiple containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-dependson
         */
        readonly dependsOn?: Array<CfnContainerGroupDefinition.ContainerDependencyProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The entry point that's passed to the container on startup.
         *
         * If there are multiple arguments, each argument is an additional string in the array. See the [ContainerDefinition::entryPoint](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-entryPoint) parameter in the *Amazon Elastic Container Service API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-entrypoint
         */
        readonly entryPoint?: Array<string>;
        /**
         * A set of environment variables that's passed to the container on startup.
         *
         * See the [ContainerDefinition::environment](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment) parameter in the *Amazon Elastic Container Service API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-environment
         */
        readonly environment?: Array<CfnContainerGroupDefinition.ContainerEnvironmentProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Indicates whether the container is vital to the container group.
         *
         * If an essential container fails, the entire container group is restarted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-essential
         */
        readonly essential?: boolean | cdk.IResolvable;
        /**
         * A configuration for a non-terminal health check.
         *
         * A container, which automatically restarts if it stops functioning, also restarts if it fails this health check. If an essential container in the daemon group fails a health check, the entire container group is restarted. The essential container in the replica group doesn't use this health check mechanism, because the Amazon GameLift Agent automatically handles the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-healthcheck
         */
        readonly healthCheck?: CfnContainerGroupDefinition.ContainerHealthCheckProperty | cdk.IResolvable;
        /**
         * The URI to the image that $short;
         *
         * copied and deployed to a container fleet. For a more specific identifier, see `ResolvedImageDigest` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-imageuri
         */
        readonly imageUri: string;
        /**
         * The amount of memory that Amazon GameLift makes available to the container.
         *
         * If memory limits aren't set for an individual container, the container shares the container group's total memory allocation.
         *
         * *Related data type:* `ContainerGroupDefinition$TotalMemoryLimit`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-memorylimits
         */
        readonly memoryLimits?: cdk.IResolvable | CfnContainerGroupDefinition.MemoryLimitsProperty;
        /**
         * Defines the ports that are available to assign to processes in the container.
         *
         * For example, a game server process requires a container port to allow game clients to connect to it. Container ports aren't directly accessed by inbound traffic. Amazon GameLift maps these container ports to externally accessible connection ports, which are assigned as needed from the container fleet's `ConnectionPortRange` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-portconfiguration
         */
        readonly portConfiguration?: cdk.IResolvable | CfnContainerGroupDefinition.PortConfigurationProperty;
        /**
         * A unique and immutable identifier for the container image that is deployed to a container fleet.
         *
         * The digest is a SHA 256 hash of the container image manifest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-resolvedimagedigest
         */
        readonly resolvedImageDigest?: string;
        /**
         * The directory in the container where commands are run.
         *
         * See the [ContainerDefinition::workingDirectory](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-workingDirectory) parameter in the *Amazon Elastic Container Service API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-workingdirectory
         */
        readonly workingDirectory?: string;
    }
    /**
     * Specifies how much memory is available to the container.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-memorylimits.html
     */
    interface MemoryLimitsProperty {
        /**
         * The hard limit of memory to reserve for the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-memorylimits.html#cfn-gamelift-containergroupdefinition-memorylimits-hardlimit
         */
        readonly hardLimit?: number;
        /**
         * The amount of memory that is reserved for the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-memorylimits.html#cfn-gamelift-containergroupdefinition-memorylimits-softlimit
         */
        readonly softLimit?: number;
    }
    /**
     * Defines the ports on a container.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-portconfiguration.html
     */
    interface PortConfigurationProperty {
        /**
         * Specifies one or more ranges of ports on a container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-portconfiguration.html#cfn-gamelift-containergroupdefinition-portconfiguration-containerportranges
         */
        readonly containerPortRanges: Array<CfnContainerGroupDefinition.ContainerPortRangeProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * *This data type is used with the Amazon GameLift containers feature, which is currently in public preview.*.
     *
     * A set of one or more port numbers that can be opened on the container.
     *
     * *Part of:* `ContainerPortConfiguration`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerportrange.html
     */
    interface ContainerPortRangeProperty {
        /**
         * A starting value for the range of allowed port numbers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerportrange.html#cfn-gamelift-containergroupdefinition-containerportrange-fromport
         */
        readonly fromPort: number;
        /**
         * The network protocol that these ports support.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerportrange.html#cfn-gamelift-containergroupdefinition-containerportrange-protocol
         */
        readonly protocol: string;
        /**
         * An ending value for the range of allowed port numbers.
         *
         * Port numbers are end-inclusive. This value must be equal to or greater than `FromPort` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerportrange.html#cfn-gamelift-containergroupdefinition-containerportrange-toport
         */
        readonly toPort: number;
    }
    /**
     * Instructions on when and how to check the health of a container in a container fleet.
     *
     * When health check properties are set in a container definition, they override any Docker health checks in the container image. For more information on container health checks, see [HealthCheck command](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_HealthCheck.html#ECS-Type-HealthCheck-command) in the *Amazon Elastic Container Service API* .
     *
     * The following example instructions tell the container to wait 100 seconds after launch before counting failed health checks, then initiate the health check command every 60 seconds. After issuing the health check command, wait 10 seconds for it to succeed. If it fails, retry the command 3 times before considering the container to be unhealthy.
     *
     * `{"Command": [ "CMD-SHELL", "ps cax | grep "processmanager" || exit 1" ], "Interval": 300, "Timeout": 30, "Retries": 5, "StartPeriod": 100 }`
     *
     * *Part of:* `ContainerDefinition$HealthCheck`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerhealthcheck.html
     */
    interface ContainerHealthCheckProperty {
        /**
         * A string array that specifies the command that the container runs to determine if it's healthy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerhealthcheck.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-command
         */
        readonly command: Array<string>;
        /**
         * The time period (in seconds) between each health check.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerhealthcheck.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-interval
         */
        readonly interval?: number;
        /**
         * The number of times to retry a failed health check before the container is considered unhealthy.
         *
         * The first run of the command does not count as a retry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerhealthcheck.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-retries
         */
        readonly retries?: number;
        /**
         * The optional grace period (in seconds) to give a container time to bootstrap before the first failed health check counts toward the number of retries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerhealthcheck.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-startperiod
         */
        readonly startPeriod?: number;
        /**
         * The time period (in seconds) to wait for a health check to succeed before a failed health check is counted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerhealthcheck.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-timeout
         */
        readonly timeout?: number;
    }
    /**
     * *This data type is used with the Amazon GameLift containers feature, which is currently in public preview.*.
     *
     * An environment variable to set inside a container, in the form of a key-value pair.
     *
     * *Related data type:* `ContainerDefinition$Environment`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerenvironment.html
     */
    interface ContainerEnvironmentProperty {
        /**
         * The environment variable name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerenvironment.html#cfn-gamelift-containergroupdefinition-containerenvironment-name
         */
        readonly name: string;
        /**
         * The environment variable value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerenvironment.html#cfn-gamelift-containergroupdefinition-containerenvironment-value
         */
        readonly value: string;
    }
    /**
     * *This data type is used with the Amazon GameLift containers feature, which is currently in public preview.*.
     *
     * A container's dependency on another container in the same container group. The dependency impacts how the dependent container is able to start or shut down based the status of the other container.
     *
     * For example, ContainerA is configured with the following dependency: a `START` dependency on ContainerB. This means that ContainerA can't start until ContainerB has started. It also means that ContainerA must shut down before ContainerB.
     *
     * *Part of:* `ContainerDefinition`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdependency.html
     */
    interface ContainerDependencyProperty {
        /**
         * The condition that the dependency container must reach before the dependent container can start. Valid conditions include:.
         *
         * - START - The dependency container must have started.
         * - COMPLETE - The dependency container has run to completion (exits). Use this condition with nonessential containers, such as those that run a script and then exit. The dependency container can't be an essential container.
         * - SUCCESS - The dependency container has run to completion and exited with a zero status. The dependency container can't be an essential container.
         * - HEALTHY - The dependency container has passed its Docker health check. Use this condition with dependency containers that have health checks configured. This condition is confirmed at container group startup only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdependency.html#cfn-gamelift-containergroupdefinition-containerdependency-condition
         */
        readonly condition: string;
        /**
         * A descriptive label for the container definition that this container depends on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdependency.html#cfn-gamelift-containergroupdefinition-containerdependency-containername
         */
        readonly containerName: string;
    }
}
/**
 * Properties for defining a `CfnContainerGroupDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html
 */
export interface CfnContainerGroupDefinitionProps {
    /**
     * The set of container definitions that are included in the container group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinitions
     */
    readonly containerDefinitions: Array<CfnContainerGroupDefinition.ContainerDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A descriptive identifier for the container group definition.
     *
     * The name value is unique in an AWS Region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-name
     */
    readonly name: string;
    /**
     * The platform required for all containers in the container group definition.
     *
     * > Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in the [Amazon Linux 2 FAQs](https://docs.aws.amazon.com/https://aws.amazon.com/amazon-linux-2/faqs/) . For game servers that are hosted on AL2 and use Amazon GameLift server SDK 4.x., first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See [Migrate to Amazon GameLift server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-operatingsystem
     */
    readonly operatingSystem: string;
    /**
     * The method for deploying the container group across fleet instances.
     *
     * A replica container group might have multiple copies on each fleet instance. A daemon container group maintains only one copy per fleet instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-schedulingstrategy
     */
    readonly schedulingStrategy?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The amount of CPU units on a fleet instance to allocate for the container group.
     *
     * All containers in the group share these resources. This property is an integer value in CPU units (1 vCPU is equal to 1024 CPU units).
     *
     * You can set additional limits for each `ContainerDefinition` in the group. If individual containers have limits, this value must be equal to or greater than the sum of all container-specific CPU limits in the group.
     *
     * For more details on memory allocation, see the [Container fleet design guide](https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-design-fleet) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-totalcpulimit
     */
    readonly totalCpuLimit: number;
    /**
     * The amount of memory (in MiB) on a fleet instance to allocate for the container group.
     *
     * All containers in the group share these resources.
     *
     * You can set additional limits for each `ContainerDefinition` in the group. If individual containers have limits, this value must meet the following requirements:
     *
     * - Equal to or greater than the sum of all container-specific soft memory limits in the group.
     * - Equal to or greater than any container-specific hard limits in the group.
     *
     * For more details on memory allocation, see the [Container fleet design guide](https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-design-fleet) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-totalmemorylimit
     */
    readonly totalMemoryLimit: number;
}
