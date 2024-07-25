import { IAlarm } from './alarm-base';
import { IMetric } from './metric-types';
import { ConcreteWidget } from './widget';
import * as cdk from '../../core';
/**
 * Basic properties for widgets that display metrics
 */
export interface MetricWidgetProps {
    /**
     * Title for the graph
     *
     * @default - None
     */
    readonly title?: string;
    /**
     * The region the metrics of this graph should be taken from
     *
     * @default - Current region
     */
    readonly region?: string;
    /**
     * Width of the widget, in a grid of 24 units wide
     *
     * @default 6
     */
    readonly width?: number;
    /**
     * Height of the widget
     *
     * @default - 6 for Alarm and Graph widgets.
     *   3 for single value widgets where most recent value of a metric is displayed.
     */
    readonly height?: number;
}
/**
 * Properties for a Y-Axis
 */
export interface YAxisProps {
    /**
     * The min value
     *
     * @default 0
     */
    readonly min?: number;
    /**
     * The max value
     *
     * @default - No maximum value
     */
    readonly max?: number;
    /**
     * The label
     *
     * @default - No label
     */
    readonly label?: string;
    /**
     * Whether to show units
     *
     * @default true
     */
    readonly showUnits?: boolean;
}
/**
 * Properties for an AlarmWidget
 */
export interface AlarmWidgetProps extends MetricWidgetProps {
    /**
     * The alarm to show
     */
    readonly alarm: IAlarm;
    /**
     * Left Y axis
     *
     * @default - No minimum or maximum values for the left Y-axis
     */
    readonly leftYAxis?: YAxisProps;
}
/**
 * Display the metric associated with an alarm, including the alarm line
 */
export declare class AlarmWidget extends ConcreteWidget {
    private readonly props;
    constructor(props: AlarmWidgetProps);
    toJson(): any[];
}
/**
 * Types of view
 */
export declare enum GraphWidgetView {
    /**
     * Display as a line graph.
     */
    TIME_SERIES = "timeSeries",
    /**
     * Display as a bar graph.
     */
    BAR = "bar",
    /**
     * Display as a pie graph.
     */
    PIE = "pie"
}
/**
 * Properties for a GaugeWidget
 */
export interface GaugeWidgetProps extends MetricWidgetProps {
    /**
     * Metrics to display on left Y axis
     *
     * @default - No metrics
     */
    readonly metrics?: IMetric[];
    /**
     * Annotations for the left Y axis
     *
     * @default - No annotations
     */
    readonly annotations?: HorizontalAnnotation[];
    /**
     * Left Y axis
     *
     * @default - None
     */
    readonly leftYAxis?: YAxisProps;
    /**
     * Position of the legend
     *
     * @default - bottom
     */
    readonly legendPosition?: LegendPosition;
    /**
     * Whether the graph should show live data
     *
     * @default false
     */
    readonly liveData?: boolean;
    /**
     * Whether to show the value from the entire time range. Only applicable for Bar and Pie charts.
     *
     * If false, values will be from the most recent period of your chosen time range;
     * if true, shows the value from the entire time range.
     *
     * @default false
     */
    readonly setPeriodToTimeRange?: boolean;
    /**
     * The default period for all metrics in this widget.
     * The period is the length of time represented by one data point on the graph.
     * This default can be overridden within each metric definition.
     *
     * @default cdk.Duration.seconds(300)
     */
    readonly period?: cdk.Duration;
    /**
     * The default statistic to be displayed for each metric.
     * This default can be overridden within the definition of each individual metric
     *
     * @default - The statistic for each metric is used
     */
    readonly statistic?: string;
    /**
     * The start of the time range to use for each widget independently from those of the dashboard.
     * You can specify start without specifying end to specify a relative time range that ends with the current time.
     * In this case, the value of start must begin with -P, and you can use M, H, D, W and M as abbreviations for
     * minutes, hours, days, weeks and months. For example, -PT8H shows the last 8 hours and -P3M shows the last three months.
     * You can also use start along with an end field, to specify an absolute time range.
     * When specifying an absolute time range, use the ISO 8601 format. For example, 2018-12-17T06:00:00.000Z.
     *
     * @default When the dashboard loads, the start time will be the default time range.
     */
    readonly start?: string;
    /**
     * The end of the time range to use for each widget independently from those of the dashboard.
     * If you specify a value for end, you must also specify a value for start.
     * Specify an absolute time in the ISO 8601 format. For example, 2018-12-17T06:00:00.000Z.
     *
     * @default When the dashboard loads, the end date will be the current time.
     */
    readonly end?: string;
}
/**
 * A dashboard gauge widget that displays metrics
 */
