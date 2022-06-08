import { NextFunction, Request, Response } from "express";

export async function veryfyAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const isAdmin = request.admin;

    if (!isAdmin) {
        return response.status(401).json({
            message: "user not authorized!",
        });
    }

    return next();
}
