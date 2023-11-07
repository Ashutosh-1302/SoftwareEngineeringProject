import Link from "next/link";
import { connectDB } from "../lib/db";
import Course from "../models/Course";
import CourseElongatedList from "../components/Course/CourseElongatedList";

const CoursePage = async () => {
  await connectDB();
  const courses = await Course.find({});

  return (
    <div>
      <div className="text-xl mx-3 font-semibold">All Courses</div>

      <CourseElongatedList courses={courses} />

      <div className="bg-blue-700 px-4 py-2 text-white rounded-md my-12 w-1/4 ml-4">
        <Link href="/courses/publish" className="w-full">
          Publish
        </Link>
      </div>
    </div>
  );
};

export default CoursePage;
