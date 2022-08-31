

import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken";


export class LoginService {
    private repository: UserRepository
    constructor() {

        this.repository = new UserRepository

    }

    public async efetuarLogin({ email, password, }: any) {

        const user = await this.repository.encotrarUsuarioporEmail(email,)

        if (!user) {
            return ({ Error: "Usuario Não existe" })
        }



        const veryfPass = await bcrypt.compare(password, user.password)

        if (!veryfPass) {
            return ({ Error: "Password invalid" })

        }



        const token = sign({ id: user.id, email: user.email, name: user.name }, process.env.JWT_PASS, { expiresIn: "1h" })





        return ({ token, })
    }
}








