import express from "express";
import cors from 'cors';
import pg from "pg";
import dotenv from "dotenv";
import homeRouter from './src/routes/home_page';
import shopRouter from './src/routes/shop';
import accountRouter from './src/routes/account';

const app = express();
dotenv.config();

const db = new pg.Client({
  user: process.env.USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(homeRouter,'/');
app.use(accountRouter,'/account');
app.use(shopRouter,'/shop');

db.connect();

db.query("select * from user_table", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.rows);
  }
  db.end();
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
