import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ProductReviewService } from '../service/product-review.service';
import { CreateReviewDto } from '../dto/create-review.dto';
import { QueryReviewDto } from '../dto/query-review.dto';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';
import type { CustomerJwtPayload } from '../../../common/interfaces/jwt-payload.interface';

@ApiTags('Product Reviews')
@Controller('product-reviews')
export class ProductReviewsController {
  constructor(private readonly productReviewService: ProductReviewService) {}

  // ═══════════════════════════════════════════════
  // CREAR / ACTUALIZAR RESEÑA (Upsert)
  // ═══════════════════════════════════════════════

  @Post()
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reseña creada/actualizada exitosamente')
  @ApiOperation({
    summary: 'Crear o actualizar reseña de producto (Cliente autenticado)',
    description:
      'Si el cliente ya tiene una reseña para ese producto, la actualiza guardando el historial anterior.',
  })
  async upsert(
    @Body() dto: CreateReviewDto,
    @CurrentUser() customer: CustomerJwtPayload,
  ) {
    return this.productReviewService.upsertReview(customer.sub, dto);
  }

  // ═══════════════════════════════════════════════
  // LISTAR RESEÑAS (Admin)
  // ═══════════════════════════════════════════════

  @Get()
  @Roles(
    AdminRole.SUPER_ADMIN,
    AdminRole.ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reseñas obtenidas exitosamente')
  @ApiOperation({ summary: 'Listar reseñas con filtros (Admin)' })
  async findAll(@Query() query: QueryReviewDto) {
    return this.productReviewService.findAll(query);
  }

  // ═══════════════════════════════════════════════
  // MODERAR RESEÑA (Admin)
  // ═══════════════════════════════════════════════

  @Patch(':id/moderate')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reseña moderada exitosamente')
  @ApiOperation({ summary: 'Aprobar o rechazar una reseña (Admin)' })
  @ApiParam({ name: 'id', description: 'UUID de la reseña' })
  async moderate(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('isApproved') isApproved: boolean,
    @CurrentUser() admin: { sub: string },
  ) {
    return this.productReviewService.moderateReview(id, isApproved, admin.sub);
  }

  // ═══════════════════════════════════════════════
  // ELIMINAR RESEÑA (Admin)
  // ═══════════════════════════════════════════════

  @Delete(':id')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Reseña eliminada exitosamente')
  @ApiOperation({ summary: 'Eliminar una reseña (Admin)' })
  @ApiParam({ name: 'id', description: 'UUID de la reseña' })
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productReviewService.removeReview(id);
  }
}
