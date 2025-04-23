import React from "react";
import journeyImg from "../../images/image 27.png";
function Journey() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F7F3EC]">
      <img src={journeyImg} alt="" className="w-fu h-auto md:h-full" />

      <div className="max-w-[732px] mx-auto pb-3 md:pb-0 pt-[40px] md:pt-[80px] lg:pt-[140px] xl:pt-[200px] 2xl:pt-[232px] px-5 2xl:px-0">
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
      </div>
    </div>
  );
}

export default Journey;
