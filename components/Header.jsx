"use client";

import React, { useState, useEffect } from "react";

import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  });
  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && `bg-[#fef9f5]`}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav*/}
            <Nav containerStyles="hidden lg:flex gap-x-8 items-center" />
            <ThemeToggler />
            {/* navMobile*/}
            <div className="lg:hidden">
              <NavMobile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
