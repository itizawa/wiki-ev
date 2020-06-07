import mongoose from "mongoose";
import next from "next";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return next();
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
