import { ImageEntityType } from 'generated/prisma/client';

export interface ImageRoleConfig {
  role: string;
  maxCount: number;
  allowedMimeTypes: string[];
  maxSizeBytes: number;
  // Resolución mínima exigida en la foto ORIGINAL subida por el admin.
  // Debe ser >= al lado mayor de la variante más grande definida en
  // image-variants.config.ts para esa entidad, o el `fit: 'contain'`
  // termina generando canvases con relleno blanco excesivo.
  minWidth?: number;
  minHeight?: number;
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
        minWidth: 600, // = variante 'medium' de category
        minHeight: 600,
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
        minWidth: 400, // = variante 'medium' de brand (no aplica si el logo es SVG)
        minHeight: 400,
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
        minWidth: 1000, // = variante 'large' de product
        minHeight: 1000,
      },
      {
        role: 'gallery',
        maxCount: 3,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
        maxSizeBytes: 5 * 1024 * 1024,
        minWidth: 1000,
        minHeight: 1000,
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
        minWidth: 1440, // = variante 'large' de hero_slide_desktop
        minHeight: 500, // banners suelen ser panorámicos, no forzar cuadrado
      },
      {
        role: 'mobile',
        maxCount: 1,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
        maxSizeBytes: 3 * 1024 * 1024,
        minWidth: 600, // = variante 'large' de hero_slide_mobile
        minHeight: 600,
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
        minWidth: 160, // = variante 'medium' de user
        minHeight: 160,
      },
    ],
  },
  order_logistics: {
    entityType: ImageEntityType.ORDER_LOGISTICS,
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
    entityType: ImageEntityType.ORDER_CLAIM,
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
    entityType: ImageEntityType.ORDER_DELIVERY,
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
    entityType: ImageEntityType.ORDER_REFUND,
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
    entityType: ImageEntityType.ORDER_ITEM_RETURN,
    roles: [
      {
        role: 'return_evidence',
        maxCount: 3,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
        maxSizeBytes: 5 * 1024 * 1024,
      },
    ],
  },
  complaint: {
    entityType: ImageEntityType.COMPLAINT,
    roles: [
      {
        role: 'complaint_evidence',
        maxCount: 5,
        // Soporta imágenes y PDFs como adjuntos de la respuesta del admin
        allowedMimeTypes: [
          'image/jpeg',
          'image/png',
          'image/webp',
          'application/pdf',
        ],
        maxSizeBytes: 10 * 1024 * 1024, // 10 MB (PDFs pueden ser más pesados)
      },
    ],
  },
};
