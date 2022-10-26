

import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt"



export class PasswordService {
    private repository: UserRepository
    constructor() {

        this.repository = new UserRepository

    }

    public hashPassword(passwordStr: string) {
        return bcrypt.hashSync(passwordStr, bcrypt.genSaltSync(10));
    }

    public async updatePassword(id: number, passwordStr: string) {
        const password = this.hashPassword(passwordStr);
        this.repository.atualizarSenha(id, password)
    }
}








