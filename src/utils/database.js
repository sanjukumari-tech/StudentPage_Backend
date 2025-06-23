import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb= async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb is connected")

    }catch(error){
        console.log("error while connectiong db")
    }
}

export default connectDb;