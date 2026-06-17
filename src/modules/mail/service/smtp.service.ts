import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * NOTA: a pesar del nombre "SmtpService" (se mantiene para no romper los imports
 * existentes en MailModule y MailService), este servicio ahora envía correos
 * usando la API HTTP de Brevo (https://api.brevo.com/v3/smtp/email) en lugar
 * de una conexión SMTP directa.
 *
 * Motivo: algunas plataformas PaaS (Railway, Render, etc.) bloquean o limitan
 * las conexiones salientes en puertos SMTP (587, 465, 25), causando timeouts.
 * La API HTTP usa el puerto 443 (HTTPS), que nunca está bloqueado.
 *
 * Variable de entorno requerida: BREVO_API_KEY
 * (se genera en Brevo > Settings > SMTP y API > pestaña "API Keys",
 * es DIFERENTE de la clave SMTP que se usaba antes)
 */
@Injectable()
export class SmtpService {
  readonly logger = new Logger(SmtpService.name);
  private readonly apiUrl = 'https://api.brevo.com/v3/smtp/email';

  constructor(private readonly config: ConfigService) {
    const apiKey = this.config.get<string>('BREVO_API_KEY');
    if (!apiKey) {
      this.logger.warn(
        'BREVO_API_KEY no configurada. Los correos no se enviarán.',
      );
    } else {
      this.logger.log('Brevo API client inicializado (modo HTTP).');
    }
  }

  async sendMail(options: {
    to: string;
    subject: string;
    html: string;
    from?: string;
    fromName?: string;
  }): Promise<void> {
    const apiKey = this.config.get<string>('BREVO_API_KEY');

    if (!apiKey) {
      this.logger.warn(
        `[SmtpService] BREVO_API_KEY no configurada. No se envió "${options.subject}" a ${options.to}`,
      );
      return;
    }

    const fromEmail =
      options.from ?? this.config.get<string>('MAIL_FROM', 'noreply@werd.com');
    const fromName =
      options.fromName ?? this.config.get<string>('MAIL_FROM_NAME', 'Werd');

    const body = {
      sender: { name: fromName, email: fromEmail },
      to: [{ email: options.to }],
      subject: options.subject,
      htmlContent: options.html,
    };

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': apiKey,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Brevo API respondió ${response.status}: ${errorBody}`);
      }
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
   * Verifica que la API key de Brevo sea válida haciendo una llamada
   * de bajo costo (obtener info de la cuenta). Útil para health checks.
   */
  async verifyConnection(): Promise<boolean> {
    const apiKey = this.config.get<string>('BREVO_API_KEY');
    if (!apiKey) return false;

    try {
      const response = await fetch('https://api.brevo.com/v3/account', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'api-key': apiKey,
        },
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}
