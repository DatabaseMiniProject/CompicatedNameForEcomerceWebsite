import express from "express";
import bcrypt from "bcryptjs";
import { checkDatabase,insertIntoDatabase,fetchCreds } from "../controller/db_query.js";
const router = express.Router();

//***Query the sign-up ifo into the table if the mail id and username doesn't already exist***
router.post("/signup", async(req, res) => {
  const { uName, mail, pWd } = req.body;
  const isInDatabase = await checkDatabase(uName, mail);
  if (isInDatabase) {
    res.json({ status: 'already_present' });
  } else {
    const salt = bcrypt.genSaltSync();
    const pHash = bcrypt.hashSync(pWd, salt);
    const insert = await insertIntoDatabase(uName, mail, pHash);
    if (insert.rowCount) res.status(200).json({ status: "registered" });
    else res.status(500).json({ status: "try_again" });
  }
});

router.post("/login",async(req, res) => {
  const {mail,pWd}=req.body;
  const db_creds = await fetchCreds(mail);
  const compare_hash=bcrypt.compareSync(pWd,db_creds.passhash);
  res.json({ res: compare_hash });
});

router.get("/", (req, res) => {
  res.json({ res: "My Account info" });
});

router.get("/cart/:id", (req, res) => {
  res.json({ res: `Cart of the user with id=${req.params.id}` });
});

router.get("/wishlist/:id", (req, res) => {
  res.json({ res: `Wishlist of the user with id=${req.params.id}` });
});

export default router;
