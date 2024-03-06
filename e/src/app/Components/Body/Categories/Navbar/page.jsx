import Link from "next/link";
import React from "react";
import { FaAppleAlt } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { GiWatch } from "react-icons/gi";
import { MdOutlineChair } from "react-icons/md";

const page = () => {
  return (
    <div>
      <nav className=" flex items-center  justify-center gap-20 px-24 ">
        <h1 className="font-extrabold text-xl uppercase">Faricon Items</h1>
        <div className=" bg-white flex border-4 py-9 px-28 rounded-xl space-x-10">
          <Link href="/">
            <FaAppleAlt className="hover:text-red-500 text-3xl"/>
          </Link>
          <Link href="/">
            <GiClothes className="hover:text-red-500 text-3xl"/>
          </Link>
          <Link href="/">
            <RiComputerLine className="hover:text-red-500 text-3xl"/>
          </Link>
          <Link href="/">
            <GiWatch className="hover:text-red-500 text-3xl"/>
          </Link>
          <Link href="/">
            <MdOutlineChair className="hover:text-red-500 text-3xl"/>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default page;
