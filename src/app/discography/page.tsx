import { MusicDisk2 } from "@/assets/images";
import MusicCard from "@/components/cards/MusicCard";
import Image from "next/image";
import React from "react";
import Section1Container from "../container/Section1Container";

const Page = () => {
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
          <h3>Latest Releases</h3>
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
        <h3>Other Releases</h3>
        <div className="flex flex-col gap-5 py-2 sm:grid sm:gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
          {Array(20)
            .fill("")
            .map((el, i) => (
              <MusicCard key={i} />
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-20 sm:mt-14">
        <h3>Singles</h3>
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