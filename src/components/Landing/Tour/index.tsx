"use client";

import { TourType } from "@/app/types/all";
import { ArtistTour } from "@/assets/images";
import { LocationIcon } from "@/assets/svg";
import DoChecks from "@/components/doChecks";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Tour = () => {
  const [allTours, setAllTours] = useState<any>([]);

  const pullTours = async () => {
    try {
      const toursSnapShot = await getDocs(collection(db, "tours"));
      const tours: any[] = [];
      toursSnapShot.forEach((doc) => {
        tours.push(doc.data());
      });
      setAllTours(
        tours.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )
      );
    } catch (e) {
      toast({
        description: "Error pulling tours",
      });
      console.log(e);
    }
  };

  useEffect(() => {
    pullTours();
  }, []);

  return (
    <div className="bg-hero flex flex-col items-center gap-10 py-24 px-5">
      <h2
        className="flex items-end gap-2 font-semibold text-4xl"
        data-aos="fade-up"
      >
        Tour
        <span className="text-transparent bg-gradient-to-b from-gr-color-2 from-30% to-gr-color-1 bg-clip-text">
          2023/24
        </span>
      </h2>
      <DoChecks
        isEmpty={allTours?.length === 0}
        emptyText="Ooops! There are no tours available yet."
      >
        <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2">
          {allTours?.slice(0, 4).map((el: TourType, i: number) => (
            <div
              key={i}
              className="flex flex-col gap-10 bg-card/10 p-3 pb-5 rounded-lg"
              data-aos="fade-up"
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
                    {el?.date}
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
      </DoChecks>
    </div>
  );
};

export default Tour;
