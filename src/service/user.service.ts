import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt"




export class UserService {

    private repository: UserRepository

    constructor() {
        this.repository = new UserRepository

    }

    public async editarUsuario({ id, name }: any) {

        const user = await this.repository.buscarUsuarioporId(id,)

        if (!user) {

            return ({ msg: "usuario não encontrado " })

        }

        // const salt = bcrypt.genSaltSync(10)

        // const idHash = bcrypt.hashSync(id, salt)



        await this.repository.atualizarUsuario({ id, name })

    }

    public async deletarUsuarioPorId({ id }: any) {

        const user = await this.repository.buscarIdDoUsuario(id)


        if (!user) {


            throw new Error("Usuario Não existe");

        }

        await this.repository.deletarUsuario({ id })


    }

}
