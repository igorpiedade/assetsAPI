import { hash } from "bcrypt";

import { prisma } from "../../../infra/database/prismaClient";

interface ICreateUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class CreateUserUseCase {
    async execute({ firstName, lastName, email, password }: ICreateUser) {
        const userAlreadyExist = await prisma.users.findFirst({
            where: {
                email: {
                    contains: email,
                    mode: "insensitive",
                },
            },
        });

        if (userAlreadyExist) {
            throw new Error("User already exists");
        }

        const hashPassword = await hash(password, 10);

        const user = await prisma.users.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashPassword,
            },
        });

        return user;
    }
}
