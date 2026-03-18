import { ImageEntityType } from 'generated/prisma/client';

export interface ImageRoleConfig {
  role: string;
  maxCount: number;
  allowedMimeTypes: string[];
  maxSizeBytes: number;
}

export interface EntityImageConfig {
  entityType: ImageEntityType;
  roles: ImageRoleConfig[];
}

export const IMAGE_CONFIGS: Record<string, EntityImageConfig> = {
  category: {
    entityType: ImageEntityType.CATEGORY,
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
    entityType: ImageEntityType.BRAND,
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
    entityType: ImageEntityType.PRODUCT,
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
    entityType: ImageEntityType.SITE_CONFIG,
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
    entityType: ImageEntityType.HERO_SLIDE,
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
    entityType: ImageEntityType.USER,
    roles: [
      {
        role: 'avatar',
        maxCount: 1,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
        maxSizeBytes: 2 * 1024 * 1024,
      },
    ],
  },
};
