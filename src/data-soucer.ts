import { DataSource } from "typeorm";

const port = +process.env.DB_PORT 
export const appDataSource = new DataSource ({
 type: "mysql",
 host:process.env.DB_HOST,
 port:port,
 username:process.env.DB_USER,
 password:process.env.DB_PASS,
 database:process.env.DB_NAME,

 
 entities: [`${__dirname}/models/**/*.{ts,js}`],
 synchronize: true,
 logging: false,
 

});