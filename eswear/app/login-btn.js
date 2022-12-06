"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import UserInformation from "../components/user-information";
export default function Component({children}) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <script>
            document.getElementById("homepage").classlist.add("hidden");
            document.getElementById("homepage2").classlist.remove("hidden");
        </script>
        Signed in as {session.user.email} <br />
        <UserInformation data={session.user} />
        <button onClick={() => signOut()}>Sign out</button>
        {children}
      </>
    )
  }
  return (
    <>
        <script>
            document.getElementById("homepage2").classlist.add("hidden");
            document.getElementById("homepage").classlist.remove("hidden");
        </script>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button><br />
    </>
  );
}