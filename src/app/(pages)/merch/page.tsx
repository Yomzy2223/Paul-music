import MerchCard from "@/components/cards/MerchCard";
import React from "react";
import Section1Container from "../../../container/Section1Container";

const Page = () => {
  return (
    <Section1Container>
      <div>
        <h5 className="card1 ">WHERE MUSIC REIGNS SUPREME</h5>
        <h1 className="mb-5 mt-2">The King Paul Collection</h1>
        <p>
          Enter the world of King Paul Askew, where music takes on a whole new
          dimension.
        </p>
        <div className="flex flex-col gap-5 mt-20 sm:mt-14">
          <div className="flex flex-col gap-5 py-2 min-[400px]:grid-cols-2 min-[400px]:grid sm:gap-x-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array(12)
              .fill("")
              .map((el, i) => (
                <MerchCard key={i} />
              ))}
          </div>
        </div>
      </div>
    </Section1Container>
  );
};

export default Page;
