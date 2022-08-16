
import { Request, Response } from "express";
import { RegisterService } from "../service/register.service";
import * as bcrypt from "bcrypt"
import { User } from "../models/user.model";
import { appDataSource } from "../data-soucer";




export class RegisterController {
    private service: RegisterService


    constructor() {
        this.service = new RegisterService();
    }

    public async registra(req: Request, res: Response) {



        // validar parametros logo abaixo: 
        // começo
        const { name, email, password, password_confirma } = req.body;


        if (!name) {
            return res.status(422).json({ msg: 'Nome obrigatorio!' })
        }

        if (!email) {
            return res.status(400).json({ msg: 'E-email Obrigatorio!' })

        }

        const user = await appDataSource.getRepository(User).findOneBy({ email })

        if (user) {

            return res.status(400).json({ msg: 'E-email ja existe' })

        }


        if (!password) {
            return res.status(400).json({ msg: 'senha obrigatória!' })

        }

        if (password !== password_confirma) {
            return res.status(400).json({ msg: 'A senhas nao confere!!' })


        }


        //this.service.registrarUsuario({ })









    }

}