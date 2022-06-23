import { request } from "express";

import { prisma } from "../../../infra/database/prismaClient";

interface IUpdateOperation {
    user_id: string;
    operation_id: string;
    shares: number;
    adminCheck: boolean;
    wallet_id: string;
    asset_id: string;
    operationDescription_id: string;
    amount: number;
}

export class UpdateOperationUseCase {
    async execute({
        user_id,
        operation_id,
        shares,
        adminCheck,
        wallet_id,
        asset_id,
        operationDescription_id,
        amount,
    }: IUpdateOperation) {
        const validateOperation = await prisma.operations.findFirst({
            where: {
                id: operation_id,
            },
        });

        if (!validateOperation) {
            throw new Error("Operation Id does not exists");
        }

        if (validateOperation.user_id !== user_id && adminCheck !== true) {
            throw new Error("Permission denied ");
        }

        const result = await prisma.operations.update({
            where: {
                id: operation_id,
            },
            data: {
                wallet_id,
                asset_id,
                operationDescription_id,
                shares,
                amount,
            },
        });

        return result;
    }
}
