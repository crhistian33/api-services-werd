import { CreateSocialLinkDto } from './create-social-link.dto';
export declare class UpdateSiteConfigDto {
    storeName?: string;
    storeEmail?: string;
    supportEmail?: string;
    phonePrimary?: string;
    phoneSecondary?: string;
    whatsappNumber?: string;
    address?: string;
    metaTitle?: string;
    metaDescription?: string;
    currency?: string;
    taxRate?: number;
    googleAnalyticsId?: string;
    facebookPixelId?: string;
    tempLogoHeaderId?: string;
    tempLogoFooterId?: string;
    socialLinks?: CreateSocialLinkDto[];
}
