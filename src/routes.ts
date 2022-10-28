
import { request, Request, response, Response, Router } from "express";
import { LoginController } from "./controllers/login.controllers";
import { PasswordController } from "./controllers/password.controller";
import { RegisterController, } from "./controllers/register.controllers";
import { UserController } from "./controllers/user.controllers";
import { RequestApp } from "./interface/request";
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

const usercontroller = new UserController()

router.put('/users/:id', AuthMiddleware, async (req: Request, res: Response) => {

    await usercontroller.editar(req, res);

})

router.delete('/users/:id', AuthMiddleware, async (req: Request, res: Response) => {

    await usercontroller.deletar(req, res);

})

const passwordcontroller = new PasswordController()

router.put('/password', AuthMiddleware, async (req: RequestApp, res: Response) => {

    await passwordcontroller.editarPass(req, res);
})

export default router