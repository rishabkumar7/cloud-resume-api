import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Location::GeofenceCollection` resource specifies the ability to detect and act when a tracked device enters or exits a defined geographical boundary known as a geofence.
 *
 * @cloudformationResource AWS::Location::GeofenceCollection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html
 */
export declare class CfnGeofenceCollection extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGeofenceCollection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGeofenceCollection;
    /**
     * The Amazon Resource Name (ARN) for the geofence collection resource. Used when you need to specify a resource across all AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Synonym for `Arn` . The Amazon Resource Name (ARN) for the geofence collection resource. Used when you need to specify a resource across all AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection`
     *
     * @cloudformationAttribute CollectionArn
     */
    readonly attrCollectionArn: string;
    /**
     * The timestamp for when the geofence collection resource was created in [ISO 8601](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute CreateTime
     */
    readonly attrCreateTime: string;
    /**
     * The timestamp for when the geofence collection resource was last updated in [ISO 8601](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute UpdateTime
     */
    readonly attrUpdateTime: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A custom name for the geofence collection.
     */
    collectionName: string;
    /**
     * An optional description for the geofence collection.
     */
    description?: string;
    /**
     * A key identifier for an [AWS KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html) . Enter a key ID, key ARN, alias name, or alias ARN.
     */
    kmsKeyId?: string;
    /**
     * @deprecated this property has been deprecated
     */
    pricingPlan?: string;
    /**
     * This shape is deprecated since 2022-02-01: Deprecated.
     *
     * @deprecated this property has been deprecated
     */
    pricingPlanDataSource?: string;
    /**
     * Applies one or more tags to the geofence collection.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGeofenceCollectionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnGeofenceCollection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html
 */
