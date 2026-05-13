import { PrismaService } from '../../../prisma/prisma.service';
import { MailService } from '../../mail/service/mail.service';
import { ConfirmManualPaymentDto } from '../dto/confirm-payment.dto';
export declare class OrderPaymentConfirmationService {
    private readonly prisma;
    private readonly mailService;
    constructor(prisma: PrismaService, mailService: MailService);
    confirmPayment(orderId: string, dto: ConfirmManualPaymentDto, adminId: string): Promise<{
        success: boolean;
        orderId: string;
        newStatus: string;
    }>;
}
