import {Request,Response} from 'express'
import { getRepository } from 'typeorm';

class registercontroller{
  store(req: Request, res: Response){
    const Repository = getRepository
  }


}

export default new registercontroller();