-- CreateTable
CREATE TABLE "Assets" (
    "id" TEXT NOT NULL,
    "assetName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "wallet_id" TEXT NOT NULL,

    CONSTRAINT "Assets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Assets_assetName_key" ON "Assets"("assetName");

-- AddForeignKey
ALTER TABLE "Assets" ADD CONSTRAINT "Assets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assets" ADD CONSTRAINT "Assets_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "Wallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
