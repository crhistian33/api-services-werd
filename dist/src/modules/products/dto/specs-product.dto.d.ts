export declare class SpecItemDto {
    specKey: string;
    specValue: string;
    sortOrder?: number;
}
export declare class FeatureItemDto {
    feature: string;
    sortOrder?: number;
}
export declare class SetSpecsDto {
    specs: SpecItemDto[];
}
export declare class SetFeaturesDto {
    features: FeatureItemDto[];
}
