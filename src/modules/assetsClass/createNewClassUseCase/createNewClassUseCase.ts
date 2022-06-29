import { prisma } from "../../../infra/database/prismaClient";

interface INewClass {
    name: string;
    description: string;
    user_id?: string;
}

export class CreateNewClassUseCase {
    async execute({ name, description, user_id }: INewClass) {
        const newClass = prisma.assetsClass.create({
            data: {
                name,
                description,
                user_id,
            },
        });

        return newClass;
    }
}
