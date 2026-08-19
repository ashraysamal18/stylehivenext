import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Post from '../../../lib/models/Post';
import User from '../../../lib/models/User'; // Ensures User model is registered
import jwt from 'jsonwebtoken';

// GET /api/post - Fetch latest 10 posts
export async function GET(req) {
  try {
    await connectDB();

    // Check for optional type filter in URL query (e.g. /api/post?type=JOB_OPPORTUNITY)
    const { searchParams } = new URL(req.url);
    const filterType = searchParams.get('type');
    const query = filterType ? { type: filterType } : {};

    const posts = await Post.find(query)
      .select('title content image type likes comments createdAt author')
      .populate('author', 'name role avatar')
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.error('GET /api/post error:', err);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST /api/post - Create a new post
export async function POST(req) {
  try {
    await connectDB();

    // Retrieve token from either x-auth-token or Bearer header
    let token = req.headers.get('x-auth-token');
    const authHeader = req.headers.get('authorization');

    if (!token && authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }

    if (!token) {
      return NextResponse.json({ msg: 'Unauthorized: Missing token' }, { status: 401 });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'stylehivesupersecretkey2026'
      );
    } catch (jwtErr) {
      return NextResponse.json({ msg: 'Invalid or expired token' }, { status: 401 });
    }

    // Parse payload
    const { title, content, image, type } = await req.json();

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    // Safely extract author ID from token payload structure
    const authorId = decoded.user?.id || decoded.userId || decoded.id;

    // Save post
    const newPost = new Post({
      title: title || '',
      content,
      image: image || '',
      type: type || 'Post',
      author: authorId,
    });

    await newPost.save();

    // Return post populated with author information
    const populatedPost = await Post.findById(newPost._id).populate(
      'author',
      'name role avatar'
    );

    return NextResponse.json(populatedPost, { status: 201 });
  } catch (err) {
    console.error('POST /api/post error:', err);
    return NextResponse.json({ error: 'Server error creating post' }, { status: 500 });
  }
}