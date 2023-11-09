"use client";

import GradientWrapper from "@/app/container/GradientWrapper";
import { Logo, MenuIcon } from "@/assets/svg";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  const scrollToSection = (className: string) => {
    console.log(className);
  };

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
        {headerList.map((el) => (
          <Button
            key={el.text}
            variant="ghost"
            size="slim"
            onClick={() => scrollToSection(el.scrollTo)}
          >
            {el.text}
          </Button>
        ))}
        <GradientWrapper isButton>
          <Button variant="outline" className="rounded-[20px]">
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
    scrollTo: "hero-section",
  },
  {
    text: "Discography",
    scrollTo: "dicscography-section",
  },
  {
    text: "Podcast",
    scrollTo: "",
  },
  {
    text: "New Feeds",
    scrollTo: "",
  },
  {
    text: "Merch",
    scrollTo: "",
  },
];
