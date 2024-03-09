import React from "react";
import Slider from "./Slider/page";
import Text from "./TextContent/page";
import S from "./Slider2/page";
import Link from "next/link";
import Logo from "./Front/page";
const Page = () => {
  return (
    <>
<Logo/>
      <Text />
      <S />
      <div className="body box"data-aos="flip-down" ></div>
      <Slider  />
      <center>
        {" "}
        <Link href="/Components/Body/Categories">
          <button className=" brbtn bg-teal-200 text-red-400 my-2 p-3 hover:bg-teal-300 font-bold uppercase">
            Check Out
          </button>{" "}
        </Link>
      </center>
    </>
  );
};

export default Page;
