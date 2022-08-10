
import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";


export class RegisterService {
    private repository: UserRepository
    constructor() {

        this.repository = new UserRepository

    }

    public registrarUsuario(dados: any) {
        // chamar metodo salvarUsuario que está no repositorio logo abaixo.
        this.repository.salvarUsuario(null)






    }








}
