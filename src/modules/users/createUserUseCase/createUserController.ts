import { Request, Response } from "express";

import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { firstName, lastName, email, password } = request.body;

        const createUserUseCase = new CreateUserUseCase();
        const newUser = await createUserUseCase.execute({
            firstName,
            lastName,
            email,
            password,
        });

        return response.status(200).json(newUser);
    }
}
