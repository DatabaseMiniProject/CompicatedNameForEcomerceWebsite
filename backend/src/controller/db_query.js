import { db } from "../controller/db_config.js";
import {v4} from 'uuid';

db.connect();
const checkDatabase = async (uName, mail) => {
  try {
    const qry =
      "select exists(select 1 from user_table where name=$1 and email=$2)";
    const res = await db.query(qry, [uName, mail]);
    return res.rows[0].exists;
  } catch (err) {
    console.log(err);
  }
};

const insertIntoDatabase=async(uName,mail,pHash)=>{
    try{
        const qry="insert into user_table values($1,$2,$3,$4)";
        const uuidString = v4();
        const integerId = parseInt(uuidString.slice(0,4),16);
        const res=await db.query(qry,[integerId,uName,mail,pHash]);
        return res;
    }
    catch(err){console.log(err)}
}

export { checkDatabase,insertIntoDatabase };
