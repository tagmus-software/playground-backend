import { NextFunction, Request, Response } from "express";
import { Jwt } from "jsonwebtoken";
import { verify } from "jsonwebtoken";


type tokenPayload = {
    Id: string;
    // iat: number;
    // exp: number;
}

export function AuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction

) {
    const { authorization } = req.headers;

    // authorization de authenticaçao

    //console.log(req.headers)

    if (!authorization) {

        return res.status(401).json({ Error: " token not  provided " })

        // se nao possuir um authorization o usuario não estar altenticado
    }

    const [, token] = authorization.split(" ");



    //   console.log(token)

    try {

        const decoded = verify(token, process.env.JWT_PASS);



        // autenticaçao do usuario

        //  const { Id } = decoded as tokenPayload;

        // indetificação de quem estar acessando no caso pelo id

        console.log(decoded)

        // req.userId = Id;
        // next()

    } catch (error) {

        console.log(error)
        return res.status(401).json({ Error: " token invalid" })
    }

}