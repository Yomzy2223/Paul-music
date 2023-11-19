import { SongType } from "@/app/types/all";
import { SongCover } from "@/assets/images";
import { PlayIcon } from "@/assets/svg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MusicCard2 = ({
  className,
  info,
}: {
  className?: string;
  info: SongType;
}) => {
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
          <p className="text-xl font-semibold lg:text-2xl">
            {info?.title || "--"}
          </p>
          <p className="text-accent-foreground text-sm mt-2">
            {info?.artiste || "--"}
          </p>
        </div>
        <Link
          href=""
          className={buttonVariants({ variant: "ghost", size: "slim" })}
        >
          <Image src={PlayIcon} alt="play song" />
        </Link>
      </div>
    </div>
  );
};

export default MusicCard2;
