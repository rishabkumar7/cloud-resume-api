import { Construct } from 'constructs';
import { IGraphqlApi, GraphqlApiBase, Visibility, AuthorizationType } from './graphqlapi-base';
import { ISchema } from './schema';
import { MergeType } from './source-api-association';
import { ICertificate } from '../../aws-certificatemanager';
import { IUserPool } from '../../aws-cognito';
import { Role, IRole } from '../../aws-iam';
import { IFunction } from '../../aws-lambda';
import { ILogGroup, RetentionDays } from '../../aws-logs';
import { CfnResource, Duration, Expiration, IResolvable } from '../../core';
/**
 * Interface to specify default or additional authorization(s)
 */
export interface AuthorizationMode {
    /**
     * One of possible four values AppSync supports
     *
     * @see https://docs.aws.amazon.com/appsync/latest/devguide/security.html
     *
     * @default - `AuthorizationType.API_KEY`
     */
    readonly authorizationType: AuthorizationType;
    /**
     * If authorizationType is `AuthorizationType.USER_POOL`, this option is required.
     * @default - none
     */
    readonly userPoolConfig?: UserPoolConfig;
    /**
     * If authorizationType is `AuthorizationType.API_KEY`, this option can be configured.
     * @default - name: 'DefaultAPIKey' | description: 'Default API Key created by CDK'
     */
    readonly apiKeyConfig?: ApiKeyConfig;
    /**
     * If authorizationType is `AuthorizationType.OIDC`, this option is required.
     * @default - none
     */
    readonly openIdConnectConfig?: OpenIdConnectConfig;
    /**
     * If authorizationType is `AuthorizationType.LAMBDA`, this option is required.
     * @default - none
     */
    readonly lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
}
/**
 * enum with all possible values for Cognito user-pool default actions
 */
export declare enum UserPoolDefaultAction {
    /**
     * ALLOW access to API
     */
    ALLOW = "ALLOW",
    /**
     * DENY access to API
     */
    DENY = "DENY"
}
/**
 * Configuration for Cognito user-pools in AppSync
 */
export interface UserPoolConfig {
    /**
     * The Cognito user pool to use as identity source
     */
    readonly userPool: IUserPool;
    /**
     * the optional app id regex
     *
     * @default -  None
     */
    readonly appIdClientRegex?: string;
    /**
     * Default auth action
     *
     * @default ALLOW
     */
    readonly defaultAction?: UserPoolDefaultAction;
}
/**
 * Configuration for API Key authorization in AppSync
 */
export interface ApiKeyConfig {
    /**
     * Unique name of the API Key
     * @default - 'DefaultAPIKey'
     */
    readonly name?: string;
    /**
     * Description of API key
     * @default - 'Default API Key created by CDK'
     */
    readonly description?: string;
    /**
     * The time from creation time after which the API key expires.
     * It must be a minimum of 1 day and a maximum of 365 days from date of creation.
     * Rounded down to the nearest hour.
     *
     * @default - 7 days rounded down to nearest hour
     */
    readonly expires?: Expiration;
}
/**
 * Configuration for OpenID Connect authorization in AppSync
 */
export interface OpenIdConnectConfig {
    /**
     * The number of milliseconds an OIDC token is valid after being authenticated by OIDC provider.
     * `auth_time` claim in OIDC token is required for this validation to work.
     * @default - no validation
     */
    readonly tokenExpiryFromAuth?: number;
    /**
     * The number of milliseconds an OIDC token is valid after being issued to a user.
     * This validation uses `iat` claim of OIDC token.
     * @default - no validation
     */
    readonly tokenExpiryFromIssue?: number;
    /**
     * The client identifier of the Relying party at the OpenID identity provider.
     * A regular expression can be specified so AppSync can validate against multiple client identifiers at a time.
     * @example - 'ABCD|CDEF' // where ABCD and CDEF are two different clientId
     * @default - * (All)
     */
    readonly clientId?: string;
    /**
     * The issuer for the OIDC configuration. The issuer returned by discovery must exactly match the value of `iss` in the OIDC token.
     */
    readonly oidcProvider: string;
}
/**
 * Configuration for Lambda authorization in AppSync. Note that you can only have a single AWS Lambda function configured to authorize your API.
 */
export interface LambdaAuthorizerConfig {
    /**
     * The authorizer lambda function.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-lambdaauthorizerconfig.html
     */
    readonly handler: IFunction;
    /**
     * How long the results are cached.
     * Disable caching by setting this to 0.
     *
     * @default Duration.minutes(5)
     */
    readonly resultsCacheTtl?: Duration;
    /**
     * A regular expression for validation of tokens before the Lambda function is called.
     *
     * @default - no regex filter will be applied.
     */
    readonly validationRegex?: string;
}
/**
 * Configuration of the API authorization modes.
 */
export interface AuthorizationConfig {
    /**
     * Optional authorization configuration
     *
     * @default - API Key authorization
     */
    readonly defaultAuthorization?: AuthorizationMode;
    /**
     * Additional authorization modes
     *
     * @default - No other modes
     */
    readonly additionalAuthorizationModes?: AuthorizationMode[];
}
/**
 * log-level for fields in AppSync
 */
