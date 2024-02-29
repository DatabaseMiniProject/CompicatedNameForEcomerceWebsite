import express from "express";
import bcrypt from "bcryptjs";
import {
  checkDatabase,
  insertIntoDatabase,
  fetchCreds,
  fetchCartItems,
  deleteItems,
  getCartItems
} from "../controller/db_query.js";
const router = express.Router();

//***Query the sign-up if into the table if the mail id and username doesn't already exist***
router.post("/signup", async (req, res) => {
  const { username,password,email } = req.body.packet;
  const isInDatabase = await checkDatabase(username, email);
  if (isInDatabase) {
    res.json({ isAuthenticated: false,id:1111 });
  } else {
    const salt = bcrypt.genSaltSync();
    const pHash = bcrypt.hashSync(password, salt);
    const insert = await insertIntoDatabase(username, email, pHash);
    if (insert.res) res.status(200).json({ isAuthenticated: true,id:insert.uiD });
    else res.status(500).json({ isAuthenticated: false });
  }
});

//***Query the table and fetch the stored password hash and compare it with the hash of the entered password */
router.post("/login", async (req, res) => {
  const {email,password}=req.body
  const db_creds = await fetchCreds(email);
  console.log(db_creds.user_id)
  // console.log(db_creds)
  if (db_creds.user_id !== undefined) {
    const compare_hash = bcrypt.compareSync(password, db_creds.user_password_hash);
    res.json({ isAuthenticated: compare_hash,id:db_creds.user_id});
  }
});

router.get("/", (req, res) => {
  res.json({ res: "My Account info" });
});

router.get("/cart/:id", async (req, res) => {
  console.log(req.params.id)
  const cart_items = await fetchCartItems(req.params.id);
  if (cart_items.length !== 0) res.json({ res: cart_items });
});

router.delete('/cart/:id/:product_name/:product_size',async(req,res)=>{
  const cart_items = await deleteItems(req.params.id,req.params.product_name,req.params.product_size);
  res.json(cart_items)
})
// router.get("/wishlist/:id", (req, res) => {
//   res.json({ res: `Wishlist of the user with id=${req.params.id}` });
// });

router.post('/checkout/:id',async(req,res)=>{
  const checkout_options = req.body
  const user_id = req.params.id
  const result = await getCartItems(user_id);
  const pushed=await insertIntoOrderTableAndProduct_table(id,result,checkout_options);
})

export default router;
