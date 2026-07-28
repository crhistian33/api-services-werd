import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CartStatus, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { SyncCartItemDto } from '../dto';

/** Expiración deslizante: cada vez que el carrito se toca, se extiende este TTL. */
const CART_TTL_DAYS = 30;
const PRODUCT_ENTITY_TYPE = 'PRODUCT';
const MAIN_IMAGE_ROLE = 'main';

const CART_ITEM_PRODUCT_SELECT = {
  id: true,
  name: true,
  slug: true,
  sku: true,
  stock: true,
  status: true,
  deletedAt: true,
  price: { select: { price: true } },
  brand: { select: { name: true } },
} as const;

const CART_WITH_ITEMS_INCLUDE = {
  items: {
    include: {
      product: { select: CART_ITEM_PRODUCT_SELECT },
    },
  },
} as const;

type CartWithItems = Prisma.CartGetPayload<{
  include: typeof CART_WITH_ITEMS_INCLUDE;
}>;

/** Reporta al frontend qué ítems del carrito de invitado no se pudieron sincronizar tal cual. */
export interface CartSyncWarning {
  productId: string;
  productName: string | null;
  reason: 'unavailable' | 'out_of_stock' | 'quantity_adjusted';
  requestedQuantity: number;
  availableStock: number;
}

