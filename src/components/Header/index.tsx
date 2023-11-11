"use client";

import GradientWrapper from "@/app/container/GradientWrapper";
import { Logo, MenuIcon } from "@/assets/svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button, buttonVariants } from "../ui/button";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="flex justify-between items-center gap-6 px-4 py-5 sm:px-10 sm:py-6 lg:px-24 lg:py-8 z-10">
      <Image
        src={Logo}
        alt="main logo"
        width={65}
        height={40}
        className="md:w-20 md:h-14 object-contain"
      />

      <ul className="hidden justify-between items-center gap-4 w-2/3 min-w-max sm:flex">
        {headerList.map((el) => {
          const isActive = el.link === pathname;
          return (
            <Link
              key={el.text}
              href={el.link}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "slim",
                }),
                isActive &&
                  "bg-gradient-to-r from-primary to-secondary text-transparent"
              )}
            >
              {el.text}
            </Link>
          );
        })}
        <GradientWrapper isButton>
          <Button variant="outline" className="rounded-[20px] active:scale-100">
            Subscribe
          </Button>
        </GradientWrapper>
      </ul>

      <Image src={MenuIcon} alt="menu" className="sm:hidden" />
    </header>
  );
};

export default Header;

const headerList = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Discography",
    link: "/discography",
  },
  {
    text: "Podcast",
    link: "/podcast",
  },
  {
    text: "New Feeds",
    link: "/new-feeds",
  },
  {
    text: "Merch",
    link: "/merch",
  },
];
