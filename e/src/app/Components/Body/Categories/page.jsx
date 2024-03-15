// "use client";
import React from "react";
// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductF from "./FormOfProduct/page";
import Nav from "./Navigation/page";
import Btn from "./Button/page";
import Navbar from "./Navbar/page";
import Image from "next/image";

const Page = async () => {
  const data = await getData();

  // console.log(data.products);
  return (
    <>
      <div>
        {" "}
        <div className=" p-12 bg-slate-100">
          <Navbar />
        </div>
        <div className=" py-16 flex flex-col bg-slate-100">
          <Nav />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-20">
    {data.products.map((product) => (
      <div
        key={product.id}
        className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden items-center justify-end"
      >
        <img
          src={product.images[0]}
          className="object-cover h-64 w-full"
          alt=""
        />
        <div className="flex p-3 w-full">
          <div className="flex flex-col w-full">
            <div className="p-4 flex flex-col flex-grow">
              <h1 className="text-xl font-bold mb-2">{product.title}</h1>
              <p className="text-sm mb-2">Category: {product.category}</p>
              <p className="text-sm mb-2">Discount Percentage: {product.discountPercentage}</p>
              <p className="text-sm mb-2">Stock: {product.stock}</p>
              <p className="text-sm mb-2">Brand: {product.brand}</p>
              <p className="text-sm mb-2">Description: {product.description}</p>
              <p className="text-sm">Price: {product.price}</p>
            </div>
          </div>
          <div className="flex items-end">
            <Btn dd={product.title} />
          </div>
        </div>
      </div>
    ))}
  </div>
        </div>

{/* <div className="py-16 flex bg-slate-100">
  <Nav />

</div> */}

        
      </div>
    </>
  );
};

export default Page;

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    console.log("error");
  }

  return res.json();
}
