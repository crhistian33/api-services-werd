import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthAccessPayload } from '../../../common/interfaces/jwt-payload.interface';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): AuthAccessPayload | undefined => {
    const request = ctx
      .switchToHttp()
      .getRequest<{ user?: AuthAccessPayload }>();
    return request.user;
  },
);
