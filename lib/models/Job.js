import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, default: 'Full-time' }, // Full-time, Part-time, Contract, Freelance
  description: { type: String, required: true },
  salary: { type: String, default: 'Competitive' },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema);