import { Construct } from 'constructs';
import { IResource, Resource } from '../../core';
/**
 * Scaling mode to use for this IP pool.
 *
 * @see https://docs.aws.amazon.com/ses/latest/dg/dedicated-ip.html
 */
export declare enum ScalingMode {
    /**
     * The customer controls which IPs are part of the dedicated IP pool.
     */
    STANDARD = "STANDARD",
    /**
     * The reputation and number of IPs are automatically managed by Amazon SES.
     */
    MANAGED = "MANAGED"
}
/**
 * A dedicated IP pool
 */
export interface IDedicatedIpPool extends IResource {
    /**
     * The name of the dedicated IP pool
     *
     * @attribute
     */
    readonly dedicatedIpPoolName: string;
}
/**
 * Properties for a dedicated IP pool
 */
export interface DedicatedIpPoolProps {
    /**
     * A name for the dedicated IP pool.
     *
     * The name must adhere to specific constraints: it can only include
     * lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-),
     * and must not exceed 64 characters in length.
     *
     * @default - a CloudFormation generated name
     */
    readonly dedicatedIpPoolName?: string;
    /**
     * The type of scailing mode to use for this IP pool
     *
     * Updating ScalingMode doesn't require a replacement if you're updating its value from `STANDARD` to `MANAGED`.
     * However, updating ScalingMode from `MANAGED` to `STANDARD` is not supported.
     *
     * @default ScalingMode.STANDARD
     */
    readonly scalingMode?: ScalingMode;
}
/**
 * A dedicated IP pool
 */
export declare class DedicatedIpPool extends Resource implements IDedicatedIpPool {
    /**
     * Use an existing dedicated IP pool
     */
    static fromDedicatedIpPoolName(scope: Construct, id: string, dedicatedIpPoolName: string): IDedicatedIpPool;
    readonly dedicatedIpPoolName: string;
    constructor(scope: Construct, id: string, props?: DedicatedIpPoolProps);
}
