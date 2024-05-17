import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
  constructor(private readonly userService: UserService) {
    this.userService = userService;
  }

  async create(req: Request, res: Response) {
    this.userService.create(req.body);
    return res.end();
  }
}
