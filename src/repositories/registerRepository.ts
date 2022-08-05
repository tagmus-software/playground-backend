import { AppDataSource } from "../models/data-soucer";
import { User } from "../entity/User";
export const registerRepository = AppDataSource.getRepository(User)