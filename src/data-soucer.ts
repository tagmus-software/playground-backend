import "reflect-metadata"
import * as dotenv from "dotenv";
dotenv.config();
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "./entity/User";
import { SeederOptions } from "typeorm-extension";



const port = process.env.DB_PORT as number | undefined
 
const options: DataSourceOptions & SeederOptions= {
  type: "mysql",
    host: "localhost",
    port:port,
    username: 'reinaldo',
    password: 'cafecodar',
    database: 'playgound',
   entities:[User],
    logging: true,
    synchronize:true,
    seeds:[]
  

}
export const AppDataSource = new DataSource(options);