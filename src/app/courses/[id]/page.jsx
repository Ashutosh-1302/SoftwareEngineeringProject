import Course from "@/app/models/Course";
import Lesson from "@/app/models/Lesson";
import User from "@/app/models/User";

const CoursePage = async ({ params }) => {
  const { id } = params;

  const course = await Course.findById(id).populate(
    {
      path: "lessons",
      model: Lesson,
    },
    {
      path: "instructor",
      model: User,
    }
  );

  return <div>{JSON.stringify(course)}</div>;
};

export default CoursePage;
