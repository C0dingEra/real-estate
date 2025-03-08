import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose'
dotenv.config();
const app=express();

//db connection
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database connected successfully")
}).catch((error)=>{
    console.log(error)
})

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`port is running at ${port}`)
})