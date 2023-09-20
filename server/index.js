 import express from "express"
 import mongoose from "mongoose" 
 import dotenv from 'dotenv'


 const app = express()
 dotenv.config()

 const PORT = process.env.PORT || 3001
 const DB_USER = process.env.DB_USER
 const DB_password= process.env.password

 
 async function start(){
    try {
        await mongoose.connect(
            'mongodb+srv://test:mega1001@cluster0.evnluqz.mongodb.net/riddim?retryWrites=true&w=majority'
        )
        
        app.listen(3002, () => console.log('Server started on port: 3002'))
    } catch (error) {
        console.log(error)
    }
 }
 start()