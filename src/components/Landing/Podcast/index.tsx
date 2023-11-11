import { PodcastMic, SongCover } from "@/assets/images";
import { ArrowRight, PlayIcon } from "@/assets/svg";
import MusicCard from "@/components/cards/MusicCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Podcast = () => {
  return (
    <div className="flex justify-center bg-card/5 ">
      <div className="flex flex-col items-center max-w-max gap-12 p-5 lg:flex-row lg:items-end lg:px-20 lg:py-16">
        <div className="flex flex-col gap-[10px] flex-[0.9]">
          <Image
            src={PodcastMic}
            alt="podcast mic"
            className="object-contain lg:w-[500px] relative -left-5 lg:-left-20"
            width={437}
            height={327}
          />
          <>
            <h4 className="text-xs text-accent-foreground font-light mb-[10px] lg:text-base">
              Podcast
            </h4>
            <p className="text-5xl font-bold mb-12 lg:text-6xl">
              Unfiltered with King Paul
            </p>
            <Button size="lg">
              Export Podcast <Image src={ArrowRight} alt="arrow right" />
            </Button>
          </>
        </div>
        <div className="flex flex-col flex-[1.1] sm:grid sm:grid-cols-2 gap-[20px] h-max max-w-max">
          {[1, 2, 3, 4].map((el) => (
            <MusicCard key={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
