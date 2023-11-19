import { TourType } from "@/app/types/all";
import ArtistImg1 from "@/components/Images/ArtistImg1";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const TourCard = ({
  info,
  className,
}: {
  info: TourType;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "bg-foreground flex flex-col items-center gap-5 max-w-5xl rounded-[20px] px-5 py-7 sm:px-14 sm:py-7 sm:flex-row sm:gap-16",
        className
      )}
    >
      <ArtistImg1 className="w-full" showSides />
      <div className=" space-y-[10px] flex-1 min-w-[50%]">
        <h5 className="card1 text-background">{info?.date || "--"}</h5>
        <h2 className="text-background ">{info?.name || "--"}</h2>
        <p className="text-background !mb-10">{info?.description || "--"}</p>
        <Link
          href={info?.link}
          className={buttonVariants({ variant: "default", size: "lg" })}
          target={info?.link ? "_blank" : ""}
        >
          Book Ticket
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
