import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { join, extname, basename } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { rename, unlink, access } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import { ImageEntityType } from 'generated/prisma/client';
import { IMAGE_CONFIGS, ImageRoleConfig } from '../image-config';

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

export interface MovedImage {
  finalPath: string;
  url: string;
}

@Injectable()
export class ImageStorageService {
  private readonly uploadsRoot = join(process.cwd(), 'uploads');
  private readonly tempDir = join(this.uploadsRoot, 'temp');
  private readonly imagesDir = join(this.uploadsRoot, 'images');

  constructor() {
    this.ensureDir(this.tempDir);
    this.ensureDir(this.imagesDir);
  }

  private ensureDir(dir: string): void {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  }

  // ── Valida tipo MIME y tamaño contra la config del rol ──
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

  // ── Obtiene la config de rol para una entidad ──
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

  // ── Guarda el archivo en /uploads/temp y retorna metadata ──
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
        const { writeFile } = await import('fs/promises');
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

  // ── Mueve el archivo de temp a la carpeta final por entidad/rol ──
  async moveTempToFinal(
    tempPath: string,
    entityType: ImageEntityType,
    imageRole: string,
  ): Promise<MovedImage> {
    const entityDir = join(this.imagesDir, entityType.toLowerCase(), imageRole);
    this.ensureDir(entityDir);

    const filename = basename(tempPath);
    const finalPath = join(entityDir, filename);

    try {
      await rename(tempPath, finalPath);
    } catch {
      throw new InternalServerErrorException(
        'Error al mover la imagen al directorio final',
      );
    }

    const url = `/uploads/images/${entityType.toLowerCase()}/${imageRole}/${filename}`;
    return { finalPath, url };
  }

  // ── Elimina un archivo del disco (temp o final) ──
  async deleteFile(filePath: string): Promise<void> {
    try {
      await access(filePath);
      await unlink(filePath);
    } catch {
      // Si no existe, no es error
    }
  }
}
