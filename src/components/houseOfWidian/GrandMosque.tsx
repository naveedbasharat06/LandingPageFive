import React from "react";

import grandMosque from "../../images/image 28.png";
function GrandMosque() {
  return (
    <div className="h-[500px] lg:h-[750px] relative">
      <div className="max-w-[90%] md:max-w-[70%] 2xl:max-w-[50%] px-10 2xl:px-[200px] pt-[36%] sm:pt-[6%] md:py-[13px] lg:py-[160px] xl:py-[200px] 2xl:py-[247px] relative z-20">
        <h2 className="font-playfair-custom font-medium text-2xl md:text-4xl 2xl:text-[50px] leading-[60px] text-[#757C5B]">
          Grand Mosque Muse
        </h2>
        <p className="text-sm sm:text-base md:text-lg xl:text-[25px] lg:leading-[31px] tracking-[0%] text-[#666666] mt-0 lg:mt-[25px] xl:mt-[40px] md:pr-[25%] 2xl:pr-1">
          Captivated by the iconic Sheikh Zayed Grand Mosque, our perfumes are
          crafted as an homage to its majestic domes and intricate lines,
          infusing each scent with the essence of architectural elegance.
        </p>
      </div>
      <img
        src={grandMosque}
        className="absolute bottom-0 md:right-[5%] lg:right-[10%] 2xl:right-[20%] lg:max-w-[971px] z-10"
        alt="mosque"
      />
    </div>
  );
}

export default GrandMosque;
