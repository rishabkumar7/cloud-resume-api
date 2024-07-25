import { Construct } from 'constructs';
import { IModel } from './model-base';
/**
 * The model identifiers for the Bedrock base foundation models.
 *
 * @see https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html
 */
export declare class FoundationModelIdentifier {
    readonly modelId: string;
    /** Base model "amazon.titan-tg1-large". */
    static readonly AMAZON_TITAN_TG1_LARGE: FoundationModelIdentifier;
    /** Base model "amazon.titan-text-lite-v1". */
    static readonly AMAZON_TITAN_TEXT_LITE_V1: FoundationModelIdentifier;
    /** Base model "amazon.titan-text-lite-v1:0:4k". */
    static readonly AMAZON_TITAN_TEXT_LITE_V1_0_4K: FoundationModelIdentifier;
    /** Base model "amazon.titan-text-express-v1:0:8k". */
    static readonly AMAZON_TITAN_TEXT_EXPRESS_V1_0_8K: FoundationModelIdentifier;
    /** Base model "amazon.titan-text-express-v1". */
    static readonly AMAZON_TITAN_TEXT_G1_EXPRESS_V1: FoundationModelIdentifier;
    /** Base model "amazon.titan-text-lite-v1". */
    static readonly AMAZON_TITAN_TEXT_G1_LITE_V1: FoundationModelIdentifier;
    /** Base model "amazon.titan-text-premier-v1:0". */
    static readonly AMAZON_TITAN_TEXT_PREMIER_V1: FoundationModelIdentifier;
    /** Base model "amazon.titan-embed-text-v1". */
    static readonly AMAZON_TITAN_EMBEDDINGS_G1_TEXT_V1: FoundationModelIdentifier;
    /** Base model "amazon.titan-embed-text-v1:2:8k". */
    static readonly AMAZON_TITAN_EMBED_TEXT_V1_2_8K: FoundationModelIdentifier;
    /** Base model "amazon.titan-embed-g1-text-02". */
    static readonly AMAZON_TITAN_EMBED_G1_TEXT_02: FoundationModelIdentifier;
    /** Base model "amazon.titan-embed-text-v2:0". */
    static readonly AMAZON_TITAN_EMBED_TEXT_V2_0: FoundationModelIdentifier;
    /** Base model "amazon.titan-embed-text-v2:0:8k". */
    static readonly AMAZON_TITAN_EMBED_TEXT_V2_0_8K: FoundationModelIdentifier;
    /** Base model "amazon.titan-image-generator-v1". */
    static readonly AMAZON_TITAN_IMAGE_GENERATOR_G1_V1: FoundationModelIdentifier;
    /** Base model "amazon.titan-image-generator-v1:0". */
    static readonly AMAZON_TITAN_IMAGE_GENERATOR_V1_0: FoundationModelIdentifier;
    /** Base model "amazon.titan-embed-image-v1:0". */
    static readonly AMAZON_TITAN_EMBED_IMAGE_V1_0: FoundationModelIdentifier;
    /** Base model "amazon.titan-embed-image-v1". */
    static readonly AMAZON_TITAN_MULTIMODAL_EMBEDDINGS_G1_V1: FoundationModelIdentifier;
    /** Base model "ai21.j2-mid". */
    static readonly AI21_J2_MID: FoundationModelIdentifier;
    /** Base model "ai21.j2-mid-v1". */
    static readonly AI21_LABS_JURASSIC_2_MID_V1: FoundationModelIdentifier;
    /** Base model "ai21.j2-ultra". */
    static readonly AI21_J2_ULTRA: FoundationModelIdentifier;
    /** Base model "ai21.j2-ultra-v1". */
    static readonly AI21_LABS_JURASSIC_2_ULTRA_V1: FoundationModelIdentifier;
    /** Base model "ai21.j2-ultra-v1:0:8k". */
    static readonly AI21_LABS_JURASSIC_2_ULTRA_V1_0_8K: FoundationModelIdentifier;
    /** Base model "ai21.j2-grande-instruct". */
    static readonly AI21_J2_GRANDE_INSTRUCT: FoundationModelIdentifier;
    /** Base model "ai21.j2-jumbo-instruct". */
    static readonly AI21_J2_JUMBO_INSTRUCT: FoundationModelIdentifier;
    /** Base model "ai21.jamba-instruct-v1:0". */
    static readonly AI21_J2_JAMBA_INSTRUCT_V1_0: FoundationModelIdentifier;
    /**
     * Base model "anthropic.claude-v1".
     * @deprecated use latest version of the model
     **/
    static readonly ANTHROPIC_CLAUDE_V1: FoundationModelIdentifier;
    /** Base model "anthropic.claude-v2". */
    static readonly ANTHROPIC_CLAUDE_V2: FoundationModelIdentifier;
    /** Base model "anthropic.claude-v2:0:18k". */
    static readonly ANTHROPIC_CLAUDE_V2_0_18K: FoundationModelIdentifier;
    /** Base model "anthropic.claude-v2:0:100k". */
    static readonly ANTHROPIC_CLAUDE_V2_0_100K: FoundationModelIdentifier;
    /** Base model "anthropic.claude-v2:1". */
    static readonly ANTHROPIC_CLAUDE_V2_1: FoundationModelIdentifier;
    /** Base model "anthropic.claude-v2:1:18k". */
    static readonly ANTHROPIC_CLAUDE_V2_1_18K: FoundationModelIdentifier;
    /** Base model "anthropic.claude-v2:1:200k". */
    static readonly ANTHROPIC_CLAUDE_V2_1_200K: FoundationModelIdentifier;
    /** Base model "anthropic.claude-3-sonnet-20240229-v1:0". */
    static readonly ANTHROPIC_CLAUDE_3_SONNET_20240229_V1_0: FoundationModelIdentifier;
    /** Base model "anthropic.claude-3-sonnet-20240229-v1:0:28k" */
    static readonly ANTHROPIC_CLAUDE_3_SONNET_20240229_V1_0_28K: FoundationModelIdentifier;
    /** Base model "anthropic.claude-3-sonnet-20240229-v1:0:200k" */
    static readonly ANTHROPIC_CLAUDE_3_SONNET_20240229_V1_0_200K: FoundationModelIdentifier;
    /** Base model "anthropic.claude-3-5-sonnet-20240620-v1:0" */
    static readonly ANTHROPIC_CLAUDE_3_5_SONNET_20240620_V1_0: FoundationModelIdentifier;
    /** Base model "anthropic.claude-3-haiku-20240307-v1:0". */
    static readonly ANTHROPIC_CLAUDE_3_HAIKU_20240307_V1_0: FoundationModelIdentifier;
    /** Base model "anthropic.claude-3-haiku-20240307-v1:0:48k" */
    static readonly ANTHROPIC_CLAUDE_3_HAIKU_20240307_V1_0_48K: FoundationModelIdentifier;
    /** Base model "anthropic.claude-3-haiku-20240307-v1:0:200k" */
    static readonly ANTHROPIC_CLAUDE_3_HAIKU_20240307_V1_0_200K: FoundationModelIdentifier;
    /** Base model "anthropic.claude-3-opus-20240229-v1:0" */
    static readonly ANTHROPIC_CLAUDE_3_OPUS_20240229_V1_0: FoundationModelIdentifier;
    /** Base model "anthropic.claude-instant-v1". */
    static readonly ANTHROPIC_CLAUDE_INSTANT_V1: FoundationModelIdentifier;
    /** Base model "anthropic.claude-instant-v1:2:100k". */
    static readonly ANTHROPIC_CLAUDE_INSTANT_V1_2_100K: FoundationModelIdentifier;
    /** Base model "cohere.command-text-v14". */
    static readonly COHERE_COMMAND_V14: FoundationModelIdentifier;
    /** Base model "cohere.command-light-text-v14". */
    static readonly COHERE_COMMAND_LIGHT_V14: FoundationModelIdentifier;
    /** Base model "cohere.command-text-v14:7:4k". */
    static readonly COHERE_COMMAND_TEXT_V14_7_4K: FoundationModelIdentifier;
    /** Base model "cohere.command-light-text-v14:7:4k". */
    static readonly COHERE_COMMAND_LIGHT_TEXT_V14_7_4K: FoundationModelIdentifier;
    /** Base model "cohere.command-r-v1:0". */
    static readonly COHERE_COMMAND_R_V1: FoundationModelIdentifier;
    /** Base model "cohere.command-r-v1:0". */
    static readonly COHERE_COMMAND_R_PLUS_V1: FoundationModelIdentifier;
    /** Base model "cohere.embed-english-v3". */
    static readonly COHERE_EMBED_ENGLISH_V3: FoundationModelIdentifier;
    /** Base model "cohere.embed-english-v3:0:512". */
    static readonly COHERE_EMBED_ENGLISH_V3_0_512: FoundationModelIdentifier;
    /** Base model "cohere.embed-multilingual-v3". */
    static readonly COHERE_EMBED_MULTILINGUAL_V3: FoundationModelIdentifier;
    /** Base model "cohere.embed-multilingual-v3:0:512". */
    static readonly COHERE_EMBED_MULTILINGUAL_V3_0_512: FoundationModelIdentifier;
    /** Base model "meta.llama2-13b-v1". */
    static readonly META_LLAMA_2_13B_V1: FoundationModelIdentifier;
    /** Base model "meta.llama2-13b-v1:0:4k". */
    static readonly META_LLAMA_2_13B_V1_0_4K: FoundationModelIdentifier;
    /** Base model "meta.llama2-13b-chat-v1:0:4k". */
    static readonly META_LLAMA_2_13B_CHAT_V1_0_4K: FoundationModelIdentifier;
    /** Base model "meta.llama2-70b-v1". */
    static readonly META_LLAMA_2_70B_V1: FoundationModelIdentifier;
    /** Base model "meta.llama2-70b-v1:0:4k". */
    static readonly META_LLAMA_2_70B_V1_0_4K: FoundationModelIdentifier;
    /** Base model "meta.llama2-13b-chat-v1". */
    static readonly META_LLAMA_2_CHAT_13B_V1: FoundationModelIdentifier;
    /** Base model "meta.llama2-70b-chat-v1". */
    static readonly META_LLAMA_2_CHAT_70B_V1: FoundationModelIdentifier;
    /** Base model "meta.llama2-70b-chat-v1:0:4k". */
    static readonly META_LLAMA_2_70B_CHAT_V1_0_4K: FoundationModelIdentifier;
    /** Base model "meta.llama3-8b-instruct-v1:0". */
    static readonly META_LLAMA_3_8B_INSTRUCT_V1: FoundationModelIdentifier;
    /** Base model "meta.llama3-70b-instruct-v1:0". */
    static readonly META_LLAMA_3_70_INSTRUCT_V1: FoundationModelIdentifier;
    /** Base model "mistral.mistral-7b-instruct-v0:2". */
    static readonly MISTRAL_MISTRAL_7B_INSTRUCT_V0_2: FoundationModelIdentifier;
    /** Base model "mistral.mixtral-8x7b-instruct-v0:1". */
    static readonly MISTRAL_MIXTRAL_8X7B_INSTRUCT_V0_1: FoundationModelIdentifier;
    /** Base model "mistral.mistral-large-2402-v1:0". */
    static readonly MISTRAL_LARGE_V0_1: FoundationModelIdentifier;
    /** Base model "mistral.mistral-small-2402-v1:0". */
    static readonly MISTRAL_SMALL_V0_1: FoundationModelIdentifier;
    /**
     * Base model "stability.stable-diffusion-xl".
     * @deprecated use latest version of the model
     **/
    static readonly STABILITY_STABLE_DIFFUSION_XL: FoundationModelIdentifier;
    /**
     *  Base model "stability.stable-diffusion-xl-v0".
     * @deprecated use latest version of the model
     */
    static readonly STABILITY_STABLE_DIFFUSION_XL_V0: FoundationModelIdentifier;
    /** Base model "stability.stable-diffusion-xl-v1". */
    static readonly STABILITY_STABLE_DIFFUSION_XL_V1: FoundationModelIdentifier;
    /** Base model "stability.stable-diffusion-xl-v1:0". */
    static readonly STABILITY_STABLE_DIFFUSION_XL_V1_0: FoundationModelIdentifier;
    /**
     * Constructor for foundation model identifier
     * @param modelId the model identifier
     */
    constructor(modelId: string);
}
/**
 * A Bedrock base foundation model.
 *
 * @see https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html
 */
export declare class FoundationModel implements IModel {
    /**
     * Construct a Bedrock base foundation model given the model identifier.
     *
     * @see https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids-arns.html
     *
     * @param scope The parent construct
     * @param _id The name of the model construct
     * @param foundationModelId The model identifier such as 'amazon.titan-text-express-v1'
     * @returns A Bedrock base foundation model.
     */
    static fromFoundationModelId(scope: Construct, _id: string, foundationModelId: FoundationModelIdentifier): FoundationModel;
    /**
     * The foundation model ID.
     * @example 'amazon.titan-text-express-v1'
     */
    readonly modelId: string;
    /**
     * The foundation model ARN.
     */
    readonly modelArn: string;
    private constructor();
}
