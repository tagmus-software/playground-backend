import { DataSource } from "typeorm";
import 'reflect-metadata'
import 'dotenv'

const port = process.env.DB_PORT as number | undefined

export const appDataSource = new DataSource ({
 type: "mysql",
 host:process.env.DB_HOST,
 port:3306,
 username:process.env.DB_USER,
 password:process.env.DB_PASS,
 database:process.env.DB_NAME,

 
 entities: [`${__dirname}/**/repositories/*.{ts,js}`],
 synchronize: true,
 logging: false,
 

});