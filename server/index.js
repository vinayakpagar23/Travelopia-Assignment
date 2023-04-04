const express = require("express");

const app = express();

app.get("/",(req,resp)=>{
    resp.send("Api is Running successfully");
})

app.listen(5000,console.log("server started"));