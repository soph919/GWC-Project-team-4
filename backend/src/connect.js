
import mongoose from "mongoose"
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    } catch(err) {
        console.log(err);
        //process.exit(1)

    }
}