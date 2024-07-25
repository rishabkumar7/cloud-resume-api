import { Construct } from 'constructs';
import { OperatingSystemType } from './machine-image';
import { IStringParameter } from '../../aws-ssm';
import { Resource, ResourceProps, IResource } from '../../core';
/**
 * The format of the Key Pair
 */
export declare enum KeyPairFormat {
    /**
     * A PPK file, typically used with PuTTY.
     */
    PPK = "ppk",
    /**
     * A PEM file.
     */
    PEM = "pem"
}
/**
 * The type of the key pair.
 */
export declare enum KeyPairType {
    /**
     * An RSA key.
     */
    RSA = "rsa",
    /**
     * An ED25519 key.
     *
     * Note that ED25519 keys are not supported for Windows instances.
     */
    ED25519 = "ed25519"
}
/**
 * The properties of a Key Pair
 */
export interface KeyPairProps extends ResourceProps {
    /**
     * A unique name for the key pair.
     *
     * @default A generated name
     */
    readonly keyPairName?: string;
    /**
     * The format of the key pair.
     *
     * @default PEM
     */
    readonly format?: KeyPairFormat;
    /**
     * The type of key pair.
     *
     * @default RSA (ignored if keyMaterial is provided)
     */
    readonly type?: KeyPairType;
    /**
     * The public key material.
     *
     * If this is provided the key is considered "imported". For imported
     * keys, it is assumed that you already have the private key material
     * so the private key material will not be returned or stored in
     * AWS Systems Manager Parameter Store.
     *
     * @default a public and private key will be generated
     */
    readonly publicKeyMaterial?: string;
}
/**
 * Attributes of a Key Pair.
 */
export interface KeyPairAttributes {
    /**
     * The unique name of the key pair.
     */
    readonly keyPairName: string;
    /**
     * The type of the key pair.
     *
     * @default no type specified
     */
    readonly type?: KeyPairType;
}
/**
 * An EC2 Key Pair.
 */
export interface IKeyPair extends IResource {
    /**
     * The name of the key pair.
     *
     * @attribute
     */
    readonly keyPairName: string;
    /**
     * The type of the key pair.
     */
    readonly type?: KeyPairType;
    /**
     * Used internally to determine whether the key pair is compatible with an OS type.
     *
     * @internal
     */
    _isOsCompatible(osType: OperatingSystemType): boolean;
}
/**
 * An EC2 Key Pair.
 *
 * @resource AWS::EC2::KeyPair
 */
export declare class KeyPair extends Resource implements IKeyPair {
    /**
     * Imports a key pair based on the name.
     */
    static fromKeyPairName(scope: Construct, id: string, keyPairName: string): IKeyPair;
    /**
     * Imports a key pair with a name and optional type.
     */
    static fromKeyPairAttributes(scope: Construct, id: string, attrs: KeyPairAttributes): IKeyPair;
    /**
     * The unique name of the key pair.
     *
     * @attribute
     */
    readonly keyPairName: string;
    /**
     * The fingerprint of the key pair.
     *
     * @attribute
     */
    readonly keyPairFingerprint: string;
    /**
     * The unique ID of the key pair.
     *
     * @attribute
     */
    readonly keyPairId: string;
    /**
     * The type of the key pair.
     */
    readonly type?: KeyPairType;
    /**
     * The format of the key pair.
     */
    readonly format: KeyPairFormat;
    private _privateKeySsm?;
    private readonly _isImport;
    constructor(scope: Construct, id: string, props?: KeyPairProps);
    /**
     * Whether the key material was imported.
     *
     * Keys with imported material do not have their private key material stored
     * or returned automatically.
     */
    get hasImportedMaterial(): boolean;
    /**
     * The Systems Manager Parameter Store parameter with the pair's private key material.
     */
    get privateKey(): IStringParameter;
    /**
     * Used internally to determine whether the key pair is compatible with an OS type.
     *
     * @internal
     */
    _isOsCompatible(osType: OperatingSystemType): boolean;
}
