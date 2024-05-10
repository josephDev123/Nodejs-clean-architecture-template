import express, { Response } from "express";
import { User } from "./routes/user";
import os from "os";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { DbConnect } from "./database/db";

dotenv.config();

const PORT = process.env.PORT;
const cpus = os.cpus();
const totalCores = cpus.length;

const app = express();
app.use(express.json());

const db = new DbConnect(process.env.MONGO_URL!);
db.connect();

app.use("/user", User);

app.use("/", async (req, res: Response) => {
  const fileData = fs.readFileSync(path.join(__dirname, "html.html"), {
    encoding: "utf8",
  });

  res.send(fileData).end();
});

app.listen(PORT, () => console.log(`running on ${PORT}`));
