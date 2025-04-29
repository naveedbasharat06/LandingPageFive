import { motion } from "framer-motion";
import { Input, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import widianLogo from "../../../images/widian_white_logo1.png";
import "./Footer.css";
import VisaLogo from "../../../images/visa.png";
import bubble_logo from "../../../images/Badge1.png";
import paypal from "../../../images/paypal.png";
import apple_pay from "../../../images/apple_pay.png";
import g_pay from "../../../images/g_pay.png";
import chatBtn from "../../../images/Chat-btn.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const WidianFooter = () => {
  const navigate = useNavigate();

  const footerBrand_logo = [
    {
      Id: 1,
      logo: VisaLogo,
      Brandname: "visa",
    },
    {
      Id: 2,
      logo: bubble_logo,
      Brandname: "bubble",
    },
    {
      Id: 3,
      logo: paypal,
      Brandname: "pay pal",
    },
    {
      Id: 4,
      logo: apple_pay,
      Brandname: "apple apy",
    },
    {
      Id: 1,
      logo: g_pay,
      Brandname: "g pay",
    },
  ];

  const navigationLinks = {
    collections: [
      { name: "Block collection", path: "/collections/block" },
      { name: "Gold collection", path: "/collections/gold" },
      { name: "Velvet collection", path: "/collections/velvet" },
      { name: "Sapphire collection", path: "/collections/sapphire" },
      { name: "Rose Arabia collection", path: "/collections/rose-arabia" },
      { name: "Limited collection", path: "/collections/limited" },
    ],
    customerService: [
      { name: "Payment Methods", path: "/payment-methods" },
      { name: "Accessibility Statement", path: "/accessibility" },
      { name: "Stores", path: "/stores" },
      { name: "Help Center", path: "/help-center" },
      { name: "Contact Us", path: "/contact-us" },
    ],
    legal: [
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Shipping Policy", path: "/shipping" },
      { name: "Returns & Returns Policy", path: "/returns" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "Disclaimer", path: "/disclaimer" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleNavigation = (path: any) => {
    navigate(path);
  };

  return (
    <footer className="wadian_footer_main bg-[#757B58] text-white pt-10  md:pt-20 md:pb-[50px] lg:max-h-[492px]">
      <div className="mx-auto px-6 xl:px-8">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-8"
        >
          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-12"
            >
              <img
                src={widianLogo}
                alt="widian logo"
                className="xl:max-w-[250px] lg:max-w-[200px] mb-6 sm:mb-16"
              />
              <h3 className="text-base xl:text-lg font-bold uppercase tracking-[0%] leading-[26px] text-[#FFFFFF] ">
                GET SOCIAL
              </h3>
            </motion.div>
            <ul className="space-y-3 mt-[-10px]">
              <li>
                <a
                  href="./#"
                  className="flex text-[14px] xl:text-[16px] leading-[22px] font-normal tracking-[0%] items-center text-[#FFFFFF] hover:text-gray-300 transition-colors duration-300"
                >
                  Instagram
                  <ArrowRightOutlined className=" ml-2" />
                </a>
              </li>
              <li>
                <a
                  href="./#"
                  className="flex  text-[14px] xl:text-[16px] leading-[22px] font-normal tracking-[0%] items-center text-white hover:text-gray-300 transition-colors duration-300"
                >
                  LinkedIn
                  <ArrowRightOutlined className=" ml-2" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Collections */}
          <motion.div variants={itemVariants} className="mb-6">
            <h3 className="text-base xl:text-lg font-bold uppercase tracking-[0%] leading-[26px] text-[#FFFFFF] mb-[22px]">
              COLLECTIONS
            </h3>
            <ul className="space-y-3 sm:space-y-5">
              {navigationLinks.collections.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.path);
                    }}
                    className="text-[14px] xl:text-[16px] leading-[22px] font-normal tracking-[0%] text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants} className="mb-6">
            <h3 className="text-base xl:text-lg font-bold uppercase tracking-[0%] leading-[26px] text-[#FFFFFF] mb-6">
              CUSTOMER SERVICE
            </h3>
            <ul className="space-y-3 sm:space-y-5">
              {navigationLinks.customerService.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.path);
                    }}
                    className="text-[16px] leading-[22px] font-normal tracking-[0%] text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants} className="mb-6">
            <h3 className="text-base xl:text-lg font-bold uppercase tracking-[0%] leading-[26px] text-[#FFFFFF] mb-6">
              LEGAL
            </h3>
            <ul className="space-y-3 sm:space-y-5">
              {navigationLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.path);
                    }}
                    className=" text-[14px] xl:text-[16px] leading-[22px] font-normal tracking-[0%] text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-1 "
          >
            <h3 className="text-base xl:text-lg font-bold uppercase tracking-[0%] leading-[26px] text-[#FFFFFF] mb-4 sm:mb-6">
              SIGN UP
            </h3>
            <p className=" text-[14px] xl:text-[16px] mb-5 leading-[22px] font-normal tracking-[0%]mb-4">
              To our newsletter
            </p>
            <form className="mb-6">
              <div className="flex flex-col gap-6">
                <Input
                  placeholder="E-mail"
                  type="email"
                  required
                  className="rounded-xl p-2 bg-transparent text-white flex-1"
                />
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[#FFFFFF] text-[#666666] p-5  text-[13px] xl:text-[16px] md:max-w-[40%] rounded-xl border border-white  hover:bg-gray-300 transition-colors duration-300"
                >
                  Subscribe
                </Button>
              </div>
            </form>
            <p className=" text-[14px] xl:text-base leading-[22px] font-normal tracking-[0%] md:mt-10">
              By clicking subscribe, you are accepting our Terms and Conditions
              and Privacy Policy. You can unsubscribe at anytime.
            </p>
          </motion.div>
        </motion.div>
        <ul className="flex gap-3 mx-auto items-center sm:ml-[20%]">
          {footerBrand_logo.map((logo, index) => (
            <li key={index}>
              <a href="./abc">
                <img
                  className="hover:-translate-y-1 duration-150 delay-100"
                  src={logo.logo}
                  alt={logo.Brandname}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <img
        className="absolute transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 max-w-12 bottom-6 right-6 cursor-pointer"
        src={chatBtn}
        alt="chat btn"
      />
    </footer>
  );
};
export default WidianFooter;
