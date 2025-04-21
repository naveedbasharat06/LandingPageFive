import React from "react";
import { motion } from "framer-motion";
import product01 from "../../../images/product01.png";
import product02 from "../../../images/products02.png";
import product03 from "../../../images/product03.png";
import product04 from "../../../images/products04.png";
import "./ourProducts.css";
import { Tooltip } from "antd";
import { FormatPrice } from "../../../utils/formatePrice";
interface PerfumeProductsType {
  id: number;
  productImg: string;
  productName: string;
  productsPrice: number;
  isNew?: boolean;
}

const PerfumeProductData: PerfumeProductsType[] = [
  {
    id: 1,
    productImg: product01,
    productName: "BANIYAS",
    productsPrice: 2956.0,
    isNew: true,
  },
  {
    id: 2,
    productImg: product02,
    productName: "GRANADA",
    productsPrice: 2956.0,
  },
  {
    id: 3,
    productImg: product03,
    productName: "BLACK II",
    productsPrice: 2956.0,
  },
  {
    id: 4,
    productImg: product04,
    productName: "LIWA",
    productsPrice: 2956.0,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function OurProducts() {
  return (
    <div className="our_product bg-[#FDF9F2] py-12 px-4 md:px-0">
      {/* Products Title */}
      <div className="our_products_title my-7 md:my-16 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-playfair-custom font-medium text-lg md:text-[22px] uppercase text-[#030000] tracking-widest"
        >
          OUR PRODUCTS
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-century-gothic text-4xl md:text-[42px] mt-4 uppercase text-[#030000]"
        >
          BEST SELLERS
        </motion.h1>
      </div>

      {/* Products Grid border-t-2*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2 lg:gap-0 border-b-2">
        {PerfumeProductData.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
            whileHover={{ y: -10 }}
            className="relative group md:border-t-2 border-l-2"
          >
            {/* New Badge */}
            {product.isNew && (
              <Tooltip
                color="purple"
                title="New product"
                className="absolute cursor-pointer top-4 left-4 text-white rounded-full bg-[#757C5B] px-3 py-1 text-xs font-century-gothic font-bold uppercase tracking-wider z-10"
              >
                New
              </Tooltip>
            )}

            {/* Product Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.productImg}
                alt={product.productName}
                className="max-w-[390px] max-h-[576px] object-cover transition-transform duration-500 group-hover:scale-105 mx-auto md:mb-6"
              />

              {/* Hover Actions */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-20 gap-4"
              >
                <span className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                  <Tooltip title="Quick view">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#757C5B] rounded-full w-12 p-3 shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </motion.button>
                  </Tooltip>
                  <Tooltip title="Add to Cart">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#757C5B] rounded-full w-12 p-3 shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {/*  */}
                    </motion.button>
                  </Tooltip>
                </span>
              </motion.div>
            </div>

            {/* Product Info */}
            <div className="text-center">
              <h2 className="font-playfair-custom text-[#030000] font-normal text-2xl uppercase tracking-wider">
                {product.productName}
              </h2>
              <p className="font-century-gothic text-[#3D3C3A] font-normal text-base  mb-2">
                AED {FormatPrice(product.productsPrice)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurProducts;
