import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./DarkModeToggle";
import { LogOutButton } from "./LogOutButton";
import { getUser } from "@/auth/server";

async function Header() {
  const user = getUser();
  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <Link className="flex items-end gap-2" href="/">
        <Image
          src="/goatius.png"
          height={60}
          width={60}
          alt="Logo"
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col pb-1 text-2xl leading-6 font-bold">
          GOAT <span>Notes</span>
        </h1>
      </Link>
      <div className="flex gap-4">
        {await user ? (
          <LogOutButton/>
        ) : (
          <>
            <Button asChild className="hidden sm:block">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button variant={"outline"} asChild>
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <ModeToggle/>
      </div>
    </header>
  );
}

export default Header;
