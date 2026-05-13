import { Injectable, BadRequestException } from '@nestjs/common';
import {
  ImageRecordService,
  MovedImageData,
} from '../../../modules/images/services/image-record.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { MailService } from '../../mail/service/mail.service';
import { UpdateLogisticsDto } from '../dto';
import { MarkDeliveredDto } from '../dto/mark-delivered.dto';
import {
  ImageEntityType,
  Prisma,
  PaymentMethodType,
} from 'generated/prisma/client';

// ── Constantes de imágenes ──────────────────────────────────
const LOGISTICS_ENTITY_TYPE = ImageEntityType.ORDER_LOGISTICS;
const LOGISTICS_IMAGE_ROLE = 'shipping_evidence';

const DELIVERY_ENTITY_TYPE = ImageEntityType.ORDER_DELIVERY;
const DELIVERY_IMAGE_ROLE = 'delivery_evidence';

@Injectable()
export class OrderLogisticsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
    private readonly mailService: MailService,
  ) {}

  // ═══════════════════════════════════════════════════════════
  // updateToShipped — processing → shipped
  //
  // Patrón de 3 pasos (imágenes → disco → BD atómica):
  //   1. Valida registros temporales (solo lectura, sin cambios)
  //   2. Mueve archivos al disco final (fuera de la transacción)
  //   3. Transacción: actualiza Order + OrderLogistics + confirma imágenes
  //   Si la transacción falla: elimina los archivos ya movidos
  // ═══════════════════════════════════════════════════════════

  async updateToShipped(
    orderId: string,
    dto: UpdateLogisticsDto,
    adminId: string,
  ) {
    // Validación previa de estado
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        paymentMethod: { select: { type: true, name: true } },
        customer: { select: { firstName: true, email: true } },
      },
    });

    if (!order) throw new BadRequestException('Pedido no encontrado');
    if (order.status !== 'processing') {
      throw new BadRequestException(
        `El pedido debe estar en proceso para enviarlo. Estado actual: "${order.status}"`,
      );
    }

    // Paso 1: Valida registros temporales
    const tempRecords = dto.tempImageIds?.length
      ? await Promise.all(
          dto.tempImageIds.map((id) =>
            this.imageRecord.findTempRecord(
              id,
              LOGISTICS_ENTITY_TYPE,
              LOGISTICS_IMAGE_ROLE,
            ),
          ),
        )
      : [];

    // Paso 2: Mover archivos al disco
    const movedList: MovedImageData[] = [];
    try {
      for (let i = 0; i < tempRecords.length; i++) {
        const moved = await this.imageRecord.moveToFinal(
          tempRecords[i],
          LOGISTICS_ENTITY_TYPE,
          '',
          LOGISTICS_IMAGE_ROLE,
          i,
        );
        movedList.push(moved);
      }
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }

    // Paso 3: Transacción de BD
    try {
      const logistics = await this.prisma.$transaction(async (tx) => {
        // Actualizar estado de la orden
        await tx.order.update({
          where: { id: orderId },
          data: { status: 'shipped', shippedAt: new Date() },
        });

        // Preparar datos logísticos según tipo de entrega
        const logisticsData: Prisma.OrderLogisticsUpdateInput = {
          deliveryType: dto.deliveryType,
          actualShippingCost: dto.actualShippingCost,
          internalTransportCost: dto.internalTransportCost,
          dispatchedBy: adminId ? { connect: { id: adminId } } : undefined,
          dispatchedAt: new Date(),
        };

        if (dto.deliveryType === 'COURIER') {
          logisticsData.courierName = dto.courierName;
          logisticsData.trackingNumber = dto.trackingNumber;
        } else {
          // Limpiar campos de courier si cambió el tipo
          logisticsData.courierName = null;
          logisticsData.trackingNumber = null;
        }

        const logistics = await tx.orderLogistics.update({
          where: { orderId },
          data: logisticsData,
        });

        // Confirmar imágenes de evidencia de despacho
        for (const moved of movedList) {
          await this.imageRecord.confirmInDb(
            { ...moved, entityId: logistics.id },
            tx,
          );
        }

        // Registrar en historial de estados
        await tx.orderStatusHistory.create({
          data: {
            orderId,
            fromStatus: 'processing',
            toStatus: 'shipped',
            changedById: adminId,
            comment:
              dto.deliveryType === 'COURIER'
                ? `Enviado vía ${dto.courierName}. Tracking: ${dto.trackingNumber}.`
                : `Enviado con motorizado local. Costo: S/ ${dto.internalTransportCost ?? 0}.`,
          },
        });

        return logistics;
      });

      // Email al cliente (fuera de la transacción)
      const recipientEmail = order.customer?.email ?? order.guestEmail;
      const recipientName =
        order.customer?.firstName ?? order.guestName ?? 'Cliente';

      if (recipientEmail) {
        try {
          await this.mailService.sendOrderShipped(recipientEmail, {
            customerName: recipientName,
            orderNumber: order.orderNumber,
            deliveryType: dto.deliveryType,
            trackingNumber: dto.trackingNumber,
            courierName: dto.courierName,
          });
        } catch (emailErr) {
          console.error(
            '[OrderLogisticsService] Error enviando email de envío:',
            emailErr,
          );
        }
      }

      return logistics;
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }
  }

  // ═══════════════════════════════════════════════════════════
  // markAsDelivered — shipped → delivered
  //
  // Marca el pedido como entregado. Registra evidencia fotográfica
  // del delivery. Si el pedido es de contraentrega, registra
  // también el pago recibido en la OrderPaymentTransaction.
  //
  // Patrón: imágenes → disco → BD atómica
  // ═══════════════════════════════════════════════════════════

  async markAsDelivered(
    orderId: string,
    dto: MarkDeliveredDto,
    adminId: string,
  ) {
    // Validación previa de estado
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        paymentMethod: { select: { type: true, name: true } },
        customer: { select: { firstName: true, email: true } },
        logistics: { select: { id: true } },
      },
    });

    if (!order) throw new BadRequestException('Pedido no encontrado');
    if (order.status !== 'shipped') {
      throw new BadRequestException(
        `El pedido debe estar en "shipped" para marcarlo como entregado. Estado actual: "${order.status}"`,
      );
    }

    if (!order.logistics) {
      throw new BadRequestException(
        'El pedido no tiene logística registrada. Completa el paso de envío primero.',
      );
    }

    const isCashOnDelivery =
      order.paymentMethod.type === PaymentMethodType.cash_on_delivery;

    // Validar monto cobrado si es contraentrega
    if (isCashOnDelivery && dto.cashCollectedAmount === undefined) {
      throw new BadRequestException(
        'Para pedidos con pago contraentrega, debes registrar el monto cobrado al cliente.',
      );
    }

    // Paso 1: Validar imágenes de evidencia de entrega
    const tempRecords = dto.tempImageIds?.length
      ? await Promise.all(
          dto.tempImageIds.map((id) =>
            this.imageRecord.findTempRecord(
              id,
              DELIVERY_ENTITY_TYPE,
              DELIVERY_IMAGE_ROLE,
            ),
          ),
        )
      : [];

    // Paso 2: Mover archivos al disco
    const movedList: MovedImageData[] = [];
    try {
      for (let i = 0; i < tempRecords.length; i++) {
        const moved = await this.imageRecord.moveToFinal(
          tempRecords[i],
          DELIVERY_ENTITY_TYPE,
          orderId, // entityId conocido: usamos el orderId como referencia
          DELIVERY_IMAGE_ROLE,
          i,
        );
        movedList.push(moved);
      }
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }

    // Paso 3: Transacción de BD
    const now = new Date();
    try {
      await this.prisma.$transaction(async (tx) => {
        // Actualizar el pedido a delivered
        await tx.order.update({
          where: { id: orderId },
          data: {
            status: 'delivered',
            deliveredAt: now,
            // Para contraentrega: el pago se confirma al entregar
            ...(isCashOnDelivery && { paidAt: now }),
          },
        });

        // Actualizar logística con datos de entrega
        await tx.orderLogistics.update({
          where: { orderId },
          data: {
            deliveredAt: now,
            deliveredById: adminId,
            deliveryEvidenceNote: dto.deliveryEvidenceNote,
          },
        });

        // Confirmar imágenes de evidencia vinculadas al logistics.id
        for (const moved of movedList) {
          await this.imageRecord.confirmInDb(
            { ...moved, entityId: order.logistics!.id },
            tx,
          );
        }

        // Para contraentrega: crear/actualizar transacción de pago
        if (isCashOnDelivery) {
          const existingTx = await tx.orderPaymentTransaction.findFirst({
            where: { orderId },
          });

          if (existingTx) {
            await tx.orderPaymentTransaction.update({
              where: { id: existingTx.id },
              data: {
                status: 'completed',
                paidAt: now,
                operationNumber: 'CASH_ON_DELIVERY',
                paidAmount: dto.cashCollectedAmount,
              },
            });
          } else {
            await tx.orderPaymentTransaction.create({
              data: {
                orderId,
                paymentMethodId: order.paymentMethodId,
                status: 'completed',
                amount: order.total,
                paidAt: now,
                operationNumber: 'CASH_ON_DELIVERY',
                paidAmount: dto.cashCollectedAmount,
              },
            });
          }
        }

        // Registrar en historial de estados
        await tx.orderStatusHistory.create({
          data: {
            orderId,
            fromStatus: 'shipped',
            toStatus: 'delivered',
            changedById: adminId,
            comment: isCashOnDelivery
              ? `Pedido entregado y cobrado. Monto contraentrega: S/ ${dto.cashCollectedAmount?.toFixed(2)}. ${dto.deliveryEvidenceNote ?? ''}`
              : `Pedido entregado. ${dto.deliveryEvidenceNote ?? ''}`,
          },
        });
      });

      // Email al cliente (fuera de la transacción)
      const recipientEmail = order.customer?.email ?? order.guestEmail;
      const recipientName =
        order.customer?.firstName ?? order.guestName ?? 'Cliente';

      if (recipientEmail) {
        try {
          await this.mailService.sendOrderDelivered(recipientEmail, {
            customerName: recipientName,
            orderNumber: order.orderNumber,
          });
        } catch (emailErr) {
          console.error(
            '[OrderLogisticsService] Error enviando email de entrega:',
            emailErr,
          );
        }
      }

      return { success: true, orderId, newStatus: 'delivered' };
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }
  }
}
