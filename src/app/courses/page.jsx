import Link from "next/link";
import { connectDB } from "../lib/db";
import Course from "../models/Course";

const CoursePage = async () => {
  await connectDB();
  const courses = await Course.find({});

  return (
    <div>
      <div>CoursesPage</div>
      {JSON.stringify(courses)}

      <Link href={"/courses/publish"}>Publish</Link>
    </div>
  );
};

export default CoursePage;
