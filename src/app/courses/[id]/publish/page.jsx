"use client";

import CoursePublisher from "@/app/components/Course/CoursePublisher";
import LessonUploadForm from "@/app/components/UI/Components/CourseUploadForm";
import { useRouter, useParams } from "next/navigation";
import React from "react";

const LessonCreate = () => {
  const searchParams = useParams();
  const { id } = searchParams;
  console.log(id);

  const rtr = useRouter();

  return (
    <>
      <div>Upload Courses</div>
      <CoursePublisher id={id} />
    </>
  );
};

export default LessonCreate;
