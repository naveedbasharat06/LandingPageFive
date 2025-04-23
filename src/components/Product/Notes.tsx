import React, { useState } from "react";
import productSlideImg01 from "../../images/imageSlide1.png";
import { LeftOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import complementrysapmleIcon from "../../images/image 3.png";
import giftWrapping from "../../images/image 4.png";
import customerService from "../../images/image 5.png";

function ProductNotes() {
  const NotesIngredients = [
    {
      Id: 1,
      cartIcon: complementrysapmleIcon,
      title: `Complementary \n Samples`,
      description: "Free vial with every purchase (T&C apply)",
    },
    {
      Id: 2,
      cartIcon: giftWrapping,
      title: "Gift Wrapping",

      description: "The Perfect Present",
    },
    {
      Id: 3,
      cartIcon: customerService,
      title: "Customer Service",

      description: "Questions? Contact ourteam.",
    },
  ];
  const [showDescription, setShowDescription] = useState(false);
  const toggleProductDescription = () => {
    setShowDescription((prev) => !prev);
  };
  return (
    <div className="product_list relative  grid grid-cols-1 lg:grid-cols-2">
      {/* product slides */}
      <div className="relative">
        <LeftOutlined className="absolute top-1/2 left-3 z-20 font-bold text-[#CCCCCC]" />
        <img
          src={productSlideImg01}
          alt="product slide"
          className="z-20 w-[100%]"
        />{" "}
        <RightOutlined className="absolute top-1/2 right-3 z-20 font-bold text-[#CCCCCC]" />
      </div>
      {/* product slide info */}
      <div className="relative pt-6 md:pt-[50px] lg:pt-[5%] xl:pt-[174px] bg-[#FFFFFF]">
        <div className="relative max-w-[90%] sm:max-w-[82%] mx-auto items-center">
          <div className="flex justify-between border-t border-[#CCCCCC] pb-5 sm:pb-10">
            <h3 className="font-century-gothic font-bold text-[#030000] text-base md:text-lg uppercase  pt-2 sm:pt-6">
              NOTES & INGREDIENTS
            </h3>
            <button
              onClick={toggleProductDescription}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-colors pt-2 sm:pt-6"
              aria-label={
                showDescription ? "Hide description" : "Show description"
              }
            >
              <PlusOutlined
                className={`transition-transform duration-300 ${
                  showDescription ? "rotate-45" : ""
                }`}
              />
            </button>
          </div>
          {/*  */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-0 border border-[#CCCCCC] p-6">
            {NotesIngredients.map((item, index) => (
              <div
                key={index}
                className="mx-auto text-center items-center xl:p-0 "
              >
                <img
                  className="mx-auto items-center"
                  src={item.cartIcon}
                  alt={item.title}
                />
                <h2
                  className={`font-bold text-sm xl:text-base py-1 ${
                    item.Id === 1 ? "px-0 xl:px-7" : ""
                  }  sm:py-4 text-[#030000] `}
                >
                  {item.title}
                </h2>
                <p className="text-sm xl:text-base font-normal text-[#666666] ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductNotes;
