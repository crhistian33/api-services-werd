import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { BaseService } from '../../../common/services/base.service';
import {
  BulkReorderFaqsDto,
  CreateFaqDto,
  QueryFaqDto,
  UpdateFaqDto,
} from '../dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { PaginatedResult } from '../../../common/interfaces/pagination.interface';

type FaqEntity = Prisma.FaqGetPayload<{
  include: {
    createdBy: { select: { id: true; name: true; email: true } };
    updatedBy: { select: { id: true; name: true; email: true } };
  };
}>;

const LIST_INCLUDE = {
  createdBy: { select: { id: true, name: true, email: true } },
  updatedBy: { select: { id: true, name: true, email: true } },
} as const;

@Injectable()
export class FaqsService extends BaseService<
  FaqEntity,
  CreateFaqDto,
  UpdateFaqDto,
  Prisma.FaqWhereInput,
  Prisma.FaqOrderByWithRelationInput
> {
  protected override useSoftDelete = false;
  protected override nameField = 'question';

  constructor(prisma: PrismaService) {
    super(prisma, 'faq');
  }

  // ═══════════════════════════════════════════════
  // findAllFaqs
  // ═══════════════════════════════════════════════

  async findAllFaqs(query: QueryFaqDto): Promise<PaginatedResult<FaqEntity>> {
    const { isActive, category, search, page, limit } = query;
    const result = await this.findAll({
      where: {
        ...(isActive !== undefined && { isActive }),
        ...(category !== undefined && { category }),
        ...(search !== undefined && {
          OR: [
            { question: { contains: search, mode: 'insensitive' } },
            { answer: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      include: LIST_INCLUDE,
      pagination: { page, limit },
    });

    return result;
  }

  // ═══════════════════════════════════════════════
  // findFaqById
  // ═══════════════════════════════════════════════

  async findFaqById(id: string) {
    return this.findOne(id, LIST_INCLUDE);
  }

  // ═══════════════════════════════════════════════
  // create Faq
  // ═══════════════════════════════════════════════

  async createFaq(dto: CreateFaqDto, adminId: string) {
    return this.create(
      {
        ...dto,
        createdById: adminId,
        updatedById: adminId,
      } as CreateFaqDto,
      undefined,
      undefined,
    );
  }

  // ═══════════════════════════════════════════════
  // update Faq
  // ═══════════════════════════════════════════════

  async updateFaq(id: string, dto: UpdateFaqDto, adminId: string) {
    return this.update(
      id,
      { ...dto, updatedById: adminId } as UpdateFaqDto,
      undefined,
      undefined,
    );
  }

  // ═══════════════════════════════════════════════
  // removeFaq — eliminación permanente (admin con privilegios)
  // ═══════════════════════════════════════════════

  async removeFaq(id: string) {
    return this.remove(id);
  }

  // ═══════════════════════════════════════════════
  // removeManyFaqs
  // ═══════════════════════════════════════════════

  async removeManyFaqs(ids: string[]) {
    return this.removeMany(ids);
  }

  async reorder(dto: BulkReorderFaqsDto, adminId: string) {
    await this.prisma.$transaction(
      dto.ids.map((id, index) =>
        this.prisma.faq.update({
          where: { id },
          data: { sortOrder: index, updatedById: adminId },
        }),
      ),
    );

    const faqs = await this.prisma.faq.findMany({
      where: { id: { in: dto.ids } },
      include: LIST_INCLUDE,
      orderBy: { sortOrder: 'asc' },
    });

    return faqs;
  }
}
