import { CreateShippingZoneAreaDto } from './create-shipping-zone-area.dto';
import { CreateShippingRateDto } from './create-shipping-rate.dto';
export declare class CreateShippingZoneDto {
    name: string;
    description?: string;
    isActive?: boolean;
    areas?: CreateShippingZoneAreaDto[];
    rates?: CreateShippingRateDto[];
}
