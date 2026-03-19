import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { join, extname, dirname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import {
  rename,
  unlink,
  access,
  copyFile,
  writeFile,
  mkdir,
} from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import { ImageEntityType } from 'generated/prisma/client';
import { IMAGE_CONFIGS, ImageRoleConfig } from '../config/image-config';
import {
  VARIANT_CONFIGS,
  CROP_CONFIGS,
  FORMAT_CONFIGS,
  VARIANT_QUALITY,
  VariantName,
} from '../config/image-variants.config';

export interface SavedTempImage {
  tempPath: string;
  url: string;
  metadata: {
    width: number;
    height: number;
    size: number;
    format: string;
    mimeType: string;
  };
}

// ── MovedImage ahora incluye variants y isSvg ──
export interface MovedImage {
  finalPath: string;
  url: string;
  variants: Record<string, string>; // { original, large, medium, thumb, ... }
  isSvg: boolean;
}

@Injectable()
export class ImageStorageService {
  private readonly uploadsRoot = join(process.cwd(), 'uploads');
  private readonly tempDir = join(this.uploadsRoot, 'temp');
  private readonly imagesDir = join(this.uploadsRoot, 'images');

  constructor() {
    this.ensureDirSync(this.tempDir);
    this.ensureDirSync(this.imagesDir);
  }

  // ── sin cambios ─────────────────────────────────────────────────────────────

  private ensureDirSync(dir: string): void {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  }

  validateFile(file: Express.Multer.File, roleConfig: ImageRoleConfig): void {
    if (!roleConfig.allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `Tipo de archivo no permitido. Permitidos: ${roleConfig.allowedMimeTypes.join(', ')}`,
      );
    }
    if (file.size > roleConfig.maxSizeBytes) {
      const maxMb = (roleConfig.maxSizeBytes / 1024 / 1024).toFixed(1);
      throw new BadRequestException(
        `El archivo supera el tamaño máximo permitido de ${maxMb} MB`,
      );
    }
  }

  getRoleConfig(entityKey: string, imageRole: string): ImageRoleConfig {
    const config = IMAGE_CONFIGS[entityKey];
    if (!config) {
      throw new BadRequestException(
        `Entidad "${entityKey}" no soporta imágenes`,
      );
    }
    const roleConfig = config.roles.find((r) => r.role === imageRole);
    if (!roleConfig) {
      throw new BadRequestException(
        `El rol "${imageRole}" no es válido para "${entityKey}". Roles válidos: ${config.roles.map((r) => r.role).join(', ')}`,
      );
    }
    return roleConfig;
  }

  async saveTempImage(
    file: Express.Multer.File,
    entityKey: string,
    imageRole: string,
  ): Promise<SavedTempImage> {
    const roleConfig = this.getRoleConfig(entityKey, imageRole);
    this.validateFile(file, roleConfig);

    const ext = extname(file.originalname).toLowerCase() || '.jpg';
    const filename = `${uuidv4()}${ext}`;
    const tempPath = join(this.tempDir, filename);

    let metadata: SavedTempImage['metadata'];

    try {
      if (file.mimetype === 'image/svg+xml') {
        await writeFile(tempPath, file.buffer);
        metadata = {
          width: 0,
          height: 0,
          size: file.size,
          format: 'svg',
          mimeType: file.mimetype,
        };
      } else {
        const sharpMeta = await sharp(file.buffer).toFile(tempPath);
        metadata = {
          width: sharpMeta.width,
          height: sharpMeta.height,
          size: sharpMeta.size,
          format: sharpMeta.format,
          mimeType: file.mimetype,
        };
      }
    } catch {
      throw new InternalServerErrorException('Error al procesar la imagen');
    }

    const url = `/uploads/temp/${filename}`;
    return { tempPath, url, metadata };
  }

  async deleteFile(filePath: string): Promise<void> {
    try {
      await access(filePath);
      await unlink(filePath);
    } catch {
      // Si no existe, no es error
    }
  }

  // ── NUEVO: moveTempToFinal con generación de variantes ──────────────────────

  /**
   * Mueve la imagen de /temp/ a su carpeta final y genera todas las variantes
   * definidas en VARIANT_CONFIGS para la entidad + rol.
   *
   * Estructura de carpetas resultante:
   *   uploads/images/{entityKey}/{variantName}/{uuid}.webp
   *   uploads/images/{entityKey}/original/{uuid}.svg  ← solo si es SVG
   *
   * @param tempPath  Ruta absoluta del archivo temporal
   * @param entityType  Enum Prisma: PRODUCT, CATEGORY, etc.
   * @param imageRole   Rol: main, gallery, desktop, mobile, logo, avatar, etc.
   * @param mimeType    MimeType original — detecta SVG para saltear Sharp
   */
  async moveTempToFinal(
    tempPath: string,
    entityType: ImageEntityType,
    imageRole: string,
    mimeType: string,
  ): Promise<MovedImage> {
    const entityKey = entityType.toLowerCase(); // 'product', 'category'
    const variantKey = this.resolveVariantKey(entityKey, imageRole); // 'product' | 'hero_slide_desktop'
    const formatConfig = FORMAT_CONFIGS[variantKey] ?? {
      quality: 85,
      skipVariantsIfSvg: false,
    };
    const isSvg = mimeType === 'image/svg+xml';

    // ── SVG: mover a /original/ sin pasar por Sharp ──────────────────────────
    if (isSvg && formatConfig.skipVariantsIfSvg) {
      return this.moveSvgToFinal(tempPath, entityKey);
    }

    // ── Raster: generar variantes con Sharp ──────────────────────────────────
    const variants = await this.generateVariants(
      tempPath,
      entityKey,
      variantKey,
    );

    // Elimina el temporal después de generar todas las variantes
    await unlink(tempPath).catch(() => null);

    return {
      finalPath: variants.original.fullPath,
      url: variants.original.url,
      variants: Object.fromEntries(
        Object.entries(variants).map(([name, data]) => [name, data.url]),
      ),
      isSvg: false,
    };
  }

  // ── NUEVO: resolveVariantKey ─────────────────────────────────────────────────

  /**
   * Resuelve la clave de VARIANT_CONFIGS a partir de entityKey + imageRole.
   *
   * Ejemplos:
   *   hero_slide + desktop  →  'hero_slide_desktop'  (clave compuesta, existe)
   *   hero_slide + mobile   →  'hero_slide_mobile'   (clave compuesta, existe)
   *   product    + main     →  'product'             (compuesta no existe, fallback)
   *   product    + gallery  →  'product'             (compuesta no existe, fallback)
   *   category   + main     →  'category'            (compuesta no existe, fallback)
   */
  private resolveVariantKey(entityKey: string, imageRole: string): string {
    const compoundKey = `${entityKey}_${imageRole}`;
    if (VARIANT_CONFIGS[compoundKey]) return compoundKey;
    if (VARIANT_CONFIGS[entityKey]) return entityKey;
    return entityKey;
  }

  // ── NUEVO: generateVariants ──────────────────────────────────────────────────

  /**
   * Genera todas las variantes definidas en VARIANT_CONFIGS[variantKey].
   * Cada variante se guarda en: uploads/images/{entityKey}/{variantName}/{uuid}.webp
   *
   * Retorna un mapa de variantName → { fullPath, url }
   */
  private async generateVariants(
    sourcePath: string,
    entityKey: string,
    variantKey: string,
  ): Promise<Record<string, { fullPath: string; url: string }>> {
    const variantSizes = VARIANT_CONFIGS[variantKey] ?? { original: null };
    const cropConfig = CROP_CONFIGS[variantKey] ?? { fit: 'inside' };
    const formatConfig = FORMAT_CONFIGS[variantKey] ?? {
      quality: 85,
      skipVariantsIfSvg: false,
    };

    const uuid = uuidv4();
    const results: Record<string, { fullPath: string; url: string }> = {};

    for (const [name, size] of Object.entries(variantSizes)) {
      const variantName = name as VariantName;
      const quality = VARIANT_QUALITY[variantName] ?? formatConfig.quality;

      const relativePath = `images/${entityKey}/${variantName}/${uuid}.webp`;
      const fullPath = join(this.uploadsRoot, relativePath);

      await mkdir(dirname(fullPath), { recursive: true });

      try {
        const pipeline = sharp(sourcePath);

        if (size !== null) {
          pipeline.resize(size, size, {
            fit: cropConfig.fit,
            position: cropConfig.position ?? 'centre',
            background: cropConfig.background ?? '#ffffff',
            withoutEnlargement: true, // nunca agranda una imagen pequeña
          });
        }

        await pipeline.webp({ quality }).toFile(fullPath);
      } catch {
        throw new InternalServerErrorException(
          `Error generando variante "${variantName}" para ${entityKey}`,
        );
      }

      const url = `/uploads/${relativePath}`;
      results[variantName] = { fullPath, url };
    }

    return results;
  }

  // ── NUEVO: moveSvgToFinal ────────────────────────────────────────────────────

  /**
   * Para SVG en brand y site_config: mueve el archivo a /original/
   * sin procesar con Sharp. El SVG se sirve directamente desde esa URL.
   */
  private async moveSvgToFinal(
    tempPath: string,
    entityKey: string,
  ): Promise<MovedImage> {
    const uuid = uuidv4();
    const relativePath = `images/${entityKey}/original/${uuid}.svg`;
    const fullPath = join(this.uploadsRoot, relativePath);

    await mkdir(dirname(fullPath), { recursive: true });

    try {
      await this.moveFile(tempPath, fullPath);
    } catch {
      throw new InternalServerErrorException(
        'Error al mover el SVG al directorio final',
      );
    }

    const url = `/uploads/${relativePath}`;
    return {
      finalPath: fullPath,
      url,
      variants: { original: url },
      isSvg: true,
    };
  }

  // ── NUEVO: moveFile con fallback cross-device ────────────────────────────────

  /**
   * Intenta rename() primero (atómico, sin copiar bytes).
   * Si falla con EXDEV (origen y destino en distintas particiones,
   * común en Docker), hace copyFile() + unlink() como fallback.
   */
  private async moveFile(src: string, dest: string): Promise<void> {
    try {
      await rename(src, dest);
    } catch (err: unknown) {
      if ((err as NodeJS.ErrnoException).code === 'EXDEV') {
        await copyFile(src, dest);
        await unlink(src).catch(() => null);
      } else {
        throw err;
      }
    }
  }
}
