import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::CodeArtifact::Domain` resource creates an AWS CodeArtifact domain.
 *
 * CodeArtifact *domains* make it easier to manage multiple repositories across an organization. You can use a domain to apply permissions across many repositories owned by different AWS accounts. For more information about domains, see the [Domain concepts information](https://docs.aws.amazon.com/codeartifact/latest/ug/codeartifact-concepts.html#welcome-concepts-domain) in the *CodeArtifact User Guide* . For more information about the `CreateDomain` API, see [CreateDomain](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateDomain.html) in the *CodeArtifact API Reference* .
 *
 * @cloudformationResource AWS::CodeArtifact::Domain
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html
 */
export declare class CfnDomain extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomain from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomain;
    /**
     * When you pass the logical ID of this resource, the function returns the Amazon Resource Name (ARN) of the domain.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * When you pass the logical ID of this resource, the function returns the key used to encrypt the domain.
     *
     * @cloudformationAttribute EncryptionKey
     */
    readonly attrEncryptionKey: string;
    /**
     * When you pass the logical ID of this resource, the function returns the name of the domain.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * When you pass the logical ID of this resource, the function returns the 12-digit account number of the AWS account that owns the domain.
     *
     * @cloudformationAttribute Owner
     */
    readonly attrOwner: string;
    /**
     * A string that specifies the name of the requested domain.
     */
    domainName: string;
    /**
     * The key used to encrypt the domain.
     */
    encryptionKey?: string;
    /**
     * The document that defines the resource policy that is set on a domain.
     */
    permissionsPolicyDocument?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags to be applied to the domain.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDomainProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnDomain`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html
 */
