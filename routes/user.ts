import { Request, Response, Router } from "express";
import { UserController } from "../controllers/userController";
import { UserService } from "../services/userService";
import { UserRepo } from "../repository/userRepo";

export const User = Router();
const userRepo = new UserRepo();
const userService = new UserService(userRepo);
const UserControllers = new UserController(userService);

User.post("/create", UserControllers.create.bind(UserControllers));
