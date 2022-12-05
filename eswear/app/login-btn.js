"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import UserInformation from "../components/user-information";
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <UserInformation data={session.user} />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signIn("GoogleProvider")}>Sign in with Google</button>
      <button onClick={() => signIn("FacebookProvider")}>Sign in with Facebook</button>
    </>
  )
}