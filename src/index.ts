import express, { Application, Request, Response } from "express";
import config from "./db/config";
const cookieParser = require("cookie-parser");
const cors = require("cors");
var bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
import "reflect-metadata";
import { DataSource } from "typeorm";

const port = 5000;
const app: Application = express();

// Body parsing Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));

// DB connection
const AppDataSource = new DataSource(config);

(async () => {
  await AppDataSource.initialize();
  console.log("connected to DB!");
})();

app.use("/", indexRouter);

try {
  app.listen(port, async () => {
    console.log(`Server is running on port ${port}!!`);
  });
} catch (error: any) {
  console.log(`Error occured: ${error.message}`);
}

export default AppDataSource;
