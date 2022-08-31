import { request, Request, response, Response, Router } from "express";
import { LoginController } from "./controllers/login.controllers";
import { RegisterController, } from "./controllers/register.controllers";
import { AuthMiddleware } from "./middleware/auth";



const router = Router()

const registerController = new RegisterController()

router.post('/register', async (req: Request, res: Response) => {

    await registerController.registra(req, res)
})

const logincontroller = new LoginController()

router.post('/login', async (req: Request, res: Response) => {

    await logincontroller.authenticate(req, res)
})

router.post('/auth', AuthMiddleware, (req, res) => {
    res.json({ hello: 'world' })
});





const loginController = new LoginController()

router.post('/login', async (req: Request, res: Response) => {

    await loginController.authenticate(req, res)
})






export default router