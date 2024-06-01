import Image from "next/image";
import { signIn } from "@/auth"

export default function Home() {
  const handleGoogleSignIn = async () => {
    await signIn("google", { redirectTo: "/" })
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-2xl font-extralight">This is the landing Page</h2>
      <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/public" })
      }}
      >
        <button type="submit" >Signin with Google</button>
      </form>
    </main>
  );
}
