import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RESPONSE_MESSAGE_KEY } from '../../decorators/response-message.decorator';
import {
  AnyApiResponse,
  ApiPaginatedResponse,
} from '../../interfaces/api-response.interface';

function isPaginated<T>(value: unknown): value is ApiPaginatedResponse<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    'data' in value &&
    'meta' in value
  );
}

// ── Interceptor ──────────────────────────────────────────────
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<
  T,
  AnyApiResponse<T>
> {
  constructor(private readonly reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<AnyApiResponse<T>> {
    const message = this.reflector.getAllAndOverride<string>(
      RESPONSE_MESSAGE_KEY,
      [context.getHandler(), context.getClass()],
    );

    return next.handle().pipe(
      map((response: unknown): AnyApiResponse<T> => {
        if (isPaginated<T>(response)) {
          return {
            success: true,
            ...(message && { message }),
            data: response.data,
            meta: response.meta,
            ...(response.facets ? { facets: response.facets } : {}),
          };
        }

        return {
          success: true,
          ...(message && { message }),
          data: response as T,
        };
      }),
    );
  }
}
