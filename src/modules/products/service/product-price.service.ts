import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { PrismaDatabaseClient } from '../../../common/services/base.service';

export interface SetPriceInput {
  price: number;
  compareAtPrice?: number;
  cost?: number;
  changedById?: string;
  reason?: string;
}

@Injectable()
export class ProductPriceService {
  constructor(private readonly prisma: PrismaService) {}

  // ═══════════════════════════════════════════════
  // getPrice — precio actual del producto
  // ═══════════════════════════════════════════════
  async getPrice(productId: string) {
    const price = await this.prisma.productPrice.findUnique({
      where: { productId },
    });

    if (!price) {
      throw new NotFoundException(
        `El producto "${productId}" no tiene precio asignado`,
      );
    }

    return price;
  }

  // ═══════════════════════════════════════════════
  // setPrice — crea o actualiza el precio actual
  // y registra el cambio en el historial
  // ═══════════════════════════════════════════════
  async setPrice(
    productId: string,
    input: SetPriceInput,
    prisma?: PrismaDatabaseClient,
  ) {
    const db = prisma ?? this.prisma;
    const { price, compareAtPrice, cost, changedById, reason } = input;

    // Validación de negocio
    if (compareAtPrice != null && compareAtPrice <= price) {
      throw new BadRequestException(
        'El precio tachado debe ser mayor al precio actual',
      );
    }

    // Calcula margen si hay costo: (price - cost) / price
    const marginPct =
      cost != null && price > 0
        ? new Prisma.Decimal((price - cost) / price)
        : null;

    // Upsert atómico — crea si no existe, actualiza si existe
    const productPrice = await db.productPrice.upsert({
      where: { productId },
      create: {
        productId,
        price: new Prisma.Decimal(price),
        compareAtPrice:
          compareAtPrice != null ? new Prisma.Decimal(compareAtPrice) : null,
        cost: cost != null ? new Prisma.Decimal(cost) : null,
      },
      update: {
        price: new Prisma.Decimal(price),
        compareAtPrice:
          compareAtPrice != null ? new Prisma.Decimal(compareAtPrice) : null,
        cost: cost != null ? new Prisma.Decimal(cost) : null,
      },
    });

    // Registra en historial — siempre, sin excepción
    await db.productPriceHistory.create({
      data: {
        productId,
        price: new Prisma.Decimal(price),
        cost: cost != null ? new Prisma.Decimal(cost) : null,
        marginPct,
        changedById: changedById ?? null,
        reason: reason ?? null,
      },
    });

    return productPrice;
  }

  // ═══════════════════════════════════════════════
  // getPriceHistory — historial de cambios de precio
  // ordenado del más reciente al más antiguo
  // ═══════════════════════════════════════════════
  async getPriceHistory(productId: string) {
    return this.prisma.productPriceHistory.findMany({
      where: { productId },
      orderBy: { effectiveFrom: 'desc' },
      select: {
        id: true,
        price: true,
        cost: true,
        marginPct: true,
        reason: true,
        effectiveFrom: true,
        changedBy: {
          select: { id: true, name: true },
        },
      },
    });
  }

  // ═══════════════════════════════════════════════
  // deletePrice — elimina el precio al borrar el producto
  // Normalmente no se llama directamente — el onDelete: Cascade
  // del schema lo maneja automáticamente
  // ═══════════════════════════════════════════════
  async deletePrice(productId: string): Promise<void> {
    await this.prisma.productPrice.deleteMany({
      where: { productId },
    });
  }
}
