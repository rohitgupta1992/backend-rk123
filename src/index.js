const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./db/db.js')
const app = require('./app.js')
const app1 = express()







connectDB().then(()=>{
app1.listen(process.env.PORT,()=>{
console.log(`server is running on port ${process.env.PORT4}`)
})
}).catch((err)=>{
    console.log("bd connection failed",err)
})