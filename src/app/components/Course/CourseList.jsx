import { connectDB } from "@/app/lib/db";
import Course from "@/app/models/Course";
import { redirect } from "next/navigation";
import React from "react";
import LinkingButtons from "../Wrappers/ClientWrappers/LinkingButtons";

const CourseList = async () => {
  await connectDB();
  const courses = await Course.find({});

  return (
    <div className="flex my-6 shadow-xl">
      {courses?.map((course) => (
        <LinkingButtons
          key={course?._id}
          className="mx-2 shadow-xl px-4 py-2 flex items-center my-4 overflow-x-auto hover:cursor-pointer"
          url={`/courses/${course?.id}`}
        >
          <div>
            <img
              className="mx-3 w-36 h-24"
              src={course?.imageUrl}
              alt="course"
            />
          </div>

          <div className="flex flex-col mr-6">
            <h1 className="font-semibold">{course?.title}</h1>
            <p className="my-2 font-light">
              {course?.description ? course?.description : "Description"}
            </p>
          </div>
        </LinkingButtons>
      ))}
    </div>
  );
};

export default CourseList;
