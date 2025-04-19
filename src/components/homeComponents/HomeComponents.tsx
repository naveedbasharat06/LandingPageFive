import React from "react";
import Navbar from "../home/navbar/Navbar";
import HomeHeroSection from "../home/herosection/HeroSectionBanner";
import WidianContent from "../home/widianContent/WidianContent";
import NewSummarBrand from "../home/newSummerBrand/NewSummarBrand";
import PerfumeVideo from "../home/perfumeVideo/PerfumeVideo";
import OurProducts from "../home/ourProducts/OurProducts";
import RedWidianBrand from "../home/redWidianBrand/RedWidianBrand";
import ExclusivePrivilege from "../home/exclusivePrivilegeEmail/ExclusivePrivilege";

function HomeComponents() {
  return (
    <div>
      <Navbar />
      <HomeHeroSection />
      <WidianContent />
      <NewSummarBrand />
      <PerfumeVideo />
      <OurProducts />
      <RedWidianBrand />
      <ExclusivePrivilege />
    </div>
  );
}

export default HomeComponents;
