import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CartService } from '../service/cart.service';
import { CreateCartItemDto, UpdateCartItemDto, SyncCartDto } from '../dto';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import type { CustomerJwtPayload } from '../../../common/interfaces/jwt-payload.interface';

// Todas las rutas requieren un access-token de CUSTOMER
// (el JwtAuthGuard global ya lo exige al no estar marcadas con @Public()).
@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @ApiBearerAuth('access-token')
  @ResponseMessage('Carrito obtenido exitosamente')
  @ApiOperation({
    summary: 'Obtener el carrito activo del cliente autenticado',
  })
  @ApiOkResponse({ description: 'Carrito activo (o vacío si no tiene uno)' })
  getCart(@CurrentUser() customer: CustomerJwtPayload) {
    return this.cartService.getMyCart(customer.sub);
  }

  @Post('items')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Producto añadido al carrito')
  @ApiOperation({ summary: 'Añadir un producto al carrito' })
  addItem(
    @CurrentUser() customer: CustomerJwtPayload,
    @Body() dto: CreateCartItemDto,
  ) {
    return this.cartService.addItem(customer.sub, dto.productId, dto.quantity);
  }

  @Patch('items/:itemId')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Cantidad actualizada exitosamente')
  @ApiOperation({ summary: 'Actualizar la cantidad de un ítem del carrito' })
  updateItem(
    @CurrentUser() customer: CustomerJwtPayload,
    @Param('itemId') itemId: string,
    @Body() dto: UpdateCartItemDto,
  ) {
    return this.cartService.updateItemQuantity(
      customer.sub,
      itemId,
      dto.quantity,
    );
  }

  @Delete('items/:itemId')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Producto eliminado del carrito')
  @ApiOperation({ summary: 'Eliminar un ítem del carrito' })
  removeItem(
    @CurrentUser() customer: CustomerJwtPayload,
    @Param('itemId') itemId: string,
  ) {
    return this.cartService.removeItem(customer.sub, itemId);
  }

  @Delete()
  @ApiBearerAuth('access-token')
  @ResponseMessage('Carrito vaciado exitosamente')
  @ApiOperation({ summary: 'Vaciar el carrito completo' })
  clearCart(@CurrentUser() customer: CustomerJwtPayload) {
    return this.cartService.clearCart(customer.sub);
  }

  @Post('sync')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Carrito sincronizado exitosamente')
  @ApiOperation({
    summary:
      'Sincronizar el carrito de invitado (localStorage/nanostore) tras iniciar sesión',
  })
  syncCart(
    @CurrentUser() customer: CustomerJwtPayload,
    @Body() dto: SyncCartDto,
  ) {
    return this.cartService.syncCart(customer.sub, dto.items);
  }
}
