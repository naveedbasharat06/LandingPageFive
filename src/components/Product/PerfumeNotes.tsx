import React from "react";

import top_notesImg from "../../images/image 6.png";
import heartnotesImg from "../../images/image7.png";
import basenotesImg from "../../images/image 8.png";

const PerfumeNotes = [
  {
    Id: 1,
    cartIcon: top_notesImg,
    title: `Top Notes`,
    description: "Bergamot, cardamome",
  },
  {
    Id: 2,
    cartIcon: heartnotesImg,
    title: "Heart Notes",

    description: "Sandalwood, Caramel,Cedarwood",
  },
  {
    Id: 3,
    cartIcon: basenotesImg,
    title: "Base Notes",

    description: "Vanilla, Musky, Amber Dry",
  },
];
function ProfumeNotes() {
  return (
    <div className="lg:max-h-[636px] bg-[#FFFFFF] py-[6%] xl:py-[100px]">
      <div className="mx-auto items-center">
        <h2 className="font-playfair-custom font-medium text-[42px] text-center text-[#757C5B] leading-[50px]">
          Perfume Notes
        </h2>
        <div className="max-w-[1440px] mx-auto items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0">
          {PerfumeNotes.map((item, index) => (
            <div
              key={index}
              className="mx-auto xl:max-w-[300px] text-center items-center p-2 "
            >
              <img
                className="mx-auto items-center max-w-[268px]"
                src={item.cartIcon}
                alt={item.title}
              />
              <div className="px-5 lg:px-12 py-3 lg:py-4">
                <h2
                  className={`font-bold text-sm xl:text-lg py-1  sm:py-4  text-[#030000] `}
                >
                  {item.title}
                </h2>
                <p className="text-sm xl:text-base font-normal text-[#666666] ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfumeNotes;
