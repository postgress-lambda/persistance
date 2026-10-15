-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED', 'REFUNDED');

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "imageurl" TEXT;

-- AlterTable
ALTER TABLE "sub_categories" ADD COLUMN     "imageurl" TEXT;

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "details" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "orderID" INTEGER NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "provider" TEXT,
    "transactionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "audit_logs_customerId_createdAt_idx" ON "audit_logs"("customerId", "createdAt");

-- CreateIndex
CREATE INDEX "audit_logs_entity_entityId_createdAt_idx" ON "audit_logs"("entity", "entityId", "createdAt");

-- CreateIndex
CREATE INDEX "audit_logs_action_createdAt_idx" ON "audit_logs"("action", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "payments_transactionId_key" ON "payments"("transactionId");

-- CreateIndex
CREATE INDEX "payments_orderID_idx" ON "payments"("orderID");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
