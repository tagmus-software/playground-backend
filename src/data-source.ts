import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    "type": "mysql",
    "host": "localhost",
    "port":  3306,
    "username": "reinaldo",
    "password": "cafecodar",
    "database": "meubanco",

    synchronize: true,
    logging: false,
    entities: ['src/entity/users.ts'],
    migrations: ['src/migration/*.ts'],
    subscribers: ['src/subscribes'],
})
