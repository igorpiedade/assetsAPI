import { prisma } from "../../../infra/database/prismaClient";

interface IWalletOwner {
    user_id: string;
}

export class ListAllWalletsUseCase {
    async execute({ user_id }: IWalletOwner) {
        const allWallets = await prisma.wallets.findMany({
            where: {
                user_id,
            },
        });
        return allWallets;
    }
}
