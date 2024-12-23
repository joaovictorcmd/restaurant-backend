import express from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";

import { router } from "./routes";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.ts";

const app = express();
app.use(express.json());

app.use(cors());
app.use(router);
app.use("/files", express.static(path.resolve(__dirname, "..", "temp")));
app.use(errorHandlerMiddleware);

app.listen(3333, () => console.log("Servidor Online"));

export { app };
