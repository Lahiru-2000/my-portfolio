"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex max-w-[90%] sm:max-w-[80%] mx-auto bg-black xl:h-[92vh] xl:justify-between items-center text-white max-xl:flex-col"
    >
      {/* Left Section */}
      <div className="flex sm:flex-col max-sm:flex-col max-sm:justify-center space-y-6 max-xl:h-[92vh] max-xl:justify-center xl:max-w-[60%] max-md:mt-[-20px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-sm:hidden flex xl:flex-col max-sm:flex-wrap max-xl:items-baseline max-xl:gap-4 justify-center"
        >
          <span className="xl:text-[3.5vw] md:text-[40px] lg:text-[45px] text-[33px] font-semibold max-sm:text-white sm:bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hello! I'm
          </span>
          <span className="xl:text-[4.9vw] font-times max-sm:flex-wrap md:text-[50px] lg:text-[55px] text-[43px] font-bold text-white bg-clip-text text-transparent mt-[-20px] ">
            Lahiru Jayarathne
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="sm:hidden"
        >
          <div className=" font-semibold items-baseline gap-4 text-white sm:bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex flex-wrap text-center justify-center">
            <span className="text-[30px] bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent max-xsm:text-[25px]">Hello! I'm </span>
            <span className="text-[40px] font-times  max-xsm:text-[30px] mt-[-10px] leading-tight" >Lahiru Jayarathne</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap pt-7 max-xl:justify-center"
        >
          <span className="flex max-sm:flex-wrap max-sm:text-center font-futura xl:text-[24px] font-semibold max-sm:text-[18px] text-[20px] tracking-wide text-blue-500">
            Software Engineer | Software Developer
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap pt-1 max-xl:justify-center xl:max-w-[90%]"
        >
          <p className="flex max-sm:text-[15px] max-sm:flex-wrap max-sm:text-center font-futura text-lg  leading-relaxed text-[16px] tracking-wide text-gray-300 max-xl:text-center">
            I'm a passionate Software Engineer specializing in web and software
            development. With expertise in Next.js, React, Angular, Spring Boot,
            and .NET Core, I craft high-performing, user-friendly digital
            solutions. Let’s build something amazing together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-6 flex flex-wrap max-xl:justify-center"
        >
          <button className="flex max-sm:text-[18px] items-center gap-4 font-futura xl:text-[1.1vw] text-[20px] tracking-wide px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl">
            <a href="/Lahiru-Jayarathne-Software-Engineer-Intern-Resume.pdf" 
  download="/Lahiru-Jayarathne-Software-Engineer-Intern-Resume.pdf"
  className="flex items-center max-sm:gap-2 sm:gap-4 px-6 py-1 max-sm:text-[18px] font-futura xl:text-[1.1vw] text-[20px] tracking-wide">
            Get Resume
            <Download size={20} className=" hover:scale-105" />
            </a>
          </button>
        </motion.div>
      </div>

      {/* Right Section - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative max-xl:px-5 max-xl:max-w-[450px] max-xl:pt-[50px]"
      >
        <div className="rounded-[50%] overflow-hidden shadow-2xl border-4 border-gray-600 p-2 max-xl:hidden">
          <Image
            src="/assets/lahiru3.jpeg"
            alt="Lahiru Jayarathne"
            width={300}
            height={300}
            className="xl:w-[28vw] rounded-full"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
