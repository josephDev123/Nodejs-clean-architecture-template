import express from "express";
import { User } from "./routes/user";
const PORT = 2000;

const app = express();
app.use(express.json());

app.use("/user", User);

app.listen(PORT, () => console.log(`running on ${PORT}`));
