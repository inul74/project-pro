"use client";

import { signOut, useSession } from "next-auth/react";
import { HomePage } from "@/components/home/HomePage";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/switchers/ThemeSwitcher";

const Home = () => {
  const session = useSession();
  console.log(session);

  const logoutHandler = () => {
    signOut({
      callbackUrl: `${window.location.origin}/sign-in`,
    });
  };

  return (
    <>
      <Button variant={"destructive"} onClick={logoutHandler}>
        Logout
      </Button>
      <ThemeSwitcher size={"icon"} alignHover={"end"} alignDropdown={"end"} />
      <HomePage />
    </>
  );
};

export default Home;
