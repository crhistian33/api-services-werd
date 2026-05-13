"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMAGE_CONFIGS = void 0;
const client_1 = require("../../../../generated/prisma/client");
exports.IMAGE_CONFIGS = {
    category: {
        entityType: client_1.ImageEntityType.CATEGORY,
        roles: [
            {
                role: 'main',
                maxCount: 1,
                allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
                maxSizeBytes: 2 * 1024 * 1024,
            },
        ],
    },
    brand: {
        entityType: client_1.ImageEntityType.BRAND,
        roles: [
            {
                role: 'logo',
                maxCount: 1,
                allowedMimeTypes: [
                    'image/jpeg',
                    'image/png',
                    'image/webp',
                    'image/svg+xml',
                ],
                maxSizeBytes: 2 * 1024 * 1024,
            },
        ],
    },
    product: {
        entityType: client_1.ImageEntityType.PRODUCT,
        roles: [
            {
                role: 'main',
                maxCount: 1,
                allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
                maxSizeBytes: 5 * 1024 * 1024,
            },
            {
                role: 'gallery',
                maxCount: 3,
                allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
                maxSizeBytes: 5 * 1024 * 1024,
            },
        ],
    },
    site_config: {
        entityType: client_1.ImageEntityType.SITE_CONFIG,
        roles: [
            {
                role: 'logo_header',
                maxCount: 1,
                allowedMimeTypes: [
                    'image/jpeg',
                    'image/png',
                    'image/webp',
                    'image/svg+xml',
                ],
                maxSizeBytes: 1 * 1024 * 1024,
            },
            {
                role: 'logo_footer',
                maxCount: 1,
                allowedMimeTypes: [
                    'image/jpeg',
                    'image/png',
                    'image/webp',
                    'image/svg+xml',
                ],
                maxSizeBytes: 1 * 1024 * 1024,
            },
        ],
    },
    hero_slide: {
        entityType: client_1.ImageEntityType.HERO_SLIDE,
        roles: [
            {
                role: 'desktop',
                maxCount: 1,
                allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
                maxSizeBytes: 5 * 1024 * 1024,
            },
            {
                role: 'mobile',
                maxCount: 1,
                allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
                maxSizeBytes: 3 * 1024 * 1024,
            },
        ],
    },
    user: {
        entityType: client_1.ImageEntityType.USER,
        roles: [
            {
                role: 'avatar',
                maxCount: 1,
                allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
                maxSizeBytes: 2 * 1024 * 1024,
            },
        ],
    },
    order_logistics: {
        entityType: client_1.ImageEntityType.ORDER_LOGISTICS,
        roles: [
            {
                role: 'shipping_evidence',
                maxCount: 3,
                allowedMimeTypes: ['image/jpeg', 'image/png'],
                maxSizeBytes: 5 * 1024 * 1024,
            },
        ],
    },
    order_claim: {
        entityType: client_1.ImageEntityType.ORDER_CLAIM,
        roles: [
            {
                role: 'customer_evidence',
                maxCount: 3,
                allowedMimeTypes: ['image/jpeg', 'image/png'],
                maxSizeBytes: 5 * 1024 * 1024,
            },
        ],
    },
    order_delivery: {
        entityType: client_1.ImageEntityType.ORDER_DELIVERY,
        roles: [
            {
                role: 'delivery_evidence',
                maxCount: 3,
                allowedMimeTypes: ['image/jpeg', 'image/png'],
                maxSizeBytes: 5 * 1024 * 1024,
            },
        ],
    },
    order_refund: {
        entityType: client_1.ImageEntityType.ORDER_REFUND,
        roles: [
            {
                role: 'refund_evidence',
                maxCount: 3,
                allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
                maxSizeBytes: 5 * 1024 * 1024,
            },
        ],
    },
    order_item_return: {
        entityType: client_1.ImageEntityType.ORDER_ITEM_RETURN,
        roles: [
            {
                role: 'return_evidence',
                maxCount: 3,
                allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
                maxSizeBytes: 5 * 1024 * 1024,
            },
        ],
    },
};
//# sourceMappingURL=image-config.js.map