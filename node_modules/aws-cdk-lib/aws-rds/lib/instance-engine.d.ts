import { Construct } from 'constructs';
import { IEngine } from './engine';
import { IOptionGroup } from './option-group';
import * as iam from '../../aws-iam';
import * as secretsmanager from '../../aws-secretsmanager';
/**
 * The options passed to `IInstanceEngine.bind`.
 */
export interface InstanceEngineBindOptions {
    /**
     * The Active Directory directory ID to create the DB instance in.
     *
     * @default - none (it's an optional field)
     */
    readonly domain?: string;
    /**
     * The timezone of the database, set by the customer.
     *
     * @default - none (it's an optional field)
     */
    readonly timezone?: string;
    /**
     * The role used for S3 importing.
     *
     * @default - none
     */
    readonly s3ImportRole?: iam.IRole;
    /**
     * The role used for S3 exporting.
     *
     * @default - none
     */
    readonly s3ExportRole?: iam.IRole;
    /**
     * The option group of the database
     *
     * @default - none
     */
    readonly optionGroup?: IOptionGroup;
}
/**
 * The type returned from the `IInstanceEngine.bind` method.
 */
export interface InstanceEngineConfig {
    /**
     * Features supported by the database engine.
     *
     * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html
     *
     * @default - no features
     */
    readonly features?: InstanceEngineFeatures;
    /**
     * Option group of the database.
     *
     * @default - none
     */
    readonly optionGroup?: IOptionGroup;
}
/**
 * Represents Database Engine features
 */
export interface InstanceEngineFeatures {
    /**
     * Feature name for the DB instance that the IAM role to access the S3 bucket for import
     * is to be associated with.
     *
     * @default - no s3Import feature name
     */
    readonly s3Import?: string;
    /**
     * Feature name for the DB instance that the IAM role to export to S3 bucket is to be
     * associated with.
     *
     * @default - no s3Export feature name
     */
    readonly s3Export?: string;
}
/**
 * Interface representing a database instance (as opposed to cluster) engine.
 */
export interface IInstanceEngine extends IEngine {
    /** The application used by this engine to perform rotation for a single-user scenario. */
    readonly singleUserRotationApplication: secretsmanager.SecretRotationApplication;
    /** The application used by this engine to perform rotation for a multi-user scenario. */
    readonly multiUserRotationApplication: secretsmanager.SecretRotationApplication;
    /**
     * Whether this engine supports automatic backups of a read replica instance.
     *
     * @default false
     */
    readonly supportsReadReplicaBackups?: boolean;
    /**
     * Method called when the engine is used to create a new instance.
     */
    bindToInstance(scope: Construct, options: InstanceEngineBindOptions): InstanceEngineConfig;
}
/**
 * The versions for the MariaDB instance engines
 * (those returned by `DatabaseInstanceEngine.mariaDb`).
 */
export declare class MariaDbEngineVersion {
    /**
     * Version "10.2" (only a major version, without a specific minor version)
     * @deprecated MariaDB 10.2 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_2: MariaDbEngineVersion;
    /**
     * Version "10.2.11".
     * @deprecated MariaDB 10.2 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_2_11: MariaDbEngineVersion;
    /**
     * Version "10.2.12".
     * @deprecated MariaDB 10.2 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_2_12: MariaDbEngineVersion;
    /**
     * Version "10.2.15".
     * @deprecated MariaDB 10.2 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_2_15: MariaDbEngineVersion;
    /**
     * Version "10.2.21".
     * @deprecated MariaDB 10.2 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_2_21: MariaDbEngineVersion;
    /**
     * Version "10.2.32".
     * @deprecated MariaDB 10.2 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_2_32: MariaDbEngineVersion;
    /**
     * Version "10.2.37".
     * @deprecated MariaDB 10.2 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_2_37: MariaDbEngineVersion;
    /**
     * Version "10.2.39".
     * @deprecated MariaDB 10.2 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_2_39: MariaDbEngineVersion;
    /**
     * Version "10.2.40".
     * @deprecated MariaDB 10.2 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_2_40: MariaDbEngineVersion;
    /**
     * Version "10.2.41".
     * @deprecated MariaDB 10.2 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_2_41: MariaDbEngineVersion;
    /**
     * Version "10.2.43"
     * @deprecated MariaDB 10.2.43 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_2_43: MariaDbEngineVersion;
    /**
     * Version "10.2.44"
     * @deprecated MariaDB 10.2.44 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_2_44: MariaDbEngineVersion;
    /**
     * Version "10.3" (only a major version, without a specific minor version).
     * @deprecated MariaDB 10.3 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3: MariaDbEngineVersion;
    /**
     * Version "10.3.8"
     * @deprecated MariaDB 10.3.8 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_8: MariaDbEngineVersion;
    /**
     * Version "10.3.13"
     * @deprecated MariaDB 10.3.13 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_13: MariaDbEngineVersion;
    /**
     * Version "10.3.20"
     * @deprecated MariaDB 10.3.20 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_20: MariaDbEngineVersion;
    /**
     * Version "10.3.23"
     * @deprecated MariaDB 10.3.23 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_23: MariaDbEngineVersion;
    /**
     * Version "10.3.28"
     * @deprecated MariaDB 10.3.28 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_28: MariaDbEngineVersion;
    /**
     * Version "10.3.31"
     * @deprecated MariaDB 10.3.31 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_31: MariaDbEngineVersion;
    /**
     * Version "10.3.32"
     * @deprecated MariaDB 10.3.32 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_32: MariaDbEngineVersion;
    /**
     * Version "10.3.34"
     * @deprecated MariaDB 10.3.34 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_34: MariaDbEngineVersion;
    /**
     * Version "10.3.35"
     * @deprecated MariaDB 10.3.35 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_35: MariaDbEngineVersion;
    /**
     * Version "10.3.36"
     * @deprecated MariaDB 10.3.36 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_36: MariaDbEngineVersion;
    /**
     * Version "10.3.37"
     * @deprecated MariaDB 10.3.37 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_37: MariaDbEngineVersion;
    /**
     * Version "10.3.38"
     * @deprecated MariaDB 10.3.38 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_38: MariaDbEngineVersion;
    /**
     * Version "10.3.39"
     * @deprecated MariaDB 10.3.39 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_3_39: MariaDbEngineVersion;
    /** Version "10.4" (only a major version, without a specific minor version). */
    static readonly VER_10_4: MariaDbEngineVersion;
    /**
     * Version "10.4.8"
     * @deprecated MariaDB 10.4.8 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_4_8: MariaDbEngineVersion;
    /**
     * Version "10.4.13"
     * @deprecated MariaDB 10.4.13 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_4_13: MariaDbEngineVersion;
    /**
     * Version "10.4.18"
     * @deprecated MariaDB 10.4.18 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_4_18: MariaDbEngineVersion;
    /**
     * Version "10.4.21"
     * @deprecated MariaDB 10.4.21 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_4_21: MariaDbEngineVersion;
    /**
     * Version "10.4.22"
     * @deprecated MariaDB 10.4.22 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_4_22: MariaDbEngineVersion;
    /**
     * Version "10.4.24"
     * @deprecated MariaDB 10.4.24 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_4_24: MariaDbEngineVersion;
    /**
     * Version "10.4.25"
     * @deprecated MariaDB 10.4.25 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_4_25: MariaDbEngineVersion;
    /**
     * Version "10.4.26"
     * @deprecated MariaDB 10.4.26 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_4_26: MariaDbEngineVersion;
    /**
     * Version "10.4.27"
     * @deprecated MariaDB 10.4.27 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_4_27: MariaDbEngineVersion;
    /**
     * Version "10.4.28"
     * @deprecated MariaDB 10.4.28 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_4_28: MariaDbEngineVersion;
    /** Version "10.4.29". */
    static readonly VER_10_4_29: MariaDbEngineVersion;
    /** Version "10.4.30". */
    static readonly VER_10_4_30: MariaDbEngineVersion;
    /** Version "10.4.31". */
    static readonly VER_10_4_31: MariaDbEngineVersion;
    /** Version "10.4.32". */
    static readonly VER_10_4_32: MariaDbEngineVersion;
    /** Version "10.4.33". */
    static readonly VER_10_4_33: MariaDbEngineVersion;
    /** Version "10.4.34". */
    static readonly VER_10_4_34: MariaDbEngineVersion;
    /** Version "10.5" (only a major version, without a specific minor version). */
    static readonly VER_10_5: MariaDbEngineVersion;
    /**
     * Version "10.5.8"
     * @deprecated MariaDB 10.5.8 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_5_8: MariaDbEngineVersion;
    /**
     * Version "10.5.9"
     * @deprecated MariaDB 10.5.9 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_5_9: MariaDbEngineVersion;
    /**
     * Version "10.5.12"
     * @deprecated MariaDB 10.5.12 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_5_12: MariaDbEngineVersion;
    /**
     * Version "10.5.13"
     * @deprecated MariaDB 10.5.13 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_5_13: MariaDbEngineVersion;
    /**
     * Version "10.5.15"
     * @deprecated MariaDB 10.5.15 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_5_15: MariaDbEngineVersion;
    /**
     * Version "10.5.16"
     * @deprecated MariaDB 10.5.16 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_5_16: MariaDbEngineVersion;
    /**
     * Version "10.5.17"
     * @deprecated MariaDB 10.5.17 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_5_17: MariaDbEngineVersion;
    /**
     * Version "10.5.18"
     * @deprecated MariaDB 10.5.18 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_5_18: MariaDbEngineVersion;
    /**
     * Version "10.5.19"
     * @deprecated MariaDB 10.5.19 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_5_19: MariaDbEngineVersion;
    /** Version "10.5.20". */
    static readonly VER_10_5_20: MariaDbEngineVersion;
    /** Version "10.5.21". */
    static readonly VER_10_5_21: MariaDbEngineVersion;
    /** Version "10.5.22". */
    static readonly VER_10_5_22: MariaDbEngineVersion;
    /** Version "10.5.23". */
    static readonly VER_10_5_23: MariaDbEngineVersion;
    /** Version "10.5.24". */
    static readonly VER_10_5_24: MariaDbEngineVersion;
    /** Version "10.5.25". */
    static readonly VER_10_5_25: MariaDbEngineVersion;
    /** Version "10.6" (only a major version, without a specific minor version). */
    static readonly VER_10_6: MariaDbEngineVersion;
    /**
     * Version "10.6.5"
     * @deprecated MariaDB 10.6.5 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_6_5: MariaDbEngineVersion;
    /**
     * Version "10.6.7"
     * @deprecated MariaDB 10.6.7 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_6_7: MariaDbEngineVersion;
    /**
     * Version "10.6.8"
     * @deprecated MariaDB 10.6.8 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_6_8: MariaDbEngineVersion;
    /**
     * Version "10.6.10"
     * @deprecated MariaDB 10.6.10 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_6_10: MariaDbEngineVersion;
    /**
     * Version "10.6.11"
     * @deprecated MariaDB 10.6.11 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_6_11: MariaDbEngineVersion;
    /**
     * Version "10.6.12"
     * @deprecated MariaDB 10.6.12 is no longer supported by Amazon RDS.
     */
    static readonly VER_10_6_12: MariaDbEngineVersion;
    /** Version "10.6.13". */
    static readonly VER_10_6_13: MariaDbEngineVersion;
    /** Version "10.6.14". */
    static readonly VER_10_6_14: MariaDbEngineVersion;
    /** Version "10.6.15". */
    static readonly VER_10_6_15: MariaDbEngineVersion;
    /** Version "10.6.16". */
    static readonly VER_10_6_16: MariaDbEngineVersion;
    /** Version "10.6.17". */
    static readonly VER_10_6_17: MariaDbEngineVersion;
    /** Version "10.6.18". */
    static readonly VER_10_6_18: MariaDbEngineVersion;
    /** Version "10.11" (only a major version, without a specific minor version). */
    static readonly VER_10_11: MariaDbEngineVersion;
    /** Version "10.11.4". */
    static readonly VER_10_11_4: MariaDbEngineVersion;
    /** Version "10.11.5". */
    static readonly VER_10_11_5: MariaDbEngineVersion;
    /** Version "10.11.6". */
    static readonly VER_10_11_6: MariaDbEngineVersion;
    /** Version "10.11.7". */
    static readonly VER_10_11_7: MariaDbEngineVersion;
    /** Version "10.11.8". */
    static readonly VER_10_11_8: MariaDbEngineVersion;
    /**
     * Create a new MariaDbEngineVersion with an arbitrary version.
     *
     * @param mariaDbFullVersion the full version string,
     *   for example "10.5.28"
     * @param mariaDbMajorVersion the major version of the engine,
     *   for example "10.5"
     */
    static of(mariaDbFullVersion: string, mariaDbMajorVersion: string): MariaDbEngineVersion;
    /** The full version string, for example, "10.5.28". */
    readonly mariaDbFullVersion: string;
    /** The major version of the engine, for example, "10.5". */
    readonly mariaDbMajorVersion: string;
    private constructor();
}
/**
 * Properties for MariaDB instance engines.
 * Used in `DatabaseInstanceEngine.mariaDb`.
 */
