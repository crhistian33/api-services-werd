import {
  Injectable,
  BadRequestException,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
  Logger,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { BaseService } from '../../../common/services/base.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { PaginatedResult } from '../../../common/interfaces/pagination.interface';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
  QueryCustomerDto,
  UpdateCustomerPasswordDto,
  ForgotPasswordResetDto,
  ForgotPasswordDto,
} from '../dto';
import { MailService } from '../../mail/service/mail.service';
import { Prisma } from 'generated/prisma/client';
import { CreateCustomerAddressDto } from 'src/modules/customers/dto/create-customer-address.dto';
import { UpdateCustomerAddressDto } from 'src/modules/customers/dto/update-customer-address.dto';

// Definición de la entidad con sus relaciones para el tipado del BaseService
type CustomerEntity = Prisma.CustomerGetPayload<{
  include: {
    addresses: true;
    _count: { select: { orders: true } };
  };
}>;

// Configuración de campos a incluir en las respuestas de listado y detalle
const CUSTOMER_INCLUDE = {
  addresses: true,
  _count: {
    select: { orders: true },
  },
} as const;

const TRASH_INCLUDE = {
  deletedBy: { select: { id: true, name: true, email: true } },
} as const;

@Injectable()
export class CustomersService extends BaseService<
  CustomerEntity,
  CreateCustomerDto,
  UpdateCustomerDto,
  Prisma.CustomerWhereInput,
  Prisma.CustomerOrderByWithRelationInput
