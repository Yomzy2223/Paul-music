"use client";

import { Logo } from "@/assets/svg";
import { cn } from "@/lib/utils";
import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const DashboardHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => console.log("Sign out failed " + error));
  };

  return (
    <header
      className="sticky top-0 bg-background flex justify-between items-center gap-6 px-4 py-5 lg:px-10 lg:py-8 z-10"
      data-aos="fade"
    >
      <Image
        src={Logo}
        alt="main logo"
        width={65}
        height={40}
        className="md:w-20 md:h-14 object-contain"
      />

      <ul className="hidden justify-between items-center gap-6 min-w-max sm:flex">
        {headerList.map((el) => {
          const isActive = pathname.includes(el.link);
          return (
            <Link
              key={el.text}
              href={el.link}
              className={cn("px-4 py-2", isActive && "border-b-4")}
            >
              {el.text}
            </Link>
          );
        })}
        <Button variant="plain" onClick={logout}>
          Logout
        </Button>
      </ul>
    </header>
  );
};

export default DashboardHeader;

const headerList = [
  {
    text: "Web Content",
    link: "/web-content",
  },
  {
    text: "Store",
    link: "/store",
  },
];
