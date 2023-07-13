import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app=express();
const PORT=process.env.APP_PORT || 5000;

app.get('/',(req,res)=>{
    res.send("welcome to Node js application...")
})

app.listen(PORT,()=> console.log(`listening on port ${PORT}`));