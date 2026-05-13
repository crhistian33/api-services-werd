import { LinkType } from 'generated/prisma/client';
export declare class CreateHeroSlideDto {
    title?: string;
    subtitle?: string;
    linkType?: LinkType;
    linkProductId?: string;
    linkCategoryId?: string;
    linkUrl?: string;
    linkText?: string;
    sortOrder?: number;
    isActive?: boolean;
    startsAt?: string | Date;
    endsAt?: string | Date;
    tempDesktopImageId?: string;
    tempMobileImageId?: string;
}
