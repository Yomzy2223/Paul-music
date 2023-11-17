import { MusicDisk2 } from "@/assets/images";
import Image from "next/image";
import React, { ReactNode } from "react";

const Section1Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover ">
      <Image
        src={MusicDisk2}
        alt="music disk"
        className="hidden absolute left-0 -bottom-20 -z-20 sm:block"
        height={400}
      />
      <div className="flex flex-col gap-20 py-20 px-5 lg:pt-28 lg:px-36 lg:pb-72 lg:mt-8 max-w-[1400px]">
        {children}
      </div>
    </div>
  );
};

export default Section1Container;
