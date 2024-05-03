import { UserRepo } from "../repository/userRepo";

export class UserService {
  userRepo = new UserRepo();

  async create(firstname: string) {
    return this.userRepo.create(firstname);
  }
}
