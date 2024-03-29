import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:12345@netflixdatabase.qjgc77i.mongodb.net/"
    );
    console.log("mongodb is connected and working properly...");
  } catch (err: any) {
    console.error("Error while connecting to MongoDB: " + err);
  }
};

export default connectToDB;
