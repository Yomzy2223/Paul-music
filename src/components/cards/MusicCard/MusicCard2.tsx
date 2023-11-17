import { SongCover } from "@/assets/images";
import { PlayIcon } from "@/assets/svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const MusicCard2 = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-card/10 p-[10px] rounded-[10px] h-max w-max lg:min-w-[280px] ",
        className
      )}
    >
      <Image src={SongCover} alt="song cover" width={300} height={250} />
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
