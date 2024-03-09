// import Link from "next/link";
// import React from "react";

// const Page = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-center border-y-2 py-8 md:py-48 border-gray-300">
//       <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start px-8">
//         <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
//           <span className="text-3xl md:text-5xl">O</span>ur <span>L</span>
//           imited <span>O</span>ffer
//         </h1>
//         <p className="py-4 md:py-10 text-center md:text-left">
//           Cool Design and Stylish For Man And Women Into{" "}
//           <b className="text-pink-600">40% Off</b>
//         </p>
//         <Link href="/Components/Body/Categories">
//           <button className="brbtn bg-emerald-200 text-red-400 p-3 hover:bg-emerald-300 font-extrabold uppercase">
//             Shop Now
//           </button>{" "}
//         </Link>
//       </div>
//       <div className="w-full md:w-1/2 imghome bg-cover bg-center"></div>
//     </div>
//   );
// };

// export default Page;




import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center box border-y-2 py-48 border-gray-300 "         data-aos="fade-up"
    data-aos-delay="700"
    data-aos-duration="900">
      <div>
        <h1 className=" text-3xl textlatest"><span className=" text-5xl">O</span>ur <span>L</span>imited <span>O</span>ffer</h1>
        <p className=" py-10">
          Cool Design and Stylish For Man And Women Into{" "}
          <b className=" text-pink-600">40% Off</b>
        </p>
        <Link href="/Components/Body/Categories">
          <button className="brbtn bg-emerald-200 text-red-400 p-3 hover:bg-emerald-300 font-extrabold uppercase ">Shop Now</button>{" "}
        </Link>
      </div>
      <div className="imghome "></div>
    </div>
  );
};

export default Page;


// // import Link from "next/link";
// // import React from "react";

// // const Page = () => {
// //   return (
// //     <div className="flex flex-col md:flex-row justify-center items-center md:items-start border-y-2 py-10 md:py-48 border-gray-300">
// //       <div className="text-center md:text-left md:mr-10">
// //         {/* <h1 className="text-3xl md:text-5xl">
// //           <span className="text-5xl">O</span>ur <span>L</span>imited{" "}
// //           <span>O</span>ffer
// //         </h1> */}
// //             <h1 className=" text-3xl textlatest"><span className=" text-5xl">O</span>ur <span>L</span>imited <span>O</span>ffer</h1>

// //         <p className="py-5 md:py-10">
// //           Cool Design and Stylish For Man And Women Into{" "}
// //           <b className="text-pink-600">40% Off</b>
// //         </p>
// //         <Link href="/Components/Body/Categories">
// //           <button className="brbtn bg-emerald-200 text-red-400 p-3 hover:bg-emerald-300 font-extrabold uppercase">
// //             Shop Now
// //           </button>
// //         </Link>
// //       </div>
// //       <div className="imghome md:w-1/2"></div>
// //     </div>
// //   );
// // };

// // export default Page;
