import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SpecItemDto, FeatureItemDto } from '../dto/specs-product.dto';

type PrismaDatabaseClient =
  | PrismaService
  | PrismaClient
  | Omit<
      PrismaClient,
      '$on' | '$connect' | '$disconnect' | '$use' | '$extends'
    >;

@Injectable()
export class ProductSpecsService {
  constructor(private readonly prisma: PrismaService) {}

  // ═══════════════════════════════════════════════
  // setSpecs — reemplaza todas las specs del producto
  // Borra las anteriores e inserta las nuevas en una
  // sola transacción — nunca deja el producto sin specs
  // a mitad de la operación
  // ═══════════════════════════════════════════════
  async setSpecs(
    productId: string,
    specs: SpecItemDto[],
    prisma?: PrismaDatabaseClient,
  ): Promise<void> {
    const db = prisma ?? this.prisma;
    await db.$transaction([
      db.productSpec.deleteMany({
        where: { productId },
      }),
      db.productSpec.createMany({
        data: specs.map((s, i) => ({
          productId,
          specKey: s.specKey.trim(),
          specValue: s.specValue.trim(),
          sortOrder: s.sortOrder ?? i,
        })),
      }),
    ]);
  }

  // ═══════════════════════════════════════════════
  // setFeatures — reemplaza todas las features del producto
  // Misma lógica que setSpecs — transacción atómica
  // ═══════════════════════════════════════════════
  async setFeatures(
    productId: string,
    features: FeatureItemDto[],
    prisma?: PrismaDatabaseClient,
  ): Promise<void> {
    const db = prisma ?? this.prisma;
    await db.$transaction([
      db.productFeature.deleteMany({
        where: { productId },
      }),
      db.productFeature.createMany({
        data: features.map((f, i) => ({
          productId,
          feature: f.feature.trim(),
          sortOrder: f.sortOrder ?? i,
        })),
      }),
    ]);
  }

  // ═══════════════════════════════════════════════
  // getSpecs — specs ordenadas por sortOrder
  // ═══════════════════════════════════════════════
  async getSpecs(productId: string) {
    return this.prisma.productSpec.findMany({
      where: { productId },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        specKey: true,
        specValue: true,
        sortOrder: true,
      },
    });
  }

  // ═══════════════════════════════════════════════
  // getFeatures — features ordenadas por sortOrder
  // ═══════════════════════════════════════════════
  async getFeatures(productId: string) {
    return this.prisma.productFeature.findMany({
      where: { productId },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        feature: true,
        sortOrder: true,
      },
    });
  }

  // ═══════════════════════════════════════════════
  // getSpecsAndFeatures — ambos en una sola llamada
  // Para findProductById — evita dos queries separadas
  // ═══════════════════════════════════════════════
  async getSpecsAndFeatures(productId: string) {
    const [specs, features] = await Promise.all([
      this.getSpecs(productId),
      this.getFeatures(productId),
    ]);
    return { specs, features };
  }

  // ═══════════════════════════════════════════════
  // clearAll — elimina specs y features del producto
  // Se llama desde removeProduct antes de borrar
  // el producto (aunque el Cascade lo haría igual,
  // esto lo hace explícito y predecible)
  // ═══════════════════════════════════════════════
  async clearAll(productId: string): Promise<void> {
    await this.prisma.$transaction([
      this.prisma.productSpec.deleteMany({ where: { productId } }),
      this.prisma.productFeature.deleteMany({ where: { productId } }),
    ]);
  }
}
