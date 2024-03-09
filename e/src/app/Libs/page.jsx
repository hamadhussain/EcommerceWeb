"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import L from "./Layout/page";
import { useEffect, useState } from "react";

const Page = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  const [Div, setDiv] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDiv(true);
    }, 1000);
  });
  return <div>{Div && <L>{children}</L>}</div>;
};

export default Page;
