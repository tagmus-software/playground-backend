
import { Request, Response } from "express";
import { RegisterService } from "../service/register.service";


export class RegisterController {
    private service: RegisterService


    constructor() {
        this.service = new RegisterService();
    }

    public registra(req: Request, res: Response) {
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
        // this.service.registrarUsuario({})

        res.json("oi")







    }

}