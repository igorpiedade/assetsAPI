-- CreateTable
CREATE TABLE "Wallets" (
    "id" TEXT NOT NULL,
    "walletName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Wallets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Wallets" ADD CONSTRAINT "Wallets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
