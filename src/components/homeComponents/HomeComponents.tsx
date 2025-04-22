import React from "react";
// import Navbar from "../home/navbar/Navbar";
import HomeHeroSection from "../home/herosection/HeroSectionBanner";
import WidianContent from "../home/widianContent/WidianContent";
import NewSummarBrand from "../home/newSummerBrand/NewSummarBrand";
import PerfumeVideo from "../home/perfumeVideo/PerfumeVideo";
import OurProducts from "../home/ourProducts/OurProducts";
import RedWidianBrand from "../home/redWidianBrand/RedWidianBrand";
import ExclusivePrivilege from "../home/exclusivePrivilegeEmail/ExclusivePrivilege";
import WidianFooter from "../home/footer/Footer";
// import WadianFooter
function HomeComponents() {
  return (
    <div>
      {/* <Navbar /> */}
      <HomeHeroSection />
      <WidianContent />
      <NewSummarBrand />
      <PerfumeVideo />
      <OurProducts />
      <RedWidianBrand />
      <ExclusivePrivilege />
      <WidianFooter />
    </div>
  );
}

export default HomeComponents;
