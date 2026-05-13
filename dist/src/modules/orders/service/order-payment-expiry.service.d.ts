import { PrismaService } from '../../../prisma/prisma.service';
import { MailService } from '../../mail/service/mail.service';
import { ConfigService } from '@nestjs/config';
export declare class OrderPaymentExpiryService {
    private readonly prisma;
    private readonly mailService;
    private readonly config;
    private readonly logger;
    constructor(prisma: PrismaService, mailService: MailService, config: ConfigService);
    sendPaymentReminders(): Promise<void>;
    cancelExpiredOrders(): Promise<void>;
}
