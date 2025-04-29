import React from "react";
import journeyImg from "../../images/image 27.png";
import { motion } from "framer-motion";
function Journey() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 bg-[#F7F3EC]"
    >
      <img src={journeyImg} alt="" className="w-fu h-auto md:h-full" />

      <motion.div
        variants={itemVariants}
        className="max-w-[732px] mx-auto pb-3 md:pb-0 pt-[40px] md:pt-[80px] lg:pt-[140px] xl:pt-[200px] 2xl:pt-[232px] px-5 2xl:px-0"
      >
        <h2 className="font-playfair-custom font-medium text-3xl lg:text-4xl 2xl:text-[50px] leading-[60px] text-[#757C5B]">
          Journey to the Soul of Abu Dhabi
        </h2>
        <p className="text-sm sm:text-base md:text-xl xl:text-[25px] lg:leading-[31px] tracking-[0%] text-[#666666] mt-0 lg:mt-[25px] xl:mt-[40px]">
          WIDIAN's Fragrances Embrace Their Rich Heritage. Experience the
          essence of this vibrant city as our captivating perfumes, meticulously
          crafted amidst the majestic dunes of Abu Dhabi's desert, capture the
          harmonious blend of cultural traditions, grandeur, values, and
          craftsmanship.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Journey;
