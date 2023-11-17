"use client";

import { RightArrowIcon } from "@/assets/svg";
import DashboardHeader from "@/components/Header/DashboardHeader";
import { auth } from "@/utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pages = pathname.split("/");

  onAuthStateChanged(auth, (user) => (!user ? router.push("/login") : ""));

  return (
    <div className="max-h-screen overflow-auto ">
      <DashboardHeader />
      <div className="px-4 mb-10 lg:px-10">
        <div className="flex items-center gap-2 mb-3">
          <h3>
            <Link href={"/" + pages[1]} className="capitalize">
              {pages[1]?.split("-").join(" ") || "--"}
            </Link>
          </h3>
          {pages[2] && (
            <h4 className="flex items-center gap-2 capitalize">
              <Image src={RightArrowIcon} alt="right arrow" />
              {pages[2]?.split("-").join(" ") || "--"}
            </h4>
          )}
        </div>
        <div className="sm:bg-card/20 py-4 rounded sm:px-5 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
