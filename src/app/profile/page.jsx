import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { connectDB } from "../lib/db";
import User from "../models/User";
import Course from "../models/Course";
import { getServerSession } from "next-auth";

const ProfilePage = async () => {
  const sess = await getServerSession(authOptions);

  if (!sess) {
    return <div>User Not found</div>;
  }

  const sessId = sess?.user?.id;
  await connectDB();

  const user = await User.findById(sessId).populate({
    path: "courses",
    model: Course,
  });

  return <div>{JSON.stringify(user)}</div>;
};

export default ProfilePage;
