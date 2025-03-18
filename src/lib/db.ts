import mongoose from "mongoose";

export const connectDb = async()=> {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URL || "");
        console.log(`Database is connected to: ${connection.connection.host}`);
    } catch (error: any) {
        console.log("Error while connecting the database: ", error);
    }
}