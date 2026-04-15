import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import {
  CreateShippingZoneDto,
  UpdateShippingZoneDto,
  QueryShippingZoneDto,
} from '../dto';

// ── Tipo Prisma del entity con sus relaciones ──────────────────
type ShippingZoneEntity = Prisma.ShippingZoneGetPayload<{
  include: {
    areas: {
      include: {
        department: true;
        province: true;
        district: true;
      };
    };
    rates: true;
    createdBy: { select: { id: true; name: true; email: true } };
    updatedBy: { select: { id: true; name: true; email: true } };
  };
}>;

// ── Include para listado — ligero, sin áreas completas ─────────
const LIST_INCLUDE = {
  _count: { select: { areas: true, rates: true, orders: true } },
  createdBy: { select: { id: true, name: true, email: true } },
  updatedBy: { select: { id: true, name: true, email: true } },
} as const;

// ── Include para detalle — completo con áreas y tarifas ────────
const DETAIL_INCLUDE = {
  areas: {
    orderBy: { departmentId: 'asc' as const },
    include: {
      department: { select: { id: true, name: true } },
      province: { select: { id: true, name: true } },
      district: { select: { id: true, name: true } },
    },
  },
  rates: {
    where: { isActive: true },
    orderBy: { price: 'asc' as const },
  },
  createdBy: { select: { id: true, name: true, email: true } },
  updatedBy: { select: { id: true, name: true, email: true } },
} as const;

// ── Verificación de relaciones para eliminación ────────────────
const RELATION_CHECKS = [
  { countKey: 'orders', label: 'pedido(s) asociado(s)' },
];

@Injectable()
export class ShippingZonesService extends BaseService<
  ShippingZoneEntity,
  CreateShippingZoneDto,
  UpdateShippingZoneDto,
  Prisma.ShippingZoneWhereInput,
  Prisma.ShippingZoneOrderByWithRelationInput
