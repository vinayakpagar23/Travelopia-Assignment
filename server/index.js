const express = require("express");
const dotenv =require("dotenv");
dotenv.config();

const app = express();


app.get("/",(req,resp)=>{
    resp.send("Api is Running successfully");
})



const PORT = process.env.PORT || 5000;
app.listen(5000,console.log(`server started on Port ${PORT}`));