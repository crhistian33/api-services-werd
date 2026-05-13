import { ImageRecordService } from '../../../modules/images/services/image-record.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { MailService } from '../../mail/service/mail.service';
import { UpdateLogisticsDto } from '../dto';
import { MarkDeliveredDto } from '../dto/mark-delivered.dto';
export declare class OrderLogisticsService {
    private readonly prisma;
    private readonly imageRecord;
    private readonly mailService;
    constructor(prisma: PrismaService, imageRecord: ImageRecordService, mailService: MailService);
    updateToShipped(orderId: string, dto: UpdateLogisticsDto, adminId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        orderId: string;
        deliveredAt: Date | null;
        deliveryType: import("generated/prisma/client").DeliveryType;
        estimatedShipping: import("@prisma/client-runtime-utils").Decimal;
        actualShippingCost: import("@prisma/client-runtime-utils").Decimal | null;
        internalTransportCost: import("@prisma/client-runtime-utils").Decimal | null;
        trackingNumber: string | null;
        courierName: string | null;
        dispatchedAt: Date | null;
        dispatchedById: string | null;
        deliveredById: string | null;
        deliveryEvidenceNote: string | null;
    }>;
    markAsDelivered(orderId: string, dto: MarkDeliveredDto, adminId: string): Promise<{
        success: boolean;
        orderId: string;
        newStatus: string;
    }>;
}
