"use client";

import GradientWrapper from "@/container/GradientWrapper";
import { Logo, MenuIcon } from "@/assets/svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { X } from "lucide-react";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (item: any) => {
    router.push(item.link);
    // setOpenSidebar(false);
  };
  return (
    <>
      <header
        className="bg-background flex justify-between items-center gap-6 px-4 py-5 sticky top-0 sm:px-10 sm:py-6 lg:px-24 lg:py-8 z-10"
        data-aos="fade"
      >
        <Image
          src={Logo}
          alt="main logo"
          width={65}
          height={40}
          className="md:w-20 md:h-14 object-contain"
        />

        <ul className="hidden justify-between items-center gap-4 w-2/3 min-w-max sm:flex">
          {headerList.map((el, i) => {
            const isActive =
              i === 0 ? pathname === el.link : pathname.includes(el.link);
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
            <Button
              variant="outline"
              className="rounded-[20px] active:scale-100"
            >
              Subscribe
            </Button>
          </GradientWrapper>
        </ul>

        <Button
          variant="ghost"
          size="slim"
          onClick={() => setOpenSidebar(true)}
          className="sm:hidden"
        >
          <Image src={MenuIcon} alt="menu" />
        </Button>
      </header>

      <Drawer
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        direction="right"
        className="!bg-background p-5 pt-3 max-w-[80%] m-auto"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-6 w-full">
            <Image
              src={Logo}
              alt="main logo"
              width={65}
              height={40}
              className="md:w-20 md:h-14 object-contain"
            />
            <X className="text-background" />
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              {headerList.map((item, i) => {
                const isActive =
                  i === 0
                    ? pathname === item.link
                    : pathname.includes(item.link);

                return (
                  <div key={i} className={isActive ? "bg-card/10" : ""}>
                    <Button
                      className={cn(
                        "text-center",
                        isActive &&
                          "bg-gradient-to-r from-primary to-secondary text-transparent"
                      )}
                      variant="ghost"
                      size="lg"
                      onClick={() => handleNavigate(item)}
                    >
                      {item.text}
                    </Button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </Drawer>
    </>
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
  {
    text: "Tours",
    link: "/tours",
  },
];
