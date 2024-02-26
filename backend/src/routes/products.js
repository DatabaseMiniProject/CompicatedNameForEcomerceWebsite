import express from 'express'
const router = express.Router();
import {getItemsInfo} from '../controller/db_query.js'

router.get('/:productName',async(req,res)=>{
    const name=req.params.productName
    const result = await getItemsInfo(name);
    res.json(result);
})

export default router;