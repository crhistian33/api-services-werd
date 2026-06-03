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

interface PaymentMethodConfig {
  publicKey?: string;
  privateKey?: string;
  [key: string]: unknown;
}

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

  // async toggleActive(id: string) {
  //   const method = await this.findOne(id);
  //   return this.prisma.paymentMethod.update({
  //     where: { id },
  //     data: { isActive: !method.isActive },
  //   });
  // }

  // Método específico para el Checkout del Cliente
  async findAllPublic() {
    const methods = await this.prisma.paymentMethod.findMany({
      where: { isActive: true },
      select: {
        id: true,
        code: true,
        name: true,
        type: true,
        instructions: true,
        sortOrder: true,
        config: true,
      },
      orderBy: { sortOrder: 'asc' },
    });

    // Filtrar config para no exponer llaves privadas
    return methods.map((method) => {
      const config = (method.config as PaymentMethodConfig) || {};
      const filteredConfig: Record<string, unknown> = {};

      // Filtrar según el tipo de método de pago para exponer solo datos públicos
      switch (method.type) {
        case 'card':
          if (config.publicKey) filteredConfig.publicKey = config.publicKey;
          if (config.rsaId) filteredConfig.rsaId = config.rsaId;
          if (config.rsaPublicKey)
            filteredConfig.rsaPublicKey = config.rsaPublicKey;
          // Culqi v4 legacy key attributes support
          if (config.xculqirsaid)
            filteredConfig.xculqirsaid = config.xculqirsaid;
          if (config.rsapublickey)
            filteredConfig.rsapublickey = config.rsapublickey;
          break;

        case 'wallet':
          if (config.phoneNumber)
            filteredConfig.phoneNumber = config.phoneNumber;
          if (config.ownerName) filteredConfig.ownerName = config.ownerName;
          if (config.imageQrUrl) filteredConfig.imageQrUrl = config.imageQrUrl;
          // Fallbacks for database fields snake_case
          if (config.phone_number)
            filteredConfig.phone_number = config.phone_number;
          if (config.owner_name) filteredConfig.owner_name = config.owner_name;
          if (config.image_qr_url)
            filteredConfig.image_qr_url = config.image_qr_url;
          break;

        case 'cash_on_delivery':
          if (config.shippingZoneIds)
            filteredConfig.shippingZoneIds = config.shippingZoneIds;
          if (config.additionalFee !== undefined)
            filteredConfig.additionalFee = config.additionalFee;
          break;

        case 'bank_transfer':
          if (config.bankName) filteredConfig.bankName = config.bankName;
          if (config.accountNumber)
            filteredConfig.accountNumber = config.accountNumber;
          if (config.accountName)
            filteredConfig.accountName = config.accountName;
          if (config.cciNumber) filteredConfig.cciNumber = config.cciNumber;
          break;

        default:
          // Keep it empty for security by default
          break;
      }

      return {
        ...method,
        config: filteredConfig,
      };
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
}