export interface MariaDbInstanceEngineProps {
    /** The exact version of the engine to use. */
    readonly version: MariaDbEngineVersion;
}
/**
 * The versions for the MySQL instance engines
 * (those returned by `DatabaseInstanceEngine.mysql`).
 */
export declare class MysqlEngineVersion {
    /**
     * Version "5.5.54"
     * @deprecated MySQL 5.5.54 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_5_54: MysqlEngineVersion;
    /** Version "5.7" (only a major version, without a specific minor version). */
    static readonly VER_5_7: MysqlEngineVersion;
    /**
     * Version "5.7.16"
     * @deprecated MySQL 5.7.16 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_16: MysqlEngineVersion;
    /**
     * Version "5.7.17"
     * @deprecated MySQL 5.7.17 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_17: MysqlEngineVersion;
    /**
     * Version "5.7.19"
     * @deprecated MySQL 5.7.19 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_19: MysqlEngineVersion;
    /**
     * Version "5.7.21"
     * @deprecated MySQL 5.7.21 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_21: MysqlEngineVersion;
    /**
     * Version "5.7.22"
     * @deprecated MySQL 5.7.22 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_22: MysqlEngineVersion;
    /**
     * Version "5.7.23"
     * @deprecated MySQL 5.7.23 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_23: MysqlEngineVersion;
    /**
     * Version "5.7.24"
     * @deprecated MySQL 5.7.24 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_24: MysqlEngineVersion;
    /**
     * Version "5.7.25"
     * @deprecated MySQL 5.7.25 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_25: MysqlEngineVersion;
    /**
     * Version "5.7.26"
     * @deprecated MySQL 5.7.26 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_26: MysqlEngineVersion;
    /**
     * Version "5.7.28"
     * @deprecated MySQL 5.7.28 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_28: MysqlEngineVersion;
    /**
     * Version "5.7.30"
     * @deprecated MySQL 5.7.30 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_30: MysqlEngineVersion;
    /**
     * Version "5.7.31"
     * @deprecated MySQL 5.7.31 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_31: MysqlEngineVersion;
    /**
     * Version "5.7.33"
     * @deprecated MySQL 5.7.33 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_33: MysqlEngineVersion;
    /**
     * Version "5.7.34"
     * @deprecated MySQL 5.7.34 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_34: MysqlEngineVersion;
    /**
     * Version "5.7.35"
     * @deprecated MySQL 5.7.35 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_35: MysqlEngineVersion;
    /**
     * Version "5.7.36"
     * @deprecated MySQL 5.7.36 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_36: MysqlEngineVersion;
    /**
     * Version "5.7.37"
     * @deprecated MySQL 5.7.37 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_37: MysqlEngineVersion;
    /**
     * Version "5.7.38"
     * @deprecated MySQL 5.7.38 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_38: MysqlEngineVersion;
    /**
     * Version "5.7.39"
     * @deprecated MySQL 5.7.39 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_39: MysqlEngineVersion;
    /**
     * Version "5.7.40"
     * @deprecated MySQL 5.7.40 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_40: MysqlEngineVersion;
    /**
     * Version "5.7.41"
     * @deprecated MySQL 5.7.41 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_41: MysqlEngineVersion;
    /**
     * Version "5.7.42"
     * @deprecated MySQL 5.7.42 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_42: MysqlEngineVersion;
    /**
     * Version "5.7.43"
     * @deprecated MySQL 5.7.43 is no longer supported by Amazon RDS.
     */
    static readonly VER_5_7_43: MysqlEngineVersion;
    /** Version "5.7.44". */
    static readonly VER_5_7_44: MysqlEngineVersion;
    /** Version "5.7.44-rds.20240408". */
    static readonly VER_5_7_44_RDS_20240408: MysqlEngineVersion;
    /** Version "5.7.44-rds.20240529". */
    static readonly VER_5_7_44_RDS_20240529: MysqlEngineVersion;
    /** Version "8.0" (only a major version, without a specific minor version). */
    static readonly VER_8_0: MysqlEngineVersion;
    /**
     * Version "8.0.11"
     * @deprecated MySQL 8.0.11 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_11: MysqlEngineVersion;
    /**
     * Version "8.0.13"
     * @deprecated MySQL 8.0.13 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_13: MysqlEngineVersion;
    /**
     * Version "8.0.15"
     * @deprecated MySQL 8.0.15 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_15: MysqlEngineVersion;
    /**
     * Version "8.0.16"
     * @deprecated MySQL 8.0.16 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_16: MysqlEngineVersion;
    /**
     * Version "8.0.17"
     * @deprecated MySQL 8.0.17 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_17: MysqlEngineVersion;
    /**
     * Version "8.0.19"
     * @deprecated MySQL 8.0.19 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_19: MysqlEngineVersion;
    /**
     * Version "8.0.20"
     * @deprecated MySQL 8.0.20 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_20: MysqlEngineVersion;
    /**
     * Version "8.0.21"
     * @deprecated MySQL 8.0.21 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_21: MysqlEngineVersion;
    /**
     * Version "8.0.23"
     * @deprecated MySQL 8.0.23 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_23: MysqlEngineVersion;
    /**
     * Version "8.0.25"
     * @deprecated MySQL 8.0.25 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_25: MysqlEngineVersion;
    /**
     * Version "8.0.26"
     * @deprecated MySQL 8.0.26 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_26: MysqlEngineVersion;
    /**
     * Version "8.0.27"
     * @deprecated MySQL 8.0.27 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_27: MysqlEngineVersion;
    /**
     * Version "8.0.28"
     * @deprecated MySQL 8.0.28 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_28: MysqlEngineVersion;
    /**
     * Version "8.0.29"
     * @deprecated MySQL 8.0.29 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_29: MysqlEngineVersion;
    /**
     * Version "8.0.30"
     * @deprecated MySQL 8.0.30 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_30: MysqlEngineVersion;
    /**
     * Version "8.0.31"
     * @deprecated MySQL 8.0.31 is no longer supported by Amazon RDS.
     */
    static readonly VER_8_0_31: MysqlEngineVersion;
    /** Version "8.0.32". */
    static readonly VER_8_0_32: MysqlEngineVersion;
    /** Version "8.0.33". */
    static readonly VER_8_0_33: MysqlEngineVersion;
    /** Version "8.0.34". */
    static readonly VER_8_0_34: MysqlEngineVersion;
    /** Version "8.0.35". */
    static readonly VER_8_0_35: MysqlEngineVersion;
    /** Version "8.0.36". */
    static readonly VER_8_0_36: MysqlEngineVersion;
    /** Version "8.0.37". */
    static readonly VER_8_0_37: MysqlEngineVersion;
    /**
     * Create a new MysqlEngineVersion with an arbitrary version.
     *
     * @param mysqlFullVersion the full version string,
     *   for example "8.1.43"
     * @param mysqlMajorVersion the major version of the engine,
     *   for example "8.1"
     */
    static of(mysqlFullVersion: string, mysqlMajorVersion: string): MysqlEngineVersion;
    /** The full version string, for example, "10.5.28". */
    readonly mysqlFullVersion: string;
    /** The major version of the engine, for example, "10.5". */
    readonly mysqlMajorVersion: string;
    private constructor();
}
/**
 * Properties for MySQL instance engines.
 * Used in `DatabaseInstanceEngine.mysql`.
 */
