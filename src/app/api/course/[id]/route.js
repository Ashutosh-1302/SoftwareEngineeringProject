import Course from "@/app/models/Course";
import Lesson from "@/app/models/Lesson";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  console.log(params);

  const course = await Course.findById(params.id)
    .populate({
      path: "lessons",
      model: Lesson,
    })
    .populate({
      path: "instructor",
      model: User,
    });

  return NextResponse.json(course, { status: 200 });
};
