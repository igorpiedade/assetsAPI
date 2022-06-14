/*
  Warnings:

  - You are about to drop the column `wallet_id` on the `Assets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Assets" DROP CONSTRAINT "Assets_wallet_id_fkey";

-- DropIndex
DROP INDEX "Assets_assetName_key";

-- AlterTable
ALTER TABLE "Assets" DROP COLUMN "wallet_id";
