import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Job from '@/lib/models/Job';

export async function GET(req) {
  try {
    await connectDB();
    
    // Extract search params if present
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let query = {};

    if (category && category !== 'All') {
      query.category = category;
    }

    if (search) {
      query.$text = { $search: search };
    }

    // .lean() skips Mongoose document hydration, making queries up to 5x faster
    const jobs = await Job.find(query)
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}