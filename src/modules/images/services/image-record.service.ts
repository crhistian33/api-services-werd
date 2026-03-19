import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { join } from 'path';
import { PrismaService } from '../../../prisma/prisma.service';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { ImageStorageService } from './image-storage.service';
import { PrismaDatabaseClient } from '../../../common/services/base.service';

export interface CreateImageRecordInput {
  entityType: ImageEntityType;
  entityId: string;
  imageRole: string;
  tempPath: string;
  url: string;
  order?: number;
  altText?: string;
  metadata?: object;
}

export interface ImageVariants {
  original?: string;
  zoom?: string;
  large?: string;
  medium?: string;
  thumb?: string;
  cart?: string;
  tiny?: string;
}

export interface ImageDto {
  id: string;
  imageRole: string;
  url: string | null;
  altText: string | null;
  order: number;
  variants: ImageVariants; // ← en lugar de metadata raw
  isSvg: boolean; // ← útil para que el frontend sepa si es SVG
}

@Injectable()
export class ImageRecordService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: ImageStorageService,
  ) {}

  // ── syncTempImageById ────────────────────────────────────────────────────────

  async syncTempImageById(
    imageId: string,
    entityType: ImageEntityType,
    entityId: string,
    imageRole: string,
    prisma?: PrismaDatabaseClient,
    options: { keepTemp?: boolean } = {},
  ): Promise<{ finalPath: string; tempPath: string; oldPaths: string[] }> {
    const db = prisma ?? this.prisma;
    const tempRecord = await db.image.findUnique({
      where: { id: imageId },
    });

    if (!tempRecord) {
      throw new NotFoundException(
        `Imagen temporal con id "${imageId}" no encontrada`,
      );
    }

    if (
      tempRecord.entityType !== entityType ||
      tempRecord.imageRole !== imageRole
    ) {
      throw new BadRequestException(
        `La imagen "${imageId}" no corresponde a entityType "${entityType}" y role "${imageRole}"`,
      );
    }

    const filename = tempRecord.url!.split('/').pop()!;
    const tempPath = join(process.cwd(), 'uploads', 'temp', filename);

    // FIX 1: extraer mimeType del metadata guardado en el upload temporal
    const meta = tempRecord.metadata as { mimeType?: string };
    const mimeType = meta?.mimeType ?? 'image/jpeg';

    // FIX 1: pasar mimeType como 4to parámetro
    const {
      finalPath,
      url: finalUrl,
      variants,
    } = await this.storage.moveTempToFinal(
      tempPath,
      entityType,
      imageRole,
      mimeType,
      { keepTemp: options.keepTemp },
    );

    const oldPaths = await this.deleteRoleImages(
      entityType,
      entityId,
      imageRole,
      db,
      {
        deletePhysical: !options.keepTemp,
      },
    );

    // FIX 2: guardar variants en metadata
    const existingMeta = (tempRecord.metadata as object) ?? {};
    await db.image.update({
      where: { id: imageId },
      data: {
        entityId,
        tempPath: null,
        finalPath,
        url: finalUrl,
        isConfirmed: true,
        metadata: {
          ...existingMeta,
          variants, // { original, large, medium, thumb, cart, ... }
        },
      },
    });

    return { finalPath, tempPath, oldPaths };
  }

  // ── syncTempImagesById ───────────────────────────────────────────────────────

  async syncTempImagesById(
    imageIds: string[],
    entityType: ImageEntityType,
    entityId: string,
    imageRole: string,
    prisma?: PrismaDatabaseClient,
    options: { keepTemp?: boolean } = {},
  ): Promise<{
    finalPaths: string[];
    tempPaths: string[];
    deletedOldPaths: string[];
  }> {
    const db = prisma ?? this.prisma;
    const oldPaths = await this.deleteRoleImages(
      entityType,
      entityId,
      imageRole,
      db,
      {
        deletePhysical: !options.keepTemp,
      },
    );

    const finalPaths: string[] = [];
    const tempPaths: string[] = [];
    const deletedOldPaths: string[] = oldPaths;

    for (let order = 0; order < imageIds.length; order++) {
      const imageId = imageIds[order];

      const tempRecord = await db.image.findUnique({
        where: { id: imageId },
      });

      if (!tempRecord) {
        throw new NotFoundException(
          `Imagen temporal con id "${imageId}" no encontrada`,
        );
      }

      if (
        tempRecord.entityType !== entityType ||
        tempRecord.imageRole !== imageRole
      ) {
        throw new BadRequestException(
          `La imagen "${imageId}" no corresponde a entityType "${entityType}" y role "${imageRole}"`,
        );
      }

      const filename = tempRecord.url!.split('/').pop()!;
      const tempPath = join(process.cwd(), 'uploads', 'temp', filename);

      // FIX 1: extraer mimeType del metadata
      const meta = tempRecord.metadata as { mimeType?: string };
      const mimeType = meta?.mimeType ?? 'image/jpeg';

      // FIX 1: pasar mimeType como 4to parámetro
      const {
        finalPath,
        url: finalUrl,
        variants,
      } = await this.storage.moveTempToFinal(
        tempPath,
        entityType,
        imageRole,
        mimeType,
        { keepTemp: options.keepTemp },
      );

      finalPaths.push(finalPath);
      tempPaths.push(tempPath);

      // FIX 2: guardar variants en metadata
      const existingMeta = (tempRecord.metadata as object) ?? {};
      await db.image.update({
        where: { id: imageId },
        data: {
          entityId,
          tempPath: null,
          finalPath,
          url: finalUrl,
          isConfirmed: true,
          order,
          metadata: {
            ...existingMeta,
            variants,
          },
        },
      });
    }

    return { finalPaths, tempPaths, deletedOldPaths };
  }

  async createTempRecord(input: CreateImageRecordInput) {
    return this.prisma.image.create({
      data: {
        entityType: input.entityType,
        entityId: input.entityId,
        imageRole: input.imageRole,
        tempPath: input.tempPath,
        url: input.url,
        metadata: input.metadata as Prisma.InputJsonValue,
        isConfirmed: false,
      },
    });
  }

  // ═══════════════════════════════════════════════
  // deleteFiles — elimina archivos físicamente (ignore not-found)
  // ═══════════════════════════════════════════════
  async deleteFiles(paths: string[]): Promise<void> {
    await Promise.all(
      paths.map((path) => this.storage.deleteFile(path).catch(() => null)),
    );
  }

  // ═══════════════════════════════════════════════
  // getEntityImages — imágenes confirmadas de una entidad
  // ═══════════════════════════════════════════════
  async getEntityImages(
    entityType: ImageEntityType,
    entityId: string,
    prisma?: PrismaDatabaseClient,
  ): Promise<ImageDto[]> {
    const db = prisma ?? this.prisma;
    const images = await db.image.findMany({
      where: { entityType, entityId, isConfirmed: true },
      orderBy: [{ imageRole: 'asc' }, { order: 'asc' }],
      select: {
        id: true,
        imageRole: true,
        url: true,
        altText: true,
        order: true,
        metadata: true,
      },
    });

    return images.map((img) => this.mapImageToDto(img));
  }

  // ═══════════════════════════════════════════════
  // attachImagesToEntity — enriquece un objeto con su campo `images`
  // ═══════════════════════════════════════════════
  async attachImagesToEntity<T extends { id: string }>(
    entity: T,
    entityType: ImageEntityType,
    prisma?: PrismaDatabaseClient,
  ): Promise<T & { images: ImageDto[] }> {
    const images = await this.getEntityImages(entityType, entity.id, prisma);
    return { ...entity, images };
  }

  // ═══════════════════════════════════════════════
  // attachImagesToMany — enriquece un array de entidades en paralelo
  // ═══════════════════════════════════════════════
  async attachImagesToMany<T extends { id: string }>(
    entities: T[],
    entityType: ImageEntityType,
  ): Promise<(T & { images: ImageDto[] })[]> {
    if (entities.length === 0) return [];

    const ids = entities.map((e) => e.id);
    const allImages = await this.prisma.image.findMany({
      where: { entityType, entityId: { in: ids }, isConfirmed: true },
      orderBy: [{ imageRole: 'asc' }, { order: 'asc' }],
      select: {
        id: true,
        entityId: true,
        imageRole: true,
        url: true,
        altText: true,
        order: true,
        metadata: true,
      },
    });

    // Agrupa por entityId usando mapImageToDto
    const imagesByEntity = new Map<string, ImageDto[]>();
    for (const img of allImages) {
      const list = imagesByEntity.get(img.entityId) ?? [];
      list.push(this.mapImageToDto(img));
      imagesByEntity.set(img.entityId, list);
    }

    return entities.map((e) => ({
      ...e,
      images: imagesByEntity.get(e.id) ?? [],
    }));
  }

  // ═══════════════════════════════════════════════
  // deleteEntityImages — elimina todas las imágenes de una entidad
  // ═══════════════════════════════════════════════
  async deleteEntityImages(
    entityType: ImageEntityType,
    entityId: string,
    prisma?: PrismaDatabaseClient,
  ): Promise<void> {
    const db = prisma ?? this.prisma;
    const images = await db.image.findMany({
      where: { entityType, entityId },
    });

    await Promise.all(
      images.map((img) => {
        const path = img.finalPath ?? img.tempPath;
        return path ? this.storage.deleteFile(path) : Promise.resolve();
      }),
    );

    await db.image.deleteMany({ where: { entityType, entityId } });
  }

  // ═══════════════════════════════════════════════
  // deleteImage — elimina una imagen por id
  // ═══════════════════════════════════════════════
  async deleteImage(
    imageId: string,
    prisma?: PrismaDatabaseClient,
  ): Promise<void> {
    const db = prisma ?? this.prisma;
    const image = await db.image.findUnique({
      where: { id: imageId },
    });

    if (!image) {
      throw new NotFoundException(`Imagen con id "${imageId}" no encontrada`);
    }

    const path = image.finalPath ?? image.tempPath;
    if (path) await this.storage.deleteFile(path);

    await db.image.delete({ where: { id: imageId } });
  }

  // ═══════════════════════════════════════════════
  // cleanOrphanTempFiles — limpia archivos temp huérfanos del disco
  // (ya no hay registros temp en BD, solo archivos sin procesar)
  // ═══════════════════════════════════════════════
  async cleanOrphanTempFiles(olderThanMinutes = 60): Promise<number> {
    const { readdir, stat } = await import('fs/promises');
    const tempDir = join(process.cwd(), 'uploads', 'temp');
    const threshold = Date.now() - olderThanMinutes * 60 * 1000;

    let cleaned = 0;
    try {
      const files = await readdir(tempDir);
      await Promise.all(
        files.map(async (file) => {
          const filePath = join(tempDir, file);
          const fileStat = await stat(filePath);
          if (fileStat.mtimeMs < threshold) {
            await this.storage.deleteFile(filePath);
            cleaned++;
          }
        }),
      );
    } catch {
      // tempDir vacío o inexistente
    }

    return cleaned;
  }

  // ── Helper privado ───────────────────────────────────────────────
  private async deleteRoleImages(
    entityType: ImageEntityType,
    entityId: string,
    imageRole: string,
    prisma?: PrismaDatabaseClient,
    options: { deletePhysical?: boolean } = {},
  ): Promise<string[]> {
    const db = prisma ?? this.prisma;
    const existing = await db.image.findMany({
      where: { entityType, entityId, imageRole },
    });

    const paths: string[] = [];

    if (options.deletePhysical !== false) {
      await Promise.all(
        existing.map(async (img) => {
          const meta = img.metadata as { variants?: Record<string, string> };

          if (meta?.variants) {
            const variantsPaths = Object.values(meta.variants).map(
              (variantUrl) => join(process.cwd(), variantUrl),
            );
            paths.push(...variantsPaths);
            await Promise.all(
              variantsPaths.map((absPath) => this.storage.deleteFile(absPath)),
            );
          } else {
            const path = img.finalPath ?? img.tempPath;
            if (path) {
              paths.push(path);
              await this.storage.deleteFile(path);
            }
          }
        }),
      );
    } else {
      for (const img of existing) {
        const meta = img.metadata as { variants?: Record<string, string> };

        if (meta?.variants) {
          paths.push(...Object.values(meta.variants));
        } else if (img.finalPath || img.tempPath) {
          paths.push(img.finalPath ?? img.tempPath!);
        }
      }
    }

    await db.image.deleteMany({
      where: { entityType, entityId, imageRole },
    });

    return paths;
  }

  private mapImageToDto(img: {
    id: string;
    imageRole: string;
    url: string | null;
    altText: string | null;
    order: number;
    metadata: Prisma.JsonValue;
  }): ImageDto {
    const meta = img.metadata as {
      variants?: ImageVariants;
      format?: string;
    } | null;

    return {
      id: img.id,
      imageRole: img.imageRole,
      url: img.url,
      altText: img.altText,
      order: img.order,
      variants: meta?.variants ?? {},
      isSvg: meta?.format === 'svg',
    };
  }
}
