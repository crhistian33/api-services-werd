import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { join } from 'path';
import { PrismaService } from '../../../prisma/prisma.service';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { ImageStorageService } from './image-storage.service';

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
  ): Promise<void> {
    const tempRecord = await this.prisma.image.findUnique({
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
    );

    await this.deleteRoleImages(entityType, entityId, imageRole);

    // FIX 2: guardar variants en metadata
    const existingMeta = (tempRecord.metadata as object) ?? {};
    await this.prisma.image.update({
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
  }

  // ── syncTempImagesById ───────────────────────────────────────────────────────

  async syncTempImagesById(
    imageIds: string[],
    entityType: ImageEntityType,
    entityId: string,
    imageRole: string,
  ): Promise<void> {
    await this.deleteRoleImages(entityType, entityId, imageRole);

    for (let order = 0; order < imageIds.length; order++) {
      const imageId = imageIds[order];

      const tempRecord = await this.prisma.image.findUnique({
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
      );

      // FIX 2: guardar variants en metadata
      const existingMeta = (tempRecord.metadata as object) ?? {};
      await this.prisma.image.update({
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
  // getEntityImages — imágenes confirmadas de una entidad
  // ═══════════════════════════════════════════════
  async getEntityImages(
    entityType: ImageEntityType,
    entityId: string,
  ): Promise<ImageDto[]> {
    const images = await this.prisma.image.findMany({
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
  ): Promise<T & { images: ImageDto[] }> {
    const images = await this.getEntityImages(entityType, entity.id);
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
  ): Promise<void> {
    const images = await this.prisma.image.findMany({
      where: { entityType, entityId },
    });

    await Promise.all(
      images.map((img) => {
        const path = img.finalPath ?? img.tempPath;
        return path ? this.storage.deleteFile(path) : Promise.resolve();
      }),
    );

    await this.prisma.image.deleteMany({ where: { entityType, entityId } });
  }

  // ═══════════════════════════════════════════════
  // deleteImage — elimina una imagen por id
  // ═══════════════════════════════════════════════
  async deleteImage(imageId: string): Promise<void> {
    const image = await this.prisma.image.findUnique({
      where: { id: imageId },
    });

    if (!image) {
      throw new NotFoundException(`Imagen con id "${imageId}" no encontrada`);
    }

    const path = image.finalPath ?? image.tempPath;
    if (path) await this.storage.deleteFile(path);

    await this.prisma.image.delete({ where: { id: imageId } });
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
  ): Promise<void> {
    const existing = await this.prisma.image.findMany({
      where: { entityType, entityId, imageRole },
    });

    await Promise.all(
      existing.map(async (img) => {
        // FIX 3: eliminar todas las variantes del disco, no solo finalPath
        const meta = img.metadata as { variants?: Record<string, string> };

        if (meta?.variants) {
          // Elimina cada variante física (original, large, medium, thumb, cart...)
          await Promise.all(
            Object.values(meta.variants).map((variantUrl) => {
              // variantUrl es relativa: /uploads/images/product/thumb/uuid.webp
              // la convertimos a ruta absoluta
              const absPath = join(process.cwd(), variantUrl);
              return this.storage.deleteFile(absPath);
            }),
          );
        } else {
          // Imagen sin variantes (registros viejos o SVG con solo original)
          const path = img.finalPath ?? img.tempPath;
          if (path) await this.storage.deleteFile(path);
        }
      }),
    );

    await this.prisma.image.deleteMany({
      where: { entityType, entityId, imageRole },
    });
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
