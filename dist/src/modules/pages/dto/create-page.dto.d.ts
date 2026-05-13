import { PageStatus } from 'generated/prisma/client';
export declare class CreatePageDto {
    title: string;
    content?: string;
    metaTitle?: string;
    metaDescription?: string;
    status?: PageStatus;
}
