import React, { useState } from "react";
import "./hersectionBanner.css";
import { Button, Input, Modal, Popover } from "antd";
import herosectionPerfume from "../../../images/Group 15.png";
import widianBg_logo from "../../../images/widian_bg_logo.png";
import { SendOutlined } from "@ant-design/icons";

function HomeHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const wlcContent = (
    <div className="popover-content" onClick={showModal}>
      <div className="flex max-w-[240px] gap-2">
        <div className="text-2xl bg-slate-600 text-white w-10 h-10 p-2 rounded-full flex items-center justify-center">
          R
        </div>
        <div className="flex-1">
          <div className="flex justify-start gap-2 text-sm mb-1">
            <span className="font-semibold">Rashid Ali</span>
            <span className="text-gray-500">3 days ago</span>
          </div>
          <p className="text-xs">
            Hi Ali I just reviewed your Figma design for the WIDIAN Conversion
            and I'm confident I can deliver clean, SEO-optimized, and responsive
            HTML code using Tailwind CSS—with no external dependencies and
            minimal JavaScript, as requested.
          </p>
        </div>
      </div>
    </div>
  );

  const anContent = (
    <div className="popover-content" onClick={showModal}>
      <div className="flex max-w-[240px] gap-2">
        <div className="text-2xl bg-green-600 text-white w-10 h-10 p-2 rounded-full flex items-center justify-center">
          M
        </div>
        <div className="flex-1">
          <div className="flex justify-start gap-2 text-sm mb-1">
            <span className="font-semibold">Mohammed</span>
            <span className="text-gray-500">2 days ago</span>
          </div>
          <p className="text-xs">
            The design looks great! Just make sure the popovers are properly
            aligned and visible on hover. The color scheme matches our brand
            perfectly.
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="home_heroBanner ">
      {/* <span> */}
      <div className="popover_btn_box_R">
        <Popover
          placement="right"
          content={wlcContent}
          trigger="hover"
          overlayClassName="custom-popover"
        >
          <Button type="text" className="popover-button_R">
            R
          </Button>
        </Popover>
      </div>

      {/* Left-side Popover */}
      <div className="popover_btn_box_M">
        <Popover
          placement="left"
          content={anContent}
          trigger="hover"
          overlayClassName="custom-popover"
        >
          <Button type="text" className="popover-button_M">
            M
          </Button>
        </Popover>
      </div>
      {/* </span> */}
      <div className="relative flex items-center justify-center pt-[5%]">
        <div className="absolute z-0">
          <img
            src={widianBg_logo}
            alt="widian logo"
            className="max-w-[80%] md:max-w-[760px] lg:max-w-[1101] mx-auto items-center"
          />
        </div>

        {/* Perfume Bottle (centered and above logo) */}
        <div className="relative z-10">
          <img
            src={herosectionPerfume}
            alt="perfume bottle"
            className="max-w-[160px] md:max-w-[200px] lg:max-w-[219px] max-h-[526px] object-contain ml-12"
          />
        </div>
      </div>
      {/* button */}
      <div className="text-center mt-16">
        <button className="discover_collection">Discover Collections</button>
      </div>
      <Modal
        title="Comment"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "40%",
          xxl: "30%",
        }}
      >
        <hr />
        <span className="flex gap-3 mt-2">
          <Button type="text" className="popover-button_R">
            M
          </Button>
          <span className="font-semibold">Mohammed</span>
          <p> 2 days ago</p>
        </span>
        <p className="py-4 text-sm">
          {" "}
          I just reviewed your Figma design for the WIDIAN Conversion and I'm
          confident I can deliver clean, SEO-optimized, and responsive HTML code
          using Tailwind CSS—with no external dependencies and minimal
          JavaScript, as requested. 1 Home Page + 17 Inner Pages Pixel-perfect
          conversion Follows accessibility & SEO best practices (including
          schema markup) Clean, handwritten HTML with JPG/PNG/SVG assets Daily
          updates with priority on the homepage Delivered within 5–7 calendar
          days Here is my
        </p>

        <div className="flex gap-2 items-center">
          <Button type="text" className="popover-button_O">
            M
          </Button>
          <Input
            size="large"
            placeholder="Reply .."
            suffix={
              <SendOutlined className="cursor-pointer" onClick={handleCancel} />
            }
          />
        </div>
      </Modal>
    </div>
  );
}

export default HomeHeroSection;
