"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useState,useEffect } from "react";
import { FaAppleAlt } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";

const page = () => {
  const [p, setP] = useState(false);
  useEffect(() => {
setP(true)
  }, []);
  if(!p) return null;
  return (
    <>
<div className=" relative left-14 space-y-9 text-center ">
<div className=" border-2 rounded-lg flex flex-col items-center  p-5 border-dotted grnav">
  <h1 className=" font-extrabold uppercase flex items-center ">Clothing Items <GiClothes className=" size-6"/></h1><br />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Men</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col p-5 bg-black text-white gap-4">
                <Link href="/">Men</Link>
                <Link href="/">Women</Link>
                <Link href="/">Baby Collection</Link>
                <Link href="/">Contact</Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Women</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col p-5 bg-black text-white gap-4">
                <Link href="/">Men</Link>
                <Link href="/">Women</Link>
                <Link href="/">Baby Collection</Link>
                <Link href="/">Contact</Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Baby Collection</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col p-5 bg-black text-white gap-4">
                <Link href="/">Men</Link>
                <Link href="/">Women</Link>
                <Link href="/">Baby Collection</Link>
                <Link href="/">Contact</Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className=" border-2 rounded-lg flex flex-col items-center  py-5 grnav">
      <h1 className=" font-extrabold uppercase flex items-center gap-3">Grocery <FaAppleAlt /></h1><br />
        <NavigationMenu >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger >Fruits</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col p-5 bg-black text-white gap-4">
                <Link href="/">Men</Link>
                <Link href="/">Women</Link>
                <Link href="/">Baby Collection</Link>
                <Link href="/">Contact</Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Fast Foods</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col p-5 bg-black text-white gap-4">
                <Link href="/">Men</Link>
                <Link href="/">Women</Link>
                <Link href="/">Baby Collection</Link>
                <Link href="/">Contact</Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Vegetables</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col p-5 bg-black text-white gap-4">
                <Link href="/">Men</Link>
                <Link href="/">Women</Link>
                <Link href="/">Baby Collection</Link>
                <Link href="/">Contact</Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className=" border-2 rounded-lg flex flex-col items-center grnav py-5">
        <h1 className=" font-extrabold uppercase flex items-center gap-3">Electronics <RiComputerLine />
</h1><br />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Mobiles</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col p-5 bg-black text-white gap-4">
                <Link href="/">Men</Link>
                <Link href="/">Women</Link>
                <Link href="/">Baby Collection</Link>
                <Link href="/">Contact</Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Laptop</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col p-5 bg-black text-white gap-4">
                <Link href="/">Men</Link>
                <Link href="/">Women</Link>
                <Link href="/">Baby Collection</Link>
                <Link href="/">Contact</Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Computers</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col p-5 bg-black text-white gap-4">
                <Link href="/">Men</Link>
                <Link href="/">Women</Link>
                <Link href="/">Baby Collection</Link>
                <Link href="/">Contact</Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
</div>
    </>
  );
};

export default page;
