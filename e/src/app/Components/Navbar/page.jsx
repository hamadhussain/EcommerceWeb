'use client'
import React from "react";
import Logo from "./Avatar/page";
import Menu from "./Menu/page";
import Toggle from "../Toggle/page";
import AddCart from "../Body/AddCart/page";
import { IoPerson } from "react-icons/io5";
import { kaushanScript } from "../../fonts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useState,useEffect } from "react";

const Page = () => {
  const [p, setP] = useState(false);
  useEffect(() => {
setP(true)
  }, []);
  if(!p) return null;
  return (
    <div className="  flex justify-between p-3 nav items-center">
      <div className="itemsnav">
          <nav className=" space-x-5">
            <Link href="/">Groceries</Link>
            <Link href="/">Men</Link>
            <Link href="/">Women</Link>
            <Link href="/">Accessories</Link>

          </nav>
      </div>
      <div className="name flex gap-3 items-center ">
        {" "}
        <svg
          className=" text-pink-700 size-6"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.53731 0.826873C7.5125 0.824392 7.4875 0.824392 7.46269 0.826873L3.96269 1.17687C3.85672 1.18747 3.76025 1.24262 3.69736 1.32857L0.699771 5.42528C0.654046 5.48627 0.62647 5.56165 0.625057 5.6434C0.625019 5.6456 0.625 5.64781 0.625 5.65001C0.625 5.65052 0.625001 5.65103 0.625003 5.65153C0.625363 5.74237 0.658021 5.82559 0.712087 5.8903L7.21042 13.7883C7.28165 13.8749 7.38789 13.925 7.5 13.925C7.61211 13.925 7.71835 13.8749 7.78958 13.7883L14.2879 5.89031C14.342 5.8256 14.3746 5.74237 14.375 5.65153C14.375 5.65103 14.375 5.65052 14.375 5.65001C14.375 5.64849 14.375 5.64697 14.375 5.64545C14.3749 5.63963 14.3747 5.63382 14.3744 5.62801C14.37 5.55219 14.3431 5.48242 14.3002 5.42527L11.3026 1.32857C11.2397 1.24262 11.1433 1.18747 11.0373 1.17687L7.53731 0.826873ZM10.925 5.27501V5.25236L10.9223 5.27501H10.925ZM10.9342 5.17498H13.1877L11.2495 2.5261L10.9342 5.17498ZM10.5707 1.88395L8.04432 1.63131L10.1747 5.21034L10.5707 1.88395ZM6.95568 1.63131L4.42931 1.88395L4.82531 5.21034L6.95568 1.63131ZM3.75046 2.5261L1.81226 5.17498H4.0658L3.75046 2.5261ZM1.79416 6.02501L6.75861 12.0587L4.22371 6.0669C4.21787 6.0531 4.21314 6.0391 4.20949 6.02501H1.79416ZM5.15055 6.02501L7.49999 12.1085L9.84943 6.02501H9.78681H5.21319H5.15055ZM10.7905 6.02501C10.7869 6.0391 10.7821 6.0531 10.7763 6.0669L8.24139 12.0587L13.2058 6.02501H10.7905ZM7.5 2.18317L9.34038 5.27501H5.65962L7.5 2.18317Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h1 className={` font-extrabold text-xl text-teal-400 companyname ${kaushanScript.className}`}>FARICON</h1>
      </div>

      <div className="end gap-6 flex items-baseline">
        {/* <Toggle />  */}
        <div className="ContactForm items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/Components/Body/Categories/ContactForm">
                  <IoPerson />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-black">
                <p>Contact</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="addc">
          {" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <AddCart />
              </TooltipTrigger>
              <TooltipContent className="bg-black">
                <p>Basket</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="addc">
          {" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Menu />
              </TooltipTrigger>
              <TooltipContent className="bg-black">
                <p>Menu</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Page;
