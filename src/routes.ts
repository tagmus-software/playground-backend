import { request, Request, response, Response, Router } from "express";
import { RegisterController, } from "./controllers/register.controllers";
import { LoginController } from "./controllers/loginControllers";



const router = Router()

const registerController = new RegisterController()

router.post('/register', async (req: Request, res: Response) => {

    await registerController.registra(req, res)
})



const loginController = new LoginController()

router.post('/login', async (req: Request, res: Response) => {

    await loginController.efetuar(req, res)
})






export default router