import { motion } from "framer-motion";
import { useRef } from "react";
import orangedecorated from "../../images/orangeImg.png";
import flowerGrow from "../../images/flowerGrowing.png";
import jarr from "../../images/jarr.png";
import whiteflower from "../../images/whiteflower.png";
export default function EnchantingFusion() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
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
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-[#FCF9F2] mx-auto h-[800px] sm:h-[850px] md:h-[900px] lg:h-[1078px]"
    >
      {/* Background Section */}

      {/* Decorative elements */}

      <motion.img
        src={orangedecorated}
        alt="orange decorate"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-0 left-0 md:left-[28%] max-w-[35%]  lg:max-w-[30%] 2xl:max-w-[609px] z-10"
      />
      <motion.img
        src={jarr}
        alt="orange decorate"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 md:bottom-[6%] left-[0%] max-w-[25%] lg:max-w-[30%] 2xl:max-w-[424px] z-10"
      />
      {/* Content Container */}
      <div
        ref={containerRef}
        className="relative
      max-w-[500px] px-3 md:px-0 mx-auto z-20 pt-[50%] md:pt-[35%] 2xl:pt-[26%]"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          {/* Title */}
          <motion.h1
            variants={slideUp}
            className="font-playfair-custom text-3xl md:text-4xl xl:text-[50px]  text-[#757C5B] xl:mb-[30px] tracking-[0%] leading-[60px] font-medium"
          >
            Enchanting Fusion
          </motion.h1>

          {/* Divider */}

          {/* Description */}
          <motion.div variants={slideUp}>
            <p className="text-base md:text-lg lg:text-[25px] font-serif text-[#666666] mt-4 leading-[31px] tracking-[0%] font-normal opacity-90">
              Purest ingredients. Captivating blends. WIDIAN's perfumes
              harmonize the purest incense, rarest ingredients, rich spices,
              delicate blossoms, and rare woods, meticulously capturing the
              spirit of the region's verdant gardens and rich heritage steeped
              in grandeur, values, and craftsmanship.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div></div>
      <motion.img
        src={flowerGrow}
        alt="orange decorate"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-0 md:top-[6%] right-[0%] max-w-[30%] 2xl:max-w-[423px]"
      />

      <motion.img
        src={whiteflower}
        variants={fadeIn}
        alt="orange decorate"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute right-0 md:right-[10%] bottom-[0%] max-w-[30%] 2xl:max-w-[505px]"
      />
    </motion.div>
  );
}
