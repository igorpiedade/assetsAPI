import { prisma } from "../../../infra/database/prismaClient";

interface ICreateWallet {
    walletName: string;
    description: string;
    user_id: string;
}

export class CreateNewWalletUseCase {
    async execute({ walletName, description, user_id }: ICreateWallet) {
        const newWallet = await prisma.wallets.create({
            data: {
                walletName,
                description,
                user_id,
            },
        });

        return newWallet;
    }
}
