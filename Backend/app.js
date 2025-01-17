const express = require('express');
const module1=require("./functions/primarytest");
const app = express();
const port = 4565;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/',module1.funct4);
app.get('/test1',module1.funct3);
app.get("/r1/*",module1.funct2);
app.get('/test3/:p1',module1.funct1); 
app.listen(port,()=>{
    console.log(`Server is running at http:localhost:${port}`);
});