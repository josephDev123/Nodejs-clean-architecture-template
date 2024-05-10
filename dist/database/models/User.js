"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstname: String,
    surname: String,
});
exports.UserModel = (0, mongoose_1.model)("user", UserSchema);
