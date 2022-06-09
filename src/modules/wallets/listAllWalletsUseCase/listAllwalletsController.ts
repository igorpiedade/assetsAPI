import { Request, Response } from "express";

import { ListAllWalletsUseCase } from "./listAllWalletsUseCase";

export class ListAllWalletsController {
    async handle(request: Request, response: Response) {
        const listAllWalletsUseCase = new ListAllWalletsUseCase();

        const listAllWallets = await listAllWalletsUseCase.execute({
            user_id: request.id_user,
        });

        return response.status(200).json(listAllWallets);
    }
}
