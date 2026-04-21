import { Injectable } from '@nestjs/common';
import {
  ImageRecordService,
  MovedImageData,
} from '../../../modules/images/services/image-record.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateLogisticsDto } from '../dto';
import { ImageEntityType, Prisma } from 'generated/prisma/client';

const ENTITY_TYPE = ImageEntityType.ORDER_LOGISTICS;
const IMAGE_ROLE = 'shipping_evidence';

@Injectable()
export class OrderLogisticsService {
  constructor(
    private prisma: PrismaService,
    private imageRecord: ImageRecordService,
  ) {}

  async updateToShipped(
    orderId: string,
    dto: UpdateLogisticsDto,
    adminId: string,
  ) {
    // Paso 1: Valida registros temporales
    const tempRecords = dto.tempImageIds?.length
      ? await Promise.all(
          dto.tempImageIds.map((id) =>
            this.imageRecord.findTempRecord(id, ENTITY_TYPE, IMAGE_ROLE),
          ),
        )
      : [];

    // Paso 2: Mover archivos al disco
    const movedList: MovedImageData[] = [];
    try {
      for (let i = 0; i < tempRecords.length; i++) {
        const moved = await this.imageRecord.moveToFinal(
          tempRecords[i],
          ENTITY_TYPE,
          '',
          IMAGE_ROLE,
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
      return await this.prisma.$transaction(async (tx) => {
        // Actualizar Orden
        await tx.order.update({
          where: { id: orderId },
          data: { status: 'shipped' },
        });

        // PREPARACIÓN DE DATA LOGÍSTICA (Ajuste según deliveryType)
        const logisticsData: Prisma.OrderLogisticsUpdateInput = {
          deliveryType: dto.deliveryType,
          actualShippingCost: dto.actualShippingCost,
          internalTransportCost: dto.internalTransportCost,
          dispatchedBy: adminId ? { connect: { id: adminId } } : undefined,
          dispatchedAt: new Date(),
        };

        // Si es COURIER, asignamos los campos obligatorios de ese tipo
        if (dto.deliveryType === 'COURIER') {
          logisticsData.courierName = dto.courierName;
          logisticsData.trackingNumber = dto.trackingNumber;
        } else {
          // Limpieza explícita si cambia de tipo
          logisticsData.courierName = null;
          logisticsData.trackingNumber = null;
        }

        // Actualizar Logística
        const logistics = await tx.orderLogistics.update({
          where: { orderId },
          data: logisticsData,
        });

        // Confirmar Imágenes
        await Promise.all(
          movedList.map((moved) =>
            this.imageRecord.confirmInDb(
              { ...moved, entityId: logistics.id },
              tx,
            ),
          ),
        );

        return logistics;
      });
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }
  }
}
