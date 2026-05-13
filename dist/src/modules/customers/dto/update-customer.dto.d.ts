import { CreateCustomerDto } from './create-customer.dto';
declare const UpdateCustomerDto_base: import("@nestjs/common").Type<Partial<Omit<CreateCustomerDto, "password">>>;
export declare class UpdateCustomerDto extends UpdateCustomerDto_base {
    isActive?: boolean;
}
export declare class UpdateCustomerPasswordDto {
    currentPassword: string;
    newPassword: string;
}
export {};