export declare class GaugeWidget extends ConcreteWidget {
    private readonly props;
    private readonly metrics;
    constructor(props: GaugeWidgetProps);
    /**
     * Add another metric to the left Y axis of the GaugeWidget
     *
     * @param metric the metric to add
     */
    addMetric(metric: IMetric): void;
    toJson(): any[];
}
/**
 * Properties for a GraphWidget
 */
export interface GraphWidgetProps extends MetricWidgetProps {
    /**
     * Metrics to display on left Y axis
     *
     * @default - No metrics
     */
    readonly left?: IMetric[];
    /**
     * Metrics to display on right Y axis
     *
     * @default - No metrics
     */
    readonly right?: IMetric[];
    /**
     * Annotations for the left Y axis
     *
     * @default - No annotations
     */
    readonly leftAnnotations?: HorizontalAnnotation[];
    /**
     * Annotations for the right Y axis
     *
     * @default - No annotations
     */
    readonly rightAnnotations?: HorizontalAnnotation[];
    /**
     * Annotations for the X axis
     *
     * @default - No annotations
     */
    readonly verticalAnnotations?: VerticalAnnotation[];
    /**
     * Whether the graph should be shown as stacked lines
     *
     * @default false
     */
    readonly stacked?: boolean;
    /**
     * Left Y axis
     *
     * @default - None
     */
    readonly leftYAxis?: YAxisProps;
    /**
     * Right Y axis
     *
     * @default - None
     */
    readonly rightYAxis?: YAxisProps;
    /**
     * Position of the legend
     *
     * @default - bottom
     */
    readonly legendPosition?: LegendPosition;
    /**
     * Whether the graph should show live data
     *
     * @default false
     */
    readonly liveData?: boolean;
    /**
     * Display this metric
     *
     * @default TimeSeries
     */
    readonly view?: GraphWidgetView;
    /**
     * Whether to show the value from the entire time range. Only applicable for Bar and Pie charts.
     *
     * If false, values will be from the most recent period of your chosen time range;
     * if true, shows the value from the entire time range.
     *
     * @default false
     */
    readonly setPeriodToTimeRange?: boolean;
    /**
     * The default period for all metrics in this widget.
     * The period is the length of time represented by one data point on the graph.
     * This default can be overridden within each metric definition.
     *
     * @default cdk.Duration.seconds(300)
     */
    readonly period?: cdk.Duration;
    /**
     * The default statistic to be displayed for each metric.
     * This default can be overridden within the definition of each individual metric
     *
     * @default - The statistic for each metric is used
     */
    readonly statistic?: string;
    /**
     * The start of the time range to use for each widget independently from those of the dashboard.
     * You can specify start without specifying end to specify a relative time range that ends with the current time.
     * In this case, the value of start must begin with -P, and you can use M, H, D, W and M as abbreviations for
     * minutes, hours, days, weeks and months. For example, -PT8H shows the last 8 hours and -P3M shows the last three months.
     * You can also use start along with an end field, to specify an absolute time range.
     * When specifying an absolute time range, use the ISO 8601 format. For example, 2018-12-17T06:00:00.000Z.
     *
     * @default When the dashboard loads, the start time will be the default time range.
     */
    readonly start?: string;
    /**
     * The end of the time range to use for each widget independently from those of the dashboard.
     * If you specify a value for end, you must also specify a value for start.
     * Specify an absolute time in the ISO 8601 format. For example, 2018-12-17T06:00:00.000Z.
     *
     * @default When the dashboard loads, the end date will be the current time.
     */
    readonly end?: string;
}
/**
 * A dashboard widget that displays metrics
 */
