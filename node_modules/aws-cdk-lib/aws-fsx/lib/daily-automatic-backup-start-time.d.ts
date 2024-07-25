/**
 * Properties required for setting up a daily automatic backup time.
 */
export interface DailyAutomaticBackupStartTimeProps {
    /**
     * The hour of the day (from 0-23) for automatic backup starts.
     */
    readonly hour: number;
    /**
     * The minute of the hour (from 0-59) for automatic backup starts.
     */
    readonly minute: number;
}
/**
 * Class for scheduling a daily automatic backup time.
 */
export declare class DailyAutomaticBackupStartTime {
    /**
     * The start hour of the automatic backup time in Coordinated Universal Time (UTC), using 24-hour time.
     * For example, 17 refers to 5:00 P.M. UTC.
     *
     * @default - 22
     */
    private readonly hour;
    /**
     * The start minute of the automatic backup time, in UTC.
     *
     * @default - 0
     */
    private readonly minute;
    constructor(props: DailyAutomaticBackupStartTimeProps);
    /**
     * Converts an hour, and minute into HH:MM string.
     */
    toTimestamp(): string;
    /**
     * Pad an integer so that it always contains at least 2 digits. Assumes the number is a positive integer.
     */
    private getTwoDigitString;
    /**
     * Validation needed for the values of the daily automatic backup time.
     */
    private validate;
}
