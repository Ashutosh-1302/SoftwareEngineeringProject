import { StarOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

const CourseElongatedList = ({ courses }) => {
  return (
    <div className="flex items-center my-6 shadow-lg">
      {courses?.map((course) => (
        <div className="flex flex-col p-2 mx-2 shadow-xl my-4">
          <Image src={course?.imageUrl} width={200} height={200} />
          <h1 className="font-semibold py-2">{course?.title}</h1>
          <p className="my-2 font-light">
            {course?.description ? course?.description : "Description"}
          </p>

          <div className="flex items-center">
            <div className="">{course?.rating}</div>
            <div className="flex items-center mr-2">
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
            <div>{course?.students?.length}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseElongatedList;
