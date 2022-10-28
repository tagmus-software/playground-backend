
import { Request, Response } from "express";
import { RegisterService } from "../service/register.service";
import { validatePassword } from "../validators/password";

export class RegisterController {
    private service: RegisterService


    constructor() {
        this.service = new RegisterService();
    }

    public async registra(req: Request, res: Response) {


        const { name, email, password, password_confirma, } = req.body;


        if (!name) {
            return res.status(400).json({ msg: 'Nome obrigatorio!' })
        }

        if (!email) {
            return res.status(400).json({ msg: 'E-email Obrigatorio!' })

        }

        try {

            validatePassword(password, password_confirma)

        } catch (error) {

            return res.status(400).json({ msg: error.message })
        }


        const usuario = await this.service.registrarUsuario({ password, email, name })

        if (!usuario) {

            const msgJson = { msg: 'usuario Já Cadastrado com esse E-email!' }
            return res.status(403).json(msgJson)
        }

        res.status(200).json(usuario)







    }

}