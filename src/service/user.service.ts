import { UserRepository } from "../repositories/user.repository";




export class UserService {

    private repository: UserRepository

    constructor() {
        this.repository = new UserRepository

    }

    public async editarUsuario({ id, name }: any) {

        const user = await this.repository.buscarUsuarioporId(id,)

        if (!user) {

            throw new Error("Usuario Não existe");

        }


        await this.repository.atualizarUsuario({ id, name })


    }

    public async deletarUsuarioPorId({ id }: any) {

        const user = await this.repository.buscarUsuarioporId(id)


        if (!user) {


            throw new Error("Usuario Não existe");

        }

        await this.repository.deletarUsuario({ id })


    }

}
