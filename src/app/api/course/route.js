import Course from "@/app/models/Course";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const jsonbody = await req.json();

  const { title, description, imageUrl } = jsonbody;
  const course = await Course.create({
    title,
    description,
    imageUrl,
  });

  return NextResponse.json(course, {
    status: 200,
  });
};
