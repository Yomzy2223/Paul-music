import GradientWrapper from "@/app/container/GradientWrapper";
import { Merch } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const MerchCard = () => {
  return (
    <div className="card1 w-full max-w-max !rounded-lg !px-3">
      <Image src={Merch} alt="merch" />
      <h4>Merch name 1</h4>
      <h4>$35</h4>
      <GradientWrapper
        className="bg-gradient-to-l rounded-md active:scale-95 w-full"
        isButton
      >
        <Button
          variant="outline"
          size="lg"
          className="min-w-full active:scale-100"
        >
          Read Now
        </Button>
      </GradientWrapper>
    </div>
  );
};

export default MerchCard;
