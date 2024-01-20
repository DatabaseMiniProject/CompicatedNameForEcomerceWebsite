import { db } from "../controller/db_config.js";

const checkDatabase = async (uName, mail) => {
  try {
    await db.connect();
    const qry =
      "select exists(select 1 from user_table where name=$1 and email=$2)";
    const res = await db.query(qry, [uName, mail]);
    await db.end();
    return res.rows[0].exists;
  } catch (err) {
    console.log(err);
  }
};

export { checkDatabase };
