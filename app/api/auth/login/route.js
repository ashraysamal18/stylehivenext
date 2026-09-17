import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ msg: "Please provide email and password" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ msg: "Invalid Credentials" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ msg: "Invalid Credentials" }, { status: 400 });
    }

    const token = signToken({ id: user._id });

    return NextResponse.json(
      { token, user: { id: user._id, name: user.name, email: user.email } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "Server error", error: error.message }, { status: 500 });
  }
}