"use client";

import { SongType } from "@/app/types/all";
import MusicCard from "@/components/cards/MusicCard";
import { toast } from "@/components/ui/use-toast";
import Section1Container from "@/container/Section1Container";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [allSongs, setAllSongs] = useState<any>([]);

  const pullSongs = async () => {
    try {
      const songsSnapShot = await getDocs(collection(db, "songs"));
      const songs: any[] = [];
      songsSnapShot.forEach((doc) => {
        songs.push(doc.data());
      });
      setAllSongs(
        songs.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )
      );
    } catch (e) {
      toast({
        description: "Error pulling songs",
      });
      console.log(e);
    }
  };

  useEffect(() => {
    pullSongs();
  }, []);

  const newReleases = allSongs?.slice(0, 5);
  const otherReleases = allSongs?.slice(5);
  const singleReleases = allSongs?.filter(
    (el: SongType) => el?.category?.toLowerCase() === "single"
  );

  return (
    <Section1Container>
      <div>
        <h5 className="card1" data-aos="zoom-in">
          The Book Of Paul King Paul Version
        </h5>
        <h1 className="mb-5 mt-2" data-aos="fade-right">
          Discography
        </h1>
        <p data-aos="fade-left">
          Enter the world of King Paul Askew, where music takes on a whole new
          dimension.
        </p>
        {newReleases?.length > 0 && (
          <div className="flex flex-col gap-5 mt-20 sm:mt-14">
            <h2 data-aos="fade">Latest Releases</h2>
            <div className="flex flex-col gap-5 py-2 sm:grid sm:gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
              {newReleases?.map((el: SongType, i: number) => (
                <div key={i} data-aos="fade-up">
                  <MusicCard info={el} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {otherReleases?.length > 0 && (
        <div className="flex flex-col gap-5 mt-20 sm:mt-14">
          <h2 data-aos="fade">Other Releases</h2>
          <div className="flex flex-col gap-5 py-2 sm:grid sm:gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
            {otherReleases?.map((el: SongType, i: number) => (
              <div key={i} data-aos="fade-up">
                <MusicCard info={el} />
              </div>
            ))}
          </div>
        </div>
      )}

      {singleReleases?.length > 0 && (
        <div className="flex flex-col gap-5 mt-20 sm:mt-14">
          <h2 data-aos="fade">Singles</h2>
          <div className="flex flex-col gap-5 py-2 sm:grid sm:gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
            {singleReleases?.map((el: SongType, i: number) => (
              <div key={i} data-aos="fade-up">
                <MusicCard variant={2} info={el} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Section1Container>
  );
};

export default Page;
