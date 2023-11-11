import GradientWrapper from "@/app/container/GradientWrapper";
import { SongCover } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const NewsCard = () => {
  return (
    <div className="bg-card/10 p-3 rounded-xl max-w-max ">
      <Image src={SongCover} alt="song cover" height={227} width={308} />
      <h4 className="mt-3 mb-2">News feed title</h4>
      <GradientWrapper
        className="bg-gradient-to-l rounded-md active:scale-95 w-full"
        isButton
      >
        <Button
          variant="outline"
          size="lg"
          className="min-w-full active:scale-100"
        >
          Read Now
        </Button>
      </GradientWrapper>
    </div>
  );
};

export default NewsCard;
