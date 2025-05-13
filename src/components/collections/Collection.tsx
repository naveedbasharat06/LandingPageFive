// src/pages/Collections/BlockCollection.tsx
import blockcollectionLeftImg from "../../images/bclock-collection-img1.png";
import blockcollectionrightImg from "../../images/block-collection-img2.png";
import goldcollectionImgleft from "../../images/gold-collection-img1.png";
import goldcollectionImgright from "../../images/gold-collection-img2.png";
import velvetcollectionImgleft from "../../images/velvet-collection-img1.png";
import velvetcollectionImgright from "../../images/velvet-collection-img2.png";
import saphirecollectionImgright from "../../images/saphire-collection-img1.png";
import saphirecollectionImgleft from "../../images/saphire-collection-img2.png";
import limitedcollectionImgleft from "../../images/limited-collection-img1.png";
import limitedcollectionImgright from "../../images/limited-collection-img2.png";
import saphirecollectionImgright2 from "../../images/saphire2-collection-img2.png";
import blackcollectionHeroImg from "../../images/blackcollectionHeroImg.png";
import blackcollectionImg from "../../images/blackcollectionImg.png";
import "./Collection.css";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
interface PerfumeProductsType {
  id: number;
  productImg: string;
  multyImg?: string;
  productName: string;
  productsPrice: number;
  originalPrice?: number;
  collection?: string;
  description?: string;
  isNew?: boolean;
}
export const PerfumeProductData: PerfumeProductsType[] = [
  {
    id: 1,
    productImg: blackcollectionHeroImg,
    productName: "Black Collection",
    productsPrice: 2956.0,
    originalPrice: 3200.0,
    collection: "A voyage from the Orient to the Occident",
    description:
      "Embodied in the essence of WIDIAN, The Black Collection unveils a transformative journey from the desert to the west, a sensory odyssey that encapsulates encounters, moments, and cherished memories. With each wondrous fragrance, be enchanted by an initiation trip that surprises and delights, immersing you in an aromatic symphony like no other.",
    multyImg: blackcollectionImg,
  },
  {
    id: 2,
    productImg: blackcollectionHeroImg,
    productName: "GRANADA",
    productsPrice: 2956.0,
    originalPrice: 3100.0,
    collection: "Gold Collection",
    description:
      "Embodied in the essence of WIDIAN, The Black Collection unveils a transformative journey from the desert to the west, a sensory odyssey that encapsulates encounters, moments, and cherished memories. With each wondrous fragrance, be enchanted by an initiation trip that surprises and delights, immersing you in an aromatic symphony like no other..",
    multyImg: blackcollectionImg,
  },
  {
    id: 3,
    productImg: blackcollectionHeroImg,
    productName: "BLACK II",
    productsPrice: 2956.0,
    originalPrice: 3300.0,
    collection: "Sapphire Collection",
    description:
      "Embodied in the essence of WIDIAN, The Black Collection unveils a transformative journey from the desert to the west, a sensory odyssey that encapsulates encounters, moments, and cherished memories. With each wondrous fragrance, be enchanted by an initiation trip that surprises and delights, immersing you in an aromatic symphony like no other.",
    multyImg: blackcollectionImg,
  },
  {
    id: 4,
    productImg: blackcollectionHeroImg,
    productName: "LIWA",
    productsPrice: 2956.0,
    originalPrice: 3230.0,
    collection: "Rose Arabs Collection",
    description:
      "Embodied in the essence of WIDIAN, The Black Collection unveils a transformative journey from the desert to the west, a sensory odyssey that encapsulates encounters, moments, and cherished memories. With each wondrous fragrance, be enchanted by an initiation trip that surprises and delights, immersing you in an aromatic symphony like no other.",
    multyImg: blackcollectionImg,
  },
  {
    id: 5,
    productImg: blackcollectionHeroImg,
    productName: "LIWA",
    productsPrice: 2956.0,
    originalPrice: 3230.0,
    collection: "Rose Arabs Collection",
    description:
      "A Embodied in the essence of WIDIAN, The Black Collection unveils a transformative journey from the desert to the west, a sensory odyssey that encapsulates encounters, moments, and cherished memories. With each wondrous fragrance, be enchanted by an initiation trip that surprises and delights, immersing you in an aromatic symphony like no other.",
    multyImg: blackcollectionImg,
  },
  {
    id: 6,
    productImg: blackcollectionHeroImg,
    productName: "LIWA",
    productsPrice: 2956.0,
    originalPrice: 3230.0,
    collection: "Rose Arabs Collection",
    description:
      "Embodied in the essence of WIDIAN, The Black Collection unveils a transformative journey from the desert to the west, a sensory odyssey that encapsulates encounters, moments, and cherished memories. With each wondrous fragrance, be enchanted by an initiation trip that surprises and delights, immersing you in an aromatic symphony like no other.",
    multyImg: blackcollectionImg,
  },
];

