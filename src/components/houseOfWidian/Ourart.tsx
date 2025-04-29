import React from "react";
import ourart1 from "../../images/ourArtPerfume1.png";
import ourart2 from "../../images/ourArtperfume2.png";
import ourart3 from "../../images/ourArtPerfume3.png";
import ourart4 from "../../images/ourArtPerfume4.png";
import ourart5 from "../../images/ourArtPerfume5.png";
import ourart6 from "../../images/ourArtPerfume6.png";
import { motion } from "framer-motion";

function Ourart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full overflow-hidden max-w-[1920px] mx-auto pb-9 md:pb-14 lg:pb-[76px]"
    >
      {/* Section Heading */}
      <div className="mx-auto max-w-[890px] sm:px-6 text-center pb-9 md:pb-16 lg:pb-[100px]">
        <h2 className="font-playfair-custom font-medium text-2xl md:text-4xl lg:text-[50px] text-[#757C5B] mb-4 md:mb-6">
          Our Art
        </h2>
        <p className="text-base md:text-lg lg:text-[22px] text-[#666666] leading-relaxed">
          Each fragrance is a tribute to the exquisite lines and majestic domes
          found in the iconic landmarks that grace this city, weaving the
          essence of architectural beauty into every scent, revealing the untold
          secrets of WIDIAN's captivating fragrances.
        </p>
      </div>

      {/* Perfume Layout */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-[100px] ">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row gap-3 md:gap-6 mb-6">
          {/* WIDIAN (Left - 2/3 width) */}
          <div className="w-full relative">
            <img
              src={ourart1}
              alt="WIDIAN"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Romey & William (Right - 1/3 width) */}
          <div className="w-full flex gap-3 md:gap-6">
            <div className="relative">
              <img
                src={ourart2}
                alt="Romey"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative">
              <img
                src={ourart3}
                alt="William"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row gap-3 md:gap-6 mb-6">
          {/* Romey & William (Right - 1/3 width) */}
          <div className="w-full flex gap-3 md:gap-6">
            <div className="relative">
              <img
                src={ourart4}
                alt="Romey"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative">
              <img
                src={ourart5}
                alt="William"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          {/* WIDIAN (Left - 2/3 width) */}
          <div className="w-full relative">
            <img
              src={ourart6}
              alt="WIDIAN"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Ourart;
