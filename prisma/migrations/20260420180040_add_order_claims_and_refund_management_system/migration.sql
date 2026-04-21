/*
  Warnings:

  - The values [EXCHANGE] on the enum `ClaimType` will be removed. If these variants are still used in the database, this will fail.
  - The values [refunded] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `customerVoucherUrl` on the `order_claims` table. All the data in the column will be lost.
  - You are about to drop the column `storeShippingCost` on the `order_claims` table. All the data in the column will be lost.
  - You are about to drop the column `storeTransportCost` on the `order_claims` table. All the data in the column will be lost.
  - You are about to drop the column `totalRefundedAmount` on the `order_claims` table. All the data in the column will be lost.
  - You are about to drop the `order_refund_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order_refunds` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refund_request_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refund_requests` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[replacementOrderId]` on the table `order_claims` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[claimAsReplacementId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "RefundStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "RefundMethod" AS ENUM ('ORIGINAL_PAYMENT_METHOD', 'STORE_CREDIT', 'BANK_TRANSFER');

-- AlterEnum
BEGIN;
CREATE TYPE "ClaimType_new" AS ENUM ('CANCELLATION', 'REFUND', 'REPLACEMENT');
ALTER TABLE "order_claims" ALTER COLUMN "type" TYPE "ClaimType_new" USING ("type"::text::"ClaimType_new");
ALTER TYPE "ClaimType" RENAME TO "ClaimType_old";
ALTER TYPE "ClaimType_new" RENAME TO "ClaimType";
DROP TYPE "public"."ClaimType_old";
COMMIT;

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ImageEntityType" ADD VALUE 'ORDER_LOGISTICS';
ALTER TYPE "ImageEntityType" ADD VALUE 'ORDER_CLAIM';

-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('pending_payment', 'paid', 'processing', 'shipped', 'delivered', 'cancelled');
ALTER TABLE "public"."orders" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "orders" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TABLE "order_status_history" ALTER COLUMN "fromStatus" TYPE "OrderStatus_new" USING ("fromStatus"::text::"OrderStatus_new");
ALTER TABLE "order_status_history" ALTER COLUMN "toStatus" TYPE "OrderStatus_new" USING ("toStatus"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "public"."OrderStatus_old";
ALTER TABLE "orders" ALTER COLUMN "status" SET DEFAULT 'pending_payment';
COMMIT;

-- DropForeignKey
ALTER TABLE "order_refund_items" DROP CONSTRAINT "order_refund_items_orderItemId_fkey";

-- DropForeignKey
ALTER TABLE "order_refund_items" DROP CONSTRAINT "order_refund_items_refundId_fkey";

-- DropForeignKey
ALTER TABLE "order_refunds" DROP CONSTRAINT "order_refunds_approvedById_fkey";

-- DropForeignKey
ALTER TABLE "order_refunds" DROP CONSTRAINT "order_refunds_orderId_fkey";

-- DropForeignKey
ALTER TABLE "refund_request_items" DROP CONSTRAINT "refund_request_items_orderItemId_fkey";

-- DropForeignKey
ALTER TABLE "refund_request_items" DROP CONSTRAINT "refund_request_items_refundRequestId_fkey";

-- DropForeignKey
ALTER TABLE "refund_requests" DROP CONSTRAINT "refund_requests_customerId_fkey";

-- DropForeignKey
ALTER TABLE "refund_requests" DROP CONSTRAINT "refund_requests_orderId_fkey";

-- DropForeignKey
ALTER TABLE "refund_requests" DROP CONSTRAINT "refund_requests_reviewedById_fkey";

-- DropIndex
DROP INDEX "admin_refresh_tokens_tokenHash_idx";

-- DropIndex
DROP INDEX "customer_refresh_tokens_tokenHash_idx";

-- AlterTable
ALTER TABLE "order_claims" DROP COLUMN "customerVoucherUrl",
DROP COLUMN "storeShippingCost",
DROP COLUMN "storeTransportCost",
DROP COLUMN "totalRefundedAmount",
ADD COLUMN     "replacementOrderId" TEXT;

-- AlterTable
ALTER TABLE "order_logistics" ADD COLUMN     "deliveredAt" TIMESTAMP(3),
ADD COLUMN     "deliveredById" TEXT;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "claimAsReplacementId" TEXT,
ADD COLUMN     "parentOrderId" TEXT;

-- DropTable
DROP TABLE "order_refund_items";

-- DropTable
DROP TABLE "order_refunds";

-- DropTable
DROP TABLE "refund_request_items";

-- DropTable
DROP TABLE "refund_requests";

-- DropEnum
DROP TYPE "RefundRequestStatus";

-- CreateTable
CREATE TABLE "refunds" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "claimId" TEXT,
    "amount" DECIMAL(12,2) NOT NULL,
    "status" "RefundStatus" NOT NULL DEFAULT 'PENDING',
    "method" "RefundMethod" NOT NULL DEFAULT 'ORIGINAL_PAYMENT_METHOD',
    "processedById" TEXT,
    "gatewayRefundId" TEXT,
    "adminNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "refunds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refund_items" (
    "id" TEXT NOT NULL,
    "refundId" TEXT NOT NULL,
    "orderItemId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "restockQuantity" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "refund_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "refunds_claimId_key" ON "refunds"("claimId");

-- CreateIndex
CREATE UNIQUE INDEX "refunds_gatewayRefundId_key" ON "refunds"("gatewayRefundId");

-- CreateIndex
CREATE UNIQUE INDEX "order_claims_replacementOrderId_key" ON "order_claims"("replacementOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_claimAsReplacementId_key" ON "orders"("claimAsReplacementId");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_parentOrderId_fkey" FOREIGN KEY ("parentOrderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_claimAsReplacementId_fkey" FOREIGN KEY ("claimAsReplacementId") REFERENCES "order_claims"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_logistics" ADD CONSTRAINT "order_logistics_deliveredById_fkey" FOREIGN KEY ("deliveredById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refunds" ADD CONSTRAINT "refunds_processedById_fkey" FOREIGN KEY ("processedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refunds" ADD CONSTRAINT "refunds_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refunds" ADD CONSTRAINT "refunds_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES "order_claims"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refund_items" ADD CONSTRAINT "refund_items_refundId_fkey" FOREIGN KEY ("refundId") REFERENCES "refunds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refund_items" ADD CONSTRAINT "refund_items_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "order_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
