"use client";
import { SessionProvider } from "next-auth/react";

import React from "react";

const SessionProviderComponent = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionProviderComponent;
