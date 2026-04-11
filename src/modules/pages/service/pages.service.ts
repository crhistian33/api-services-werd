// pages/pages.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PageStatus, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { CreatePageDto, UpdatePageDto } from '../dto';
import { QueryPageDto } from '../dto/query-page.dto';

type PageEntity = Prisma.PageGetPayload<object>;

@Injectable()
export class PagesService extends SluggableService<
  PageEntity,
  CreatePageDto,
  UpdatePageDto,
  Prisma.PageWhereInput,
  Prisma.PageOrderByWithRelationInput
> {
  protected override useSoftDelete = true;
  protected override nameField = 'title';

  constructor(prisma: PrismaService) {
    super(prisma, 'page');
  }

  // ═══════════════════════════════════════════════
  // findAllPages — admin: todos los estados, sin content
  // ═══════════════════════════════════════════════

  async findAllPages(query: QueryPageDto) {
    const { search, status, page, limit, onlyTrash } = query;

    const result = await this.findAll({
      where: {
        ...(status !== undefined && { status }),
        ...(search !== undefined && {
          OR: [{ title: { contains: search, mode: 'insensitive' } }],
        }),
      },
      orderBy: [{ createdAt: 'desc' }],
      pagination: { page, limit },
      onlyTrash,
    });

    return result;
  }

  // ═══════════════════════════════════════════════
  // findAllPagesPublic — público: solo published y no eliminadas
  // softDeleteFilter añade deletedAt: null automáticamente
  // ═══════════════════════════════════════════════

  async findAllPagesPublic(query: QueryPageDto) {
    const { search, page, limit } = query;

    const result = await this.findAll({
      where: {
        status: 'published',
        deletedAt: null,
        ...(search !== undefined && {
          OR: [{ title: { contains: search, mode: 'insensitive' } }],
        }),
      },
      orderBy: [{ createdAt: 'desc' }],
      pagination: { page, limit },
    });

    return result;
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
  // changeStatus — actualizar el estado de una página
  // ═══════════════════════════════════════════════

  async changeStatus(id: string, status: PageStatus) {
    return this.update(id, { status } as UpdatePageDto);
  }

  async changeStatusMany(ids: string[], status: PageStatus) {
    return this.getModel().updateMany({
      where: {
        id: { in: ids },
        ...this.softDeleteFilter(),
      },
      data: {
        status,
      },
    });
  }
}
