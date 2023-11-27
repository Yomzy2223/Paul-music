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
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover ">
      <Image
        src={MusicDisk2}
        alt="music disk"
        className="hidden absolute left-0 -bottom-20 -z-20 object-contain sm:block"
        width={200}
        height={400}
      />
      <div className="flex flex-col justify-between item-end max-w-[640px] m-auto px-5 py-20 lg:py-32 lg:px-36 lg:max-w-max md:flex-row">
        <div className="flex-[1.1] flex flex-col gap-[20px]">
          <h5 className="card1 mb-1" data-aos="zoom-in">
            WHERE MUSIC REIGNS SUPREME
          </h5>
          <h1 className="lg:-mr-52 2xl:mr-0" data-aos="fade-right">
            Welcome to the Realm of{" "}
            <span className="gradient-text">King Paul Askew</span>
          </h1>
          <p className="lg:mr-20" data-aos="fade-left">
            The Kingdom of King Paul Here is where you enter royalty. King Paul
            is the king of love, happiness, healing, confidence, and success.
            This website will inspire and require you to not only be your best,
            but will give the tools to help you along the way. Enter the Castle
            and get ready to become a king or queen with my guidance.
          </p>
          <Link
            href="/discography"
            className={buttonVariants({ variant: "default", size: "lg" })}
            data-aos="flip-left"
          >
            Listen Now <Image src={ArrowRight} alt="arrow right" />
          </Link>
          <div>
            <p className="mb-[10px]" data-aos="fade">
              AVAILABLE ON:
            </p>
            <div
              className="flex gap-2 bg-card/20 px-[20px] py-[10px] w-max rounded-lg"
              data-aos="fade"
            >
              <Link
                href="https://music.apple.com/us/artist/paul-askew/1538495927"
                target="_blank"
              >
                <Image
                  src={SoundCloud}
                  alt="sound cloud"
                  className="object-contain"
                  width={70}
                  height={70}
                />
              </Link>

              <Link
                href="https://open.spotify.com/artist/0prvPO5rrR6tm1y1lFfaQA?si=KNrdS4MiS4WRva9c5rTmTA"
                target="_blank"
              >
                <Image
                  src={Sportify}
                  alt="sportify"
                  className="object-contain"
                  width={70}
                  height={70}
                />
              </Link>
              <Link
                href="https://youtube.com/@KingPaulAskew?si=k4E1z8QytEp2Ni33"
                target="_blank"
              >
                <Image
                  src={Album}
                  alt="album"
                  className="object-contain"
                  width={70}
                  height={70}
                />
              </Link>
              <Link
                href="https://instagram.com/kingpaulaskew?utm_source=qr"
                target="_blank"
              >
                <Image
                  src={Stereo}
                  alt="music wave"
                  className="object-contain"
                  width={70}
                  height={70}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden flex-[0.9] items-end lg:flex">
          <div
            className="p-3 bg-gradient-to-r from-gr-color-1 via-gr-color-3 to-gr-color-2 rounded-[140px] shadow-[-2px_2px_35px_6px_rgba(91,137,255,0.50)] sm:rounded-[160px]"
            data-aos="fade"
          >
            <div className="bg-gradient-to-b from-primary to-secondary rounded-[140px] pt-12 relative w-full">
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
          <div
            className="hidden flex-col items-center justify-center xl:flex"
            data-aos="fade"
          >
            <div className="flex justify-between gap-2">
              <Link
                href="https://music.apple.com/us/artist/paul-askew/1538495927"
                target="_blank"
              >
                <Image
                  src={SoundCloud}
                  alt="sound cloud"
                  className="max-h-max"
                />
              </Link>
              <Link
                href="https://open.spotify.com/artist/0prvPO5rrR6tm1y1lFfaQA?si=KNrdS4MiS4WRva9c5rTmTA"
                target="_blank"
              >
                <Image src={Sportify} alt="sportify" />
              </Link>
            </div>
            <GradientWrapper className="bg-gradient-to-r from-gr-color-1 via-gr-color-3 to-gr-color-2 rounded-[140px] p-2 mx-8">
              <div className="bg-gradient-to-b from-primary to-secondary rounded-[140px] pt-12 border-4 border-background w-36 ">
                <Image src={RecordingInstruments} alt="recording instruments" />
              </div>
            </GradientWrapper>
            <div className="flex justify-between gap-2">
              <Link
                href="https://youtube.com/@KingPaulAskew?si=k4E1z8QytEp2Ni33"
                target="_blank"
              >
                <Image src={Album} alt="album" />
              </Link>
              <Link
                href="https://instagram.com/kingpaulaskew?utm_source=qr"
                target="_blank"
              >
                <Image src={Stereo} alt="music wave" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
