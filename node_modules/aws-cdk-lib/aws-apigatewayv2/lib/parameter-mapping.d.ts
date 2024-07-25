/**
 * Represents a Mapping Value.
 */
export interface IMappingValue {
    /**
     * Represents a Mapping Value.
     */
    readonly value: string;
}
/**
 * Represents a Mapping Value.
 */
export declare class MappingValue implements IMappingValue {
    /**
    * Creates an empty mapping value.
    */
    static readonly NONE: MappingValue;
    /**
     * Creates a header mapping value.
     */
    static requestHeader(name: string): MappingValue;
    /**
     * Creates a query string mapping value.
     */
    static requestQueryString(name: string): MappingValue;
    /**
     * Creates a request body mapping value.
     */
    static requestBody(name: string): MappingValue;
    /**
     * Creates a request path mapping value.
     */
    static requestPath(): MappingValue;
    /**
     * Creates a request path parameter mapping value.
     */
    static requestPathParam(name: string): MappingValue;
    /**
     * Creates a context variable mapping value.
     */
    static contextVariable(variableName: string): MappingValue;
    /**
     * Creates a stage variable mapping value.
     */
    static stageVariable(variableName: string): MappingValue;
    /**
     * Creates a custom mapping value.
     */
    static custom(value: string): MappingValue;
    /**
     * Represents a Mapping Value.
     */
    readonly value: string;
    protected constructor(value: string);
}
/**
 * Represents a Parameter Mapping.
 */
export declare class ParameterMapping {
    /**
     * Creates a mapping from an object.
     */
    static fromObject(obj: {
        [key: string]: MappingValue;
    }): ParameterMapping;
    /**
    * Represents all created parameter mappings.
    */
    readonly mappings: {
        [key: string]: string;
    };
    constructor();
    /**
     * Creates a mapping to append a header.
     */
    appendHeader(name: string, value: MappingValue): ParameterMapping;
    /**
     * Creates a mapping to overwrite a header.
     */
    overwriteHeader(name: string, value: MappingValue): ParameterMapping;
    /**
     * Creates a mapping to remove a header.
     */
    removeHeader(name: string): ParameterMapping;
    /**
     * Creates a mapping to append a query string.
     */
    appendQueryString(name: string, value: MappingValue): ParameterMapping;
    /**
     * Creates a mapping to overwrite a querystring.
     */
    overwriteQueryString(name: string, value: MappingValue): ParameterMapping;
    /**
     * Creates a mapping to remove a querystring.
     */
    removeQueryString(name: string): ParameterMapping;
    /**
     * Creates a mapping to overwrite a path.
     */
    overwritePath(value: MappingValue): ParameterMapping;
    /**
     * Creates a custom mapping.
     */
    custom(key: string, value: string): ParameterMapping;
}