export interface MySqlInstanceEngineProps {
    /** The exact version of the engine to use. */
    readonly version: MysqlEngineVersion;
}
/**
 * Features supported by the Postgres database engine
 */
export interface PostgresEngineFeatures {
    /**
     * Whether this version of the Postgres engine supports the S3 data import feature.
     *
     * @default false
     */
    readonly s3Import?: boolean;
    /**
     * Whether this version of the Postgres engine supports the S3 data export feature.
     *
     * @default false
     */
    readonly s3Export?: boolean;
}
/**
 * The versions for the PostgreSQL instance engines
 * (those returned by `DatabaseInstanceEngine.postgres`).
 */
export declare class PostgresEngineVersion {
    /**
     * Version "9.6.24".
     * @deprecated PostgreSQL 9.6 is no longer supported by Amazon RDS.
    */
    static readonly VER_9_6_24: PostgresEngineVersion;
    /**
     * Version "10" (only a major version, without a specific minor version).
     * @deprecated PostgreSQL 10 is no longer supported by Amazon RDS.
    */
    static readonly VER_10: PostgresEngineVersion;
    /**
     * Version "10.1".
     * @deprecated PostgreSQL 10 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_1: PostgresEngineVersion;
    /**
     * Version "10.3".
     * @deprecated PostgreSQL 10.3 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_3: PostgresEngineVersion;
    /**
     * Version "10.4".
     * @deprecated PostgreSQL 10.4 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_4: PostgresEngineVersion;
    /**
     * Version "10.5".
     * @deprecated PostgreSQL 10.5 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_5: PostgresEngineVersion;
    /**
     * Version "10.6".
     * @deprecated PostgreSQL 10.6 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_6: PostgresEngineVersion;
    /**
     * Version "10.7".
     * @deprecated PostgreSQL 10.7 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_7: PostgresEngineVersion;
    /**
     * Version "10.9".
     * @deprecated PostgreSQL 10.9 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_9: PostgresEngineVersion;
    /**
     * Version "10.10".
     * @deprecated PostgreSQL 10.10 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_10: PostgresEngineVersion;
    /**
     * Version "10.11".
     * @deprecated PostgreSQL 10.11 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_11: PostgresEngineVersion;
    /**
     * Version "10.12".
     * @deprecated PostgreSQL 10.12 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_12: PostgresEngineVersion;
    /**
     * Version "10.13".
     * @deprecated PostgreSQL 10.13 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_13: PostgresEngineVersion;
    /**
     * Version "10.14".
     * @deprecated PostgreSQL 10.14 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_14: PostgresEngineVersion;
    /**
     * Version "10.15".
     * @deprecated PostgreSQL 10.15 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_15: PostgresEngineVersion;
    /**
     * Version "10.16".
     * @deprecated PostgreSQL 10.16 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_16: PostgresEngineVersion;
    /**
     * Version "10.17".
     * @deprecated PostgreSQL 10.17 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_17: PostgresEngineVersion;
    /**
     * Version "10.18".
     * @deprecated PostgreSQL 10.18 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_18: PostgresEngineVersion;
    /**
     * Version "10.19".
     * @deprecated PostgreSQL 10.19 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_19: PostgresEngineVersion;
    /**
     * Version "10.20".
     * @deprecated PostgreSQL 10.20 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_20: PostgresEngineVersion;
    /**
     * Version "10.21".
     * @deprecated PostgreSQL 10.21 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_21: PostgresEngineVersion;
    /**
     * Version "10.22".
     * @deprecated PostgreSQL 10.22 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_22: PostgresEngineVersion;
    /**
     * Version "10.23".
     * @deprecated PostgreSQL 10.23 is no longer supported by Amazon RDS.
    */
    static readonly VER_10_23: PostgresEngineVersion;
    /** Version "11" (only a major version, without a specific minor version). */
    static readonly VER_11: PostgresEngineVersion;
    /**
     * Version "11.1".
     * @deprecated PostgreSQL 11.1 is no longer supported by Amazon RDS.
    */
    static readonly VER_11_1: PostgresEngineVersion;
    /**
     * Version "11.2".
     * @deprecated PostgreSQL 11.2 is no longer supported by Amazon RDS.
    */
    static readonly VER_11_2: PostgresEngineVersion;
    /**
     * Version "11.4".
     * @deprecated PostgreSQL 11.4 is no longer supported by Amazon RDS.
    */
    static readonly VER_11_4: PostgresEngineVersion;
    /**
     * Version "11.5".
     * @deprecated PostgreSQL 11.5 is no longer supported by Amazon RDS.
    */
    static readonly VER_11_5: PostgresEngineVersion;
    /**
     * Version "11.6".
     * @deprecated PostgreSQL 11.6 is no longer supported by Amazon RDS.
    */
    static readonly VER_11_6: PostgresEngineVersion;
    /**
     * Version "11.7".
     * @deprecated PostgreSQL 11.7 is no longer supported by Amazon RDS.
    */
    static readonly VER_11_7: PostgresEngineVersion;
    /**
     * Version "11.8".
     * @deprecated PostgreSQL 11.8 is no longer supported by Amazon RDS.
    */
    static readonly VER_11_8: PostgresEngineVersion;
    /**
     * Version "11.9".
     * @deprecated PostgreSQL 11.9 is no longer supported by Amazon RDS.
    */
    static readonly VER_11_9: PostgresEngineVersion;
    /**
     * Version "11.10"
     * @deprecated PostgreSQL 11.10 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_10: PostgresEngineVersion;
    /**
     * Version "11.11"
     * @deprecated PostgreSQL 11.11 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_11: PostgresEngineVersion;
    /**
     * Version "11.12"
     * @deprecated PostgreSQL 11.12 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_12: PostgresEngineVersion;
    /**
     * Version "11.13"
     * @deprecated PostgreSQL 11.13 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_13: PostgresEngineVersion;
    /**
     * Version "11.14"
     * @deprecated PostgreSQL 11.14 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_14: PostgresEngineVersion;
    /**
     * Version "11.15"
     * @deprecated PostgreSQL 11.15 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_15: PostgresEngineVersion;
    /**
     * Version "11.16"
     * @deprecated PostgreSQL 11.16 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_16: PostgresEngineVersion;
    /**
     * Version "11.17"
     * @deprecated PostgreSQL 11.17 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_17: PostgresEngineVersion;
    /**
     * Version "11.18"
     * @deprecated PostgreSQL 11.18 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_18: PostgresEngineVersion;
    /**
     * Version "11.19"
     * @deprecated PostgreSQL 11.19 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_19: PostgresEngineVersion;
    /**
     * Version "11.20"
     * @deprecated PostgreSQL 11.20 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_20: PostgresEngineVersion;
    /**
     * Version "11.21"
     * @deprecated PostgreSQL 11.21 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_21: PostgresEngineVersion;
    /** Version "11.22". */
    static readonly VER_11_22: PostgresEngineVersion;
    /**
     * Version "11.22-rds.20240418"
     */
    static readonly VER_11_22_RDS_20240418: PostgresEngineVersion;
    /**
     * Version "11.22-rds.20240509"
     */
    static readonly VER_11_22_RDS_20240509: PostgresEngineVersion;
    /** Version "12" (only a major version, without a specific minor version). */
    static readonly VER_12: PostgresEngineVersion;
    /**
     * Version "12.2".
     * @deprecated PostgreSQL 12.2 is no longer supported by Amazon RDS.
    */
    static readonly VER_12_2: PostgresEngineVersion;
    /**
     * Version "12.3".
     * @deprecated PostgreSQL 12.3 is no longer supported by Amazon RDS.
    */
    static readonly VER_12_3: PostgresEngineVersion;
    /**
     * Version "12.4".
     * @deprecated PostgreSQL 12.4 is no longer supported by Amazon RDS.
    */
    static readonly VER_12_4: PostgresEngineVersion;
    /**
     * Version "12.5".
     * @deprecated PostgreSQL 12.5 is no longer supported by Amazon RDS.
    */
    static readonly VER_12_5: PostgresEngineVersion;
    /**
     * Version "12.6".
     * @deprecated PostgreSQL 12.6 is no longer supported by Amazon RDS.
    */
    static readonly VER_12_6: PostgresEngineVersion;
    /**
     * Version "12.7".
     * @deprecated PostgreSQL 12.7 is no longer supported by Amazon RDS.
    */
    static readonly VER_12_7: PostgresEngineVersion;
    /**
     * Version "12.8".
     * @deprecated PostgreSQL 12.8 is no longer supported by Amazon RDS.
    */
    static readonly VER_12_8: PostgresEngineVersion;
    /**
     * Version "12.9".
     * @deprecated PostgreSQL 12.9 is no longer supported by Amazon RDS.
    */
    static readonly VER_12_9: PostgresEngineVersion;
    /**
     * Version "12.10"
     * @deprecated PostgreSQL 12.10 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_10: PostgresEngineVersion;
    /**
     * Version "12.11"
     * @deprecated PostgreSQL 12.11 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_11: PostgresEngineVersion;
    /**
     * Version "12.12"
     * @deprecated PostgreSQL 12.12 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_12: PostgresEngineVersion;
    /**
     * Version "12.13"
     * @deprecated PostgreSQL 12.13 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_13: PostgresEngineVersion;
    /**
     * Version "12.14"
     * @deprecated PostgreSQL 12.14 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_14: PostgresEngineVersion;
    /** Version "12.15". */
    static readonly VER_12_15: PostgresEngineVersion;
    /** Version "12.16". */
    static readonly VER_12_16: PostgresEngineVersion;
    /** Version "12.17". */
    static readonly VER_12_17: PostgresEngineVersion;
    /** Version "12.18". */
    static readonly VER_12_18: PostgresEngineVersion;
    /** Version "12.19". */
    static readonly VER_12_19: PostgresEngineVersion;
    /** Version "13" (only a major version, without a specific minor version). */
    static readonly VER_13: PostgresEngineVersion;
    /**
     * Version "13.1".
     * @deprecated PostgreSQL 13.1 is no longer supported by Amazon RDS.
    */
    static readonly VER_13_1: PostgresEngineVersion;
    /**
     * Version "13.2".
     * @deprecated PostgreSQL 13.2 is no longer supported by Amazon RDS.
    */
    static readonly VER_13_2: PostgresEngineVersion;
    /**
     * Version "13.3".
     * @deprecated PostgreSQL 13.3 is no longer supported by Amazon RDS.
    */
    static readonly VER_13_3: PostgresEngineVersion;
    /**
     * Version "13.4".
     * @deprecated PostgreSQL 13.4 is no longer supported by Amazon RDS.
    */
    static readonly VER_13_4: PostgresEngineVersion;
    /**
     * Version "13.5".
     * @deprecated PostgreSQL 13.5 is no longer supported by Amazon RDS.
    */
    static readonly VER_13_5: PostgresEngineVersion;
    /**
     * Version "13.6".
     * @deprecated PostgreSQL 13.6 is no longer supported by Amazon RDS.
    */
    static readonly VER_13_6: PostgresEngineVersion;
    /**
     * Version "13.7"
     * @deprecated PostgreSQL 13.7 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_7: PostgresEngineVersion;
    /**
     * Version "13.8"
     * @deprecated PostgreSQL 13.8 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_8: PostgresEngineVersion;
    /**
     * Version "13.9"
     * @deprecated PostgreSQL 13.9 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_9: PostgresEngineVersion;
    /**
     * Version "13.10"
     * @deprecated PostgreSQL 13.10 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_10: PostgresEngineVersion;
    /** Version "13.11". */
    static readonly VER_13_11: PostgresEngineVersion;
    /** Version "13.12". */
    static readonly VER_13_12: PostgresEngineVersion;
    /** Version "13.13". */
    static readonly VER_13_13: PostgresEngineVersion;
    /** Version "13.14". */
    static readonly VER_13_14: PostgresEngineVersion;
    /** Version "13.15". */
    static readonly VER_13_15: PostgresEngineVersion;
    /** Version "14" (only a major version, without a specific minor version). */
    static readonly VER_14: PostgresEngineVersion;
    /**
     * Version "14.1".
     * @deprecated PostgreSQL 14.1 is no longer supported by Amazon RDS.
    */
    static readonly VER_14_1: PostgresEngineVersion;
    /**
     * Version "14.2".
     * @deprecated PostgreSQL 14.2 is no longer supported by Amazon RDS.
    */
    static readonly VER_14_2: PostgresEngineVersion;
    /**
     * Version "14.3"
     * @deprecated PostgreSQL 14.3 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_3: PostgresEngineVersion;
    /**
     * Version "14.4"
     * @deprecated PostgreSQL 14.4 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_4: PostgresEngineVersion;
    /**
     * Version "14.5"
     * @deprecated PostgreSQL 14.5 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_5: PostgresEngineVersion;
    /**
     * Version "14.6"
     * @deprecated PostgreSQL 14.6 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_6: PostgresEngineVersion;
    /**
     * Version "14.7"
     * @deprecated PostgreSQL 14.7 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_7: PostgresEngineVersion;
    /**
     * Version "14.8"
     * @deprecated PostgreSQL 14.8 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_8: PostgresEngineVersion;
    /** Version "14.9". */
    static readonly VER_14_9: PostgresEngineVersion;
    /** Version "14.10". */
    static readonly VER_14_10: PostgresEngineVersion;
    /** Version "14.11". */
    static readonly VER_14_11: PostgresEngineVersion;
    /** Version "14.12". */
    static readonly VER_14_12: PostgresEngineVersion;
    /** Version "15" (only a major version, without a specific minor version). */
    static readonly VER_15: PostgresEngineVersion;
    /**
     * Version "15.2"
     * @deprecated PostgreSQL 15.2 is no longer supported by Amazon RDS.
     */
    static readonly VER_15_2: PostgresEngineVersion;
    /**
     * Version "15.3"
     * @deprecated PostgreSQL 15.3 is no longer supported by Amazon RDS.
     */
    static readonly VER_15_3: PostgresEngineVersion;
    /** Version "15.4". */
    static readonly VER_15_4: PostgresEngineVersion;
    /** Version "15.5". */
    static readonly VER_15_5: PostgresEngineVersion;
    /** Version "15.6". */
    static readonly VER_15_6: PostgresEngineVersion;
    /** Version "15.7". */
    static readonly VER_15_7: PostgresEngineVersion;
    /** Version "16" (only a major version, without a specific minor version). */
    static readonly VER_16: PostgresEngineVersion;
    /** Version "16.1". */
    static readonly VER_16_1: PostgresEngineVersion;
    /** Version "16.2". */
    static readonly VER_16_2: PostgresEngineVersion;
    /** Version "16.3". */
    static readonly VER_16_3: PostgresEngineVersion;
    /**
     * Create a new PostgresEngineVersion with an arbitrary version.
     *
     * @param postgresFullVersion the full version string,
     *   for example "13.11"
     * @param postgresMajorVersion the major version of the engine,
     *   for example "13"
     */
    static of(postgresFullVersion: string, postgresMajorVersion: string, postgresFeatures?: PostgresEngineFeatures): PostgresEngineVersion;
    /** The full version string, for example, "13.11". */
    readonly postgresFullVersion: string;
    /** The major version of the engine, for example, "13". */
    readonly postgresMajorVersion: string;
    /**
     * The supported features for the DB engine
     * @internal
     */
    readonly _features: InstanceEngineFeatures;
    private constructor();
}
/**
 * Properties for PostgreSQL instance engines.
 * Used in `DatabaseInstanceEngine.postgres`.
 */
