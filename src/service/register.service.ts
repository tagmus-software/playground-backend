
import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt"


export class RegisterService {
    private repository: UserRepository
    constructor() {

        this.repository = new UserRepository

    }

    public async registrarUsuario(dados: any) {

        // chamar metodo salvarUsuario que está no repositorio logo abaixo.

        this.repository.salvarUsuario(null)






    }








}
