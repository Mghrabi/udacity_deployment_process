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


//don't change to put this in production file
//change the uri 
// export const sequelize = new Sequelize(
//   "postgres://postgres:postgrespostgres@database-1.cqhhsz3eie0k.us-east-1.rds.amazonaws.com:5432/databasename"
//   // 'postgres://postgres:postgrespostgres@database-1'
// );
