
import { getServerSession } from "next-auth";
import CourseList from "./components/Course/CourseList";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { connectDB } from "./lib/db";
import User from "./models/User";
import CourseElongatedList from "./components/Course/CourseElongatedList";
import Course from "./models/Course";

export default async function Home() {
  const sess = await getServerSession(authOptions);
  const uid = sess?.user?.id;

  await connectDB();
  const user = await User.findById(uid);

  const courses = await Course.find({});


  return (
    <main className="flex flex-col justify-between">
      <div className="bg-blue-200 py-24 w-full"></div>
      <div className="px-24">
        {/* <div>{JSON.stringify(user)}</div> */}
        <div className="mr-12 text-xl font-mono font-semibold mt-6">
          Hi {"Jack"}
        </div>
        <CourseList />
        <div className="mr-12 text-xl font-mono font-semibold">Hi {"Jack"}</div>
        <CourseElongatedList courses={courses} />
      </div>
    </main>
  );
}
