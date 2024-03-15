
// Import React
import Image from 'next/image';
import React from 'react';
import { GiClothes } from "react-icons/gi";

// Define the component
const ImageGrid = () => {
  return (
    <div className='px-6  '>
      <div className=' flex justify-center items-center gap-4'>      <h1 className=' text-center font-serif uppercase text-teal-400 font-extrabold text-4xl'><span className=' text-5xl'>C</span>lothing <span className=' text-5xl'>I</span>tems</h1>     
      <span className=' text-pink-400'><GiClothes /></span></div>
<br /><br />
<div className="row  "> 
    <div className="column">
      {/* <Image src="/Assets/Dress.jpeg" width={100} height={100} /> */}
      <Image src="/Assets/Glasses.jpeg" width={100} height={100} />
      <Image src="/Assets/Suit.jpeg" width={100} height={100} />
      <Image src="/Assets/T-shirt.avif" width={100} height={100} />
      {/* <Image src="/Assets/Trouser.jpeg" width={100} height={100} /> */}
      <Image src="/Assets/Watch.jpeg" width={100} height={100} />
      <Image src="/Assets/Dress.jpeg" width={100} height={100} />
    </div>
    <div className="column">
    {/* <Image src="/Assets/Dress.jpeg" width={100} height={100} /> */}
      <Image src="/Assets/Glasses2.jpeg" width={100} height={100} />
      <Image src="/Assets/Suit2.jpeg" width={100} height={100} />
      <Image src="/Assets/T-shirt.avif2.jpeg" width={100} height={100} />
      {/* <Image src="/Assets/Trouser.jpeg" width={100} height={100} /> */}
      <Image src="/Assets/Watch2.jpeg" width={100} height={100} />
      <Image src="/Assets/Dress2.jpeg" width={100} height={100} />
    </div>  
    <div className="column">
    {/* <Image src="/Assets/Dress.jpeg" width={100} height={100} /> */}
      <Image src="/Assets/Glasses3.jpeg" width={100} height={100} />
      <Image src="/Assets/Suit3.jpeg" width={100} height={100} />
      <Image src="/Assets/T-shirt.avif3.jpeg" width={100} height={100} />
      {/* <Image src="/Assets/Trouser.jpeg" width={100} height={100} /> */}
      <Image src="/Assets/Watch3.jpeg" width={100} height={100} />
      <Image src="/Assets/Dress3.jpeg" width={100} height={100} />
    </div>
    <div className="column">
    {/* <Image src="/Assets/Dress.jpeg" width={100} height={100} /> */}
      <Image src="/Assets/Glasses4.jpeg" width={100} height={100} />
      <Image src="/Assets/Suit4.jpeg" width={100} height={100} />
      <Image src="/Assets/T-shirt.avif4.jpeg" width={100} height={100} />
      {/* <Image src="/Assets/Trouser.jpeg" width={100} height={100} /> */}
      <Image src="/Assets/Watch4.jpeg" width={100} height={100} />
      <Image src="/Assets/Dress4.jpeg" width={100} height={100} />
    </div>
  </div></div>
  );
};

// Export the component
export default ImageGrid;




// import React from 'react';

// const HeroImageGrid = () => {
//   return (
// <div className=' p-5 box'>
// <div className="c-heroImageGrid bg-gray-400">
//       <div className="container bg-gray-200">
//         <div className="column"></div>
//         <div className="column">
//           <div className="row"></div>
//           <div className="row">
//             <div>
//               <div className="text ">
//                 <h6>
//                   This Faricon Services<br />
//                   Made Benifical Innovation
//                 </h6>
//                 <p>
//                 Our advanced logistics ensure timely delivery of orders, with options for flexible scheduling to accommodate our customers' busy lifestyles.
//                 </p>
//               </div>
//             </div>
//             <div></div>
//           </div>
//           <div className="row"></div>
//         </div>
//       </div>
//     </div>
// </div>
//   );
// };

// export default HeroImageGrid;













// // // GridLayout.js

// // import React from 'react';

// // const GridLayout = () => {
// //   return (
// //     <div className="grid-container">
// //       <div className="item1 font-mono text-indigo-500">Essentials Accessories & Innovations For LifeStyle</div>
// //       <div className="item2 slides1">
// //         {/* <img src="/image1.jpg" alt="Slide 1" className="w-full h-full object-cover" /> */}
// //       </div>
// //       <div className="item3 slides2">
// //         {/* <img src="/image2.jpg" alt="Slide 2" className="w-full h-full object-cover" /> */}
// //       </div>
// //       <div className="item4 slides3">
// //         {/* <img src="/image3.jpg" alt="Slide 3" className="w-full h-full object-cover" /> */}
// //       </div>
// //       <div className="item5 slides4">
// //         {/* <img src="/image4.jpg" alt="Slide 4" className="w-full h-full object-cover" /> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default GridLayout;













