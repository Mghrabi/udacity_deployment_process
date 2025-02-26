import { TIMEOUT } from "dns";
import { TimeoutError } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";
import * as dotenv from "dotenv";
dotenv.config();

console.log('process.env.NODE_ENV',process.env.NODE_ENV)

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  // port: config.dbPort,
  dialect: "postgres",
  storage: ":memory:",
});// 


