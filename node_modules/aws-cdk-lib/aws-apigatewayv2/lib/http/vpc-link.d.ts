import { Construct } from 'constructs';
import * as ec2 from '../../../aws-ec2';
import { IResource, Resource } from '../../../core';
/**
 * Represents an API Gateway VpcLink
 */
export interface IVpcLink extends IResource {
    /**
     * Physical ID of the VpcLink resource
     * @attribute
     */
    readonly vpcLinkId: string;
    /**
     * The VPC to which this VPC Link is associated with.
     */
    readonly vpc: ec2.IVpc;
}
/**
 * Properties for a VpcLink
 */
export interface VpcLinkProps {
    /**
     * The VPC in which the private resources reside.
     */
    readonly vpc: ec2.IVpc;
    /**
     * The name used to label and identify the VPC link.
     * @default - automatically generated name
     */
    readonly vpcLinkName?: string;
    /**
     * A list of subnets for the VPC link.
     *
     * @default - private subnets of the provided VPC. Use `addSubnets` to add more subnets
     */
    readonly subnets?: ec2.SubnetSelection;
    /**
     * A list of security groups for the VPC link.
     *
     * @default - no security groups. Use `addSecurityGroups` to add security groups
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
}
/**
 * Attributes when importing a new VpcLink
 */
export interface VpcLinkAttributes {
    /**
     * The VPC Link id
     */
    readonly vpcLinkId: string;
    /**
     * The VPC to which this VPC link is associated with.
     */
    readonly vpc: ec2.IVpc;
}
/**
 * Define a new VPC Link
 * Specifies an API Gateway VPC link for a HTTP API to access resources in an Amazon Virtual Private Cloud (VPC).
 */
export declare class VpcLink extends Resource implements IVpcLink {
    /**
     * Import a VPC Link by specifying its attributes.
     */
    static fromVpcLinkAttributes(scope: Construct, id: string, attrs: VpcLinkAttributes): IVpcLink;
    readonly vpcLinkId: string;
    readonly vpc: ec2.IVpc;
    private readonly subnets;
    private readonly securityGroups;
    constructor(scope: Construct, id: string, props: VpcLinkProps);
    /**
     * Adds the provided subnets to the vpc link
     *
     * @param subnets
     */
    addSubnets(...subnets: ec2.ISubnet[]): void;
    /**
     * Adds the provided security groups to the vpc link
     *
     * @param groups
     */
    addSecurityGroups(...groups: ec2.ISecurityGroup[]): void;
    private renderSubnets;
    private renderSecurityGroups;
}
