import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ msg: 'Invalid Credentials' }, { status: 400 });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return NextResponse.json({ msg: 'Invalid Credentials' }, { status: 400 });

    const payload = { user: { id: user._id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'stylehivesupersecretkey2026', { expiresIn: '7d' });

    return NextResponse.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });

  } catch (err) {
    return NextResponse.json({ error: 'Server error during login' }, { status: 500 });
  }
}