import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { db } from '../../../firebase.config';
import * as firestoreFunctions from "firebase/firestore";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
  ],
  adapter: FirebaseAdapter({
    db: db,
    ...firestoreFunctions,
  }),
  secret: "LlKq6ZtYbCx",
}
export default NextAuth(authOptions)