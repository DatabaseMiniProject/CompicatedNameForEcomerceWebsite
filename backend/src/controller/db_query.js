import { db_pool } from "../controller/db_config.js";
import { v4 } from "uuid";

//****Query to check if the username and mail already exists */
const checkDatabase = async (username, email) => {
  try {
    // console.log(username,email)
    const db = await db_pool.connect();
    const qry =
      "select * from user_table where user_name='C' and user_mail=$1";
    const res = await db.query(qry, [email]);
    db.release();
    if(res.rowCount===0)return false
    else return true
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
    const res = await db.query(qry, [integerId, uName,pHash, mail]);
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
    const qry = "select user_id,user_name,user_password_hash from user_table where user_mail=$1";
    const res = await db.query(qry, [mail]);
    db.release();
    return res.rows[0]
  } catch (err) {
    console.log(err);
  }
};

const getItemsByCategory = async (categoryName) => {
  try {
    const db = await db_pool.connect();
    const qry = "select * from products_table,image_table it,filter_category_table,category_table as ct where it.product_id=products_table.product_id and products_table.product_id=filter_category_table.product_id and filter_category_table.parent_category_id=ct.category_id and ct.category_name=$1";
    const res = await db.query(qry, [categoryName]);
    db.release();
    return res.rows;
  } catch (err) {
    console.log(err);
  }
};

export { checkDatabase, insertIntoDatabase, fetchCreds , getItemsByCategory };
