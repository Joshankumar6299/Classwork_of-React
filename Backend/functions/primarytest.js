const p1 = require("../db/connobjpgsql");
const o1 = p1.connectionObj();
const functUpdate = (req,resp) => {
    try {
        v1 = req.body.var1;
        v2 = req.body.var2;
        v3 = req.body.var3;
        o1.query(
            // `INSERT INTO public.table1 
            // (field1,field2,field3)VALUES('${v1}',${v2},'${v3}');`,
            `UPDATE public.table1
                SET  field1='${v1}', field2='${v2}', field3='${v3}'
                WHERE <condition>;`,

            (err , result) => {
                if(err){
                    console.log("Error executing query",err.stack);
                    resp.status(500).send("Sonthing went worng");
                    
                }else{
                    resp.send("Data updated successfully!");
                }
            }
        );

            
    } catch  {
        console.log("Error executing query");
        resp.status(500).send("Something went wrong!")
        
    }
}

// const funct1 = (req, res) => {
//     const v1 = req.params.p1;
//     console.log(req.params);  
//     res.send(`This is a test page with parameter: ${v1}`);  
// };

// const funct2 = (req, res) => {
//     res.send("This is a test2");
// };

// const funct3 = (req, res) => {
//     res.send("This is a test page");
// };

// const funct4 = (req, res) => {
//     res.send("Hello World!! from express js");
// };

module.exports = {
    // funct1,
    // funct2,
    // funct3,
    // funct4
    // functInsert
    functUpdate
};
