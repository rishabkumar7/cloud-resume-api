/**
 * Guradrail settings for BedrockInvokeModel
 */
export declare class Guardrail {
    readonly guardrailIdentifier: string;
    readonly guardrailVersion: string;
    /**
     * Enable guardrail
     *
     * @param identifier The id or arn of the guardrail.
     * @param version The version of the guardrail.
     */
    static enable(identifier: string, version: number): Guardrail;
    /**
     * Enable guardrail with DRAFT version
     *
     * @param identifier The identifier of the guardrail. Must be between 1 and 2048 characters in length.
     */
    static enableDraft(identifier: string): Guardrail;
    /**
     * @param guardrailIdentifier The identitifier of guardrail.
     * @param guardrailVersion The version of guardrail.
     */
    private constructor();
}
