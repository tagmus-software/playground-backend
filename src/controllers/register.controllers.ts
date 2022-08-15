
import { Request, Response } from "express";
import { User } from "../models/user.model";
import { RegisterService } from "../service/register.service";


export class RegisterController {
    private service: RegisterService


    constructor() {
        this.service = new RegisterService();
    }

    public async registra(req: Request, res: Response) {

        // validar parametros logo abaixo: 
        // começo
        const { name, email, password, password_confimation } = req.body;

        const usuario = await User.findOne({ name: name });

        if (!usuario) {
            return res.status(400).send({ message: 'Usuário já existe !' })
        }


        const emailvalidacao = await User.findOne({ email: email });

        if (!emailvalidacao) {
            return res.status(400).send({ message: 'E-email ja existe!' })
        }


        const passwordValidacao = await User.findOne({ password: password });

        if (!passwordValidacao) {
            return res.status(400).send({ message: 'senha já existe!' })
        }


        const password_confima = await User.findOne({ password_confimation: password_confimation });

        if (!password_confima) {
            return res.status(400).send({ message: ' !' })
        }







        // fim

        // chamar registrar usuario
        // console.log('conseguir passar no controller')
        // this.service.registrarUsuario({ body })









    }

}