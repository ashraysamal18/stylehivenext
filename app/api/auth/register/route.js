import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    await connectDB();
    const { name, username, email, password, role } = await req.json();

    // Check if email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return NextResponse.json({ msg: 'Email or Username already taken' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Clean username format (no spaces/special characters)
    const formattedUsername = (username || name.replace(/\s+/g, '')).toLowerCase();

    const user = new User({
      name,
      username: formattedUsername,
      email,
      password: hashedPassword,
      role: role || 'Fashion Professional'
    });

    await user.save();

    const payload = { user: { id: user._id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'stylehivesupersecretkey2026', { expiresIn: '7d' });

    return NextResponse.json({
      token,
      user: { 
        id: user._id, 
        name: user.name, 
        username: user.username, 
        email: user.email, 
        role: user.role 
      }
    }, { status: 201 });

  } catch (err) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}