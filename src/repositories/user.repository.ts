
import { DataSource, Repository } from "typeorm";
import { appDataSource } from "../data-soucer";
import { User } from "../models/user.model";

const dataSourceRepository = appDataSource.getRepository(User)

export class UserRepository {

    public async encotrarUsuarioporEmail(email: string) {

        const usuario = await dataSourceRepository.findOneBy({

            email: email

        })
        return usuario
    }


    public salvarUsuario({ name, email, password, }: any) {
        const dadosUsuario = dataSourceRepository.create({ name, email, password })

        const usuario = dataSourceRepository.save(dadosUsuario)


        return usuario
    }
    public loginUsuario({ email, password, }: any) {
        const dadosUsuario = dataSourceRepository.findOneBy({ email, password })



        return dadosUsuario
    }
}