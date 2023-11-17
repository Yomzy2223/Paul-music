import { SongCover } from "@/assets/images";
import { PlayIcon } from "@/assets/svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import MusicCard2 from "./MusicCard2";

const MusicCard = ({
  variant,
  className,
}: {
  variant?: 2;
  className?: string;
}) => {
  if (variant === 2) return <MusicCard2 className={className} />;

  return (
    <div
      className={cn(
        "bg-gradient-to-r from-slate-300 via-background from-5% via-30% flex gap-4 w-full max-w-[334px] p-[10px] rounded-[10px]",
        className
      )}
    >
      <Image
        src={SongCover}
        alt="music cover"
        width={60}
        height={60}
        className="rounded-xl object-contain"
      />
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between gap-1">
          <h4>Song Title</h4>
          <p className="text-xs">Artiste names</p>
        </div>
        <Image
          src={PlayIcon}
          alt="music cover"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default MusicCard;
