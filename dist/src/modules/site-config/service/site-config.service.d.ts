import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { UpdateSiteConfigDto, CreateSocialLinkDto, UpdateSocialLinkDto } from '../dto';
export declare class SiteConfigService implements OnModuleInit {
    private readonly prisma;
    private readonly imageRecord;
    constructor(prisma: PrismaService, imageRecord: ImageRecordService);
    onModuleInit(): Promise<void>;
    private getConfigId;
    get(): Promise<{
        socialLinks: {
            url: string;
            id: string;
            name: string;
            isActive: boolean;
            sortOrder: number;
            siteConfigId: string;
            network: string;
            icon: string | null;
        }[];
    } & {
        id: string;
        updatedAt: Date;
        metaTitle: string | null;
        metaDescription: string | null;
        currency: string;
        storeName: string;
        storeEmail: string;
        supportEmail: string | null;
        phonePrimary: string | null;
        phoneSecondary: string | null;
        whatsappNumber: string | null;
        address: string | null;
        taxRate: import("@prisma/client-runtime-utils").Decimal;
        googleAnalyticsId: string | null;
        facebookPixelId: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    getPublic(): Promise<{
        id: string;
        metaTitle: string | null;
        metaDescription: string | null;
        storeName: string;
        phonePrimary: string | null;
        whatsappNumber: string | null;
        address: string | null;
        googleAnalyticsId: string | null;
        facebookPixelId: string | null;
        socialLinks: {
            url: string;
            name: string;
            network: string;
            icon: string | null;
        }[];
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    update(dto: UpdateSiteConfigDto): Promise<{
        socialLinks: {
            url: string;
            id: string;
            name: string;
            isActive: boolean;
            sortOrder: number;
            siteConfigId: string;
            network: string;
            icon: string | null;
        }[];
    } & {
        id: string;
        updatedAt: Date;
        metaTitle: string | null;
        metaDescription: string | null;
        currency: string;
        storeName: string;
        storeEmail: string;
        supportEmail: string | null;
        phonePrimary: string | null;
        phoneSecondary: string | null;
        whatsappNumber: string | null;
        address: string | null;
        taxRate: import("@prisma/client-runtime-utils").Decimal;
        googleAnalyticsId: string | null;
        facebookPixelId: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    createSocialLink(dto: CreateSocialLinkDto): Promise<{
        url: string;
        id: string;
        name: string;
        isActive: boolean;
        sortOrder: number;
        siteConfigId: string;
        network: string;
        icon: string | null;
    }>;
    updateSocialLink(id: string, dto: UpdateSocialLinkDto): Promise<{
        url: string;
        id: string;
        name: string;
        isActive: boolean;
        sortOrder: number;
        siteConfigId: string;
        network: string;
        icon: string | null;
    }>;
    removeSocialLink(id: string): Promise<{
        url: string;
        id: string;
        name: string;
        isActive: boolean;
        sortOrder: number;
        siteConfigId: string;
        network: string;
        icon: string | null;
    }>;
    reorderSocialLinks(ids: string[]): Promise<{
        socialLinks: {
            url: string;
            id: string;
            name: string;
            isActive: boolean;
            sortOrder: number;
            siteConfigId: string;
            network: string;
            icon: string | null;
        }[];
    } & {
        id: string;
        updatedAt: Date;
        metaTitle: string | null;
        metaDescription: string | null;
        currency: string;
        storeName: string;
        storeEmail: string;
        supportEmail: string | null;
        phonePrimary: string | null;
        phoneSecondary: string | null;
        whatsappNumber: string | null;
        address: string | null;
        taxRate: import("@prisma/client-runtime-utils").Decimal;
        googleAnalyticsId: string | null;
        facebookPixelId: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    private syncSocialLinks;
    private assertSocialLinkExists;
}
