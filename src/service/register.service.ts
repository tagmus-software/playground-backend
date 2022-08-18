
import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt"
import { User } from "../models/user.model";
import { json } from "stream/consumers";


export class RegisterService {
    [x: string]: any;
    private repository: UserRepository
    constructor() {

        this.repository = new UserRepository

    }

    public async registrarUsuario({ email, password, name }: any) {

        const userExists = await this.repository.encotrarUsuarioporEmail(email)

        if (userExists) {
            return null
        }

        const salt = bcrypt.genSaltSync(10)

        const passwordHash = bcrypt.hashSync(password, salt)

        // chamar metodo salvarUsuario que está no repositorio logo abaixo.

        //this.repository.salvarUsuario(null)


        const usuario = await this.repository.salvarUsuario({ password, email, name })


        return { usuario }
    }








}
