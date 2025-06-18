import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { useRoute } from "./routes/user.route";
import { candidatureRoute } from "./routes/candidature.route";
import { jobRoute } from "./routes/job.route";
import { authRoute } from "./routes/auth.route";
import { routeEvatuation } from "./routes/evaluation.route";
import { userProps } from "./types/user";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 3000;

app.use("/users", useRoute);
app.use("/candidatura", candidatureRoute);
app.use("/vagas", jobRoute);
app.use("/login", authRoute);
app.use("/avaliacao", routeEvatuation);

declare global {
  namespace Express {
    interface Request {
      user: userProps
    }
  }
}

mongoose
  .connect(process.env.BD_URI as string)
  .then(() => console.log("BD conectado com sucesso!"))
  .catch((error) =>
    console.log("Ocorreu um erro ao contectar com a DB: ", error)
  );

app.listen(port, () => console.log(`Server running on ${host}:${port}`));