const BlockCollection = () => {
  const navigate = useNavigate();
  // navigate to product detail page
  const navigateCollectionDetail = (product: PerfumeProductsType) => {
    // Convert title to URL-friendly format
    const urlFriendlyTitle = product.productName
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except dashes
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/-+/g, "-"); // Remove consecutive dashes
    navigate(`/collection/${urlFriendlyTitle}`, {
      state: { product: product },
    });
  };
  return (
    <div className="bg-[#FFFFFF] relative">
      {/* Black Collection */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          orientation="start"
          className="mx-auto font-playfair-custom"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Black Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] py-6 xl:py-[50px] gap-4 md:gap-1">
        <div className="flex-1">
          <img
            src={blockcollectionLeftImg}
            alt="black collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pl-[40px] lg:pl-[80px] xl:pl-[110px] 2xl:pl-[160px]">
          <div className="flex justify-end">
            <img
              src={blockcollectionrightImg}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="black collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              BLACK COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              onClick={() => navigateCollectionDetail(PerfumeProductData[0])}
              className="collection_discover_fragrance"
            >
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>

      {/* Gold Collection - Right-aligned text box */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          orientation="start"
          className="mx-auto font-playfair-custom"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Gold Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] pb-6 xl:pb-[50px] gap-4 md:gap-1">
        <div className="flex-1 order-2">
          <img
            src={goldcollectionImgright}
            alt="gold collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pr-[40px] lg:pr-[80px] xl:pr-[110px] 2xl:pr-[160px] order-1">
          <div className="flex justify-start">
            <img
              src={goldcollectionImgleft}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="gold collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0 ml-auto">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              GOLD COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              onClick={() => navigateCollectionDetail(PerfumeProductData[1])}
              className="collection_discover_fragrance"
            >
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>

      {/* Velvet Collection */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          className="w-[90%] mx-auto font-playfair-custom"
          orientation="start"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Velvet Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] pb-6 xl:pb-[50px] gap-4 md:gap-1">
        <div className="flex-1">
          <img
            src={velvetcollectionImgleft}
            alt="velvet collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pl-[40px] lg:pl-[80px] xl:pl-[110px] 2xl:pl-[160px]">
          <div className="flex justify-end">
            <img
              src={velvetcollectionImgright}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="velvet collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              VELVET COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              onClick={() => navigateCollectionDetail(PerfumeProductData[2])}
              className="collection_discover_fragrance"
            >
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>

      {/* Sapphire Collection - Right-aligned text box */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          orientation="start"
          className="mx-auto font-playfair-custom"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Sapphire Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] pb-6 xl:pb-[50px] gap-4 md:gap-1">
        <div className="flex-1 order-2">
          <img
            src={saphirecollectionImgleft}
            alt="sapphire collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pr-[40px] lg:pr-[80px] xl:pr-[110px] 2xl:pr-[160px] order-1">
          <div className="flex justify-start">
            <img
              src={saphirecollectionImgright}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="sapphire collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0 ml-auto">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              SAPPHIRE COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              onClick={() => navigateCollectionDetail(PerfumeProductData[3])}
              className="collection_discover_fragrance"
            >
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>

      {/* Limited Collection */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          orientation="start"
          className="mx-auto font-playfair-custom"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Limited Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] pb-6 xl:pb-[50px] gap-4 md:gap-1">
        <div className="flex-1">
          <img
            src={limitedcollectionImgleft}
            alt="limited collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pl-[40px] lg:pl-[80px] xl:pl-[110px] 2xl:pl-[160px]">
          <div className="flex justify-end">
            <img
              src={limitedcollectionImgright}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="limited collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              LIMITED COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              onClick={() => navigateCollectionDetail(PerfumeProductData[4])}
              className="collection_discover_fragrance"
            >
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>

      {/* Second Sapphire Collection - Right-aligned text box */}
      <div className="md:hidden w-[90%] mx-auto">
        <Divider
          orientation="start"
          className="mx-auto font-playfair-custom"
          style={{ borderColor: "#757B58" }}
          dashed
        >
          Sapphire Collection
        </Divider>
      </div>
      <div className="md:flex grid mx-auto px-6 lg:px-[70px] xl:px-[100px] pb-10 xl:pb-[100px] gap-4 md:gap-1">
        <div className="flex-1 order-2">
          <img
            src={saphirecollectionImgright2}
            alt="sapphire collection"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:py-3 xl:py-6 2xl:py-10 md:pr-[40px] lg:pr-[80px] xl:pr-[110px] 2xl:pr-[160px] order-1">
          <div className="flex justify-start">
            <img
              src={saphirecollectionImgright}
              className="max-w-full xl:max-w-[534px] w-full object-cover"
              alt="sapphire collection details"
            />
          </div>
          <div className="max-w-[534px] pt-4 md:pt-0 ml-auto">
            <h2 className="font-normal text-3xl md:text-4xl leading-[42px] tracking-[0%] text-[#030000] uppercase">
              SAPPHIRE COLLECTION
            </h2>
            <p className="font-normal text-base md:text-lg leading-[25px] tracking-[0%] text-[#3D3C3A] pt-2 lg:pt-[15px] pb-6 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              onClick={() => navigateCollectionDetail(PerfumeProductData[5])}
              className="collection_discover_fragrance"
            >
              DISCOVER FRAGRANCE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockCollection;
