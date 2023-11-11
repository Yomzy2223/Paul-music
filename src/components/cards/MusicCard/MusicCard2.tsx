import { SongCover } from "@/assets/images";
import { PlayIcon } from "@/assets/svg";
import Image from "next/image";
import React from "react";

const MusicCard2 = () => {
  return (
    <div className="bg-card/10 p-[10px] rounded-[10px] h-max lg:min-w-[220px] ">
      <Image src={SongCover} alt="song cover" />
      <div className="flex items-center justify-between gap-6 w-full mt-4">
        <div>
          <p className="text-xl font-semibold lg:text-2xl">Song Title</p>
          <p className="text-accent-foreground text-sm mt-2">Artist name</p>
        </div>
        <Image src={PlayIcon} alt="play song" />
      </div>
    </div>
  );
};

export default MusicCard2;
