import { Injectable } from '@nestjs/common';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { CreateHeroSlideDto } from '../dto/create-hero-slide.dto';
import { UpdateHeroSlideDto } from '../dto/update-hero-slide.dto';
import { QueryHeroSlideDto } from '../dto/query-hero-slide.dto';

type HeroSlideEntity = Prisma.HeroSlideGetPayload<{
  include: {
    linkProduct: { select: { id: true; name: true } };
    linkCategory: { select: { id: true; name: true } };
  };
}>;

const ENTITY_TYPE = ImageEntityType.HERO_SLIDE;
const ROLE_DESKTOP = 'desktop';
const ROLE_MOBILE = 'mobile';

@Injectable()
export class HeroSlidesService extends BaseService<
  HeroSlideEntity,
  CreateHeroSlideDto,
  UpdateHeroSlideDto,
  Prisma.HeroSlideWhereInput,
  Prisma.HeroSlideOrderByWithRelationInput
> {
  constructor(
    prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
  ) {
    super(prisma, 'heroSlide');
  }

  async findAllHeroSlides(query: QueryHeroSlideDto) {
    const { isActive, linkType, sortOrder, page, limit } = query;

    const where: Prisma.HeroSlideWhereInput = {
      ...(isActive !== undefined && { isActive }),
      ...(linkType !== undefined && { linkType }),
      ...(sortOrder !== undefined && { sortOrder }),
    };

    const result = await this.findAll({
      where,
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      include: {
        linkProduct: { select: { id: true, name: true } },
        linkCategory: { select: { id: true, name: true } },
      },
      pagination: { page, limit },
    });

    const data = await this.imageRecord.attachImagesToMany(
      result.data,
      ENTITY_TYPE,
    );

    return { ...result, data };
  }

  async findHeroSlideById(id: string) {
    const slide = await this.findOne(id, {
      linkProduct: { select: { id: true, name: true } },
      linkCategory: { select: { id: true, name: true } },
    });

    return this.imageRecord.attachImagesToEntity(slide, ENTITY_TYPE);
  }

  async createHeroSlide(dto: CreateHeroSlideDto) {
    const { tempDesktopImageId, tempMobileImageId, ...slideData } = dto;

    const slide = await this.create(slideData as CreateHeroSlideDto);

    if (tempDesktopImageId != null) {
      await this.imageRecord.syncTempImageById(
        tempDesktopImageId,
        ENTITY_TYPE,
        slide.id,
        ROLE_DESKTOP,
      );
    }

    if (tempMobileImageId != null) {
      await this.imageRecord.syncTempImageById(
        tempMobileImageId,
        ENTITY_TYPE,
        slide.id,
        ROLE_MOBILE,
      );
    }

    return this.findHeroSlideById(slide.id);
  }

  async updateHeroSlide(id: string, dto: UpdateHeroSlideDto) {
    const { tempDesktopImageId, tempMobileImageId, ...slideData } = dto;

    await this.update(id, slideData as UpdateHeroSlideDto);

    if (tempDesktopImageId !== undefined) {
      await this.imageRecord.syncTempImageById(
        tempDesktopImageId,
        ENTITY_TYPE,
        id,
        ROLE_DESKTOP,
      );
    }

    if (tempMobileImageId !== undefined) {
      await this.imageRecord.syncTempImageById(
        tempMobileImageId,
        ENTITY_TYPE,
        id,
        ROLE_MOBILE,
      );
    }

    return this.findHeroSlideById(id);
  }

  async removeHeroSlide(id: string) {
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
    return this.remove(id);
  }

  async removeManyHeroSlides(ids: string[]) {
    await Promise.all(
      ids.map((heroSlideId) =>
        this.imageRecord.deleteEntityImages(ENTITY_TYPE, heroSlideId),
      ),
    );

    return this.removeMany(ids);
  }
}
