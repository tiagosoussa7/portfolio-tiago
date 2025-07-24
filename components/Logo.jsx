import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-3xl font-semibold">
        Tiago<span className="text-primary">.</span>
      </h1>
    </Link>
  );
};

export default Logo;
