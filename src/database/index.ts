import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/nodeapi"

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log('OK')
    } catch(error) {
        console.log(error)
    } 

}


