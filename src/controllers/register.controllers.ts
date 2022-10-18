
import { Request, Response } from "express";
import { RegisterService } from "../service/register.service";

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

        if (!password) {
            return res.status(400).json({ msg: 'senha obrigatória!' })


        }

        if (/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{7,15}$/.test(password) == false) {

            return res.status(400).json({
                msg: 'A senha Deve conter mais que 7 caracteres, um numero, uma letra maiuscula e um simbolo'
            })

        }
        if (password !== password_confirma) {
            return res.status(400).json({ msg: 'A senhas nao confere!!' })

        }

        const usuario = await this.service.registrarUsuario({ password, email, name })

        if (!usuario) {

            const msgJson = { msg: 'usuario Já Cadastrado com esse E-email!' }
            return res.status(403).json(msgJson)
        }

        res.status(200).json(usuario)







    }

}