export interface CfnDomainProps {
    /**
     * A string that specifies the name of the requested domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-domainname
     */
    readonly domainName: string;
    /**
     * The key used to encrypt the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-encryptionkey
     */
    readonly encryptionKey?: string;
    /**
     * The document that defines the resource policy that is set on a domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-permissionspolicydocument
     */
    readonly permissionsPolicyDocument?: any | cdk.IResolvable;
    /**
     * A list of tags to be applied to the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::CodeArtifact::Repository` resource creates an AWS CodeArtifact repository.
 *
 * CodeArtifact *repositories* contain a set of package versions. For more information about repositories, see the [Repository concepts information](https://docs.aws.amazon.com/codeartifact/latest/ug/codeartifact-concepts.html#welcome-concepts-repository) in the *CodeArtifact User Guide* . For more information about the `CreateRepository` API, see [CreateRepository](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html) in the *CodeArtifact API Reference* .
 *
 * @cloudformationResource AWS::CodeArtifact::Repository
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html
 */
export declare class CfnRepository extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRepository from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRepository;
    /**
     * When you pass the logical ID of this resource, the function returns the Amazon Resource Name (ARN) of the repository.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * When you pass the logical ID of this resource, the function returns the domain name that contains the repository.
     *
     * @cloudformationAttribute DomainName
     */
    readonly attrDomainName: string;
    /**
     * When you pass the logical ID of this resource, the function returns the 12-digit account number of the AWS account that owns the domain that contains the repository.
     *
     * @cloudformationAttribute DomainOwner
     */
    readonly attrDomainOwner: string;
    /**
     * When you pass the logical ID of this resource, the function returns the name of the repository.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * A text description of the repository.
     */
    description?: string;
    /**
     * The name of the domain that contains the repository.
     */
    domainName: string;
    /**
     * The 12-digit account number of the AWS account that owns the domain that contains the repository.
     */
    domainOwner?: string;
    /**
     * An array of external connections associated with the repository.
     */
    externalConnections?: Array<string>;
    /**
     * The document that defines the resource policy that is set on a repository.
     */
    permissionsPolicyDocument?: any | cdk.IResolvable;
    /**
     * The name of an upstream repository.
     */
    repositoryName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags to be applied to the repository.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A list of upstream repositories to associate with the repository.
     */
    upstreams?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRepositoryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnRepository`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html
 */
export interface CfnRepositoryProps {
    /**
     * A text description of the repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-description
     */
    readonly description?: string;
    /**
     * The name of the domain that contains the repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-domainname
     */
    readonly domainName: string;
    /**
     * The 12-digit account number of the AWS account that owns the domain that contains the repository.
     *
     * It does not include dashes or spaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-domainowner
     */
    readonly domainOwner?: string;
    /**
     * An array of external connections associated with the repository.
     *
     * For more information, see [Supported external connection repositories](https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html#supported-public-repositories) in the *CodeArtifact user guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-externalconnections
     */
    readonly externalConnections?: Array<string>;
    /**
     * The document that defines the resource policy that is set on a repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-permissionspolicydocument
     */
    readonly permissionsPolicyDocument?: any | cdk.IResolvable;
    /**
     * The name of an upstream repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-repositoryname
     */
    readonly repositoryName: string;
    /**
     * A list of tags to be applied to the repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A list of upstream repositories to associate with the repository.
     *
     * The order of the upstream repositories in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more information, see [Working with upstream repositories](https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-upstreams
     */
    readonly upstreams?: Array<string>;
}
/**
 * Creates a package group.
 *
 * For more information about creating package groups, including example CLI commands, see [Create a package group](https://docs.aws.amazon.com/codeartifact/latest/ug/create-package-group.html) in the *CodeArtifact User Guide* .
 *
 * @cloudformationResource AWS::CodeArtifact::PackageGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html
 */
export declare class CfnPackageGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPackageGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPackageGroup;
    /**
     * When you pass the logical ID of this resource, the function returns the Amazon Resource Name (ARN) of the package group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The contact information of the package group.
     */
    contactInfo?: string;
    /**
     * The description of the package group.
     */
    description?: string;
    /**
     * The domain that contains the package group.
     */
    domainName: string;
    /**
     * The 12-digit account number of the AWS account that owns the domain.
     */
    domainOwner?: string;
    /**
     * Details about the package origin configuration of a package group.
     */
    originConfiguration?: cdk.IResolvable | CfnPackageGroup.OriginConfigurationProperty;
    /**
     * The pattern of the package group.
     */
    pattern: string;
    /**
     * A list of tags to be applied to the package group.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPackageGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPackageGroup {
    /**
     * The package group origin configuration that determines how package versions can enter repositories.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-originconfiguration.html
     */
    interface OriginConfigurationProperty {
        /**
         * The origin configuration settings that determine how package versions can enter repositories.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-originconfiguration.html#cfn-codeartifact-packagegroup-originconfiguration-restrictions
         */
        readonly restrictions: cdk.IResolvable | CfnPackageGroup.RestrictionsProperty;
    }
    /**
     * Contains information about the configured restrictions of the origin controls of a package group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-restrictions.html
     */
    interface RestrictionsProperty {
        /**
         * The package group origin restriction setting for external, upstream repositories.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-restrictions.html#cfn-codeartifact-packagegroup-restrictions-externalupstream
         */
        readonly externalUpstream?: cdk.IResolvable | CfnPackageGroup.RestrictionTypeProperty;
        /**
         * The package group origin restriction setting for internal, upstream repositories.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-restrictions.html#cfn-codeartifact-packagegroup-restrictions-internalupstream
         */
        readonly internalUpstream?: cdk.IResolvable | CfnPackageGroup.RestrictionTypeProperty;
        /**
         * The package group origin restriction setting for publishing packages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-restrictions.html#cfn-codeartifact-packagegroup-restrictions-publish
         */
        readonly publish?: cdk.IResolvable | CfnPackageGroup.RestrictionTypeProperty;
    }
    /**
     * The `RestrictionType` property type specifies the package group origin configuration restriction mode, and the repositories when the `RestrictionMode` is set to `ALLOW_SPECIFIC_REPOSITORIES` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-restrictiontype.html
     */
    interface RestrictionTypeProperty {
        /**
         * The repositories to add to the allowed repositories list.
         *
         * The allowed repositories list is used when the `RestrictionMode` is set to `ALLOW_SPECIFIC_REPOSITORIES` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-restrictiontype.html#cfn-codeartifact-packagegroup-restrictiontype-repositories
         */
        readonly repositories?: Array<string>;
        /**
         * The package group origin restriction setting.
         *
         * When the value is `INHERIT` , the value is set to the value of the first parent package group which does not have a value of `INHERIT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-restrictiontype.html#cfn-codeartifact-packagegroup-restrictiontype-restrictionmode
         */
        readonly restrictionMode: string;
    }
}
/**
 * Properties for defining a `CfnPackageGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html
 */
export interface CfnPackageGroupProps {
    /**
     * The contact information of the package group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-contactinfo
     */
    readonly contactInfo?: string;
    /**
     * The description of the package group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-description
     */
    readonly description?: string;
    /**
     * The domain that contains the package group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-domainname
     */
    readonly domainName: string;
    /**
     * The 12-digit account number of the AWS account that owns the domain.
     *
     * It does not include dashes or spaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-domainowner
     */
    readonly domainOwner?: string;
    /**
     * Details about the package origin configuration of a package group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-originconfiguration
     */
    readonly originConfiguration?: cdk.IResolvable | CfnPackageGroup.OriginConfigurationProperty;
    /**
     * The pattern of the package group.
     *
     * The pattern determines which packages are associated with the package group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-pattern
     */
    readonly pattern: string;
    /**
     * A list of tags to be applied to the package group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
