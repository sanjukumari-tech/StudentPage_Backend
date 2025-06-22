import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT||3900;
app.get("/home",(req,res)=>{
    console.log("welcome to home page")
    res.send({message:"welcome to homepage"})
})

app.listen(port ,()=>{
    console.log(`server is running on http://localhost:${port}`)
})