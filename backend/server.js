import express from "express";
import cors from 'cors';
import homeRouter from './src/routes/home_page.js';
import accountRouter from './src/routes/account.js';
import {port} from './src/controller/db_config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/',homeRouter);
app.use('/account',accountRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
