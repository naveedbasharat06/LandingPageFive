// src/pages/ContactUs/ContactUs.tsx
import { motion } from "framer-motion";
import { Input, Button } from "antd";
import "./ContactUs.css";
import contactUsheroBannerbg from "../../images/contactUsHeroBanner.png";
import contactLeftImg from "../../images/Contact Left.png";
// import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="contact-us-page bg-white"
    >
      <div>
        <img
          src={contactUsheroBannerbg}
          alt="contact hero banner"
          className="w-full"
        />
      </div>

      {/* contact us page form and left image transform md:translate-y-[-7%] xl:translate-y-[-25%]*/}
      <div className="grid grid-cols-1 xl:grid-cols-2 max-w-[95%] md:max-w-[90%] mx-auto mt-[-15%]  xl:mt-[-13%]">
        {/* contact left image - full width on <1280px */}
        <div className="w-full h-[40%] xl:h-auto xl:w-auto">
          <img
            src={contactLeftImg}
            alt="contact left"
            className="w-full h-auto object-cover xl:max-h-[964px]"
          />
        </div>

        {/* contact right form */}
        <div className="bg-[#EFECE2] pt-10 lg:pt-[100px] 2xl:pt-[120px] px-4 pb-4 ">
          <div className="mx-auto max-w-[620px] flex flex-col gap-5">
            <p className="font-playfair-custom text-2xl font-medium text-[#030000] leading-[26px]">
              LET'S TALK
            </p>
            <h1 className="font-playfair-custom font-medium leading-[50px] text-[42px] text-[#757C5B]">
              Send us a Message
            </h1>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#666666] mb-2 leading-[22px] tracking-[0%] text-base">
                    Full Name
                  </label>
                  <Input
                    placeholder="Full Name"
                    className="rounded-lg p-4 border-[#CCCCCC] hover:border-[#757B58] focus:border-[#757B58]"
                  />
                </div>
                <div>
                  <label className="block text-[#666666] mb-2 leading-[22px] tracking-[0%] text-base">
                    Last Name
                  </label>
                  <Input
                    placeholder="Last Name"
                    className="rounded-lg p-4 border-[#CCCCCC] hover:border-[#757B58] focus:border-[#757B58]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#666666] mb-2 leading-[22px] tracking-[0%] text-base">
                    Your email address
                  </label>
                  <Input
                    placeholder="Your email address"
                    type="email"
                    className="rounded-lg p-4 border-[#CCCCCC] hover:border-[#757B58] focus:border-[#757B58]"
                  />
                </div>
                <div>
                  <label className="block text-[#666666] mb-2 leading-[22px] tracking-[0%] text-base">
                    Your mobile number
                  </label>
                  <Input
                    placeholder="+92301 1031234"
                    className="rounded-lg p-4 border-[#CCCCCC] hover:border-[#757B58] focus:border-[#757B58]"
                    // addonBefore={"+971"}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#666666] mb-2 leading-[22px] tracking-[0%] text-base">
                  Subject
                </label>
                <Input
                  placeholder="Enter Subject"
                  className="rounded-lg p-4 border-gray-300 hover:border-[#757B58] focus:border-[#757B58]"
                />
              </div>

              <div>
                <label className="block text-[#666666] mb-2 leading-[22px] tracking-[0%] text-base">
                  Message
                </label>
                <Input.TextArea
                  placeholder="Write your message..."
                  rows={5}
                  className="rounded-lg p-3 border-gray-300 hover:border-[#757B58] focus:border-[#757B58]"
                />
              </div>

              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#757C5B] text-white px-8 py-4 h-auto rounded-lg text-base font-normal hover:bg-[#5a6045] border-none w-full md:w-auto leading-[22px]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* contact us footer */}
      <div className="bg-[#FFFFFF] pt-[50px] xl:pt-[100px] pb-[10%] xl:pb-[200px]">
        {/* inter content box */}
        <div className="max-w-[95%] md:max-w-[90%] mx-auto">
          <div className="grid md:flex justify-between items-center gap-6 md:gap-0">
            <div>
              <h1 className="font-playfair-custom font-medium leading-[50px] text-3xl lg:text-[50px] text-[#757C5B] pb-1 lg:pb-3">
                Get in Touch
              </h1>
              <p className="text-[#666666] text-base lg:text-[22px] leading-[28px] max-w-[768px] font-normal">
                Reach out for further inquiries by contacting any of the
                following offices. Looking for out Stores ? Find our stores on
                map, pay us a visit.
              </p>
            </div>
            <div>
              <button className="font-normal md:w-[282px] rounded-xl p-3 text-base xl:text-[20px] text-[#666666] leading-[26px] border border-[#666666]">
                Find Our Stores on map
              </button>
            </div>
          </div>
          {/* office contant */}
          <div className="">
            <h2 className="pt-10 lg:pt-16 pb-6 lg:pb-10 text-[#757C5B] text-2xl font-playfair-display font-medium">
              Corporate Offices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between">
              {/* abu dhabi  */}
              <div>
                <h2 className="text-[#757C5B] font-bold text-lg leading-[18px] uppercase pb-3">
                  ABU DHABI (HQ)
                </h2>
                <ul className="contactUs_footer_navlist">
                  <li>
                    <a href="./abc">WIDIAN Perfumes</a>
                  </li>
                  <li>
                    <a href="./abc">
                      Building, Landmark / Location <br />
                      Dubai, United Arab Emirates
                    </a>
                  </li>
                  <li className="py-5">
                    <a href="./abc">P.O. Box8089s</a>
                  </li>
                </ul>
                <button className="max-w-[142px] text-[#666666] text-base mt-3 rounded-lg border border-[#CCCCCC] p-2 mb-6 xl:mb-0">
                  Get Directions
                </button>
              </div>
              {/* email */}
              <div>
                <h2 className="text-[#757C5B] font-bold text-lg leading-[18px] uppercase pb-3">
                  EMAIL
                </h2>
                <ul className="contactUs_footer_navlist">
                  <li>
                    <a href="./abc">enquiry@widian.com</a>
                  </li>
                  <li>
                    <a href="./abc">(+971) 050 1230009</a>
                  </li>
                </ul>
              </div>
              {/* houses */}
              <div>
                <h2 className="text-[#757C5B] font-bold text-lg leading-[18px] uppercase pb-3">
                  HOURS
                </h2>
                <ul className="contactUs_footer_navlist">
                  <li>
                    <a href="./abc">Sun-Thu: 08.00am–06.00pm</a>
                  </li>
                  <li>
                    <a href="./abc">Weekends: 09.00am–12:30 pm</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
