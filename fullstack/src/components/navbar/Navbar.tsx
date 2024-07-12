import Link from "next/link";
import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 bg-stone-700 text-stone-300 h-16 ">
      <Link href={"/"} className="font-bold">
        2115000390
      </Link>
      <div className="flex gap-4">
        <Link href={"/"} className="font-semibold">
          Products
        </Link>
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;
