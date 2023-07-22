import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function dbConnect() {
  try {
    await mongoose.connect(process.env.DB_URI);

    console.log("CONNECTED TO DB");
  } catch (error) {
    console.log("error CONNECTING TO DB:", error.message);
  }
}