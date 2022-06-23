import { Request, Response } from "express";

import { UpdateOperationUseCase } from "./updateOperationUserCase";

export class UpdateOperationController {
    async handle(request: Request, response: Response) {
        const {
            operation_id,
            shares,
            wallet_id,
            asset_id,
            operationDescription_id,
            amount,
        } = request.body;

        const updateOperationUseCase = new UpdateOperationUseCase();

        const updatedOperation = await updateOperationUseCase.execute({
            user_id: request.id_user,
            adminCheck: request.admin,
            operation_id,
            shares,
            wallet_id,
            asset_id,
            operationDescription_id,
            amount,
        });
        return response.status(200).json(updatedOperation);
    }
}
