"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LinkingButtons = ({ className, url, title }) => {
  const rtr = useRouter();

  return (
    <button className={`${className}`} onClick={() => rtr.push(url)}>
      {title}
    </button>
  );
};

export default LinkingButtons;
