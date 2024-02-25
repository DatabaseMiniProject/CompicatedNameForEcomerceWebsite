import express from "express";
import { getItemsByCategory } from "../controller/db_query.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ page: "home" });
});

router.post("/", (req, res) => {
  res.json({ res: "Subscribed to the news letter" });
});

router.get('/:category',async(req,res)=>{
  // console.log(`Handling /${req.params.category} request`)
    const mens_items = await getItemsByCategory(req.params.category);
    res.json({items:mens_items})
})

export default router;
