"use client";

import { UploadButton } from "@uploadthing/react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import React from "react";

const LessonCreate = () => {
  const searchParams = useParams();
  const { id } = searchParams;
  console.log(id);

  const [imageUrl, setImageUrl] = React.useState("");
  const [videoUrl, setVideoUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const rtr = useRouter();

  return (
    <div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={async (res) => {
          // Do something with the response
          setImageUrl(res[0].url);
          const { data } = await axios.post("/api/fileupload", res);
          console.log(data);
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <UploadButton
        endpoint="videoUploader"
        onClientUploadComplete={async (res) => {
          // Do something with the response
          setVideoUrl(res[0].url);
          const { data } = await axios.post("/api/fileupload", res);
          console.log(data);
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { data } = await axios.post("/api/lesson", {
            title: e.target.title.value,
            description: e.target.description.value,
            imageUrl,
            videoUrl,
            courseId: id,
          });
          rtr.push(`/courses/${id}`);
        }}
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LessonCreate;
