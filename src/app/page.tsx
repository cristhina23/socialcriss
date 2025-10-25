import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton   
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4">
      
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}
