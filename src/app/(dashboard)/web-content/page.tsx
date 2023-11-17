"use client";

import {
  ForwardIcon,
  PlusIcon,
  PodcastIcon,
  SongIcon,
  TourIcon,
} from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const getIcon = (name: string) => {
    if (name.toLowerCase() === "discography") return SongIcon;
    else if (name.toLowerCase() === "podcasts") return PodcastIcon;
    else if (name.toLowerCase() === "tours") return TourIcon;
  };

  return (
    <div className="flex flex-col gap-14 ">
      <div className="space-y-4">
        <h3>Overview</h3>
        <div className="flex flex-row gap-[10px] flex-wrap w-full sm:gap-5">
          {db.map((el) => (
            <div
              key={el.name}
              className="w-full bg-card/20 flex flex-col rounded-lg p-[10px] sm:w-[200px]"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full p-[6px] bg-card/20 mr-[10px]">
                  <Image
                    src={getIcon(el.name)}
                    alt={el.name}
                    width={16}
                    height={16}
                  />
                </div>
                <h5>{el.name}</h5>
              </div>
              <div className="flex items-center gap-1 mb-6">
                <h2>{el.total}</h2>
                <p>{el.name}</p>
              </div>
              <Link href={el.link} className="flex self-end items-center gap-1">
                <p className="text-white text-sm">See more</p>
                <Image src={ForwardIcon} alt="forward icon" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3>Quick Actions</h3>
        <div className="flex flex-row gap-[10px] flex-wrap w-full sm:gap-5">
          {actions.map((el) => (
            <Button
              key={el.text}
              variant="ghost"
              size="slim"
              onClick={() => router.push(el.link)}
            >
              <div className="w-full bg-foreground flex flex-col items-center justify-center gap-5 rounded-lg p-[10px] h-[130px] sm:w-[290px]">
                <Image src={PlusIcon} alt="plus icon" />
                <p className="text-background">{el.text}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <div className="sticky top-0">
        <div className="flex justify-between items-center gap-6">
          <h3>Recent Activities</h3>
          <Link href="" className="flex self-end items-center gap-1">
            <p className="text-white text-sm">See more</p>
            <Image src={ForwardIcon} alt="forward icon" />
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              {activitiesHeader.map((el) => (
                <TableHead key={el} className="text-white">
                  {el}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {activitiesBody.map((row, i) => (
              <TableRow key={i} className="border-b-0 hover:bg-none">
                {row.map((el) => (
                  <TableCell key={el}>{el}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;

const db = [
  {
    name: "Discography",
    total: 233,
    link: "/web-content/songs",
  },
  {
    name: "Podcasts",
    total: 245,
    link: "/web-content/podcasts",
  },
  {
    name: "Tours",
    total: 432,
    link: "/web-content/tours",
  },
];

const actions = [
  {
    link: "/web-content/songs/add",
    text: "Add New Song",
  },
  {
    link: "/web-content/podcasts/add",
    text: "Add New Podcast",
  },
  {
    link: "/web-content/tours/add",
    text: "Add New Tour",
  },
];

const activitiesHeader = ["Date", "Activities", "Description", "Actor"];
const activitiesBody = [
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
  ["Feb 27, 2023", "Removed Song", "Name of subject", "Admin"],
];
