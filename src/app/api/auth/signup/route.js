import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB();

  const jsonbody = await req.json();
  const { username, password } = jsonbody;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    username,
    password: hashedPassword,
  });

  return Response.json(user);
}
