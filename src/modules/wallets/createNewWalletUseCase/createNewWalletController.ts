import { Request, Response } from "express";

import { CreateNewWalletUseCase } from "./createNewWalletUseCase";

export class CreateNewWalletController {
    async handle(request: Request, response: Response) {
        const { walletName, description } = request.body;

        const createNewWalletUseCase = new CreateNewWalletUseCase();
        const newWallet = await createNewWalletUseCase.execute({
            walletName,
            description,
        });
        return response.status(200).json(newWallet);
    }
}
