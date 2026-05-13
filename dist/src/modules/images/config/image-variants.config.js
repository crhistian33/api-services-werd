"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VARIANT_QUALITY = exports.FORMAT_CONFIGS = exports.CROP_CONFIGS = exports.VARIANT_CONFIGS = void 0;
exports.VARIANT_CONFIGS = {
    product: {
        original: null,
        large: 1000,
        medium: 480,
        thumb: 120,
        cart: 80,
    },
    category: {
        original: null,
        medium: 600,
        thumb: 120,
    },
    brand: {
        original: null,
        medium: 400,
        thumb: 80,
    },
    site_config: {
        original: null,
        medium: 200,
        thumb: 120,
    },
    hero_slide_desktop: {
        original: null,
        large: 1440,
        medium: 768,
        thumb: 120,
    },
    hero_slide_mobile: {
        original: null,
        large: 600,
        medium: 480,
        thumb: 120,
    },
    user: {
        original: null,
        medium: 160,
        thumb: 48,
        tiny: 32,
    },
};
exports.CROP_CONFIGS = {
    product: { fit: 'contain', background: '#ffffff' },
    category: { fit: 'cover', position: 'centre' },
    brand: { fit: 'contain', background: '#ffffff' },
    site_config: { fit: 'contain', background: 'transparent' },
    hero_slide_desktop: { fit: 'cover', position: 'centre' },
    hero_slide_mobile: { fit: 'cover', position: 'centre' },
    user: { fit: 'cover', position: 'centre' },
};
exports.FORMAT_CONFIGS = {
    product: { quality: 85, skipVariantsIfSvg: false },
    category: { quality: 85, skipVariantsIfSvg: false },
    brand: { quality: 90, skipVariantsIfSvg: true },
    site_config: { quality: 90, skipVariantsIfSvg: true },
    hero_slide_desktop: { quality: 80, skipVariantsIfSvg: false },
    hero_slide_mobile: { quality: 75, skipVariantsIfSvg: false },
    user: { quality: 85, skipVariantsIfSvg: false },
};
exports.VARIANT_QUALITY = {
    zoom: 92,
    large: 85,
    medium: 85,
    thumb: 80,
    cart: 75,
    tiny: 75,
    original: 90,
};
//# sourceMappingURL=image-variants.config.js.map