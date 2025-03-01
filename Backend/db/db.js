import mongoose from "mongoose";

function connect() {
  console.log("Mongo URI:", process.env.MONGO_URI); // Log the MONGO_URI for debugging
  return mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
  }
  ).catch((error) => {
    console.log("Error connecting to MongoDB", error.message);
  });
}

export default connect;