// // import React from "react";

// // const page = () => {
// //   return (
// //     <div className=" p-12">
// // <div className="infinite-carousel">
// //   <ul className="carousel-inner">
// //     <li className=" w-32" style={{ backgroundColor: "#007bff", width: "100%" }}></li>
// //     <li style={{ backgroundColor: "#ff6347", width: "100%" }}></li>
// //     <li style={{ backgroundColor: "#32cd32", width: "100%" }}></li>
// //     <li style={{ backgroundColor: "#007bff", width: "100%" }}></li>
// //     <li style={{ backgroundColor: "#ff6347", width: "100%" }}></li>
// //     <li style={{ backgroundColor: "#32cd32", width: "100%" }}></li>
// //     <li style={{ backgroundColor: "#007bff", width: "100%" }}></li>
// //     <li style={{ backgroundColor: "#ff6347", width: "100%" }}></li>
// //     <li className=" w-32" style={{ backgroundColor: "#32cd32", width: "100%" }}></li>
// //     <li className=" w-32" style={{ backgroundColor: "#007bff", width: "100%" }}></li>
// //     <li className=" w-32" style={{ backgroundColor: "#ff6347", width: "100%" }}></li>
// //     <li className=" w-32" style={{ backgroundColor: "#32cd32", width: "100%" }}></li>
// //   </ul>
// // </div>

// //     </div>
// //   );
// // };

// // export default page;

// // // // pages/index.js

// // // export default function Home() {
// // //     return (
// // //       <div className="infinite-carousel">
// // //         <ul className="carousel-inner">
// // //           <li style={{ backgroundColor: '#007bff' }}></li>
// // //           <li style={{ backgroundColor: '#ff6347' }}></li>
// // //           <li style={{ backgroundColor: '#32cd32' }}></li>
// // //         </ul>
// // //       </div>
// // //     );
// // //   }

// // // import React from 'react'

// // // const page = () => {
// // //   return (
// // //     <div>
// // //       <div class="infinite-carousel">
// // //   <ul class="carousel-inner">
// // //     <li style="background-color: #007bff;"></li>
// // //     <li style="background-color: #ff6347;"></li>
// // //     <li style="background-color: #32cd32;"></li>
// // //     <li style="background-color: #007bff;"></li>
// // //     <li style="background-color: #ff6347;"></li>
// // //     <li style="background-color: #32cd32;"></li>
// // //     <li style="background-color: #007bff;"></li>
// // //     <li style="background-color: #ff6347;"></li>
// // //     <li style="background-color: #32cd32;"></li>
// // //     <li style="background-color: #007bff;"></li>
// // //     <li style="background-color: #ff6347;"></li>
// // //     <li style="background-color: #32cd32;"></li>
// // //   </ul>
// // // </div>
// // //     </div>
// // //   )
// // // }

// // // export default page

// // // import React from "react";

// // // function page() {
// // //   return (
// // //     <div>
// // //       <div>
// // //         <div className="infinite-carousel overflow-hidden text-white h-auto ">
// // //           <div className="carousel-inner  ">
// // //             <div className="slides1 h-screen"></div>

// // //             <div className=' slides1 '>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className=' slides2'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>
// // //                 <div className='  slides1'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className='  slides5'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>
// // //                 <div className=' slides6'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className='  slides2'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>
// // //                 <div className='  slides3'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className='  slides4'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //             <div className=' slides1'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className=' slides2'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>
// // //                 <div className='  slides1'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className='  slides5'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>
// // //                 <div className=' slides6'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className='  slides2'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>
// // //                 <div className='  slides3'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className='  slides4'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //             <div className=' slides1'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className=' slides2'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>
// // //                 <div className='  slides1'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className='  slides5'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>
// // //                 <div className=' slides6'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className='  slides2'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>
// // //                 <div className='  slides3'>
// // //                 Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>

// // //                 <div className='  slides4'>
// // //                     Live Sale!!! More than 30% discounts on every product ---- Limited Time Offer ----
// // //                 </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default page;

// // // // // // 'use client'
// // // // // // import React, { useEffect } from "react";
// // // // // // import {Slider} from "react-animated-slider";
// // // // // // import "react-animated-slider/build/horizontal.css";

