import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    FacebookProvider({
        clientId: '868375467679171',
        clientSecret: '6eaa4f16eb4a4760ab4f099d8e9c66a4'
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
  ],
  secret: "LlKq6ZtYbCx",
}
export default NextAuth(authOptions)