
import { DataSource, Repository } from "typeorm";
import { appDataSource } from "../data-soucer";
import { User } from "../models/user.model";

const _userRepository = appDataSource.getRepository(User)

export class UserRepository {

    public async encotrarUsuarioporEmail(email: string) {

        const usuario = await _userRepository.findOneBy({

            email: email

        })
        return usuario
    }


    public salvarUsuario({ name, email, password, }: any) {
        const dadosUsuario = _userRepository.create({ name, email, password })

        const usuario = _userRepository.save({ name, email, password })

        _userRepository.save(dadosUsuario)

        return dadosUsuario
    }

}
