
import { Request, Response } from "express";
import { Any } from "typeorm";
import { UserRepository } from "../repositories/user.repository";
import { RegisterService } from "../service/register.service";


export class RegisterController {
    private service: RegisterService


    constructor() {
        this.service = new RegisterService();
    }

    async registra(req: Request, res: Response) {

        // validar parametros logo abaixo: 
        // começo
        const body = {
            name: 'Reinaldo',
            email: 'covalick113@gmail.com',
            password: 'covalick123',
            password_confirma: 'covalick123',

        }



        // fim

        // chamar registrar usuario
        console.log('conseguir passar no controller')
        this.service.registrarUsuario({ body })









    }

}