import { NextResponse } from 'next/server';
import connectDB from '@/lib/db'; // adjust to your database connection helper
import Message from '@/lib/models/Message';

export async function GET(req, { params }) {
  await connectDB();
  const { userId } = params; 
  const currentUserId = req.headers.get('x-user-id'); // Pass active user ID in headers

  const messages = await Message.find({
    $or: [
      { sender: currentUserId, recipient: userId },
      { sender: userId, recipient: currentUserId },
    ],
  }).sort({ createdAt: 1 });

  return NextResponse.json(messages);
}