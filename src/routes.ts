import { request, Request, response, Response, Router } from "express";
import { RegisterController, } from "./controllers/register.controllers";
import { LoginController } from "./controllers/login.controllers";



const router = Router()

const registerController = new RegisterController()

router.post('/register', async (req: Request, res: Response) => {

    await registerController.registra(req, res)
})



const loginController = new LoginController()

router.post('/login', async (req: Request, res: Response) => {

    await loginController.authenticate(req, res)
})






export default router