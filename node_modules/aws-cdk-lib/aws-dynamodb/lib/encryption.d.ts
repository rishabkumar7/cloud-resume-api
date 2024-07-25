import { Construct } from 'constructs';
import { TableEncryption } from './shared';
import { IKey } from '../../aws-kms';
/**
 * Represents server-side encryption for a DynamoDB table.
 */
export declare abstract class TableEncryptionV2 {
    readonly type: TableEncryption;
    readonly tableKey?: IKey | undefined;
    readonly replicaKeyArns?: {
        [region: string]: string;
    } | undefined;
    /**
     * Configure server-side encryption using a DynamoDB owned key.
     */
    static dynamoOwnedKey(): TableEncryptionV2;
    /**
     * Configure server-side encryption using a DynamoDB owned key.
     */
    static awsManagedKey(): TableEncryptionV2;
    /**
     * Configure server-side encryption using customer managed keys.
     *
     * @param tableKey the KMS key for the primary table.
     * @param replicaKeyArns an object containing the ARN of the KMS key to use for each replica table.
     */
    static customerManagedKey(tableKey: IKey, replicaKeyArns?: {
        [region: string]: string;
    }): TableEncryptionV2;
    private constructor();
    /**
     * @internal
     */
    abstract _renderSseSpecification(): any;
    /**
     * @internal
     */
    abstract _renderReplicaSseSpecification(scope: Construct, region: string): any;
}
