// import path from "path";
import { DataSourceOptions } from "typeorm";
import { Users } from "../entities/user";
import { Pets } from "../entities/pet";
require("dotenv").config();

export default {
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  // migrationsRun: true,
  dropSchema: false,
  logging: true,
  entities: [Users, Pets],
  migrations: [],
  // cli: {
  //   entitiesDir: path.join(__dirname, "..", "entities"),
  //   migrationsDir: path.join(__dirname, "migrations"),
  // },
} as DataSourceOptions;
