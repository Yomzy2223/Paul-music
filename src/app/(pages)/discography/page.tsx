"use client";

import { SongType } from "@/app/types/all";
import MusicCard from "@/components/cards/MusicCard";
import Section1Container from "@/container/Section1Container";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [allSongs, setAllSongs] = useState<any>([]);

  const pullSongs = async () => {
    const songsSnapShot = await getDocs(collection(db, "songs"));
    const songs: any[] = [];
    songsSnapShot.forEach((doc) => {
      songs.push(doc.data());
    });
    setAllSongs(songs);
    console.log(songs);
  };

  useEffect(() => {
    pullSongs();
  }, []);

  return (
    <Section1Container>
      <div>
        <h5 className="card1 ">The Book Of Paul King Paul Version</h5>
        <h1 className="mb-5 mt-2">Discography</h1>
        <p>
          Enter the world of King Paul Askew, where music takes on a whole new
          dimension.
        </p>
        <div className="flex flex-col gap-5 mt-20 sm:mt-14">
          <h2>Latest Releases</h2>
          <div className="flex flex-col gap-5 py-2 sm:grid sm:gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
            {Array(20)
              .fill("")
              .map((el, i) => (
                <MusicCard key={i} />
              ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-20 sm:mt-14">
        <h2>Other Releases</h2>
        <div className="flex flex-col gap-5 py-2 sm:grid sm:gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
          {allSongs?.map((el: SongType, i: number) => (
            <MusicCard key={i} info={el} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-20 sm:mt-14">
        <h2>Singles</h2>
        <div className="flex flex-col gap-5 py-2 sm:grid sm:gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill("")
            .map((el, i) => (
              <MusicCard key={i} variant={2} />
            ))}
        </div>
      </div>
    </Section1Container>
  );
};

export default Page;
