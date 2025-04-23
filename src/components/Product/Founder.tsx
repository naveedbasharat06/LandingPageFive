import React from "react";

import founderPic from "../../images/Copy-of-Jordi 1.png";
function Founder() {
  return (
    <div className="max-h-[575px] bg-[#EFECE2]">
      <div className="flex mx-auto justify-center  sm:justify-between items-center p-3 px-2 md:px-8 lg:px-[130px] xl:px-[200px] max-w-[1440px]">
        <div className="text-center">
          <h3 className="text-[#030000] font-normal text-lg sm:text-2xl md:text-4xl sm:leading-[42px] tracking-normal">
            The perfumer:
          </h3>
          <h2 className="font-playfair-custom text-[#030000] font-medium text-lg sm:text-2xl md:text-4xl sm:leading-[42px] tracking-normal md:mt-3">
            Jordi Fernández
          </h2>
        </div>
        <div>
          <img
            className="max-w-[190px] sm:max-w-[300px] md:max-w-[455px] max-h-[555px] mb-[-10px]"
            src={founderPic}
            alt="Founder"
          />
        </div>
      </div>
    </div>
  );
}

export default Founder;
