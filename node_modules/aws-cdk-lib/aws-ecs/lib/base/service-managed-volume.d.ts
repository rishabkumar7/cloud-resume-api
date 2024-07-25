import { Construct } from 'constructs';
import * as ec2 from '../../../aws-ec2';
import * as iam from '../../../aws-iam';
import * as kms from '../../../aws-kms';
import { Size } from '../../../core';
import { BaseMountPoint, ContainerDefinition } from '../container-definition';
/**
* Represents the Volume configuration for an ECS service.
*/
export interface ServiceManagedVolumeProps {
    /**
    * The name of the volume. This corresponds to the name provided in the ECS TaskDefinition.
    */
    readonly name: string;
    /**
    * Configuration for an Amazon Elastic Block Store (EBS) volume managed by ECS.
    *
    * @default - undefined
    */
    readonly managedEBSVolume?: ServiceManagedEBSVolumeConfiguration;
}
/**
* Represents the configuration for an ECS Service managed EBS volume.
*/
export interface ServiceManagedEBSVolumeConfiguration {
    /**
    * An IAM role that allows ECS to make calls to EBS APIs on your behalf.
    * This role is required to create and manage the Amazon EBS volume.
    *
    * @default - automatically generated role.
    */
    readonly role?: iam.IRole;
    /**
     * Indicates whether the volume should be encrypted.
     *
     * @default - Default Amazon EBS encryption.
     */
    readonly encrypted?: boolean;
    /**
     * AWS Key Management Service key to use for Amazon EBS encryption.
     *
     * @default - When `encryption` is turned on and no `kmsKey` is specified,
     * the default AWS managed key for Amazon EBS volumes is used.
     */
    readonly kmsKeyId?: kms.IKey;
    /**
     * The volume type.
     *
     * @default - ec2.EbsDeviceVolumeType.GP2
     */
    readonly volumeType?: ec2.EbsDeviceVolumeType;
    /**
     * The size of the volume in GiB.
     *
     * You must specify either `size` or `snapshotId`.
     * You can optionally specify a volume size greater than or equal to the snapshot size.
     *
     * The following are the supported volume size values for each volume type.
     *   - gp2 and gp3: 1-16,384
     *   - io1 and io2: 4-16,384
     *   - st1 and sc1: 125-16,384
     *   - standard: 1-1,024
     *
     * @default - The snapshot size is used for the volume size if you specify `snapshotId`,
     * otherwise this parameter is required.
     */
    readonly size?: Size;
    /**
     * The snapshot that Amazon ECS uses to create the volume.
     *
     * You must specify either `size` or `snapshotId`.
     *
     * @default - No snapshot.
     */
    readonly snapShotId?: string;
    /**
     * The number of I/O operations per second (IOPS).
     *
     * For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned
     * for the volume. For gp2 volumes, this represents the baseline performance of the volume
     * and the rate at which the volume accumulates I/O credits for bursting.
     *
     * The following are the supported values for each volume type.
     *   - gp3: 3,000 - 16,000 IOPS
     *   - io1: 100 - 64,000 IOPS
     *   - io2: 100 - 256,000 IOPS
     *
     * This parameter is required for io1 and io2 volume types. The default for gp3 volumes is
     * 3,000 IOPS. This parameter is not supported for st1, sc1, or standard volume types.
     *
     * @default - undefined
     */
    readonly iops?: number;
    /**
     * The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s.
     *
     * This parameter is only supported for the gp3 volume type.
     *
     * @default - No throughput.
     */
    readonly throughput?: number;
    /**
     * The Linux filesystem type for the volume.
     *
     * For volumes created from a snapshot, you must specify the same filesystem type that
     * the volume was using when the snapshot was created.
     * The available filesystem types are ext3, ext4, and xfs.
     *
     * @default - FileSystemType.XFS
     */
    readonly fileSystemType?: FileSystemType;
    /**
    * Specifies the tags to apply to the volume and whether to propagate those tags to the volume.
    *
    * @default - No tags are specified.
    */
    readonly tagSpecifications?: EBSTagSpecification[];
}
/**
 *  Tag Specification for EBS volume.
 */
export interface EBSTagSpecification {
    /**
    * The tags to apply to the volume.
    *
    * @default - No tags
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Specifies whether to propagate the tags from the task definition or the service to the task.
    * Valid values are: PropagatedTagSource.SERVICE, PropagatedTagSource.TASK_DEFINITION
    *
    * @default - undefined
    */
    readonly propagateTags?: EbsPropagatedTagSource;
}
/**
 * FileSystemType for Service Managed EBS Volume Configuration.
 */
export declare enum FileSystemType {
    /**
     * ext3 type
     */
    EXT3 = "ext3",
    /**
     * ext4 type
     */
    EXT4 = "ext4",
    /**
     * xfs type
     */
    XFS = "xfs"
}
/**
 * Propagate tags for EBS Volume Configuration from either service or task definition.
 */
export declare enum EbsPropagatedTagSource {
    /**
     * SERVICE
     */
    SERVICE = "SERVICE",
    /**
     * TASK_DEFINITION
     */
    TASK_DEFINITION = "TASK_DEFINITION"
}
/**
 * Defines the mount point details for attaching a volume to a container.
 */
export interface ContainerMountPoint extends BaseMountPoint {
}
/**
 * Represents a service-managed volume and always configured at launch.
 */
export declare class ServiceManagedVolume extends Construct {
    /**
    * Name of the volume, referenced by taskdefintion and mount point.
    */
    readonly name: string;
    /**
    * Volume configuration
    */
    readonly config?: ServiceManagedEBSVolumeConfiguration;
    /**
     * configuredAtLaunch indicates volume at launch time, referenced by taskdefinition volume.
     */
    readonly configuredAtLaunch: boolean;
    /**
     * An IAM role that allows ECS to make calls to EBS APIs.
     * If not provided, a new role with appropriate permissions will be created by default.
     */
    readonly role: iam.IRole;
    constructor(scope: Construct, id: string, props: ServiceManagedVolumeProps);
    /**
     *  Mounts the service managed volume to a specified container at a defined mount point.
     * @param container The container to mount the volume on.
     * @param mountPoint The mounting point details within the container.
     */
    mountIn(container: ContainerDefinition, mountPoint: ContainerMountPoint): void;
    private validateEbsVolumeConfiguration;
}
