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
        "bg-card/10 p-[10px] rounded-[10px] h-max lg:min-w-[280px] w-full",
        className
      )}
    >
      <Image
        src={SongCover}
        alt="song cover"
        width={300}
        height={250}
        className="object-contain w-full"
      />
      <div className="flex items-center justify-between gap-6 w-full mt-4 max-w-full text-left">
        <div>
          <p className="text-lg font-semibold lg:text-xl text-foreground">
            {info?.title || "--"}
          </p>
          <p className="text-accent-foreground text-sm mt-2">
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
            alt="play song"
            width={40}
            height={40}
            className="min-w-[40px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default MusicCard2;
