import { prisma } from "../../../infra/database/prismaClient";

interface ICreateNewOperation {
    user_id: string;
    wallet_id: string;
    asset_id: string;
    operationDescription_id: string;
    shares: number;
    amount: number;
}

export class CreateNewOperationUseCase {
    async execute({
        user_id,
        wallet_id,
        asset_id,
        operationDescription_id,
        shares,
        amount,
    }: ICreateNewOperation) {
        const newOperation = await prisma.operations.create({
            data: {
                user_id,
                wallet_id,
                asset_id,
                operationDescription_id,
                shares,
                amount,
            },
        });

        return newOperation;
    }
}
