import {
  MusicDisk,
  PaulImg1,
  PaulImg2,
  PaulImg3,
  PaulImg5,
  PaulImg6,
} from "@/assets/images";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collection = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover relative">
      <Image
        src={MusicDisk}
        alt="music disk"
        className="absolute right-0 -top-32 -z-20"
        height={400}
      />
      <div className="bg-card/5 ">
        <div className="flex flex-col gap-12 max-w-[640px] lg:flex-row p-5 lg:px-20 lg:py-16 lg:max-w-max">
          <div className="flex flex-col flex-1">
            <p
              className="text-xs font-normal py-[10px] px-[20px] bg-card/10 rounded-[30px] w-max mb-2 sm:text-sm"
              data-aos="zoom-in"
            >
              MERCH
            </p>
            <h2 className="font-semibold text-6xl" data-aos="fade-left">
              The King Paul Collection
            </h2>
            <p
              className="text-base text-accent-foreground mt-3 mb-12"
              data-aos="fade-right"
            >
              Enter the world of King Paul Askew, where music takes on a whole
              new dimension. With a unique blend of talent and passion.
            </p>
            <Link
              href="/merch"
              className={buttonVariants({ variant: "default", size: "lg" })}
              data-aos="flip-left"
            >
              Visit Store
            </Link>
          </div>

          {/* <div className="flex-1 flex flex-col gap-4 min-[450px]:grid min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 w-max">
            <Image
              src={PaulImg1}
              alt="paul"
              className="object-contain rounded-lg"
              data-aos="fade-up"
              width={200}
              height={300}
            />
            <Image
              src={PaulImg2}
              alt="paul"
              className="object-contain rounded-lg"
              data-aos="fade-up"
              width={200}
              height={300}
            />
            <Image
              src={PaulImg3}
              alt="paul"
              className="object-contain rounded-lg"
              data-aos="fade-up"
              width={200}
              height={300}
            />
            <Image
              src={PaulImg1}
              alt="paul"
              className="object-contain rounded-lg"
              data-aos="fade-up"
              width={200}
              height={300}
            />
            <Image
              src={PaulImg5}
              alt="paul"
              className="object-contain rounded-lg"
              data-aos="fade-up"
              width={200}
              height={300}
            />
            <Image
              src={PaulImg6}
              alt="paul"
              className="object-contain rounded-lg"
              data-aos="fade-up"
              width={200}
              height={300}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Collection;
