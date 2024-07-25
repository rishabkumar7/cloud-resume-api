import { IPredefinedDeploymentConfig } from './predefined-deployment-config';
import * as cloudwatch from '../../../aws-cloudwatch';
import { Stack, IResource } from '../../../core';
import { IBaseDeploymentConfig } from '../base-deployment-config';
import { CfnDeploymentGroup } from '../codedeploy.generated';
import { AutoRollbackConfig } from '../rollback-config';
export declare function arnForApplication(stack: Stack, applicationName: string): string;
export declare function nameFromDeploymentGroupArn(deploymentGroupArn: string): string;
export declare function arnForDeploymentConfig(name: string, resource?: IResource): string;
export interface renderAlarmConfigProps {
    /**
     * Array of Cloudwatch alarms
     */
    readonly alarms: cloudwatch.IAlarm[];
    /**
     * Whether to ignore failure to fetch the status of alarms from CloudWatch
     */
    readonly ignorePollAlarmFailure?: boolean;
    /**
     * When no alarms are provided on an update, removes previously existing alarms from the construct.
     * @see {@link https://github.com/aws/aws-cdk/blob/main/packages/%40aws-cdk/cx-api/FEATURE_FLAGS.md#aws-cdkaws-codedeployremovealarmsfromdeploymentgroup}
     *
     * @default true
     */
    readonly removeAlarms?: boolean;
    /**
     * Whether to skip the step of checking CloudWatch alarms during the deployment process
     *
     * @default false
     */
    ignoreAlarmConfiguration?: boolean;
}
export declare function renderAlarmConfiguration(props: renderAlarmConfigProps): CfnDeploymentGroup.AlarmConfigurationProperty | undefined;
export declare function deploymentConfig(name: string): IBaseDeploymentConfig & IPredefinedDeploymentConfig;
export declare function renderAutoRollbackConfiguration(alarms: cloudwatch.IAlarm[], autoRollbackConfig?: AutoRollbackConfig): CfnDeploymentGroup.AutoRollbackConfigurationProperty | undefined;
export declare function validateName(type: 'Application' | 'Deployment group' | 'Deployment config', name: string): string[];
