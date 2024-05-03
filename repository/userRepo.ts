export class UserRepo {
  private readonly _db: string[] = [];

  async create(firstname: string) {
    this._db.push(firstname);
    console.log(firstname);
    return;
  }
}
