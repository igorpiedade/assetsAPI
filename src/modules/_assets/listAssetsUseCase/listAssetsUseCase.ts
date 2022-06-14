import { prisma } from "../../../infra/database/prismaClient";

interface IUser {
    user_id: string;
}

export class ListAssetsUseCase {
    async execute({ user_id }: IUser) {
        const listAssets = await prisma.assets.findMany({
            where: {
                user_id,
            },
        });
        return listAssets;
    }
}
