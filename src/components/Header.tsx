import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggler";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/auth/server";

const Header = async() => {
  const user = await getUser();
  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8 shadow-md">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full bg bg-slate-600"
        />
        <h1 className="font-semibold text-2xl"> AI Notes</h1>
      </Link>
      <div className="flex gap-4">{user ? <LogoutButton/>: <>
        <Button asChild className="hidden sm:block" variant={"outline"}>
        <Link href="/signup">Sign up</Link>  
      </Button>
      <Button asChild variant={"outline"}>
        <Link href="/login">Login</Link>
      </Button>
      
      </>}
      <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
