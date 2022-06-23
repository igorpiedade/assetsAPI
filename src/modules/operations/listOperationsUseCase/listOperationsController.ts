import { Request, Response } from "express";

import { ListOperationsUseCase } from "./listOperationsUseCase";

export class ListOperationsController {
    async handle(request: Request, response: Response) {
        const listOperationsUseCase = new ListOperationsUseCase();
        const listOperations = await listOperationsUseCase.execute({
            user_id: request.id_user,
        });

        return response.status(200).json(listOperations);
    }
}
