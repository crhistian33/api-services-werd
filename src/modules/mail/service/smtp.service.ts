import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

@Injectable()
export class SmtpService {
  readonly logger = new Logger(SmtpService.name);
  private transporter: Transporter | null = null;

  constructor(private readonly config: ConfigService) {
    this.initializeTransporter();
  }

  private initializeTransporter(): void {
    const host = this.config.get<string>('MAIL_HOST');
    const port = this.config.get<number>('MAIL_PORT', 587);
    const user = this.config.get<string>('MAIL_USER');
    const pass = this.config.get<string>('MAIL_PASSWORD');

    if (!host || !user || !pass) {
      this.logger.warn(
        'MAIL_HOST, MAIL_USER o MAIL_PASSWORD no configurados. Los correos no se enviarán.',
      );
      return;
    }

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    this.logger.log(`SMTP transport initialized: ${host}:${port}`);
  }

  async sendMail(options: {
    to: string;
    subject: string;
    html: string;
    from?: string;
    fromName?: string;
  }): Promise<void> {
    if (!this.transporter) {
      this.logger.warn(
        `[SmtpService] SMTP no configurado. No se envió "${options.subject}" a ${options.to}`,
      );
      return;
    }

    const fromEmail =
      options.from ?? this.config.get<string>('MAIL_FROM', 'noreply@werd.com');
    const fromName =
      options.fromName ?? this.config.get<string>('MAIL_FROM_NAME', 'Werd');

    try {
      await this.transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: options.to,
        subject: options.subject,
        html: options.html,
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error desconocido';
      this.logger.error(
        `[SmtpService] Error enviando "${options.subject}" a ${options.to}: ${errorMessage}`,
      );
      throw err; // Re-lanzamos para que MailService lo capture y loggee sin bloquear
    }
  }

  /**
   * Verifica la conexión SMTP. Útil para health checks o tests.
   */
  async verifyConnection(): Promise<boolean> {
    if (!this.transporter) return false;
    try {
      await this.transporter.verify();
      return true;
    } catch {
      return false;
    }
  }
}
