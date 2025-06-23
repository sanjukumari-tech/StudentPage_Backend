import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"
import connectDb from "./utils/database.js";
import userRoute from "./routes/user.route.js";
import uploadRoute  from "./routes/upload.route.js";
import getAllSubmission from "./routes/admin.routes.js"
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
// const corsOptions = {
//     origin: process.env.FRONTEND_URL || "http://localhost:5173/", // Deployed frontend URL
//     credentials: true, // Allow cookies to be sent
// };
app.use(cors());
const port = process.env.PORT||3900;

app.get("/home",(req,res)=>{
    console.log("welcome to home page")
    res.send({message:"welcome to homepage"})
})

app.use("/api/user", userRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/admin", getAllSubmission);

app.listen(port ,async()=>{
    try{
         await connectDb();
     console.log(`server is running on http://localhost:${port}`)
    }catch(error){
        console.log("getting error while running server")

    }
    
})