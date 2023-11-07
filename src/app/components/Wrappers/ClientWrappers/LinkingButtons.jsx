"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LinkingButtons = ({ className, url, children }) => {
  const rtr = useRouter();

  return (
    <button
      className={`${className} hover:scale-105 transition-all`}
      onClick={() => rtr.push(url)}
    >
      {children}
    </button>
  );
};

export default LinkingButtons;
