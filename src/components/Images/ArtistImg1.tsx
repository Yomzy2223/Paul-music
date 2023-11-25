import { ArtistHeroImg } from "@/assets/images";
import { LinePattern } from "@/assets/svg";
import Image from "next/image";
import React from "react";

const ArtistImg1 = ({
  className,
  showSides,
}: {
  className?: string;
  showSides?: boolean;
}) => {
  return (
    <div className="flex items-center gap-2" data-aos="fade">
      {showSides && (
        <div className="bg-gradient-to-r from-gr-color-1 to-gr-color-2 w-4 h-16 rounded-r-xl rounded-l-lg" />
      )}
      <div className="p-3 bg-gradient-to-r from-gr-color-1 via-gr-color-3 to-gr-color-2 rounded-[140px] shadow-[-2px_2px_35px_6px_rgba(91,137,255,0.50)] max-w-max">
        <div className="bg-gradient-to-b from-primary to-secondary rounded-[140px] pt-12 relative">
          <Image
            src={ArtistHeroImg}
            alt="king Paul"
            className="object-contain"
            width={250}
            height={200}
          />
          <Image
            src={LinePattern}
            alt="line stripes"
            className="absolute bottom-0 -right-6 h-44"
          />
        </div>
      </div>
      {showSides && (
        <div className="bg-gradient-to-b from-primary to-secondary w-4 h-16 z-10 rounded-2xl" />
      )}
    </div>
  );
};

export default ArtistImg1;
