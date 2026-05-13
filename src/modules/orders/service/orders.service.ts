import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import {
  Prisma,
  OrderStatus,
  PaymentMethodType,
  DeliveryType,
  TransactionStatus,
  ProductStatus,
  DiscountType,
} from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import { MailService } from '../../mail/service/mail.service';
import {
  ImageDto,
  ImageRecordService,
} from '../../images/services/image-record.service';
import {
  CreateOrderDto,
  UpdateOrderDto,
  QueryOrderDto,
  CancelOrderDto,
} from '../dto';
import { PaginatedResult } from '../../../common/interfaces/pagination.interface';
import { ConfigService } from '@nestjs/config';
import {
  ORDER_STATUS_LABELS,
  PAYMENT_METHOD_TYPE_LABELS,
  CANCELLATION_REASON_LABELS,
} from '../constants/order-labels.constants';

// ─────────────────────────────────────────────────────────────
// TIPO DE ENTIDAD
// ─────────────────────────────────────────────────────────────

type OrderEntity = Prisma.OrderGetPayload<{
  include: typeof ORDER_INCLUDE;
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
  paymentMethod: {
    select: {
      id: true,
      name: true,
      code: true,
      type: true,
      instructions: true,
    },
  },
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
  claims: {
    include: {
      items: {
        include: {
          orderItem: true,
        },
      },
    },
  },
  refunds: { include: { items: true } },
  logistics: {
    include: {
      deliveredBy: { select: { id: true, name: true } },
      dispatchedBy: { select: { id: true, name: true } },
    },
  },
} as const;

// ─────────────────────────────────────────────────────────────
// MÁQUINA DE ESTADOS VÁLIDOS
// ─────────────────────────────────────────────────────────────

const VALID_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  pending_payment: [OrderStatus.paid, OrderStatus.cancelled],
  paid: [OrderStatus.processing, OrderStatus.cancelled],
  processing: [OrderStatus.shipped, OrderStatus.cancelled],
  shipped: [OrderStatus.delivered],
  delivered: [],
  cancelled: [],
  refunded: [],
};

// ─────────────────────────────────────────────────────────────
// HORAS DE EXPIRACIÓN POR TIPO DE MÉTODO DE PAGO
//
// null = no aplica (confirmación inmediata o no tiene límite)
// Estos son los valores por defecto. Se puede sobreescribir
// con paymentMethod.config.paymentExpireHours
// ─────────────────────────────────────────────────────────────

const DEFAULT_EXPIRY_HOURS: Partial<Record<PaymentMethodType, number | null>> =
  {
    [PaymentMethodType.card]: null, // Pasarela confirma en tiempo real
    [PaymentMethodType.wallet]: 24, // YAPE / PLIN: 24 horas
    [PaymentMethodType.cash_code]: 48, // Transferencia bancaria: 48 horas
    [PaymentMethodType.cash_on_delivery]: null, // Pago al recibir
  };

// ─────────────────────────────────────────────────────────────
// HELPER: calcular paymentExpiresAt
// ─────────────────────────────────────────────────────────────

