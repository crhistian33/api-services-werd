import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { OrderStatus } from 'generated/prisma/client';

// Renombrado internamente a UpdateOrderStatusDto para dejar claro
// que este DTO solo aplica al endpoint PATCH /orders/:id/status.
// El archivo mantiene el nombre update-order.dto.ts para no romper imports.

export class UpdateOrderDto {
  @ApiPropertyOptional({
    enum: OrderStatus,
    description:
      'Nuevo estado. Transiciones válidas: ' +
      'pending_payment→[paid,cancelled] | ' +
      'paid→[processing,cancelled] | ' +
      'processing→[shipped,cancelled] | ' +
      'shipped→[delivered] | ' +
      'delivered→[] | cancelled→[] | refunded→[]',
  })
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @ApiPropertyOptional({
    description: 'Notas internas del admin (no visibles al cliente)',
  })
  @IsOptional()
  @IsString()
  adminNotes?: string;

  @ApiPropertyOptional({
    description: 'Comentario que se registra en el historial de estados',
  })
  @IsOptional()
  @IsString()
  statusComment?: string;
}
