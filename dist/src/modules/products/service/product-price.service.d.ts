import { PrismaService } from '../../../prisma/prisma.service';
import { PrismaDatabaseClient } from '../../../common/services/base.service';
export interface SetPriceInput {
    price: number;
    compareAtPrice?: number;
    cost?: number;
    changedById?: string;
    reason?: string;
}
export declare class ProductPriceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getPrice(productId: string): Promise<{
        id: string;
        updatedAt: Date;
        productId: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
        cost: import("@prisma/client-runtime-utils").Decimal | null;
        currency: string;
    }>;
    setPrice(productId: string, input: SetPriceInput, prisma?: PrismaDatabaseClient): Promise<{
        id: string;
        updatedAt: Date;
        productId: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
        cost: import("@prisma/client-runtime-utils").Decimal | null;
        currency: string;
    }>;
    getPriceHistory(productId: string): Promise<{
        id: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        cost: import("@prisma/client-runtime-utils").Decimal | null;
        marginPct: import("@prisma/client-runtime-utils").Decimal | null;
        reason: string | null;
        effectiveFrom: Date;
        changedBy: {
            id: string;
            name: string;
        } | null;
    }[]>;
    deletePrice(productId: string): Promise<void>;
}
