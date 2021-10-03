import {Application} from "./app/application";
import * as dotenv from 'dotenv';


module.exports = {};

dotenv.config({path: __dirname + '/.env'});

const config: ConfigurationInterface = {
    DB_URL: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV,
    APP_PORT: Number(process.env.PORT) || 4000,

}

const app: Application = new Application(config);
app.serve();

/*
const mongoose = require("mongoose");

const express = require("express");
const app = express();

const DB_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 4000;

// middlewares
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cookieParser());
app.options("/volunteer/*", cors());
app.use(cors());
app.use(morgan(process.env.NODE_ENV == "production" ? "common" : "dev"));
app.use(express.json());

mongoose
  .connect(DB_URL, {
    dbName: process.env.NODE_ENV === "production" ? "prod" : "staging",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Database Connected!");
  });

app.listen(PORT, () => {
  console.log("🚀 Server Ready! at port:", PORT);
});

module.exports = app;

*/