> {
  readonly logger = new Logger(CustomersService.name);
  protected override useSoftDelete = true;
  protected override nameField = 'email';

  constructor(
    prisma: PrismaService,
    private readonly mailService: MailService,
  ) {
    super(prisma, 'customer');
  }

  // ═══════════════════════════════════════════════
  // CMS: findAllCustomers
  // ═══════════════════════════════════════════════

  async findAllCustomers(
    query: QueryCustomerDto,
  ): Promise<PaginatedResult<CustomerEntity>> {
    const { search, isActive, isVerified, page, limit, onlyTrash } = query;

    return this.findAll({
      where: {
        ...(isActive !== undefined && { isActive }),
        ...(isVerified !== undefined && {
          emailVerifiedAt: isVerified ? { not: null } : null,
        }),
        ...(search && {
          OR: [
            { firstName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
            { phone: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: { createdAt: 'desc' },
      include: onlyTrash ? TRASH_INCLUDE : CUSTOMER_INCLUDE,
      pagination: { page, limit },
      onlyTrash,
    });
  }

  // ═══════════════════════════════════════════════
  // CMS: Operaciones de Item y Masivas
  // ═══════════════════════════════════════════════

  async findCustomerById(id: string) {
    return this.findOne(id, CUSTOMER_INCLUDE);
  }

  async softDeleteCustomer(id: string, adminId: string) {
    return this.softDelete(id, adminId);
  }

  async softDeleteManyCustomers(ids: string[], adminId: string) {
    return this.softDeleteMany(ids, adminId);
  }

  async restoreCustomer(id: string, adminId: string) {
    return this.restore(id, adminId);
  }

  async restoreCustomers(ids: string[], adminId: string) {
    return this.restoreMany(ids, adminId);
  }

  // ═══════════════════════════════════════════════
  // PUBLIC: Registro y Verificación
  // ═══════════════════════════════════════════════

  async register(dto: CreateCustomerDto) {
    const exists = await this.prisma.customer.findUnique({
      where: { email: dto.email },
    });
    if (exists)
      throw new ConflictException(
        'El correo electrónico ya se encuentra registrado',
      );

    const passwordHash = await bcrypt.hash(dto.password, 12);
    // Generación de código de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    const customer = await this.prisma.$transaction(async (tx) => {
      const newCustomer = await tx.customer.create({
        data: {
          firstName: dto.firstName,
          lastName: dto.lastName,
          email: dto.email,
          phone: dto.phone,
          passwordHash,
        },
      });

      await tx.customerVerificationCode.create({
        data: {
          code,
          email: newCustomer.email,
          expiresAt,
          customerId: newCustomer.id,
        },
      });

      return newCustomer;
    });

    // Envío de correo asíncrono no bloqueante (fire-and-forget)
    // El MailService ya maneja errores internamente con catch + log
    this.mailService
      .sendVerificationEmail(customer.email, code)
      .catch(() => {});

    // 4. Responder al Frontend de inmediato
    return customer;
  }

  async verifyEmail(email: string, code: string) {
    const verification = await this.prisma.customerVerificationCode.findFirst({
      where: { email, code, expiresAt: { gt: new Date() } },
    });

    if (!verification)
      throw new BadRequestException('Código inválido o expirado');

    return this.prisma.$transaction(async (tx) => {
      if (verification.customerId) {
        await tx.customer.update({
          where: { id: verification.customerId }, // Aquí TypeScript ya sabe al 100% que es un string puro
          data: { emailVerifiedAt: new Date() },
        });
      }

      await tx.customerVerificationCode.delete({
        where: { id: verification.id },
      });

      return { message: 'Email verificado con éxito' };
    });
  }

  // ═══════════════════════════════════════════════
  // PUBLIC: Perfil y Seguridad
  // ═══════════════════════════════════════════════

  async updatePassword(id: string, dto: UpdateCustomerPasswordDto) {
    const customer = await this.prisma.customer.findUnique({ where: { id } });

    if (!customer?.passwordHash) {
      throw new UnauthorizedException(
        'Esta cuenta utiliza autenticación externa (Google)',
      );
    }

    const isMatch = await bcrypt.compare(
      dto.currentPassword,
      customer.passwordHash,
    );
    if (!isMatch)
      throw new BadRequestException('La contraseña actual es incorrecta');

    const newPasswordHash = await bcrypt.hash(dto.newPassword, 12);

    return this.prisma.customer.update({
      where: { id },
      data: { passwordHash: newPasswordHash },
    });
  }

  async updatePasswordAsAdmin(id: string, newPassword: string) {
    const customer = await this.prisma.customer.findUnique({ where: { id } });

    if (!customer) {
      throw new NotFoundException('Cliente no encontrado');
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 12);

    return this.prisma.customer.update({
      where: { id },
      data: { passwordHash: newPasswordHash },
    });
  }

  async resetPassword(dto: ForgotPasswordResetDto) {
    const verification = await this.prisma.customerVerificationCode.findFirst({
      where: {
        email: dto.email,
        code: dto.code,
        expiresAt: { gt: new Date() },
      },
    });

    if (!verification)
      throw new BadRequestException('Código de recuperación inválido');

    const passwordHash = await bcrypt.hash(dto.newPassword, 12);

    return this.prisma.$transaction(async (tx) => {
      if (verification.customerId) {
        await tx.customer.update({
          where: { id: verification.customerId },
          data: { passwordHash },
        });
      }

      await tx.customerVerificationCode.delete({
        where: { id: verification.id },
      });

      return { message: 'Contraseña restablecida correctamente' };
    });
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const customer = await this.prisma.customer.findUnique({
      where: { email: dto.email },
    });

    if (!customer) {
      // Por seguridad, no revelamos si el correo existe o no
      return {
        message:
          'Si el correo está registrado, se enviará un código de verificación.',
      };
    }

    // Generación de código de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    await this.prisma.customerVerificationCode.create({
      data: {
        code,
        email: customer.email,
        expiresAt,
        customerId: customer.id,
      },
    });

    // Envío asíncrono no bloqueante (fire-and-forget)
    this.mailService
      .sendPasswordResetEmail(customer.email, code)
      .catch(() => {});

    return {
      message:
        'Si el correo está registrado, se enviará un código de verificación.',
    };
  }

  // ═══════════════════════════════════════════════
  // PUBLIC: Reenviar Código de Verificación
  // ═══════════════════════════════════════════════
  async resendVerificationCode(email: string, isGuest: boolean = false) {
    let customerId: string | undefined = undefined;

    // Si NO es un invitado, hacemos las validaciones normales de cuenta recurrente
    if (!isGuest) {
      const customer = await this.prisma.customer.findUnique({
        where: { email },
      });

      // Anti-enumeración de usuarios por seguridad
      if (!customer) {
        return {
          message: 'Si el correo está registrado, se enviará un nuevo código.',
        };
      }

      if (customer.emailVerifiedAt) {
        throw new BadRequestException(
          'Este correo electrónico ya se encuentra verificado',
        );
      }

      customerId = customer.id;
    }

    // Generar nuevo código de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    // Usamos una transacción para limpiar códigos viejos y crear el nuevo
    await this.prisma.$transaction(async (tx) => {
      // Eliminar códigos anteriores para este cliente si existieran
      await tx.customerVerificationCode.deleteMany({
        where: { email },
      });

      // Crear el nuevo código activo
      await tx.customerVerificationCode.create({
        data: {
          code,
          email,
          expiresAt,
          ...(customerId ? { customerId } : {}),
        },
      });
    });

    // Envío asíncrono no bloqueante (fire-and-forget)
    // El error se loggea internamente en MailService, nunca bloquea la respuesta HTTP
    this.mailService
      .sendVerificationEmail(email, code, isGuest)
      .catch(() => {});

    return {
      message: 'Si el correo está registrado, se enviará un nuevo código.',
    };
  }

  // ═══════════════════════════════════════════════
  // PUBLIC: Direcciones del cliente
  // ═══════════════════════════════════════════════

  async getMyAddresses(customerId: string) {
    return this.prisma.customerAddress.findMany({
      where: { customerId },
      include: {
        department: { select: { id: true, name: true } },
        province: { select: { id: true, name: true } },
        district: { select: { id: true, name: true } },
      },
      orderBy: [{ isDefault: 'desc' }, { createdAt: 'desc' }],
    });
  }

  async createAddress(customerId: string, dto: CreateCustomerAddressDto) {
    return this.prisma.$transaction(async (tx) => {
      // Si se marca como default, quitar el default de las demás
      if (dto.isDefault) {
        await tx.customerAddress.updateMany({
          where: { customerId, isDefault: true },
          data: { isDefault: false },
        });
      }

      return tx.customerAddress.create({
        data: {
          customerId,
          alias: dto.alias,
          recipientName: dto.recipientName,
          phone: dto.phone,
          addressLine: dto.addressLine,
          reference: dto.reference,
          latitude: dto.latitude,
          longitude: dto.longitude,
          isDefault: dto.isDefault ?? false,
          departmentId: dto.departmentId,
          provinceId: dto.provinceId,
          districtId: dto.districtId,
        },
        include: {
          department: { select: { id: true, name: true } },
          province: { select: { id: true, name: true } },
          district: { select: { id: true, name: true } },
        },
      });
    });
  }

  async updateAddress(
    customerId: string,
    addressId: string,
    dto: UpdateCustomerAddressDto,
  ) {
    // Verificar que la dirección pertenece al cliente
    const address = await this.prisma.customerAddress.findFirst({
      where: { id: addressId, customerId },
    });

    if (!address) throw new NotFoundException('Dirección no encontrada');

    return this.prisma.$transaction(async (tx) => {
      // Si se marca como default, quitar el default de las demás
      if (dto.isDefault) {
        await tx.customerAddress.updateMany({
          where: { customerId, isDefault: true, id: { not: addressId } },
          data: { isDefault: false },
        });
      }

      const { departmentId, provinceId, districtId, ...rest } = dto;

      return tx.customerAddress.update({
        where: { id: addressId },
        data: {
          ...rest,
          ...(departmentId && {
            department: { connect: { id: departmentId } },
          }),
          ...(provinceId && { province: { connect: { id: provinceId } } }),
          ...(districtId && { district: { connect: { id: districtId } } }),
        },
        include: {
          department: { select: { id: true, name: true } },
          province: { select: { id: true, name: true } },
          district: { select: { id: true, name: true } },
        },
      });
    });
  }

  async deleteAddress(customerId: string, addressId: string) {
    const address = await this.prisma.customerAddress.findFirst({
      where: { id: addressId, customerId },
    });

    if (!address) throw new NotFoundException('Dirección no encontrada');

    await this.prisma.customerAddress.delete({ where: { id: addressId } });
    return { message: 'Dirección eliminada correctamente' };
  }

  async setDefaultAddress(customerId: string, addressId: string) {
    const address = await this.prisma.customerAddress.findFirst({
      where: { id: addressId, customerId },
    });

    if (!address) throw new NotFoundException('Dirección no encontrada');

    return this.prisma.$transaction(async (tx) => {
      await tx.customerAddress.updateMany({
        where: { customerId, isDefault: true },
        data: { isDefault: false },
      });
      return tx.customerAddress.update({
        where: { id: addressId },
        data: { isDefault: true },
      });
    });
  }

  // ═══════════════════════════════════════════════
  // PUBLIC: Solicitudes de devolución (cliente)
  // ═══════════════════════════════════════════════

  // async createRefundRequest(
  //   customerId: string,
  //   orderId: string,
  //   dto: CreateRefundRequestDto,
  // ) {
  //   // 1. Verificar que el pedido pertenece al cliente y está en estado devolvible
  //   const order = await this.prisma.order.findFirst({
  //     where: { id: orderId, customerId },
  //     include: {
  //       items: { include: { refundRequests: true, refundItems: true } },
  //       refundRequests: { where: { status: 'pending' } },
  //     },
  //   });

  //   if (!order) throw new NotFoundException('Pedido no encontrado');

  //   const refundableStatuses = ['delivered', 'paid', 'processing', 'shipped'];
  //   if (!refundableStatuses.includes(order.status)) {
  //     throw new BadRequestException(
  //       `No se puede solicitar devolución para un pedido en estado "${order.status}"`,
  //     );
  //   }

  //   // 2. No permitir más de una solicitud pendiente por pedido
  //   if (order.refundRequests.length > 0) {
  //     throw new ConflictException(
  //       'Ya existe una solicitud de devolución pendiente para este pedido',
  //     );
  //   }

  //   // 3. Validar cada ítem solicitado
  //   for (const reqItem of dto.items) {
  //     const orderItem = order.items.find((i) => i.id === reqItem.orderItemId);

  //     if (!orderItem) {
  //       throw new NotFoundException(
  //         `Ítem "${reqItem.orderItemId}" no pertenece a este pedido`,
  //       );
  //     }

  //     // Unidades ya devueltas (OrderRefund aprobados)
  //     const alreadyRefunded = orderItem.refundItems.reduce(
  //       (s, r) => s + r.quantity,
  //       0,
  //     );
  //     // Unidades ya en solicitud pendiente
  //     const inRequest = orderItem.refundRequests.reduce(
  //       (s, r) => s + r.quantity,
  //       0,
  //     );
  //     const available = orderItem.quantity - alreadyRefunded - inRequest;

  //     if (reqItem.quantity > available) {
  //       throw new BadRequestException(
  //         `Ítem "${orderItem.productName}": solo ${available} unidades disponibles para devolución`,
  //       );
  //     }
  //   }

  //   // 4. Crear la solicitud
  //   return this.prisma.refundRequest.create({
  //     data: {
  //       orderId,
  //       customerId,
  //       reason: dto.reason,
  //       items: {
  //         create: dto.items.map((i) => ({
  //           orderItemId: i.orderItemId,
  //           quantity: i.quantity,
  //           reason: i.reason,
  //         })),
  //       },
  //     },
  //     include: { items: true },
  //   });
  // }

  // async getMyRefundRequests(customerId: string, orderId?: string) {
  //   return this.prisma.refundRequest.findMany({
  //     where: { customerId, ...(orderId && { orderId }) },
  //     include: {
  //       items: {
  //         include: {
  //           orderItem: {
  //             select: {
  //               productName: true,
  //               productSku: true,
  //               productImageUrl: true,
  //             },
  //           },
  //         },
  //       },
  //       order: { select: { orderNumber: true, status: true } },
  //     },
  //     orderBy: { createdAt: 'desc' },
  //   });
  // }

  // async cancelRefundRequest(customerId: string, requestId: string) {
  //   const request = await this.prisma.refundRequest.findFirst({
  //     where: { id: requestId, customerId, status: 'pending' },
  //   });

  //   if (!request) {
  //     throw new NotFoundException(
  //       'Solicitud no encontrada o no puede ser cancelada',
  //     );
  //   }

  //   return this.prisma.refundRequest.update({
  //     where: { id: requestId },
  //     data: { status: 'cancelled' },
  //   });
  // }

  // ═══════════════════════════════════════════════
  // CMS: Revisar solicitudes de devolución (admin)
  // ═══════════════════════════════════════════════

  // async getAllRefundRequests(status?: string) {
  //   return this.prisma.refundRequest.findMany({
  //     where: { ...(status && { status: status as RefundRequestStatus }) },
  //     include: {
  //       customer: {
  //         select: { id: true, firstName: true, lastName: true, email: true },
  //       },
  //       order: {
  //         select: { id: true, orderNumber: true, status: true, total: true },
  //       },
  //       items: {
  //         include: {
  //           orderItem: {
  //             select: {
  //               productName: true,
  //               productSku: true,
  //               productImageUrl: true,
  //               unitPrice: true,
  //               quantity: true,
  //               refundItems: true,
  //             },
  //           },
  //         },
  //       },
  //       reviewedBy: { select: { id: true, name: true } },
  //     },
  //     orderBy: { createdAt: 'desc' },
  //   });
  // }

  // async reviewRefundRequest(
  //   requestId: string,
  //   dto: ReviewRefundRequestDto,
  //   adminId: string,
  // ) {
  //   const request = await this.prisma.refundRequest.findFirst({
  //     where: { id: requestId, status: 'pending' },
  //     include: {
  //       items: {
  //         include: {
  //           orderItem: {
  //             include: { refundItems: true },
  //           },
  //         },
  //       },
  //       order: true,
  //     },
  //   });

  //   if (!request) {
  //     throw new NotFoundException('Solicitud no encontrada o ya fue revisada');
  //   }

  //   if (dto.action === 'rejected') {
  //     return this.prisma.refundRequest.update({
  //       where: { id: requestId },
  //       data: {
  //         status: 'rejected',
  //         reviewedById: adminId,
  //         reviewNote: dto.reviewNote,
  //         reviewedAt: new Date(),
  //       },
  //     });
  //   }

  //   // ── Aprobación: crear OrderRefund automáticamente ─────────────
  //   return this.prisma.$transaction(async (tx) => {
  //     // Actualizar solicitud
  //     await tx.refundRequest.update({
  //       where: { id: requestId },
  //       data: {
  //         status: 'approved',
  //         reviewedById: adminId,
  //         reviewNote: dto.reviewNote,
  //         reviewedAt: new Date(),
  //       },
  //     });

  //     // Calcular monto por ítem y determinar si es total o parcial
  //     let totalRefunded = 0;
  //     const refundItemsData: {
  //       orderItemId: string;
  //       quantity: number;
  //       refundAmount: number;
  //     }[] = [];

  //     for (const reqItem of request.items) {
  //       const oi = reqItem.orderItem;
  //       const netUnit =
  //         (Number(oi.lineTotal) - Number(oi.discountAmount ?? 0)) / oi.quantity;
  //       const amount = netUnit * reqItem.quantity;
  //       totalRefunded += amount;
  //       refundItemsData.push({
  //         orderItemId: oi.id,
  //         quantity: reqItem.quantity,
  //         refundAmount: amount,
  //       });

  //       // Restaurar stock
  //       await tx.product.update({
  //         where: { id: oi.productId },
  //         data: { stock: { increment: reqItem.quantity } },
  //       });
  //     }

  //     // ¿Es devolución total? (todos los ítems del pedido cubiertos)
  //     const allOrderItems = await tx.orderItem.findMany({
  //       where: { orderId: request.orderId },
  //       include: { refundItems: true },
  //     });

  //     const isFullRefund = allOrderItems.every((item) => {
  //       const previouslyRefunded = item.refundItems.reduce(
  //         (s, r) => s + r.quantity,
  //         0,
  //       );
  //       const thisRefund =
  //         refundItemsData.find((r) => r.orderItemId === item.id)?.quantity ?? 0;
  //       return previouslyRefunded + thisRefund >= item.quantity;
  //     });

  //     // Número de devolución
  //     const refundCount = await tx.orderRefund.count({
  //       where: { orderId: request.orderId },
  //     });
  //     const refundNumber = `REF-${request.order.orderNumber}-${(refundCount + 1).toString().padStart(2, '0')}`;

  //     // Crear OrderRefund
  //     const refund = await tx.orderRefund.create({
  //       data: {
  //         orderId: request.orderId,
  //         refundNumber,
  //         reason: request.reason,
  //         totalRefunded,
  //         isPartial: !isFullRefund,
  //         approvedById: adminId,
  //         approvedAt: new Date(),
  //         items: { create: refundItemsData },
  //       },
  //       include: { items: true },
  //     });

  //     // Si es devolución total, marcar el pedido
  //     if (isFullRefund) {
  //       await tx.order.update({
  //         where: { id: request.orderId },
  //         data: { status: 'refunded', refundedAt: new Date() },
  //       });
  //       await tx.orderStatusHistory.create({
  //         data: {
  //           orderId: request.orderId,
  //           fromStatus: request.order.status,
  //           toStatus: 'refunded',
  //           changedById: adminId,
  //           comment: `Devolución total aprobada. Ref: ${refundNumber}`,
  //         },
  //       });
  //     } else {
  //       await tx.orderStatusHistory.create({
  //         data: {
  //           orderId: request.orderId,
  //           fromStatus: request.order.status,
  //           toStatus: request.order.status,
  //           changedById: adminId,
  //           comment: `Devolución parcial aprobada. Ref: ${refundNumber}. Monto: S/. ${totalRefunded.toFixed(2)}`,
  //         },
  //       });
  //     }

  //     return refund;
  //   });
  // }
}
