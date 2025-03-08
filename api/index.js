import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import userRoute from '../api/routes/user.route.js'
dotenv.config();
const app=express();

//db connection
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database connected successfully")
}).catch((error)=>{
    console.log(error)
})

const port=process.env.PORT;

app.use('/api/user',userRoute);

app.listen(port,()=>{
    console.log(`port is running at ${port}`)
})