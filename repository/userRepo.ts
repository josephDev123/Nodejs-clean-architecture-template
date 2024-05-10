import { UserModel } from "../database/models/User";

export class UserRepo {
  async save(firstname: string, surname: string) {
    const user = new UserModel({ firstname: firstname, surname: surname });
    await user.save();
    // console.log("user created");
  }
}
