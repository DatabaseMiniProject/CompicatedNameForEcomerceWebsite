import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ page: "home" });
});

router.post("/", (req, res) => {
  res.json({ res: "Subscribed to the news letter" });
});

export default router;
