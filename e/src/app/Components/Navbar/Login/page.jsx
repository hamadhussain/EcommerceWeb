import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
<div className=" flex items-center gap-3">      <img className=" rounded-full" width={25} height={25} src={session.user.image} alt="" />
        {/* Signed in as {session.user.email} <br /> */}
        <button onClick={() => signOut()} className=" hover:text-pink-500 font-extrabold">Sign out</button></div>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()} className=" hover:text-pink-500 font-extrabold">Sign in</button>
    </>
  )
}