> {
  protected override useSoftDelete = true;

  constructor(prisma: PrismaService) {
    super(prisma, 'shippingZone');
  }

  // ═══════════════════════════════════════════════
  // findAllZones — listado con filtros y paginación
  // ═══════════════════════════════════════════════

  async findAllZones(query: QueryShippingZoneDto) {
    const { search, isActive, page, limit, onlyTrash } = query;

    return this.findAll({
      where: {
        ...(isActive !== undefined && { isActive }),
        ...(search !== undefined && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: [{ name: 'asc' }, { createdAt: 'desc' }],
      include: LIST_INCLUDE,
      pagination: { page, limit },
      onlyTrash,
    });
  }

  // ═══════════════════════════════════════════════
  // findZoneById — detalle completo con áreas y tarifas
  // ═══════════════════════════════════════════════

  async findZoneById(id: string) {
    return this.findOne(id, DETAIL_INCLUDE);
  }

  // ═══════════════════════════════════════════════
  // findZoneByUbigeo
  // Encuentra la zona de envío que cubre un ubigeo específico.
  // Prioridad: distrito > provincia > departamento
  // Usado por el checkout para calcular el costo de envío.
  // ═══════════════════════════════════════════════

  async findZoneByUbigeo(
    departmentId: string,
    provinceId?: string,
    districtId?: string,
  ) {
    // Busca la zona más específica primero (distrito → provincia → departamento)
    const area = await this.prisma.shippingZoneArea.findFirst({
      where: {
        departmentId,
        // Si hay distrito, busca exacto; si hay provincia, busca sin distrito
        ...(districtId
          ? { provinceId, districtId }
          : provinceId
            ? { provinceId, districtId: null }
            : { provinceId: null, districtId: null }),
        zone: { isActive: true },
      },
      include: {
        zone: {
          include: {
            rates: {
              where: { isActive: true },
              orderBy: { price: 'asc' },
            },
          },
        },
      },
      orderBy: {
        // Prioriza el área más específica: con distrito > con provincia > solo depto
        districtId: 'desc',
      },
    });

    return area?.zone ?? null;
  }

  // ═══════════════════════════════════════════════
  // createZone
  //
  // Crea la zona y opcionalmente sus áreas en una sola transacción.
  // Si se envían áreas en el DTO, se crean junto con la zona.
  // ═══════════════════════════════════════════════

  async createZone(dto: CreateShippingZoneDto, adminId: string) {
    const { areas, rates, ...zoneData } = dto;

    const zone = await this.prisma.$transaction(async (tx) => {
      // Crea la zona principal
      const created = await this.create(
        {
          ...zoneData,
          createdById: adminId,
          updatedById: adminId,
        } as CreateShippingZoneDto,
        undefined,
        tx,
      );

      await Promise.all([
        areas?.length
          ? tx.shippingZoneArea.createMany({
              data: areas.map((a) => ({ ...a, zoneId: created.id })),
            })
          : Promise.resolve(),
        rates?.length
          ? tx.shippingRate.createMany({
              data: rates.map((r) => ({
                ...r,
                zoneId: created.id,
                createdById: adminId,
                updatedById: adminId,
              })),
            })
          : Promise.resolve(),
      ]);

      return created;
    });

    return this.findZoneById(zone.id);
  }

  // ═══════════════════════════════════════════════
  // updateZone
  //
  // Actualiza la zona y sincroniza sus áreas si se envían.
  // Si `areas` viene en el DTO, reemplaza completamente las existentes.
  // Si `areas` no viene, las áreas no se tocan.
  // ═══════════════════════════════════════════════

  async updateZone(id: string, dto: UpdateShippingZoneDto, adminId: string) {
    const { areas, rates, ...zoneData } = dto;

    await this.assertExists(id);

    await this.prisma.$transaction(async (tx) => {
      // 1. Actualizar datos básicos (BaseService valida existencia y SoftDelete)
      await this.update(
        id,
        { ...zoneData, updatedById: adminId } as UpdateShippingZoneDto,
        undefined,
        tx,
      );

      // 2. Sincronizar Áreas: Borramos las anteriores y creamos las nuevas
      if (areas) {
        await tx.shippingZoneArea.deleteMany({ where: { zoneId: id } });
        if (areas.length > 0) {
          await tx.shippingZoneArea.createMany({
            data: areas.map((a) => ({ ...a, zoneId: id })),
          });
        }
      }

      // 3. Sincronizar Tarifas
      if (rates) {
        await tx.shippingRate.deleteMany({ where: { zoneId: id } });
        if (rates.length > 0) {
          await tx.shippingRate.createMany({
            data: rates.map((r) => ({
              ...r,
              zoneId: id,
              updatedById: adminId,
              createdById: adminId,
            })),
          });
        }
      }
    });

    return this.findZoneById(id);
  }

  // ═══════════════════════════════════════════════
  // removeZone — eliminación permanente
  // Bloquea si la zona tiene pedidos asociados
  // ═══════════════════════════════════════════════

  async removeZone(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    // Las áreas y tarifas se eliminan en cascada (onDelete: Cascade en schema)
    return this.remove(id);
  }

  // ═══════════════════════════════════════════════
  // removeManyZones — eliminación permanente masiva
  // ═══════════════════════════════════════════════

  async removeManyZones(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    return this.removeMany(ids);
  }

  // ═══════════════════════════════════════════════
  // ── TARIFAS ───────────────────────────────────
  // ═══════════════════════════════════════════════

  // ── findRatesByZone ────────────────────────────────────────────
  // Retorna todas las tarifas de una zona ordenadas por precio.
  // ──────────────────────────────────────────────────────────────

  async findRatesByZone(zoneId: string) {
    await this.assertExists(zoneId);

    return this.prisma.shippingRate.findMany({
      where: { zoneId },
      orderBy: { price: 'asc' },
      include: {
        createdBy: { select: { id: true, name: true, email: true } },
        updatedBy: { select: { id: true, name: true, email: true } },
      },
    });
  }

  // ═══════════════════════════════════════════════
  // softDeleteProduct
  // ═══════════════════════════════════════════════

  async softDeleteZone(id: string, adminId: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    return this.softDelete(id, adminId);
  }

  // ═══════════════════════════════════════════════
  // softDeleteManyProducts
  // ═══════════════════════════════════════════════

  async softDeleteManyZones(ids: string[], adminId: string) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    return this.softDeleteMany(ids, adminId);
  }

  // ═══════════════════════════════════════════════
  // restoreProduct
  // ═══════════════════════════════════════════════

  async restoreZone(id: string, adminId: string) {
    await this.assertNotDeleted(id);
    return this.restore(id, adminId);
  }

  // ═══════════════════════════════════════════════
  // restoreManyProducts
  // ═══════════════════════════════════════════════

  async restoreManyZones(ids: string[], adminId: string) {
    return this.restoreMany(ids, adminId);
  }

  async changeStatusMany(ids: string[], status: boolean, adminId: string) {
    return this.getModel().updateMany({
      where: {
        id: { in: ids },
      },
      data: {
        isActive: status,
        updatedById: adminId,
      },
    });
  }

  // ═══════════════════════════════════════════════
  // ── UBIGEO (solo lectura) ─────────────────────
  // ═══════════════════════════════════════════════

  // ── getDepartments — listado de departamentos ──────────────────
  async getDepartments() {
    return this.prisma.department.findMany({
      orderBy: { name: 'asc' },
      select: { id: true, name: true },
    });
  }

  // ── getProvincesByDepartment ───────────────────────────────────
  async getProvincesByDepartment(departmentId: string) {
    return this.prisma.province.findMany({
      where: { departmentId },
      orderBy: { name: 'asc' },
      select: { id: true, name: true, departmentId: true },
    });
  }

  // ── getDistrictsByProvince ─────────────────────────────────────
  async getDistrictsByProvince(provinceId: string) {
    return this.prisma.district.findMany({
      where: { provinceId },
      orderBy: { name: 'asc' },
      select: { id: true, name: true, provinceId: true },
    });
  }
}