function resolvePaymentExpiresAt(paymentMethod: {
  type: PaymentMethodType;
  config: Prisma.JsonValue;
}): Date | null {
  // Intentar leer horas del JSON config del PaymentMethod
  const config =
    paymentMethod.config &&
    typeof paymentMethod.config === 'object' &&
    !Array.isArray(paymentMethod.config)
      ? (paymentMethod.config as Record<string, unknown>)
      : {};

  const configHours =
    typeof config.paymentExpireHours === 'number'
      ? config.paymentExpireHours
      : null;

  const hours = configHours ?? DEFAULT_EXPIRY_HOURS[paymentMethod.type] ?? null;

  if (hours === null) return null;
  return new Date(Date.now() + hours * 60 * 60 * 1000);
}

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
    private readonly mailService: MailService,
    private readonly config: ConfigService,
  ) {
    super(prisma, 'order');
  }

  // ── URL base del storefront (desde .env) ────────────────────
  // .env: STORE_FRONTEND_URL=https://tienda.werd.com
  private get storeFrontendUrl(): string {
    return this.config.get<string>('STORE_FRONTEND_URL', 'https://werd.com');
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

    const claimProductIds = order.claims.flatMap((c) =>
      c.items.map((i) => i.orderItem.productId),
    );

    const productIds = [
      ...new Set([...order.items.map((i) => i.productId), ...claimProductIds]),
    ];
    const allImages = await this.imageRecordService.getEntitiesImages(
      'PRODUCT',
      productIds,
    );

    const imagesByProductId = new Map<string, ImageDto[]>();
    for (const img of allImages) {
      const list = imagesByProductId.get(img.entityId) ?? [];
      list.push(img);
      imagesByProductId.set(img.entityId, list);
    }

    const itemsWithThumbnails = order.items.map((item) => {
      const images = imagesByProductId.get(item.productId) ?? [];
      const main = images.find((img) => img.imageRole === 'main');
      return {
        ...item,
        productImageUrl:
          main?.variants?.thumb ?? main?.url ?? item.productImageUrl,
      };
    });

    // --- Imágenes de Logística ---
    let logisticsWithImages = order.logistics;
    let logisticsImages: ImageDto[] = []; // Tipar según tu ImageRecord type
    let deliveryImages: ImageDto[] = []; // Tipar según tu ImageRecord type

    if (!logisticsWithImages) {
      logisticsWithImages = await this.prisma.orderLogistics.findUnique({
        where: { orderId: order.id },
        include: {
          deliveredBy: { select: { id: true, name: true } },
          dispatchedBy: { select: { id: true, name: true } },
        },
      });
    }

    if (logisticsWithImages) {
      // Buscar imágenes por varios IDs para mayor seguridad (conveción variada en servicios)
      logisticsImages = await this.imageRecordService.getEntitiesImages(
        'ORDER_LOGISTICS',
        [order.id, logisticsWithImages.id],
      );
      deliveryImages = await this.imageRecordService.getEntitiesImages(
        'ORDER_DELIVERY',
        [order.id, logisticsWithImages.id],
      );
    }

    const logistics = {
      ...(logisticsWithImages || {}),
      images: [...logisticsImages, ...deliveryImages],
    };

    // --- Imágenes de Reclamaciones ---
    const claimIds = order.claims.map((c) => c.id);
    const claimImages = claimIds.length
      ? await this.imageRecordService.getEntitiesImages('ORDER_CLAIM', claimIds)
      : [];

    const refundIds = order.refunds.map((r) => r.id);
    const refundImages = refundIds.length
      ? await this.imageRecordService.getEntitiesImages(
          'ORDER_REFUND',
          refundIds,
        )
      : [];

    const claims = order.claims.map((claim) => ({
      ...claim,
      images: claimImages.filter((img) => img.entityId === claim.id),
      items: claim.items.map((item) => {
        const images = imagesByProductId.get(item.orderItem.productId) ?? [];
        const main = images.find((img) => img.imageRole === 'main');
        return {
          ...item,
          orderItem: {
            ...item.orderItem,
            productImageUrl:
              main?.variants?.thumb ??
              main?.url ??
              item.orderItem.productImageUrl,
          },
        };
      }),
    }));

    const refunds = order.refunds.map((refund) => ({
      ...refund,
      images: refundImages.filter((img) => img.entityId === refund.id),
    }));

    return {
      ...order,
      items: itemsWithThumbnails,
      logistics,
      claims,
      refunds,
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
  //
  // Flujo:
  //   1. Validar customer/guest
  //   2. Resolver dirección de envío (snapshot)
  //   3. Resolver tarifa de envío
  //   4. Validar y procesar ítems (stock, precio, promociones)
  //   5. Resolver cupón
  //   6. Calcular totales
  //   7. Obtener método de pago → calcular paymentExpiresAt
  //   8. Determinar status inicial (COD nace como "paid")
  //   9. Crear pedido + ítems + dirección en transacción atómica
  //  10. Decrementar stock
  //  11. Guardar dirección en perfil si aplica
  //  12. Registrar uso de cupón
  //  13. Crear historial de estado inicial
  //  14. Crear OrderLogistics vacía
  //  15. Crear OrderPaymentTransaction inicial
  //  16. Enviar emails
  // ═══════════════════════════════════════════════════════════

  async createOrder(dto: CreateOrderDto, adminId?: string) {
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

    const createdOrder = await this.prisma.$transaction(async (tx) => {
      // ── 3. Validar y procesar ítems ─────────────────────────
      const { orderItems, subtotal, promotionDiscount } =
        await this.processItems(tx, items);

      // ── 1. Resolver snapshot de dirección de envío ──────────
      const addressData = await this.resolveShippingAddress(
        tx,
        shippingAddressId,
        shippingAddressDto,
      );

      // ── 2. Resolver tarifa de envío ─────────────────────────
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
        // ✅ Aplicar envío gratis si el subtotal supera el umbral
        const exceedsFreeThreshold =
          rate.freeShippingThreshold !== null &&
          subtotal >= Number(rate.freeShippingThreshold);

        shippingAmount = exceedsFreeThreshold ? 0 : Number(rate.price);
        resolvedRateId = rate.id;
      }

      // ── 4. Resolver cupón ───────────────────────────────────
      const { couponDiscount } = await this.resolveCoupon(
        tx,
        couponId,
        customerId,
        subtotal,
        shippingAmount,
      );

      // ── 5. Calcular totales ─────────────────────────────────
      const taxAmount = 0; // IGV incluido en precio de venta
      const total = Math.max(
        0,
        subtotal -
          promotionDiscount -
          couponDiscount +
          shippingAmount +
          taxAmount,
      );

      // ── 6. Generar número de pedido ─────────────────────────
      const orderNumber = await this.generateOrderNumber(tx);

      // ── 7. Obtener método de pago → calcular expiración ─────
      const paymentMethod = await tx.paymentMethod.findFirst({
        where: {
          id: paymentMethodId,
          isActive: true,
        },
        select: {
          id: true,
          type: true,
          config: true,
          name: true,
          instructions: true,
        },
      });

      if (!paymentMethod) {
        throw new BadRequestException(
          'El método de pago seleccionado no existe o no está disponible',
        );
      }

      const isCashOnDelivery =
        paymentMethod.type === PaymentMethodType.cash_on_delivery;
      const paymentExpiresAt = resolvePaymentExpiresAt(paymentMethod);

      // ── 8. Determinar status inicial ────────────────────────
      // COD: nace directamente como "paid" porque el pago se garantiza
      // al momento de la entrega. No necesita confirmación previa.
      // const initialStatus: OrderStatus = isCashOnDelivery
      //   ? 'paid'
      //   : 'pending_payment';
      const initialPaidAt = null; //isCashOnDelivery ? new Date() : null;

      // ── 9. Crear pedido atómico ─────────────────────────────
      const order = await tx.order.create({
        data: {
          orderNumber,
          status: OrderStatus.pending_payment,
          paidAt: initialPaidAt,
          paymentExpiresAt,
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

      // ── 10. Decrementar stock ───────────────────────────────
      await this.decrementStock(tx, orderItems);

      // ── 11. Guardar dirección en perfil del cliente ─────────
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

      // ── 12. Registrar uso de cupón ──────────────────────────
      if (couponId && couponDiscount > 0) {
        await tx.couponUsage.create({
          data: {
            couponId,
            orderId: order.id,
            customerId: customerId ?? null,
            guestEmail: guestEmail ?? null,
            discountApplied: couponDiscount,
          },
        });
        await tx.coupon.update({
          where: { id: couponId },
          data: { timesUsed: { increment: 1 } },
        });
      }

      // ── 13. Historial de estado inicial ─────────────────────
      // changedById: si viene de un admin (CMS) se registra; si viene
      // del storefront (cliente) será null porque el cliente no es AdminUser.
      await tx.orderStatusHistory.create({
        data: {
          orderId: order.id,
          fromStatus: null,
          toStatus: OrderStatus.pending_payment,
          changedById: adminId ?? null,
          comment: isCashOnDelivery
            ? 'Pedido creado con pago contra entrega'
            : `Pedido creado. ${ORDER_STATUS_LABELS.pending_payment}.`,
        },
      });

      // ── 14. Crear OrderLogistics vacía ──────────────────────
      // Se necesita un registro de logística desde el inicio para
      // poder actualizarlo en el paso de "shipped".

      let defaultDeliveryType: DeliveryType = DeliveryType.COURIER; // fallback seguro

      if (resolvedRateId) {
        const shippingRate = await tx.shippingRate.findUnique({
          where: { id: resolvedRateId },
          include: {
            zone: { select: { areas: { select: { deliveryType: true } } } },
          },
        });

        const areas = shippingRate?.zone?.areas ?? [];
        const uniqueTypes = [...new Set(areas.map((a) => a.deliveryType))];

        // Solo asignar si todas las áreas coinciden en el mismo tipo
        if (uniqueTypes.length === 1) {
          defaultDeliveryType = uniqueTypes[0];
        }
      }

      await tx.orderLogistics.create({
        data: {
          orderId: order.id,
          deliveryType: defaultDeliveryType, // Se actualiza al enviar
          estimatedShipping: shippingAmount,
        },
      });

      // ── 15. Crear transacción de pago inicial ───────────────
      await tx.orderPaymentTransaction.create({
        data: {
          orderId: order.id,
          paymentMethodId,
          status: isCashOnDelivery
            ? TransactionStatus.pending
            : TransactionStatus.pending,
          amount: total,
        },
      });

      return order;
    });

    // ── 16. Emails post-transacción ─────────────────────────
    // (Fuera de la transacción — un error de email no revierte el pedido)
    await this.sendOrderCreationEmails(createdOrder).catch((err) =>
      console.error('[OrdersService] Error enviando emails de creación:', err),
    );

    return createdOrder;
  }

  // ═══════════════════════════════════════════════════════════
  // markAsProcessing — paid → processing
  //
  // El admin confirma que el pedido está siendo preparado.
  // No requiere datos adicionales — solo confirmación simple.
  // ═══════════════════════════════════════════════════════════

  async markAsProcessing(
    orderId: string,
    adminId: string,
  ): Promise<{ success: boolean; orderId: string; newStatus: string }> {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      //select: { id: true, status: true, orderNumber: true },
      include: { paymentMethod: true },
    });

    if (!order) throw new NotFoundException('Pedido no encontrado');

    // const allowed = VALID_TRANSITIONS[order.status];
    // if (!allowed.includes('processing')) {
    //   throw new BadRequestException(
    //     `No es posible iniciar la preparación desde "${order.status}". ` +
    //       `El pedido debe estar en estado "paid".`,
    //   );
    // }

    const isPaid = order.status === OrderStatus.paid;
    const isCod =
      order.paymentMethod?.type === PaymentMethodType.cash_on_delivery;

    if (!isPaid && !isCod) {
      throw new BadRequestException(
        'La orden debe estar pagada para iniciar la preparación, a menos que sea Pago Contraentrega.',
      );
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.order.update({
        where: { id: orderId },
        data: { status: OrderStatus.processing },
      });

      await tx.orderStatusHistory.create({
        data: {
          orderId,
          fromStatus: order.status,
          toStatus: OrderStatus.processing,
          changedById: adminId,
          comment: 'Pedido en preparación.',
        },
      });
    });

    return { success: true, orderId, newStatus: OrderStatus.processing };
  }

  // ═══════════════════════════════════════════════════════════
  // cancelOrder — cancelación directa por el admin
  //
  // Disponible desde: pending_payment, paid, processing
  // BLOQUEADO desde: shipped, delivered
  // (Para shipped/delivered → flujo de reclamos)
  // ═══════════════════════════════════════════════════════════

  async cancelOrder(
    orderId: string,
    dto: CancelOrderDto,
    adminId: string,
  ): Promise<{ success: boolean; orderId: string; newStatus: string }> {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        items: { select: { productId: true, quantity: true } },
        customer: { select: { firstName: true, email: true } },
        paymentMethod: { select: { type: true } },
      },
    });

    if (!order) throw new NotFoundException('Pedido no encontrado');

    // Bloquear cancelación si ya fue enviado o entregado
    if (
      order.status === OrderStatus.shipped ||
      order.status === OrderStatus.delivered
    ) {
      throw new BadRequestException(
        `No es posible cancelar un pedido en estado "${ORDER_STATUS_LABELS[order.status]}". ` +
          `El pedido ya fue enviado o entregado. Si el cliente necesita devolver ` +
          `el producto, debe solicitar un reclamo de devolución.`,
      );
    }

    // Validar transición
    const allowed = VALID_TRANSITIONS[order.status];
    if (!allowed.includes(OrderStatus.cancelled)) {
      throw new BadRequestException(
        `No es posible cancelar un pedido en estado "${ORDER_STATUS_LABELS[order.status]}".`,
      );
    }

    // ✅ COD: el cliente nunca pagó realmente
    const wasPaid =
      (order.status === OrderStatus.paid ||
        order.status === OrderStatus.processing ||
        !!order.paidAt) &&
      order.paymentMethod?.type !== PaymentMethodType.cash_on_delivery;

    await this.prisma.$transaction(async (tx) => {
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.cancelled,
          cancelledAt: new Date(),
          ...(dto.adminNotes && { adminNotes: dto.adminNotes }),
        },
      });

      await this.incrementStock(tx, order.items);

      // ✅ Revertir uso del cupón si existe
      if (order.couponId) {
        await tx.couponUsage.deleteMany({ where: { orderId } });
        await tx.coupon.update({
          where: { id: order.couponId },
          data: { timesUsed: { decrement: 1 } },
        });
      }

      await tx.orderPaymentTransaction.updateMany({
        where: { orderId, status: TransactionStatus.pending },
        data: { status: TransactionStatus.failed },
      });

      const mappedReason = CANCELLATION_REASON_LABELS[dto.reason] || dto.reason;
      const historyComment = wasPaid
        ? `Cancelado por administrador. Motivo: ${mappedReason}. El cliente pagó — el reembolso debe gestionarse mediante el flujo de reclamos.`
        : `Cancelado por administrador. Motivo: ${mappedReason}.`;

      await tx.orderStatusHistory.create({
        data: {
          orderId,
          fromStatus: order.status,
          toStatus: OrderStatus.cancelled,
          changedById: adminId,
          comment: historyComment,
        },
      });
    });

    // Email al cliente
    const recipientEmail = order.customer?.email ?? order.guestEmail;
    const recipientName =
      order.customer?.firstName ?? order.guestName ?? 'Cliente';

    if (recipientEmail) {
      try {
        // ✅ Obtener SiteConfig
        const siteConfig = await this.prisma.siteConfig.findFirst({
          select: {
            supportEmail: true,
            whatsappNumber: true,
            phonePrimary: true,
          },
        });

        // ✅ Traducir motivo interno a mensaje amigable
        const friendlyReason = this.getFriendlyCancellationReason(
          dto.reason,
          dto.reasonDetail,
        );

        // ✅ Pasar contexto completo
        await this.mailService.sendOrderCancelledByAdmin(recipientEmail, {
          customerName: recipientName,
          orderNumber: order.orderNumber,
          cancellationReason: friendlyReason,
          refundPending: wasPaid,
          supportWhatsapp:
            siteConfig?.whatsappNumber || siteConfig?.phonePrimary || undefined,
          supportEmail: siteConfig?.supportEmail || undefined,
        });
      } catch (err) {
        console.error(
          '[OrdersService] Error enviando email de cancelación:',
          err,
        );
      }
    }

    return { success: true, orderId, newStatus: OrderStatus.cancelled };
  }

  // ═══════════════════════════════════════════════════════════
  // updateOrderStatus — actualización genérica de estado
  //
  // Usado para transiciones básicas y actualización de adminNotes.
  // Para flujos específicos (confirm-payment, mark-processing, cancel)
  // usar los métodos dedicados que incluyen lógica de negocio extra.
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

      if (status && status !== currentOrder.status) {
        const allowed = VALID_TRANSITIONS[currentOrder.status];
        if (!allowed.includes(status)) {
          throw new BadRequestException(
            `Transición inválida: "${currentOrder.status}" → "${status}". ` +
              `Permitidas: [${allowed.join(', ') || 'ninguna'}]`,
          );
        }

        if (status === OrderStatus.cancelled) {
          await this.incrementStock(tx, currentOrder.items);
        }

        await tx.orderStatusHistory.create({
          data: {
            orderId: id,
            fromStatus: currentOrder.status,
            toStatus: status,
            changedById: adminId ?? null,
            comment:
              statusComment ??
              `Estado actualizado a "${ORDER_STATUS_LABELS[status] || status}"`,
          },
        });

        const dateUpdates: Prisma.OrderUpdateInput = {};
        if (status === OrderStatus.paid) dateUpdates.paidAt = new Date();
        if (status === OrderStatus.shipped) dateUpdates.shippedAt = new Date();
        if (status === OrderStatus.delivered)
          dateUpdates.deliveredAt = new Date();
        if (status === OrderStatus.cancelled)
          dateUpdates.cancelledAt = new Date();

        return tx.order.update({
          where: { id },
          data: { status, adminNotes, ...dateUpdates },
          include: ORDER_INCLUDE,
        }) as Promise<OrderEntity>;
      }

      return tx.order.update({
        where: { id },
        data: { adminNotes },
        include: ORDER_INCLUDE,
      }) as Promise<OrderEntity>;
    });
  }

  // ═══════════════════════════════════════════════════════════
  // handlePaymentConfirmed — webhook de pasarela de pago (Culqi, etc.)
  //
  // El frontend envía el token de Culqi al backend, el backend
  // llama a la API de Culqi para confirmar el cargo y luego
  // invoca este método para actualizar el estado del pedido.
  // ═══════════════════════════════════════════════════════════

  // orders.service.ts

  async handlePaymentConfirmed(
    orderId: string,
    gatewayTransactionId: string,
    gatewayResponse: Record<string, unknown>,
  ): Promise<void> {
    const updatedOrder = await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.findFirst({
        where: { id: orderId },
        include: {
          customer: { select: { firstName: true, email: true } },
          items: true,
          paymentMethod: { select: { name: true } },
        },
      });

      if (!order)
        throw new NotFoundException(`Pedido "${orderId}" no encontrado`);

      // Idempotencia: webhook puede llegar duplicado
      if (order.status === OrderStatus.paid) return order;

      if (order.status !== OrderStatus.pending_payment) {
        throw new ConflictException(
          `No se puede confirmar el pago de un pedido en estado "${order.status}"`,
        );
      }

      await tx.orderPaymentTransaction.updateMany({
        where: { orderId, status: TransactionStatus.pending },
        data: {
          status: TransactionStatus.completed,
          gatewayTransactionId,
          gatewayResponse: gatewayResponse as Prisma.InputJsonValue,
          paidAt: new Date(),
        },
      });

      await tx.order.update({
        where: { id: orderId },
        data: { status: OrderStatus.paid, paidAt: new Date() },
      });

      await tx.orderStatusHistory.create({
        data: {
          orderId,
          fromStatus: OrderStatus.pending_payment,
          toStatus: OrderStatus.paid,
          comment: `Pago confirmado vía pasarela. ID: ${gatewayTransactionId}`,
        },
      });

      return order;
    });

    // Email al cliente usando el resultado de la transacción
    const recipientEmail =
      updatedOrder.customer?.email ?? updatedOrder.guestEmail;
    const recipientName =
      updatedOrder.customer?.firstName ?? updatedOrder.guestName ?? 'Cliente';

    if (recipientEmail) {
      try {
        await this.mailService.sendOrderConfirmed(recipientEmail, {
          customerName: recipientName,
          orderNumber: updatedOrder.orderNumber,
          placedAt: updatedOrder.placedAt.toLocaleDateString('es-PE'),
          items: updatedOrder.items.map((i) => ({
            productName: i.productName,
            productSku: i.productSku,
            quantity: i.quantity,
            lineTotal: Number(i.lineTotal).toFixed(2),
          })),
          total: Number(updatedOrder.total).toFixed(2),
          trackingUrl: `${this.storeFrontendUrl}/mis-pedidos/${updatedOrder.id}`,
        });
      } catch (err) {
        console.error(
          '[OrdersService] Error enviando email de confirmación de pago:',
          err,
        );
      }
    }
  }

  // ═══════════════════════════════════════════════════════════
  // HELPERS PRIVADOS
  // ═══════════════════════════════════════════════════════════

  // ── Enviar emails al crear el pedido ───────────────────────
  private async sendOrderCreationEmails(
    order: Prisma.OrderGetPayload<{
      include: {
        customer: { select: { firstName: true; email: true } };
        paymentMethod: {
          select: { name: true; type: true; instructions: true };
        };
        items: true;
      };
    }>,
  ): Promise<void> {
    const recipientEmail = order.customer?.email ?? order.guestEmail;
    const recipientName =
      order.customer?.firstName ?? order.guestName ?? 'Cliente';

    if (!recipientEmail) return;

    const paymentMethod = order.paymentMethod;
    const isCashOnDelivery =
      paymentMethod?.type === PaymentMethodType.cash_on_delivery;
    const isCardPayment = paymentMethod?.type === PaymentMethodType.card;

    // Para COD y tarjeta: email de pedido confirmado
    if (isCashOnDelivery || isCardPayment) {
      await this.mailService.sendOrderConfirmed(recipientEmail, {
        customerName: recipientName,
        orderNumber: order.orderNumber,
        placedAt: order.placedAt.toLocaleDateString('es-PE'),
        items: order.items.map((i) => ({
          productName: i.productName,
          productSku: i.productSku,
          quantity: i.quantity,
          lineTotal: Number(i.lineTotal).toFixed(2),
        })),
        total: Number(order.total).toFixed(2),
        trackingUrl: `${this.storeFrontendUrl}/mis-pedidos/${order.id}`,
        isCashOnDelivery,
      });
    } else {
      // Para YAPE/PLIN/transferencia: email de pago pendiente
      const siteConfig = await this.prisma.siteConfig.findFirst({
        select: { whatsappNumber: true },
      });

      await this.mailService.sendOrderPendingPayment(recipientEmail, {
        customerName: recipientName,
        orderNumber: order.orderNumber,
        total: Number(order.total).toFixed(2),
        paymentMethodName: paymentMethod?.name ?? 'Pago manual',
        paymentInstructions: paymentMethod?.instructions ?? undefined,
        whatsappNumber: siteConfig?.whatsappNumber ?? undefined,
        paymentExpiresAt: order.paymentExpiresAt
          ? order.paymentExpiresAt.toLocaleString('es-PE', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : 'Sin fecha límite',
      });
    }

    // Notificación interna a admins (para todos los pedidos pagados o COD)
    const siteConfig = await this.prisma.siteConfig.findFirst({
      select: { storeEmail: true, supportEmail: true },
    });

    const adminEmails = [
      siteConfig?.storeEmail,
      siteConfig?.supportEmail,
    ].filter((e): e is string => Boolean(e));

    if (adminEmails.length > 0) {
      const paymentStatusLabel = isCashOnDelivery
        ? 'Pago contra entrega'
        : isCardPayment
          ? 'Pago con tarjeta (confirmado)'
          : 'Pendiente de confirmación manual';

      const methodLabel =
        PAYMENT_METHOD_TYPE_LABELS[paymentMethod?.type] ||
        paymentMethod?.name ||
        'No especificado';

      await this.mailService.sendOrderNewAdmin(adminEmails, {
        orderNumber: order.orderNumber,
        total: Number(order.total).toFixed(2),
        customerName: recipientName,
        paymentMethod: `${methodLabel} — ${paymentStatusLabel}`,
        items: order.items.map((i) => ({
          productName: i.productName,
          quantity: i.quantity,
          lineTotal: Number(i.lineTotal).toFixed(2),
        })),
      });
    }
  }

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
          `Dirección con ID "${shippingAddressId}" no encontrada`,
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

    const orderItems: {
      productId: string;
      productName: string;
      productSku: string;
      productImageUrl?: string;
      quantity: number;
      unitPrice: number;
      unitCost?: number;
      discountAmount: number;
      lineTotal: number;
      promotionId: string | null;
    }[] = [];
    for (const item of items) {
      const product = await tx.product.findFirst({
        where: {
          id: item.productId,
          deletedAt: null,
          status: ProductStatus.active,
        },
        include: { price: true },
      });

      if (!product || !product.price) {
        throw new NotFoundException(
          `Producto con ID "${item.productId}" no disponible`,
        );
      }

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
          // ✅ Validar que la promoción aplica a este producto/categoría
          if (
            promo.appliesTo === 'product' &&
            !promo.targetIds.includes(product.id)
          ) {
            throw new BadRequestException(
              `La promoción "${promo.name}" no aplica al producto "${product.name}"`,
            );
          }
          if (
            promo.appliesTo === 'category' &&
            !promo.targetIds.includes(product.categoryId)
          ) {
            throw new BadRequestException(
              `La promoción "${promo.name}" no aplica a la categoría del producto "${product.name}"`,
            );
          }
          if (promo.discountType === 'percentage') {
            itemDiscount =
              ((unitPrice * Number(promo.discountValue)) / 100) * item.quantity;
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

      orderItems.push({
        productId: product.id,
        productName: product.name,
        productSku: product.sku,
        productImageUrl: undefined as string | undefined,
        quantity: item.quantity,
        unitPrice,
        unitCost,
        discountAmount: itemDiscount,
        lineTotal,
        promotionId: item.promotionId ?? null,
      });
    }

    return { orderItems, subtotal, promotionDiscount };
  }

  // ── Resolver cupón ─────────────────────────────────────────
  private async resolveCoupon(
    tx: Prisma.TransactionClient,
    couponId: string | undefined,
    customerId: string | undefined,
    subtotal: number,
    shippingAmount: number, // ✅ NUEVO PARÁMETRO
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

    if (!coupon) throw new BadRequestException('Cupón inválido o expirado');

    if (subtotal < Number(coupon.minOrderAmount)) {
      throw new BadRequestException(
        `El pedido no alcanza el monto mínimo para este cupón (S/. ${coupon.minOrderAmount.toFixed(2)})`,
      );
    }

    if (coupon.usageLimit && coupon.timesUsed >= coupon.usageLimit) {
      throw new BadRequestException('El cupón ha alcanzado su límite de usos');
    }

    if (customerId && coupon.usages) {
      const userUsages = (
        coupon.usages as { customerId: string | null }[]
      ).filter((u) => u.customerId === customerId).length;
      if (userUsages >= coupon.usageLimitPerUser) {
        throw new BadRequestException(
          'Ya usaste este cupón el número máximo de veces permitido',
        );
      }
    }

    let couponDiscount = 0;
    if (coupon.discountType === DiscountType.percentage) {
      couponDiscount = (subtotal * Number(coupon.discountValue)) / 100;
      if (coupon.maxDiscountAmount) {
        couponDiscount = Math.min(
          couponDiscount,
          Number(coupon.maxDiscountAmount),
        );
      }
    } else if (coupon.discountType === DiscountType.fixed_amount) {
      couponDiscount = Math.min(Number(coupon.discountValue), subtotal);
    } else if (coupon.discountType === DiscountType.free_shipping) {
      // ✅ El descuento cubre el costo de envío completo
      couponDiscount = shippingAmount;
    }

    return { couponDiscount };
  }

  // ── Decrementar stock (al crear pedido) ─────────────────────
  private async decrementStock(
    tx: Prisma.TransactionClient,
    items: { productId: string; quantity: number }[],
  ): Promise<void> {
    for (const { productId, quantity } of items) {
      const result = await tx.$executeRaw`
      UPDATE products
      SET stock = stock - ${quantity}
      WHERE id = ${productId} AND stock >= ${quantity}
    `;

      if (result === 0) {
        const product = await tx.product.findUnique({
          where: { id: productId },
          select: { name: true },
        });
        throw new ConflictException(
          `Stock insuficiente para "${product?.name}". Intenta nuevamente.`,
        );
      }
    }
  }

  // ── Incrementar stock (al cancelar pedido) ──────────────────
  private async incrementStock(
    tx: Prisma.TransactionClient,
    items: { productId: string; quantity: number }[],
  ): Promise<void> {
    for (const { productId, quantity } of items) {
      await tx.product.update({
        where: { id: productId },
        data: { stock: { increment: quantity } },
      });
    }
  }

  // ── Generar número de pedido ────────────────────────────────
  private async generateOrderNumber(
    tx: Prisma.TransactionClient,
  ): Promise<string> {
    const date = new Date();
    const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;

    const seq = await tx.$queryRaw<[{ lastseq: number }]>`
      INSERT INTO order_sequence (id, "lastSeq")
      VALUES ('global', 1)
      ON CONFLICT (id) DO UPDATE 
      SET "lastSeq" = order_sequence."lastSeq" + 1
      RETURNING "lastSeq" as lastseq
    `;
    return `ORD-${datePart}-${String(seq[0].lastseq).padStart(4, '0')}`;
  }

  private getFriendlyCancellationReason(
    internalReason: string,
    detail?: string,
  ): string {
    const reasonMap: Record<string, string> = {
      customer_request: 'Cancelado a petición del cliente',
      no_payment: 'No se recibió el pago dentro del plazo establecido',
      no_stock: 'Producto fuera de stock',
      fraud: 'Por razones de seguridad, no pudimos procesar tu pedido',
      wrong_address: 'La dirección de envío no es válida o está incompleta',
      damaged_in_warehouse: 'El producto sufrió daños antes del envío',
      other: 'Por razones administrativas',
    };

    let friendlyReason = reasonMap[internalReason] || internalReason;

    if (detail) {
      friendlyReason += ` (${detail})`;
    }

    return friendlyReason;
  }
}
