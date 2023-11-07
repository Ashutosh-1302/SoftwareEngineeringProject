import User from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { connectDB } from "@/app/lib/db";
import Course from "@/app/models/Course";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const sess = await getServerSession(authOptions);

  if (!sess) {
    return NextResponse.json(
      { msg: "Err" },
      {
        status: 200,
      }
    );
  }

  const sessId = sess.user?.id;
  await connectDB();

  const user = await User.findById(sessId).populate({
    path: "courses",
    model: Course,
  });

  return NextResponse.json(user, {
    status: 200,
  });
};