export interface PostgresInstanceEngineProps {
    /** The exact version of the engine to use. */
    readonly version: PostgresEngineVersion;
}
/**
 * The versions for the Oracle instance engines.
 * Those returned by the following list.
 * - `DatabaseInstanceEngine.oracleSe2`
 * - `DatabaseInstanceEngine.oracleSe2Cdb`
 * - `DatabaseInstanceEngine.oracleEe`
 * - `DatabaseInstanceEngine.oracleEeCdb`.
 */
export declare class OracleEngineVersion {
    /**
     * Version "12.1" (only a major version, without a specific minor version).
     * @deprecated Oracle 12.1 is no longer supported by Amazon RDS.
    */
    static readonly VER_12_1: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v1"
     * @deprecated Oracle 12.1.0.2.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V1: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v2"
     * @deprecated Oracle 12.1.0.2.v2 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V2: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v3"
     * @deprecated Oracle 12.1.0.2.v3 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V3: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v4"
     * @deprecated Oracle 12.1.0.2.v4 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V4: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v5"
     * @deprecated Oracle 12.1.0.2.v5 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V5: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v6"
     * @deprecated Oracle 12.1.0.2.v6 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V6: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v7"
     * @deprecated Oracle 12.1.0.2.v7 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V7: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v8"
     * @deprecated Oracle 12.1.0.2.v8 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V8: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v9"
     * @deprecated Oracle 12.1.0.2.v9 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V9: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v10"
     * @deprecated Oracle 12.1.0.2.v10 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V10: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v11"
     * @deprecated Oracle 12.1.0.2.v11 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V11: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v12"
     * @deprecated Oracle 12.1.0.2.v12 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V12: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v13"
     * @deprecated Oracle 12.1.0.2.v13 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V13: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v14"
     * @deprecated Oracle 12.1.0.2.v14 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V14: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v15"
     * @deprecated Oracle 12.1.0.2.v15 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V15: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v16"
     * @deprecated Oracle 12.1.0.2.v16 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V16: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v17"
     * @deprecated Oracle 12.1.0.2.v17 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V17: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v18"
     * @deprecated Oracle 12.1.0.2.v18 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V18: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v19"
     * @deprecated Oracle 12.1.0.2.v19 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V19: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v20"
     * @deprecated Oracle 12.1.0.2.v20 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V20: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v21"
     * @deprecated Oracle 12.1.0.2.v21 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V21: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v22"
     * @deprecated Oracle 12.1.0.2.v22 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V22: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v23"
     * @deprecated Oracle 12.1.0.2.v23 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V23: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v24"
     * @deprecated Oracle 12.1.0.2.v24 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V24: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v25"
     * @deprecated Oracle 12.1.0.2.v25 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V25: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v26"
     * @deprecated Oracle 12.1.0.2.v26 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V26: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v27"
     * @deprecated Oracle 12.1.0.2.v27 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V27: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v28"
     * @deprecated Oracle 12.1.0.2.v28 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V28: OracleEngineVersion;
    /**
     * Version "12.1.0.2.v29"
     * @deprecated Oracle 12.1.0.2.v29 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_1_0_2_V29: OracleEngineVersion;
    /**
     * Version "12.1" (only a major version, without a specific minor version).
     * @deprecated Oracle 12.1 is no longer supported by Amazon RDS.
    */
    static readonly VER_12_2: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2018-10.rur-2018-10.r1"
     * @deprecated Oracle 12.2.0.1.ru-2018-10.rur-2018-10.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2018_10_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2019-01.rur-2019-01.r1"
     * @deprecated Oracle 12.2.0.1.ru-2019-01.rur-2019-01.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2019_01_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2019-04.rur-2019-04.r1"
     * @deprecated Oracle 12.2.0.1.ru-2019-04.rur-2019-04.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2019_04_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2019-07.rur-2019-07.r1"
     * @deprecated Oracle 12.2.0.1.ru-2019-07.rur-2019-07.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2019_07_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2019-10.rur-2019-10.r1"
     * @deprecated Oracle 12.2.0.1.ru-2019-10.rur-2019-10.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2019_10_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2020-01.rur-2020-01.r1"
     * @deprecated Oracle 12.2.0.1.ru-2020-01.rur-2020-01.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2020_01_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2020-04.rur-2020-04.r1"
     * @deprecated Oracle 12.2.0.1.ru-2020-04.rur-2020-04.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2020_04_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2020-07.rur-2020-07.r1"
     * @deprecated Oracle 12.2.0.1.ru-2020-07.rur-2020-07.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2020_07_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2021-10.rur-2020-10.r1"
     * @deprecated Oracle 12.2.0.1.ru-2021-10.rur-2020-10.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2020_10_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2021-01.rur-2021-01.r1"
     * @deprecated Oracle 12.2.0.1.ru-2021-01.rur-2021-01.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2021_01_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2021-04.rur-2021-04.r1"
     * @deprecated Oracle 12.2.0.1.ru-2021-04.rur-2021-04.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2021_04_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2021-07.rur-2021-07.r1"
     * @deprecated Oracle 12.2.0.1.ru-2021-07.rur-2021-07.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2021_07_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2021-10.rur-2021-10.r1"
     * @deprecated Oracle 12.2.0.1.ru-2021-10.rur-2021-10.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2021_10_R1: OracleEngineVersion;
    /**
     * Version "12.2.0.1.ru-2022-01.rur-2022-01.r1"
     * @deprecated Oracle 12.2.0.1.ru-2022-01.rur-2022-01.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_2_0_1_2022_01_R1: OracleEngineVersion;
    /**
     * Version "18" (only a major version, without a specific minor version).
     * @deprecated Oracle 18 is no longer supported by Amazon RDS.
    */
    static readonly VER_18: OracleEngineVersion;
    /**
     * Version "18.0.0.0.ru-2019-07.rur-2019-07.r1"
     * @deprecated Oracle 18.0.0.0.ru-2019-07.rur-2019-07.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_18_0_0_0_2019_07_R1: OracleEngineVersion;
    /**
     * Version "18.0.0.0.ru-2019-10.rur-2019-10.r1"
     * @deprecated Oracle 18.0.0.0.ru-2019-10.rur-2019-10.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_18_0_0_0_2019_10_R1: OracleEngineVersion;
    /**
     * Version "18.0.0.0.ru-2020-01.rur-2020-01.r1"
     * @deprecated Oracle 18.0.0.0.ru-2020-01.rur-2020-01.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_18_0_0_0_2020_01_R1: OracleEngineVersion;
    /**
     * Version "18.0.0.0.ru-2020-04.rur-2020-04.r1"
     * @deprecated Oracle 18.0.0.0.ru-2020-04.rur-2020-04.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_18_0_0_0_2020_04_R1: OracleEngineVersion;
    /**
     * Version "18.0.0.0.ru-2020-07.rur-2020-07.r1"
     * @deprecated Oracle 18.0.0.0.ru-2020-07.rur-2020-07.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_18_0_0_0_2020_07_R1: OracleEngineVersion;
    /**
     * Version "18.0.0.0.ru-2020-10.rur-2020-10.r1"
     * @deprecated Oracle 18.0.0.0.ru-2020-10.rur-2020-10.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_18_0_0_0_2020_10_R1: OracleEngineVersion;
    /**
     * Version "18.0.0.0.ru-2021-01.rur-2021-01.r1"
     * @deprecated Oracle 18.0.0.0.ru-2021-01.rur-2021-01.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_18_0_0_0_2021_01_R1: OracleEngineVersion;
    /**
     * Version "18.0.0.0.ru-2021-04.rur-2021-04.r1"
     * @deprecated Oracle 18.0.0.0.ru-2021-04.rur-2021-04.r1 is no longer supported by Amazon RDS.
     */
    static readonly VER_18_0_0_0_2021_04_R1: OracleEngineVersion;
    /** Version "19" (only a major version, without a specific minor version). */
    static readonly VER_19: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2019-07.rur-2019-07.r1". */
    static readonly VER_19_0_0_0_2019_07_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2019-10.rur-2019-10.r1". */
    static readonly VER_19_0_0_0_2019_10_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2020-01.rur-2020-01.r1". */
    static readonly VER_19_0_0_0_2020_01_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2020-04.rur-2020-04.r1". */
    static readonly VER_19_0_0_0_2020_04_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2020-07.rur-2020-07.r1". */
    static readonly VER_19_0_0_0_2020_07_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2020-07.rur-2020-10.r1". */
    static readonly VER_19_0_0_0_2020_10_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2021-01.rur-2021-01.r1". */
    static readonly VER_19_0_0_0_2021_01_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2021-01.rur-2021-01.r2". */
    static readonly VER_19_0_0_0_2021_01_R2: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2021-01.rur-2021-04.r1". */
    static readonly VER_19_0_0_0_2021_04_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2021-07.rur-2021-07.r1". */
    static readonly VER_19_0_0_0_2021_07_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2021-10.rur-2021-10.r1". */
    static readonly VER_19_0_0_0_2021_10_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2022-01.rur-2022-01.r1". */
    static readonly VER_19_0_0_0_2022_01_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2022-04.rur-2022-04.r1". */
    static readonly VER_19_0_0_0_2022_04_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2022-07.rur-2022-07.r1". */
    static readonly VER_19_0_0_0_2022_07_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2022-10.rur-2022-10.r1". */
    static readonly VER_19_0_0_0_2022_10_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2023-01.rur-2023-01.r1". */
    static readonly VER_19_0_0_0_2023_01_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2023-01.rur-2023-01.r2". */
    static readonly VER_19_0_0_0_2023_01_R2: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2023-04.rur-2023-04.r1". */
    static readonly VER_19_0_0_0_2023_04_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2023-07.rur-2023-07.r1"  */
    static readonly VER_19_0_0_0_2023_07_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2023-10.rur-2023-10.r1"  */
    static readonly VER_19_0_0_0_2023_10_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2024-01.rur-2024-01.r1". */
    static readonly VER_19_0_0_0_2024_01_R1: OracleEngineVersion;
    /** Version "19.0.0.0.ru-2024-04.rur-2024-04.r1". */
    static readonly VER_19_0_0_0_2024_04_R1: OracleEngineVersion;
    /** Version "21" (only a major version, without a specific minor version). */
    static readonly VER_21: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2022-01.rur-2022-01.r1". */
    static readonly VER_21_0_0_0_2022_01_R1: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2022-04.rur-2022-04.r1". */
    static readonly VER_21_0_0_0_2022_04_R1: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2022-07.rur-2022-07.r1". */
    static readonly VER_21_0_0_0_2022_07_R1: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2022-10.rur-2022-10.r1". */
    static readonly VER_21_0_0_0_2022_10_R1: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2023-01.rur-2023-01.r1". */
    static readonly VER_21_0_0_0_2023_01_R1: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2023-01.rur-2023-01.r2". */
    static readonly VER_21_0_0_0_2023_01_R2: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2023-04.rur-2023-04.r1". */
    static readonly VER_21_0_0_0_2023_04_R1: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2023-07.rur-2023-07.r1". */
    static readonly VER_21_0_0_0_2023_07_R1: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2023-10.rur-2023-10.r1". */
    static readonly VER_21_0_0_0_2023_10_R1: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2024-01.rur-2024-01.r1". */
    static readonly VER_21_0_0_0_2024_01_R1: OracleEngineVersion;
    /** Version "21.0.0.0.ru-2024-04.rur-2024-04.r1". */
    static readonly VER_21_0_0_0_2024_04_R1: OracleEngineVersion;
    /**
     * Creates a new OracleEngineVersion with an arbitrary version.
     *
     * @param oracleFullVersion the full version string,
     *   for example "19.0.0.0.ru-2019-10.rur-2019-10.r1"
     * @param oracleMajorVersion the major version of the engine,
     *   for example "19"
     */
    static of(oracleFullVersion: string, oracleMajorVersion: string): OracleEngineVersion;
    /** The full version string, for example, "19.0.0.0.ru-2019-10.rur-2019-10.r1". */
    readonly oracleFullVersion: string;
    /** The major version of the engine, for example, "19". */
    readonly oracleMajorVersion: string;
    private constructor();
}
interface OracleInstanceEngineProps {
    /** The exact version of the engine to use. */
    readonly version: OracleEngineVersion;
}
/**
 * Properties for Oracle Standard Edition 2 instance engines.
 * Used in `DatabaseInstanceEngine.oracleSe2`.
 */
