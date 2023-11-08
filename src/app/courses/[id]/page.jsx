"use client";

import CoursePageComponent from "@/app/components/Course/CPCompo";
import Client from "@/app/components/Wrappers/ClientWrappers/Client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const CoursePage = ({ params }) => {
  const [course, setCourse] = useState(null);

  const [showResources, setShowResources] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showLectures, setShowLectures] = useState(true);

  useEffect(() => {
    const helper = async () => {
      if (params?.id) {
        const { data } = await axios.get(`/api/course/${params.id}`);
        console.log(data);
        setCourse(data);
      }
    };

    helper();
  }, []);

  return (
    <div>
      <CoursePageComponent course={course} />
      <Link
        href={`/courses/${course?._id}/publish`}
        className="my-4 w-1/4 bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Publish
      </Link>
    </div>
  );
};

export default CoursePage;
