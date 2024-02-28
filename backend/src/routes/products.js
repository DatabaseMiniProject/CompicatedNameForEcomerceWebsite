import express from 'express'
const router = express.Router();
import {getImages,insertIntoCart, getItemsInfo, getSizes} from '../controller/db_query.js'

router.get('/:productName',async(req,res)=>{
    const name=req.params.productName
    const information = await getItemsInfo(name);
    const images = await getImages(name)
    const sizes = await getSizes(name);
    res.json({information,images,sizes})
})

router.post('/:productName',async (req,res)=>{
    const {qty,size} = req.body;
    const product_name = req.params.productName;
    // console.log(product_name,qty,size)
    const user_id = 13689
    const addedToCart = await insertIntoCart(user_id,product_name,qty,size);
    if(addedToCart) 
    res.status(200).json({res:"ok"})
    else res.status(500).json({res:"try again later"})
})

export default router;