import { db } from "../controller/db_config.js";

const checkDatabase=(uName,mail)=>{
    db.connect();
    const qry="select exists(select 1 from user_table where name='testname' and email='p')";
    db.query(qry,(err,response)=>{
        if(err)
        console.log(err);
        else{
            console.log(response.rows[0].exists)
        }
        db.end();
    })
}

export {checkDatabase};