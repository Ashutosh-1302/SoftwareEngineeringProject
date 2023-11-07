import LinkingButtons from "@/app/components/Wrappers/ClientWrappers/LinkingButtons";
import Course from "@/app/models/Course";
import Lesson from "@/app/models/Lesson";
import User from "@/app/models/User";

const CoursePage = async ({ params }) => {
  console.log(params?.id);
  if (params?.id) {
    console.log(params.id);
    const course = await Course.findById(params.id)
      .populate({
        path: "lessons",
        model: Lesson,
      })
      .populate({
        path: "instructor",
        model: User,
      });

    return (
      <div>
        <div>{course?.title}</div>
        <div>{course?.description}</div>
        <div>
          {course?.lessons?.map((lesson) => (
            <div>
              <div>{lesson?.title}</div>
              <div>{lesson?.desc}</div>
              <div>{lesson?.imageUrl}</div>
              <div>{lesson?.videoUrl}</div>
            </div>
          ))}
        </div>
        <LinkingButtons
          url={`/courses/${course._id}/publish`}
          title={"Lesson Publish"}
        >
          Publish
        </LinkingButtons>
      </div>
    );
  }
};

export default CoursePage;
