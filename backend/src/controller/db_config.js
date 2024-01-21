import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db_pool = new pg.Pool({
  user: process.env.USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max:20,
  idleTimeoutMillis:3000
});



const port=process.env.PORT;

export {db_pool,port};