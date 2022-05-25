import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./listAllUsersUseCase";

export class ListAllUsersController {
    async handle(request: Request, response: Response) {
        const listAllUsersUseCase = new ListAllUsersUseCase();
        const allUsers = await listAllUsersUseCase.execute();

        return response.status(200).json(allUsers);
    }
}
