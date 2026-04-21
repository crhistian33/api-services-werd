import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { Prisma, OrderStatus } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import { CreateOrderDto, UpdateOrderDto, QueryOrderDto } from '../dto';
import { PaginatedResult } from '../../../common/interfaces/pagination.interface';
import { ImageRecordService } from 'src/modules/images/services/image-record.service';

// ─────────────────────────────────────────────────────────────
// TIPOS
// ─────────────────────────────────────────────────────────────

type OrderEntity = Prisma.OrderGetPayload<{
  include: {
    customer: {
      select: { id: true; firstName: true; lastName: true; email: true };
    };
    shippingAddress: true;
    shippingRate: {
      include: {
        zone: { select: { id: true; name: true } };
      };
      select: {
        id: true;
        name: true;
        price: true;
        estimatedMin: true;
        estimatedMax: true;
        estimatedUnit: true;
      };
    };
    paymentMethod: { select: { id: true; name: true; code: true; type: true } };
    coupon: {
      select: { id: true; code: true; discountType: true; discountValue: true };
    };
    items: {
      include: {
        product: { select: { id: true; name: true; slug: true } };
        promotion: { select: { id: true; name: true } };
        refundItems: true;
      };
    };
    transactions: { orderBy: { createdAt: 'desc' } };
    statusHistory: { orderBy: { createdAt: 'desc' } };
    refunds: true;
  };
}>;

// ─────────────────────────────────────────────────────────────
// INCLUDES
// ─────────────────────────────────────────────────────────────

const ORDER_INCLUDE = {
  customer: {
    select: { id: true, firstName: true, lastName: true, email: true },
  },
  shippingAddress: {
    include: {
      department: { select: { id: true, name: true } },
      province: { select: { id: true, name: true } },
      district: { select: { id: true, name: true } },
    },
  },
  shippingRate: {
    include: {
      zone: { select: { id: true, name: true } },
    },
  },
  paymentMethod: { select: { id: true, name: true, code: true, type: true } },
  coupon: {
    select: { id: true, code: true, discountType: true, discountValue: true },
  },
  items: {
    include: {
      product: { select: { id: true, name: true, slug: true } },
      promotion: { select: { id: true, name: true } },
      refundItems: true,
    },
  },
  transactions: { orderBy: { createdAt: 'desc' as const } },
  statusHistory: { orderBy: { createdAt: 'desc' as const } },
  refunds: true,
  // Para saber si hay solicitudes pendientes en la vista de detalle
  // refundRequests: {
  //   select: { id: true, status: true },
  // },
} as const;

// ─────────────────────────────────────────────────────────────
// MÁQUINA DE ESTADOS VÁLIDOS
// ─────────────────────────────────────────────────────────────
//
// Define qué transiciones de estado son permitidas.
// Esto evita que un pedido "delivered" vuelva a "processing", etc.
//
const VALID_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  pending_payment: ['paid', 'cancelled'],
  paid: ['processing', 'cancelled'],
  processing: ['shipped', 'cancelled'],
  shipped: ['delivered'],
  delivered: ['cancelled'], // devolución total post-entrega
  cancelled: [], // estado terminal
  refunded: [], // estado terminal
};

// ─────────────────────────────────────────────────────────────
// HELPERS DE STOCK
// ─────────────────────────────────────────────────────────────

/**
 * DECISIÓN DE DISEÑO — ¿Cuándo decrementar el stock?
 *
 * Opción A — Al confirmar el pedido (pending_payment):
 *   ✅ Evita overselling: dos usuarios no pueden comprar el último stock
 *   ❌ Un pedido no pagado bloquea stock temporalmente
 *   → Requiere liberar stock si se cancela o expira el pago
 *
 * Opción B — Al pagar (status = paid):
 *   ✅ Solo consume stock real (pagado)
 *   ❌ Riesgo de overselling en alta concurrencia
 *   → Requiere validar stock disponible ANTES de crear el pedido
 *
 * DECISIÓN ADOPTADA: Opción A (al crear el pedido) con liberación automática
 * al cancelar. Es el estándar de ecommerce de baja-media concurrencia (Shopify,
 * WooCommerce). Usamos decrement/increment con `prisma.$transaction` para
 * garantizar atomicidad.
 */

