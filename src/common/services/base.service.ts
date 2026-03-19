import { NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaModelDelegate } from '../interfaces/prisma-delegate.interface';
import {
  PaginatedResult,
  BatchResult,
  FindAllParams,
} from '../interfaces/pagination.interface';
import { RelationCheck } from '../interfaces/relation-check.interface';

export abstract class BaseService<
  T,
  CreateDto,
  UpdateDto,
  WhereInput = object,
  OrderByInput = object,
> {
  // Para modelos que no tienen deletedAt (p.ej. HeroSlide), dejar false.
  protected useSoftDelete = false;
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly modelName: string,
  ) {}

  // ── Acceso dinámico al delegate ──────────────
  protected get model(): PrismaModelDelegate {
    return (this.prisma as Record<string, any>)[
      this.modelName
    ] as PrismaModelDelegate;
  }

  // ── Helpers de paginación ────────────────────
  protected buildSkip(page: number, limit: number): number {
    return (page - 1) * limit;
  }

  protected buildPaginationMeta(
    total: number,
    page: number,
    limit: number,
  ): PaginatedResult<T>['meta'] {
    return {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // ── Helper: filtra registros eliminados ──────
  /**
   * Returns `{ deletedAt: null }` when the model supports soft-delete and
   * `includeDeleted` is false. Returns `{}` otherwise.
   */
  protected softDeleteFilter(includeDeleted = false): object {
    if (!this.useSoftDelete || includeDeleted) {
      return {};
    }
    return { deletedAt: null };
  }

  // ═══════════════════════════════════════════════
  // assertExists — verifica que el registro exista y no esté eliminado.
  // Lanza NotFoundException si no se encuentra.
  // ═══════════════════════════════════════════════
  async assertExists(id: string, includeDeleted = false): Promise<void> {
    const filter = this.softDeleteFilter(includeDeleted);
    const record = await this.model.findFirst({
      where: { id, ...filter },
      select: { id: true },
    });

    if (!record) {
      throw new NotFoundException(
        `${this.modelName} con id "${id}" no encontrado`,
      );
    }
  }

  // ═══════════════════════════════════════════════
  // checkRelations — verifica que el registro no tenga relaciones bloqueantes.
  // Útil para guards antes de eliminar.
  //
  // @param id       — id del registro a verificar
  // @param checks   — lista de relaciones a comprobar (clave en _count + etiqueta)
  // @param label    — nombre del registro para el mensaje de error
  // ═══════════════════════════════════════════════
  async checkRelations(
    id: string,
    checks: RelationCheck[],
    label?: string,
  ): Promise<void> {
    const countSelect = Object.fromEntries(
      checks.map((c) => [c.countKey, true]),
    );

    const record = (await this.model.findUnique({
      where: { id },
      select: { id: true, name: true, _count: { select: countSelect } },
    })) as { id: string; name?: string; _count: Record<string, number> } | null;

    if (!record) {
      throw new NotFoundException(
        `${this.modelName} con id "${id}" no encontrado`,
      );
    }

    const conflicts = checks
      .filter((c) => record._count[c.countKey] > 0)
      .map((c) => ({
        reason: `Tiene ${record._count[c.countKey]} ${c.label}`,
      }));

    if (conflicts.length > 0) {
      const entityLabel = label ?? record.name ?? id;
      throw new ConflictException({
        message: `No se puede eliminar "${entityLabel}".`,
        details: conflicts,
      });
    }
  }

  // ═══════════════════════════════════════════════
  // checkRelationsMany — igual que checkRelations pero para un lote de ids.
  // ═══════════════════════════════════════════════
  async checkRelationsMany(
    ids: string[],
    checks: RelationCheck[],
  ): Promise<void> {
    const countSelect = Object.fromEntries(
      checks.map((c) => [c.countKey, true]),
    );

    const records = (await this.model.findMany({
      where: { id: { in: ids } },
      select: { id: true, name: true, _count: { select: countSelect } },
    })) as { id: string; name?: string; _count: Record<string, number> }[];

    const conflicts = records
      .filter((r) => checks.some((c) => r._count[c.countKey] > 0))
      .map((r) => ({
        id: r.id,
        name: r.name,
        reason: checks
          .filter((c) => r._count[c.countKey] > 0)
          .map((c) => `Tiene ${r._count[c.countKey]} ${c.label}`)
          .join(' y '),
      }));

    if (conflicts.length > 0) {
      throw new ConflictException({
        message:
          'No se puede completar la operación. Algunos registros tienen restricciones.',
        details: conflicts,
      });
    }
  }

  // ═══════════════════════════════════════════════
  // findAll
  // ═══════════════════════════════════════════════
  async findAll(
    params: FindAllParams<WhereInput, OrderByInput> = {},
  ): Promise<PaginatedResult<T>> {
    const { where, orderBy, include, select, pagination, includeDeleted } =
      params;

    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 20;
    const skip = this.buildSkip(page, limit);

    const softFilter = this.softDeleteFilter(includeDeleted);
    const mergedWhere = { ...softFilter, ...(where as object) };

    const [data, total] = await Promise.all([
      this.model.findMany({
        where: mergedWhere,
        orderBy,
        skip,
        take: limit,
        include,
        select,
      }) as Promise<T[]>,
      this.model.count({ where: mergedWhere }),
    ]);

    return {
      data,
      meta: this.buildPaginationMeta(total, page, limit),
    };
  }

  // ═══════════════════════════════════════════════
  // findOne
  // ═══════════════════════════════════════════════
  async findOne(
    id: string,
    include?: object,
    includeDeleted = false,
  ): Promise<T> {
    const softFilter = this.softDeleteFilter(includeDeleted);

    const record = (await this.model.findFirst({
      where: { id, ...softFilter },
      include,
    })) as T | null;

    if (!record) {
      throw new NotFoundException(
        `${this.modelName} con id "${id}" no encontrado`,
      );
    }

    return record;
  }

  // ═══════════════════════════════════════════════
  // create
  // ═══════════════════════════════════════════════
  async create(data: CreateDto, include?: object): Promise<T> {
    return this.model.create({ data, include }) as Promise<T>;
  }

  // ═══════════════════════════════════════════════
  // update
  // ═══════════════════════════════════════════════
  async update(id: string, data: UpdateDto, include?: object): Promise<T> {
    await this.assertExists(id);
    return this.model.update({ where: { id }, data, include }) as Promise<T>;
  }

  // ═══════════════════════════════════════════════
  // remove
  // ═══════════════════════════════════════════════
  async remove(id: string): Promise<T> {
    await this.assertExists(id);
    return this.model.delete({ where: { id } }) as Promise<T>;
  }

  // ═══════════════════════════════════════════════
  // removeMany
  // ═══════════════════════════════════════════════
  async removeMany(ids: string[]): Promise<BatchResult> {
    return this.model.deleteMany({
      where: { id: { in: ids } },
    }) as Promise<BatchResult>;
  }

  // ═══════════════════════════════════════════════
  // softDelete
  // ═══════════════════════════════════════════════
  async softDelete(id: string): Promise<T> {
    await this.assertExists(id);
    return this.model.update({
      where: { id },
      data: { deletedAt: new Date() },
    }) as Promise<T>;
  }

  // ═══════════════════════════════════════════════
  // softDeleteMany
  // ═══════════════════════════════════════════════
  async softDeleteMany(ids: string[]): Promise<BatchResult> {
    return this.model.updateMany({
      where: { id: { in: ids } },
      data: { deletedAt: new Date() },
    }) as Promise<BatchResult>;
  }

  // ═══════════════════════════════════════════════
  // restore
  // ═══════════════════════════════════════════════
  async restore(id: string): Promise<T> {
    await this.assertExists(id, true);
    return this.model.update({
      where: { id },
      data: { deletedAt: null },
    }) as Promise<T>;
  }

  // ═══════════════════════════════════════════════
  // restoreMany
  // ═══════════════════════════════════════════════
  async restoreMany(ids: string[]): Promise<BatchResult> {
    return this.model.updateMany({
      where: { id: { in: ids } },
      data: { deletedAt: null },
    }) as Promise<BatchResult>;
  }
}
