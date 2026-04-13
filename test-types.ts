import { Prisma } from './generated/prisma/client';

type FaqEntity = Prisma.FaqGetPayload<{
  include: {
    createdBy: { select: { id: true; name: true; email: true } };
    updatedBy: { select: { id: true; name: true; email: true } };
  };
}>;

const test: FaqEntity = {} as any;
console.log(typeof test);
