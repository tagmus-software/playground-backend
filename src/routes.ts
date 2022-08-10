import { request, Request, response, Response, Router } from "express";
import { RegisterController, } from "./controllers/register.controllers";
import { RegisterService } from "./service/register.service";
[]
const router = Router()

const registerController = new RegisterController()

router.get('/register', async (req: Request, res: Response) => {
    await registerController.registrar(req, res)
})





export default router