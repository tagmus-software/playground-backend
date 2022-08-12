import { request, Request, response, Response, Router } from "express";
import { RegisterController, } from "./controllers/register.controllers";


[]
const router = Router()

const registerController = new RegisterController()

router.post('/register', async (req: Request, res: Response) => {
    console.log('ta chegando na rota')
    await registerController.registra(req, res)
})





export default router