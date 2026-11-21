import express from "express";
import helloRouter from "./routes/routes.js";
import logger from "./middlewares/logger.js";
import errorHandler from './middlewares/errorHandler.js'

const app = express();

app.use(express.json());

app.use(logger)

app.use("/api/v1", helloRouter);

app.use(errorHandler)

export default app;