import { Request, Response } from "express";

import { CreateGlobalClassUseCase } from "./createGlobalClassUseCase";

export class CreateGlobalClassController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const createGlobalClassUseCase = new CreateGlobalClassUseCase();

        const newClass = await createGlobalClassUseCase.execute({
            name,
            description,
        });

        return response.status(200).json(newClass);
    }
}
