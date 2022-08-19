import { request, Request, response, Response, Router } from "express";
import { RegisterController, } from "./controllers/register.controllers";
const jwt = require('jsonwebtoken')


const router = Router()

const registerController = new RegisterController()

router.post('/register', async (req: Request, res: Response) => {

    await registerController.registra(req, res)
})


router.get('/login', async (req: Request, res: Response) => {

    res.json([{ id: 1, email: 'covalick113@gmail.com', password: 'covalick123' }]);
    if (req.body.email === 'Covalick113@gmail.com' && req.body.password === 'covalick123') {

        await registerController.registra(req, res)
    }


})





export default router