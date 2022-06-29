import { Request, Response } from "express";

import { CreateNewClassUseCase } from "./createNewClassUseCase";

export class CreateNewClassController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;
        const user_id = request.id_user;

        const createNewClassUseCase = new CreateNewClassUseCase();

        const newClass = await createNewClassUseCase.execute({
            name,
            description,
            user_id,
        });

        return response.status(200).json(newClass);
    }
}
