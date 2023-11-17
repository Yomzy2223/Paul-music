import GradientWrapper from "@/container/GradientWrapper";
import {
  ArtistHeroImg,
  MusicDisk2,
  RecordingInstruments,
} from "@/assets/images";
import {
  ArrowRight,
  Sportify,
  Stereo,
  Album,
  SoundCloud,
  LinePattern,
} from "@/assets/svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover ">
      <Image
        src={MusicDisk2}
        alt="music disk"
        className="hidden absolute left-0 -bottom-20 -z-20 sm:block"
        height={400}
      />
      <div className="flex flex-col justify-between item-end max-w-[640px] m-auto px-5 py-20 lg:py-32 lg:px-36 lg:max-w-max md:flex-row">
        <div className="flex-[1.1] flex flex-col gap-[20px]">
          <h5 className="card1 mb-1">WHERE MUSIC REIGNS SUPREME</h5>
          <h1 className="lg:-mr-52">
            Welcome to the Realm of{" "}
            <span className="gradient-text">King Paul Askew</span>
          </h1>
          <p className="lg:mr-20">
            The Kingdom of King Paul Here is where you enter royalty. King Paul
            is the king of love, happiness, healing, confidence, and success.
            This website will inspire and require you to not only be your best,
            but will give the tools to help you along the way. Enter the Castle
            and get ready to become a king or queen with my guidance.
          </p>
          <Button size="lg">
            Listen Now <Image src={ArrowRight} alt="arrow right" />
          </Button>
          <div>
            <p className="mb-[10px]">AVAILABLE ON:</p>
            <div className="flex gap-2 bg-card/20 px-[20px] py-[10px] w-max rounded-lg">
              <Image src={SoundCloud} alt="sound cloud" />
              <Image src={Sportify} alt="sportify" />
              <Image src={Album} alt="album" />
              <Image src={Stereo} alt="music wave" />
            </div>
          </div>
        </div>
        <div className="hidden flex-[0.9] items-end lg:flex">
          <div className="p-3 bg-gradient-to-r from-gr-color-1 via-gr-color-3 to-gr-color-2 rounded-[140px] shadow-[-2px_2px_35px_6px_rgba(91,137,255,0.50)]">
            <div className="bg-gradient-to-b from-primary to-secondary rounded-[140px] pt-12 relative">
              <Image
                src={ArtistHeroImg}
                alt="king Paul"
                className="object-contain"
              />
              <Image
                src={LinePattern}
                alt="line stripes"
                className="absolute bottom-0 -right-6 h-44"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="flex justify-between gap-2">
              <Image src={SoundCloud} alt="sound cloud" className="max-h-max" />
              <Image src={Sportify} alt="sportify" />
            </div>
            <GradientWrapper className="bg-gradient-to-r from-gr-color-1 via-gr-color-3 to-gr-color-2 rounded-[140px] p-2 mx-8">
              <div className="bg-gradient-to-b from-primary to-secondary rounded-[140px] pt-12 border-4 border-background w-full ">
                <Image src={RecordingInstruments} alt="recording instruments" />
              </div>
            </GradientWrapper>
            <div className="flex justify-between gap-2">
              <Image src={Album} alt="album" />
              <Image src={Stereo} alt="music wave" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
