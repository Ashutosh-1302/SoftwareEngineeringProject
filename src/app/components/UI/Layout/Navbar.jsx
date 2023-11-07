"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { data: session, status } = useSession();
  const isAuth = status === "authenticated";
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const helper = async () => {
      const { data } = await axios.get("/api/user");
      setUser(data);

      console.log(data);
    };

    helper();
  }, []);

  const signoutHandler = () => {
    signOut();
  };

  return (
    <div className="bg-blue-600 sticky w-full top-0 mb-4 p-4 text-white flex font-bold text-xl items-center z-20 px-12">
      <Link href="/" className="flex-1">
        <div className="">
          <span className="hover:cursor-pointer">SkillStacker</span>
        </div>
      </Link>

      <div className="flex">
        <div className="mx-2">
          <Link href={"/courses"}>Courses</Link>
        </div>
        <div className=" mx-2">
          <Link href={"/profile"} className="link mx-4">
            {user?.username?.length > 0 ? user.username[0] : "Profile"}
          </Link>
        </div>
        {session ? (
          <>
            <div className="mr-4 hover:cursor-pointer" onClick={signoutHandler}>
              Logout
            </div>
          </>
        ) : (
          <Link className="mr-4 hover:cursor-pointer" href={"/auth"}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
