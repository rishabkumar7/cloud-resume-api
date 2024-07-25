import { CfnDeploymentConfig } from './codedeploy.generated';
/**
 * Minimum number of healthy hosts for a server deployment.
 */
export declare class MinimumHealthyHosts {
    private readonly json;
    /**
     * The minimum healthy hosts threshold expressed as an absolute number.
     */
    static count(value: number): MinimumHealthyHosts;
    /**
     * The minimum healthy hosts threshold expressed as a percentage of the fleet.
     */
    static percentage(value: number): MinimumHealthyHosts;
    private constructor();
    /**
     * @internal
     */
    get _json(): CfnDeploymentConfig.MinimumHealthyHostsProperty;
}
/**
 * Minimum number of healthy hosts per availability zone for a server deployment.
 */
export declare class MinimumHealthyHostsPerZone {
    private readonly json;
    /**
     * The minimum healthy hosts threshold expressed as an absolute number.
     */
    static count(value: number): MinimumHealthyHostsPerZone;
    /**
     * The minimum healthy hosts threshold expressed as a percentage of the fleet.
     */
    static percentage(value: number): MinimumHealthyHostsPerZone;
    private constructor();
    /**
     * @internal
     */
    get _json(): CfnDeploymentConfig.MinimumHealthyHostsProperty;
}
