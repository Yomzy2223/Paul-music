import { ArtistTour } from "@/assets/images";
import { LocationIcon } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Tour = () => {
  return (
    <div className="bg-hero2 flex flex-col items-center gap-10 py-24 px-5">
      <h3 className="font-semibold text-4xl">
        Tour
        <span className="text-transparent bg-gradient-to-b from-gr-color-2 from-30% to-gr-color-1 bg-clip-text">
          2023/24
        </span>
      </h3>

      <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2">
        {[1, 2, 3, 4].map((el) => (
          <div
            key={el}
            className="flex flex-col gap-10 bg-card/10 p-3 pb-5 rounded-lg"
          >
            <Image
              src={ArtistTour}
              alt="artist tour"
              width={500}
              height={500}
              className="object-contain"
            />
            <div className="flex justify-between items-center gap-4 ">
              <div className="">
                <p className="text-xl font-semibold lg:text-2xl">
                  June 22 2023
                </p>
                <p className="flex text-accent-foreground text-base lg:text-xl">
                  <Image
                    src={LocationIcon}
                    alt="location"
                    width={20}
                    height={20}
                  />{" "}
                  Momr, Florida
                </p>
              </div>
              <Button size="lg">Book Ticket</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;
