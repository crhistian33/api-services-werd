import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { extname } from 'path';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  GetObjectCommandOutput,
  DeleteObjectCommand,
  CopyObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
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
  // KEY del objeto en R2 (ej: "temp/uuid.jpg"), no una ruta de filesystem.
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

export interface MovedImage {
  finalPath: string; // key del objeto "original" en R2
  url: string;
  variants: Record<string, string>; // { original: url, large: url, medium: url, ... }
  isSvg: boolean;
}

@Injectable()
export class ImageStorageService {
  private readonly s3: S3Client;
  private readonly bucket: string;
  private readonly publicUrl: string;

  constructor(private readonly config: ConfigService) {
    const accountId = this.config.get<string>('r2.accountId');
    const bucket = this.config.get<string>('r2.bucketName');
    const publicUrl = this.config.get<string>('r2.publicUrl');

    if (!accountId || !bucket || !publicUrl) {
      throw new Error(
        'Configuración de R2 incompleta: revisa R2_ACCOUNT_ID, R2_BUCKET_NAME y R2_PUBLIC_URL',
      );
    }

    this.bucket = bucket;
    this.publicUrl = publicUrl.replace(/\/$/, '');

    this.s3 = new S3Client({
      region: 'auto',
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: this.config.get<string>('r2.accessKeyId')!,
        secretAccessKey: this.config.get<string>('r2.secretAccessKey')!,
      },
    });
  }

  // ── sin cambios respecto a la versión local ──────────────────────────────

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

  // ═══════════════════════════════════════════════
  // saveTempImage — sube el buffer original a R2 bajo temp/
  // (misma firma que la versión local; el controller no cambia)
  // ═══════════════════════════════════════════════

  async saveTempImage(
    file: Express.Multer.File,
    entityKey: string,
    imageRole: string,
  ): Promise<SavedTempImage> {
    const roleConfig = this.getRoleConfig(entityKey, imageRole);
    this.validateFile(file, roleConfig);

    const ext = extname(file.originalname).toLowerCase() || '.jpg';
    const key = `temp/${uuidv4()}${ext}`;

    let metadata: SavedTempImage['metadata'];

    try {
      if (file.mimetype === 'image/svg+xml') {
        // SVG: subir directamente, sin pasar por Sharp
        await this.putObject(key, file.buffer, file.mimetype);
        metadata = {
          width: 0,
          height: 0,
          size: file.size,
          format: 'svg',
          mimeType: file.mimetype,
        };
      } else if (file.mimetype === 'application/pdf') {
        // PDF: subir directamente, sin pasar por Sharp (no es imagen)
        await this.putObject(key, file.buffer, file.mimetype);
        metadata = {
          width: 0,
          height: 0,
          size: file.size,
          format: 'pdf',
          mimeType: file.mimetype,
        };
      } else {
        // Raster: leemos metadata con sharp y subimos el buffer original tal cual
        const sharpMeta = await sharp(file.buffer).metadata();
        await this.putObject(key, file.buffer, file.mimetype);
        metadata = {
          width: sharpMeta.width ?? 0,
          height: sharpMeta.height ?? 0,
          size: file.size,
          format: sharpMeta.format ?? 'unknown',
          mimeType: file.mimetype,
        };
      }
    } catch {
      throw new InternalServerErrorException('Error al procesar el archivo');
    }

    return { tempPath: key, url: this.toPublicUrl(key), metadata };
  }

  // ═══════════════════════════════════════════════
  // deleteFile — ahora recibe una KEY de R2, no una ruta de disco
  // ═══════════════════════════════════════════════

  async deleteFile(key: string | null | undefined): Promise<void> {
    if (!key) return;
    try {
      await this.s3.send(
        new DeleteObjectCommand({ Bucket: this.bucket, Key: key }),
      );
    } catch {
      // si no existe, no es error
    }
  }

  /**
   * Igual que deleteFile, pero recibe una URL pública completa
   * (así son guardados los `variants` en metadata) y deriva la key.
   * Úsalo en vez de deleteFile() cuando lo que tienes es una URL.
   */
  async deleteByUrl(url: string | null | undefined): Promise<void> {
    const key = this.extractKey(url);
    if (key) await this.deleteFile(key);
  }

  /**
   * Descarga un objeto de R2 y retorna su buffer.
   * Útil para adjuntar archivos a correos (base64).
   */
  async downloadFileBuffer(key: string): Promise<Buffer> {
    return this.getObjectBuffer(key);
  }

  /**
   * Mueve un archivo "raw" (sin variantes, como PDFs) desde temp/ a su
   * carpeta final en R2. Usado para adjuntos de respuesta de reclamos.
   * Retorna la key final y la URL pública.
   */
  async moveRawFileToFinal(
    tempKey: string,
    entityKey: string,
    role: string,
    mimeType: string,
  ): Promise<{ finalKey: string; url: string }> {
    const ext = extname(tempKey) || '.bin';
    const uuid = uuidv4();
    const finalKey = `files/${entityKey}/${role}/${uuid}${ext}`;

    const buffer = await this.getObjectBuffer(tempKey);
    await this.putObject(finalKey, buffer, mimeType);
    await this.deleteFile(tempKey);

    return { finalKey, url: this.toPublicUrl(finalKey) };
  }

  // ═══════════════════════════════════════════════
  // moveTempToFinal — descarga el temporal desde R2, genera variantes
  // en memoria y las sube a su carpeta final
  // ═══════════════════════════════════════════════

  async moveTempToFinal(
    tempKey: string,
    entityType: ImageEntityType,
    imageRole: string,
    mimeType: string,
    options: { keepTemp?: boolean } = {},
  ): Promise<MovedImage> {
    const entityKey = entityType.toLowerCase();
    const variantKey = this.resolveVariantKey(entityKey, imageRole);
    const formatConfig = FORMAT_CONFIGS[variantKey] ?? {
      quality: 85,
      skipVariantsIfSvg: false,
    };
    const isSvg = mimeType === 'image/svg+xml';

    // ── SVG: copiar directo, sin pasar por Sharp ─────────────────────────────
    if (isSvg && formatConfig.skipVariantsIfSvg) {
      const moved = await this.moveSvgToFinal(tempKey, entityKey);
      if (!options.keepTemp) await this.deleteFile(tempKey);
      return moved;
    }

    // ── Raster: bajar el buffer y generar variantes con Sharp ────────────────
    const sourceBuffer = await this.getObjectBuffer(tempKey);
    const variants = await this.generateVariants(
      sourceBuffer,
      entityKey,
      variantKey,
    );

    if (!options.keepTemp) {
      await this.deleteFile(tempKey);
    }

    return {
      finalPath: variants.original.key,
      url: variants.original.url,
      variants: Object.fromEntries(
        Object.entries(variants).map(([name, data]) => [name, data.url]),
      ),
      isSvg: false,
    };
  }

  private resolveVariantKey(entityKey: string, imageRole: string): string {
    const compoundKey = `${entityKey}_${imageRole}`;
    if (VARIANT_CONFIGS[compoundKey]) return compoundKey;
    return entityKey;
  }

  private async generateVariants(
    sourceBuffer: Buffer,
    entityKey: string,
    variantKey: string,
  ): Promise<Record<string, { key: string; url: string }>> {
    const variantSizes = VARIANT_CONFIGS[variantKey] ?? { original: null };
    const cropConfig = CROP_CONFIGS[variantKey] ?? { fit: 'inside' as const };
    const formatConfig = FORMAT_CONFIGS[variantKey] ?? {
      quality: 85,
      skipVariantsIfSvg: false,
    };

    const uuid = uuidv4();
    const results: Record<string, { key: string; url: string }> = {};

    for (const [name, size] of Object.entries(variantSizes)) {
      const variantName = name as VariantName;
      const quality = VARIANT_QUALITY[variantName] ?? formatConfig.quality;
      const key = `images/${entityKey}/${variantName}/${uuid}.webp`;

      let outBuffer: Buffer;
      try {
        // sharp(buffer) nuevo en cada iteración: el pipeline consume el buffer de entrada
        const pipeline = sharp(sourceBuffer);

        if (size !== null) {
          pipeline.resize(size, size, {
            fit: cropConfig.fit,
            position: cropConfig.position ?? 'centre',
            background: cropConfig.background ?? '#ffffff',
            withoutEnlargement: true,
          });
        }

        outBuffer = await pipeline.webp({ quality }).toBuffer();
      } catch {
        throw new InternalServerErrorException(
          `Error generando variante "${variantName}" para ${entityKey}`,
        );
      }

      await this.putObject(key, outBuffer, 'image/webp');
      results[variantName] = { key, url: this.toPublicUrl(key) };
    }

    return results;
  }

  private async moveSvgToFinal(
    tempKey: string,
    entityKey: string,
  ): Promise<MovedImage> {
    const uuid = uuidv4();
    const key = `images/${entityKey}/original/${uuid}.svg`;

    try {
      await this.s3.send(
        new CopyObjectCommand({
          Bucket: this.bucket,
          CopySource: `${this.bucket}/${tempKey}`,
          Key: key,
          ContentType: 'image/svg+xml',
        }),
      );
    } catch {
      throw new InternalServerErrorException(
        'Error al mover el SVG al bucket final',
      );
    }

    const url = this.toPublicUrl(key);
    return { finalPath: key, url, variants: { original: url }, isSvg: true };
  }

  // ═══════════════════════════════════════════════
  // Limpieza de temporales huérfanos (usado por el cron)
  // Sustituye al readdir() del filesystem local por un listado del prefijo temp/
  // ═══════════════════════════════════════════════

  async cleanupOldTempObjects(olderThanMinutes: number): Promise<number> {
    const threshold = Date.now() - olderThanMinutes * 60 * 1000;
    let cleaned = 0;
    let continuationToken: string | undefined;

    do {
      const res = await this.s3.send(
        new ListObjectsV2Command({
          Bucket: this.bucket,
          Prefix: 'temp/',
          ContinuationToken: continuationToken,
        }),
      );

      const stale = (res.Contents ?? []).filter(
        (obj) => obj.LastModified && obj.LastModified.getTime() < threshold,
      );

      await Promise.all(
        stale.map(async (obj) => {
          await this.deleteFile(obj.Key);
          cleaned++;
        }),
      );

      continuationToken = res.IsTruncated
        ? res.NextContinuationToken
        : undefined;
    } while (continuationToken);

    return cleaned;
  }

  // ── helpers privados ──────────────────────────────────────────────────────

  private async putObject(
    key: string,
    body: Buffer,
    contentType: string,
  ): Promise<void> {
    await this.s3.send(
      new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
      }),
    );
  }

  private async getObjectBuffer(key: string): Promise<Buffer> {
    let res: GetObjectCommandOutput;
    try {
      res = await this.s3.send(
        new GetObjectCommand({ Bucket: this.bucket, Key: key }),
      );
    } catch {
      throw new InternalServerErrorException(
        `No se encontró el archivo temporal "${key}" en R2`,
      );
    }

    if (!res.Body) {
      throw new InternalServerErrorException(
        `El objeto "${key}" en R2 no tiene contenido`,
      );
    }

    const stream = res.Body as unknown as NodeJS.ReadableStream;
    const chunks: Buffer[] = [];
    for await (const chunk of stream) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks);
  }

  private toPublicUrl(key: string): string {
    return `${this.publicUrl}/${key}`;
  }

  private extractKey(url: string | null | undefined): string | null {
    if (!url) return null;
    return url.startsWith(this.publicUrl)
      ? url.slice(this.publicUrl.length + 1)
      : url; // ya era una key, no una url completa
  }
}
