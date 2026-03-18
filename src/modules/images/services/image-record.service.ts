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

export interface ImageDto {
  id: string;
  imageRole: string;
  url: string | null;
  altText: string | null;
  order: number;
  metadata: Prisma.JsonValue;
}

@Injectable()
export class ImageRecordService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: ImageStorageService,
  ) {}

  // ═══════════════════════════════════════════════
  // syncTempImage — registra, mueve y confirma en un solo paso.
  // Es el único método que los services de dominio deben llamar.
  // ═══════════════════════════════════════════════
  // async syncTempImage(
  //   entityType: ImageEntityType,
  //   entityId: string,
  //   imageRole: string,
  //   tempUrl: string,
  // ): Promise<void> {
  //   const filename = tempUrl.split('/').pop()!;
  //   const tempPath = join(process.cwd(), 'uploads', 'temp', filename);

  //   // Mueve el archivo a su carpeta final antes de escribir en BD
  //   const { finalPath, url: finalUrl } = await this.storage.moveTempToFinal(
  //     tempPath,
  //     entityType,
  //     imageRole,
  //   );

  //   // Elimina registros anteriores del mismo rol (disco + BD)
  //   await this.deleteRoleImages(entityType, entityId, imageRole);

  //   // Actualizo el registro de imagen temp a confirmado con la info final (path, url, etc)
  //   await this.prisma.image.update({
  //     where: {
  //       entityType_entityId_imageRole: {
  //         entityType,
  //         entityId: 'pending',
  //         imageRole,
  //       },
  //     },
  //     data: {
  //       tempPath: null,
  //       entityId,
  //       finalPath,
  //       url: finalUrl,
  //       isConfirmed: true,
  //     },
  //   });
  //   // await this.prisma.image.create({
  //   //   data: {
  //   //     entityType,
  //   //     entityId,
  //   //     imageRole,
  //   //     finalPath,
  //   //     url: finalUrl,
  //   //     metadata: {} as Prisma.InputJsonValue,
  //   //     isConfirmed: true,
  //   //   },
  //   // });
  // }

  async syncTempImageById(
    imageId: string,
    entityType: ImageEntityType,
    entityId: string,
    imageRole: string,
  ): Promise<void> {
    // 1. Buscar el registro temporal por su ID
    const tempRecord = await this.prisma.image.findUnique({
      where: { id: imageId },
    });

    if (!tempRecord) {
      throw new NotFoundException(
        `Imagen temporal con id "${imageId}" no encontrada`,
      );
    }

    // 2. Validar que el registro pertenece al entityType y rol esperados
    if (
      tempRecord.entityType !== entityType ||
      tempRecord.imageRole !== imageRole
    ) {
      throw new BadRequestException(
        `La imagen "${imageId}" no corresponde a entityType "${entityType}" y role "${imageRole}"`,
      );
    }

    // 3. Mover el archivo físico de /temp/ a su carpeta final
    const filename = tempRecord.url!.split('/').pop()!;
    const tempPath = join(process.cwd(), 'uploads', 'temp', filename);

    const { finalPath, url: finalUrl } = await this.storage.moveTempToFinal(
      tempPath,
      entityType,
      imageRole,
    );

    // 4. Eliminar registros confirmados anteriores del mismo rol para esta entidad
    //    (no afecta a otros 'pending' de otros usuarios)
    await this.deleteRoleImages(entityType, entityId, imageRole);

    // 5. Actualizar SOLO este registro por su ID
    await this.prisma.image.update({
      where: { id: imageId },
      data: {
        entityId,
        tempPath: null,
        finalPath,
        url: finalUrl,
        isConfirmed: true,
      },
    });
  }

  /**
   * Variante para múltiples imágenes del mismo rol (gallery, slides, etc.)
   * Confirma cada imageId y les asigna un `order` según su posición en el array.
   *
   * Usar para: PRODUCT (gallery), HERO_SLIDE (desktop/mobile), etc.
   */
  async syncTempImagesById(
    imageIds: string[],
    entityType: ImageEntityType,
    entityId: string,
    imageRole: string,
  ): Promise<void> {
    // Eliminar imágenes confirmadas anteriores de este rol para la entidad
    await this.deleteRoleImages(entityType, entityId, imageRole);

    // Confirmar cada imagen en el orden recibido
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

      const { finalPath, url: finalUrl } = await this.storage.moveTempToFinal(
        tempPath,
        entityType,
        imageRole,
      );

      // NOTA: El unique @@unique([entityType, entityId, imageRole]) solo permite
      // UNA imagen por rol. Para galleries con múltiples imágenes del mismo rol,
      // debes eliminar ese unique constraint en el schema y usar el campo `order`.
      // Ver nota al final de este documento.
      await this.prisma.image.update({
        where: { id: imageId },
        data: {
          entityId,
          tempPath: null,
          finalPath,
          url: finalUrl,
          isConfirmed: true,
          order,
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
    return images;
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

    // Una sola query para todas las entidades, no N queries
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

    // Agrupa por entityId
    const imagesByEntity = new Map<string, ImageDto[]>();
    for (const img of allImages) {
      const list = imagesByEntity.get(img.entityId) ?? [];
      list.push({
        id: img.id,
        imageRole: img.imageRole,
        url: img.url,
        altText: img.altText,
        order: img.order,
        metadata: img.metadata,
      });
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
      existing.map((img) => {
        const path = img.finalPath ?? img.tempPath;
        return path ? this.storage.deleteFile(path) : Promise.resolve();
      }),
    );

    await this.prisma.image.deleteMany({
      where: { entityType, entityId, imageRole },
    });
  }
}
