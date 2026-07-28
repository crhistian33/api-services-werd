import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CartStatus } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class CartExpirationJob {
  private readonly logger = new Logger(CartExpirationJob.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Todos los días a las 3:00 AM: los carritos "active" cuyo expiresAt ya pasó
   * (sin actividad durante CART_TTL_DAYS) se marcan como "abandoned".
   * No se borran: sirven para reportes/recuperación de carritos abandonados.
   */
  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  async markAbandonedCarts(): Promise<void> {
    const result = await this.prisma.cart.updateMany({
      where: { status: CartStatus.active, expiresAt: { lt: new Date() } },
      data: { status: CartStatus.abandoned },
    });
    if (result.count > 0) {
      this.logger.log(`${result.count} carrito(s) marcados como abandonados`);
    }
  }

  /**
   * Red de seguridad, cada hora: si un carrito quedó en "checkout_in_progress"
   * por más de 2 horas y su Order asociada ya no está pending_payment (o no existe),
   * se libera de vuelta a "active" para que el cliente pueda seguir comprando.
   * No reemplaza la lógica de expiración de pago de Orders: solo evita carritos
   * huérfanos si ese flujo llegara a fallar en avisar al Cart module.
   */
  @Cron(CronExpression.EVERY_HOUR)
  async releaseStaleCheckouts(): Promise<void> {
    const staleThreshold = new Date(Date.now() - 2 * 60 * 60 * 1000); // 2 horas

    const staleCarts = await this.prisma.cart.findMany({
      where: {
        status: CartStatus.checkout_in_progress,
        updatedAt: { lt: staleThreshold },
      },
    });
    if (staleCarts.length === 0) return;

    const orderIds = staleCarts
      .map((c) => c.orderId)
      .filter((id): id is string => !!id);

    const orders = await this.prisma.order.findMany({
      where: { id: { in: orderIds } },
      select: { id: true, status: true },
    });
    const statusByOrderId = new Map(orders.map((o) => [o.id, o.status]));

    for (const cart of staleCarts) {
      const orderStatus = cart.orderId
        ? statusByOrderId.get(cart.orderId)
        : undefined;
      const stillPending = orderStatus === 'pending_payment';

      if (!stillPending) {
        await this.prisma.cart.update({
          where: { id: cart.id },
          data: { status: CartStatus.active, orderId: null },
        });
        this.logger.warn(`Carrito ${cart.id} liberado (checkout atascado)`);
      }
    }
  }
}
