import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateComplaintDto } from '../dto/create-complaint.dto';

@Injectable()
export class ComplaintsService {
  constructor(private readonly prisma: PrismaService) {}

  async findComplaintById(id: string) {
    const record = await this.prisma.complaint.findFirst({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Reclamo con id "${id}" no encontrado`);
    }

    return record;
  }

  async create(dto: CreateComplaintDto) {
    // 1. Validación de regla de negocio legal (Menor de edad)
    if (dto.isMinor && !dto.parentName) {
      throw new BadRequestException(
        'El nombre del apoderado es obligatorio para menores de edad.',
      );
    }

    try {
      // 2. Inserción directa. No calculamos el correlativo aquí, delegamos a Postgres.
      const newComplaint = await this.prisma.complaint.create({
        data: {
          complaintType: dto.complaintType,
          customerName: dto.customerName,
          documentType: dto.documentType,
          documentNumber: dto.documentNumber,
          address: dto.address,
          email: dto.email,
          phone: dto.phone,
          isMinor: dto.isMinor,
          parentName: dto.isMinor ? dto.parentName : null,
          claimedAmount: dto.claimedAmount,
          productName: dto.productName,
          description: dto.description,
          // Guardar opcionalmente la orden si el cliente la ingresó
          ...(dto.orderId && { orderId: dto.orderId }),
          ...(dto.orderNumber && { orderNumber: dto.orderNumber }),
        },
        // Forzamos a que retorne el ticketNumber generado por la DB
        select: {
          id: true,
          ticketNumber: true,
          customerName: true,
          email: true,
          createdAt: true,
        },
      });

      // 3. 💡 PASO LEGAL: Gatillar el envío de correo automático asíncrono con la copia del reclamo
      // await this.mailerService.sendComplaintReceipt(newComplaint);

      return this.findComplaintById(newComplaint.id);
    } catch (error) {
      console.error('[Complaints] Error al registrar reclamo:', error);
      throw new InternalServerErrorException(
        'No se pudo procesar la hoja de reclamación en este momento.',
      );
    }
  }
}
