import { Request, Response } from "express";

import { CreateNewOperationUseCase } from "./createNewOperationUseCase";

export class CreateNewOperationController {
    async handle(request: Request, response: Response) {
        const { wallet_id, asset_id, operationDescription_id, shares, amount } =
            request.body;

        const createNewOperationUseCase = new CreateNewOperationUseCase();

        const newOperation = await createNewOperationUseCase.execute({
            user_id: request.id_user,
            wallet_id,
            asset_id,
            operationDescription_id,
            shares,
            amount,
        });

        return response.status(200).json(newOperation);
    }
}
