import { Construct } from 'constructs';
import { ITopic, TopicBase } from './topic-base';
import { IRole } from '../../aws-iam';
import { IKey } from '../../aws-kms';
/**
 * Properties for a new SNS topic
 */
export interface TopicProps {
    /**
     * A developer-defined string that can be used to identify this SNS topic.
     *
     * @default None
     */
    readonly displayName?: string;
    /**
     * A name for the topic.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique
     * physical ID and uses that ID for the topic name. For more information,
     * see Name Type.
     *
     * @default Generated name
     */
    readonly topicName?: string;
    /**
     * A KMS Key, either managed by this CDK app, or imported.
     *
     * @default None
     */
    readonly masterKey?: IKey;
    /**
     * Enables content-based deduplication for FIFO topics.
     *
     * @default None
     */
    readonly contentBasedDeduplication?: boolean;
    /**
     * Set to true to create a FIFO topic.
     *
     * @default None
     */
    readonly fifo?: boolean;
    /**
     * The list of delivery status logging configurations for the topic.
     *
     * @see https://docs.aws.amazon.com/sns/latest/dg/sns-topic-attributes.html.
     *
     * @default None
     */
    readonly loggingConfigs?: LoggingConfig[];
    /**
     * The number of days Amazon SNS retains messages.
     *
     * It can only be set for FIFO topics.
     *
     * @see https://docs.aws.amazon.com/sns/latest/dg/fifo-message-archiving-replay.html
     *
     * @default - do not archive messages
     */
    readonly messageRetentionPeriodInDays?: number;
    /**
     * Adds a statement to enforce encryption of data in transit when publishing to the topic.
     *
     * @see https://docs.aws.amazon.com/sns/latest/dg/sns-security-best-practices.html#enforce-encryption-data-in-transit.
     *
     * @default false
     */
    readonly enforceSSL?: boolean;
    /**
     * The signature version corresponds to the hashing algorithm used while creating the signature of the notifications,
     * subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.
     *
     * @see https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html.
     *
     * @default 1
     */
    readonly signatureVersion?: string;
    /**
     * Tracing mode of an Amazon SNS topic.
     *
     * @see https://docs.aws.amazon.com/sns/latest/dg/sns-active-tracing.html
     *
     * @default TracingConfig.PASS_THROUGH
     */
    readonly tracingConfig?: TracingConfig;
}
/**
 * A logging configuration for delivery status of messages sent from SNS topic to subscribed endpoints.
 *
 * @see https://docs.aws.amazon.com/sns/latest/dg/sns-topic-attributes.html.
 */
export interface LoggingConfig {
    /**
     * Indicates one of the supported protocols for the SNS topic.
     */
    readonly protocol: LoggingProtocol;
    /**
     * The IAM role to be used when logging failed message deliveries in Amazon CloudWatch.
     *
     * @default None
     */
    readonly failureFeedbackRole?: IRole;
    /**
     * The IAM role to be used when logging successful message deliveries in Amazon CloudWatch.
     *
     * @default None
     */
    readonly successFeedbackRole?: IRole;
    /**
     * The percentage of successful message deliveries to be logged in Amazon CloudWatch.
     *
     * Valid values are integer between 0-100
     *
     * @default None
     */
    readonly successFeedbackSampleRate?: number;
}
/**
 * The type of supported protocol for delivery status logging.
 */
export declare enum LoggingProtocol {
    /**
     * HTTP
     */
    HTTP = "http/s",
    /**
     * Amazon Simple Queue Service
     */
    SQS = "sqs",
    /**
     * AWS Lambda
     */
    LAMBDA = "lambda",
    /**
     * Amazon Kinesis Data Firehose
     */
    FIREHOSE = "firehose",
    /**
     * Platform application endpoint
     */
    APPLICATION = "application"
}
/**
 * The tracing mode of an Amazon SNS topic
 */
export declare enum TracingConfig {
    /**
     * The mode that topic passes trace headers received from the Amazon SNS publisher to its subscription.
     */
    PASS_THROUGH = "PassThrough",
    /**
     * The mode that Amazon SNS vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.
     */
    ACTIVE = "Active"
}
/**
 * Represents an SNS topic defined outside of this stack.
 */
export interface TopicAttributes {
    /**
     * The ARN of the SNS topic.
     */
    readonly topicArn: string;
    /**
     * Whether content-based deduplication is enabled.
     * Only applicable for FIFO topics.
     *
     * @default false
     */
    readonly contentBasedDeduplication?: boolean;
}
/**
 * A new SNS topic
 */
export declare class Topic extends TopicBase {
    /**
     * Import an existing SNS topic provided an ARN
     *
     * @param scope The parent creating construct
     * @param id The construct's name
     * @param topicArn topic ARN (i.e. arn:aws:sns:us-east-2:444455556666:MyTopic)
     */
    static fromTopicArn(scope: Construct, id: string, topicArn: string): ITopic;
    /**
     * Import an existing SNS topic provided a topic attributes
     *
     * @param scope The parent creating construct
     * @param id The construct's name
     * @param attrs the attributes of the topic to import
     */
    static fromTopicAttributes(scope: Construct, id: string, attrs: TopicAttributes): ITopic;
    readonly topicArn: string;
    readonly topicName: string;
    readonly contentBasedDeduplication: boolean;
    readonly fifo: boolean;
    protected readonly autoCreatePolicy: boolean;
    private readonly loggingConfigs;
    constructor(scope: Construct, id: string, props?: TopicProps);
    private renderLoggingConfigs;
    /**
     * Adds a delivery status logging configuration to the topic.
     */
    addLoggingConfig(config: LoggingConfig): void;
}