// ─────────────────────────────────────────────────────────────
// SERVICE
// ─────────────────────────────────────────────────────────────

@Injectable()
export class OrdersService extends BaseService<
  OrderEntity,
  CreateOrderDto,
  UpdateOrderDto,
  Prisma.OrderWhereInput,
  Prisma.OrderOrderByWithRelationInput
> {
  protected override nameField = 'orderNumber';

  constructor(
    prisma: PrismaService,
    private readonly imageRecordService: ImageRecordService,
  ) {
    super(prisma, 'order');
  }

  // ═══════════════════════════════════════════════════════════
  // CONSULTAS
  // ═══════════════════════════════════════════════════════════

  async findAllOrders(
    query: QueryOrderDto,
  ): Promise<PaginatedResult<OrderEntity>> {
    const { search, status, customerId, paymentMethodId, page, limit } = query;

    return this.findAll({
      where: {
        ...(status !== undefined && { status }),
        ...(customerId !== undefined && { customerId }),
        ...(paymentMethodId !== undefined && { paymentMethodId }),
        ...(search && {
          OR: [
            { orderNumber: { contains: search, mode: 'insensitive' } },
            { guestEmail: { contains: search, mode: 'insensitive' } },
            { guestName: { contains: search, mode: 'insensitive' } },
            {
              customer: {
                OR: [
                  { firstName: { contains: search, mode: 'insensitive' } },
                  { lastName: { contains: search, mode: 'insensitive' } },
                  { email: { contains: search, mode: 'insensitive' } },
                ],
              },
            },
          ],
        }),
      },
      orderBy: { placedAt: 'desc' },
      include: ORDER_INCLUDE,
      pagination: { page, limit },
    });
  }

  async findOrderById(id: string) {
    const order = await this.findOne(id, ORDER_INCLUDE);
    if (!order) return null;

    // Mapeamos los items para inyectar la URL de la variante 'thumb'
    const itemsWithThumbnails = await Promise.all(
      order.items.map(async (item) => {
        // Obtenemos todas las imágenes confirmadas del producto
        const productImages = await this.imageRecordService.getEntityImages(
          'PRODUCT', // Viene de ImageEntityType.PRODUCT
          item.productId,
        );

        // Buscamos la imagen con rol 'main' (definida en tu products.service.ts)
        const mainImage = productImages.find((img) => img.imageRole === 'main');

        return {
          ...item,
          // Si existe la variante thumb (120px) en el metadata, la usamos.
          // Si no, intentamos con la URL base o el campo productImageUrl original.
          productImageUrl:
            mainImage?.variants?.thumb ||
            mainImage?.url ||
            item.productImageUrl,
        };
      }),
    );

    return {
      ...order,
      items: itemsWithThumbnails,
    };
  }

  async findOrderByNumber(orderNumber: string): Promise<OrderEntity> {
    const record = (await this.prisma.order.findUnique({
      where: { orderNumber },
      include: ORDER_INCLUDE,
    })) as OrderEntity | null;

    if (!record) {
      throw new NotFoundException(
        `Pedido con número "${orderNumber}" no encontrado`,
      );
    }

    return record;
  }

  // ─── Detalle de pedido validando ownership del cliente ─────
  async findMyOrderById(id: string, customerId: string): Promise<OrderEntity> {
    const record = (await this.prisma.order.findFirst({
      where: { id, customerId },
      include: ORDER_INCLUDE,
    })) as OrderEntity | null;

    if (!record) {
      throw new NotFoundException(`Pedido con id "${id}" no encontrado`);
    }

    return record;
  }

  // ─── Historial de pedidos del cliente autenticado ──────────
  async findMyOrders(customerId: string, query: QueryOrderDto) {
    return this.findAll({
      where: { customerId, ...(query.status && { status: query.status }) },
      orderBy: { placedAt: 'desc' },
      include: {
        items: {
          include: {
            product: { select: { id: true, name: true, slug: true } },
            refundItems: true,
          },
        },
        shippingAddress: true,
        shippingRate: {
          include: { zone: { select: { id: true, name: true } } },
        },
        paymentMethod: {
          select: { id: true, name: true, code: true, type: true },
        },
        refunds: true,
      },
      pagination: { page: query.page, limit: query.limit },
    });
  }

  // ═══════════════════════════════════════════════════════════
  // CREAR PEDIDO
  // ═══════════════════════════════════════════════════════════

  async createOrder(dto: CreateOrderDto) {
    const {
      shippingAddressId,
      shippingAddress: shippingAddressDto,
      saveAddressToProfile,
      items,
      couponId,
      paymentMethodId,
      shippingRateId,
      customerId,
      guestEmail,
      guestName,
      guestPhone,
      notes,
      ipAddress,
    } = dto;

    // Validar exclusividad customer/guest
    if (customerId && guestEmail) {
      throw new BadRequestException(
        'Un pedido no puede tener a la vez customerId y guestEmail',
      );
    }
    if (!customerId && !guestEmail) {
      throw new BadRequestException(
        'Debe proporcionar customerId (cliente registrado) o guestEmail (guest)',
      );
    }

    return this.prisma.$transaction(async (tx) => {
      // ── 1. Resolver snapshot de dirección de envío ──────────
      const addressData = await this.resolveShippingAddress(
        tx,
        shippingAddressId,
        shippingAddressDto,
      );

      // ── 2. Resolver tarifa de envío ─────────────────────────
      //
      // shippingRateId es el único campo necesario en el DTO.
      // La zona se deriva automáticamente desde rate.zoneId,
      // por lo que no se persiste shippingZoneId en la orden.
      //
      let resolvedRateId: string | undefined;
      let shippingAmount = 0;

      if (shippingRateId) {
        const rate = await tx.shippingRate.findUnique({
          where: { id: shippingRateId },
        });
        if (!rate || !rate.isActive) {
          throw new BadRequestException(
            'La tarifa de envío seleccionada no existe o está inactiva',
          );
        }
        shippingAmount = Number(rate.price);
        resolvedRateId = rate.id;
      }

      // ── 3. Validar y procesar ítems ─────────────────────────
      const { orderItems, subtotal, promotionDiscount } =
        await this.processItems(tx, items);

      // ── 4. Resolver cupón ───────────────────────────────────
      const { couponDiscount } = await this.resolveCoupon(
        tx,
        couponId,
        customerId,
        subtotal,
      );

      // ── 5. Calcular totales ─────────────────────────────────
      //
      // Fórmula: total = subtotal - promotionDiscount - couponDiscount + shippingAmount + taxAmount
      //
      // taxAmount: en Peru el IGV (18%) generalmente va incluido en el precio
      // de venta al público, por lo que taxAmount = 0 si los precios son con IGV.
      // Si los precios son sin IGV, calcular aquí.
      const taxAmount = 0; // Ajustar según modelo de negocio
      const total =
        subtotal -
        promotionDiscount -
        couponDiscount +
        shippingAmount +
        taxAmount;

      if (total < 0) {
        throw new BadRequestException(
          'El total del pedido no puede ser negativo',
        );
      }

      // ── 6. Generar número de pedido ─────────────────────────
      const orderNumber = await this.generateOrderNumber(tx);

      // ── 7. Crear pedido atómico (orden + dirección + ítems) ─
      const createdOrder = await tx.order.create({
        data: {
          orderNumber,
          status: 'pending_payment',
          // Cliente o guest
          ...(customerId && { customer: { connect: { id: customerId } } }),
          guestEmail,
          guestName,
          guestPhone,
          // Totales
          subtotal,
          discountAmount: promotionDiscount,
          couponDiscount,
          shippingAmount,
          taxAmount,
          total,
          // Relaciones
          paymentMethod: { connect: { id: paymentMethodId } },
          ...(resolvedRateId && {
            shippingRate: { connect: { id: resolvedRateId } },
          }),
          ...(couponId && { coupon: { connect: { id: couponId } } }),
          // Metadatos
          notes,
          ipAddress,
          // Snapshot de dirección
          shippingAddress: { create: addressData },
          // Ítems
          items: { create: orderItems },
        },
        include: ORDER_INCLUDE,
      });

      // ── 8. Decrementar stock (al crear el pedido) ───────────
      //
      // Ver comentario DECISIÓN DE DISEÑO arriba.
      // Usamos decrement atómico por ítem dentro de la misma transacción.
      //
      await this.decrementStock(tx, orderItems);

      // ── 9. Guardar dirección en perfil del cliente ──────────
      //
      // Solo cuando:
      //   - Es cliente registrado (customerId presente)
      //   - Vino dirección inline (no shippingAddressId — esa ya existe en el perfil)
      //   - El cliente marcó saveAddressToProfile=true en el checkout
      //
      if (customerId && shippingAddressDto && saveAddressToProfile) {
        await tx.customerAddress.create({
          data: {
            customerId,
            recipientName: shippingAddressDto.recipientName,
            phone: shippingAddressDto.phone ?? null,
            addressLine: shippingAddressDto.addressLine,
            reference: shippingAddressDto.reference ?? null,
            latitude: shippingAddressDto.latitude ?? null,
            longitude: shippingAddressDto.longitude ?? null,
            departmentId: shippingAddressDto.departmentId,
            provinceId: shippingAddressDto.provinceId,
            districtId: shippingAddressDto.districtId,
            isDefault: false,
          },
        });
      }

      // ── 10. Registrar uso de cupón ──────────────────────────
      if (couponId && couponDiscount > 0) {
        await tx.couponUsage.create({
          data: {
            couponId,
            orderId: createdOrder.id,
            customerId: customerId ?? null,
            guestEmail: guestEmail ?? null,
            discountApplied: couponDiscount,
          },
        });

        // Incrementar contador de uso
        await tx.coupon.update({
          where: { id: couponId },
          data: { timesUsed: { increment: 1 } },
        });
      }

      // ── 11. Registro inicial en historial de estados ────────
      await tx.orderStatusHistory.create({
        data: {
          orderId: createdOrder.id,
          fromStatus: null,
          toStatus: 'pending_payment',
          comment: 'Pedido creado',
        },
      });

      return createdOrder;
    });
  }

  // ═══════════════════════════════════════════════════════════
  // ACTUALIZAR ESTADO
  // ═══════════════════════════════════════════════════════════

  async updateOrderStatus(
    id: string,
    dto: UpdateOrderDto,
    adminId?: string,
  ): Promise<OrderEntity> {
    const { status, adminNotes, statusComment } = dto;

    return this.prisma.$transaction(async (tx) => {
      const currentOrder = (await tx.order.findFirst({
        where: { id },
        select: { id: true, status: true, items: true },
      })) as {
        id: string;
        status: OrderStatus;
        items: { productId: string; quantity: number }[];
      } | null;

      if (!currentOrder) {
        throw new NotFoundException(`Pedido con id "${id}" no encontrado`);
      }

      // ── Validar transición de estado ─────────────────────────
      if (status && status !== currentOrder.status) {
        const allowed = VALID_TRANSITIONS[currentOrder.status];
        if (!allowed.includes(status)) {
          throw new BadRequestException(
            `Transición de estado inválida: "${currentOrder.status}" → "${status}". ` +
              `Transiciones permitidas: [${allowed.join(', ') || 'ninguna'}]`,
          );
        }

        // ── Liberar stock si se cancela ───────────────────────
        if (status === 'cancelled') {
          await this.incrementStock(tx, currentOrder.items);
        }

        // ── Registrar en historial ────────────────────────────
        await tx.orderStatusHistory.create({
          data: {
            orderId: id,
            fromStatus: currentOrder.status,
            toStatus: status,
            changedById: adminId ?? null,
            comment: statusComment ?? `Estado actualizado a "${status}"`,
          },
        });

        // ── Actualizar timestamps según el nuevo estado ───────
        const dateUpdates: Prisma.OrderUpdateInput = {};
        if (status === 'paid') dateUpdates.paidAt = new Date();
        if (status === 'shipped') dateUpdates.shippedAt = new Date();
        if (status === 'delivered') dateUpdates.deliveredAt = new Date();
        if (status === 'cancelled') dateUpdates.cancelledAt = new Date();

        return tx.order.update({
          where: { id },
          data: { status, adminNotes, ...dateUpdates },
          include: ORDER_INCLUDE,
        }) as Promise<OrderEntity>;
      }

      // Sin cambio de estado, solo actualizar notas admin
      return tx.order.update({
        where: { id },
        data: { adminNotes },
        include: ORDER_INCLUDE,
      }) as Promise<OrderEntity>;
    });
  }

  // ═══════════════════════════════════════════════════════════
  // WEBHOOK DE PAGO
  // ═══════════════════════════════════════════════════════════
  //
  // Llamado desde el módulo de pagos (Culqi, PagoEfectivo, etc.)
  // cuando la pasarela notifica el resultado del pago.
  //
  async handlePaymentConfirmed(
    orderId: string,
    gatewayTransactionId: string,
    gatewayResponse: Record<string, unknown>,
  ): Promise<void> {
    await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.findFirst({
        where: { id: orderId },
        select: { id: true, status: true },
      });

      if (!order) {
        throw new NotFoundException(`Pedido "${orderId}" no encontrado`);
      }

      // Idempotencia: si ya está pagado, ignorar (el webhook puede llegar duplicado)
      if (order.status === 'paid') return;

      if (order.status !== 'pending_payment') {
        throw new ConflictException(
          `No se puede marcar como pagado un pedido en estado "${order.status}"`,
        );
      }

      // Actualizar transacción de pago
      await tx.orderPaymentTransaction.updateMany({
        where: { orderId, status: 'pending' },
        data: {
          status: 'completed',
          gatewayTransactionId,
          gatewayResponse: gatewayResponse as Prisma.InputJsonValue,
          paidAt: new Date(),
        },
      });

      // Transicionar pedido a "paid"
      await tx.order.update({
        where: { id: orderId },
        data: { status: 'paid', paidAt: new Date() },
      });

      await tx.orderStatusHistory.create({
        data: {
          orderId,
          fromStatus: 'pending_payment',
          toStatus: 'paid',
          comment: `Pago confirmado. Gateway ID: ${gatewayTransactionId}`,
        },
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // HELPERS PRIVADOS
  // ═══════════════════════════════════════════════════════════

  // ── Resolver snapshot de dirección ─────────────────────────
  private async resolveShippingAddress(
    tx: Prisma.TransactionClient,
    shippingAddressId?: string,
    shippingAddressDto?: CreateOrderDto['shippingAddress'],
  ): Promise<Prisma.OrderAddressCreateWithoutOrderInput> {
    if (shippingAddressId) {
      const customerAddr = await tx.customerAddress.findUnique({
        where: { id: shippingAddressId },
      });

      if (!customerAddr) {
        throw new NotFoundException(
          `Dirección del cliente con ID "${shippingAddressId}" no encontrada`,
        );
      }

      return {
        alias: customerAddr.alias,
        recipientName: customerAddr.recipientName,
        phone: customerAddr.phone,
        addressLine: customerAddr.addressLine,
        reference: customerAddr.reference,
        latitude: customerAddr.latitude,
        longitude: customerAddr.longitude,
        department: { connect: { id: customerAddr.departmentId } },
        province: { connect: { id: customerAddr.provinceId } },
        district: { connect: { id: customerAddr.districtId } },
      };
    }

    if (shippingAddressDto) {
      const { departmentId, provinceId, districtId, ...rest } =
        shippingAddressDto;
      return {
        ...rest,
        department: { connect: { id: departmentId } },
        province: { connect: { id: provinceId } },
        district: { connect: { id: districtId } },
      };
    }

    throw new BadRequestException(
      'Debe proporcionar shippingAddressId o un objeto shippingAddress completo',
    );
  }

  // ── Procesar ítems del carrito ──────────────────────────────
  private async processItems(
    tx: Prisma.TransactionClient,
    items: CreateOrderDto['items'],
  ) {
    let subtotal = 0;
    let promotionDiscount = 0;

    const orderItems = await Promise.all(
      items.map(async (item) => {
        const product = await tx.product.findFirst({
          where: { id: item.productId, deletedAt: null, status: 'active' },
          include: { price: true },
        });

        if (!product || !product.price) {
          throw new NotFoundException(
            `Producto con ID "${item.productId}" no disponible`,
          );
        }

        // Validar stock suficiente
        if (product.stock < item.quantity) {
          throw new BadRequestException(
            `Stock insuficiente para "${product.name}". ` +
              `Disponible: ${product.stock}, solicitado: ${item.quantity}`,
          );
        }

        const unitPrice = Number(product.price.price);
        const unitCost = product.price.cost
          ? Number(product.price.cost)
          : undefined;

        // Aplicar descuento de promoción si viene
        let itemDiscount = 0;
        if (item.promotionId) {
          const promo = await tx.promotion.findFirst({
            where: {
              id: item.promotionId,
              isActive: true,
              deletedAt: null,
              startsAt: { lte: new Date() },
              OR: [{ endsAt: null }, { endsAt: { gte: new Date() } }],
            },
          });

          if (promo) {
            if (promo.discountType === 'percentage') {
              itemDiscount =
                ((unitPrice * Number(promo.discountValue)) / 100) *
                item.quantity;
            } else if (promo.discountType === 'fixed_amount') {
              itemDiscount = Math.min(
                Number(promo.discountValue) * item.quantity,
                unitPrice * item.quantity,
              );
            }
          }
        }

        const lineTotal = unitPrice * item.quantity - itemDiscount;
        subtotal += unitPrice * item.quantity;
        promotionDiscount += itemDiscount;

        return {
          productId: product.id,
          productName: product.name,
          productSku: product.sku,
          productImageUrl: undefined as string | undefined, // Resolver imagen principal si aplica
          quantity: item.quantity,
          unitPrice,
          unitCost,
          discountAmount: itemDiscount,
          lineTotal,
          promotionId: item.promotionId ?? null,
        };
      }),
    );

    return { orderItems, subtotal, promotionDiscount };
  }

  // ── Resolver cupón ─────────────────────────────────────────
  private async resolveCoupon(
    tx: Prisma.TransactionClient,
    couponId: string | undefined,
    customerId: string | undefined,
    subtotal: number,
  ): Promise<{ couponDiscount: number }> {
    if (!couponId) return { couponDiscount: 0 };

    const coupon = await tx.coupon.findFirst({
      where: {
        id: couponId,
        isActive: true,
        deletedAt: null,
        OR: [{ expiresAt: null }, { expiresAt: { gte: new Date() } }],
        AND: [{ OR: [{ startsAt: null }, { startsAt: { lte: new Date() } }] }],
      },
      include: {
        usages: customerId ? { where: { customerId } } : false,
      },
    });

    if (!coupon) {
      throw new BadRequestException('Cupón inválido o expirado');
    }

    if (subtotal < Number(coupon.minOrderAmount)) {
      throw new BadRequestException(
        `El pedido no alcanza el monto mínimo para usar este cupón (S/. ${coupon.minOrderAmount.toFixed(2)})`,
      );
    }

    if (coupon.usageLimit && coupon.timesUsed >= coupon.usageLimit) {
      throw new BadRequestException('El cupón ha alcanzado su límite de usos');
    }

    // Verificar límite por usuario
    if (customerId && coupon.usages) {
      const userUsages = (
        coupon.usages as { customerId: string | null }[]
      ).filter((u) => u.customerId === customerId).length;
      if (userUsages >= coupon.usageLimitPerUser) {
        throw new BadRequestException(
          'Ya has usado este cupón el número máximo de veces permitido',
        );
      }
    }

    let couponDiscount = 0;
    if (coupon.discountType === 'percentage') {
      couponDiscount = (subtotal * Number(coupon.discountValue)) / 100;
      if (coupon.maxDiscountAmount) {
        couponDiscount = Math.min(
          couponDiscount,
          Number(coupon.maxDiscountAmount),
        );
      }
    } else if (coupon.discountType === 'fixed_amount') {
      couponDiscount = Math.min(Number(coupon.discountValue), subtotal);
    }
    // free_shipping se maneja a nivel de shippingAmount externamente

    return { couponDiscount };
  }

  // ── Decrementar stock (al crear pedido) ─────────────────────
  private async decrementStock(
    tx: Prisma.TransactionClient,
    items: { productId: string; quantity: number }[],
  ): Promise<void> {
    await Promise.all(
      items.map(({ productId, quantity }) =>
        tx.product.update({
          where: { id: productId },
          data: { stock: { decrement: quantity } },
        }),
      ),
    );
  }

  // ── Incrementar stock (al cancelar pedido) ──────────────────
  private async incrementStock(
    tx: Prisma.TransactionClient,
    items: { productId: string; quantity: number }[],
  ): Promise<void> {
    await Promise.all(
      items.map(({ productId, quantity }) =>
        tx.product.update({
          where: { id: productId },
          data: { stock: { increment: quantity } },
        }),
      ),
    );
  }

  // ── Determinar si es devolución total ───────────────────────
  private isFullRefund(
    order: {
      items: {
        id: string;
        quantity: number;
        refundItems: { quantity: number }[];
      }[];
    },
    newRefundItems: { orderItemId: string; quantity: number }[],
  ): boolean {
    return order.items.every((item) => {
      const previouslyRefunded = item.refundItems.reduce(
        (sum, ri) => sum + ri.quantity,
        0,
      );
      const newRefund =
        newRefundItems.find((ri) => ri.orderItemId === item.id)?.quantity ?? 0;
      return previouslyRefunded + newRefund >= item.quantity;
    });
  }

  // ── Generar número de pedido ────────────────────────────────
  private async generateOrderNumber(
    tx: Prisma.TransactionClient,
  ): Promise<string> {
    const prefix = 'ORD';
    const date = new Date();
    const datePart =
      date.getFullYear().toString() +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      date.getDate().toString().padStart(2, '0');

    const lastOrder = await tx.order.findFirst({
      where: { orderNumber: { startsWith: `${prefix}-${datePart}-` } },
      orderBy: { orderNumber: 'desc' },
      select: { orderNumber: true },
    });

    let nextSequence = 1;
    if (lastOrder) {
      const parts = lastOrder.orderNumber.split('-');
      const lastSeq = parseInt(parts[2], 10);
      if (!isNaN(lastSeq)) nextSequence = lastSeq + 1;
    }

    return `${prefix}-${datePart}-${nextSequence.toString().padStart(4, '0')}`;
  }

  // ── Generar número de devolución ────────────────────────────
  private async generateRefundNumber(
    tx: Prisma.TransactionClient,
    orderId: string,
  ): Promise<string> {
    const order = await tx.order.findFirst({
      where: { id: orderId },
      select: { orderNumber: true, _count: { select: { refunds: true } } },
    });

    const seq = ((order?._count.refunds ?? 0) + 1).toString().padStart(2, '0');
    return `REF-${order?.orderNumber}-${seq}`;
  }
}
