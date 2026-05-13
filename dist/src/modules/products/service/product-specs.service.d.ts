import { PrismaClient } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SpecItemDto, FeatureItemDto } from '../dto/specs-product.dto';
type PrismaDatabaseClient = PrismaService | PrismaClient | Omit<PrismaClient, '$on' | '$connect' | '$disconnect' | '$use' | '$extends'>;
export declare class ProductSpecsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    setSpecs(productId: string, specs: SpecItemDto[], prisma?: PrismaDatabaseClient): Promise<void>;
    setFeatures(productId: string, features: FeatureItemDto[], prisma?: PrismaDatabaseClient): Promise<void>;
    getSpecs(productId: string): Promise<{
        id: string;
        sortOrder: number;
        specKey: string;
        specValue: string;
    }[]>;
    getFeatures(productId: string): Promise<{
        id: string;
        sortOrder: number;
        feature: string;
    }[]>;
    getSpecsAndFeatures(productId: string): Promise<{
        specs: {
            id: string;
            sortOrder: number;
            specKey: string;
            specValue: string;
        }[];
        features: {
            id: string;
            sortOrder: number;
            feature: string;
        }[];
    }>;
    clearAll(productId: string): Promise<void>;
}
export {};
