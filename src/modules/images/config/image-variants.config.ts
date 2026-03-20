// src/images/config/image-variants.config.ts

export type VariantName =
  | 'original'
  | 'zoom'
  | 'large'
  | 'medium'
  | 'thumb'
  | 'cart'
  | 'tiny';

export interface CropConfig {
  fit: 'inside' | 'cover' | 'contain';
  position?: string;
  background?: string;
}

/**
 * Tamaños de variantes por entidad (en px, lado mayor).
 * null = no redimensiona, solo convierte a webp.
 *
 * Clave compuesta para hero_slide porque desktop y mobile
 * tienen tamaños distintos: hero_slide_desktop / hero_slide_mobile
 */
export const VARIANT_CONFIGS: Record<
  string,
  Partial<Record<VariantName, number | null>>
> = {
  // ── PRODUCT ───────────────────────────────────────────────
  // Imagen más crítica del e-commerce
  product: {
    original: null, // fuente, nunca se sirve al público
    //zoom: 2000, // lupa en PDP / pinch mobile
    large: 1000, // imagen principal PDP
    medium: 480, // cards homepage, PLP listado
    thumb: 120, // miniaturas galería en PDP
    cart: 80, // carrito, checkout, email transaccional
  },

  // ── CATEGORY ──────────────────────────────────────────────
  // Banner de página + cards en homepage "Compra por categoría"
  category: {
    original: null,
    //large: 1200, // banner hero de la página de categoría
    medium: 600, // cards "Compra por categoría" en homepage
    //thumb: 300, // menú de navegación con imagen, widget lateral
  },

  // ── BRAND ─────────────────────────────────────────────────
  // Logo — SVG se sirve directo sin variantes raster (ver FORMAT_CONFIGS)
  brand: {
    original: null,
    medium: 400, // página de marca, filtro con logo
    thumb: 80, // badge en card de producto y PDP
  },

  // ── SITE_CONFIG ───────────────────────────────────────────
  // Logos del sitio — SVG se sirve directo sin variantes raster
  site_config: {
    original: null,
    medium: 200, // header logo
    thumb: 120, // footer logo, header mobile
  },

  // ── HERO SLIDE — roles separados ──────────────────────────
  // Cada rol tiene sus propios tamaños porque la relación de
  // aspecto desktop (16:9) y mobile (9:16 / 4:5) son distintas
  hero_slide_desktop: {
    original: null,
    large: 1440, // fullscreen desktop
    medium: 768, // tablet landscape
  },

  hero_slide_mobile: {
    original: null,
    large: 600, // mobile portrait full
    medium: 480, // mobile pequeño / conexión lenta
  },

  // ── USER ──────────────────────────────────────────────────
  // Avatar siempre cuadrado (cover centrado)
  user: {
    original: null,
    medium: 160, // página de perfil
    thumb: 48, // reseñas en PDP, historial de órdenes
    tiny: 32, // avatar en header (usuario logueado)
  },
};

/**
 * Configuración de recorte por entidad.
 *
 * - contain + background blanco → producto/logo no se recorta,
 *   se rellena con fondo blanco (estándar Amazon, MercadoLibre)
 * - cover + centre → banners y avatares llenan el espacio siempre
 * - inside → redimensiona sin recortar ni añadir relleno
 */
export const CROP_CONFIGS: Record<string, CropConfig> = {
  product: { fit: 'contain', background: '#ffffff' },
  category: { fit: 'cover', position: 'centre' },
  brand: { fit: 'contain', background: '#ffffff' },
  site_config: { fit: 'contain', background: 'transparent' },
  hero_slide_desktop: { fit: 'cover', position: 'centre' },
  hero_slide_mobile: { fit: 'cover', position: 'centre' },
  user: { fit: 'cover', position: 'centre' },
};

/**
 * Configuración de formato y calidad por entidad.
 *
 * skipVariantsIfSvg: true → si el archivo subido es SVG,
 * se sirve la url original directamente sin generar variantes raster.
 * Aplica a brand y site_config donde el logo suele ser SVG.
 */
export interface FormatConfig {
  quality: number;
  skipVariantsIfSvg: boolean;
}

export const FORMAT_CONFIGS: Record<string, FormatConfig> = {
  product: { quality: 85, skipVariantsIfSvg: false },
  category: { quality: 85, skipVariantsIfSvg: false },
  brand: { quality: 90, skipVariantsIfSvg: true },
  site_config: { quality: 90, skipVariantsIfSvg: true },
  hero_slide_desktop: { quality: 80, skipVariantsIfSvg: false },
  hero_slide_mobile: { quality: 75, skipVariantsIfSvg: false },
  user: { quality: 85, skipVariantsIfSvg: false },
};

/**
 * Calidad por nombre de variante.
 * zoom necesita mayor calidad por el nivel de detalle.
 * cart puede ser más agresivo porque se muestra muy pequeño.
 */
export const VARIANT_QUALITY: Partial<Record<VariantName, number>> = {
  zoom: 92,
  large: 85,
  medium: 85,
  thumb: 80,
  cart: 75,
  tiny: 75,
  original: 90,
};
