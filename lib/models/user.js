import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true, lowercase: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'Fashion Professional' },
  bio: { type: String, default: 'Fashion enthusiast & network member.' },
  location: { type: String, default: 'New York, NY' },
  avatar: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);