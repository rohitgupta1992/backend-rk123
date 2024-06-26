const  mongoose  = require("mongoose");

const connectDB = async()=>{
    try{
const connectionInstance = await mongoose.connect(process.env.URI)
console.log(`mongodb connected !! DB HOST ${connectionInstance}`)
console.log(connectionInstance)
    }catch(error){
        console.log("Mongo db connection err",error)
        process.exit(1)
    }
}
module.exports = connectDB