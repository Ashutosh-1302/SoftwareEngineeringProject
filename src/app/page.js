"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { UploadButton } from "@uploadthing/react";

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

      <button onClick={() => signOut()}>Sign out</button>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </main>
  );
}
