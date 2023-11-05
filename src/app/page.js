"use client";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={() =>
          signIn("credentials", { password: "pwd", username: "ash" })
        }
      >
        Sign in with Email
      </button>
      <button
        onClick={async () => {
          const { data } = await axios.post("/api/auth/signup", {
            username: "ash",
            password: "pwd",
          });
        }}
      >
        Sign up with Email
      </button>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </main>
  );
}
