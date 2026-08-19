import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'Post',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Required for .populate('author')
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);