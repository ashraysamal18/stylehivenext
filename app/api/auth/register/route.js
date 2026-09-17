import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ msg: "Please fill out all fields" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ msg: "Email or Username already taken" }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "Fashion Designer",
    });

    const token = signToken({ id: newUser._id });

    return NextResponse.json(
      { token, user: { id: newUser._id, name: newUser.name, email: newUser.email } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "Server error", error: error.message }, { status: 500 });
  }
}