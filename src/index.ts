
import 'reflect-metadata';

import { AppDataSource } from "./data-soucer"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

 
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.Name = "reinaldo"
    user.email = "covalick113@gmail.com"
    user.password = "cafecodar"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", user)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
