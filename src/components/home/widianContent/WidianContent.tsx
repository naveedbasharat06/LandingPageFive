// import React, { useState } from "react";
// import { Button, Popover, Modal, Input } from "antd";
import "./WidianContent.css";
// import { SendOutlined } from "@ant-design/icons";
import widian_pink_logo from "../../../images/WIDIAN Logo3.png";
import leftLeaf_image from "../../../images/image 14.png";
import rightLeaf_image from "../../../images/Group 10.png";

function WidianContent() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  // const wlcContent = (
  //   <div className="popover-content cursor-pointer" onClick={showModal}>
  //     <div className="flex max-w-[240px] gap-2">
  //       <div className="text-2xl bg-slate-600 text-white w-10 h-10 p-2 rounded-full flex items-center justify-center">
  //         O
  //       </div>
  //       <div className="flex-1">
  //         <div className="flex justify-start gap-2 text-sm mb-1">
  //           <span className="font-semibold">Umer</span>
  //           <span className="text-gray-500">6 days ago</span>
  //         </div>
  //         <p className="text-xs">
  //           Greetings. I have 5 years of experience. Convert design into clean,
  //           valid, semantic html css js code. Layout will be respoinsive for all
  //           devices, optimized. My telegram @nytska_ua I would be happy to
  //           cooperate
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="relative">
      <div className="widian_content">
        {/* popOver review */}
        {/* <div>
          <div className="popover_btn_box_O">
            <Popover
              placement="left"
              content={wlcContent}
              trigger="hover"
              overlayClassName="custom-popover"
            >
              <Button type="text" className="popover-button_O">
                O
              </Button>
            </Popover>
          </div>
        </div> */}
        {/* left leaf image */}
        {/* <span className=" z-0"> */}
        <img
          className="left-leaf-image"
          src={leftLeaf_image}
          alt="leaf decorated imag"
        />
        {/* </span> */}
        {/* widian content */}
        <div className="widian_content_box mx-auto z-20">
          <span>
            <img
              className="mx-auto items-center max-w-[251px]"
              src={widian_pink_logo}
              alt="widian logo"
            />
          </span>
          <h2 className="widian_content_red_title">YOUR ELEGANT MIRAGE</h2>
          <div className="widian_content_list">
            <p className="">
              Where golden sands meet the endless sky, a mirage shimmers—a
              vision of beauty, ever-changing and unexpected. This is Widian, a
              fragrance house that transforms the unseen into the unforgettable.
            </p>
            <p>
              Born in Abu Dhabi and inspired by the Arabic word for “valleys,”
              Widian bridges Arabian heritage with modern sophistication. Each
              fragrance is a journey—rooted in rare oud, amber, and rich spices,
              yet infused with fresh florals and citrus for a scent that evolves
              with every wear. Like a mirage, it is familiar yet surprising,
              becoming part of your essence.{" "}
            </p>
            <p>
              Designed as objects of art, Widian bottles reflect the grandeur of
              Arabian architecture, inspired by the Sheikh Zayed Grand Mosque.
              Their luminous elegance mirrors the harmony of tradition and
              innovation
            </p>
            <p>
              A fragrance without borders, Widian captivates connoisseurs from
              Paris, Roma, Riyadh, Seoul, and many more. It is an invitation to
              step beyond the expected and embrace the extraordinary.{" "}
            </p>
            <p>Your Elegant Mirage Awaits.</p>
          </div>
        </div>
        {/* modal for user comment */}
        {/* <Modal
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
              O
            </Button>
            <p> 2 days ago</p>
          </span>
          <p className="py-4">
            {" "}
            Greetings. I have 5 years of experience. Convert design into clean,
            valid, semantic html css js code. Layout will be respoinsive for all
            devices, optimized. My telegram @nytska_ua I would be happy to
            cooperate
          </p>

          <div className="flex gap-2 items-center">
            <Button type="text" className="popover-button_O">
              O
            </Button>
            <Input
              size="large"
              placeholder="Reply .."
              suffix={
                <SendOutlined
                  className="cursor-pointer"
                  onClick={handleCancel}
                />
              }
            />
          </div>
        </Modal> */}
      </div>
      <span className="">
        <img
          className="right-leaf-image"
          src={rightLeaf_image}
          alt="leaf decorated imag"
        />
      </span>
    </div>
  );
}

export default WidianContent;
