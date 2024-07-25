import { Connections, IConnectable } from './connections';
import { Instance } from './instance';
import { InstanceType } from './instance-types';
import { IKeyPair } from './key-pair';
import { CpuCredits } from './launch-template';
import { IMachineImage, LookupMachineImage } from './machine-image';
import { ISecurityGroup } from './security-group';
import { UserData } from './user-data';
import { PrivateSubnet, PublicSubnet, Vpc } from './vpc';
/**
 * Direction of traffic to allow all by default.
 */
export declare enum NatTrafficDirection {
    /**
     * Allow all outbound traffic and disallow all inbound traffic.
     */
    OUTBOUND_ONLY = "OUTBOUND_ONLY",
    /**
     * Allow all outbound and inbound traffic.
     */
    INBOUND_AND_OUTBOUND = "INBOUND_AND_OUTBOUND",
    /**
     * Disallow all outbound and inbound traffic.
     */
    NONE = "NONE"
}
/**
 * Pair represents a gateway created by NAT Provider
 */
export interface GatewayConfig {
    /**
     * Availability Zone
     */
    readonly az: string;
    /**
     * Identity of gateway spawned by the provider
     */
    readonly gatewayId: string;
}
/**
 * NAT providers
 *
 * Determines what type of NAT provider to create, either NAT gateways or NAT
 * instance.
 *
 *
 */
export declare abstract class NatProvider {
    /**
     * Use NAT Gateways to provide NAT services for your VPC
     *
     * NAT gateways are managed by AWS.
     *
     * @see https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html
     */
    static gateway(props?: NatGatewayProps): NatProvider;
    /**
     * Use NAT instances to provide NAT services for your VPC
     *
     * NAT instances are managed by you, but in return allow more configuration.
     *
     * Be aware that instances created using this provider will not be
     * automatically replaced if they are stopped for any reason. You should implement
     * your own NatProvider based on AutoScaling groups if you need that.
     *
     * @see https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html
     *
     * @deprecated use instanceV2. 'instance' is deprecated since NatInstanceProvider
     * uses a instance image that has reached EOL on Dec 31 2023
     */
    static instance(props: NatInstanceProps): NatInstanceProvider;
    /**
     * Use NAT instances to provide NAT services for your VPC
     *
     * NAT instances are managed by you, but in return allow more configuration.
     *
     * Be aware that instances created using this provider will not be
     * automatically replaced if they are stopped for any reason. You should implement
     * your own NatProvider based on AutoScaling groups if you need that.
     *
     * @see https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html
     */
    static instanceV2(props: NatInstanceProps): NatInstanceProviderV2;
    /**
     * Return list of gateways spawned by the provider
     */
    abstract readonly configuredGateways: GatewayConfig[];
    /**
     * Called by the VPC to configure NAT
     *
     * Don't call this directly, the VPC will call it automatically.
     */
    abstract configureNat(options: ConfigureNatOptions): void;
    /**
     * Configures subnet with the gateway
     *
     * Don't call this directly, the VPC will call it automatically.
     */
    abstract configureSubnet(subnet: PrivateSubnet): void;
}
/**
 * Options passed by the VPC when NAT needs to be configured
 *
 *
 */
export interface ConfigureNatOptions {
    /**
     * The VPC we're configuring NAT for
     */
    readonly vpc: Vpc;
    /**
     * The public subnets where the NAT providers need to be placed
     */
    readonly natSubnets: PublicSubnet[];
    /**
     * The private subnets that need to route through the NAT providers.
     *
     * There may be more private subnets than public subnets with NAT providers.
     */
    readonly privateSubnets: PrivateSubnet[];
}
/**
 * Properties for a NAT gateway
 *
 */
export interface NatGatewayProps {
    /**
     * EIP allocation IDs for the NAT gateways
     *
     * @default - No fixed EIPs allocated for the NAT gateways
     */
    readonly eipAllocationIds?: string[];
}
/**
 * Properties for a NAT instance
 *
 *
 */
