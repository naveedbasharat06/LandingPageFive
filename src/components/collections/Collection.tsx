// src/pages/Collections/BlockCollection.tsx
import blockcollectionLeftImg from "../../images/bclock-collection-img1.png";
import blockcollectionrightImg from "../../images/block-collection-img2.png";
import goldcollectionImgleft from "../../images/gold-collection-img1.png";
import goldcollectionImgright from "../../images/gold-collection-img2.png";
import velvetcollectionImgleft from "../../images/velvet-collection-img1.png";
import velvetcollectionImgright from "../../images/velvet-collection-img2.png";
import saphirecollectionImgright from "../../images/saphire-collection-img1.png";
import saphirecollectionImgleft from "../../images/saphire-collection-img2.png";
import limitedcollectionImgleft from "../../images/limited-collection-img1.png";
import limitedcollectionImgright from "../../images/limited-collection-img2.png";
import saphirecollectionImgright2 from "../../images/saphire2-collection-img2.png";

import "./Collection.css";
import { Divider } from "antd";

const BlockCollection = () => {
  return (
    <div className="bg-[#FFFFFF] relative">
      {/* Black Collection */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          orientation="start"
          className="mx-auto font-playfair-custom"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Black Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] py-6 xl:py-[50px] gap-4 md:gap-1">
        <div className="flex-1">
          <img
            src={blockcollectionLeftImg}
            alt="black collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pl-[40px] lg:pl-[80px] xl:pl-[110px] 2xl:pl-[160px]">
          <div className="flex justify-end">
            <img
              src={blockcollectionrightImg}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="black collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              BLACK COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="collection_discover_fragrance">
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>

      {/* Gold Collection - Right-aligned text box */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          orientation="start"
          className="mx-auto font-playfair-custom"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Gold Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] pb-6 xl:pb-[50px] gap-4 md:gap-1">
        <div className="flex-1 order-2">
          <img
            src={goldcollectionImgright}
            alt="gold collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pr-[40px] lg:pr-[80px] xl:pr-[110px] 2xl:pr-[160px] order-1">
          <div className="flex justify-start">
            <img
              src={goldcollectionImgleft}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="gold collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0 ml-auto">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              GOLD COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="collection_discover_fragrance">
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>

      {/* Velvet Collection */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          className="w-[90%] mx-auto font-playfair-custom"
          orientation="start"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Velvet Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] pb-6 xl:pb-[50px] gap-4 md:gap-1">
        <div className="flex-1">
          <img
            src={velvetcollectionImgleft}
            alt="velvet collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pl-[40px] lg:pl-[80px] xl:pl-[110px] 2xl:pl-[160px]">
          <div className="flex justify-end">
            <img
              src={velvetcollectionImgright}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="velvet collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              VELVET COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="collection_discover_fragrance">
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>

      {/* Sapphire Collection - Right-aligned text box */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          orientation="start"
          className="mx-auto font-playfair-custom"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Sapphire Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] pb-6 xl:pb-[50px] gap-4 md:gap-1">
        <div className="flex-1 order-2">
          <img
            src={saphirecollectionImgleft}
            alt="sapphire collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pr-[40px] lg:pr-[80px] xl:pr-[110px] 2xl:pr-[160px] order-1">
          <div className="flex justify-start">
            <img
              src={saphirecollectionImgright}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="sapphire collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0 ml-auto">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              SAPPHIRE COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="collection_discover_fragrance">
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>

      {/* Limited Collection */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          orientation="start"
          className="mx-auto font-playfair-custom"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Limited Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] pb-6 xl:pb-[50px] gap-4 md:gap-1">
        <div className="flex-1">
          <img
            src={limitedcollectionImgleft}
            alt="limited collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pl-[40px] lg:pl-[80px] xl:pl-[110px] 2xl:pl-[160px]">
          <div className="flex justify-end">
            <img
              src={limitedcollectionImgright}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="limited collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              LIMITED COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="collection_discover_fragrance">
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>

      {/* Second Sapphire Collection - Right-aligned text box */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          orientation="start"
          className="mx-auto font-playfair-custom"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Sapphire Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] pb-10 xl:pb-[100px] gap-4 md:gap-1">
        <div className="flex-1 order-2">
          <img
            src={saphirecollectionImgright2}
            alt="sapphire collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pr-[40px] lg:pr-[80px] xl:pr-[110px] 2xl:pr-[160px] order-1">
          <div className="flex justify-start">
            <img
              src={saphirecollectionImgright}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="sapphire collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0 ml-auto">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              SAPPHIRE COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="collection_discover_fragrance">
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockCollection;
