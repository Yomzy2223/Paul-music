import DoChecks from "@/components/doChecks";
import { PlusIcon } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <DoChecks
      isEmpty={true}
      emptyText="You have no songs in your discography"
      actionText={
        <span className="flex items-center gap-2">
          Add Song <PlusIcon />
        </span>
      }
    >
      <div></div>
    </DoChecks>
  );
};

export default Page;