export interface CfnGeofenceCollectionProps {
    /**
     * A custom name for the geofence collection.
     *
     * Requirements:
     *
     * - Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).
     * - Must be a unique geofence collection name.
     * - No spaces allowed. For example, `ExampleGeofenceCollection` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html#cfn-location-geofencecollection-collectionname
     */
    readonly collectionName: string;
    /**
     * An optional description for the geofence collection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html#cfn-location-geofencecollection-description
     */
    readonly description?: string;
    /**
     * A key identifier for an [AWS KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html) . Enter a key ID, key ARN, alias name, or alias ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html#cfn-location-geofencecollection-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html#cfn-location-geofencecollection-pricingplan
     */
    readonly pricingPlan?: string;
    /**
     * This shape is deprecated since 2022-02-01: Deprecated.
     *
     * No longer allowed.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html#cfn-location-geofencecollection-pricingplandatasource
     */
    readonly pricingPlanDataSource?: string;
    /**
     * Applies one or more tags to the geofence collection.
     *
     * A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.
     *
     * Format: `"key" : "value"`
     *
     * Restrictions:
     *
     * - Maximum 50 tags per resource
     * - Each resource tag must be unique with a maximum of one value.
     * - Maximum key length: 128 Unicode characters in UTF-8
     * - Maximum value length: 256 Unicode characters in UTF-8
     * - Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.
     * - Cannot use "aws:" as a prefix for a key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html#cfn-location-geofencecollection-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Location::Map` resource specifies a map resource in your AWS account, which provides map tiles of different styles sourced from global location data providers.
 *
 * @cloudformationResource AWS::Location::Map
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html
 */
export declare class CfnMap extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMap from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMap;
    /**
     * The Amazon Resource Name (ARN) for the map resource. Used to specify a resource across all AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:maps/ExampleMap`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The timestamp for when the map resource was created in [ISO 8601](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute CreateTime
     */
    readonly attrCreateTime: string;
    /**
     * @cloudformationAttribute DataSource
     */
    readonly attrDataSource: string;
    /**
     * Synonym for `Arn` . The Amazon Resource Name (ARN) for the map resource. Used to specify a resource across all AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:maps/ExampleMap`
     *
     * @cloudformationAttribute MapArn
     */
    readonly attrMapArn: string;
    /**
     * The timestamp for when the map resource was last updated in [ISO 8601](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute UpdateTime
     */
    readonly attrUpdateTime: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Specifies the `MapConfiguration` , including the map style, for the map resource that you create.
     */
    configuration: cdk.IResolvable | CfnMap.MapConfigurationProperty;
    /**
     * An optional description for the map resource.
     */
    description?: string;
    /**
     * The name for the map resource.
     */
    mapName: string;
    /**
     * No longer used. If included, the only allowed value is `RequestBasedUsage` .
     */
    pricingPlan?: string;
    /**
     * Applies one or more tags to the map resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMapProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMap {
    /**
     * Specifies the map tile style selected from an available provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-map-mapconfiguration.html
     */
    interface MapConfigurationProperty {
        /**
         * Specifies the custom layers for the style.
         *
         * Leave unset to not enable any custom layer, or, for styles that support custom layers, you can enable layer(s), such as the `POI` layer for the VectorEsriNavigation style.
         *
         * > Currenlty only `VectorEsriNavigation` supports CustomLayers. For more information, see [Custom Layers](https://docs.aws.amazon.com//location/latest/developerguide/map-concepts.html#map-custom-layers) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-map-mapconfiguration.html#cfn-location-map-mapconfiguration-customlayers
         */
        readonly customLayers?: Array<string>;
        /**
         * Specifies the map political view selected from an available data provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-map-mapconfiguration.html#cfn-location-map-mapconfiguration-politicalview
         */
        readonly politicalView?: string;
        /**
         * Specifies the map style selected from an available data provider.
         *
         * Valid [Esri map styles](https://docs.aws.amazon.com/location/latest/developerguide/esri.html) :
         *
         * - `VectorEsriDarkGrayCanvas` – The Esri Dark Gray Canvas map style. A vector basemap with a dark gray, neutral background with minimal colors, labels, and features that's designed to draw attention to your thematic content.
         * - `RasterEsriImagery` – The Esri Imagery map style. A raster basemap that provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.
         * - `VectorEsriLightGrayCanvas` – The Esri Light Gray Canvas map style, which provides a detailed vector basemap with a light gray, neutral background style with minimal colors, labels, and features that's designed to draw attention to your thematic content.
         * - `VectorEsriTopographic` – The Esri Light map style, which provides a detailed vector basemap with a classic Esri map style.
         * - `VectorEsriStreets` – The Esri Street Map style, which provides a detailed vector basemap for the world symbolized with a classic Esri street map style. The vector tile layer is similar in content and style to the World Street Map raster map.
         * - `VectorEsriNavigation` – The Esri Navigation map style, which provides a detailed basemap for the world symbolized with a custom navigation map style that's designed for use during the day in mobile devices.
         *
         * Valid [HERE Technologies map styles](https://docs.aws.amazon.com/location/latest/developerguide/HERE.html) :
         *
         * - `VectorHereContrast` – The HERE Contrast (Berlin) map style is a high contrast detailed base map of the world that blends 3D and 2D rendering.
         *
         * > The `VectorHereContrast` style has been renamed from `VectorHereBerlin` . `VectorHereBerlin` has been deprecated, but will continue to work in applications that use it.
         * - `VectorHereExplore` – A default HERE map style containing a neutral, global map and its features including roads, buildings, landmarks, and water features. It also now includes a fully designed map of Japan.
         * - `VectorHereExploreTruck` – A global map containing truck restrictions and attributes (e.g. width / height / HAZMAT) symbolized with highlighted segments and icons on top of HERE Explore to support use cases within transport and logistics.
         * - `RasterHereExploreSatellite` – A global map containing high resolution satellite imagery.
         * - `HybridHereExploreSatellite` – A global map displaying the road network, street names, and city labels over satellite imagery. This style will automatically retrieve both raster and vector tiles, and your charges will be based on total tiles retrieved.
         *
         * > Hybrid styles use both vector and raster tiles when rendering the map that you see. This means that more tiles are retrieved than when using either vector or raster tiles alone. Your charges will include all tiles retrieved.
         *
         * Valid [GrabMaps map styles](https://docs.aws.amazon.com/location/latest/developerguide/grab.html) :
         *
         * - `VectorGrabStandardLight` – The Grab Standard Light map style provides a basemap with detailed land use coloring, area names, roads, landmarks, and points of interest covering Southeast Asia.
         * - `VectorGrabStandardDark` – The Grab Standard Dark map style provides a dark variation of the standard basemap covering Southeast Asia.
         *
         * > Grab provides maps only for countries in Southeast Asia, and is only available in the Asia Pacific (Singapore) Region ( `ap-southeast-1` ). For more information, see [GrabMaps countries and area covered](https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area) .
         *
         * Valid [Open Data map styles](https://docs.aws.amazon.com/location/latest/developerguide/open-data.html) :
         *
         * - `VectorOpenDataStandardLight` – The Open Data Standard Light map style provides a detailed basemap for the world suitable for website and mobile application use. The map includes highways major roads, minor roads, railways, water features, cities, parks, landmarks, building footprints, and administrative boundaries.
         * - `VectorOpenDataStandardDark` – Open Data Standard Dark is a dark-themed map style that provides a detailed basemap for the world suitable for website and mobile application use. The map includes highways major roads, minor roads, railways, water features, cities, parks, landmarks, building footprints, and administrative boundaries.
         * - `VectorOpenDataVisualizationLight` – The Open Data Visualization Light map style is a light-themed style with muted colors and fewer features that aids in understanding overlaid data.
         * - `VectorOpenDataVisualizationDark` – The Open Data Visualization Dark map style is a dark-themed style with muted colors and fewer features that aids in understanding overlaid data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-map-mapconfiguration.html#cfn-location-map-mapconfiguration-style
         */
        readonly style: string;
    }
}
/**
 * Properties for defining a `CfnMap`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html
 */
