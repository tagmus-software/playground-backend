import { UserRepository } from "../repositories/user.repository";
export class UserService {

    private repository: UserRepository

    constructor() {
        this.repository = new UserRepository

    }

    public async editarUsuario({ id, name }: any) {

        const user = await this.repository.buscarUsuarioporId(id)

        if (!user) {

            throw new Error("Usuario Não existe");

        }

        return await this.repository.atualizarUsuario({ name, id })





    }

    public async deletarUsuarioPorId({ id }: any) {

        const user = await this.repository.buscarUsuarioporId(id)


        if (!user) {


            throw new Error("Usuario Não existe");

        }

        await this.repository.deletarUsuario({ id, })

        return user

    }

    public encontrarUsuarioPorId(id: number) {
        return this.repository.buscarUsuarioporId(id)
    }

}
