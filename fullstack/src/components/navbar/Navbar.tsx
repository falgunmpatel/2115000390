import Link from "next/link";
import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Navbar = ({
  setProducts,
}: {
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  return (
    <nav className="flex items-center justify-between px-8 bg-stone-700 text-stone-300 h-16 ">
      <Link href={"/"} className="font-bold">
        Harsh Prakash Bharti - 2115000444
      </Link>
      <div className="flex gap-4">
        <Link href={"/"} className="font-semibold">
          Products
        </Link>
        <Sidebar setProducts={setProducts} />
      </div>
    </nav>
  );
};

export default Navbar;
