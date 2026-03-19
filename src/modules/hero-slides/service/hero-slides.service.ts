import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ImageEntityType, LinkType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import { ImageRecordService } from '../../images/services/image-record.service';
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

// Relaciones incluidas en todas las queries
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
  // HeroSlide usa borrado físico — no necesita soft delete
  protected override useSoftDelete = false;

  constructor(
    prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
  ) {
    super(prisma, 'heroSlide');
  }

  // ═══════════════════════════════════════════════
  // findAllHeroSlides — listado para el admin
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
  // findAllPublic — solo slides activos en período
  // actual para Astro (sin paginación — son pocos)
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
  // ═══════════════════════════════════════════════
  async createHeroSlide(dto: CreateHeroSlideDto) {
    const { tempDesktopImageId, tempMobileImageId, ...slideData } = dto;

    this.validateLinkData(slideData);

    const slide = await this.prisma.heroSlide.create({
      data: {
        ...slideData,
        startsAt:
          slideData.startsAt !== undefined
            ? new Date(slideData.startsAt)
            : null,
        endsAt:
          slideData.endsAt !== undefined ? new Date(slideData.endsAt) : null,
      },
    });

    await this.syncImages(slide.id, tempDesktopImageId, tempMobileImageId);

    return this.findHeroSlideById(slide.id);
  }

  // ═══════════════════════════════════════════════
  // updateHeroSlide
  // ═══════════════════════════════════════════════
  async updateHeroSlide(id: string, dto: UpdateHeroSlideDto) {
    const { tempDesktopImageId, tempMobileImageId, ...slideData } = dto;

    this.validateLinkData(slideData);

    await this.assertExists(id);

    await this.prisma.heroSlide.update({
      where: { id },
      data: {
        ...slideData,
        ...(slideData.startsAt !== undefined && {
          startsAt: slideData.startsAt ? new Date(slideData.startsAt) : null,
        }),
        ...(slideData.endsAt !== undefined && {
          endsAt: slideData.endsAt ? new Date(slideData.endsAt) : null,
        }),
      },
    });

    await this.syncImages(id, tempDesktopImageId, tempMobileImageId);

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
    return this.prisma.heroSlide.deleteMany({
      where: { id: { in: ids } },
    });
  }

  // ═══════════════════════════════════════════════
  // reorder — recibe IDs en el nuevo orden
  // y actualiza sortOrder de cada uno
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
  // toggleActive — activa o desactiva un slide
  // sin necesidad de abrir el formulario completo
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

  // ── Helpers privados ─────────────────────────────────────────────────────

  // Sincroniza imágenes desktop y mobile en paralelo
  private async syncImages(
    slideId: string,
    tempDesktopImageId?: string,
    tempMobileImageId?: string,
  ): Promise<void> {
    await Promise.all([
      tempDesktopImageId !== undefined
        ? this.imageRecord.syncTempImageById(
            tempDesktopImageId,
            ENTITY_TYPE,
            slideId,
            ROLE_DESKTOP,
          )
        : Promise.resolve(),

      tempMobileImageId !== undefined
        ? this.imageRecord.syncTempImageById(
            tempMobileImageId,
            ENTITY_TYPE,
            slideId,
            ROLE_MOBILE,
          )
        : Promise.resolve(),
    ]);
  }

  // Valida que el linkType sea consistente con los campos enviados
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
