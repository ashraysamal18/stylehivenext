import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/db';
import Job from '../../../lib/models/Job';
import jwt from 'jsonwebtoken';

export async function GET() {
  await connectDB();
  try {
    const jobs = await Job.find().populate('postedBy', 'name email').sort({ createdAt: -1 });
    return NextResponse.json(jobs);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();
  const token = req.headers.get('x-auth-token');
  if (!token) return NextResponse.json({ msg: 'Unauthorized' }, { status: 401 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'stylehivesupersecretkey2026');
    const body = await req.json();

    const newJob = new Job({ ...body, postedBy: decoded.user.id });
    await newJob.save();

    const populatedJob = await Job.findById(newJob._id).populate('postedBy', 'name email');
    return NextResponse.json(populatedJob, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}