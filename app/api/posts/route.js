import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/db.js';
import Post from '../../../lib/models/Post.js';
import jwt from 'jsonwebtoken';

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find().populate('author', 'name role email').sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const token = req.headers.get('x-auth-token');
    if (!token) return NextResponse.json({ msg: 'Unauthorized' }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'stylehivesupersecretkey2026');
    const { content, image } = await req.json();

    const newPost = new Post({ content, image: image || '', author: decoded.user.id });
    await newPost.save();

    const populatedPost = await Post.findById(newPost._id).populate('author', 'name role email');
    return NextResponse.json(populatedPost, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}