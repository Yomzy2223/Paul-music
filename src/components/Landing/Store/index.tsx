import { StoreImg1, StoreImg2 } from "@/assets/images";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Store = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center pt-24 pb-32">
      <div className="flex gap-10 mb-10">
        <Image src={StoreImg1} alt="store" />
        <Image src={StoreImg2} alt="store" />
        <Image src={StoreImg1} alt="store" />
      </div>
      <Link href="/merch" className={buttonVariants({ size: "lg" })}>
        Visit Store
      </Link>
    </div>
  );
};

export default Store;
