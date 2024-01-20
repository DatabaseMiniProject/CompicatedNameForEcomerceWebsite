import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ res: "All the products in the shop" });
});

router.get("/product/:id", (req, res) => {
  res.json({
    res: `Details of product with id=${req.params.id} along with related products and the reviews`,
  });
});

export default router;