import Lesson from "@/app/models/Lesson";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const jsonbody = await req.json();

  const { title, description, imageUrl, videoUrl } = jsonbody;
  const lesson = await Lesson.create({
    title,
    desc: description,
    imageUrl,
    videoUrl,
  });

  return NextResponse.json(lesson, {
    status: 200,
  });
};
