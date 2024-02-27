import express from "express";
import { getItemsByCategory,fetchNewItems } from "../controller/db_query.js";
const router = express.Router();

router.get("/", async(req, res) => {
  const new_items = await fetchNewItems();
  res.json({new_items})
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
