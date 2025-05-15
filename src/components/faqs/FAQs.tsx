import React, { useState } from "react";
import "./FAQs.css";
import { FAQsItem } from "./FAQsData";
import { AnimatePresence, motion } from "framer-motion";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import FaqsFooter from "./FaqsFooter";

function FAQs() {
  // Track active accordion by category and id
  const [activeAccordion, setActiveAccordion] = useState<{
    category: string;
    id: number | null;
  }>({ category: "", id: null });

  const toggleAccordion = (category: string, id: number) => {
    setActiveAccordion((prev) => {
      // Close if clicking the same accordion
      if (prev.category === category && prev.id === id) {
        return { category: "", id: null };
      }
      // Open the new one
      return { category, id };
    });
  };

  // Animation variants
  const accordionVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.6,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.6,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  // Render accordion items for a category
  const renderAccordionItems = (category: keyof typeof FAQsItem) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 auto-rows-min pb-6">
        {FAQsItem[category].map((item) => (
          <div
            key={item.id}
            className="overflow-hidden bg-[#FCF9F2] relative border border-[#F0EEEA] rounded-lg"
          >
            <button
              className="w-full flex justify-between items-center py-3 sm:py-4 xl:py-7 p-3 sm:px-4 lg:px-[22px] hover:bg-[#ece7d6] transition-colors duration-200 focus:outline-none"
              onClick={() => toggleAccordion(category, item.id)}
            >
              <span
                className={`text-xs md:text-sm xl:text-base text-left font-bold leading-[22px] ${
                  activeAccordion.category === category &&
                  activeAccordion.id === item.id
                    ? "text-[#757C5B]"
                    : "text-[#3D3C3A]"
                }`}
              >
                {item.question} {item.id}
              </span>
              <motion.span
                animate={{
                  rotate:
                    activeAccordion.category === category &&
                    activeAccordion.id === item.id
                      ? 180
                      : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-[#757C5B]"
              >
                {activeAccordion.category === category &&
                activeAccordion.id === item.id ? (
                  <DownOutlined className="text-base md:text-lg text-[#3D3C3A]" />
                ) : (
                  <RightOutlined className="text-base md:text-lg text-[#3D3C3A]" />
                )}
              </motion.span>
            </button>

            <AnimatePresence>
              {activeAccordion.category === category &&
                activeAccordion.id === item.id && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={accordionVariants}
                    className="overflow-hidden"
                  >
                    <div className="mx-4 p-4 md:p-5 space-y-4 text-xs md:text-sm text-[#666666] bg-white">
                      {item.answer.map((paragraph, i) => (
                        <p key={i} className="leading-relaxed ">
                          {paragraph}
                        </p>
                      ))}

                      {/* Numbered List */}
                      {item.subtitleList.length > 0 && (
                        <div className="mt-4">
                          <h3 className="font-bold text-[#3D3C3A] mb-2">
                            {item.subtitleNum}
                          </h3>
                          <ol className="list-decimal list-inside space-y-1">
                            {item.subtitleList.map((list, i) => (
                              <li key={i} className="leading-relaxed ">
                                {list}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Bullet List */}
                      {item.subtitleListBullet.length > 0 && (
                        <div className="mt-4">
                          <h3 className="text-[#3D3C3A] font-bold mb-2">
                            {item.subtitleBullet}
                          </h3>
                          <ul className="list-disc list-inside space-y-1">
                            {item.subtitleListBullet.map((list, i) => (
                              <li key={i} className="leading-relaxed">
                                {list}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* FAQs top Hero Heading */}
      <div className="h-[140px] md:h-[200px] lg:h-[228px] bg-[#EFECE2] px-4 2xl:px-0">
        <div className="max-w-[1440px] mx-auto h-full flex flex-col justify-center gap-4 xl:gap-7 ">
          <h1 className="font-playfair-custom font-medium text-2xl md:text-3xl lg:text-4xl text-[#757C5B]">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-row gap-2 md:gap-4 items-start ">
            <h3 className="text-[#757C5B] font-normal text-sm md:text-base">
              Help Center &ensp; <b className="text-[#3D3C3A]">{">"}</b>
            </h3>
            <h3 className="text-[#3D3C3A] font-normal text-sm md:text-base">
              frequently asked questions
            </h3>
          </div>
        </div>
      </div>

      {/* FAQs Content */}
      <div className="max-w-[1440px] mx-auto px-4 2xl:px-0  py-6 md:py-12">
        {/* General FAQs */}
        <div className="mb-12">
          <h2 className="font-playfair-custom font-medium text-[#757C5B] text-xl md:text-2xl lg:text-[28px] py-4 lg:py-[30px]">
            General Questions
          </h2>
          {renderAccordionItems("General")}
        </div>

        {/* Technical FAQs */}
        <div className="mb-12">
          <h2 className="font-playfair-custom font-medium text-[#757C5B] text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
            Technical Questions
          </h2>
          {renderAccordionItems("Technnical")}
        </div>

        {/* Other FAQs */}
        <div>
          <h2 className="font-playfair-custom font-medium text-[#757C5B] text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
            Other Questions
          </h2>
          {renderAccordionItems("Other")}
        </div>
      </div>
      {/* Faqs footer */}
      <FaqsFooter />
    </div>
  );
}

export default FAQs;
