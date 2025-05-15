import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PerfumeProductData } from "./Collection";
import { motion, AnimatePresence } from "framer-motion";
import ProductList from "../Product/Products";

interface ProductType {
  id: number;
  productImg: string;
  multyImg?: string;
  productName: string;
  productsPrice: number;
  originalPrice?: number;
  collection?: string;
  description?: string;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3, ease: "easeOut" },
};

const buttonHover = {
  scale: 1.05,
  backgroundColor: "#5a6149",
  transition: { duration: 0.2 },
};

const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 },
};

function CollectionDetail() {
  const { productId } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  useEffect(() => {
    document.title = `${product?.productName || "Loading"} - Perfume`;
  }, [product?.productName]);

  if (isLoading) {
    return (
      <motion.div
        className="flex justify-center items-center h-[400px] bg-[#FDF9F2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 border-4 border-[#757C5B] border-t-transparent rounded-full"
        />{" "}
      </motion.div>
    );
  }

  if (!product) {
    return (
      <motion.div
        className="flex justify-center h-[400px] items-center  bg-[#FDF9F2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.p
          className="text-2xl text-[#757C5B]"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Product not found
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden bg-[#FCF9F2]"
    >
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative"
      >
        <AnimatePresence>
          {!imageLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#FDF9F2] flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 border-4 border-[#757C5B] border-t-transparent rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.img
          src={product.productImg}
          alt={product.productName}
          className="w-full h-[450px] xl:h-[500px] pt-7 object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </motion.section>

      {/* Product Info Section */}
      <motion.section
        className="bg-[#FCF9F2] py-8 md:py-12 xl:py-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[1100px] mx-auto flex flex-col gap-5 px-4 pb-4 lg:px-0 text-center"
        >
          <motion.h2
            variants={itemAnimation}
            className="font-playfair-custom font-normal text-lg md:text-xl xl:text-2xl leading-[28px] uppercase tracking-wider"
          >
            {product.collection}
          </motion.h2>

          <motion.h1
            variants={itemAnimation}
            className="font-playfair-custom font-medium text-3xl md:text-4xl xl:text-5xl lg:text-[50px] leading-tight text-[#757C5B] "
          >
            {product.productName}
          </motion.h1>

          <motion.p
            variants={itemAnimation}
            className="text-base md:text-xl xl:text-2xl leading-relaxed text-[#666666]  mx-auto"
          >
            {product.description}
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Product Grid Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.8 }}
        className="bg-[#FDF9F2]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-b-2">
          {PerfumeProductData.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="relative group border-t-2 border-l-2 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={hoverScale}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-full">
                <motion.img
                  src={item.multyImg}
                  alt={item.productName}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </div>

              {/* Product Details */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent"
                // initial={{ opacity: 0, y: 20 }}
                // whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="z-30 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg font-medium mb-1">
                    {item.productName}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    AED {item.productsPrice.toFixed(2)}
                  </p>
                </div>

                <motion.button
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  onClick={() => {
                    alert(`Discover ${item.productName}`);
                  }}
                  className="block w-[70%] lg:w-[50%] mx-auto mt-3 px-4 py-2 bg-[#757C5B] text-white text-sm uppercase tracking-wide rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                >
                  Discover Now
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Related Products */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ProductList />
      </motion.section>
    </motion.div>
  );
}

export default CollectionDetail;