export declare class GraphWidget extends ConcreteWidget {
    private static readonly ISO8601_REGEX;
    private static isIso8601;
    private readonly props;
    private readonly leftMetrics;
    private readonly rightMetrics;
    constructor(props: GraphWidgetProps);
    /**
     * Add another metric to the left Y axis of the GraphWidget
     *
     * @param metric the metric to add
     */
    addLeftMetric(metric: IMetric): void;
    /**
     * Add another metric to the right Y axis of the GraphWidget
     *
     * @param metric the metric to add
     */
    addRightMetric(metric: IMetric): void;
    toJson(): any[];
}
/**
 * Layout for TableWidget
 */
export declare enum TableLayout {
    /**
     * Data points are laid out in columns
     */
    HORIZONTAL = "horizontal",
    /**
     * Data points are laid out in rows
     */
    VERTICAL = "vertical"
}
/**
 * Standard table summary columns
 */
export declare enum TableSummaryColumn {
    /**
     * Minimum of all data points
     */
    MINIMUM = "MIN",
    /**
     * Maximum of all data points
     */
    MAXIMUM = "MAX",
    /**
     * Sum of all data points
     */
    SUM = "SUM",
    /**
     * Average of all data points
     */
    AVERAGE = "AVG"
}
/**
 * Properties for TableWidget's summary columns
 */
export interface TableSummaryProps {
    /**
     * Summary columns
     *
     * @default - No summary columns will be shown
     */
    readonly columns?: TableSummaryColumn[];
    /**
     * Make the summary columns sticky, so that they remain in view while scrolling
     *
     * @default - false
     */
    readonly sticky?: boolean;
    /**
     * Prevent the columns of datapoints from being displayed, so that only the label and summary columns are displayed
     *
     * @default - false
     */
    readonly hideNonSummaryColumns?: boolean;
}
/**
 * Thresholds for highlighting cells in TableWidget
 */
export declare class TableThreshold {
    /**
     * A threshold for highlighting and coloring cells above the specified value
     *
     * @param value lower bound of threshold range
     * @param color cell color for values within threshold range
     */
    static above(value: number, color?: string): TableThreshold;
    /**
     * A threshold for highlighting and coloring cells below the specified value
     *
     * @param value upper bound of threshold range
     * @param color cell color for values within threshold range
     */
    static below(value: number, color?: string): TableThreshold;
    /**
     * A threshold for highlighting and coloring cells within the specified values
     *
     * @param lowerBound lower bound of threshold range
     * @param upperBound upper bound of threshold range
     * @param color cell color for values within threshold range
     */
    static between(lowerBound: number, upperBound: number, color?: string): TableThreshold;
    private readonly lowerBound;
    private readonly upperBound?;
    private readonly color?;
    private readonly comparator?;
    private constructor();
    toJson(): any;
}
/**
 * Properties for a TableWidget
 */
export interface TableWidgetProps extends MetricWidgetProps {
    /**
     * Table layout
     *
     * @default - TableLayout.HORIZONTAL
     */
    readonly layout?: TableLayout;
    /**
     * Properties for displaying summary columns
     *
     * @default - no summary columns are shown
     */
    readonly summary?: TableSummaryProps;
    /**
     * Thresholds for highlighting table cells
     *
     * @default - No thresholds
     */
    readonly thresholds?: TableThreshold[];
    /**
     * Show the metrics units in the label column
     *
     * @default - false
     */
    readonly showUnitsInLabel?: boolean;
    /**
     * Metrics to display in the table
     *
     * @default - No metrics
     */
    readonly metrics?: IMetric[];
    /**
     * Whether the graph should show live data
     *
     * @default false
     */
    readonly liveData?: boolean;
    /**
     * Whether to show as many digits as can fit, before rounding.
     *
     * @default false
     */
    readonly fullPrecision?: boolean;
    /**
     * Whether to show the value from the entire time range. Only applicable for Bar and Pie charts.
     *
     * If false, values will be from the most recent period of your chosen time range;
     * if true, shows the value from the entire time range.
     *
     * @default false
     */
    readonly setPeriodToTimeRange?: boolean;
    /**
     * The default period for all metrics in this widget.
     * The period is the length of time represented by one data point on the graph.
     * This default can be overridden within each metric definition.
     *
     * @default cdk.Duration.seconds(300)
     */
    readonly period?: cdk.Duration;
    /**
     * The default statistic to be displayed for each metric.
     * This default can be overridden within the definition of each individual metric
     *
     * @default - The statistic for each metric is used
     */
    readonly statistic?: string;
    /**
     * The start of the time range to use for each widget independently from those of the dashboard.
     * You can specify start without specifying end to specify a relative time range that ends with the current time.
     * In this case, the value of start must begin with -P, and you can use M, H, D, W and M as abbreviations for
     * minutes, hours, days, weeks and months. For example, -PT8H shows the last 8 hours and -P3M shows the last three months.
     * You can also use start along with an end field, to specify an absolute time range.
     * When specifying an absolute time range, use the ISO 8601 format. For example, 2018-12-17T06:00:00.000Z.
     *
     * @default When the dashboard loads, the start time will be the default time range.
     */
    readonly start?: string;
    /**
     * The end of the time range to use for each widget independently from those of the dashboard.
     * If you specify a value for end, you must also specify a value for start.
     * Specify an absolute time in the ISO 8601 format. For example, 2018-12-17T06:00:00.000Z.
     *
     * @default When the dashboard loads, the end date will be the current time.
     */
    readonly end?: string;
}
/**
 * A dashboard widget that displays metrics
 */
