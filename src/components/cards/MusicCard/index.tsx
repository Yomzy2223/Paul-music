import { SongType } from "@/app/types/all";
import { PodcastCover } from "@/assets/images";
import { PlayIcon } from "@/assets/svg";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
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
        src={PodcastCover}
        alt="music cover"
        width={60}
        height={60}
        className="rounded-xl object-contain"
      />
      <div className="flex justify-between gap-3">
        <div className="flex flex-col justify-between gap-1">
          <h4 className="whitespace-pre-wrap">{info?.title || "--"}</h4>
          <p className="text-xs whitespace-pre-wrap">
            {info?.artiste || info?.hostNames || "--"}
          </p>
        </div>
        <Link
          href={info?.link || ""}
          className={buttonVariants({ variant: "ghost", size: "slim" })}
          target={info?.link ? "_blank" : ""}
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
