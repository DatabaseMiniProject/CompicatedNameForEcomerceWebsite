import express from "express";
const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({ res: "Signup info recieved" });
});

router.post("/login", (req, res) => {
  res.json({ res: "Login info recieved" });
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