export declare class TableWidget extends ConcreteWidget {
    private readonly props;
    private readonly metrics;
    constructor(props: TableWidgetProps);
    /**
     * Add another metric
     *
     * @param metric the metric to add
     */
    addMetric(metric: IMetric): void;
    toJson(): any[];
}
/**
 * Properties for a SingleValueWidget
 */
export interface SingleValueWidgetProps extends MetricWidgetProps {
    /**
     * Metrics to display
     */
    readonly metrics: IMetric[];
    /**
     * The default period for all metrics in this widget.
     * The period is the length of time represented by one data point on the graph.
     * This default can be overridden within each metric definition.
     *
     * @default cdk.Duration.seconds(300)
     */
    readonly period?: cdk.Duration;
    /**
     * Whether to show the value from the entire time range.
     *
     * @default false
     */
    readonly setPeriodToTimeRange?: boolean;
    /**
     * Whether to show as many digits as can fit, before rounding.
     *
     * @default false
     */
    readonly fullPrecision?: boolean;
    /**
     * Whether to show a graph below the value illustrating the value for the whole time range.
     * Cannot be used in combination with `setPeriodToTimeRange`
     *
     * @default false
     */
    readonly sparkline?: boolean;
    /**
     * The start of the time range to use for each widget independently from those of the dashboard.
     * You can specify start without specifying end to specify a relative time range that ends with the current time.
     * In this case, the value of start must begin with -P, and you can use M, H, D, W and M as abbreviations for
     * minutes, hours, days, weeks and months. For example, -PT8H shows the last 8 hours and -P3M shows the last three months.
     * You can also use start along with an end field, to specify an absolute time range.
     * When specifying an absolute time range, use the ISO 8601 format. For example, 2018-12-17T06:00:00.000Z.
     *
     * @default When the dashboard loads, the start time will be the default time range.
     */
    readonly start?: string;
    /**
     * The end of the time range to use for each widget independently from those of the dashboard.
     * If you specify a value for end, you must also specify a value for start.
     * Specify an absolute time in the ISO 8601 format. For example, 2018-12-17T06:00:00.000Z.
     *
     * @default When the dashboard loads, the end date will be the current time.
     */
    readonly end?: string;
}
/**
 * A dashboard widget that displays the most recent value for every metric
 */
export declare class SingleValueWidget extends ConcreteWidget {
    private readonly props;
    constructor(props: SingleValueWidgetProps);
    toJson(): any[];
}
/**
 * The properties for a CustomWidget
 */
