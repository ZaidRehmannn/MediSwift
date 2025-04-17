import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_KEY);
        console.log("Database Connected");
    } catch (error) {
        console.log("Database Connection Error:", error.message);
    }
};
