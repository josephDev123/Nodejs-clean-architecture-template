"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./routes/user");
const os_1 = __importDefault(require("os"));
const PORT = 2000;
const cpus = os_1.default.cpus();
const totalCores = cpus.length;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", (req, res) => res.send("Home page " + totalCores));
app.use("/user", user_1.User);
app.listen(PORT, () => console.log(`running on ${PORT}`));
