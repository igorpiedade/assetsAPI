/*
  Warnings:

  - You are about to drop the `operationDescription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "operationDescription" DROP CONSTRAINT "operationDescription_user_id_fkey";

-- DropTable
DROP TABLE "operationDescription";

-- CreateTable
CREATE TABLE "OperationDescription" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "OperationDescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operations" (
    "id" TEXT NOT NULL,
    "shares" DOUBLE PRECISION NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "wallet_id" TEXT NOT NULL,
    "asset_id" TEXT NOT NULL,
    "operationDescription_id" TEXT NOT NULL,

    CONSTRAINT "Operations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OperationDescription" ADD CONSTRAINT "OperationDescription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "Wallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "Assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_operationDescription_id_fkey" FOREIGN KEY ("operationDescription_id") REFERENCES "OperationDescription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