export interface OracleSe2InstanceEngineProps extends OracleInstanceEngineProps {
}
/**
 * Properties for Oracle Standard Edition 2 (CDB) instance engines.
 * Used in `DatabaseInstanceEngine.oracleSe2Cdb`.
 */
export interface OracleSe2CdbInstanceEngineProps extends OracleInstanceEngineProps {
}
/**
 * Properties for Oracle Enterprise Edition instance engines.
 * Used in `DatabaseInstanceEngine.oracleEe`.
 */
export interface OracleEeInstanceEngineProps extends OracleInstanceEngineProps {
}
/**
 * Properties for Oracle Enterprise Edition (CDB) instance engines.
 * Used in `DatabaseInstanceEngine.oracleEeCdb`.
 */
export interface OracleEeCdbInstanceEngineProps extends OracleInstanceEngineProps {
}
/**
 * The versions for the SQL Server instance engines
 * (those returned by `DatabaseInstanceEngine.sqlServerSe`,
 * `DatabaseInstanceEngine.sqlServerEx`, `DatabaseInstanceEngine.sqlServerWeb`
 * and `DatabaseInstanceEngine.sqlServerEe`).
 */
export declare class SqlServerEngineVersion {
    /**
     * Version "11.00" (only a major version, without a specific minor version).
     * @deprecated SQL Server 11.00 is no longer supported by Amazon RDS.
     */
    static readonly VER_11: SqlServerEngineVersion;
    /**
     * Version "11.00.5058.0.v1".
     * @deprecated SQL Server 11.00.5058.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_00_5058_0_V1: SqlServerEngineVersion;
    /**
     * Version "11.00.6020.0.v1".
     * @deprecated SQL Server 11.00.6020.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_00_6020_0_V1: SqlServerEngineVersion;
    /**
     * Version "11.00.6594.0.v1".
     * @deprecated SQL Server 11.00.6594.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_00_6594_0_V1: SqlServerEngineVersion;
    /**
     * Version "11.00.7462.6.v1".
     * @deprecated SQL Server 11.00.7462.6.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_00_7462_6_V1: SqlServerEngineVersion;
    /**
     * Version "11.00.7493.4.v1".
     * @deprecated SQL Server 11.00.7493.4.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_11_00_7493_4_V1: SqlServerEngineVersion;
    /**
     * Version "12.00" (only a major version, without a specific minor version).
     * @deprecated SQL Server 12.00 is no longer supported by Amazon RDS.
     */
    static readonly VER_12: SqlServerEngineVersion;
    /**
     * Version "12.00.4422.0.v1"
     * @deprecated SQL Server 12.00.4422.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_00_4422_0_V1: SqlServerEngineVersion;
    /**
     * Version "12.00.5000.0.v1".
     * @deprecated SQL Server 12.00.5000.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_00_5000_0_V1: SqlServerEngineVersion;
    /**
     * Version "12.00.5546.0.v1".
     * @deprecated SQL Server 12.00.5546.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_00_5546_0_V1: SqlServerEngineVersion;
    /**
     * Version "12.00.5571.0.v1".
     * @deprecated SQL Server 12.00.5571.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_00_5571_0_V1: SqlServerEngineVersion;
    /**
     * Version "12.00.6293.0.v1".
     * @deprecated SQL Server 12.00.6293.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_00_6293_0_V1: SqlServerEngineVersion;
    /**
     * Version "12.00.6329.1.v1".
     * @deprecated SQL Server 12.00.6329.1.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_00_6329_1_V1: SqlServerEngineVersion;
    /**
     * Version "12.00.6433.1.v1".
     * @deprecated SQL Server 12.00.6433.1.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_00_6433_1_V1: SqlServerEngineVersion;
    /**
     * Version "12.00.6439.10.v1".
     * @deprecated SQL Server 12.00.6439.10.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_00_6439_10_V1: SqlServerEngineVersion;
    /**
     * Version "12.00.6444.4.v1".
     * @deprecated SQL Server 12.00.6444.4.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_00_6444_4_V1: SqlServerEngineVersion;
    /**
     * Version "12.00.6449.1.v1".
     * @deprecated SQL Server 12.00.6449.1.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_12_00_6449_1_V1: SqlServerEngineVersion;
    /** Version "13.00" (only a major version, without a specific minor version). */
    static readonly VER_13: SqlServerEngineVersion;
    /**
     * Version "13.00.2164.0.v1".
     * @deprecated SQL Server 13.00.2164.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_2164_0_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.4422.0.v1".
     * @deprecated SQL Server 13.00.4422.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_4422_0_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.4451.0.v1".
     * @deprecated SQL Server 13.00.4451.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_4451_0_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.4466.4.v1".
     * @deprecated SQL Server 13.00.4466.4.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_4466_4_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.4522.0.v1".
     * @deprecated SQL Server 13.00.4522.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_4522_0_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.5216.0.v1".
     * @deprecated SQL Server 13.00.5216.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_5216_0_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.5292.0.v1".
     * @deprecated SQL Server 13.00.5292.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_5292_0_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.5366.0.v1".
     * @deprecated SQL Server 13.00.5366.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_5366_0_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.5426.0.v1".
     * @deprecated SQL Server 13.00.5426.0.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_5426_0_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.5598.27.v1".
     * @deprecated SQL Server 13.00.5598.27.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_5598_27_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.5820.21.v1".
     * @deprecated SQL Server 13.00.5820.21.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_5820_21_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.5850.14.v1".
     * @deprecated SQL Server 13.00.5850.14.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_5850_14_V1: SqlServerEngineVersion;
    /**
     * Version "13.00.5882.1.v1".
     * @deprecated SQL Server 13.00.5882.1.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_13_00_5882_1_V1: SqlServerEngineVersion;
    /** Version "13.00.6300.2.v1". */
    static readonly VER_13_00_6300_2_V1: SqlServerEngineVersion;
    /** Version "13.00.6419.1.v1". */
    static readonly VER_13_00_6419_1_V1: SqlServerEngineVersion;
    /** Version "13.00.6430.49.v1". */
    static readonly VER_13_00_6430_49_V1: SqlServerEngineVersion;
    /** Version "13.00.6435.1.v1". */
    static readonly VER_13_00_6435_1_V1: SqlServerEngineVersion;
    /** Version "14.00" (only a major version, without a specific minor version). */
    static readonly VER_14: SqlServerEngineVersion;
    /**
     * Version "14.00.1000.169.v1".
     * @deprecated SQL Server 14.00.1000.169.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_00_1000_169_V1: SqlServerEngineVersion;
    /**
     * Version "14.00.3015.40.v1".
     * @deprecated SQL Server 14.00.3015.40.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_00_3015_40_V1: SqlServerEngineVersion;
    /**
     * Version "14.00.3035.2.v1".
     * @deprecated SQL Server 14.00.3035.2.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_00_3035_2_V1: SqlServerEngineVersion;
    /**
     * Version "14.00.3049.1.v1".
     * @deprecated SQL Server 14.00.3049.1.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_00_3049_1_V1: SqlServerEngineVersion;
    /**
     * Version "14.00.3192.2.v1".
     * @deprecated SQL Server 14.00.3192.2.v1 is no longer supported by Amazon RDS.
    */
    static readonly VER_14_00_3192_2_V1: SqlServerEngineVersion;
    /**
     * Version "14.00.3223.3.v1".
     * @deprecated SQL Server 14.00.3223.3.v1 is no longer supported by Amazon RDS.
     */
    static readonly VER_14_00_3223_3_V1: SqlServerEngineVersion;
    /** Version "14.00.3281.6.v1". */
    static readonly VER_14_00_3281_6_V1: SqlServerEngineVersion;
    /** Version "14.00.3294.2.v1". */
    static readonly VER_14_00_3294_2_V1: SqlServerEngineVersion;
    /** Version "14.00.3356.20.v1". */
    static readonly VER_14_00_3356_20_V1: SqlServerEngineVersion;
    /** Version "14.00.3381.3.v1". */
    static readonly VER_14_00_3381_3_V1: SqlServerEngineVersion;
    /** Version "14.00.3401.7.v1". */
    static readonly VER_14_00_3401_7_V1: SqlServerEngineVersion;
    /** Version "14.00.3421.10.v1". */
    static readonly VER_14_00_3421_10_V1: SqlServerEngineVersion;
    /** Version "14.00.3451.2.v1". */
    static readonly VER_14_00_3451_2_V1: SqlServerEngineVersion;
    /** Version "14.00.3460.9.v1". */
    static readonly VER_14_00_3460_9_V1: SqlServerEngineVersion;
    /** Version "14.00.3465.1.v1". */
    static readonly VER_14_00_3465_1_V1: SqlServerEngineVersion;
    /** Version "15.00" (only a major version, without a specific minor version). */
    static readonly VER_15: SqlServerEngineVersion;
    /** Version "15.00.4043.16.v1". */
    static readonly VER_15_00_4043_16_V1: SqlServerEngineVersion;
    /** Version "15.00.4355.3.v1". */
    static readonly VER_15_00_4355_3_V1: SqlServerEngineVersion;
    /** Version "15.00.4073.23.v1". */
    static readonly VER_15_00_4073_23_V1: SqlServerEngineVersion;
    /** Version "15.00.4153.1.v1". */
    static readonly VER_15_00_4153_1_V1: SqlServerEngineVersion;
    /** Version "15.00.4198.2.v1". */
    static readonly VER_15_00_4198_2_V1: SqlServerEngineVersion;
    /** Version "15.00.4236.7.v1". */
    static readonly VER_15_00_4236_7_V1: SqlServerEngineVersion;
    /** Version "15.00.4312.2.v1". */
    static readonly VER_15_00_4312_2_V1: SqlServerEngineVersion;
    /** Version "15.00.4316.3.v1". */
    static readonly VER_15_00_4316_3_V1: SqlServerEngineVersion;
    /** Version "15.00.4322.2.v1". */
    static readonly VER_15_00_4322_2_V1: SqlServerEngineVersion;
    /** Version "15.00.4335.1.v1". */
    static readonly VER_15_00_4335_1_V1: SqlServerEngineVersion;
    /** Version "15.00.4345.5.v1". */
    static readonly VER_15_00_4345_5_V1: SqlServerEngineVersion;
    /** Version "15.00.4365.2.v1". */
    static readonly VER_15_00_4365_2_V1: SqlServerEngineVersion;
    /** Version "16.00" (only a major version, without a specific minor version). */
    static readonly VER_16: SqlServerEngineVersion;
    /** Version "16.00.4085.2.v1". */
    static readonly VER_16_00_4085_2_V1: SqlServerEngineVersion;
    /** Version "16.00.4095.4.v1". */
    static readonly VER_16_00_4095_4_V1: SqlServerEngineVersion;
    /** Version "16.00.4105.2.v1". */
    static readonly VER_16_00_4105_2_V1: SqlServerEngineVersion;
    /** Version "16.00.4115.5.v1". */
    static readonly VER_16_00_4115_5_V1: SqlServerEngineVersion;
    /** Version "16.00.4120.1.v1". */
    static readonly VER_16_00_4120_1_V1: SqlServerEngineVersion;
    /** Version "16.00.4125.3.v1". */
    static readonly VER_16_00_4125_3_V1: SqlServerEngineVersion;
    /**
     * Create a new SqlServerEngineVersion with an arbitrary version.
     *
     * @param sqlServerFullVersion the full version string,
     *   for example "15.00.3049.1.v1"
     * @param sqlServerMajorVersion the major version of the engine,
     *   for example "15.00"
     */
    static of(sqlServerFullVersion: string, sqlServerMajorVersion: string): SqlServerEngineVersion;
    /** The full version string, for example, "15.00.3049.1.v1". */
    readonly sqlServerFullVersion: string;
    /** The major version of the engine, for example, "15.00". */
    readonly sqlServerMajorVersion: string;
    private constructor();
}
interface SqlServerInstanceEngineProps {
    /** The exact version of the engine to use. */
    readonly version: SqlServerEngineVersion;
}
/**
 * Properties for SQL Server Standard Edition instance engines.
 * Used in `DatabaseInstanceEngine.sqlServerSe`.
 */
