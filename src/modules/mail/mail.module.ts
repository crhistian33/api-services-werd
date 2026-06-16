import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MailService } from './service/mail.service';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          port: Number(config.get('MAIL_PORT')),
          secure: Number(config.get('MAIL_PORT')) === 465,
          // Forzar IPv4 para evitar errores ESOCKET en entornos como Railway
          // que no soportan correctamente conexiones SMTP por IPv6.
          // La opción 'family: 4' fuerza a nodemailer a resolver solo registros A (IPv4).
          family: 4,
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASSWORD'),
          },
          // Tiempos de espera para evitar que la conexión se cuelgue indefinidamente
          connectionTimeout: 15000, // 15s para establecer conexión TCP
          greetingTimeout: 15000, // 15s para recibir el saludo SMTP
          socketTimeout: 30000, // 30s timeout general del socket
        },
        defaults: {
          from: `"Werd" <${config.get('MAIL_FROM')}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
