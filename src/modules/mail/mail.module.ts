import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailService } from './service/mail.service';
import { SmtpService } from './service/smtp.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [MailService, SmtpService],
  exports: [MailService, SmtpService],
})
export class MailModule {}
