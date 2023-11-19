import { ArtistHeroImg } from "@/assets/images";
import { LinePattern } from "@/assets/svg";
import ArtistImg1 from "@/components/Images/ArtistImg1";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discography = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-16 flex-1 py-24 px-4 max-w-[640px] m-auto lg:justify-between lg:flex-row lg:w-4/6 lg:m-auto lg:max-w-max">
      <ArtistImg1 showSides />

      <div className="flex flex-col flex-1">
        <h2 className="font-semibold text-6xl">Discography</h2>
        <p className="text-base text-accent-foreground mt-3 mb-12">
          Enter the world of King Paul Askew, where music takes on a whole new
          dimension. With a unique blend of talent and passion, King Paul
          transcends genres and leaves an indelible mark on every note he plays.
        </p>
        <Link
          href="/discography"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Discography;
