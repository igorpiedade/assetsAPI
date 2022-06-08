import { request } from "express";

import { prisma } from "../../../infra/database/prismaClient";

interface ICreateWallet {
    walletName: string;
    description: string;
}

export class CreateNewWalletUseCase {
    async execute({ walletName, description }: ICreateWallet) {
        const newWallet = await prisma.wallets.create({
            data: {
                walletName,
                description,
                user_id: request.id_user,
            },
        });

        return newWallet;
    }
}
