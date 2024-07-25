import * as events from '../../aws-events';
import * as firehose from '../../aws-kinesisfirehose';
import { IResource } from '../../core';
/**
 * Customize the Firehose Stream Event Target
 */
export interface KinesisFirehoseStreamProps {
    /**
     * The message to send to the stream.
     *
     * Must be a valid JSON text passed to the target stream.
     *
     * @default - the entire Event Bridge event
     */
    readonly message?: events.RuleTargetInput;
}
/**
 * Customize the Firehose Stream Event Target
 *
 * @deprecated Use KinesisFirehoseStreamV2
 */
export declare class KinesisFirehoseStream implements events.IRuleTarget {
    private readonly stream;
    private readonly props;
    constructor(stream: firehose.CfnDeliveryStream, props?: KinesisFirehoseStreamProps);
    /**
     * Returns a RuleTarget that can be used to trigger this Firehose Stream as a
     * result from a Event Bridge event.
     */
    bind(_rule: events.IRule, _id?: string): events.RuleTargetConfig;
}
/**
 * Represents a Kinesis Data Firehose delivery stream.
 */
export interface IDeliveryStream extends IResource {
    /**
     * The ARN of the delivery stream.
     *
     * @attribute
     */
    readonly deliveryStreamArn: string;
    /**
     * The name of the delivery stream.
     *
     * @attribute
     */
    readonly deliveryStreamName: string;
}
/**
 * Customize the Firehose Stream Event Target V2 to support L2 Kinesis Delivery Stream
 * instead of L1 Cfn Kinesis Delivery Stream.
 */
export declare class KinesisFirehoseStreamV2 implements events.IRuleTarget {
    private readonly stream;
    private readonly props;
    constructor(stream: IDeliveryStream, props?: KinesisFirehoseStreamProps);
    /**
     * Returns a RuleTarget that can be used to trigger this Firehose Stream as a
     * result from a Event Bridge event.
     */
    bind(_rule: events.IRule, _id?: string): events.RuleTargetConfig;
}
