import { MailFilled, WechatOutlined } from "@ant-design/icons";
import React from "react";

function FaqsFooter() {
  return (
    <div className="bg-[#FCF9F2] py-6 md:py-10 2xl:py-[70px] ">
      <div className="max-w-[952px] flex flex-col justify-center gap-2 md:gap-4 lg:gap-6 2xl:gap-10 mx-auto text-center lg:px-0 px-4">
        <h2 className="font-playfair-custom font-normal text-lg md:text-2xl  text-[#030000] uppercase">
          Contact Us
        </h2>
        <h1 className="font-playfair-custom font-medium text-[#757C5B] text-2xl md:text-3xl xl:text-[42px] leading-[40px]">
          Didn't find any solution?
        </h1>
        <p className="text-sm md:text-base xl:text-[22px] text-[#666666] leading-[26px] md:leading-[31px] tracking-[0%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="grid sm:flex justify-center gap-4">
          <button className="bg-[#5a6149] md:w-[250px] font-normal leading-[24px] text-white py-2 md:py-3 px-10 text-base lg:text-lg rounded-full hover:bg-[#4a513d] transition duration-200">
            <WechatOutlined /> &nbsp; Live Chat Now
          </button>
          <button className="bg-[#5a6149] md:w-[250px] font-normal leading-[24px] text-white py-2 md:py-3 px-10 text-base lg:text-lg rounded-full hover:bg-[#4a513d] transition duration-200">
            <MailFilled /> &nbsp; Email Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default FaqsFooter;
