export type VariantName = 'original' | 'zoom' | 'large' | 'medium' | 'thumb' | 'cart' | 'tiny';
export interface CropConfig {
    fit: 'inside' | 'cover' | 'contain';
    position?: string;
    background?: string;
}
export declare const VARIANT_CONFIGS: Record<string, Partial<Record<VariantName, number | null>>>;
export declare const CROP_CONFIGS: Record<string, CropConfig>;
export interface FormatConfig {
    quality: number;
    skipVariantsIfSvg: boolean;
}
export declare const FORMAT_CONFIGS: Record<string, FormatConfig>;
export declare const VARIANT_QUALITY: Partial<Record<VariantName, number>>;
