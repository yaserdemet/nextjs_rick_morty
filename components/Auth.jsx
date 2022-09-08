import { useSession, signIn, signOut } from "next-auth/react"
import {Button} from "@mui/material"
import en from "../public/locales/en/common.json"
import tr from "../public/locales/tr/common.json"
import { useRouter } from "next/router";

export default function Component() {
  const { data: session } = useSession()
//   console.log(session)
const router = useRouter();
const { locale } = router;
const t = locale === "tr" ? tr : en;
// const [change, setChange] = useState(false);
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        <Button onClick={() => signOut()}>
            {t.btn1}
        </Button>
      </>
    )
  }
  return (
    <>
      {/* Not signed in <br /> */}
      <Button onClick={() => signIn()}>
        {t.btn}
      </Button>
    </>
  )
}