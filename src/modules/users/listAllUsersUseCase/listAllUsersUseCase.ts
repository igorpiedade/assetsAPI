import { prisma } from "../../../infra/database/prismaClient";

export class ListAllUsersUseCase {
    async execute() {
        const allUsers = await prisma.users.findMany();

        return allUsers;
    }
}
