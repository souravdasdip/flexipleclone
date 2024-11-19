import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="px-8 py-8 flex items-center justify-between gap-8 font-bold">
      <Image
        src="/logo.svg"
        alt="flexiple"
        width={120}
        height={38}
        priority
        className="text-white"
      />

      <ol className="flex items-center flex-1 justify-start gap-8">
        <li>For Companies</li>
        <li>For Talent</li>
        <li>Our Products</li>
      </ol>

      <div className="flex items-center gap-4">
        <Button variant={"secondary"}>Find Jobs</Button>
        <Button>Hire Developers</Button>
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default NavBar;
