import { prisma } from "../../../infra/database/prismaClient";

interface ICreateAsset {
    assetName: string;
    description: string;
    price: number;
    wallet_id: string;
    user_id: string;
    assetClass_id: string;
}

export class CreateNewAssetUseCase {
    async execute({
        assetName,
        description,
        price,
        user_id,
        assetClass_id,
    }: ICreateAsset) {
        const newAsset = prisma.assets.create({
            data: {
                assetName,
                description,
                price,
                user_id,
                assetClass_id,
            },
        });

        return newAsset;
    }
}
