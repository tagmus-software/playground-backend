import { Request, Response } from "express";
import { UserService } from "../service/user.service";

export class UserController {
    private service: UserService

    constructor() {
        this.service = new UserService();
    }

    public async editar(req: Request, res: Response) {

        const { name } = req.body;
        const { id } = req.params;


        if (!name) {
            return res.status(400).json({ msg: 'Nome Obrigatorio!' })

        }

        if (/[a-zA-Z\u00C0-\u00FF ].{2,20}/.test(name) == false) {

            return res.status(400).json({
                msg: 'Nome deve ter  3 caracterer  ou Mais caractere,não pode conter simbolos e Números'
            })

        }

        try {

            await this.service.editarUsuario({ id, name })

            return res.status(200).json({ msg: " usuario atualizado com sucesso " })


        } catch (error) {


            return res.status(404).json({ msg: error.message })
        }


    }

    public async deletar(req: Request, res: Response) {

        const { id } = req.params;



        if (!id) {

            res.status(400).json({ msg: 'ID obrigatorio!' })

        }

        if (isNaN(id as any)) {

            res.status(400).json({ msg: 'Id deve ser do tipo number"' })
        }


        try {

            await this.service.deletarUsuarioPorId({ id })

            return res.status(200).json({ msg: " usuario deletado com sucesso " })


        } catch (error) {

            return res.status(404).json({ msg: error.message })
        }


    }

}