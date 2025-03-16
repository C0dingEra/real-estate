import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import userRoute from '../api/routes/user.route.js'
import authRoute from '../api/routes/auth.route.js'
dotenv.config();
const app=express();

app.use(express.json()) //allow json as the input of the server

//db connection
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database connected successfully")
}).catch((error)=>{
    console.log(error)
})

const port=process.env.PORT;

app.use('/api/user',userRoute);
app.use('/api/auth',authRoute)

app.listen(port,()=>{
    console.log(`port is running at ${port}`)
})