export interface NatInstanceProps {
    /**
     * The machine image (AMI) to use
     *
     * By default, will do an AMI lookup for the latest NAT instance image.
     *
     * If you have a specific AMI ID you want to use, pass a `GenericLinuxImage`. For example:
     *
     * ```ts
     * ec2.NatProvider.instance({
     *   instanceType: new ec2.InstanceType('t3.micro'),
     *   machineImage: new ec2.GenericLinuxImage({
     *     'us-east-2': 'ami-0f9c61b5a562a16af'
     *   })
     * })
     * ```
     *
     * @default - Latest NAT instance image
     */
    readonly machineImage?: IMachineImage;
    /**
     * Instance type of the NAT instance
     */
    readonly instanceType: InstanceType;
    /**
     * Name of SSH keypair to grant access to instance
     *
     * @default - No SSH access will be possible.
     * @deprecated - Use `keyPair` instead - https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2-readme.html#using-an-existing-ec2-key-pair
     */
    readonly keyName?: string;
    /**
     * The SSH keypair to grant access to the instance.
     *
     * @default - No SSH access will be possible.
     */
    readonly keyPair?: IKeyPair;
    /**
     * Security Group for NAT instances
     *
     * @default - A new security group will be created
     * @deprecated - Cannot create a new security group before the VPC is created,
     * and cannot create the VPC without the NAT provider.
     * Set {@link defaultAllowedTraffic} to {@link NatTrafficDirection.NONE}
     * and use {@link NatInstanceProviderV2.gatewayInstances} to retrieve
     * the instances on the fly and add security groups
     *
     * @example
     * const natGatewayProvider = ec2.NatProvider.instanceV2({
     *   instanceType: new ec2.InstanceType('t3.small'),
     *   defaultAllowedTraffic: ec2.NatTrafficDirection.NONE,
     * });
     * const vpc = new ec2.Vpc(this, 'Vpc', { natGatewayProvider });
     *
     * const securityGroup = new ec2.SecurityGroup(this, 'SecurityGroup', {
     *   vpc,
     *   allowAllOutbound: false,
     * });
     * securityGroup.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443));
     * for (const gatewayInstance of natGatewayProvider.gatewayInstances) {
     *    gatewayInstance.addSecurityGroup(securityGroup);
     * }
     */
    readonly securityGroup?: ISecurityGroup;
    /**
     * Direction to allow all traffic through the NAT instance by default.
     *
     * By default, inbound and outbound traffic is allowed.
     *
     * If you set this to another value than INBOUND_AND_OUTBOUND, you must
     * configure the NAT instance's security groups in another way, either by
     * passing in a fully configured Security Group using the `securityGroup`
     * property, or by configuring it using the `.securityGroup` or
     * `.connections` members after passing the NAT Instance Provider to a Vpc.
     *
     * @default NatTrafficDirection.INBOUND_AND_OUTBOUND
     */
    readonly defaultAllowedTraffic?: NatTrafficDirection;
    /**
     * Specifying the CPU credit type for burstable EC2 instance types (T2, T3, T3a, etc).
     * The unlimited CPU credit option is not supported for T3 instances with dedicated host (`host`) tenancy.
     *
     * @default - T2 instances are standard, while T3, T4g, and T3a instances are unlimited.
     */
    readonly creditSpecification?: CpuCredits;
    /**
     * Custom user data to run on the NAT instances
     *
     * @default UserData.forLinux().addCommands(...NatInstanceProviderV2.DEFAULT_USER_DATA_COMMANDS);  - Appropriate user data commands to initialize and configure the NAT instances
     * @see https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html#create-nat-ami
     */
    readonly userData?: UserData;
}
/**
 * NAT provider which uses NAT Instances
 *
 * @deprecated use NatInstanceProviderV2. NatInstanceProvider is deprecated since
 * the instance image used has reached EOL on Dec 31 2023
 */
export declare class NatInstanceProvider extends NatProvider implements IConnectable {
    private readonly props;
    private gateways;
    private _securityGroup?;
    private _connections?;
    constructor(props: NatInstanceProps);
    configureNat(options: ConfigureNatOptions): void;
    /**
     * The Security Group associated with the NAT instances
     */
    get securityGroup(): ISecurityGroup;
    /**
     * Manage the Security Groups associated with the NAT instances
     */
    get connections(): Connections;
    get configuredGateways(): GatewayConfig[];
    configureSubnet(subnet: PrivateSubnet): void;
}
/**
 * Modern NAT provider which uses NAT Instances.
 * The instance uses Amazon Linux 2023 as the operating system.
 */
export declare class NatInstanceProviderV2 extends NatProvider implements IConnectable {
    private readonly props;
    /**
     * Amazon Linux 2023 NAT instance user data commands
     * Enable iptables on the instance, enable persistent IP forwarding, configure NAT on instance
     * @see https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html#create-nat-ami
     */
    static readonly DEFAULT_USER_DATA_COMMANDS: string[];
    private gateways;
    private _securityGroup?;
    private _connections?;
    /**
     * Array of gateway instances spawned by the provider after internal configuration
     */
    get gatewayInstances(): Instance[];
    constructor(props: NatInstanceProps);
    configureNat(options: ConfigureNatOptions): void;
    /**
     * The Security Group associated with the NAT instances
     */
    get securityGroup(): ISecurityGroup;
    /**
     * Manage the Security Groups associated with the NAT instances
     */
    get connections(): Connections;
    get configuredGateways(): GatewayConfig[];
    configureSubnet(subnet: PrivateSubnet): void;
}
/**
 * Machine image representing the latest NAT instance image
 *
 *
 */
export declare class NatInstanceImage extends LookupMachineImage {
    constructor();
}
