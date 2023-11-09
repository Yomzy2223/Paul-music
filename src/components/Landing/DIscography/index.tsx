import { ArtistHeroImg } from "@/assets/images";
import { LinePattern } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Discography = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-16 flex-1 py-24 px-4 max-w-[640px] m-auto lg:justify-between lg:flex-row lg:w-4/6 lg:m-auto lg:max-w-max">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-gr-color-1 to-gr-color-2 w-4 h-16 rounded-r-xl rounded-l-lg" />
        <div className="p-3 bg-gradient-to-r from-gr-color-1 via-gr-color-3 to-gr-color-2 rounded-[140px] shadow-[-2px_2px_35px_6px_rgba(91,137,255,0.50)] max-w-max">
          <div className="bg-gradient-to-b from-primary to-secondary rounded-[140px] pt-12 relative">
            <Image
              src={ArtistHeroImg}
              alt="king Paul"
              className="object-contain"
              width={250}
            />
            <Image
              src={LinePattern}
              alt="line stripes"
              className="absolute bottom-0 -right-6 h-44"
            />
          </div>
        </div>
        <div className="bg-gradient-to-b from-primary to-secondary w-4 h-16 z-10 rounded-2xl" />
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="font-semibold text-6xl">Discography</h2>
        <p className="text-base text-accent-foreground mt-3 mb-12">
          Enter the world of King Paul Askew, where music takes on a whole new
          dimension. With a unique blend of talent and passion, King Paul
          transcends genres and leaves an indelible mark on every note he plays.
        </p>
        <Button size="lg">Explore Now</Button>
      </div>
    </div>
  );
};

export default Discography;
