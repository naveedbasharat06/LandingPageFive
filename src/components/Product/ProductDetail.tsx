import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Divider } from "antd";
import { GiftOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { FormatPrice } from "../../utils/formatePrice";
import "./ProductDetail.css";
import { PerfumeProductData } from "../home/ourProducts/OurProducts";
// import Productlist from "./productlist";

interface ProductType {
  id: number;
  productImg: string;
  productName: string;
  productsPrice: number;
  originalPrice?: number;
  collection?: string;
  description?: string;
}

const ProductDetail = () => {
  const { productId } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (location.state?.product) {
      setProduct(location.state.product);
      setIsLoading(false);
    } else {
      const foundProduct = PerfumeProductData.find(
        (p) => p.id === Number(productId)
      );
      setProduct(foundProduct || null);
      setIsLoading(false);
    }
  }, [productId, location.state]);

  // Quantity handlers
  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 10)); // Max 10
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1)); // Min 1
  };

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#FDF9F2]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-[#757C5B] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20 bg-[#FDF9F2]"
      >
        Product not found dd
      </motion.div>
    );
  }

  // Calculate prices based on quantity
  const currentPrice = product.productsPrice * quantity;
  const originalPrice = product.originalPrice
    ? product.originalPrice * quantity
    : undefined;

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="product-detail"
        >
          <div className="mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Product Images */}
              <motion.div
                variants={imageVariants}
                className="border-b-2 max-h-[650px] bg-[#FCF9F2]"
              >
                <div className="relative overflow-hidden rounded-lg shadow-sm">
                  <motion.img
                    src={product.productImg}
                    alt={product.productName}
                    className="w-full h-auto max-h-[600px] object-contain mx-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                variants={itemVariants}
                className="space-y-6 bg-[#FFFFFF] pt-6 md:pt-10 pl-10 md:pl-20 max-h-[650px]"
              >
                <div>
                  <motion.h1
                    variants={itemVariants}
                    className="font-playfair-custom font-medium text-4xl md:text-[50px] text-[#757C5B] uppercase"
                  >
                    {product.productName}
                  </motion.h1>
                  <motion.h2
                    variants={itemVariants}
                    className="font-century-gothic text-lg md:text-[22px] text-[#030000] tracking-0 mt-3"
                  >
                    {product.collection}
                  </motion.h2>
                </div>

                {/* Price */}
                <motion.div
                  variants={itemVariants}
                  className="flex gap-6 items-center mt-10"
                >
                  <span className="font-century-gothic font-normal leading-[42px] text-2xl md:text-4xl text-[#030000]">
                    AED {FormatPrice(currentPrice)}
                  </span>
                  {originalPrice && (
                    <span className="font-century-gothic text-lg text-gray-400 line-through">
                      AED {FormatPrice(originalPrice)}
                    </span>
                  )}
                </motion.div>
                <Divider className="py-2" />

                {/* Size */}
                <span className="flex flex-col gap-2 mt-3">
                  <p className="text-sm md:text-base text-[#030000]">Size</p>
                  <span className="border border-[#030000] text-sm md:text-base p-2 gap-2 max-w-[198px]">
                    50ml extrait de parfum
                  </span>
                </span>

                {/* Quantity Selector */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-4"
                >
                  <span className="flex font-medium justify-between max-w-[150px] text-center">
                    <button
                      className="w-12 border p-2 border-[#CCCCCC] text-center hover:bg-gray-200 transition-colors"
                      onClick={decrement}
                      aria-label="Decrease quantity"
                    >
                      <MinusOutlined />
                    </button>
                    <p className="w-12 p-2 border border-[#CCCCCC]">
                      {quantity}
                    </p>
                    <button
                      className="w-12 border p-2 border-[#CCCCCC] text-center hover:bg-gray-200 transition-colors"
                      onClick={increment}
                      aria-label="Increase quantity"
                    >
                      <PlusOutlined />
                    </button>
                  </span>
                </motion.div>

                {/* Actions */}
                <motion.div variants={itemVariants} className="flex flex-col">
                  <span className="flex gap-2">
                    <GiftOutlined className="max-w-5 text-[#030000]" />
                    <h2 className="text-lg font-bold text-[#030000]">
                      MAKE IT A GIFT
                    </h2>
                  </span>
                  <button
                    // size="large"
                    className="bg-[#030000] text-white px-5 py-3 text-base md:text-lg max-w-[90%] mt-7 md:mt-10 hover:bg-gray-800  rounded-lg font-bold transition delay-150 duration-200 ease-in-out hover:-translate-y-0 hover:scale-105"
                  >
                    ADD TO CART
                  </button>
                </motion.div>

                {/* Description */}
                <motion.div
                  variants={itemVariants}
                  className="pt-8 border-t border-gray-200 max-w-[90%]"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-century-gothic font-bold text-[#030000] text-base md:text-lg uppercase mb-1">
                      PRODUCT DESCRIPTION
                    </h3>
                    <button
                      onClick={toggleDescription}
                      className="w-8 h-8 flex items-center justify-center border border-[#CCCCCC] hover:bg-gray-200 transition-colors"
                      aria-label={
                        showDescription
                          ? "Hide description"
                          : "Show description"
                      }
                    >
                      <PlusOutlined
                        className={`transition-transform duration-300 ${
                          showDescription ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {showDescription && (
                      <motion.p
                        variants={descriptionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="font-century-gothic text-gray-600 overflow-hidden"
                      >
                        {product.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* multiple product */}
      <div>{/* <Productlist /> */}</div>
    </div>
  );
};

export default ProductDetail;
