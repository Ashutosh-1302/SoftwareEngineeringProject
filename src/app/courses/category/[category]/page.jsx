import CourseElongatedList from "@/app/components/Course/CourseElongatedList";
import Course from "@/app/models/Course";
import Lesson from "@/app/models/Lesson";
import User from "@/app/models/User";

const CoursePage = async ({ params }) => {
  console.log(params?.category);
  const categ = params?.category;
  const courses = await Course.find({ category: categ })
    .populate({
      path: "lessons",
      model: Lesson,
    })
    .populate({
      path: "instructor",
      model: User,
    });

  return (
    <>
      <CourseElongatedList courses={courses} />
    </>
  );
};

export default CoursePage;
