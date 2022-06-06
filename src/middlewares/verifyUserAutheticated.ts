import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function verifyUserAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "Token missing",
        });
    }

    const [, token] = authHeader.split(" ");
    const secretKey = process.env.SK_JWT as string;

    try {
        const { sub } = verify(token, secretKey) as IPayload;

        request.id_user = sub;

        return next();
    } catch {
        return response.status(401).json({
            message: "invalid toke",
        });
    }
}
