
import { Request, Response } from "express";
import { RegisterService } from "../service/register.service";
import * as bcrypt from "bcrypt"
import { User } from "../models/user.model";



export class RegisterController {
    private service: RegisterService


    constructor() {
        this.service = new RegisterService();
    }

    public async registra(req: Request, res: Response) {

        // validar parametros logo abaixo: 
        // começo
        const { name, password, password_confirma } = req.body;


        if (!name) {
            return res.status(422).json({ msg: 'Nome obrigatorio!' })
        }

        if (!password) {
            return res.status(400).json({ msg: 'senha obrigatória!' })
        }

        if (password !== password_confirma) {
            return res.status(400).json({ msg: 'A senhas nao confere!!' })


        }






        // fim

        // chamar registrar usuario
        // console.log('conseguir passar no controller')
        // this.service.registrarUsuario({ body })









    }

}