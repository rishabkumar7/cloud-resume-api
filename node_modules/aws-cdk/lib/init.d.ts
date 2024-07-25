export interface CliInitOptions {
    readonly type?: string;
    readonly language?: string;
    readonly canUseNetwork?: boolean;
    readonly generateOnly?: boolean;
    readonly workDir?: string;
    readonly stackName?: string;
    readonly migrate?: boolean;
}
/**
 * Initialize a CDK package in the current directory
 */
export declare function cliInit(options: CliInitOptions): Promise<void>;
export declare class InitTemplate {
    private readonly basePath;
    readonly name: string;
    readonly languages: string[];
    static fromName(templatesDir: string, name: string): Promise<InitTemplate>;
    readonly description: string;
    readonly aliases: Set<string>;
    constructor(basePath: string, name: string, languages: string[], info: any);
    /**
     * @param name the name that is being checked
     * @returns ``true`` if ``name`` is the name of this template or an alias of it.
     */
    hasName(name: string): boolean;
    /**
     * Creates a new instance of this ``InitTemplate`` for a given language to a specified folder.
     *
     * @param language    the language to instantiate this template with
     * @param targetDirectory the directory where the template is to be instantiated into
     */
    install(language: string, targetDirectory: string, stackName?: string): Promise<void>;
    private installFiles;
    private installProcessed;
    private expand;
    /**
     * Adds context variables to `cdk.json` in the generated project directory to
     * enable future behavior for new projects.
     */
    private applyFutureFlags;
    addMigrateContext(projectDir: string): Promise<void>;
}
export declare function availableInitTemplates(): Promise<InitTemplate[]>;
export declare function availableInitLanguages(): Promise<string[]>;
export declare function printAvailableTemplates(language?: string): Promise<void>;
