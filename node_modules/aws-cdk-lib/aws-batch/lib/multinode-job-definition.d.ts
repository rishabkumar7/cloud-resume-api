import { Construct } from 'constructs';
import { IEcsContainerDefinition } from './ecs-container-definition';
import { IJobDefinition, JobDefinitionBase, JobDefinitionProps } from './job-definition-base';
import * as ec2 from '../../aws-ec2';
/**
 * Not a real instance type! Indicates that Batch will choose one it determines to be optimal
 * for the workload.
 */
export declare class OptimalInstanceType extends ec2.InstanceType {
    constructor();
}
interface IMultiNodeJobDefinition extends IJobDefinition {
    /**
     * The containers that this multinode job will run.
     *
     * @see https://aws.amazon.com/blogs/compute/building-a-tightly-coupled-molecular-dynamics-workflow-with-multi-node-parallel-jobs-in-aws-batch/
     */
    readonly containers: MultiNodeContainer[];
    /**
     * The instance type that this job definition will run
     *
     * @default - optimal instance, selected by Batch
     */
    readonly instanceType?: ec2.InstanceType;
    /**
     * The index of the main node in this job.
     * The main node is responsible for orchestration.
     *
     * @default 0
     */
    readonly mainNode?: number;
    /**
     * Whether to propogate tags from the JobDefinition
     * to the ECS task that Batch spawns
     *
     * @default false
     */
    readonly propagateTags?: boolean;
    /**
     * Add a container to this multinode job
     */
    addContainer(container: MultiNodeContainer): void;
}
/**
 * Runs the container on nodes [startNode, endNode]
 */
export interface MultiNodeContainer {
    /**
     * The index of the first node to run this container
     *
     * The container is run on all nodes in the range [startNode, endNode] (inclusive)
     */
    readonly startNode: number;
    /**
     * The index of the last node to run this container.
     *
     * The container is run on all nodes in the range [startNode, endNode] (inclusive)
     */
    readonly endNode: number;
    /**
     * The container that this node range will run
     */
    readonly container: IEcsContainerDefinition;
}
/**
 * Props to configure a MultiNodeJobDefinition
 */
export interface MultiNodeJobDefinitionProps extends JobDefinitionProps {
    /**
     * The instance type that this job definition
     * will run.
     *
     * @default - optimal instance, selected by Batch
     */
    readonly instanceType?: ec2.InstanceType;
    /**
     * The containers that this multinode job will run.
     *
     * @see https://aws.amazon.com/blogs/compute/building-a-tightly-coupled-molecular-dynamics-workflow-with-multi-node-parallel-jobs-in-aws-batch/
     *
     * @default none
     */
    readonly containers?: MultiNodeContainer[];
    /**
     * The index of the main node in this job.
     * The main node is responsible for orchestration.
     *
     * @default 0
     */
    readonly mainNode?: number;
    /**
     * Whether to propogate tags from the JobDefinition
     * to the ECS task that Batch spawns
     *
     * @default false
     */
    readonly propagateTags?: boolean;
}
/**
 * A JobDefinition that uses Ecs orchestration to run multiple containers
 *
 * @resource AWS::Batch::JobDefinition
 */
export declare class MultiNodeJobDefinition extends JobDefinitionBase implements IMultiNodeJobDefinition {
    /**
     * refer to an existing JobDefinition by its arn
     */
    static fromJobDefinitionArn(scope: Construct, id: string, jobDefinitionArn: string): IJobDefinition;
    readonly containers: MultiNodeContainer[];
    readonly mainNode?: number;
    readonly propagateTags?: boolean;
    readonly jobDefinitionArn: string;
    readonly jobDefinitionName: string;
    private readonly _instanceType?;
    constructor(scope: Construct, id: string, props?: MultiNodeJobDefinitionProps);
    /**
     * If the prop `instanceType` is left `undefined`, then this
     * will hold a fake instance type, for backwards compatibility reasons.
     */
    get instanceType(): ec2.InstanceType;
    addContainer(container: MultiNodeContainer): void;
}
export {};
