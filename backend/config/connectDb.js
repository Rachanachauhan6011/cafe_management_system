import{ configDotenv} from "dotenv"
import mongoose from "mongoose"

configDotenv()


export const connectDb = async() => {
    try {
       mongoose.connect(process.env.MONGO_URL)
       .then(() => {
        console.log("Database connected successfully")
       })
    } catch (error) {
        console.log(error.message , "database connection error")
    }
}