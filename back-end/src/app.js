import dotenv from "dotenv";
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
// Configurando o CORS para que o back-end aceite
// requisições vindas das origens indicadas pela
// variável de ambiente ALLOWED_ORIGINS
app.use(cors({ origin: process.env.ALLOWED_ORIGINS.split(",") }));

/*********** ROTAS DA API **************/

import carsRouter from "./routes/cars.js";
app.use("/cars", carsRouter);

import customersRouter from "./routes/customers.js";
app.use("/customers", customersRouter);

import usersRouter from "./routes/users.js";
app.use("/users", usersRouter);

export default app;
