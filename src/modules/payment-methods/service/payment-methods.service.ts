import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import {
  CreatePaymentMethodDto,
  UpdatePaymentMethodDto,
  QueryPaymentMethodDto,
} from '../dto';
import { BulkReorderPaymentMethodDto } from '../dto/bulk-payment-method.dto';

type PaymentMethodEntity = Prisma.PaymentMethodGetPayload<{
  include: {
    createdBy: { select: { id: true; name: true; email: true } };
    updatedBy: { select: { id: true; name: true; email: true } };
  };
}>;

const STANDARD_INCLUDE = {
  createdBy: { select: { id: true, name: true, email: true } },
  updatedBy: { select: { id: true, name: true, email: true } },
} as const;

@Injectable()
export class PaymentMethodsService extends BaseService<
  PaymentMethodEntity,
  CreatePaymentMethodDto,
  UpdatePaymentMethodDto,
  Prisma.PaymentMethodWhereInput,
  Prisma.PaymentMethodOrderByWithRelationInput
> {
  protected override nameField = 'name';

  constructor(prisma: PrismaService) {
    super(prisma, 'paymentMethod');
  }

  async findAllMethods(query: QueryPaymentMethodDto) {
    const { isActive, type, search, page, limit } = query;

    return this.findAll({
      where: {
        ...(isActive !== undefined && { isActive }),
        ...(type !== undefined && { type }),
        ...(search !== undefined && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { code: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: { sortOrder: 'asc' },
      include: STANDARD_INCLUDE,
      pagination: { page, limit },
    });
  }

  async createMethod(dto: CreatePaymentMethodDto, adminId: string) {
    return this.create({
      ...dto,
      createdBy: { connect: { id: adminId } },
      updatedBy: { connect: { id: adminId } },
    } as CreatePaymentMethodDto);
  }

  async updateMethod(id: string, dto: UpdatePaymentMethodDto, adminId: string) {
    await this.assertExists(id);
    return this.update(id, {
      ...dto,
      updatedBy: { connect: { id: adminId } },
    } as UpdatePaymentMethodDto);
  }

  async toggleActive(id: string) {
    const method = await this.findOne(id);
    return this.prisma.paymentMethod.update({
      where: { id },
      data: { isActive: !method.isActive },
    });
  }

  // Método específico para el Checkout del Cliente
  async findAllPublic() {
    return this.prisma.paymentMethod.findMany({
      where: { isActive: true },
      select: {
        id: true,
        code: true,
        name: true,
        type: true,
        instructions: true,
        sortOrder: true,
        // No devolvemos 'config' completo para no exponer Private Keys
        config: true,
      },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async reorder(dto: BulkReorderPaymentMethodDto, adminId: string) {
    await this.prisma.$transaction(
      dto.ids.map((id, index) =>
        this.prisma.paymentMethod.update({
          where: { id },
          data: { sortOrder: index, updatedById: adminId },
        }),
      ),
    );

    const paymentMethods = await this.prisma.paymentMethod.findMany({
      where: { id: { in: dto.ids } },
      include: STANDARD_INCLUDE,
      orderBy: { sortOrder: 'asc' },
    });

    return paymentMethods;
  }

  /**
   * Actualiza el estado de múltiples métodos de pago a la vez.
   * @param ids Arreglo de UUIDs de los métodos de pago.
   * @param status Nuevo estado (active, draft, inactive, out_of_stock).
   */
  async changeStatusMany(ids: string[], status: boolean, adminId: string) {
    // Usamos el helper getModel() heredado de BaseService
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
}
