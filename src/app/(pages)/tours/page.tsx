"use client";

import { TourType } from "@/app/types/all";
import TourCard from "@/components/cards/TourCard";
import DoChecks from "@/components/doChecks";
import { toast } from "@/components/ui/use-toast";
import Section1Container from "@/container/Section1Container";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Page = () => {
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
    <Section1Container>
      <div>
        <h5 className="card1 ">WHERE MUSIC REIGNS SUPREME</h5>
        <h1 className="mb-5 mt-2">Book Of Paul Tour Dates TBD</h1>
        <p>
          Enter the world of King Paul Askew, where music takes on a whole new
          dimension.
        </p>
        <div className="flex flex-col gap-5 mt-20 sm:mt-14">
          <h2>
            <span className="gradient-text">Upcoming</span> Tours
          </h2>
          <DoChecks
            isEmpty={allTours?.length === 0}
            emptyText="Ooops! There are no tours available at this time."
          >
            <div className="flex flex-col gap-12 py-2">
              {allTours?.map((el: TourType, i: number) => (
                <TourCard key={i} info={el} />
              ))}
            </div>
          </DoChecks>
        </div>
      </div>
    </Section1Container>
  );
};

export default Page;
