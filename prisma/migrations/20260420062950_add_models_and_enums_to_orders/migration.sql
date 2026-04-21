-- CreateEnum
CREATE TYPE "DeliveryType" AS ENUM ('COURIER', 'LOCAL_MOTORIZED');

-- CreateEnum
CREATE TYPE "ClaimType" AS ENUM ('CANCELLATION', 'REFUND', 'EXCHANGE');

-- CreateEnum
CREATE TYPE "ClaimReasonCategory" AS ENUM ('CUSTOMER_DECISION', 'STORE_ERROR', 'PRODUCT_FAULT');

-- CreateEnum
CREATE TYPE "ClaimStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'RECEIVED', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "shipping_zone_areas" ADD COLUMN     "deliveryType" "DeliveryType" NOT NULL DEFAULT 'COURIER';

-- CreateTable
CREATE TABLE "order_logistics" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "deliveryType" "DeliveryType" NOT NULL,
    "estimatedShipping" DECIMAL(12,2) NOT NULL,
    "actualShippingCost" DECIMAL(12,2),
    "internalTransportCost" DECIMAL(12,2),
    "trackingNumber" TEXT,
    "courierName" TEXT,
    "dispatchedAt" TIMESTAMP(3),
    "dispatchedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_logistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_claims" (
    "id" TEXT NOT NULL,
    "claimNumber" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "type" "ClaimType" NOT NULL,
    "reasonCategory" "ClaimReasonCategory" NOT NULL,
    "status" "ClaimStatus" NOT NULL DEFAULT 'PENDING',
    "description" TEXT NOT NULL,
    "customerVoucherAmount" DECIMAL(12,2),
    "customerVoucherUrl" TEXT,
    "storeShippingCost" DECIMAL(12,2),
    "storeTransportCost" DECIMAL(12,2),
    "totalRefundedAmount" DECIMAL(12,2),
    "reviewNote" TEXT,
    "internalNote" TEXT,
    "reviewedById" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "receivedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_claims_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_claim_items" (
    "id" TEXT NOT NULL,
    "claimId" TEXT NOT NULL,
    "orderItemId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "reason" TEXT,

    CONSTRAINT "order_claim_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_logistics_orderId_key" ON "order_logistics"("orderId");

-- CreateIndex
CREATE INDEX "order_logistics_orderId_idx" ON "order_logistics"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "order_claims_claimNumber_key" ON "order_claims"("claimNumber");

-- CreateIndex
CREATE INDEX "order_claims_orderId_idx" ON "order_claims"("orderId");

-- CreateIndex
CREATE INDEX "order_claims_customerId_idx" ON "order_claims"("customerId");

-- CreateIndex
CREATE INDEX "order_claims_status_idx" ON "order_claims"("status");

-- CreateIndex
CREATE INDEX "order_claim_items_claimId_idx" ON "order_claim_items"("claimId");

-- AddForeignKey
ALTER TABLE "order_logistics" ADD CONSTRAINT "order_logistics_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_logistics" ADD CONSTRAINT "order_logistics_dispatchedById_fkey" FOREIGN KEY ("dispatchedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_claims" ADD CONSTRAINT "order_claims_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_claims" ADD CONSTRAINT "order_claims_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_claims" ADD CONSTRAINT "order_claims_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_claim_items" ADD CONSTRAINT "order_claim_items_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES "order_claims"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_claim_items" ADD CONSTRAINT "order_claim_items_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "order_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
