import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    gigType: { 
      type: String, 
      enum: ['Runway Prep', 'Single-Day Shoot', 'Editorial Campaign', 'Lookbook', 'Full-time Contract'], 
      default: 'Editorial Campaign' 
    },
    rateType: { 
      type: String, 
      enum: ['Day Rate', 'Per Look', 'Per Show', 'Full Project'], 
      default: 'Day Rate' 
    },
    budget: { type: String, required: true },
    travelCovered: { type: Boolean, default: false },
    category: { type: String, required: true },
    description: { type: String, required: true },
    deliverables: { type: String },
    taggedCrew: [{ type: String }],
    requiresPortfolio: { type: Boolean, default: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

// INDEXES FOR PERFORMANCE
// 1. Speeds up filtering jobs by category while sorting by newest first
JobSchema.index({ category: 1, createdAt: -1 });

// 2. Speeds up fetching jobs posted by a specific user
JobSchema.index({ postedBy: 1 });

// 3. Text index for keyword searches (title, company, description)
JobSchema.index({ title: 'text', company: 'text', description: 'text' });

export default mongoose.models.Job || mongoose.model('Job', JobSchema);