export interface CfnMapProps {
    /**
     * Specifies the `MapConfiguration` , including the map style, for the map resource that you create.
     *
     * The map style defines the look of maps and the data provider for your map resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-configuration
     */
    readonly configuration: cdk.IResolvable | CfnMap.MapConfigurationProperty;
    /**
     * An optional description for the map resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-description
     */
    readonly description?: string;
    /**
     * The name for the map resource.
     *
     * Requirements:
     *
     * - Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).
     * - Must be a unique map resource name.
     * - No spaces allowed. For example, `ExampleMap` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-mapname
     */
    readonly mapName: string;
    /**
     * No longer used. If included, the only allowed value is `RequestBasedUsage` .
     *
     * *Allowed Values* : `RequestBasedUsage`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-pricingplan
     */
    readonly pricingPlan?: string;
    /**
     * Applies one or more tags to the map resource.
     *
     * A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.
     *
     * Format: `"key" : "value"`
     *
     * Restrictions:
     *
     * - Maximum 50 tags per resource
     * - Each resource tag must be unique with a maximum of one value.
     * - Maximum key length: 128 Unicode characters in UTF-8
     * - Maximum value length: 256 Unicode characters in UTF-8
     * - Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.
     * - Cannot use "aws:" as a prefix for a key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a place index resource in your AWS account.
 *
 * Use a place index resource to geocode addresses and other text queries by using the `SearchPlaceIndexForText` operation, and reverse geocode coordinates by using the `SearchPlaceIndexForPosition` operation, and enable autosuggestions by using the `SearchPlaceIndexForSuggestions` operation.
 *
 * > If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the [AWS service terms](https://docs.aws.amazon.com/service-terms) for more details.
 *
 * @cloudformationResource AWS::Location::PlaceIndex
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html
 */
export declare class CfnPlaceIndex extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPlaceIndex from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPlaceIndex;
    /**
     * The Amazon Resource Name (ARN) for the place index resource. Used to specify a resource across AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The timestamp for when the place index resource was created in [ISO 8601](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute CreateTime
     */
    readonly attrCreateTime: string;
    /**
     * Synonym for `Arn` . The Amazon Resource Name (ARN) for the place index resource. Used to specify a resource across AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex`
     *
     * @cloudformationAttribute IndexArn
     */
    readonly attrIndexArn: string;
    /**
     * The timestamp for when the place index resource was last updated in [ISO 8601](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute UpdateTime
     */
    readonly attrUpdateTime: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Specifies the geospatial data provider for the new place index.
     */
    dataSource: string;
    /**
     * Specifies the data storage option requesting Places.
     */
    dataSourceConfiguration?: CfnPlaceIndex.DataSourceConfigurationProperty | cdk.IResolvable;
    /**
     * The optional description for the place index resource.
     */
    description?: string;
    /**
     * The name of the place index resource.
     */
    indexName: string;
    /**
     * No longer used. If included, the only allowed value is `RequestBasedUsage` .
     */
    pricingPlan?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPlaceIndexProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPlaceIndex {
    /**
     * Specifies the data storage option requesting Places.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-placeindex-datasourceconfiguration.html
     */
    interface DataSourceConfigurationProperty {
        /**
         * Specifies how the results of an operation will be stored by the caller.
         *
         * Valid values include:
         *
         * - `SingleUse` specifies that the results won't be stored.
         * - `Storage` specifies that the result can be cached or stored in a database.
         *
         * Default value: `SingleUse`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-placeindex-datasourceconfiguration.html#cfn-location-placeindex-datasourceconfiguration-intendeduse
         */
        readonly intendedUse?: string;
    }
}
/**
 * Properties for defining a `CfnPlaceIndex`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html
 */
export interface CfnPlaceIndexProps {
    /**
     * Specifies the geospatial data provider for the new place index.
     *
     * > This field is case-sensitive. Enter the valid values as shown. For example, entering `HERE` returns an error.
     *
     * Valid values include:
     *
     * - `Esri` – For additional information about [Esri](https://docs.aws.amazon.com/location/latest/developerguide/esri.html) 's coverage in your region of interest, see [Esri details on geocoding coverage](https://docs.aws.amazon.com/https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm) .
     * - `Grab` – Grab provides place index functionality for Southeast Asia. For additional information about [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/grab.html) ' coverage, see [GrabMaps countries and areas covered](https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area) .
     * - `Here` – For additional information about [HERE Technologies](https://docs.aws.amazon.com/location/latest/developerguide/HERE.html) ' coverage in your region of interest, see [HERE details on goecoding coverage](https://docs.aws.amazon.com/https://developer.here.com/documentation/geocoder/dev_guide/topics/coverage-geocoder.html) .
     *
     * > If you specify HERE Technologies ( `Here` ) as the data provider, you may not [store results](https://docs.aws.amazon.com//location-places/latest/APIReference/API_DataSourceConfiguration.html) for locations in Japan. For more information, see the [AWS Service Terms](https://docs.aws.amazon.com/service-terms/) for Amazon Location Service.
     *
     * For additional information , see [Data providers](https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html) on the *Amazon Location Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html#cfn-location-placeindex-datasource
     */
    readonly dataSource: string;
    /**
     * Specifies the data storage option requesting Places.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html#cfn-location-placeindex-datasourceconfiguration
     */
    readonly dataSourceConfiguration?: CfnPlaceIndex.DataSourceConfigurationProperty | cdk.IResolvable;
    /**
     * The optional description for the place index resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html#cfn-location-placeindex-description
     */
    readonly description?: string;
    /**
     * The name of the place index resource.
     *
     * Requirements:
     *
     * - Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).
     * - Must be a unique place index resource name.
     * - No spaces allowed. For example, `ExamplePlaceIndex` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html#cfn-location-placeindex-indexname
     */
    readonly indexName: string;
    /**
     * No longer used. If included, the only allowed value is `RequestBasedUsage` .
     *
     * *Allowed Values* : `RequestBasedUsage`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html#cfn-location-placeindex-pricingplan
     */
    readonly pricingPlan?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html#cfn-location-placeindex-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a route calculator resource in your AWS account.
 *
 * You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.
 *
 * > If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the [AWS service terms](https://docs.aws.amazon.com/service-terms) for more details.
 *
 * @cloudformationResource AWS::Location::RouteCalculator
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html
 */
export declare class CfnRouteCalculator extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRouteCalculator from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRouteCalculator;
    /**
     * The Amazon Resource Name (ARN) for the route calculator resource. Use the ARN when you specify a resource across all AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:route-calculator/ExampleCalculator`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Synonym for `Arn` . The Amazon Resource Name (ARN) for the route calculator resource. Use the ARN when you specify a resource across all AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:route-calculator/ExampleCalculator`
     *
     * @cloudformationAttribute CalculatorArn
     */
    readonly attrCalculatorArn: string;
    /**
     * The timestamp for when the route calculator resource was created in [ISO 8601](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute CreateTime
     */
    readonly attrCreateTime: string;
    /**
     * The timestamp for when the route calculator resource was last updated in [ISO 8601](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute UpdateTime
     */
    readonly attrUpdateTime: string;
    /**
     * The name of the route calculator resource.
     */
    calculatorName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Specifies the data provider of traffic and road network data.
     */
    dataSource: string;
    /**
     * The optional description for the route calculator resource.
     */
    description?: string;
    /**
     * No longer used. If included, the only allowed value is `RequestBasedUsage` .
     */
    pricingPlan?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRouteCalculatorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnRouteCalculator`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html
 */
export interface CfnRouteCalculatorProps {
    /**
     * The name of the route calculator resource.
     *
     * Requirements:
     *
     * - Can use alphanumeric characters (A–Z, a–z, 0–9) , hyphens (-), periods (.), and underscores (_).
     * - Must be a unique Route calculator resource name.
     * - No spaces allowed. For example, `ExampleRouteCalculator` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html#cfn-location-routecalculator-calculatorname
     */
    readonly calculatorName: string;
    /**
     * Specifies the data provider of traffic and road network data.
     *
     * > This field is case-sensitive. Enter the valid values as shown. For example, entering `HERE` returns an error.
     *
     * Valid values include:
     *
     * - `Esri` – For additional information about [Esri](https://docs.aws.amazon.com/location/latest/developerguide/esri.html) 's coverage in your region of interest, see [Esri details on street networks and traffic coverage](https://docs.aws.amazon.com/https://doc.arcgis.com/en/arcgis-online/reference/network-coverage.htm) .
     *
     * Route calculators that use Esri as a data source only calculate routes that are shorter than 400 km.
     * - `Grab` – Grab provides routing functionality for Southeast Asia. For additional information about [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/grab.html) ' coverage, see [GrabMaps countries and areas covered](https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area) .
     * - `Here` – For additional information about [HERE Technologies](https://docs.aws.amazon.com/location/latest/developerguide/HERE.html) ' coverage in your region of interest, see [HERE car routing coverage](https://docs.aws.amazon.com/https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/car-routing.html) and [HERE truck routing coverage](https://docs.aws.amazon.com/https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/truck-routing.html) .
     *
     * For additional information , see [Data providers](https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html) on the *Amazon Location Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html#cfn-location-routecalculator-datasource
     */
    readonly dataSource: string;
    /**
     * The optional description for the route calculator resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html#cfn-location-routecalculator-description
     */
    readonly description?: string;
    /**
     * No longer used. If included, the only allowed value is `RequestBasedUsage` .
     *
     * *Allowed Values* : `RequestBasedUsage`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html#cfn-location-routecalculator-pricingplan
     */
    readonly pricingPlan?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html#cfn-location-routecalculator-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a tracker resource in your AWS account , which lets you receive current and historical location of devices.
 *
 * @cloudformationResource AWS::Location::Tracker
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html
 */
export declare class CfnTracker extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTracker from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTracker;
    /**
     * The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify a resource across all AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:tracker/ExampleTracker`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The timestamp for when the tracker resource was created in [ISO 8601](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute CreateTime
     */
    readonly attrCreateTime: string;
    /**
     * Synonym for `Arn` . The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify a resource across all AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:tracker/ExampleTracker`
     *
     * @cloudformationAttribute TrackerArn
     */
    readonly attrTrackerArn: string;
    /**
     * The timestamp for when the tracker resource was last updated in [ISO 8601](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute UpdateTime
     */
    readonly attrUpdateTime: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * An optional description for the tracker resource.
     */
    description?: string;
    eventBridgeEnabled?: boolean | cdk.IResolvable;
    kmsKeyEnableGeospatialQueries?: boolean | cdk.IResolvable;
    /**
     * A key identifier for an [AWS KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html) . Enter a key ID, key ARN, alias name, or alias ARN.
     */
    kmsKeyId?: string;
    /**
     * Specifies the position filtering for the tracker resource.
     */
    positionFiltering?: string;
    /**
     * @deprecated this property has been deprecated
     */
    pricingPlan?: string;
    /**
     * This shape is deprecated since 2022-02-01: Deprecated.
     *
     * @deprecated this property has been deprecated
     */
    pricingPlanDataSource?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The name for the tracker resource.
     */
    trackerName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTrackerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnTracker`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html
 */
export interface CfnTrackerProps {
    /**
     * An optional description for the tracker resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html#cfn-location-tracker-description
     */
    readonly description?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html#cfn-location-tracker-eventbridgeenabled
     */
    readonly eventBridgeEnabled?: boolean | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html#cfn-location-tracker-kmskeyenablegeospatialqueries
     */
    readonly kmsKeyEnableGeospatialQueries?: boolean | cdk.IResolvable;
    /**
     * A key identifier for an [AWS KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html) . Enter a key ID, key ARN, alias name, or alias ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html#cfn-location-tracker-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies the position filtering for the tracker resource.
     *
     * Valid values:
     *
     * - `TimeBased` - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID.
     * - `DistanceBased` - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this area are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map.
     * - `AccuracyBased` - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This can reduce the effects of GPS noise when displaying device trajectories on a map, and can help control your costs by reducing the number of geofence evaluations.
     *
     * This field is optional. If not specified, the default value is `TimeBased` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html#cfn-location-tracker-positionfiltering
     */
    readonly positionFiltering?: string;
    /**
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html#cfn-location-tracker-pricingplan
     */
    readonly pricingPlan?: string;
    /**
     * This shape is deprecated since 2022-02-01: Deprecated.
     *
     * No longer allowed.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html#cfn-location-tracker-pricingplandatasource
     */
    readonly pricingPlanDataSource?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html#cfn-location-tracker-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name for the tracker resource.
     *
     * Requirements:
     *
     * - Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).
     * - Must be a unique tracker resource name.
     * - No spaces allowed. For example, `ExampleTracker` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html#cfn-location-tracker-trackername
     */
    readonly trackerName: string;
}
/**
 * The `AWS::Location::TrackerConsumer` resource specifies an association between a geofence collection and a tracker resource.
 *
 * The geofence collection is referred to as the *consumer* of the tracker. This allows the tracker resource to communicate location data to the linked geofence collection.
 *
 * > Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.
 *
 * @cloudformationResource AWS::Location::TrackerConsumer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html
 */
export declare class CfnTrackerConsumer extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTrackerConsumer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTrackerConsumer;
    /**
     * The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource.
     */
    consumerArn: string;
    /**
     * The name for the tracker resource.
     */
    trackerName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTrackerConsumerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnTrackerConsumer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html
 */
export interface CfnTrackerConsumerProps {
    /**
     * The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource.
     *
     * Used when you need to specify a resource across all AWS .
     *
     * - Format example: `arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html#cfn-location-trackerconsumer-consumerarn
     */
    readonly consumerArn: string;
    /**
     * The name for the tracker resource.
     *
     * Requirements:
     *
     * - Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).
     * - Must be a unique tracker resource name.
     * - No spaces allowed. For example, `ExampleTracker` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html#cfn-location-trackerconsumer-trackername
     */
    readonly trackerName: string;
}
/**
 * The API key resource in your AWS account, which lets you grant actions for Amazon Location resources to the API key bearer.
 *
 * @cloudformationResource AWS::Location::APIKey
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html
 */
export declare class CfnAPIKey extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAPIKey from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAPIKey;
    /**
     * The Amazon Resource Name (ARN) for the resource. Used when you need to specify a resource across all AWS .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The timestamp for when the API key resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.
     *
     * @cloudformationAttribute CreateTime
     */
    readonly attrCreateTime: string;
    /**
     * The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify a resource across all AWS .
     *
     * @cloudformationAttribute KeyArn
     */
    readonly attrKeyArn: string;
    /**
     * The timestamp for when the API key resource was last updated in ISO 8601 format: `YYYY-MM-DDThh:mm:ss.sssZ` .
     *
     * @cloudformationAttribute UpdateTime
     */
    readonly attrUpdateTime: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Updates the description for the API key resource.
     */
    description?: string;
    /**
     * The optional timestamp for when the API key resource will expire in [ISO 8601 format](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) .
     */
    expireTime?: string;
    /**
     * ForceDelete bypasses an API key's expiry conditions and deletes the key.
     */
    forceDelete?: boolean | cdk.IResolvable;
    /**
     * The boolean flag to be included for updating `ExpireTime` or Restrictions details.
     */
    forceUpdate?: boolean | cdk.IResolvable;
    /**
     * A custom name for the API key resource.
     */
    keyName: string;
    /**
     * Whether the API key should expire.
     */
    noExpiry?: boolean | cdk.IResolvable;
    /**
     * The API key restrictions for the API key resource.
     */
    restrictions: CfnAPIKey.ApiKeyRestrictionsProperty | cdk.IResolvable;
    /**
     * Applies one or more tags to the map resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAPIKeyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAPIKey {
    /**
     * API Restrictions on the allowed actions, resources, and referers for an API key resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-apikey-apikeyrestrictions.html
     */
    interface ApiKeyRestrictionsProperty {
        /**
         * A list of allowed actions that an API key resource grants permissions to perform.
         *
         * You must have at least one action for each type of resource. For example, if you have a place resource, you must include at least one place action.
         *
         * The following are valid values for the actions.
         *
         * - *Map actions*
         *
         * - `geo:GetMap*` - Allows all actions needed for map rendering.
         * - *Place actions*
         *
         * - `geo:SearchPlaceIndexForText` - Allows geocoding.
         * - `geo:SearchPlaceIndexForPosition` - Allows reverse geocoding.
         * - `geo:SearchPlaceIndexForSuggestions` - Allows generating suggestions from text.
         * - `geo:GetPlace` - Allows finding a place by place ID.
         * - *Route actions*
         *
         * - `geo:CalculateRoute` - Allows point to point routing.
         * - `geo:CalculateRouteMatrix` - Allows calculating a matrix of routes.
         *
         * > You must use these strings exactly. For example, to provide access to map rendering, the only valid action is `geo:GetMap*` as an input to the list. `["geo:GetMap*"]` is valid but `["geo:GetMapTile"]` is not. Similarly, you cannot use `["geo:SearchPlaceIndexFor*"]` - you must list each of the Place actions separately.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-apikey-apikeyrestrictions.html#cfn-location-apikey-apikeyrestrictions-allowactions
         */
        readonly allowActions: Array<string>;
        /**
         * An optional list of allowed HTTP referers for which requests must originate from.
         *
         * Requests using this API key from other domains will not be allowed.
         *
         * Requirements:
         *
         * - Contain only alphanumeric characters (A–Z, a–z, 0–9) or any symbols in this list `$\-._+!*`(),;/?:@=&`
         * - May contain a percent (%) if followed by 2 hexadecimal digits (A-F, a-f, 0-9); this is used for URL encoding purposes.
         * - May contain wildcard characters question mark (?) and asterisk (*).
         *
         * Question mark (?) will replace any single character (including hexadecimal digits).
         *
         * Asterisk (*) will replace any multiple characters (including multiple hexadecimal digits).
         * - No spaces allowed. For example, `https://example.com` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-apikey-apikeyrestrictions.html#cfn-location-apikey-apikeyrestrictions-allowreferers
         */
        readonly allowReferers?: Array<string>;
        /**
         * A list of allowed resource ARNs that a API key bearer can perform actions on.
         *
         * - The ARN must be the correct ARN for a map, place, or route ARN. You may include wildcards in the resource-id to match multiple resources of the same type.
         * - The resources must be in the same `partition` , `region` , and `account-id` as the key that is being created.
         * - Other than wildcards, you must include the full ARN, including the `arn` , `partition` , `service` , `region` , `account-id` and `resource-id` delimited by colons (:).
         * - No spaces allowed, even with wildcards. For example, `arn:aws:geo:region: *account-id* :map/ExampleMap*` .
         *
         * For more information about ARN format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-apikey-apikeyrestrictions.html#cfn-location-apikey-apikeyrestrictions-allowresources
         */
        readonly allowResources: Array<string>;
    }
}
/**
 * Properties for defining a `CfnAPIKey`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html
 */
export interface CfnAPIKeyProps {
    /**
     * Updates the description for the API key resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-description
     */
    readonly description?: string;
    /**
     * The optional timestamp for when the API key resource will expire in [ISO 8601 format](https://docs.aws.amazon.com/https://www.iso.org/iso-8601-date-and-time-format.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-expiretime
     */
    readonly expireTime?: string;
    /**
     * ForceDelete bypasses an API key's expiry conditions and deletes the key.
     *
     * Set the parameter `true` to delete the key or to `false` to not preemptively delete the API key.
     *
     * Valid values: `true` , or `false` .
     *
     * > This action is irreversible. Only use ForceDelete if you are certain the key is no longer in use.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-forcedelete
     */
    readonly forceDelete?: boolean | cdk.IResolvable;
    /**
     * The boolean flag to be included for updating `ExpireTime` or Restrictions details.
     *
     * Must be set to `true` to update an API key resource that has been used in the past 7 days. `False` if force update is not preferred.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-forceupdate
     */
    readonly forceUpdate?: boolean | cdk.IResolvable;
    /**
     * A custom name for the API key resource.
     *
     * Requirements:
     *
     * - Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).
     * - Must be a unique API key name.
     * - No spaces allowed. For example, `ExampleAPIKey` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-keyname
     */
    readonly keyName: string;
    /**
     * Whether the API key should expire.
     *
     * Set to `true` to set the API key to have no expiration time.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-noexpiry
     */
    readonly noExpiry?: boolean | cdk.IResolvable;
    /**
     * The API key restrictions for the API key resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-restrictions
     */
    readonly restrictions: CfnAPIKey.ApiKeyRestrictionsProperty | cdk.IResolvable;
    /**
     * Applies one or more tags to the map resource.
     *
     * A tag is a key-value pair that helps manage, identify, search, and filter your resources by labelling them.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
