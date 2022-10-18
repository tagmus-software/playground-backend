import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken";



export function AuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction

) {
    const { authorization } = req.headers;



    if (!authorization) {

        return res.status(401).json({ Error: " token not  provided " })


    }

    const [, token] = authorization.split(" ");

    try {

        const decoded = verify(token, process.env.JWT_PASS);

    } catch (error) {


        return res.status(401).json({ Error: " token invalid" })
    }



}