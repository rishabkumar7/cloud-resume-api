import { Stack } from '../../core';
type ManifestTags = {
    [key: string]: string;
};
/**
 * Allows assertions on the tags associated with a synthesized CDK stack's
 * manifest. Stack tags are not part of the synthesized template, so can only be
 * checked from the manifest in this manner.
 */
export declare class Tags {
    /**
     * Find tags associated with a synthesized CDK `Stack`.
     *
     * @param stack the CDK Stack to find tags on.
     */
    static fromStack(stack: Stack): Tags;
    private readonly _tags;
    private constructor();
    /**
     * Assert that the given Matcher or object matches the tags associated with
     * the synthesized CDK Stack's manifest.
     *
     * @param tags the expected set of tags. This should be a
     * string or Matcher object.
     */
    hasValues(tags: any): void;
    /**
     * Assert that the there are no tags associated with the synthesized CDK
     * Stack's manifest.
     *
     * This is a convenience method over `hasValues(Match.exact({}))`, and is
     * present because the more obvious method of detecting no tags
     * (`Match.absent()`) will not work. Manifests default the tag set to an empty
     * object.
     */
    hasNone(): void;
    /**
     * Get the tags associated with the manifest. This will be an empty object if
     * no tags were supplied.
     *
     * @returns The tags associated with the stack's synthesized manifest.
     */
    all(): ManifestTags;
}
export {};
