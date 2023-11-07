"use client";

import React from "react";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import MailIcon from "@mui/icons-material/Mail";
// import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <div className="py-16 px-12 bg-gray-800 text-gray-400 flex justify-around ">
      <div className="flex justify-around w-full items-center text-lg font-normal">
        <div className="flex flex-col items-center text-xl text-white font-semibold">
          <div>Impacture Tech</div>
          <div className="mt-3">IT.Tech</div>
          <div className="flex items-center justify-around my-4">
            {/* mui yt icon */}

            {/* <YouTubeIcon className="cursor-pointer mx-3" />
            <MailIcon className="cursor-pointer mx-3" />
            <PhoneIcon className="cursor-pointer mx-3" /> */}
          </div>
        </div>
        <div className="flex flex-1 justify-around">
          <div className="flex flex-col ml-4">
            <div className="mb-3 border-gray-500 font-bold">Link 1</div>
            <div className="mb-2">Link 2</div>
            <div className="mb-2">Link 3</div>
            <div className="mb-2">Link 4</div>
          </div>
          <div className="flex flex-col ml-4">
            <div className="mb-3  border-gray-500 font-bold">Link 1</div>
            <div className="mb-2">Link 2</div>
            <div className="mb-2">Link 3</div>
            <div className="mb-2">Link 4</div>
          </div>
          <div className="flex flex-col ml-4">
            <div className="mb-3 border-gray-500 font-bold">Link 1</div>
            <div className="mb-2">Link 2</div>
            <div className="mb-2">Link 3</div>
            <div className="mb-2">Link 4</div>
          </div>
          <div className="flex flex-col ml-4">
            <div className="mb-3 border-gray-500 font-bold">Link 1</div>
            <div className="mb-2">Link 2</div>
            <div className="mb-2">Link 3</div>
            <div className="mb-2">Link 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
