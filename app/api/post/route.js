import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find().populate("author", "name email role").sort({ createdAt: -1 });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Server Error", error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const decoded = verifyToken(req);

    if (!decoded) {
      return NextResponse.json({ msg: "Invalid or expired token" }, { status: 401 });
    }

    const { title, content, type } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ msg: "Title and content are required" }, { status: 400 });
    }

    const newPost = await Post.create({
      title,
      content,
      type: type || "Post",
      author: decoded.id,
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ msg: "Server Error", error: error.message }, { status: 500 });
  }
}