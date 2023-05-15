import mongoose from "mongoose";
import { env } from "../../config/env";

const connectDB = async () => {
  try {
    await mongoose.connect(env.mongodbUrl , {
      dbName: env.databaseMongoName,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const mongodb = mongoose.connection;

export { connectDB, mongoose, mongodb };
