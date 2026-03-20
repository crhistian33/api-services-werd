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
  variants: ImageVariants;
  isSvg: boolean;
}

// Resultado intermedio del movimiento de disco
// Se usa para pasar datos entre moveToFinal y confirmInDb
export interface MovedImageData {
  tempRecordId: string;
  entityType: ImageEntityType;
  entityId: string;
  imageRole: string;
  finalPath: string;
  finalUrl: string;
  variants: Record<string, string>;
  existingMeta: object;
  order: number;
}

type ImageRecord = Awaited<ReturnType<PrismaService['image']['findUnique']>>;

@Injectable()
export class ImageRecordService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: ImageStorageService,
  ) {}

  // ═══════════════════════════════════════════════
  // createTempRecord
  // ═══════════════════════════════════════════════

  async createTempRecord(input: CreateImageRecordInput) {
    return this.prisma.image.create({
      data: {
        entityType: input.entityType,
        entityId: input.entityId,
        imageRole: input.imageRole,
        tempPath: input.tempPath,
        url: input.url,
        metadata: (input.metadata ?? {}) as Prisma.InputJsonValue,
        isConfirmed: false,
      },
    });
  }

  // ═══════════════════════════════════════════════
  // findTempRecord
  // Paso 1 del flujo — solo lectura, sin efectos secundarios.
  // Valida que el registro exista y corresponda al entityType y role.
  // Llamar siempre antes de cualquier operación de BD o disco.
  // ═══════════════════════════════════════════════

  async findTempRecord(
    imageId: string,
    entityType: ImageEntityType,
    imageRole: string,
  ): Promise<NonNullable<ImageRecord>> {
    const record = await this.prisma.image.findUnique({
      where: { id: imageId },
    });

    if (!record) {
      throw new NotFoundException(
        `Imagen temporal con id "${imageId}" no encontrada`,
      );
    }

    if (record.entityType !== entityType || record.imageRole !== imageRole) {
      throw new BadRequestException(
        `La imagen "${imageId}" no corresponde a entityType "${entityType}" y role "${imageRole}"`,
      );
    }

    return record;
  }

  // ═══════════════════════════════════════════════
  // moveToFinal
  // Paso 2 del flujo — solo disco, sin tocar la BD.
  // Mueve el archivo de /temp/ a su ruta final y genera variantes.
  // Retorna los datos necesarios para confirmInDb.
  // Si falla, el archivo sigue en /temp/ y la BD no fue tocada.
  // ═══════════════════════════════════════════════

  async moveToFinal(
    tempRecord: NonNullable<ImageRecord>,
    entityType: ImageEntityType,
    entityId: string,
    imageRole: string,
    order = 0,
  ): Promise<MovedImageData> {
    const filename = tempRecord.url!.split('/').pop()!;
    const tempPath = join(process.cwd(), 'uploads', 'temp', filename);
    const meta = tempRecord.metadata as { mimeType?: string };
    const mimeType = meta?.mimeType ?? 'image/jpeg';

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

    return {
      tempRecordId: tempRecord.id,
      entityType,
      entityId,
      imageRole,
      finalPath,
      finalUrl,
      variants,
      existingMeta: (tempRecord.metadata as object) ?? {},
      order,
    };
  }

  // ═══════════════════════════════════════════════
  // confirmInDb
  // Paso 3 del flujo — solo BD, dentro de una transacción externa.
  // Elimina las imágenes anteriores del rol y confirma el nuevo registro.
  // Siempre se llama dentro de la $transaction del servicio del módulo,
  // junto con el update/create del registro principal.
  // ═══════════════════════════════════════════════

  async confirmInDb(
    moved: MovedImageData,
    client: PrismaDatabaseClient,
  ): Promise<void> {
    await this.deleteRoleImages(
      moved.entityType,
      moved.entityId,
      moved.imageRole,
      client,
    );

    await client.image.update({
      where: { id: moved.tempRecordId },
      data: {
        entityId: moved.entityId,
        tempPath: null,
        finalPath: moved.finalPath,
        url: moved.finalUrl,
        isConfirmed: true,
        order: moved.order,
        metadata: { ...moved.existingMeta, variants: moved.variants },
      },
    });
  }

  // ═══════════════════════════════════════════════
  // deleteFiles — elimina archivos físicos del disco
  // Usado para rollback cuando la $transaction de BD falla
  // después de que los archivos ya fueron movidos al disco
  // ═══════════════════════════════════════════════

  async deleteFiles(paths: string[]): Promise<void> {
    await Promise.all(
      paths.map((p) => this.storage.deleteFile(p).catch(() => null)),
    );
  }

  // ═══════════════════════════════════════════════
  // getEntityImages
  // ═══════════════════════════════════════════════

  async getEntityImages(
    entityType: ImageEntityType,
    entityId: string,
    client?: PrismaDatabaseClient,
  ): Promise<ImageDto[]> {
    const db = client ?? this.prisma;

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
  // attachImagesToEntity
  // ═══════════════════════════════════════════════

  async attachImagesToEntity<T extends { id: string }>(
    entity: T,
    entityType: ImageEntityType,
    client?: PrismaDatabaseClient,
  ): Promise<T & { images: ImageDto[] }> {
    const images = await this.getEntityImages(entityType, entity.id, client);
    return { ...entity, images };
  }

  // ═══════════════════════════════════════════════
  // attachImagesToMany — una sola query para todas
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
  // deleteEntityImages
  // ═══════════════════════════════════════════════

  async deleteEntityImages(
    entityType: ImageEntityType,
    entityId: string,
    client?: PrismaDatabaseClient,
  ): Promise<void> {
    const db = client ?? this.prisma;

    const images = await db.image.findMany({
      where: { entityType, entityId },
    });

    await Promise.all(
      images.map((img) => {
        const meta = img.metadata as { variants?: Record<string, string> };
        if (meta?.variants) {
          return Promise.all(
            Object.values(meta.variants).map((variantUrl) =>
              this.storage
                .deleteFile(join(process.cwd(), variantUrl))
                .catch(() => null),
            ),
          );
        }
        const path = img.finalPath ?? img.tempPath;
        return path
          ? this.storage.deleteFile(path).catch(() => null)
          : Promise.resolve();
      }),
    );

    await db.image.deleteMany({ where: { entityType, entityId } });
  }

  // ═══════════════════════════════════════════════
  // deleteImage — elimina una imagen por id
  // ═══════════════════════════════════════════════

  async deleteImage(
    imageId: string,
    client?: PrismaDatabaseClient,
  ): Promise<void> {
    const db = client ?? this.prisma;

    const image = await db.image.findUnique({ where: { id: imageId } });

    if (!image) {
      throw new NotFoundException(`Imagen con id "${imageId}" no encontrada`);
    }

    const meta = image.metadata as { variants?: Record<string, string> };

    if (meta?.variants) {
      await Promise.all(
        Object.values(meta.variants).map((variantUrl) =>
          this.storage
            .deleteFile(join(process.cwd(), variantUrl))
            .catch(() => null),
        ),
      );
    } else {
      const path = image.finalPath ?? image.tempPath;
      if (path) await this.storage.deleteFile(path).catch(() => null);
    }

    await db.image.delete({ where: { id: imageId } });
  }

  // ═══════════════════════════════════════════════
  // Métodos para el cron de limpieza
  // ═══════════════════════════════════════════════

  async cleanOrphanTempFiles(olderThanMinutes = 120): Promise<number> {
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
            await this.storage.deleteFile(filePath).catch(() => null);
            cleaned++;
          }
        }),
      );
    } catch {
      // tempDir vacío o inexistente
    }

    return cleaned;
  }

  async fixIncompleteImages(olderThanMinutes = 5): Promise<number> {
    const threshold = new Date(Date.now() - olderThanMinutes * 60 * 1000);

    const incomplete = await this.prisma.image.findMany({
      where: {
        isConfirmed: true,
        finalPath: null,
        tempPath: { not: null },
        updatedAt: { lt: threshold },
      },
    });

    let fixed = 0;

    for (const img of incomplete) {
      try {
        const filename = img.url!.split('/').pop()!;
        const tempPath = join(process.cwd(), 'uploads', 'temp', filename);
        const meta = img.metadata as { mimeType?: string };
        const mimeType = meta?.mimeType ?? 'image/jpeg';

        const {
          finalPath,
          url: finalUrl,
          variants,
        } = await this.storage.moveTempToFinal(
          tempPath,
          img.entityType,
          img.imageRole,
          mimeType,
        );

        const existingMeta = (img.metadata as object) ?? {};

        await this.prisma.image.update({
          where: { id: img.id },
          data: {
            tempPath: null,
            finalPath,
            url: finalUrl,
            metadata: { ...existingMeta, variants },
          },
        });

        fixed++;
      } catch {
        await this.prisma.image
          .delete({ where: { id: img.id } })
          .catch(() => null);
      }
    }

    return fixed;
  }

  async cleanOrphanTempRecords(olderThanMinutes = 1440): Promise<number> {
    const threshold = new Date(Date.now() - olderThanMinutes * 60 * 1000);

    const orphans = await this.prisma.image.findMany({
      where: { isConfirmed: false, createdAt: { lt: threshold } },
    });

    await Promise.all(
      orphans.map((img) => {
        const path = img.tempPath ?? img.finalPath;
        return path
          ? this.storage.deleteFile(path).catch(() => null)
          : Promise.resolve();
      }),
    );

    const result = await this.prisma.image.deleteMany({
      where: { isConfirmed: false, createdAt: { lt: threshold } },
    });

    return result.count;
  }

  // ── Helpers privados ──────────────────────────────────────────────

  private async deleteRoleImages(
    entityType: ImageEntityType,
    entityId: string,
    imageRole: string,
    client?: PrismaDatabaseClient,
  ): Promise<void> {
    const db = client ?? this.prisma;

    const existing = await db.image.findMany({
      where: { entityType, entityId, imageRole, isConfirmed: true },
    });

    await Promise.all(
      existing.map((img) => {
        const meta = img.metadata as { variants?: Record<string, string> };
        if (meta?.variants) {
          return Promise.all(
            Object.values(meta.variants).map((variantUrl) =>
              this.storage
                .deleteFile(join(process.cwd(), variantUrl))
                .catch(() => null),
            ),
          );
        }
        const path = img.finalPath ?? img.tempPath;
        return path
          ? this.storage.deleteFile(path).catch(() => null)
          : Promise.resolve();
      }),
    );

    await db.image.deleteMany({
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
