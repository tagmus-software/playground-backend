

import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt"

export class RegisterService {
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

        const usuario = await this.repository.salvarUsuario({ password: passwordHash, email, name })

        return { usuario }
    }








}
