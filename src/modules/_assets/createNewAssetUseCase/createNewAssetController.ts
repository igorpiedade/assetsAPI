import { Request, Response } from "express";

import { CreateNewAssetUseCase } from "./createNewAssetUseCase";

export class CreateNewAssetController {
    async handle(request: Request, response: Response) {
        const { assetName, description, price, wallet_id, assetClass_id } =
            request.body;

        const createNewAssetUseCase = new CreateNewAssetUseCase();

        const newAsset = await createNewAssetUseCase.execute({
            assetName,
            description,
            price,
            wallet_id,
            user_id: request.id_user,
            assetClass_id,
        });

        return response.status(200).json(newAsset);
    }
}
