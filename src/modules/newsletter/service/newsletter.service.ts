import {
  Injectable,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BrevoErrorResponse } from '../interfaces/brevo.interface';

@Injectable()
export class NewsletterService {
  private readonly baseUrl = 'https://api.brevo.com/v3';

  constructor(private readonly config: ConfigService) {}

  private get headers() {
    return {
      'api-key': this.config.get<string>('BREVO_API_KEY') ?? '',
      'Content-Type': 'application/json',
    };
  }

  async subscribe(email: string, name?: string): Promise<{ message: string }> {
    const res = await fetch(`${this.baseUrl}/contacts`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        email,
        attributes: { NOMBRE: name ?? '' },
        listIds: [Number(this.config.get('BREVO_LIST_ID'))],
        updateEnabled: false,
      }),
    });

    if (!res.ok) {
      const error = (await res.json()) as BrevoErrorResponse;

      // Brevo devuelve 400 y el código 'duplicate_parameter' cuando el email ya existe
      if (error?.code === 'duplicate_parameter' || res.status === 400) {
        throw new ConflictException('Este email ya está suscrito');
      }

      throw new InternalServerErrorException(
        error?.message || 'Error al procesar la suscripción',
      );
    }

    return { message: 'Suscripción exitosa' };
  }

  async unsubscribe(email: string): Promise<{ message: string }> {
    const res = await fetch(
      `${this.baseUrl}/contacts/${encodeURIComponent(email)}`,
      {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify({ emailBlacklisted: true }),
      },
    );

    if (!res.ok) {
      throw new InternalServerErrorException(
        'Error al cancelar la suscripción',
      );
    }

    return { message: 'Suscripción cancelada' };
  }
}
