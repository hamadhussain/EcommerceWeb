import React from "react";
import Slider from "./Slider/page";
import Text from "./TextContent/page";
import S from "./Slider2/page";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="backf h-screen text-white py-32 px-14 text-center">
        <h1 className=" text-2xl font-extrabold py-10">
          Welcome to Faricon - Your Ultimate Destination for Fashion and Style!
        <hr /></h1>
        <p className="  text-xs font-sans">
          {" "}
          At Faricon, we're dedicated to bringing you the latest trends and
          timeless classics in fashion for both men and women. With a curated
          collection of high-quality clothing, accessories, and lifestyle
          products, we strive to empower you to express your unique style with
          confidence. Discover a diverse range of products, from chic apparel to
          statement accessories, all meticulously selected to cater to your
          fashion needs. Whether you're searching for everyday essentials or
          standout pieces for special occasions, Faricon has you covered. Our
          user-friendly interface and seamless shopping experience make it
          effortless to explore our extensive catalog and find the perfect
          pieces to elevate your wardrobe. Plus, with our commitment to
          exceptional customer service, you can shop with peace of mind knowing
          that your satisfaction is our top priority. Join us on a journey of
          style and self-expression at Faricon, where fashion meets convenience
          and quality meets affordability. Start exploring today and redefine
          your fashion story with Faricon!
        </p><h2 className=" py-6 uppercase"> Explore More</h2>
      </div>
      <Text />
      <S />
      <div className="body"></div>
      <Slider />
      <center>
        {" "}
        <Link href="/Components/Body/Categories">
          <button className=" brbtn bg-blue-700 text-red-400 my-2 p-3 hover:bg-emerald-300 font-bold uppercase">
            Check Out
          </button>{" "}
        </Link>
      </center>
    </>
  );
};

export default Page;