// // // // // // const page = () => {
// // // // // //   let slides;
// // // // // //   useEffect(() => {
// // // // // //     slides = [
// // // // // //       { title: "First item", description: "Lorem ipsum" },
// // // // // //       { title: "Second item", description: "Lorem ipsum" },
// // // // // //     ];
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Slider>
// // // // // //         {slides.map((slide, index) => (
// // // // // //           <div key={index}>
// // // // // //             <h2>{slide.title}</h2>
// // // // // //             <div>{slide.description}</div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </Slider>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default page;

// // // // // import React from "react";
// // // // // import { Slider } from "react-animated-slider";
// // // // // import "react-animated-slider/build/horizontal.css";

// // // // // const Page = () => {
// // // // //     const slides = [
// // // // //       { title: "First item", description: "Lorem ipsum" },
// // // // //       { title: "Second item", description: "Lorem ipsum" },
// // // // //     ];
// // // // //   return (
// // // // //     <>
// // // // //       {slides.length > 0 && (
// // // // //         <Slider>
// // // // //           {slides.map((slide, index) => (
// // // // //             <div key={index}>
// // // // //               <h2>{slide.title}</h2>
// // // // //               <div>{slide.description}</div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </Slider>
// // // // //       )}
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Page;
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import {
// // // //   Carousel,
// // // //   CarouselContent,
// // // //   CarouselItem,
// // // //   CarouselNext,
// // // //   CarouselPrevious,
// // // // } from "@/components/ui/carousel";
// // // // import React from "react";
// // // // // import {  } from "../../../../Assets/Sliders/Slider1";
// // // // const page = () => {
// // // //   return (
// // // //     <div className="containerrr">
// // // //       <div className="slide-containerrr flex justify-center p-20">
// // // //       <Carousel
// // // //         opts={{
// // // //           align: "start",
// // // //         }}
// // // //         className="w-full max-w-sm  flex justify-center "
// // // //       >
// // // //         <CarouselContent className="">
// // // //           <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
// // // //             <div className="p-1 slide1 ">
// // // //               <Card>
// // // //                 <CardContent className="flex aspect-square items-center justify-center p-6">
// // // //                   <span className="text-3xl font-semibold  w-max"></span>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </div>
// // // //           </CarouselItem>
// // // //           <CarouselItem className="md:basis-1/2 lg:basis-1/3">
// // // //             <div className="p-1 slide2">
// // // //               <Card>
// // // //                 <CardContent className="flex aspect-square items-center justify-center p-6">
// // // //                   <span className="text-3xl font-semibold"></span>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </div>
// // // //           </CarouselItem>
// // // //           <CarouselItem className="md:basis-1/2 lg:basis-1/3">
// // // //             <div className="p-1 slide3">
// // // //               <Card>
// // // //                 <CardContent className="flex aspect-square items-center justify-center p-6">
// // // //                   <span className="text-3xl font-semibold"></span>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </div>
// // // //           </CarouselItem>
// // // //           <CarouselItem className="md:basis-1/2 lg:basis-1/3">
// // // //             <div className="p-1 slide4">
// // // //               <Card>
// // // //                 <CardContent className="flex aspect-square items-center justify-center p-6">
// // // //                   <span className="text-3xl font-semibold"></span>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </div>
// // // //           </CarouselItem>
// // // //           <CarouselItem className="md:basis-1/2 lg:basis-1/3">
// // // //             <div className="p-1 slide5">
// // // //               <Card>
// // // //                 <CardContent className="flex aspect-square items-center justify-center p-6">
// // // //                   <span className="text-3xl font-semibold"></span>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </div>
// // // //           </CarouselItem>
// // // //           <CarouselItem className="md:basis-1/2 lg:basis-1/3">
// // // //             <div className="p-1 slide6">
// // // //               <Card>
// // // //                 <CardContent className="flex aspect-square items-center justify-center p-6">
// // // //                   <span className="text-3xl font-semibold"></span>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </div>
// // // //           </CarouselItem>
// // // //           <CarouselItem className="md:basis-1/2 lg:basis-1/3">
// // // //             <div className="p-1 slide7">
// // // //               <Card>
// // // //                 <CardContent className="flex aspect-square items-center justify-center p-6">
// // // //                   <span className="text-3xl font-semibold"></span>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </div>
// // // //           </CarouselItem>
// // // //         </CarouselContent>
// // // //         <CarouselPrevious />
// // // //         <CarouselNext />
// // // //       </Carousel>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default page;
