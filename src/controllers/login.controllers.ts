import { Request, Response } from "express";
import { LoginService } from "../service/loginService";

export class LoginController {
    private service: LoginService


    constructor() {
        this.service = new LoginService();
    }

    public async authenticate(req: Request, res: Response) {


        const { email, password, } = req.body;



        if (!email) {
            return res.status(400).json({ msg: 'E-email Obrigatorio!' })

        }

        if (!password) {
            return res.status(400).json({ msg: 'senha obrigatória!' })


        }


        const usuario = await this.service.efetuarLogin({ email, password })


        res.status(200).json(usuario)




    }


}