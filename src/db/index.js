import mongoose from "mongoose";
import express from 'express';

// const app = express()

// (async()=>{
//     try{
//         await mongoose.connect(process.env.URI)
//         app.on('error',(error)=>{
//             console.log("ERROR",error)
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is running on port ${process.env.PORT}`)
//         })
//     } catch(err){
//         console.log("Error", err)
//         throw err
//     }
// })()