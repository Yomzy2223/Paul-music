"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
