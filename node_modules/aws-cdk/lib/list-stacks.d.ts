import '@jsii/check-node/run';
import { Environment } from '@aws-cdk/cx-api';
import { CdkToolkit } from './cdk-toolkit';
/**
 * Options for List Stacks
 */
export interface ListStacksOptions {
    /**
     * Stacks to list
     *
     * @default - All stacks are listed
     */
    readonly selectors: string[];
}
/**
 * Type to store stack dependencies recursively
 */
export type DependencyDetails = {
    id: string;
    dependencies: DependencyDetails[];
};
/**
 * Type to store stack and their dependencies
 */
export type StackDetails = {
    id: string;
    name: string;
    environment: Environment;
    dependencies: DependencyDetails[];
};
/**
 * List Stacks
 *
 * @param toolkit cdk toolkit
 * @param options list stacks options
 * @returns StackDetails[]
 */
export declare function listStacks(toolkit: CdkToolkit, options: ListStacksOptions): Promise<StackDetails[]>;
