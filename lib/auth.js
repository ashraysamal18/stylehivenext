import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "stylehive_secret_key_123";

export function verifyToken(req) {
  const token =
    req.headers.get("x-auth-token") ||
    req.headers.get("authorization")?.replace("Bearer ", "");

  if (!token) return null;

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}