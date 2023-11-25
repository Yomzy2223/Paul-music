import { StoreImg1, StoreImg2 } from "@/assets/images";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Store = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center pt-24 pb-32">
      <div className="flex gap-10 mb-10">
        <Image src={StoreImg1} alt="store" data-aos="fade-up" />
        <Image src={StoreImg2} alt="store" data-aos="fade-left" />
        <Image src={StoreImg1} alt="store" data-aos="fade-down" />
      </div>
      <Link
        href="/merch"
        className={buttonVariants({ size: "lg" })}
        data-aos="flip-left"
      >
        Visit Store
      </Link>
    </div>
  );
};

export default Store;
