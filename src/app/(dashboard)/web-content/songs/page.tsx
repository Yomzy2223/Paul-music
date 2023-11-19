"use client";

import { SongType } from "@/app/types/all";
import MusicCard from "@/components/cards/MusicCard";
import DoChecks from "@/components/doChecks";
import { Button, buttonVariants } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [allSongs, setAllSongs] = useState<any>([]);

  const router = useRouter();

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
      console.log(songs);
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

  return (
    <DoChecks
      isEmpty={allSongs?.length === 0}
      emptyText="You have no songs in your discography"
      actionFn={() => router.push("/web-content/songs/add")}
      actionText={
        <span className="flex items-center gap-2">
          Add Song <PlusIcon />
        </span>
      }
    >
      <div>
        <div className="flex justify-between items-center gap-6 mb-6">
          <h3>Songs</h3>
          <Link
            href="/web-content/songs/add"
            className={buttonVariants({ variant: "default" })}
          >
            Add Song <PlusIcon />
          </Link>
        </div>

        {allSongs?.length > 0 && (
          <div className="hidden grid-cols-2 sm:grid lg:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-5 ">
            {allSongs?.map((el: SongType, i: number) => (
              <MusicCard key={i} variant={2} info={el} />
            ))}
          </div>
        )}

        {allSongs?.length > 0 && (
          <div className="space-y-8 sm:hidden">
            {allSongs?.map((el: SongType, i: number) => (
              <MusicCard
                key={i}
                className="max-w-full from-card/30 to-card/30 via-card/30"
                info={el}
              />
            ))}
          </div>
        )}
      </div>
    </DoChecks>
  );
};

export default Page;
