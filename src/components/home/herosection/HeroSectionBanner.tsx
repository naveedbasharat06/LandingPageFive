// import React, { useState } from "react";
import "./hersectionBanner.css";
// import { Button, Input, Modal, Popover } from "antd";
import herosectionPerfume from "../../../images/Group 15.png";
import widianBg_logo from "../../../images/widian_bg_logo.png";
// import { SendOutlined } from "@ant-design/icons";

function HomeHeroSection() {
  return (
    <div className="home_heroBanner ">
      <div className="relative flex items-center justify-center pt-[5%]">
        <div className="absolute z-0">
          <img
            src={widianBg_logo}
            alt="widian logo"
            className="max-w-[80%] md:max-w-[760px] lg:max-w-[1101px] mx-auto items-center"
          />
        </div>

        {/* Perfume Bottle (centered and above logo) */}
        <div className="relative z-10">
          <img
            src={herosectionPerfume}
            alt="perfume bottle"
            className="max-w-[160px] md:max-w-[200px] lg:max-w-[215px] lg:max-h-[530px] object-contain ml-12"
          />
        </div>
      </div>
      {/* button */}
      <div className="text-center mt-16">
        <button className="discover_collection bg-[#FFFFFF]">
          Discover Collections
        </button>
      </div>
    </div>
  );
}

export default HomeHeroSection;
