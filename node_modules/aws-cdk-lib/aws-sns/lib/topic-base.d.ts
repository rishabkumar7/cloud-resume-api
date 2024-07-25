import * as constructs from 'constructs';
import { Construct } from 'constructs';
import { ITopicSubscription } from './subscriber';
import { Subscription } from './subscription';
import * as notifications from '../../aws-codestarnotifications';
import * as iam from '../../aws-iam';
import { IResource, Resource, ResourceProps } from '../../core';
/**
 * Represents an SNS topic
 */
export interface ITopic extends IResource, notifications.INotificationRuleTarget {
    /**
     * The ARN of the topic
     *
     * @attribute
     */
    readonly topicArn: string;
    /**
     * The name of the topic
     *
     * @attribute
     */
    readonly topicName: string;
    /**
     * Enables content-based deduplication for FIFO topics.
     *
     * @attribute
     */
    readonly contentBasedDeduplication: boolean;
    /**
     * Whether this topic is an Amazon SNS FIFO queue. If false, this is a standard topic.
     *
     * @attribute
     */
    readonly fifo: boolean;
    /**
     * Subscribe some endpoint to this topic
     */
    addSubscription(subscription: ITopicSubscription): Subscription;
    /**
     * Adds a statement to the IAM resource policy associated with this topic.
     *
     * If this topic was created in this stack (`new Topic`), a topic policy
     * will be automatically created upon the first call to `addToResourcePolicy`. If
     * the topic is imported (`Topic.import`), then this is a no-op.
     */
    addToResourcePolicy(statement: iam.PolicyStatement): iam.AddToResourcePolicyResult;
    /**
     * Grant topic publishing permissions to the given identity
     */
    grantPublish(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant topic subscribing permissions to the given identity
     */
    grantSubscribe(identity: iam.IGrantable): iam.Grant;
}
/**
 * Either a new or imported Topic
 */
export declare abstract class TopicBase extends Resource implements ITopic {
    abstract readonly topicArn: string;
    abstract readonly topicName: string;
    abstract readonly fifo: boolean;
    abstract readonly contentBasedDeduplication: boolean;
    /**
     * Controls automatic creation of policy objects.
     *
     * Set by subclasses.
     */
    protected abstract readonly autoCreatePolicy: boolean;
    /**
     * Adds a statement to enforce encryption of data in transit when publishing to the topic.
     */
    protected enforceSSL?: boolean;
    private policy?;
    constructor(scope: Construct, id: string, props?: ResourceProps);
    /**
     * Subscribe some endpoint to this topic
     */
    addSubscription(topicSubscription: ITopicSubscription): Subscription;
    /**
     * Adds a statement to the IAM resource policy associated with this topic.
     *
     * If this topic was created in this stack (`new Topic`), a topic policy
     * will be automatically created upon the first call to `addToResourcePolicy`. If
     * the topic is imported (`Topic.import`), then this is a no-op.
     */
    addToResourcePolicy(statement: iam.PolicyStatement): iam.AddToResourcePolicyResult;
    /**
     * Adds a statement to enforce encryption of data in transit when publishing to the topic.
     *
     * For more information, see https://docs.aws.amazon.com/sns/latest/dg/sns-security-best-practices.html#enforce-encryption-data-in-transit.
     */
    protected createSSLPolicyDocument(): iam.PolicyStatement;
    /**
     * Grant topic publishing permissions to the given identity
     */
    grantPublish(grantee: iam.IGrantable): iam.Grant;
    /**
     * Grant topic subscribing permissions to the given identity
     */
    grantSubscribe(grantee: iam.IGrantable): iam.Grant;
    /**
     * Represents a notification target
     * That allows SNS topic to associate with this rule target.
     */
    bindAsNotificationRuleTarget(_scope: constructs.Construct): notifications.NotificationRuleTargetConfig;
    private nextTokenId;
}
