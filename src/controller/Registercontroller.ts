import { Request, Response } from "express";
import { registerRepository } from "../repositories/registerRepository";
import bcrypt from "bcrypt"
import * as jsonwebtoken from "jsonwebtoken";




export class registercontroller{
  async create(req: Request, res: Response ){
    const{name,email,password} = req.body

    const UserExits = await registerRepository.findOne( email )
    
    if(UserExits){
      throw new Error("E-email ja exite");
      
    }

    const hashPassword = await bcrypt.hash (password,10);
     
    const newUser = registerRepository.create({
      name,
      email,
      password:hashPassword
    })

    await registerRepository.save(newUser)
    

    return res.status(201).json()
  }
     async login(req: Request, res: Response ){
     const{email,password} = req.body
      
    const User = await registerRepository.findOneBy({ email })
    
    if(!User){
      throw new Error("E-email ou senha inválidos");
      
    }
    const verifyPass = await bcrypt.compare(password,User.password )

    if (!verifyPass) {
      throw new Error(" senha inválida");
      
    }
    const token = jsonwebtoken.sign({id: User.id},process.env.JSONWEBTOKEN_PASS ??'',{expiresIn:60*60

    
    })
   const{password:_,...Userlogin} = User

   return res.json({
   User

   })

  }
}