export declare enum FieldLogLevel {
    /**
     * No logging
     */
    NONE = "NONE",
    /**
     * Error logging
     */
    ERROR = "ERROR",
    /**
     * All logging
     */
    ALL = "ALL"
}
/**
 * Logging configuration for AppSync
 */
export interface LogConfig {
    /**
     * exclude verbose content
     *
     * @default false
     */
    readonly excludeVerboseContent?: boolean | IResolvable;
    /**
     * log level for fields
     *
     * @default - Use AppSync default
     */
    readonly fieldLogLevel?: FieldLogLevel;
    /**
     * The role for CloudWatch Logs
     *
     * @default - None
     */
    readonly role?: IRole;
    /**
    * The number of days log events are kept in CloudWatch Logs.
    * By default AppSync keeps the logs infinitely. When updating this property,
    * unsetting it doesn't remove the log retention policy.
    * To remove the retention policy, set the value to `INFINITE`
    *
    * @default RetentionDays.INFINITE
    */
    readonly retention?: RetentionDays;
}
/**
 * Domain name configuration for AppSync
 */
export interface DomainOptions {
    /**
     * The certificate to use with the domain name.
     */
    readonly certificate: ICertificate;
    /**
     * The actual domain name. For example, `api.example.com`.
     */
    readonly domainName: string;
}
/**
 * Additional API configuration for creating a AppSync Merged API
 */
export interface SourceApiOptions {
    /**
     * Definition of source APIs associated with this Merged API
     */
    readonly sourceApis: SourceApi[];
    /**
     * IAM Role used to validate access to source APIs at runtime and to update the merged API endpoint with the source API changes
     *
     * @default - An IAM Role with acccess to source schemas will be created
     */
    readonly mergedApiExecutionRole?: Role;
}
/**
 * Configuration of source API
*/
export interface SourceApi {
    /**
     * Source API that is associated with the merged API
     */
    readonly sourceApi: IGraphqlApi;
    /**
     * Merging option used to associate the source API to the Merged API
     *
     * @default - Auto merge. The merge is triggered automatically when the source API has changed
     */
    readonly mergeType?: MergeType;
    /**
     * Description of the Source API asssociation.
     */
    readonly description?: string;
}
/**
 * AppSync definition. Specify how you want to define your AppSync API.
 */
export declare abstract class Definition {
    /**
     * Schema from schema object.
     * @param schema SchemaFile.fromAsset(filePath: string) allows schema definition through schema.graphql file
     * @returns Definition with schema from file
     */
    static fromSchema(schema: ISchema): Definition;
    /**
     * Schema from file, allows schema definition through schema.graphql file
     * @param filePath the file path of the schema file
     * @returns Definition with schema from file
     */
    static fromFile(filePath: string): Definition;
    /**
     * Schema from existing AppSync APIs - used for creating a AppSync Merged API
     * @param sourceApiOptions Configuration for AppSync Merged API
     * @returns Definition with for AppSync Merged API
     */
    static fromSourceApis(sourceApiOptions: SourceApiOptions): Definition;
    /**
     * Schema, when AppSync API is created from schema file
     */
    readonly schema?: ISchema;
    /**
     * Source APIs for Merged API
     */
    readonly sourceApiOptions?: SourceApiOptions;
}
/**
 * Properties for an AppSync GraphQL API
 */
export interface GraphqlApiProps {
    /**
     * the name of the GraphQL API
     */
    readonly name: string;
    /**
     * Optional authorization configuration
     *
     * @default - API Key authorization
     */
    readonly authorizationConfig?: AuthorizationConfig;
    /**
     * Logging configuration for this api
     *
     * @default - None
     */
    readonly logConfig?: LogConfig;
    /**
     * Definition (schema file or source APIs) for this GraphQL Api
     */
    readonly definition?: Definition;
    /**
     * GraphQL schema definition. Specify how you want to define your schema.
     *
     * SchemaFile.fromAsset(filePath: string) allows schema definition through schema.graphql file
     *
     * @default - schema will be generated code-first (i.e. addType, addObjectType, etc.)
     * @deprecated use Definition.schema instead
     */
    readonly schema?: ISchema;
    /**
     * A flag indicating whether or not X-Ray tracing is enabled for the GraphQL API.
     *
     * @default - false
     */
    readonly xrayEnabled?: boolean;
    /**
     * A value indicating whether the API is accessible from anywhere (GLOBAL) or can only be access from a VPC (PRIVATE).
     *
     * @default - GLOBAL
     */
    readonly visibility?: Visibility;
    /**
     * The domain name configuration for the GraphQL API
     *
     * The Route 53 hosted zone and CName DNS record must be configured in addition to this setting to
     * enable custom domain URL
     *
     * @default - no domain name
     */
    readonly domainName?: DomainOptions;
    /**
     * A value indicating whether the API to enable (ENABLED) or disable (DISABLED) introspection.
     *
     * @default IntrospectionConfig.ENABLED
     */
    readonly introspectionConfig?: IntrospectionConfig;
    /**
     * A number indicating the maximum depth resolvers should be accepted when handling queries.
     * Value must be withing range of 0 to 75
     *
     * @default - The default value is 0 (or unspecified) which indicates no maximum depth.
     */
    readonly queryDepthLimit?: number;
    /**
     * A number indicating the maximum number of resolvers that should be accepted when handling queries.
     * Value must be withing range of 0 to 10000
     *
     * @default - The default value is 0 (or unspecified), which will set the limit to 10000
     */
    readonly resolverCountLimit?: number;
    /**
     * A map containing the list of resources with their properties and environment variables.
     *
     * There are a few rules you must follow when creating keys and values:
     *   - Keys must begin with a letter.
     *   - Keys must be between 2 and 64 characters long.
     *   - Keys can only contain letters, numbers, and the underscore character (_).
     *   - Values can be up to 512 characters long.
     *   - You can configure up to 50 key-value pairs in a GraphQL API.
     *
     * @default - No environment variables.
     */
    readonly environmentVariables?: {
        [key: string]: string;
    };
}
/**
 * Attributes for GraphQL imports
 */
