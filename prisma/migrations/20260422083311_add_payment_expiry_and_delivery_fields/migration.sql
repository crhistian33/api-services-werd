-- CreateEnum
CREATE TYPE "ReturnedProductCondition" AS ENUM ('RESELLABLE', 'DAMAGED', 'DESTROYED');

-- AlterEnum
ALTER TYPE "ImageEntityType" ADD VALUE 'ORDER_DELIVERY';

-- AlterTable
ALTER TABLE "order_claims" ADD COLUMN     "internalDamageNote" TEXT,
ADD COLUMN     "receivedProductCondition" "ReturnedProductCondition";

-- AlterTable
ALTER TABLE "order_logistics" ADD COLUMN     "deliveryEvidenceNote" TEXT;

-- AlterTable
ALTER TABLE "order_payment_transactions" ADD COLUMN     "confirmedById" TEXT,
ADD COLUMN     "operationNumber" TEXT,
ADD COLUMN     "paidAmount" DECIMAL(12,2);

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "paymentConfirmedAt" TIMESTAMP(3),
ADD COLUMN     "paymentConfirmedById" TEXT,
ADD COLUMN     "paymentExpiresAt" TIMESTAMP(3),
ADD COLUMN     "paymentReminderSentAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "order_payment_reminders" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,

    CONSTRAINT "order_payment_reminders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "order_payment_reminders_orderId_idx" ON "order_payment_reminders"("orderId");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_paymentConfirmedById_fkey" FOREIGN KEY ("paymentConfirmedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_payment_transactions" ADD CONSTRAINT "order_payment_transactions_confirmedById_fkey" FOREIGN KEY ("confirmedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_payment_reminders" ADD CONSTRAINT "order_payment_reminders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
