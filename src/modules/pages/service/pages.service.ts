// pages/pages.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PageStatus, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { CreatePageDto, UpdatePageDto } from '../dto';

type PageEntity = Prisma.PageGetPayload<object>;

// Select para listados — omite content para no cargar HTML pesado
const LIST_SELECT = {
  id: true,
  title: true,
  slug: true,
  status: true,
  metaTitle: true,
  metaDescription: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
} as const;

@Injectable()
export class PagesService extends SluggableService<
  PageEntity,
  CreatePageDto,
  UpdatePageDto,
  Prisma.PageWhereInput,
  Prisma.PageOrderByWithRelationInput
> {
  protected override useSoftDelete = true;

  constructor(prisma: PrismaService) {
    super(prisma, 'page');
  }

  // ═══════════════════════════════════════════════
  // findAllPages — admin: todos los estados, sin content
  // ═══════════════════════════════════════════════

  async findAllPages() {
    return this.findAll({
      select: LIST_SELECT,
      orderBy: { title: 'asc' },
    });
  }

  // ═══════════════════════════════════════════════
  // findAllPagesPublic — público: solo published y no eliminadas
  // softDeleteFilter añade deletedAt: null automáticamente
  // ═══════════════════════════════════════════════

  async findAllPagesPublic() {
    return this.findAll({
      where: { status: PageStatus.published },
      select: LIST_SELECT,
      orderBy: { title: 'asc' },
    });
  }

  // ═══════════════════════════════════════════════
  // findPageById — detalle completo con content (admin)
  // ═══════════════════════════════════════════════

  async findPageById(id: string) {
    return this.findOne(id);
  }

  // ═══════════════════════════════════════════════
  // findPageBySlug — admin: cualquier estado no eliminado
  // ═══════════════════════════════════════════════

  async findPageBySlug(slug: string) {
    return this.findBySlug(slug);
  }

  // ═══════════════════════════════════════════════
  // findPageBySlugPublic — público: solo published y no eliminada
  // ═══════════════════════════════════════════════

  async findPageBySlugPublic(slug: string) {
    const record = (await this.getModel().findUnique({
      where: { slug },
    })) as PageEntity | null;

    if (
      !record ||
      record.status !== PageStatus.published ||
      record.deletedAt !== null
    ) {
      throw new NotFoundException(`Página con slug "${slug}" no encontrada`);
    }

    return record;
  }

  // ═══════════════════════════════════════════════
  // createPage — slug generado desde title
  // ═══════════════════════════════════════════════

  async createPage(dto: CreatePageDto) {
    return this.createWithSlug({
      ...dto,
      status: dto.status ?? PageStatus.draft,
    } as CreatePageDto);
  }

  // ═══════════════════════════════════════════════
  // updatePage — si viene title regenera el slug
  // ═══════════════════════════════════════════════

  async updatePage(id: string, dto: UpdatePageDto) {
    return this.updateWithSlug(id, dto);
  }

  // ═══════════════════════════════════════════════
  // softDeletePage
  // ═══════════════════════════════════════════════

  async softDeletePage(id: string) {
    return this.softDelete(id);
  }

  // ═══════════════════════════════════════════════
  // softDeleteManyPages
  // ═══════════════════════════════════════════════

  async softDeleteManyPages(ids: string[]) {
    return this.softDeleteMany(ids);
  }

  // ═══════════════════════════════════════════════
  // restorePage
  // ═══════════════════════════════════════════════

  async restorePage(id: string) {
    await this.assertNotDeleted(id);
    return this.restore(id);
  }

  // ═══════════════════════════════════════════════
  // restoreManyPages
  // ═══════════════════════════════════════════════

  async restoreManyPages(ids: string[]) {
    return this.restoreMany(ids);
  }

  // ═══════════════════════════════════════════════
  // removePage — eliminación permanente (admin con privilegios)
  // ═══════════════════════════════════════════════

  async removePage(id: string) {
    return this.remove(id);
  }

  // ═══════════════════════════════════════════════
  // removeManyPages
  // ═══════════════════════════════════════════════

  async removeManyPages(ids: string[]) {
    return this.removeMany(ids);
  }

  // ═══════════════════════════════════════════════
  // publishPage — draft → published
  // ═══════════════════════════════════════════════

  async publishPage(id: string) {
    return this.update(id, { status: PageStatus.published } as UpdatePageDto);
  }

  // ═══════════════════════════════════════════════
  // unpublishPage — published → draft
  // ═══════════════════════════════════════════════

  async unpublishPage(id: string) {
    return this.update(id, { status: PageStatus.draft } as UpdatePageDto);
  }
}
