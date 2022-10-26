import { Request } from "express";
import { User } from "../models/user.model";

export interface RequestApp extends Request {

    user: User
}