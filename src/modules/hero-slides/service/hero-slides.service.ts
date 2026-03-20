import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
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
  ReorderHeroSlidesDto,
} from '../dto';

type HeroSlideEntity = Prisma.HeroSlideGetPayload<{
  include: {
    linkProduct: { select: { id: true; name: true; slug: true } };
    linkCategory: { select: { id: true; name: true; slug: true } };
  };
}>;

const ENTITY_TYPE = ImageEntityType.HERO_SLIDE;
const ROLE_DESKTOP = 'desktop';
const ROLE_MOBILE = 'mobile';

const SLIDE_INCLUDE = {
  linkProduct: { select: { id: true, name: true, slug: true } },
  linkCategory: { select: { id: true, name: true, slug: true } },
} as const;

@Injectable()
export class HeroSlidesService extends BaseService<
  HeroSlideEntity,
  CreateHeroSlideDto,
  UpdateHeroSlideDto,
  Prisma.HeroSlideWhereInput,
  Prisma.HeroSlideOrderByWithRelationInput
> {
  protected override useSoftDelete = false;

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
    const { isActive, page, limit } = query;

    const result = await this.findAll({
      where: { ...(isActive !== undefined && { isActive }) },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      include: SLIDE_INCLUDE,
      pagination: { page, limit },
    });

    return {
      ...result,
      data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
    };
  }

  // ═══════════════════════════════════════════════
  // findAllPublic
  // ═══════════════════════════════════════════════

  async findAllPublic() {
    const now = new Date();

    const slides = await this.prisma.heroSlide.findMany({
      where: {
        isActive: true,
        OR: [{ startsAt: null }, { startsAt: { lte: now } }],
        AND: [{ OR: [{ endsAt: null }, { endsAt: { gte: now } }] }],
      },
      orderBy: { sortOrder: 'asc' },
      include: SLIDE_INCLUDE,
    });

    return this.imageRecord.attachImagesToMany(slides, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // findHeroSlideById
  // ═══════════════════════════════════════════════

  async findHeroSlideById(id: string) {
    const slide = await this.findOne(id, SLIDE_INCLUDE);
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

  async createHeroSlide(dto: CreateHeroSlideDto) {
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
        const created = await tx.heroSlide.create({
          data: {
            ...slideData,
            startsAt:
              slideData.startsAt !== undefined
                ? new Date(slideData.startsAt)
                : null,
            endsAt:
              slideData.endsAt !== undefined
                ? new Date(slideData.endsAt)
                : null,
          },
        });

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

  async updateHeroSlide(id: string, dto: UpdateHeroSlideDto) {
    const { tempDesktopImageId, tempMobileImageId, ...slideData } = dto;

    this.validateLinkData(slideData);
    await this.assertExists(id);

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
        await tx.heroSlide.update({
          where: { id },
          data: {
            ...slideData,
            ...(slideData.startsAt !== undefined && {
              startsAt: slideData.startsAt
                ? new Date(slideData.startsAt)
                : null,
            }),
            ...(slideData.endsAt !== undefined && {
              endsAt: slideData.endsAt ? new Date(slideData.endsAt) : null,
            }),
          },
        });

        await Promise.all(
          movedList.map((moved) => this.imageRecord.confirmInDb(moved, tx)),
        );
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
    await this.assertExists(id);
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
    return this.prisma.heroSlide.delete({ where: { id } });
  }

  // ═══════════════════════════════════════════════
  // removeManyHeroSlides
  // ═══════════════════════════════════════════════

  async removeManyHeroSlides(ids: string[]) {
    await Promise.all(
      ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)),
    );
    return this.prisma.heroSlide.deleteMany({ where: { id: { in: ids } } });
  }

  // ═══════════════════════════════════════════════
  // reorder
  // ═══════════════════════════════════════════════

  async reorder(dto: ReorderHeroSlidesDto) {
    await this.prisma.$transaction(
      dto.ids.map((id, index) =>
        this.prisma.heroSlide.update({
          where: { id },
          data: { sortOrder: index },
        }),
      ),
    );

    return this.findAllPublic();
  }

  // ═══════════════════════════════════════════════
  // toggleActive
  // ═══════════════════════════════════════════════

  async toggleActive(id: string) {
    const slide = await this.prisma.heroSlide.findUnique({
      where: { id },
      select: { id: true, isActive: true },
    });

    if (!slide) {
      throw new NotFoundException(`HeroSlide con id "${id}" no encontrado`);
    }

    return this.prisma.heroSlide.update({
      where: { id },
      data: { isActive: !slide.isActive },
    });
  }

  // ── Helpers privados ──────────────────────────────────────────────

  private validateLinkData(
    data: Partial<
      Omit<CreateHeroSlideDto, 'tempDesktopImageId' | 'tempMobileImageId'>
    >,
  ): void {
    if (data.linkType === LinkType.product && !data.linkProductId) {
      throw new BadRequestException(
        'linkProductId es requerido cuando linkType es "product"',
      );
    }
    if (data.linkType === LinkType.category && !data.linkCategoryId) {
      throw new BadRequestException(
        'linkCategoryId es requerido cuando linkType es "category"',
      );
    }
    if (data.linkType === LinkType.external && !data.linkUrl) {
      throw new BadRequestException(
        'linkUrl es requerido cuando linkType es "external"',
      );
    }
  }
}
