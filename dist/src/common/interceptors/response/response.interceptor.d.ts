import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AnyApiResponse } from '../../interfaces/api-response.interface';
export declare class ResponseInterceptor<T> implements NestInterceptor<T, AnyApiResponse<T>> {
    private readonly reflector;
    constructor(reflector: Reflector);
    intercept(context: ExecutionContext, next: CallHandler): Observable<AnyApiResponse<T>>;
}
