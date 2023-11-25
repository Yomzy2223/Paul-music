"use client";

import { TourType } from "@/app/types/all";
import MusicCard from "@/components/cards/MusicCard";
import TourCard from "@/components/cards/TourCard";
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
  const [allTours, setAllTours] = useState<any>([]);

  const router = useRouter();

  const pullTours = async () => {
    try {
      const toursSnapShot = await getDocs(collection(db, "tours"));
      const tours: any[] = [];
      toursSnapShot.forEach((doc) => {
        tours.push({ ...doc.data(), id: doc.id });
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
    <DoChecks
      isEmpty={allTours?.length === 0}
      emptyText="You have no tours yet"
      actionFn={() => router.push("/web-content/tours/add")}
      actionText={
        <span className="flex items-center gap-2">
          Add Tour <PlusIcon />
        </span>
      }
    >
      <div>
        <div className="flex justify-between items-center gap-6 mb-6">
          <h3>Tours</h3>
          <Link
            href="/web-content/tours/add"
            className={buttonVariants({ variant: "default" })}
          >
            Add Tour <PlusIcon />
          </Link>
        </div>

        {allTours?.length > 0 && (
          <div className="hidden grid-cols-2 sm:grid xl:grid-cols-3 2xl:grid-cols-4 gap-y-7 gap-x-5 ">
            {allTours?.map((el: TourType, i: number) => (
              <Button
                variant="ghost2"
                key={i}
                onClick={() =>
                  router.push(`/web-content/tours/update?id=${el.id}`)
                }
              >
                <TourCard info={el} className="sm:px-3 sm:gap-3" />
              </Button>
            ))}
          </div>
        )}

        {allTours?.length > 0 && (
          <div className="space-y-8 sm:hidden">
            {allTours?.map((el: TourType, i: number) => (
              <Button
                variant="ghost2"
                key={i}
                onClick={() =>
                  router.push(`/web-content/tours/update?id=${el.id}`)
                }
              >
                <TourCard key={i} info={el} className="sm:px-3 sm:gap-3" />
              </Button>
            ))}
          </div>
        )}
      </div>
    </DoChecks>
  );
};

export default Page;
