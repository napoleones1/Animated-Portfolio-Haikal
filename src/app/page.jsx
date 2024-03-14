"use client"

import Image from "next/image";
import Link from "next/link"
import {motion} from "framer-motion"


const Homepage = () => {
  return ( 
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow</h1>
          {/* desc */}
          <p className="md:text-xl">
            Selamat datang di dunia pribadi saya yang penuh inspirasi dan dedikasi! 
            Saya adalah Muhamad Haikal, seorang Mahasiswa Teknik Informatika, 
            yang merangkum setiap langkah perjalanan dan pencapaian dalam portfolio 
            ini.
          </p>
          {/* bottons */}
          <div className="w-full flex gap-4">
          <Link href="/portfolio">
            <button className="p-4 rounded-lg ring-1 cursor-pointer ring-black bg-black text-white hover:opacity-80">View My Work</button>
          </Link>
          <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 cursor-pointer ring-black hover:opacity-80">Contact Me</button>
          </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
