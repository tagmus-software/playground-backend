import 'express-async-errors'
import "reflect-metadata"
import * as dotenv from "dotenv";
dotenv.config();
import { DataSource } from "typeorm"



const port = process.env.DB_PORT as unknown as number | undefined

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port:port,
    username: 'reinaldo',
    password: 'cafecodar',
    database: 'playgound',
    entities:[`${__dirname}**/entity/*{ts,js}`],
    logging: true,
    synchronize:true,
  
    
})
