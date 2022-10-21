



import { appDataSource } from "../data-soucer";
import { User } from "../models/user.model";

const dataSourceRepository = appDataSource.getRepository(User)
type AtualizarUsuarioParams = {

    name: string;
    id: number;


}

export class UserRepository {

    public async encotrarUsuarioporEmail(email: string) {

        const usuario = await dataSourceRepository.findOneBy({

            email: email

        })
        return usuario
    }

    public async buscarUsuarioporId(id: number) {

        const usuario = await dataSourceRepository.findOneBy({

            id: id


        })


        if (!usuario) {

            throw new Error("Usuario Não existe");

        }

        return { usuario }
    }


    public salvarUsuario({ name, email, password, }: any) {
        const dadosUsuario = dataSourceRepository.create({ name, email, password })
        const usuario = dataSourceRepository.save(dadosUsuario)


        return usuario
    }
    public async atualizarUsuario({ name, id }: AtualizarUsuarioParams) {

        const updatUser = await dataSourceRepository.update(id, { name })

        return updatUser

    }

    public async deletarUsuario({ id }: any) {

        const deletUser = await dataSourceRepository.delete({ id })

        return deletUser

    }

}