import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const app=express();

const db = new pg.Client({
    user:process.env.USER,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT
});

db.connect();

db.query('select * from user_table',(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(res.rows)
    }
    db.end();
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  });