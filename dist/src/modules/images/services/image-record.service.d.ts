import { PrismaService } from '../../../prisma/prisma.service';
import { ImageEntityType } from 'generated/prisma/client';
import { ImageStorageService } from './image-storage.service';
import { PrismaDatabaseClient } from '../../../common/services/base.service';
export interface CreateImageRecordInput {
    entityType: ImageEntityType;
    entityId: string;
    imageRole: string;
    tempPath: string;
    url: string;
    order?: number;
    altText?: string;
    metadata?: object;
}
export interface ImageVariants {
    original?: string;
    zoom?: string;
    large?: string;
    medium?: string;
    thumb?: string;
    cart?: string;
    tiny?: string;
}
export interface ImageDto {
    id: string;
    imageRole: string;
    url: string | null;
    entityId: string;
    altText: string | null;
    order: number;
    variants: ImageVariants;
    isSvg: boolean;
}
export interface MovedImageData {
    tempRecordId: string;
    entityType: ImageEntityType;
    entityId: string;
    imageRole: string;
    finalPath: string;
    finalUrl: string;
    variants: Record<string, string>;
    existingMeta: object;
    order: number;
}
type ImageRecord = Awaited<ReturnType<PrismaService['image']['findUnique']>>;
export declare class ImageRecordService {
    private readonly prisma;
    private readonly storage;
    constructor(prisma: PrismaService, storage: ImageStorageService);
    createTempRecord(input: CreateImageRecordInput): Promise<{
        url: string | null;
        id: string;
        entityType: ImageEntityType;
        entityId: string;
        imageRole: string;
        tempPath: string | null;
        finalPath: string | null;
        order: number;
        altText: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue;
        isConfirmed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findById(imageId: string): Promise<ImageRecord | null>;
    findTempRecord(imageId: string, entityType: ImageEntityType, imageRole: string): Promise<NonNullable<ImageRecord>>;
    moveToFinal(tempRecord: NonNullable<ImageRecord>, entityType: ImageEntityType, entityId: string, imageRole: string, order?: number): Promise<MovedImageData>;
    confirmInDb(moved: MovedImageData, client: PrismaDatabaseClient): Promise<void>;
    deleteFiles(paths: string[]): Promise<void>;
    getEntityImages(entityType: ImageEntityType, entityId: string, client?: PrismaDatabaseClient): Promise<ImageDto[]>;
    attachImagesToEntity<T extends {
        id: string;
    }>(entity: T, entityType: ImageEntityType, client?: PrismaDatabaseClient): Promise<T & {
        images: ImageDto[];
    }>;
    attachImagesToMany<T extends {
        id: string;
    }>(entities: T[], entityType: ImageEntityType): Promise<(T & {
        images: ImageDto[];
    })[]>;
    deleteEntityImages(entityType: ImageEntityType, entityId: string, client?: PrismaDatabaseClient): Promise<void>;
    deleteImage(imageId: string, client?: PrismaDatabaseClient): Promise<void>;
    deleteImageById(imageId: string, client?: PrismaDatabaseClient): Promise<void>;
    cleanOrphanTempFiles(olderThanMinutes?: number): Promise<number>;
    fixIncompleteImages(olderThanMinutes?: number): Promise<number>;
    cleanOrphanTempRecords(olderThanMinutes?: number): Promise<number>;
    private deleteRoleImages;
    private mapImageToDto;
    getEntitiesImages(entityType: ImageEntityType, entityIds: string[]): Promise<ImageDto[]>;
}
export {};
