import { SongType } from "@/app/types/all";
import { SongCover } from "@/assets/images";
import { PlayIcon } from "@/assets/svg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MusicCard2 from "./MusicCard2";

const MusicCard = ({
  variant,
  className,
  info,
}: {
  variant?: 2;
  className?: string;
  info: SongType;
}) => {
  if (variant === 2) return <MusicCard2 className={className} info={info} />;

  return (
    <div
      className={cn(
        "bg-gradient-to-r from-slate-300 via-transparent from-5% via-30% flex gap-4 w-full max-w-[334px] p-[10px] rounded-[10px]",
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
          <h4>{info?.title || "--"}</h4>
          <p className="text-xs">{info?.artiste || "--"}</p>
        </div>
        <Link
          href=""
          className={buttonVariants({ variant: "ghost", size: "slim" })}
        >
          <Image
            src={PlayIcon}
            alt="play icon"
            width={48}
            height={48}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default MusicCard;
