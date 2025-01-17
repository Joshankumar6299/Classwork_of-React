const con = require ("../db/connobjectpgsql");
const pool = con.connectionObj();
const dbfun1 = (req , res) => {
    pool.query(
        "Select * from table1 where id = $1",
        [req.params.id],
        (err , result) => {
            if(err){
                console.log("Error executing query", err.stack);
                
            }
        }
    )
}