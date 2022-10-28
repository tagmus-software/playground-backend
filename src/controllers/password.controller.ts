import { Request, Response } from "express";
import { RequestApp } from "../interface/request";
import { PasswordService } from "../service/password.service";
import { validatePassword } from "../validators/password";


export class PasswordController {
    constructor(
        private passwordService: PasswordService = new PasswordService()
    ) {

    }



    public async editarPass(req: RequestApp, res: Response) {
        const { password, password_confirma } = req.body

        try {

            validatePassword(password, password_confirma)
        } catch (error) {

            return res.status(400).json({ msg: error.message })
        }

        await this.passwordService.updatePassword(req.user.id, password);
        res.status(200).json({ msg: "funcionando" })
    }




}