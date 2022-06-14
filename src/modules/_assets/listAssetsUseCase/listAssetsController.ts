import { Request, Response } from "express";

import { ListAssetsUseCase } from "./listAssetsUseCase";

export class ListAssetsController {
    async handle(request: Request, response: Response) {
        const listAssetsUseCase = new ListAssetsUseCase();
        const listAssets = await listAssetsUseCase.execute({
            user_id: request.id_user,
        });

        return response.status(200).json(listAssets);
    }
}
