import ArtistImg1 from "@/components/Images/ArtistImg1";
import { Button } from "@/components/ui/button";
import React from "react";

const TourCard = () => {
  return (
    <div className="bg-foreground flex flex-col items-center gap-5 max-w-5xl rounded-[20px] px-5 py-7 sm:px-14 sm:py-7 sm:flex-row sm:gap-16">
      <ArtistImg1 className="w-full" showSides />
      <div className="space-y-[10px] flex-1">
        <h5 className="card1 text-background">July 20, 2024</h5>
        <h2 className="text-background ">Tour Name</h2>
        <p className="text-background !mb-10">
          Enter the world of King Paul Askew, where music takes on a whole new
          dimension. With a unique blend of talent and passion, King Paul
          transcends genres and leaves an indelible mark on every note he plays.
        </p>
        <Button size="lg">Book Ticket</Button>
      </div>
    </div>
  );
};

export default TourCard;
