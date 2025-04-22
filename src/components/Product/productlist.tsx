import React, { useState } from "react";
import productSlideImg01 from "../../images/imageSlide1.png";
import { LeftOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import complementrysapmleIcon from "../../images/image 3.png";
import giftWrapping from "../../images/image 4.png";
import customerService from "../../images/image 5.png";

function Productlist() {
  const NotesIngredients = [
    {
      Id: 1,
      cartIcon: complementrysapmleIcon,
      title: "Complementary Samples",
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
    <div className="product_list relative  grid grid-cols-1 md:grid-cols-2">
      {/* product slides */}
      <div className="relative ">
        <LeftOutlined className="absolute top-1/2 left-3 z-20" />
        <img
          src={productSlideImg01}
          alt="product slide"
          className="z-20 m"
        />{" "}
        <RightOutlined className="absolute top-1/2 right-3 z-20" />
      </div>
      {/* product slide info */}
      <div className="relative  pt-[174px] pl-[80px] bg-[#FFFFFF]">
        <div className="relative mx-auto items-center">
          <div className=" border-t-2">
            <h3 className="font-century-gothic font-bold text-[#030000] text-base md:text-lg uppercase mb-4">
              NOTES & INGREDIENTS
            </h3>
            <button
              onClick={toggleProductDescription}
              className="w-8 h-8 flex items-center justify-center border border-[#CCCCCC] hover:bg-gray-200 transition-colors"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {NotesIngredients.map((item, index) => (
              <div>
                <img src={item.cartIcon} alt="" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
