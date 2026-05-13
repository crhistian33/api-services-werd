/*
  Warnings:

  - The values [ORIGINAL_PAYMENT_METHOD] on the enum `RefundMethod` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RefundMethod_new" AS ENUM ('CARD', 'WALLET', 'STORE_CREDIT', 'BANK_TRANSFER');
ALTER TABLE "public"."refunds" ALTER COLUMN "method" DROP DEFAULT;
ALTER TABLE "refunds" ALTER COLUMN "method" TYPE "RefundMethod_new" USING ("method"::text::"RefundMethod_new");
ALTER TYPE "RefundMethod" RENAME TO "RefundMethod_old";
ALTER TYPE "RefundMethod_new" RENAME TO "RefundMethod";
DROP TYPE "public"."RefundMethod_old";
ALTER TABLE "refunds" ALTER COLUMN "method" SET DEFAULT 'CARD';
COMMIT;

-- AlterTable
ALTER TABLE "refunds" ALTER COLUMN "method" SET DEFAULT 'CARD';
