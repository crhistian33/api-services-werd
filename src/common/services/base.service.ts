import { NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaClient } from 'generated/prisma/client';
import { PrismaModelDelegate } from '../interfaces/prisma-delegate.interface';
import {
  PaginatedResult,
  BatchResult,
  FindAllParams,
} from '../interfaces/pagination.interface';
import { RelationCheck } from '../interfaces/relation-check.interface';

export type PrismaTransactionClient = Omit<
  PrismaClient,
  '$on' | '$connect' | '$disconnect' | '$use' | '$extends'
>;

export type PrismaDatabaseClient =
  | PrismaService
  | PrismaClient
  | PrismaTransactionClient;

export abstract class BaseService<
  T extends { id: string },
  CreateDto,
  UpdateDto,
  WhereInput = object,
  OrderByInput = object,
> {
  protected useSoftDelete = false;
  protected nameField = 'name';

  constructor(
    protected readonly prisma: PrismaService,
    protected readonly modelName: string,
  ) {}

  // ── Acceso dinámico al modelo Prisma ────────────────────────────────────────
  protected getModel(client?: PrismaDatabaseClient): PrismaModelDelegate {
    const db = client ?? this.prisma;
    const model = (db as unknown as Record<string, PrismaModelDelegate>)[
      this.modelName
    ];

    if (!model) {
      throw new Error(`Modelo Prisma no encontrado: ${this.modelName}`);
    }

    return model;
  }

  // ── Helpers de paginación ───────────────────────────────────────────────────
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

  // ── Soft delete filter ──────────────────────────────────────────────────────
  protected softDeleteFilter(
    includeDeleted = false,
    onlyTrash = false,
  ): object {
    if (!this.useSoftDelete) return {};

    // Si pedimos explícitamente la papelera, ignoramos includeDeleted
    if (onlyTrash) return { deletedAt: { not: null } };

    // Si pedimos todo (activos + eliminados)
    if (includeDeleted) return {};

    // Comportamiento por defecto: solo activos
    return { deletedAt: null };
  }

  // ═══════════════════════════════════════════════
  // assertExists
  // ═══════════════════════════════════════════════
  async assertExists(
    id: string,
    includeDeleted = false,
    client?: PrismaDatabaseClient,
  ): Promise<void> {
    const record = await this.getModel(client).findFirst({
      where: { id, ...this.softDeleteFilter(includeDeleted) },
      select: { id: true },
    });

    if (!record) {
      throw new NotFoundException(
        `${this.modelName} con id "${id}" no encontrado`,
      );
    }
  }

  // ═══════════════════════════════════════════════
  // checkRelations
  // ═══════════════════════════════════════════════
  async checkRelations(
    id: string,
    checks: RelationCheck[],
    label?: string,
  ): Promise<void> {
    const countSelect = Object.fromEntries(
      checks.map((c) => [c.countKey, true]),
    );

    const record = (await this.getModel().findUnique({
      where: { id },
      select: {
        id: true,
        [this.nameField]: true,
        _count: { select: countSelect },
      },
    })) as {
      id: string;
      [key: string]: unknown;
      _count: Record<string, number>;
    } | null;

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
      const labelValue = (label ??
        (record as Record<string, unknown>)[this.nameField] ??
        id) as string;
      throw new ConflictException({
        message: `No se puede eliminar "${labelValue}".`,
        details: conflicts,
      });
    }
  }

  // ═══════════════════════════════════════════════
  // checkRelationsMany
  // ═══════════════════════════════════════════════
  async checkRelationsMany(
    ids: string[],
    checks: RelationCheck[],
  ): Promise<void> {
    const countSelect = Object.fromEntries(
      checks.map((c) => [c.countKey, true]),
    );

    const records = (await this.getModel().findMany({
      where: { id: { in: ids } },
      select: {
        id: true,
        [this.nameField]: true,
        _count: { select: countSelect },
      },
    })) as {
      id: string;
      [key: string]: unknown;
      _count: Record<string, number>;
    }[];

    const conflicts = records
      .filter((r) => checks.some((c) => r._count[c.countKey] > 0))
      .map((r) => ({
        id: r.id,
        name: (r as Record<string, unknown>)[this.nameField] as
          | string
          | undefined,
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
    const {
      where,
      orderBy,
      include,
      select,
      pagination,
      includeDeleted = false,
      onlyTrash = false,
    } = params;

    console.log('Onlytrash en findAll:', onlyTrash);
    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 20;

    // 1. Construimos el filtro de borrado lógico con máxima prioridad
    let sfFilter = {};
    if (this.useSoftDelete) {
      if (onlyTrash) {
        sfFilter = { deletedAt: { not: null } }; // 💡 Fuerza ver solo eliminados
      } else if (!includeDeleted) {
        sfFilter = { deletedAt: null }; // 💡 Fuerza ver solo activos
      }
    }
    // Filtro dinámico: usa el helper que ya tienes para decidir qué traer
    const mergedWhere = {
      ...sfFilter,
      ...(where as object),
    };

    // ── Ejecución en Paralelo (Carga Rápida) ──────────────────────────────────
    const [data, total, trashedCount] = await Promise.all([
      this.getModel().findMany({
        where: mergedWhere,
        orderBy,
        skip: this.buildSkip(page, limit),
        take: limit,
        include,
        select,
      }) as Promise<T[]>,

      this.getModel().count({ where: mergedWhere }),

      // Conteo de basura: se ejecuta al mismo tiempo que los datos
      this.useSoftDelete
        ? this.getModel().count({
            where: { deletedAt: { not: null } },
          })
        : Promise.resolve(0),
    ]);

    return {
      data,
      meta: {
        ...this.buildPaginationMeta(total, page, limit),
        ...(this.useSoftDelete ? { trashedCount } : {}),
      },
    };
  }

  // ═══════════════════════════════════════════════
  // findOne
  // ═══════════════════════════════════════════════
  async findOne(
    id: string,
    include?: object,
    includeDeleted = false,
    client?: PrismaDatabaseClient,
  ): Promise<T> {
    const record = (await this.getModel(client).findFirst({
      where: { id, ...this.softDeleteFilter(includeDeleted) },
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
  async create(
    data: CreateDto,
    include?: object,
    client?: PrismaDatabaseClient,
  ): Promise<T> {
    console.log(
      'Creando nuevo registro en',
      this.modelName,
      'con datos:',
      data,
    );
    return this.getModel(client).create({ data, include }) as Promise<T>;
  }

  // ═══════════════════════════════════════════════
  // update
  // ═══════════════════════════════════════════════
  async update(
    id: string,
    data: UpdateDto,
    include?: object,
    client?: PrismaDatabaseClient,
  ): Promise<T> {
    await this.assertExists(id, false, client);
    return this.getModel(client).update({
      where: { id },
      data,
      include,
    }) as Promise<T>;
  }

  // ═══════════════════════════════════════════════
  // remove
  // ═══════════════════════════════════════════════
  async remove(id: string, client?: PrismaDatabaseClient): Promise<T> {
    await this.assertExists(id, true, client);
    return this.getModel(client).delete({ where: { id } }) as Promise<T>;
  }

  // ═══════════════════════════════════════════════
  // removeMany
  // ═══════════════════════════════════════════════
  async removeMany(
    ids: string[],
    client?: PrismaDatabaseClient,
  ): Promise<BatchResult> {
    return this.getModel(client).deleteMany({
      where: { id: { in: ids } },
    }) as Promise<BatchResult>;
  }

  // ═══════════════════════════════════════════════
  // softDelete
  // ═══════════════════════════════════════════════
  async softDelete(id: string, client?: PrismaDatabaseClient): Promise<T> {
    await this.assertExists(id, false, client);
    return this.getModel(client).update({
      where: { id },
      data: { deletedAt: new Date() },
    }) as Promise<T>;
  }

  // ═══════════════════════════════════════════════
  // softDeleteMany
  // ═══════════════════════════════════════════════
  async softDeleteMany(
    ids: string[],
    client?: PrismaDatabaseClient,
  ): Promise<BatchResult> {
    return this.getModel(client).updateMany({
      where: { id: { in: ids } },
      data: { deletedAt: new Date() },
    }) as Promise<BatchResult>;
  }

  // ═══════════════════════════════════════════════
  // restore
  // ═══════════════════════════════════════════════
  async restore(id: string, client?: PrismaDatabaseClient): Promise<T> {
    await this.assertExists(id, true, client);
    return this.getModel(client).update({
      where: { id },
      data: { deletedAt: null },
    }) as Promise<T>;
  }

  // ═══════════════════════════════════════════════
  // restoreMany
  // ═══════════════════════════════════════════════
  async restoreMany(
    ids: string[],
    client?: PrismaDatabaseClient,
  ): Promise<BatchResult> {
    return this.getModel(client).updateMany({
      where: { id: { in: ids } },
      data: { deletedAt: null },
    }) as Promise<BatchResult>;
  }
}
