// 'use client'
// import React from 'react'
// import { motion } from "framer-motion";

// const page = () => {
//   return (
//     <div>
//             <motion.div 
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.25 }}
//       className="backf h-screen text-white py-32 px-14 text-center">
//         <motion.h1         initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}  className=" text-2xl font-extrabold py-10">
//           Welcome to Faricon - Your Ultimate Destination for Fashion and Style!
//         <hr /></motion.h1>
//         <p className="  text-xs font-sans">
//           {" "}
//           At Faricon, we're dedicated to bringing you the latest trends and
//           timeless classics in fashion for both men and women. With a curated
//           collection of high-quality clothing, accessories, and lifestyle
//           products, we strive to empower you to express your unique style with
//           confidence. Discover a diverse range of products, from chic apparel to
//           statement accessories, all meticulously selected to cater to your
//           fashion needs. Whether you're searching for everyday essentials or
//           standout pieces for special occasions, Faricon has you covered. Our
//           user-friendly interface and seamless shopping experience make it
//           effortless to explore our extensive catalog and find the perfect
//           pieces to elevate your wardrobe. Plus, with our commitment to
//           exceptional customer service, you can shop with peace of mind knowing
//           that your satisfaction is our top priority. Join us on a journey of
//           style and self-expression at Faricon, where fashion meets convenience
//           and quality meets affordability. Start exploring today and redefine
//           your fashion story with Faricon!
//         </p><h2 className=" py-6 uppercase"> Explore More</h2>
//       </motion.div>
//     </div>
//   )
// }

// export default page


'use client'
import React from 'react'
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div >
      <motion.div 

        className="backf h-screen text-white py-16 md:py-24 lg:py-32 px-14 md:px-8 lg:px-14 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5,delay:2 }}  
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold py-6 md:py-10">
          Welcome to Faricon - Your Ultimate Destination for Fashion and Style!
          <hr />
        </motion.h1>
        <motion.p   data-aos="fade-up"
     data-aos-anchor-placement="top-center"      initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }} className="text-sm md:text-base lg:text-lg font-sans leading-relaxed">
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
        </motion.p>
        {/* <h2 className="py-6 md:py-8 lg:py-12 uppercase text-lg md:text-xl lg:text-2xl"> Explore More</h2> */}
      </motion.div>
    </div>
  )
}

export default Page;
