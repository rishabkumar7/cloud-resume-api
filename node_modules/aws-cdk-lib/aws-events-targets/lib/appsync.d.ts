import { TargetBaseProps } from './util';
import * as appsync from '../../aws-appsync';
import * as events from '../../aws-events';
import * as iam from '../../aws-iam';
/**
 * Customize the AppSync GraphQL API target
 */
export interface AppSyncGraphQLApiProps extends TargetBaseProps {
    /**
     * The GraphQL operation; that is, the query, mutation, or subscription
     * to be parsed and executed by the GraphQL service.
     */
    readonly graphQLOperation: string;
    /**
     * The variables that are include in the GraphQL operation.
     *
     * @default - The entire event is used
     */
    readonly variables?: events.RuleTargetInput;
    /**
     * The role to assume before invoking the target
     * (i.e., the pipeline) when the given rule is triggered.
     *
     * @default - a new role with permissions to access mutations will be created
     */
    readonly eventRole?: iam.IRole;
}
/**
 * Use an AppSync GraphQL API as a target for Amazon EventBridge rules.
 */
export declare class AppSync implements events.IRuleTarget {
    private readonly appsyncApi;
    private readonly props;
    constructor(appsyncApi: appsync.IGraphqlApi, props: AppSyncGraphQLApiProps);
    /**
     * Returns a RuleTarget that can be used to trigger this AppSync GraphQL API
     * as a result from an EventBridge event.
     */
    bind(rule: events.IRule, _id?: string): events.RuleTargetConfig;
}
