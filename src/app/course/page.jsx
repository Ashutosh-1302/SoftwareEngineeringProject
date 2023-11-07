import { connectDB } from "../lib/db";
import Course from "../models/Course";

const CoursePage = async () => {
  await connectDB();
  const courses = await Course.find({});

  return <div>CoursePage</div>;
};

export default CoursePage;
