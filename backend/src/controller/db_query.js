import { db_pool } from "../controller/db_config.js";
import { v4 } from "uuid";

//****Query to check if the username and mail already exists */
const checkDatabase = async (username, email) => {
  try {
    // console.log(username,email)
    const db = await db_pool.connect();
    const qry = "select * from user_table where user_name='C' and user_mail=$1";
    const res = await db.query(qry, [email]);
    db.release();
    if (res.rowCount === 0) return false;
    else return true;
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
    const res = await db.query(qry, [integerId, uName, pHash, mail]);
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
    const qry =
      "select user_id,user_name,user_password_hash from user_table where user_mail=$1";
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
    let qry,res;
    if (categoryName === "all") {
      qry =
        "select * from products_table,image_table it,filter_category_table,category_table as ct where it.product_id=products_table.product_id and products_table.product_id=filter_category_table.product_id and filter_category_table.parent_category_id=ct.category_id";
        res = await db.query(qry);
      } else {
      qry =
        "select * from products_table,image_table it,filter_category_table,category_table as ct where it.product_id=products_table.product_id and products_table.product_id=filter_category_table.product_id and filter_category_table.parent_category_id=ct.category_id and ct.category_name=$1";
        res = await db.query(qry, [categoryName]);
      }
    db.release();
    return res.rows;
    // console.log(res.rows)
  } catch (err) {
    console.log(err);
  }
};

const fetchCartItems = async (username) => {
  try {
    const db = await db_pool.connect();
    // have to add the size to qry as well
    const qry =
      " select ut.user_name,pt.product_name,ct.product_size,ct.qty,ct.total_price,it.image1 from image_table it,user_table ut,products_table pt,cart_table ct,size_table st where ct.product_size=st.product_size and st.product_id=ct.product_id and pt.product_id=it.product_id and ct.product_id = pt.product_id and ct.user_id = ut.user_id and ut.user_name=$1;";
    const res = await db.query(qry, [username]);
    db.release();
    return res.rows;
  } catch (err) {
    console.log(err);
  }
};

const getImages = async (itemName) => {
  try {
    const db = await db_pool.connect();
    const imgQry =
      "select it.image1,it.image2,it.image3 from image_table it,products_table pt where pt.product_id=it.product_id and pt.product_name=$1";
    const prod_images = await db.query(imgQry, [itemName]);
    const images = [];
    db.release();
    Object.values(prod_images.rows[0]).forEach((value) => images.push(value));
    return images;
  } catch (err) {
    console.log(err);
  }
};

const getSizes = async (itemName) => {
  try {
    const db = await db_pool.connect();
    const sizQry =
      "select st.product_size from size_table st,products_table pt where st.product_id=pt.product_id and pt.product_name=$1";
    const prod_sizes = await db.query(sizQry, [itemName]);
    db.release();
    const sizes = [];
    prod_sizes.rows.forEach((item) => sizes.push(item.product_size));
    return sizes;
  } catch (err) {
    console.log(err);
  }
};

const getItemsInfo = async (itemName) => {
  try {
    const db = await db_pool.connect();
    const qry =
      " select pt.product_name,ct.category_name,ct1.category_name as parent_category_name,pt.product_cost,pt.product_description from products_table pt,filter_category_table fct,category_table ct,category_table ct1 where pt.product_id=fct.product_id and ct.category_id=fct.category_id and ct1.category_id=fct.parent_category_id and pt.product_name=$1;";
    const prod_details = await db.query(qry, [itemName]);
    db.release();
    return prod_details.rows[0];
  } catch (err) {
    console.log(err);
  }
};

const insertIntoCart = async (user_id, name, qty, size) => {
  try {
    const db = await db_pool.connect();
    const fetch_product_id =
      "select pt.product_id from products_table pt where product_name=$1";
    const res = (await db.query(fetch_product_id, [name])).rows[0];
    const cost = (
      await db.query(
        "select pt.product_cost from products_table pt where product_id=$1",
        [res.product_id]
      )
    ).rows[0].product_cost;
    const total_cost = qty * cost;
    const qry = "insert into cart_table values($1,$2,$3,$4,$5)";
    const result = await db.query(qry, [
      user_id,
      res.product_id,
      size,
      qty,
      total_cost,
    ]);
    db.release();
    if (result.rowCount === 1) return true;
    else return false;
  } catch (err) {
    console.log(err);
  }
};

const fetchNewItems = async() =>{
  try{
    const db =await db_pool.connect();
    const qry = "select product_id from (select distinct product_id,max(restock_date) from size_table group by product_id limit 3) as subQuery;"
    const res = await db.query(qry);
    let latest = [];
    const qry1 = ' select pt.product_name,it.image1,pt.product_cost from products_table pt,image_table it where pt.product_id=it.product_id and pt.product_id=$1;'
    for(let i=0;i<3;i++){
    const res1 = await db.query(qry1,[res.rows[i].product_id])
    latest.push(res1.rows[0])
    }
    db.release()
    // console.log(latest)
    return latest
  }
  catch(err){
    console.log(err)
  }
}

export {
  checkDatabase,
  insertIntoDatabase,
  fetchCreds,
  getItemsByCategory,
  fetchCartItems,
  getItemsInfo,
  getImages,
  getSizes,
  insertIntoCart,
  fetchNewItems
};
