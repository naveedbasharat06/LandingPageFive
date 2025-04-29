// src/components/founder/Founder.tsx
import { motion } from "framer-motion";
import ourfounder from "../../images/founder.png";
import cotesionmark from "../../images/cotesionMark.png";
import founderSignature from "../../images/founderSignature.png";

import "./HouseOfWidian.css";
// initial={{ opacity: 0 }}
// whileInView={{ opacity: 1 }}
// transition={{ delay: 0.2, duration: 0.8 }}
// viewport={{ once: true }}
// for text
// initial={{ y: 10 }}
// whileInView={{ y: 0 }}
// transition={{ delay: 0.4, duration: 0.6 }}
// viewport={{ once: true }}

const Founder = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative md:flex"
    >
      <div className=" max-w-[100%] md:w-[24%] h-[150px] md:h-[924px] bg-[#757C5B]"></div>
      <div className="ourfounder_bg relative w-full">
        {/*  content */}
        <div className="relative z-50 mx-auto items-center max-w-[90%] md:max-w-[644px] grid grid-cols-1 gap-3 md:gap-6 lg:gap-8 xl:gap-12 text-center pt-[50px] md:pt-[100px] lg:pt-[170px]">
          <h1 className="font-playfair-custom font-semibold text-[#3D3C3A] text-2xl md:[40px] lg:[50px] xl:text-[60px] 2xl:text-[72px] leading-[120%] tracking-[3%]">
            Our Founder
          </h1>
          <img
            src={cotesionmark}
            className="mx-auto max-w-[80px]"
            alt="cotesion mark"
          />
          <p className="font-nornal leading-[24px] md:leading-[50px] text-base md:text-lg lg:text-2xl xl:text-[30px] 2xl:text-4xl tracking-[-1.5%] text-[#3D3C3A] z-30">
            “Your perfume is your unseen personality; it expresses your mood and
            reveals your secrets.”
          </p>
          <p className="font-normal text-base md:text-lg lg:text-2xl xl:text-[28px] 2xl:text-[32px] leading-[100%] tracking-[3%] text-[#3D3C3A]">
            - Ali Aljaberi
          </p>
          <img src={founderSignature} className="mx-auto" alt="signature" />
        </div>
      </div>
      {/* founder image positioned behind text */}
      <img
        src={ourfounder}
        className="absolute bottom-0 max-w-[50%] 2xl:max-w-[689px] left-[6%] object-cover z-0"
        alt="founder"
      />
    </motion.section>
  );
};

export default Founder;
