import Course from "@/app/models/Course";
import Lesson from "@/app/models/Lesson";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const jsonbody = await req.json();
  const { title, description, imageUrl, videoUrl } = jsonbody;

  const course = await Course.findById(jsonbody.courseId);

  const lesson = await Lesson.create({
    title,
    desc: description,
    imageUrl,
    videoUrl,
  });

  course.lessons.push(lesson._id);

  await course.save();

  return NextResponse.json(course, {
    status: 200,
  });
};
