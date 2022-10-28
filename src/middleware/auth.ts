import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { RequestApp } from "../interface/request";
import { UserService } from "../service/user.service";


export async function AuthMiddleware(
    req: RequestApp,
    res: Response,
    next: NextFunction

) {
    const { authorization } = req.headers;


    if (!authorization) {

        return res.status(401).json({ Error: " token not  provided " })


    }

    const [, token] = authorization.split(" ");

    const userService = new UserService();

    try {
        const decoded: any = verify(token, process.env.JWT_PASS);

        const user = await userService.encontrarUsuarioPorId(decoded.id);

        if (!user) {
            res.status(401).json({ msg: 'Acesso não permitido' })
        }

        req.user = user;
        next()

    } catch (error) {


        return res.status(401).json({ Error: " token invalid" })
    }



}