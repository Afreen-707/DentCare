import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
export default function Home() {
  return <div>
    <h1>Home page</h1>
    <SignedOut>
    <SignUpButton mode="modal">Sign up</SignUpButton>
    </SignedOut>
    <SignedIn>
      <SignUpButton>Logout</SignUpButton>
    </SignedIn>

  </div>
}
