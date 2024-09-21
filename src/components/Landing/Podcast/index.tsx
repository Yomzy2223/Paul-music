"use client";

import { SongType } from "@/app/types/all";
import { PodcastMic, SongCover } from "@/assets/images";
import { ArrowRight, PlayIcon } from "@/assets/svg";
import MusicCard from "@/components/cards/MusicCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Podcast = () => {
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
    <div className="flex justify-center bg-card/5 ">
      <div className="flex flex-col items-center max-w-max gap-12 p-5 xl:flex-row xl:items-end xl:px-20 xl:py-16">
        <div className="flex flex-col gap-[10px] flex-[0.9]">
          <Image
            src={PodcastMic}
            alt="podcast mic"
            className="object-contain lg:w-[500px] relative -left-5 lg:-left-20"
            width={437}
            height={327}
            data-aos="fade"
          />
          <>
            <h4
              className="text-xs text-accent-foreground font-light mb-[10px] lg:text-base"
              data-aos="zoom-in"
            >
              Podcast
            </h4>
            <h2
              className="text-5xl font-bold mb-12 lg:text-6xl"
              data-aos="fade-right"
            >
              Unfiltered with King Paul
            </h2>
            <Link
              href="/podcast"
              className={buttonVariants({ variant: "default", size: "lg" })}
              data-aos="flip-right"
            >
              Export Podcast <Image src={ArrowRight} alt="arrow right" />
            </Link>
          </>
        </div>
        <div className="flex flex-col flex-[1.1] lg:grid lg:grid-cols-2 gap-[20px] h-max w-full">
          {allPodcasts?.slice(0, 4).map((el: SongType, i: number) => (
            <div key={i} data-aos="fade-left">
              <MusicCard variant={2} info={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
