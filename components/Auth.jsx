import { useSession, signIn, signOut } from "next-auth/react"
import {Button} from "@mui/material"
export default function Component() {
  const { data: session } = useSession()
//   console.log(session)
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return (
    <>
      {/* Not signed in <br /> */}
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  )
}