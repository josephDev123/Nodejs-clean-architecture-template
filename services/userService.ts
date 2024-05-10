import { UserRepo } from "../repository/userRepo";

export class UserService {
  userRepo;
  constructor(private readonly UserRepo: UserRepo) {
    this.userRepo = UserRepo;
  }

  async create(payLoad: any) {
    console.log(payLoad);
    const { firstname, surname } = payLoad;
    return this.userRepo.save(firstname, surname);
  }
}
