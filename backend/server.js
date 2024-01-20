import express from "express";
import cors from 'cors';
import homeRouter from './src/routes/home_page.js';
import shopRouter from './src/routes/shop.js';
import accountRouter from './src/routes/account.js';
import {db,port} from './src/controller/db.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/',homeRouter);
app.use('/account',accountRouter);
app.use('/shop',shopRouter);

db.connect();

db.query("select * from user_table", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.rows);
  }
  db.end();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
