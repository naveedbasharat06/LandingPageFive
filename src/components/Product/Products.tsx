import React from "react";
import { motion } from "framer-motion";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";

import "./ProductDetail.css";
import { Tooltip } from "antd";
import { FormatPrice } from "../../utils/formatePrice";
// import { useNavigate } from "react-router-dom";
interface ProductsListType {
  id: number;
  productImg: string;
  productName: string;
  productsPrice: number;
  originalPrice?: number;
  collection?: string;
  description?: string;
  isNew?: boolean;
}
const ProductListData: ProductsListType[] = [
  {
    id: 1,
    productImg: product1,
    productName: "YASAT",
    productsPrice: 2956.0,
    originalPrice: 3200.0,
    collection: "Velvet Collection",
    description: "An opulent fragrance with notes of amber, oud, and vanilla.",
    isNew: true,
  },
  {
    id: 2,
    productImg: product2,
    productName: "ASWAN",
    productsPrice: 2956.0,
    originalPrice: 3100.0,
    collection: "Gold Collection",
    description: "A vibrant scent with citrus top notes and woody undertones.",
  },
  {
    id: 3,
    productImg: product3,
    productName: "LUBAN",
    productsPrice: 2956.0,
    originalPrice: 3300.0,
    collection: "Sapphire Collection",
    description: "A mysterious blend of dark florals and smoky accords.",
  },
  {
    id: 4,
    productImg: product4,
    productName: "SAHARA",
    productsPrice: 2956.0,
    originalPrice: 3230.0,
    collection: "Rose Arabs Collection",
    description: "A romantic fragrance featuring rare rose and spice notes.",
  },
];

function ProductList() {
  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };
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
  //   const navigate = useNavigate();
  // navigate to product detail page
  //   const handleProductClick = (product: PerfumeProductsType) => {
  //     navigate(`/products/${product.id}`, { state: { product } });
  //   };
  return (
    <div className="our_product bg-[#FCF9F2] pt-10 md:pt-[70px] lg:pt-[100px] xl:pt-[120px] px-4 md:px-0">
      {/* Products Title */}
      <div className="our_products_title pb-5 md:pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-playfair-custom text-4xl md:text-[42px] font-medium leading-[50px] tracking-normal uppercase text-[#757C5B]"
        >
          You May Also Like.
        </motion.h1>
      </div>

      {/* Products Grid border-t-2*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  lg:gap-0 border-b-2 border-r-2 md:border-r-0">
        {ProductListData.map((product, index) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
            whileHover={{ y: -10 }}
            className="relative lg:max-h-[676px] group border-t border-l border-[#CCCCCC]  cursor-pointer"
            // onClick={() => handleProductClick(product)}
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
                className="xl:max-w-[440px] max-h-[575px] object-cover transition-transform duration-500 group-hover:scale-105 mx-auto"
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
              <h2 className="font-playfair-custom text-[#030000] font-normal text-[25px] leading-[31px] uppercase ">
                {product.productName}
              </h2>
              <p className="font-century-gothic text-[#3D3C3A] font-normal text-base mb-2">
                AED {FormatPrice(product.productsPrice)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;
