/*
  Warnings:

  - Added the required column `assetClass_id` to the `Assets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Assets" ADD COLUMN     "assetClass_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "operationDescription" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "operationDescription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Assets" ADD CONSTRAINT "Assets_assetClass_id_fkey" FOREIGN KEY ("assetClass_id") REFERENCES "AssetsClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operationDescription" ADD CONSTRAINT "operationDescription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
