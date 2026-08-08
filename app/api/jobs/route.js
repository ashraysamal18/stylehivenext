import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Job from '../../../lib/models/Job';
import jwt from 'jsonwebtoken';

export async function GET() {
  try {
    await connectDB();
    const jobs = await Job.find()
      .populate('postedBy', 'name username role')
      .sort({ createdAt: -1 });
    return NextResponse.json(jobs);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const token = req.headers.get('x-auth-token');
    if (!token) return NextResponse.json({ msg: 'Unauthorized' }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'stylehivesupersecretkey2026');
    const { title, company, location, type, description, salary } = await req.json();

    const newJob = new Job({
      title,
      company,
      location,
      type,
      description,
      salary,
      postedBy: decoded.user.id
    });

    await newJob.save();
    const populatedJob = await Job.findById(newJob._id).populate('postedBy', 'name username role');
    return NextResponse.json(populatedJob, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create job posting' }, { status: 500 });
  }
}