

import { UserRepository } from "../repositories/user.repository";
import { PasswordService } from "./password.service";


export class RegisterService {
    private repository: UserRepository;
    private passwordService: PasswordService;
    constructor() {

        this.repository = new UserRepository

    }

    public async registrarUsuario({ email, password, name }: any) {

        const userExists = await this.repository.encotrarUsuarioporEmail(email)

        if (userExists) {
            return null
        }




        const passwordHash = this.passwordService.hashPassword(password)

        const usuario = await this.repository.salvarUsuario({
            password: passwordHash,
            email,
            name
        })

        return { usuario }
    }








}
