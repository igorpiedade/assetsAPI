import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../infra/database/prismaClient";

interface IAuthenticateUser {
    email: string;
    password: string;
}

export class AuthenticateUserUseCase {
    async execute({ email, password }: IAuthenticateUser) {
        const user = await prisma.users.findFirst({
            where: {
                email,
            },
        });

        if (!user) {
            throw new Error("Invalid user or password!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Invalid user or password!");
        }

        const secretKey = process.env.SK_JWT as string;

        const token = sign(
            {
                email,
                admin: user.administrator,
            },
            secretKey,
            {
                subject: user.id,
                expiresIn: "1d",
            }
        );

        return token;
    }
}
