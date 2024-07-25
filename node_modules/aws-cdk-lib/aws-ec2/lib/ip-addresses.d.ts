import { Construct } from 'constructs';
import { CidrSplit } from './cidr-splits';
import { CfnVPCCidrBlock } from './ec2.generated';
import { SubnetConfiguration } from './vpc';
/**
 * An abstract Provider of IpAddresses
 *
 * Note this is specific to the IPv4 CIDR.
 */
export declare class IpAddresses {
    /**
     * Used to provide local Ip Address Management services for your VPC
     *
     * VPC CIDR is supplied at creation and subnets are calculated locally
     *
     * Note this is specific to the IPv4 CIDR.
     *
     */
    static cidr(cidrBlock: string): IIpAddresses;
    /**
     * Used to provide centralized Ip Address Management services for your VPC
     *
     * Uses VPC CIDR allocations from AWS IPAM
     *
     * Note this is specific to the IPv4 CIDR.
     *
     * @see https://docs.aws.amazon.com/vpc/latest/ipam/what-it-is-ipam.html
     */
    static awsIpamAllocation(props: AwsIpamProps): IIpAddresses;
    private constructor();
}
/**
 * Implementations for ip address management.
 *
 * Note this is specific to the IPv4 CIDR.
 */
export interface IIpAddresses {
    /**
     * Called by the VPC to retrieve VPC options from the Ipam
     *
     * Don't call this directly, the VPC will call it automatically.
     */
    allocateVpcCidr(): VpcIpamOptions;
    /**
     * Called by the VPC to retrieve Subnet options from the Ipam
     *
     * Don't call this directly, the VPC will call it automatically.
     */
    allocateSubnetsCidr(input: AllocateCidrRequest): SubnetIpamOptions;
}
/**
 * CIDR Allocated Vpc
 */
export interface VpcIpamOptions {
    /**
     * CIDR Block for Vpc
     *
     * @default - Only required when Ipam has concrete allocation available for static Vpc
     */
    readonly cidrBlock?: string;
    /**
     * CIDR Mask for Vpc
     *
     * @default - Only required when using AWS Ipam
     */
    readonly ipv4NetmaskLength?: number;
    /**
     * ipv4 IPAM Pool Id
     *
     * @default - Only required when using AWS Ipam
     */
    readonly ipv4IpamPoolId?: string;
}
/**
 * Subnet requested for allocation
 */
export interface RequestedSubnet {
    /**
     * The availability zone for the subnet
     */
    readonly availabilityZone: string;
    /**
     * Specify configuration parameters for a single subnet group in a VPC
     */
    readonly configuration: SubnetConfiguration;
    /**
     * Id for the Subnet construct
     */
    readonly subnetConstructId: string;
}
/**
 * Request for subnets CIDR to be allocated for a Vpc
 */
export interface AllocateCidrRequest {
    /**
     * The IPv4 CIDR block for this Vpc
     */
    readonly vpcCidr: string;
    /**
     * The Subnets to be allocated
     */
    readonly requestedSubnets: RequestedSubnet[];
}
/**
 * Request for allocation of the VPC IPv6 CIDR.
 */
export interface AllocateVpcIpv6CidrRequest {
    /**
     * The VPC construct to attach to.
     */
    readonly scope: Construct;
    /**
     * The id of the VPC.
     */
    readonly vpcId: string;
}
/**
 * Request for IPv6 CIDR block to be split up.
 */
export interface CreateIpv6CidrBlocksRequest {
    /**
     * The IPv6 CIDR block string representation.
     */
    readonly ipv6SelectedCidr: string;
    /**
     * The number of subnets to assign CIDRs to.
     */
    readonly subnetCount: number;
    /**
     * Size of the covered bits in the CIDR.
     * @default - 128 - 64 = /64 CIDR.
     */
    readonly sizeMask?: string;
}
/**
 * Request for subnet IPv6 CIDRs to be allocated for a VPC.
 */
export interface AllocateIpv6CidrRequest {
    /**
     * List of subnets allocated with IPv4 CIDRs
     */
    readonly allocatedSubnets: AllocatedSubnet[];
    /**
     * The IPv6 CIDRs to be allocated to the subnets
     */
    readonly ipv6Cidrs: string[];
}
/**
 * CIDR Allocated Subnets
 */
export interface SubnetIpamOptions {
    /**
     * CIDR Allocations for Subnets
     */
    readonly allocatedSubnets: AllocatedSubnet[];
}
/**
 * CIDR Allocated Subnet
 */
export interface AllocatedSubnet {
    /**
     * IPv4 CIDR Allocations for a Subnet.
     *
     * Note this is specific to the IPv4 CIDR.
     */
    readonly cidr: string;
    /**
     * IPv6 CIDR Allocations for a Subnet.
     *
     * Note this is specific to the IPv6 CIDR.
     *
     * @default - no IPV6 CIDR
     */
    readonly ipv6Cidr?: string;
}
/**
 * Configuration for AwsIpam
 */
export interface AwsIpamProps {
    /**
     * Netmask length for Vpc
     */
    readonly ipv4NetmaskLength: number;
    /**
     * Ipam Pool Id for ipv4 allocation
     */
    readonly ipv4IpamPoolId: string;
    /**
     * Default length for Subnet ipv4 Network mask
     *
     * Specify this option only if you do not specify all Subnets using SubnetConfiguration with a cidrMask
     *
     * @default - Default ipv4 Subnet Mask for subnets in Vpc
     *
     */
    readonly defaultSubnetIpv4NetmaskLength?: number;
}
/**
 * Convert a CIDR split command to a CFN expression that calculates the same CIDR
 *
 * Can recursively produce multiple `{ Fn::Cidr }` expressions.
 *
 * This is necessary because CFN's `{ Fn::Cidr }` reifies the split to an actual list of
 * strings, and to limit resource consumption `count` may never be higher than 256. So
 * if we need to split deeper, we need to do more than one split.
 *
 * (Function public for testing)
 */
export declare function cidrSplitToCfnExpression(parentCidr: string, split: CidrSplit): string;
/**
 * An abstract Provider of Ipv6Addresses.
 *
 * Note this is specific to the IPv6 CIDR.
 */
export declare class Ipv6Addresses {
    /**
     * Used for IPv6 address management with Amazon provided CIDRs.
     *
     * Note this is specific to the IPv6 CIDR.
     */
    static amazonProvided(): IIpv6Addresses;
    private constructor();
}
/**
 * Implementations for IPv6 address management.
 *
 * Note this is specific to the IPv6 CIDR.
 */
export interface IIpv6Addresses {
    /**
     * Whether the IPv6 CIDR is Amazon provided or not.
     *
     * Note this is specific to the IPv6 CIDR.
     */
    amazonProvided: boolean;
    /**
     * Called by VPC to allocate IPv6 CIDR.
     *
     * Note this is specific to the IPv6 CIDR.
     */
    allocateVpcIpv6Cidr(input: AllocateVpcIpv6CidrRequest): CfnVPCCidrBlock;
    /**
     * Split IPv6 CIDR block up for subnets.
     *
     * Note this is specific to the IPv6 CIDR.
     */
    createIpv6CidrBlocks(input: CreateIpv6CidrBlocksRequest): string[];
    /**
     * Allocates Subnets IPv6 CIDRs. Called by VPC when creating subnets with IPv6 enabled.
     *
     * Note this is specific to the IPv6 CIDR.
     */
    allocateSubnetsIpv6Cidr(input: AllocateIpv6CidrRequest): SubnetIpamOptions;
}