export interface SqlServerSeInstanceEngineProps extends SqlServerInstanceEngineProps {
}
/**
 * Properties for SQL Server Express Edition instance engines.
 * Used in `DatabaseInstanceEngine.sqlServerEx`.
 */
export interface SqlServerExInstanceEngineProps extends SqlServerInstanceEngineProps {
}
/**
 * Properties for SQL Server Web Edition instance engines.
 * Used in `DatabaseInstanceEngine.sqlServerWeb`.
 */
export interface SqlServerWebInstanceEngineProps extends SqlServerInstanceEngineProps {
}
/**
 * Properties for SQL Server Enterprise Edition instance engines.
 * Used in `DatabaseInstanceEngine.sqlServerEe`.
 */
export interface SqlServerEeInstanceEngineProps extends SqlServerInstanceEngineProps {
}
/**
 * A database instance engine. Provides mapping to DatabaseEngine used for
 * secret rotation.
 */
export declare class DatabaseInstanceEngine {
    /**
     * The unversioned 'mariadb' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `mariaDb()` method
     */
    static readonly MARIADB: IInstanceEngine;
    /**
     * The unversioned 'mysql' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `mysql()` method
     */
    static readonly MYSQL: IInstanceEngine;
    /**
     * The unversioned 'oracle-ee' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `oracleEe()` method
     */
    static readonly ORACLE_EE: IInstanceEngine;
    /**
     * The unversioned 'oracle-ee-cdb' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `oracleEeCdb()` method
     */
    static readonly ORACLE_EE_CDB: IInstanceEngine;
    /**
     * The unversioned 'oracle-se2' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `oracleSe2()` method
     */
    static readonly ORACLE_SE2: IInstanceEngine;
    /**
     * The unversioned 'oracle-se2-cdb' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `oracleSe2Cdb()` method
     */
    static readonly ORACLE_SE2_CDB: IInstanceEngine;
    /**
     * The unversioned 'postgres' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `postgres()` method
     */
    static readonly POSTGRES: IInstanceEngine;
    /**
     * The unversioned 'sqlserver-ee' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `sqlServerEe()` method
     */
    static readonly SQL_SERVER_EE: IInstanceEngine;
    /**
     * The unversioned 'sqlserver-se' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `sqlServerSe()` method
     */
    static readonly SQL_SERVER_SE: IInstanceEngine;
    /**
     * The unversioned 'sqlserver-ex' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `sqlServerEx()` method
     */
    static readonly SQL_SERVER_EX: IInstanceEngine;
    /**
     * The unversioned 'sqlserver-web' instance engine.
     *
     * NOTE: using unversioned engines is an availability risk.
     *   We recommend using versioned engines created using the `sqlServerWeb()` method
     */
    static readonly SQL_SERVER_WEB: IInstanceEngine;
    /** Creates a new MariaDB instance engine. */
    static mariaDb(props: MariaDbInstanceEngineProps): IInstanceEngine;
    /** Creates a new MySQL instance engine. */
    static mysql(props: MySqlInstanceEngineProps): IInstanceEngine;
    /** Creates a new PostgreSQL instance engine. */
    static postgres(props: PostgresInstanceEngineProps): IInstanceEngine;
    /** Creates a new Oracle Standard Edition 2 instance engine. */
    static oracleSe2(props: OracleSe2InstanceEngineProps): IInstanceEngine;
    /** Creates a new Oracle Standard Edition 2 (CDB) instance engine. */
    static oracleSe2Cdb(props: OracleSe2CdbInstanceEngineProps): IInstanceEngine;
    /** Creates a new Oracle Enterprise Edition instance engine. */
    static oracleEe(props: OracleEeInstanceEngineProps): IInstanceEngine;
    /** Creates a new Oracle Enterprise Edition (CDB) instance engine. */
    static oracleEeCdb(props: OracleEeCdbInstanceEngineProps): IInstanceEngine;
    /** Creates a new SQL Server Standard Edition instance engine. */
    static sqlServerSe(props: SqlServerSeInstanceEngineProps): IInstanceEngine;
    /** Creates a new SQL Server Express Edition instance engine. */
    static sqlServerEx(props: SqlServerExInstanceEngineProps): IInstanceEngine;
    /** Creates a new SQL Server Web Edition instance engine. */
    static sqlServerWeb(props: SqlServerWebInstanceEngineProps): IInstanceEngine;
    /** Creates a new SQL Server Enterprise Edition instance engine. */
    static sqlServerEe(props: SqlServerEeInstanceEngineProps): IInstanceEngine;
}
export {};
