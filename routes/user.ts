import { Request, Response, Router } from "express";
import { UserController } from "../controllers/userController";
import { UserService } from "../services/userService";

export const User = Router();
const userService = new UserService();
const UserControllers = new UserController(userService);

User.post("/create", UserControllers.create.bind(UserControllers));