export interface GraphqlApiAttributes {
    /**
     * an unique AWS AppSync GraphQL API identifier
     * i.e. 'lxz775lwdrgcndgz3nurvac7oa'
     */
    readonly graphqlApiId: string;
    /**
     * the arn for the GraphQL Api
     * @default - autogenerated arn
     */
    readonly graphqlApiArn?: string;
    /**
     * The GraphQl endpoint arn for the GraphQL API
     *
     * @default - none, required to construct event rules from imported APIs
     */
    readonly graphQLEndpointArn?: string;
    /**
     * The GraphQl API visibility
     *
     * @default - GLOBAL
     */
    readonly visibility?: Visibility;
    /**
     * The Authorization Types for this GraphQL Api
     *
     * @default - none, required to construct event rules from imported APIs
     */
    readonly modes?: AuthorizationType[];
}
/**
 * Introspection configuration  for a GraphQL API
 */
export declare enum IntrospectionConfig {
    /**
     * Enable introspection
     */
    ENABLED = "ENABLED",
    /**
     * Disable introspection
     */
    DISABLED = "DISABLED"
}
/**
 * An AppSync GraphQL API
 *
 * @resource AWS::AppSync::GraphQLApi
 */
export declare class GraphqlApi extends GraphqlApiBase {
    /**
     * Import a GraphQL API through this function
     *
     * @param scope scope
     * @param id id
     * @param attrs GraphQL API Attributes of an API
     */
    static fromGraphqlApiAttributes(scope: Construct, id: string, attrs: GraphqlApiAttributes): IGraphqlApi;
    /**
     * an unique AWS AppSync GraphQL API identifier
     * i.e. 'lxz775lwdrgcndgz3nurvac7oa'
     */
    readonly apiId: string;
    /**
     * the ARN of the API
     */
    readonly arn: string;
    /**
     * The GraphQL endpoint ARN
     */
    readonly graphQLEndpointArn: string;
    /**
     * the URL of the endpoint created by AppSync
     *
     * @attribute GraphQlUrl
     */
    readonly graphqlUrl: string;
    /**
     * the name of the API
     */
    readonly name: string;
    /**
     * the visibility of the API
     */
    readonly visibility: Visibility;
    /**
     * the schema attached to this api (only available for GraphQL APIs, not available for merged APIs)
     */
    get schema(): ISchema;
    /**
     * The Authorization Types for this GraphQL Api
     */
    readonly modes: AuthorizationType[];
    /**
     * the configured API key, if present
     *
     * @default - no api key
     */
    readonly apiKey?: string;
    /**
     * the CloudWatch Log Group for this API
     */
    readonly logGroup: ILogGroup;
    private definition;
    private schemaResource?;
    private api;
    private apiKeyResource?;
    private domainNameResource?;
    private mergedApiExecutionRole?;
    private environmentVariables;
    constructor(scope: Construct, id: string, props: GraphqlApiProps);
    private setupSourceApiAssociations;
    private setupMergedApiExecutionRole;
    private validateAuthorizationProps;
    /**
     * Add schema dependency to a given construct
     *
     * @param construct the dependee
     */
    addSchemaDependency(construct: CfnResource): boolean;
    /**
     * Add an environment variable to the construct.
     */
    addEnvironmentVariable(key: string, value: string): void;
    private validateEnvironmentVariables;
    private renderEnvironmentVariables;
    private setupLogConfig;
    private setupOpenIdConnectConfig;
    private setupUserPoolConfig;
    private setupLambdaAuthorizerConfig;
    private setupAdditionalAuthorizationModes;
    private createAPIKey;
    /**
     * The AppSyncDomainName of the associated custom domain
     */
    get appSyncDomainName(): string;
}
