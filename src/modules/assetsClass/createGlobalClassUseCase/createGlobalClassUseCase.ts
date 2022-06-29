import { prisma } from "../../../infra/database/prismaClient";

interface INewClass {
    name: string;
    description: string;
}

export class CreateGlobalClassUseCase {
    async execute({ name, description }: INewClass) {
        const newClass = prisma.assetsClass.create({
            data: {
                name,
                description,
            },
        });

        return newClass;
    }
}
