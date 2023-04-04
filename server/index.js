const express = require("express");
const dotenv =require("dotenv");
const {data} = require("./data/data");
const MongoDb = require("./config/db")


const app = express();
dotenv.config();

MongoDb();


console.log(data)
app.get("/",(req,resp)=>{
    resp.send("Api is Running successfully");
})

app.get("/api/data",(req,resp)=>{
    resp.send(data);
})


const PORT = process.env.PORT || 5000;
app.listen(5000,console.log(`server started on Port ${PORT}`));