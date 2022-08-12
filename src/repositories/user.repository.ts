
import { User } from "../models/user.model";

export class UserRepository {
    encontrarUsuarioPorEmail(email: string) {
        findOne({
            where: {
                email: email
            }
        })
    }




    public salvarUsuario(user: User) {


    }

}

function findOne(arg0: { where: { email: string; }; }) {
    throw new Error("E-email ja exite");
}

