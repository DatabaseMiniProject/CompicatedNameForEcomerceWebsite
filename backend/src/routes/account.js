import express from "express";
import bcrypt from "bcryptjs";
import {
  checkDatabase,
  insertIntoDatabase,
  fetchCreds,
} from "../controller/db_query.js";
const router = express.Router();

//***Query the sign-up if into the table if the mail id and username doesn't already exist***
router.post("/signup", async (req, res) => {
  const { uName, mail, pWd } = req.body;
  const isInDatabase = await checkDatabase(uName, mail);
  if (isInDatabase) {
    res.json({ status: "already_present" });
  } else {
    const salt = bcrypt.genSaltSync();
    const pHash = bcrypt.hashSync(pWd, salt);
    const insert = await insertIntoDatabase(uName, mail, pHash);
    if (insert.rowCount) res.status(200).json({ status: "registered" });
    else res.status(500).json({ status: "try_again" });
  }
});

//***Query the table and fetch the stored password hash and compare it with the hash of the entered password */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const db_creds = await fetchCreds(email);
  if (db_creds !== undefined) {
    const compare_hash = bcrypt.compareSync(password, db_creds.passhash);
    res.json({ res: compare_hash });
  }
});

router.get("/", (req, res) => {
  res.json({ res: "My Account info" });
});

router.get("/cart/:id", async (req, res) => {
  const cart_items = await fetchCartItems(req.params.id);
  if (cart_items.length !== 0) res.json({ res: cart_items });
  else res.json({ res: ["no items in the cart"] });
});

// router.get("/wishlist/:id", (req, res) => {
//   res.json({ res: `Wishlist of the user with id=${req.params.id}` });
// });

export default router;
