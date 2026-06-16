import {
  IsEnum,
  IsString,
  IsNotEmpty,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsNumber,
  Min,
} from 'class-validator';
import { ComplaintType } from 'generated/prisma/client';

export class CreateComplaintDto {
  @IsEnum(ComplaintType)
  @IsNotEmpty()
  complaintType: ComplaintType;

  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsString()
  @IsNotEmpty()
  documentType: string;

  @IsString()
  @IsNotEmpty()
  documentNumber: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsBoolean()
  isMinor: boolean;

  @IsString()
  @IsOptional()
  parentName?: string;

  @IsNumber()
  @Min(0)
  claimedAmount: number;

  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsOptional()
  orderId?: string;

  @IsString()
  @IsOptional()
  orderNumber?: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
