import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config";

interface ExtendedRequest extends Request {
    userId? : string;
}

export function middleware (req: ExtendedRequest, res: Response, next: NextFunction) {
    const token = req.headers["authorization"] ?? "";

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    if(typeof decoded === 'string') {
        res.status(403).json({
            message: "Invalid token"
        });
        return;
    }

    if(decoded) {
        req.userId = decoded.userId;
        next();
    } else {
        res.status(403).json({
            message: 'Unauthorized'
        })
    }
}