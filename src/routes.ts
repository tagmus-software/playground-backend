import { Router } from "express";
import { registercontroller } from "./controller/Registercontroller";


const router = Router();

router.post('/user', new registercontroller().create);
router.post('/login',new registercontroller().login) ;

export default router;