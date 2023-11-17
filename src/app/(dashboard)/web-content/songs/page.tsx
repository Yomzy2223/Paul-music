import MusicCard from "@/components/cards/MusicCard";
import DoChecks from "@/components/doChecks";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <DoChecks
      isEmpty={false}
      emptyText="You have no songs in your discography"
      actionText={
        <span className="flex items-center gap-2">
          Add Song <PlusIcon />
        </span>
      }
    >
      <div>
        <div className="flex justify-between items-center gap-6 mb-6">
          <h3>Songs</h3>
          <Button>
            Add Song <PlusIcon />
          </Button>
        </div>

        <div className="hidden grid-cols-2 sm:grid lg:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-5 ">
          {Array(20)
            .fill("hi")
            .map((el, i) => (
              <MusicCard key={i} variant={2} />
            ))}
        </div>

        <div className="space-y-8 sm:hidden">
          {Array(20)
            .fill("hi")
            .map((el, i) => (
              <MusicCard
                key={i}
                className="max-w-full from-card/30 to-card/30 via-card/30"
              />
            ))}
        </div>
      </div>
    </DoChecks>
  );
};

export default Page;
