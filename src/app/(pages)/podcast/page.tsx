"use client";

import { SongType } from "@/app/types/all";
import MusicCard from "@/components/cards/MusicCard";
import DoChecks from "@/components/doChecks";
import { toast } from "@/components/ui/use-toast";
import Section1Container from "@/container/Section1Container";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [allPodcasts, setAllPodcasts] = useState<any>([]);

  const pullSongs = async () => {
    try {
      const podcastsSnapShot = await getDocs(collection(db, "podcasts"));
      const podcasts: any[] = [];
      podcastsSnapShot.forEach((doc) => {
        podcasts.push(doc.data());
      });
      setAllPodcasts(
        podcasts.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )
      );
    } catch (e) {
      toast({
        description: "Error pulling podcasts",
      });
      console.log(e);
    }
  };

  useEffect(() => {
    pullSongs();
  }, []);

  return (
    <Section1Container>
      <div>
        <h5 className="card1" data-aos="zoom-in">
          PODCAST
        </h5>
        <h1 className="mb-5 mt-2" data-aos="fade-right">
          Unfiltered with King Paul
        </h1>
        <p data-aos="fade-left">
          Enter the world of King Paul Askew, where music takes on a whole new
          dimension.
        </p>
        <div className="flex flex-col gap-5 mt-20 sm:mt-14">
          <h2 data-aos="fade">Podcasts</h2>
          <DoChecks
            isEmpty={allPodcasts?.length === 0}
            emptyText="Ooops! No Podcast available at the moment"
          >
            <div className="flex flex-col gap-5 py-2 sm:grid sm:gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
              {allPodcasts?.map((el: SongType, i: number) => (
                <div key={i} data-aos="fade-up">
                  <MusicCard variant={2} info={el} />
                </div>
              ))}
            </div>
          </DoChecks>
        </div>
      </div>
    </Section1Container>
  );
};

export default Page;
