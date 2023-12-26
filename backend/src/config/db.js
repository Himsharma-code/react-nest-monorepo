import mongoose from "mongoose";

// mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      //mongodb://localhost:27017/wordle_db
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
