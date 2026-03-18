import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

interface HttpExceptionResponse {
  message: string | string[];
  error?: string;
  details?: unknown;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let message: string | string[];
    let error: string;
    let details: unknown;

    if (typeof exceptionResponse === 'string') {
      // new HttpException('mensaje', status)
      message = exceptionResponse;
      error = HttpStatus[statusCode];
    } else {
      const body = exceptionResponse as HttpExceptionResponse;
      message = body.message;
      error = body.error ?? HttpStatus[statusCode];
      details = body.details;
    }

    response.status(statusCode).json({
      success: false,
      statusCode,
      error,
      message,
      ...(details !== undefined && { details }),
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
