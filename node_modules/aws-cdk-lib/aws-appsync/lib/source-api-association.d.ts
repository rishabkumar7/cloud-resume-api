import { Construct } from 'constructs';
import { CfnSourceApiAssociation } from './appsync.generated';
import { IGraphqlApi } from './graphqlapi-base';
import { IRole } from '../../aws-iam';
import { IResource, Resource } from '../../core';
/**
 * Merge type used to associate the source API
 */
export declare enum MergeType {
    /**
    * Manual merge. The merge must be triggered manually when the source API has changed.
    */
    MANUAL_MERGE = "MANUAL_MERGE",
    /**
    * Auto merge. The merge is triggered automatically when the source API has changed.
    */
    AUTO_MERGE = "AUTO_MERGE"
}
/**
 * Interface for AppSync Source Api Association
 */
export interface ISourceApiAssociation extends IResource {
    /**
     * The association id.
     */
    readonly associationId: string;
    /**
     * The association arn.
     */
    readonly associationArn: string;
    /**
     * The source api in the association.
     */
    readonly sourceApi: IGraphqlApi;
    /**
     * The merged api in the association.
     */
    readonly mergedApi: IGraphqlApi;
}
/**
 * The attributes for imported AppSync Source Api Association.
 */
export interface SourceApiAssociationAttributes {
    /**
     * The association arn.
     */
    readonly associationArn: string;
    /**
     * The source api in the association.
     */
    readonly sourceApi: IGraphqlApi;
    /**
     * The merged api in the association.
     */
    readonly mergedApi: IGraphqlApi;
}
/**
* Properties for SourceApiAssociation which associates an AppSync Source API with an AppSync Merged API
*/
export interface SourceApiAssociationProps {
    /**
     * The source api to associate.
     */
    readonly sourceApi: IGraphqlApi;
    /**
     * The merged api to associate.
     */
    readonly mergedApi: IGraphqlApi;
    /**
     * The merged api execution role for adding the access policy for the source api.
     */
    readonly mergedApiExecutionRole: IRole;
    /**
     * The merge type for the source
     *
     * @default - AUTO_MERGE
     */
    readonly mergeType?: MergeType;
    /**
     * The description of the source api association
     *
     * @default - None
     */
    readonly description?: string;
}
/**
 * AppSync SourceApiAssociation which associates an AppSync source API to an AppSync Merged API.
 * The initial creation of the SourceApiAssociation merges the source API into the Merged API schema.
 */
export declare class SourceApiAssociation extends Resource implements ISourceApiAssociation {
    /**
     * Import Appsync Source Api Association from source API, merged api, and merge type.
     */
    static fromSourceApiAssociationAttributes(scope: Construct, id: string, attrs: SourceApiAssociationAttributes): ISourceApiAssociation;
    /**
     * The association id.
     */
    readonly associationId: string;
    /**
     * The association arn.
     */
    readonly associationArn: string;
    /**
    * The underlying CFN source api association resource.
    */
    readonly association: CfnSourceApiAssociation;
    /**
     * The merged api in the association.
     */
    readonly mergedApi: IGraphqlApi;
    /**
     * The source api in the association.
     */
    readonly sourceApi: IGraphqlApi;
    /**
    * The merge type for the source api association.
    */
    readonly mergeType: MergeType;
    /**
    * The merged api execution role for attaching the access policy.
    */
    private readonly mergedApiExecutionRole?;
    constructor(scope: Construct, id: string, props: SourceApiAssociationProps);
}
/**
* Adds an IAM permission to the Merged API execution role for GraphQL access on the source AppSync api.
*
* @param sourceApiAssociation The CfnSourceApiAssociation resource which to add a permission to access at runtime.
* @param mergedApiExecutionRole The merged api execution role on which to add the permission.
*/
export declare function addSourceGraphQLPermission(sourceApiAssociation: CfnSourceApiAssociation, mergedApiExecutionRole: IRole): import("../../aws-iam").AddToPrincipalPolicyResult;
/**
* Adds an IAM permission to the Merged API execution role for automatically merging the source API metadata whenever
* the source API is updated.
* @param sourceApiAssociation The CfnSourceApiAssociation resource which to add permission to perform merge operations on.
* @param mergedApiExecutionRole The merged api execution role on which to add the permission.
*/
export declare function addSourceApiAutoMergePermission(sourceApiAssociation: CfnSourceApiAssociation, mergedApiExecutionRole: IRole): import("../../aws-iam").AddToPrincipalPolicyResult;
