-- DropIndex
DROP INDEX "AssetsClass_name_key";

-- AlterTable
ALTER TABLE "AssetsClass" ADD COLUMN     "user_id" TEXT;

-- AddForeignKey
ALTER TABLE "AssetsClass" ADD CONSTRAINT "AssetsClass_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
