import React from "react";
import "./HouseOfWidian.css";
import { motion } from "framer-motion";
function HouseOfWidianHero() {
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
      className="houseOfWidian_heroSection"
    >
      <motion.div
        variants={itemVariants}
        className="mx-auto px-5 md:px-0 md:text-right absolute top-[33%] right-[15%] max-w-[702px]"
      >
        <span className="mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-medium font-playfair-custom text-2xl md:text-4xl xl:text-[50px] leading-[60px] text-[#ffffff] tracking-[0%]"
          >
            Desert-born Elegance
          </motion.h2>
          <p className="font-normal text-sm sm:text-base md:text-xl xl:text-[28px] text-[#ffffff] md:leading-[38px] mt-4 lg:mt-[30px] tracking-[0%]">
            In the heart of the blooming desert, where whispers of time echo in
            the wind, WIDIAN's fragrances awaken as an oasis of captivating
            scents, revealing the enigmatic allure and untold secrets nestled
            within their very essence.
          </p>
        </span>
      </motion.div>
    </motion.div>
  );
}
export default HouseOfWidianHero;
