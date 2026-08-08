import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/stylehive';

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    }).then((m) => m);
  }
  cached.conn = await cached.promise;
  global.mongoose = cached;
  return cached.conn;
}

export default connectDB;