export interface CustomWidgetProps {
    /**
     * The Arn of the AWS Lambda function that returns HTML or JSON that will be displayed in the widget
     */
    readonly functionArn: string;
    /**
     * Width of the widget, in a grid of 24 units wide
     *
     * @default 6
     */
    readonly width?: number;
    /**
     * Height of the widget
     *
     * @default - 6 for Alarm and Graph widgets.
     *   3 for single value widgets where most recent value of a metric is displayed.
     */
    readonly height?: number;
    /**
     * The title of the widget
     */
    readonly title: string;
    /**
     * Update the widget on refresh
     *
     * @default true
     */
    readonly updateOnRefresh?: boolean;
    /**
     * Update the widget on resize
     *
     * @default true
     */
    readonly updateOnResize?: boolean;
    /**
     * Update the widget on time range change
     *
     * @default true
     */
    readonly updateOnTimeRangeChange?: boolean;
    /**
     * Parameters passed to the lambda function
     *
     * @default - no parameters are passed to the lambda function
     */
    readonly params?: any;
}
/**
 * A CustomWidget shows the result of a AWS lambda function
 */
export declare class CustomWidget extends ConcreteWidget {
    private readonly props;
    constructor(props: CustomWidgetProps);
    toJson(): any[];
}
/**
 * Horizontal annotation to be added to a graph
 */
export interface HorizontalAnnotation {
    /**
     * The value of the annotation
     */
    readonly value: number;
    /**
     * Label for the annotation
     *
     * @default - No label
     */
    readonly label?: string;
    /**
     * The hex color code, prefixed with '#' (e.g. '#00ff00'), to be used for the annotation.
     * The `Color` class has a set of standard colors that can be used here.
     *
     * @default - Automatic color
     */
    readonly color?: string;
    /**
     * Add shading above or below the annotation
     *
     * @default No shading
     */
    readonly fill?: Shading;
    /**
     * Whether the annotation is visible
     *
     * @default true
     */
    readonly visible?: boolean;
}
/**
 * Vertical annotation to be added to a graph
 */
export interface VerticalAnnotation {
    /**
     * The date and time (in ISO 8601 format) in the graph where the vertical annotation line is to appear
     */
    readonly date: string;
    /**
     * Label for the annotation
     *
     * @default - No label
     */
    readonly label?: string;
    /**
     * The hex color code, prefixed with '#' (e.g. '#00ff00'), to be used for the annotation.
     * The `Color` class has a set of standard colors that can be used here.
     *
     * @default - Automatic color
     */
    readonly color?: string;
    /**
     * Add shading before or after the annotation
     *
     * @default No shading
     */
    readonly fill?: VerticalShading;
    /**
     * Whether the annotation is visible
     *
     * @default true
     */
    readonly visible?: boolean;
}
/**
 * Fill shading options that will be used with a horizontal annotation
 */
export declare enum Shading {
    /**
     * Don't add shading
     */
    NONE = "none",
    /**
     * Add shading above the annotation
     */
    ABOVE = "above",
    /**
     * Add shading below the annotation
     */
    BELOW = "below"
}
/**
 * Fill shading options that will be used with a vertical annotation
 */
export declare enum VerticalShading {
    /**
     * Don't add shading
     */
    NONE = "none",
    /**
     * Add shading before the annotation
     */
    BEFORE = "before",
    /**
     * Add shading after the annotation
     */
    AFTER = "after"
}
/**
 * A set of standard colours that can be used in annotations in a GraphWidget.
 */
export declare class Color {
    /** blue - hex #1f77b4 */
    static readonly BLUE = "#1f77b4";
    /** brown - hex #8c564b */
    static readonly BROWN = "#8c564b";
    /** green - hex #2ca02c */
    static readonly GREEN = "#2ca02c";
    /** grey - hex #7f7f7f */
    static readonly GREY = "#7f7f7f";
    /** orange - hex #ff7f0e */
    static readonly ORANGE = "#ff7f0e";
    /** pink - hex #e377c2 */
    static readonly PINK = "#e377c2";
    /** purple - hex #9467bd */
    static readonly PURPLE = "#9467bd";
    /** red - hex #d62728 */
    static readonly RED = "#d62728";
    private constructor();
}
/**
 * The position of the legend on a GraphWidget.
 */
export declare enum LegendPosition {
    /**
     * Legend appears below the graph (default).
     */
    BOTTOM = "bottom",
    /**
     * Add shading above the annotation
     */
    RIGHT = "right",
    /**
     * Add shading below the annotation
     */
    HIDDEN = "hidden"
}
