import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db_pool = new pg.Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  max:20,
  idleTimeoutMillis:3000
});



const port=process.env.PORT;

export {db_pool,port};