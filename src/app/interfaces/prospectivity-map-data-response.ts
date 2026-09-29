export interface ProspectivityMapData {
    type:     string;
    features: Feature[];
    crs:      CRS;
}

export interface CRS {
    type:       string;
    properties: CRSProperties;
}

export interface CRSProperties {
    name: string;
}

export interface Feature {
    id:         string;
    type:       FeatureType;
    properties: FeatureProperties;
    geometry:   Geometry;
}

export interface Geometry {
    type:        GeometryType;
    coordinates: number[];
}

export enum GeometryType {
    Point = "Point",
}

export interface FeatureProperties {
    OBJECTID_left: number;
    probability:   number;
}

export enum FeatureType {
    Feature = "Feature",
}
