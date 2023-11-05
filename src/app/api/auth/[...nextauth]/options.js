import User from "@/app/models/User";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "@/app/lib/db";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        await connectDB();

        const { password, username } = credentials;
        const user = await User.findOne({ username: username });
        if (!user) return null;

        const isAuth = await bcrypt.compare(password, user.password);
        if (!isAuth) return null;

        return {
          id: user._id,
          role: user.role ? user.role : process.env.ROLE_BASIC,
        };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
};
