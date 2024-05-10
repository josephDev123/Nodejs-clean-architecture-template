import mongoose from "mongoose";

export class DbConnect {
  url = "";
  constructor(url: string) {
    this.url = url;
  }

  async connect() {
    try {
      const connection = await mongoose.connect(this.url);
      console.log("DB CONNECTED");
    } catch (error) {
      console.log(error);
    }

    mongoose.connection.on("error", (err) => console.log(err));
  }
}
