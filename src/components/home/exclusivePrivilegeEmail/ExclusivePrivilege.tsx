import { RightOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import "./ExclusivePrivilege.css";
function ExclusivePrivilege() {
  return (
    <div className="exclusive_previlege">
      <div className="max-w-auto md:max-w-[965px] text-center flex flex-col gap-5 md:gap-12 mx-auto items-center px-2 md:px-8 py-10 md:py-14">
        <h1 className="text-[#757C5B] font-playfair font-medium text-3xl md:text-[50px] leading-[0%] md:pt-3 mb-3 ">
          Exclusive Privilege
        </h1>
        <p className="font-normal text-[lg] md:text-[25px] leading-[32px] text-[#666666]">
          Receive exclusive content and news from The House of Widian and be the
          first to know about product launches and special announcements.
        </p>
        <Input
          placeholder="Email"
          size="large"
          className="max-w-[90%] md:max-w-[606px] border-1 border-gray-600 rounded-full"
          suffix={<RightOutlined />}
        />
        <p className="font-normal text-[#666666] text-sm md:text-lg leading-6 tracking-normal px-8 lg:px-16">
          By clicking subscribe, you are accepting our Terms and Conditions and
          Privacy Policy. You can unsubscribe at anytime.
        </p>
      </div>
    </div>
  );
}

export default ExclusivePrivilege;
