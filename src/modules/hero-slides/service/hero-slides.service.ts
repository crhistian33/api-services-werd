import { Injectable, BadRequestException } from '@nestjs/common';
import { ImageEntityType, LinkType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import {
  ImageRecordService,
  MovedImageData,
} from '../../images/services/image-record.service';
import {
  CreateHeroSlideDto,
  UpdateHeroSlideDto,
  QueryHeroSlideDto,
} from '../dto';
import { BulkReorderHeroSlidesDto } from '../dto/bulk-hero-slide.dto';

type HeroSlideEntity = Prisma.HeroSlideGetPayload<{
  include: {
    linkProduct: { select: { id: true; name: true; slug: true } };
    linkCategory: { select: { id: true; name: true; slug: true } };
    createdBy: { select: { id: true; name: true; email: true } };
    updatedBy: { select: { id: true; name: true; email: true } };
    deletedBy: { select: { id: true; name: true; email: true } };
  };
}>;

const ENTITY_TYPE = ImageEntityType.HERO_SLIDE;
const ROLE_DESKTOP = 'desktop';
const ROLE_MOBILE = 'mobile';

const LIST_INCLUDE = {
  linkProduct: { select: { id: true, name: true, slug: true } },
  linkCategory: { select: { id: true, name: true, slug: true } },
  createdBy: { select: { id: true, name: true, email: true } },
  updatedBy: { select: { id: true, name: true, email: true } },
} as const;

const TRASH_INCLUDE = {
  linkProduct: { select: { id: true, name: true, slug: true } },
  linkCategory: { select: { id: true, name: true, slug: true } },
  deletedBy: { select: { id: true, name: true, email: true } },
} as const;

@Injectable()
export class HeroSlidesService extends BaseService<
  HeroSlideEntity,
  CreateHeroSlideDto,
  UpdateHeroSlideDto,
  Prisma.HeroSlideWhereInput,
  Prisma.HeroSlideOrderByWithRelationInput
> {
  protected override useSoftDelete = true;
  protected override nameField = 'title';

  constructor(
    prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
  ) {
    super(prisma, 'heroSlide');
  }

  // ═══════════════════════════════════════════════
  // findAllHeroSlides
  // ═══════════════════════════════════════════════

  async findAllHeroSlides(query: QueryHeroSlideDto) {
    const { isActive, linkType, search, page, limit, onlyTrash } = query;
    const result = await this.findAll({
      where: {
        ...(isActive !== undefined && { isActive }),
        ...(linkType !== undefined && { linkType }),
        ...(search !== undefined && {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { subtitle: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      include: onlyTrash ? TRASH_INCLUDE : LIST_INCLUDE,
      pagination: { page, limit },
      onlyTrash,
    });

    return {
      ...result,
      data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
    };
  }

  // ═══════════════════════════════════════════════
  // findAllPublic
  // ═══════════════════════════════════════════════

  async findAllPublic(query: QueryHeroSlideDto) {
    const { search, page, limit } = query;
    const now = new Date();

    const result = await this.findAll({
      where: {
        isActive: true,
        OR: [{ startsAt: null }, { startsAt: { lte: now } }],
        AND: [{ OR: [{ endsAt: null }, { endsAt: { gte: now } }] }],
        deletedAt: null,
        ...(search !== undefined && {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { subtitle: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      include: LIST_INCLUDE,
      pagination: { page, limit },
    });

    return {
      ...result,
      data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
    };
  }

  // ═══════════════════════════════════════════════
  // findHeroSlideById
  // ═══════════════════════════════════════════════

  async findHeroSlideById(id: string) {
    const slide = await this.findOne(id, LIST_INCLUDE);
    return this.imageRecord.attachImagesToEntity(slide, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // createHeroSlide
  //
  // Paso 1 — findTempRecord x 2: valida desktop y mobile (solo lectura)
  //          Si cualquiera falla: error, nada tocado
  // Paso 2 — moveToFinal x 2: mueve archivos al disco
  //          Si cualquiera falla: deleteFiles revierte los ya movidos,
  //          BD intacta
  // Paso 3 — $transaction: crea slide + confirmInDb x 2, todo atómico
  //          Si falla: deleteFiles revierte el disco, BD sin cambios
  // ═══════════════════════════════════════════════

  async createHeroSlide(dto: CreateHeroSlideDto, adminId: string) {
    const { tempDesktopImageId, tempMobileImageId, ...slideData } = dto;

    this.validateLinkData(slideData);

    // Paso 1: valida todas las imágenes antes de tocar la BD
    const [desktopTempRecord, mobileTempRecord] = await Promise.all([
      tempDesktopImageId !== undefined
        ? this.imageRecord.findTempRecord(
            tempDesktopImageId,
            ENTITY_TYPE,
            ROLE_DESKTOP,
          )
        : Promise.resolve(null),
      tempMobileImageId !== undefined
        ? this.imageRecord.findTempRecord(
            tempMobileImageId,
            ENTITY_TYPE,
            ROLE_MOBILE,
          )
        : Promise.resolve(null),
    ]);

    // Paso 2: mueve archivos al disco (sin tocar BD)
    const movedList: MovedImageData[] = [];

    try {
      if (desktopTempRecord !== null) {
        const moved = await this.imageRecord.moveToFinal(
          desktopTempRecord,
          ENTITY_TYPE,
          '', // entityId aún no existe
          ROLE_DESKTOP,
        );
        movedList.push(moved);
      }

      if (mobileTempRecord !== null) {
        const moved = await this.imageRecord.moveToFinal(
          mobileTempRecord,
          ENTITY_TYPE,
          '', // entityId aún no existe
          ROLE_MOBILE,
        );
        movedList.push(moved);
      }
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }

    // Paso 3: BD atómica — crea slide + confirma imágenes
    try {
      const slide = await this.prisma.$transaction(async (tx) => {
        //const dataToCreate: CreateHeroSlideDto = { ...slideData };

        // if (dataToCreate.startsAt !== undefined) {
        //   dataToCreate.startsAt = new Date(dataToCreate.startsAt);
        // }
        // if (dataToCreate.endsAt !== undefined) {
        //   dataToCreate.endsAt = new Date(dataToCreate.endsAt);
        // }

        const created = await this.create(
          {
            title: slideData.title,
            subtitle: slideData.subtitle,
            linkType: slideData.linkType ?? 'none',
            linkUrl:
              slideData.linkType === 'external' ? slideData.linkUrl : null,
            linkText: slideData.linkType !== 'none' ? slideData.linkText : null,
            sortOrder: slideData.sortOrder ?? 0,
            isActive: slideData.isActive ?? true,
            startsAt: slideData.startsAt ? new Date(slideData.startsAt) : null,
            endsAt: slideData.endsAt ? new Date(slideData.endsAt) : null,
            createdBy: { connect: { id: adminId } },
            updatedBy: { connect: { id: adminId } },
            // Relaciones con connect
            ...(slideData.linkType === 'product' &&
              slideData.linkProductId && {
                linkProduct: { connect: { id: slideData.linkProductId } },
              }),
            ...(slideData.linkType === 'category' &&
              slideData.linkCategoryId && {
                linkCategory: { connect: { id: slideData.linkCategoryId } },
              }),
          } as CreateHeroSlideDto,
          undefined,
          tx,
        );

        await Promise.all(
          movedList.map((moved) =>
            this.imageRecord.confirmInDb(
              { ...moved, entityId: created.id },
              tx,
            ),
          ),
        );

        return created;
      });

      return this.findHeroSlideById(slide.id);
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }
  }

  // ═══════════════════════════════════════════════
  // updateHeroSlide
  //
  // Paso 1 — findTempRecord x 2: valida las imágenes (solo lectura)
  //          Si cualquiera falla: error, BD intacta, front mantiene el form
  // Paso 2 — moveToFinal x 2: mueve archivos al disco
  //          Si cualquiera falla: deleteFiles revierte los ya movidos,
  //          BD intacta
  // Paso 3 — $transaction: update slide + confirmInDb x 2, todo atómico
  //          Si falla: deleteFiles revierte el disco, BD sin cambios
  // ═══════════════════════════════════════════════

  async updateHeroSlide(id: string, dto: UpdateHeroSlideDto, adminId: string) {
    const {
      tempDesktopImageId,
      tempMobileImageId,
      removedDesktopImageId,
      removedMobileImageId,
      ...slideData
    } = dto;

    this.validateLinkData(slideData);
    await this.assertExists(id);

    // Paso 1: valida imágenes nuevas antes de tocar la BD
    const [desktopTempRecord, mobileTempRecord] = await Promise.all([
      tempDesktopImageId !== undefined
        ? this.imageRecord.findTempRecord(
            tempDesktopImageId,
            ENTITY_TYPE,
            ROLE_DESKTOP,
          )
        : Promise.resolve(null),
      tempMobileImageId !== undefined
        ? this.imageRecord.findTempRecord(
            tempMobileImageId,
            ENTITY_TYPE,
            ROLE_MOBILE,
          )
        : Promise.resolve(null),
    ]);

    // Paso 2: mueve archivos al disco (sin tocar BD)
    const movedList: MovedImageData[] = [];

    try {
      if (desktopTempRecord !== null) {
        const moved = await this.imageRecord.moveToFinal(
          desktopTempRecord,
          ENTITY_TYPE,
          id,
          ROLE_DESKTOP,
        );
        movedList.push(moved);
      }

      if (mobileTempRecord !== null) {
        const moved = await this.imageRecord.moveToFinal(
          mobileTempRecord,
          ENTITY_TYPE,
          id,
          ROLE_MOBILE,
        );
        movedList.push(moved);
      }
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }

    // Paso 3: BD atómica — update slide + confirma imágenes
    try {
      await this.prisma.$transaction(async (tx) => {
        await this.update(
          id,
          {
            title: slideData.title,
            subtitle: slideData.subtitle,
            linkType: slideData.linkType ?? 'none',
            linkUrl:
              slideData.linkType === 'external' ? slideData.linkUrl : null,
            linkText: slideData.linkType !== 'none' ? slideData.linkText : null,
            sortOrder: slideData.sortOrder,
            isActive: slideData.isActive,
            startsAt: slideData.startsAt ? new Date(slideData.startsAt) : null,
            endsAt: slideData.endsAt ? new Date(slideData.endsAt) : null,
            updatedBy: { connect: { id: adminId } },
            linkProduct:
              slideData.linkType === 'product' && slideData.linkProductId
                ? { connect: { id: slideData.linkProductId } }
                : { disconnect: true },
            linkCategory:
              slideData.linkType === 'category' && slideData.linkCategoryId
                ? { connect: { id: slideData.linkCategoryId } }
                : { disconnect: true },
          } as UpdateHeroSlideDto,
          undefined,
          tx,
        );

        await Promise.all([
          !desktopTempRecord && removedDesktopImageId
            ? this.imageRecord.deleteImageById(removedDesktopImageId, tx)
            : Promise.resolve(),

          !mobileTempRecord && removedMobileImageId
            ? this.imageRecord.deleteImageById(removedMobileImageId, tx)
            : Promise.resolve(),

          ...movedList.map((moved) => this.imageRecord.confirmInDb(moved, tx)),
        ]);
      });
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }

    return this.findHeroSlideById(id);
  }

  // ═══════════════════════════════════════════════
  // removeHeroSlide
  // ═══════════════════════════════════════════════

  async removeHeroSlide(id: string) {
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
    return this.remove(id);
  }

  // ═══════════════════════════════════════════════
  // removeManyHeroSlides
  // ═══════════════════════════════════════════════

  async removeManyHeroSlides(ids: string[]) {
    await Promise.all(
      ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)),
    );
    return this.removeMany(ids);
  }

  // ═══════════════════════════════════════════════
  // reorder
  // ═══════════════════════════════════════════════

  async reorder(dto: BulkReorderHeroSlidesDto, adminId: string) {
    await this.prisma.$transaction(
      dto.ids.map((id, index) =>
        this.prisma.heroSlide.update({
          where: { id },
          data: { sortOrder: index, updatedById: adminId },
        }),
      ),
    );

    // Retorna solo los slides reordenados sin paginación
    const slides = await this.prisma.heroSlide.findMany({
      where: { id: { in: dto.ids }, deletedAt: null },
      include: LIST_INCLUDE,
      orderBy: { sortOrder: 'asc' },
    });

    return this.imageRecord.attachImagesToMany(slides, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // softDeleteProduct
  // ═══════════════════════════════════════════════

  async softDeleteHeroSlide(id: string, adminId: string) {
    return this.softDelete(id, adminId);
  }

  // ═══════════════════════════════════════════════
  // softDeleteManyProducts
  // ═══════════════════════════════════════════════

  async softDeleteManyHeroSlides(ids: string[], adminId: string) {
    return this.softDeleteMany(ids, adminId);
  }

  // ═══════════════════════════════════════════════
  // restoreProduct
  // ═══════════════════════════════════════════════

  async restoreHeroSlide(id: string, adminId: string) {
    await this.assertNotDeleted(id);
    return this.restore(id, adminId);
  }

  // ═══════════════════════════════════════════════
  // restoreManyProducts
  // ═══════════════════════════════════════════════

  async restoreManyHeroSlides(ids: string[], adminId: string) {
    return this.restoreMany(ids, adminId);
  }

  // ═══════════════════════════════════════════════
  // toggleActive
  // ═══════════════════════════════════════════════

  // async toggleActive(id: string) {
  //   const slide = await this.prisma.heroSlide.findUnique({
  //     where: { id },
  //     select: { id: true, isActive: true },
  //   });

  //   if (!slide) {
  //     throw new NotFoundException(`HeroSlide con id "${id}" no encontrado`);
  //   }

  //   return this.prisma.heroSlide.update({
  //     where: { id },
  //     data: { isActive: !slide.isActive },
  //   });
  // }

  // ── Helpers privados ──────────────────────────────────────────────

  private validateLinkData(
    data: Partial<
      Omit<CreateHeroSlideDto, 'tempDesktopImageId' | 'tempMobileImageId'>
    >,
  ): void {
    if (data.linkType === LinkType.product && !data.linkProductId) {
      throw new BadRequestException(
        'El producto es requerido cuando el tipo de enlace es "producto"',
      );
    }
    if (data.linkType === LinkType.category && !data.linkCategoryId) {
      throw new BadRequestException(
        'La categoría es requerida cuando el tipo de enlace es "categoría"',
      );
    }
    if (data.linkType === LinkType.external && !data.linkUrl) {
      throw new BadRequestException(
        'La URL externa es requerida cuando el tipo de enlace es "externo"',
      );
    }
  }
}
