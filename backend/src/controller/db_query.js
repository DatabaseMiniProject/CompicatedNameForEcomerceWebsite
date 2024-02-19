import { db_pool } from "../controller/db_config.js";
import { v4 } from "uuid";

//****Query to check if the username and mail already exists */
const checkDatabase = async (uName, mail) => {
  try {
    const db = await db_pool.connect();
    const qry =
      "select exists(select 1 from user_table where name=$1 and email=$2)";
    const res = await db.query(qry, [uName, mail]);
    db.release();
    return res.rows[0].exists;
  } catch (err) {
    console.log(err);
  }
};

//****Query to insert username pwd hash and mail into user table */
const insertIntoDatabase = async (uName, mail, pHash) => {
  try {
    const db = await db_pool.connect();
    const qry = "insert into user_table values($1,$2,$3,$4)";
    const uuidString = v4();
    const integerId = parseInt(uuidString.slice(0, 4), 16);
    const res = await db.query(qry, [integerId, uName, mail, pHash]);
    db.release();
    return res;
  } catch (err) {
    console.log(err);
  }
};

//***Query fetches user id his password hash from the db using his mail */
const fetchCreds = async (mail) => {
  try {
    const db = await db_pool.connect();
    const qry = "select uid,name,passhash from user_table where email=$1";
    const res = await db.query(qry, [mail]);
    db.release();
    return res.rows[0];
  } catch (err) {
    console.log(err);
  }
};

const getItemsByCategory = async (categoryName) => {
  try {
    const db = await db_pool.connect();
    const qry = "select * from  products where category=$1";
    const res = await db.query(qry, [categoryName]);
    db.release();
    return res.rows;
  } catch (err) {
    console.log(err);
  }
};

export { checkDatabase, insertIntoDatabase, fetchCreds , getItemsByCategory };
