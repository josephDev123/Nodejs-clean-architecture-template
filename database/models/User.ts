import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstname: String,
  surname: String,
});

export const UserModel = model("user", UserSchema);
