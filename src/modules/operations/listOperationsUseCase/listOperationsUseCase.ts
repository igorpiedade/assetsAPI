import { prisma } from "../../../infra/database/prismaClient";

interface IUser {
    user_id: string;
}

export class ListOperationsUseCase {
    async execute({ user_id }: IUser) {
        const result = await prisma.operations.findMany({
            where: {
                user_id,
            },
            include: {
                Wallets: {
                    select: {
                        walletName: true,
                    },
                },
                Assets: {
                    select: {
                        assetName: true,
                    },
                },
                OperationDescrition: {
                    select: {
                        description: true,
                    },
                },
            },
        });
        return result;
    }
}
