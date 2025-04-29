import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import teammember1 from "../../images/teamMember1.png";
import teammember2 from "../../images/teamMember2.png";
import teammember3 from "../../images/teamMember3.png";
import teammember4 from "../../images/teamMember4.png";
import teammember5 from "../../images/teamMember5.png";
import teammember6 from "../../images/teamMember6.png";
import teammember7 from "../../images/teammmber7.png";

interface Artist {
  id: number;
  name: string;
  image: string;
  description: string;
}

const TeamMember: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const artists: Artist[] = [
    {
      id: 1,
      name: "Jean Claude Astier",
      image: teammember1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      name: "Jordi Fernandez",
      image: teammember2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 3,
      name: "Philippine Courtiere",
      image: teammember3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 4,
      name: "Hamid Merati",
      image: teammember4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 5,
      name: "Nathalie Lorson",
      image: teammember5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 6,
      name: "Randa Hammami",
      image: teammember6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 7,
      name: "Dominique Ropion",
      image: teammember7,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
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
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] py-12 md:py-16 lg:py-[100px]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-10">
        {/* artists card */}
        <motion.div variants={itemVariants}>
          <h2 className="font-playfair-custom font-normal text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[50px] text-[#757C5B] leading-[60px]">
            Our Artists
          </h2>
          <p className="font-normal text-xs md:text-sm  xl:text-lg 2xl:text-[20px] xl:leading-[34px] text-[#3D3C3A] tracking-normal ">
            WIDIAN's perfumes epitomize masterful artistry, where visionary
            perfumers blend boundless creativity and olfactory expertise to
            transform fine ingredients into captivating scented masterpieces,
            awakening the senses to the blooming desert's enigmatic allure.
          </p>
          {/* team members */}
        </motion.div>
        {artists.map((artist) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: artist.id * 0.4 }}
            onMouseEnter={() => setHoveredMember(artist.id)}
            onMouseLeave={() => setHoveredMember(null)}
            className="relative overflow-hidden group cursor-pointer"
          >
            {/* Artist Image */}
            <motion.img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Overlay with Artist Info (shown on hover) */}
            <AnimatePresence>
              {hoveredMember === artist.id && (
                <motion.div
                  variants={itemVariants}
                  className="absolute inset-0 flex flex-col justify-end p-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    exit={{ y: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-[#757C5B] p-5"
                  >
                    <h3 className="font-playfair-custom text-lg font-normal text-[#FFFFFF] mb-[10px] leading-6">
                      {artist.name}
                    </h3>
                    <p className="font-normal text-[13px] leading-[18px] tracking-[0%] text-[#FFFFFF]">
                      {artist.description}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamMember;
