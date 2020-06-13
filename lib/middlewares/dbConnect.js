import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/test";

  const db = await mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(`DB connected ${mongoUri}`);
  return;
}

export default dbConnect;
