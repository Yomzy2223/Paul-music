import TourCard from "@/components/cards/TourCard";
import React from "react";
import Section1Container from "../container/Section1Container";

const Page = () => {
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
          <h3>
            <span className="gradient-text">Upcoming</span> Tours
          </h3>
          <div className="flex flex-col gap-12 py-2">
            {Array(12)
              .fill("")
              .map((el, i) => (
                <TourCard key={i} />
              ))}
          </div>
        </div>
      </div>
    </Section1Container>
  );
};

export default Page;