@Injectable()
export class CartService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
  ) {}

  // ═══════════════════════════════════════════════
  // Lectura
  // ═══════════════════════════════════════════════

  async getMyCart(customerId: string) {
    const cart = await this.findActiveCart(customerId);
    if (!cart) return this.emptyResponse();

    const refreshed = await this.refreshPrices(cart);
    return this.toResponse(refreshed);
  }

  // ═══════════════════════════════════════════════
  // Añadir producto
  // ═══════════════════════════════════════════════

  async addItem(customerId: string, productId: string, quantity: number) {
    const product = await this.getSellableProduct(productId);
    const cart = await this.getOrCreateActiveCart(customerId);

    const existing = await this.prisma.cartItem.findUnique({
      where: { cartId_productId: { cartId: cart.id, productId } },
    });

    const desiredQty = (existing?.quantity ?? 0) + quantity;
    this.assertStock(product, desiredQty);

    await this.prisma.cartItem.upsert({
      where: { cartId_productId: { cartId: cart.id, productId } },
      create: {
        cartId: cart.id,
        productId,
        quantity,
        unitPrice: product.price!.price,
        priceUpdatedAt: new Date(),
      },
      update: { quantity: desiredQty },
    });

    await this.touchCart(cart.id);
    return this.getMyCart(customerId);
  }

  // ═══════════════════════════════════════════════
  // Actualizar cantidad
  // ═══════════════════════════════════════════════

  async updateItemQuantity(
    customerId: string,
    itemId: string,
    quantity: number,
  ) {
    const item = await this.getOwnedItem(customerId, itemId);
    const product = await this.getSellableProduct(item.productId);
    this.assertStock(product, quantity);

    await this.prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity },
    });

    await this.touchCart(item.cartId);
    return this.getMyCart(customerId);
  }

  // ═══════════════════════════════════════════════
  // Eliminar un producto del carrito
  // ═══════════════════════════════════════════════

  async removeItem(customerId: string, itemId: string) {
    const item = await this.getOwnedItem(customerId, itemId);
    await this.prisma.cartItem.delete({ where: { id: itemId } });
    await this.touchCart(item.cartId);
    return this.getMyCart(customerId);
  }

  // ═══════════════════════════════════════════════
  // Vaciar carrito completo
  // ═══════════════════════════════════════════════

  async clearCart(customerId: string) {
    const cart = await this.findActiveCart(customerId);
    if (cart) {
      await this.prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
      await this.touchCart(cart.id);
    }
    return this.emptyResponse();
  }

  // ═══════════════════════════════════════════════
  // Sincronizar carrito de invitado (localStorage) al hacer login
  // ═══════════════════════════════════════════════

  async syncCart(customerId: string, guestItems: SyncCartItemDto[]) {
    if (guestItems.length === 0) return this.getMyCart(customerId);

    const cart = await this.getOrCreateActiveCart(customerId);
    const productIds = guestItems.map((i) => i.productId);

    const products = await this.prisma.product.findMany({
      where: { id: { in: productIds }, deletedAt: null, status: 'active' },
      include: { price: true },
    });
    const productMap = new Map(products.map((p) => [p.id, p]));

    const existingItems = await this.prisma.cartItem.findMany({
      where: { cartId: cart.id, productId: { in: productIds } },
    });
    const existingMap = new Map(existingItems.map((i) => [i.productId, i]));

    const warnings: CartSyncWarning[] = [];

    for (const guestItem of guestItems) {
      const product = productMap.get(guestItem.productId);
      if (!product || !product.price) {
        // Producto eliminado, desactivado o sin precio configurado.
        warnings.push({
          productId: guestItem.productId,
          productName: null,
          reason: 'unavailable',
          requestedQuantity: guestItem.quantity,
          availableStock: 0,
        });
        continue;
      }

      const existing = existingMap.get(guestItem.productId);
      const requestedTotal = (existing?.quantity ?? 0) + guestItem.quantity;
      // Se suman cantidades (invitado + BD), topeadas al stock disponible.
      const mergedQty = Math.min(requestedTotal, product.stock);

      if (mergedQty <= 0) {
        warnings.push({
          productId: product.id,
          productName: product.name,
          reason: 'out_of_stock',
          requestedQuantity: guestItem.quantity,
          availableStock: product.stock,
        });
        continue;
      }

      if (mergedQty < requestedTotal) {
        // Había stock cuando el invitado lo añadió, pero bajó (otra compra en
        // paralelo) antes de este sync: se ajusta a lo máximo disponible.
        warnings.push({
          productId: product.id,
          productName: product.name,
          reason: 'quantity_adjusted',
          requestedQuantity: guestItem.quantity,
          availableStock: product.stock,
        });
      }

      await this.prisma.cartItem.upsert({
        where: {
          cartId_productId: { cartId: cart.id, productId: guestItem.productId },
        },
        create: {
          cartId: cart.id,
          productId: guestItem.productId,
          quantity: mergedQty,
          unitPrice: product.price.price,
          priceUpdatedAt: new Date(),
        },
        update: { quantity: mergedQty },
      });
    }

    await this.touchCart(cart.id);
    const cartResponse = await this.getMyCart(customerId);
    return { ...cartResponse, warnings };
  }

  // ═══════════════════════════════════════════════
  // Hooks de integración con OrdersService (checkout)
  // No se llaman desde CartController: los invoca OrdersService
  // en los puntos correspondientes del flujo de la orden.
  // Todos aceptan un `tx` opcional para poder llamarse dentro
  // de la misma transacción de Orders (igual que ProductPriceService.setPrice).
  // ═══════════════════════════════════════════════

  /** Resuelve el carrito del cliente ligado a una Order (por Cart.orderId, único). */
  async findByOrderId(orderId: string, tx?: Prisma.TransactionClient) {
    return (tx ?? this.prisma).cart.findUnique({ where: { orderId } });
  }

  /** Resuelve el carrito `active` de un cliente, sin crearlo (usar dentro de createOrder). */
  async findActiveCartForCheckout(
    customerId: string,
    tx?: Prisma.TransactionClient,
  ) {
    return (tx ?? this.prisma).cart.findFirst({
      where: { customerId, status: CartStatus.active },
    });
  }

  /** Llamar justo cuando se crea la Order a partir de este carrito (inicio de checkout). */
  async markCheckoutInProgress(
    cartId: string,
    orderId: string,
    tx?: Prisma.TransactionClient,
  ) {
    return (tx ?? this.prisma).cart.update({
      where: { id: cartId },
      data: { status: CartStatus.checkout_in_progress, orderId },
    });
  }

  /** Llamar cuando la Order asociada queda pagada/confirmada. El carrito pasa a histórico. */
  async markCompleted(cartId: string, tx?: Prisma.TransactionClient) {
    return (tx ?? this.prisma).cart.update({
      where: { id: cartId },
      data: { status: CartStatus.completed },
    });
  }

  /**
   * Llamar cuando la Order asociada se cancela ANTES de pagarse (por el cliente,
   * el admin, o por vencimiento del plazo de pago). El carrito pasa a "abandoned",
   * NO a "active": un pedido cancelado no debe reaparecer solo en el panel del
   * cliente — si quiere comprar lo mismo de nuevo, lo vuelve a añadir él mismo.
   */
  async abandonCheckout(cartId: string, tx?: Prisma.TransactionClient) {
    return (tx ?? this.prisma).cart.update({
      where: { id: cartId },
      data: { status: CartStatus.abandoned },
    });
  }

  // ═══════════════════════════════════════════════
  // Helpers privados
  // ═══════════════════════════════════════════════

  private async findActiveCart(
    customerId: string,
  ): Promise<CartWithItems | null> {
    return this.prisma.cart.findFirst({
      where: { customerId, status: CartStatus.active },
      include: CART_WITH_ITEMS_INCLUDE,
    });
  }

  private async getOrCreateActiveCart(customerId: string) {
    const existing = await this.prisma.cart.findFirst({
      where: { customerId, status: CartStatus.active },
    });
    if (existing) return existing;

    return this.prisma.cart.create({
      data: {
        customerId,
        status: CartStatus.active,
        expiresAt: this.newExpiry(),
      },
    });
  }

  private async touchCart(cartId: string) {
    return this.prisma.cart.update({
      where: { id: cartId },
      data: { expiresAt: this.newExpiry() },
    });
  }

  private newExpiry(): Date {
    const d = new Date();
    d.setDate(d.getDate() + CART_TTL_DAYS);
    return d;
  }

  private async getOwnedItem(customerId: string, itemId: string) {
    const item = await this.prisma.cartItem.findUnique({
      where: { id: itemId },
      include: { cart: true },
    });
    if (
      !item ||
      item.cart.customerId !== customerId ||
      item.cart.status !== CartStatus.active
    ) {
      throw new NotFoundException('Ítem de carrito no encontrado');
    }
    return item;
  }

  private async getSellableProduct(productId: string) {
    const product = await this.prisma.product.findFirst({
      where: { id: productId, deletedAt: null },
      include: { price: true },
    });
    if (!product || !product.price) {
      throw new NotFoundException('Producto no disponible');
    }
    if (product.status !== 'active') {
      throw new BadRequestException(
        'Este producto no está disponible actualmente',
      );
    }
    return product;
  }

  private assertStock(
    product: { stock: number; name: string },
    quantity: number,
  ) {
    if (quantity > product.stock) {
      throw new BadRequestException(
        `Solo quedan ${product.stock} unidades disponibles de "${product.name}"`,
      );
    }
  }

  /** Sincroniza CartItem.unitPrice con el precio actual del producto (pudo cambiar desde que se añadió). */
  private async refreshPrices(cart: CartWithItems): Promise<CartWithItems> {
    const updates: Promise<unknown>[] = [];
    for (const item of cart.items) {
      const currentPrice = item.product.price?.price;
      if (currentPrice && !currentPrice.equals(item.unitPrice)) {
        updates.push(
          this.prisma.cartItem.update({
            where: { id: item.id },
            data: { unitPrice: currentPrice, priceUpdatedAt: new Date() },
          }),
        );
      }
    }
    if (updates.length) {
      await Promise.all(updates);
      return (await this.findActiveCart(cart.customerId!))!;
    }
    return cart;
  }

  /**
   * Trae la imagen "main" de cada producto del carrito en una sola consulta,
   * igual patrón que OrdersService.findOrderById con getEntitiesImages('PRODUCT', ids).
   */
  private async getImageUrlsByProductId(
    productIds: string[],
  ): Promise<Map<string, string | null>> {
    const map = new Map<string, string | null>();
    if (productIds.length === 0) return map;

    const images = await this.imageRecord.getEntitiesImages(
      PRODUCT_ENTITY_TYPE,
      productIds,
    );

    for (const productId of productIds) {
      const main = images.find(
        (img) =>
          img.entityId === productId && img.imageRole === MAIN_IMAGE_ROLE,
      );
      map.set(productId, main?.variants?.thumb ?? main?.url ?? null);
    }
    return map;
  }

  private emptyResponse() {
    return {
      id: null as string | null,
      status: CartStatus.active as CartStatus,
      itemCount: 0,
      subtotal: 0,
      items: [] as ReturnType<CartService['mapItem']>[],
      expiresAt: null as Date | null,
    };
  }

  /** Transforma un CartItem (con su product incluido) en el shape que expone la API. */
  private mapItem(
    item: CartWithItems['items'][number],
    imageUrl: string | null,
  ) {
    const unitPrice = Number(item.unitPrice);
    return {
      id: item.id,
      productId: item.productId,
      name: item.product.name,
      slug: item.product.slug,
      sku: item.product.sku,
      brand: item.product.brand?.name ?? null,
      imageUrl,
      unitPrice,
      quantity: item.quantity,
      lineTotal: Number((unitPrice * item.quantity).toFixed(2)),
      stock: item.product.stock,
    };
  }

  private async toResponse(cart: CartWithItems) {
    const activeItems = cart.items.filter((i) => i.product.deletedAt === null);
    const imagesByProductId = await this.getImageUrlsByProductId(
      activeItems.map((i) => i.productId),
    );

    const items = activeItems.map((i) =>
      this.mapItem(i, imagesByProductId.get(i.productId) ?? null),
    );

    const subtotal = items.reduce((sum, i) => sum + i.lineTotal, 0);
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

    return {
      id: cart.id,
      status: cart.status,
      itemCount,
      subtotal: Number(subtotal.toFixed(2)),
      items,
      expiresAt: cart.expiresAt,
    };
  }
}
