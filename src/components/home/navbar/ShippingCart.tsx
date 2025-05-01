import React, { forwardRef, useState } from "react";
import { Button, Card, Divider, Drawer, Image, Input, Modal } from "antd";
import {
  CloseOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingOutlined,
  MoneyCollectOutlined,
  CarOutlined,
  EnvironmentOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import "./ShippingCart.css";
import shippingCartImg01 from "../../../images/shippingcartImg.png";
import shippingCartImg02 from "../../../images/shipingcart2.png";
import selectedsample from "../../../images/Frame 181.png";
import visaIcons from "../../../images/visa.png";
import { AnimatePresence, motion } from "framer-motion";
import { FormatPrice } from "../../../utils/formatePrice";

interface ShippingCartProps {
  visible: boolean;
  onClose: () => void;
}

interface ShippingCartItemT {
  id: number;
  productImg: string;
  collectionType: string;
  collectionColor: string;
  initialPrice: number;
  quantity: number;
}
// selected sample type
interface selectedsampleType {
  id: number;
  selectedsampleImg: string;
  name: string;
}
const ShippingCart = forwardRef<HTMLDivElement, ShippingCartProps>(
  ({ visible, onClose }, ref) => {
    // state and functions
    // Add these state variables at the top of your component
    const [selectedShippingMethod, setSelectedShippingMethod] = useState<
      "free" | "standard"
    >("free");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
      "visa" | "cash"
    >("visa");
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [cartItems, setCartItems] = useState<ShippingCartItemT[]>([
      {
        id: 1,
        productImg: shippingCartImg01,
        collectionType: "Black Collection",
        collectionColor: "BLACK IV",
        initialPrice: 2998.0,
        quantity: 1,
      },
      {
        id: 2,
        productImg: shippingCartImg02,
        collectionType: "Velvet Collection",
        collectionColor: "YASAT",
        initialPrice: 2998.0,
        quantity: 1,
      },
    ]);
    const selectedSampleProductData: selectedsampleType[] = [
      {
        id: 1,
        selectedsampleImg: selectedsample,
        name: "london",
      },
      {
        id: 1,
        selectedsampleImg: selectedsample,
        name: "new york",
      },
      {
        id: 1,
        selectedsampleImg: selectedsample,
        name: "liwa",
      },
      {
        id: 1,
        selectedsampleImg: selectedsample,
        name: "baniyas",
      },
    ];
    const showDeleteConfirm = (id: number) => {
      setItemToDelete(id);
      setDeleteModalVisible(true);
    };

    const handleDeleteConfirm = () => {
      if (itemToDelete) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id !== itemToDelete)
        );
      }
      setDeleteModalVisible(false);
      setItemToDelete(null);
    };

    const handleDeleteCancel = () => {
      setDeleteModalVisible(false);
      setItemToDelete(null);
    };
    // show title
    // Calculate total items in cart
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Quantity handlers for specific items
    const increment = (id: number) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
            : item
        )
      );
    };

    const decrement = (id: number) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        )
      );
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.initialPrice * item.quantity,
      0
    );

    // const currentPrice = ShippingCartData.initialPrice * quantity;
    //  animation and transition
    // Animation variants for the delete modal
    const modalVariants = {
      hidden: { scale: 0.9, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 500,
        },
      },
      exit: { scale: 0.9, opacity: 0 },
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
    return (
      <>
        <Drawer
          title={
            <div className="flex justify-between items-center ">
              <span className="flex gap-3 text-[#3D3C3A] px-3">
                <ShoppingOutlined
                  className="text-xl cursor-pointer"
                  // onClick={toggleCart}
                />
                <h3 className="font-century-gothic text-lg font-bold leading-[24px]">
                  {" "}
                  Bags ({totalItems})
                </h3>
              </span>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-black"
              >
                <CloseOutlined className="text-2xl md:text-3xl 2xl:text-4xl text-[#3D3C3A]" />
              </button>
            </div>
          }
          placement="right"
          closable={false}
          onClose={onClose}
          open={visible}
          width={714}
          className="shipping-cart-drawer"
          styles={{
            body: { padding: 0 },
            header: { padding: "16px 24px", borderBottom: "1px solid #f0f0f0" },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              variants={containerVariants}
              className="ShippingCart_main px-3 md:px-6 lg:px-8 py-4 md:py-7 lg:py-10 bg-[#FFFFFF]"
            >
              {/* shiping Cart Items */}
              <div className="grid grid-cols-1 gap-5">
                <div className="flex flex-col gap-4">
                  {cartItems.map((item, index) => (
                    <>
                      <div
                        key={item.id}
                        className="grid grid-cols-3 gap-3 justify-between"
                      >
                        <Image
                          className="h-full"
                          src={item.productImg}
                          alt={item.collectionType}
                        />
                        <div className="flex flex-col justify-between">
                          <div className="flex flex-col gap-1 md:gap-2">
                            <p className="font-normal text-xs md:text-sm lg:text-base sm:leading-[22px] text-[#3D3C3A] ">
                              {item.collectionType}
                            </p>
                            <h3 className="font-bold font-playfair-custom text-sm md:text-base lg:text-[22px] sm:leading-[3%] uppercase text-[#3D3C3A] pt-2">
                              {item.collectionColor}
                            </h3>
                          </div>
                          <motion.div
                            variants={itemVariants}
                            className="flex items-center space-x-4"
                          >
                            <span className="flex font-medium justify-between max-w-[150px] text-center">
                              <button
                                className="w-10 md:w-12 border p-2 border-[#CCCCCC] text-center hover:bg-gray-200 transition-colors"
                                onClick={() => decrement(item.id)}
                                aria-label="Decrease quantity"
                              >
                                <MinusOutlined />
                              </button>
                              <p className="w-10 md:w-12 p-2 border border-[#CCCCCC]">
                                {item.quantity}
                              </p>
                              <button
                                className="w-10 md:w-12 border p-2 border-[#CCCCCC] text-center hover:bg-gray-200 transition-colors"
                                onClick={() => increment(item.id)}
                                aria-label="Increase quantity"
                              >
                                <PlusOutlined />
                              </button>
                            </span>
                          </motion.div>
                        </div>
                        {/* remove & product price */}
                        <div className="flex flex-col justify-between items-end">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="font-bold text-[10px] md:text-xs leading-[18px] text-[#3D3C3A] uppercase cursor-pointer"
                            onClick={() => showDeleteConfirm(item.id)}
                          >
                            <DeleteOutlined className="text-xl text-red-400" />
                          </motion.button>
                          <h3 className="text-xs sm:text-sx md:text-base lg:text-lg leading-[18px] font-bold text-[#3D3C3A] ">
                            AED {FormatPrice(item.initialPrice * item.quantity)}
                          </h3>
                        </div>
                      </div>
                      <Divider
                        className="border-1 border-[#CCCCCC]"
                        style={{ color: "#CCCCCC" }}
                      />
                    </>
                  ))}
                </div>
              </div>
              {/* selected Sample */}
              <div className="">
                <h2 className="text-sm lg:text-base font-bold text-[#3D3C3A] mb-3 md:mb-6 lg:mb-[30px]">
                  Selected Sample
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
                  {selectedSampleProductData.map((sample, index) => (
                    <div
                      className="text-center bg-[#FCF9F2] flex flex-col gap-[5px] pb-4"
                      key={index}
                    >
                      <Image src={sample.selectedsampleImg} />
                      <h3 className="font-playfair-custom text-base uppercase leading-[5%] text-[#3D3C3A]">
                        {sample.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
              {/* coupon code / Discount Coupon */}
              <div className="border border-[#CCCCCC] my-5">
                <h3 className="border-b border-[#CCCCCC] font-bold text-sm lg:text-base leading-[22px] text-[#3D3C3A] p-4">
                  Coupon Code /Discount Coupon
                </h3>
                <div className="md:flex grid-cols-1 gap-5 md:gap-4 p-5 justify-between">
                  <Input
                    placeholder="Enter Promo Code"
                    type="text"
                    required
                    className="rounded-lg p-3 bg-transparent placeholder:text-[#666666] text-black flex-1 w-full"
                  />
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="mt-2 md:mt-0 bg-[#757C5B] text-[#ffffff] px-12 py-6 md:py-6 text-[13px] xl:text-[16px] w-full md:max-w-[30%] rounded-lg border border-white  hover:bg-gray-300 transition-colors duration-300"
                  >
                    Submit
                  </Button>
                </div>
              </div>
              {/* shipping method */}
              <div className="border border-[#CCCCCC] my-5">
                <div className="flex justify-between p-4 border-b border-[#CCCCCC]">
                  {" "}
                  <h3 className=" font-bold text-sm lg:text-base leading-[22px] text-[#3D3C3A] ">
                    Shipping Method
                  </h3>
                  <CarOutlined className="text-2xl" />
                </div>
                {/* free shipping */}
                <div
                  className="flex justify-between items-center p-4 border-b border-[#CCCCCC] cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedShippingMethod("free")}
                >
                  {" "}
                  <div className="flex gap-5">
                    <input
                      type="radio"
                      checked={selectedShippingMethod === "free"}
                      onChange={() => setSelectedShippingMethod("free")}
                      color="green"
                      className="text-2xl w-6 bg-[#757C5B]"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className=" font-bold text-sm lg:text-base leading-[22px] text-[#3D3C3A] ">
                        Free Shipping
                      </h3>
                      <p className="font-normal text-xs md:text-sm leading-[20px]">
                        Expected Delivery 2-4 days
                      </p>
                    </div>
                  </div>
                  <h3 className=" font-bold text-sm lg:text-base leading-[22px] text-[#3D3C3A] ">
                    Free
                  </h3>
                </div>
                {/* standard sshipping */}
                <div
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedShippingMethod("standard")}
                >
                  {" "}
                  <div className="flex gap-5">
                    <input
                      checked={selectedShippingMethod === "standard"}
                      onChange={() => setSelectedShippingMethod("standard")}
                      type="radio"
                      color="green"
                      className="text-2xl w-6 bg-[#757C5B]"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className=" font-bold text-sm lg:text-base leading-[22px] text-[#3D3C3A] ">
                        Standard Shipping
                      </h3>
                      <p className="font-normal text-xs md:text-sm leading-[20px]">
                        Expected Delivery 2-4 days
                      </p>
                    </div>
                  </div>
                  <h3 className=" font-bold text-sm lg:text-base leading-[22px] text-[#3D3C3A] ">
                    AED 25.00
                  </h3>
                </div>
              </div>
              {/* Payment Method */}
              <div className="border border-[#CCCCCC] my-7">
                <div className="flex justify-between items-center p-4 border-b border-[#CCCCCC]">
                  {" "}
                  <h3 className=" font-bold text-sm lg:text-base leading-[22px] text-[#3D3C3A] ">
                    Payment Method
                  </h3>
                  <MoneyCollectOutlined className="text-2xl" />
                </div>
                {/* visa ending */}
                <div
                  className="flex justify-between items-center p-4 border-b border-[#CCCCCC] cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedPaymentMethod("visa")}
                >
                  {" "}
                  <div className="flex justify-center  gap-3">
                    <input
                      type="radio"
                      checked={selectedPaymentMethod === "visa"}
                      onChange={() => setSelectedPaymentMethod("visa")}
                      color="green"
                      className="text-2xl w-6 bg-[#757C5B]"
                    />
                    <img
                      src={visaIcons}
                      alt="visa"
                      className="border-none w-[42px] h-7 mt-2"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className=" font-bold text-sm lg:text-base sm:leading-[22px] text-[#3D3C3A] ">
                        Visa ending in 2378
                      </h3>
                      <p className="font-normal text-xs md:text-sm sm:leading-[20px]">
                        Exp. Date 02/26
                      </p>
                    </div>
                  </div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#757C5B] text-[#ffffff] px-8 py-[18px] text-[9px] xl:text-[12px] max-w-[100%] md:max-w-[77px] rounded-lg border border-white  hover:bg-gray-300 transition-colors duration-300"
                  >
                    CHANGE
                  </Button>
                </div>
                {/* standard sshipping */}
                <div
                  className="flex justify-between p-5 cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedPaymentMethod("cash")}
                >
                  {" "}
                  <div className="flex gap-5">
                    <input
                      type="radio"
                      color="green"
                      checked={selectedPaymentMethod === "cash"}
                      onChange={() => setSelectedPaymentMethod("cash")}
                      className="text-2xl w-6 bg-[#757C5B]"
                    />
                    <div className="flex flex-col p-2 gap-2">
                      <h3 className=" font-bold text-sm lg:text-base leading-[22px] text-[#3D3C3A] ">
                        Cash on Delivery
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Address */}
              <div className="border border-[#CCCCCC] my-5">
                <div className="flex justify-between p-4 border-b border-[#CCCCCC]">
                  {" "}
                  <h3 className=" font-bold text-sm lg:text-base leading-[22px] text-[#3D3C3A] ">
                    Address
                  </h3>
                  <EnvironmentOutlined className="text-2xl" />
                </div>
                {/* free shipping */}
                <div className="flex justify-between p-5">
                  {" "}
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-2">
                      <h3 className=" font-bold text-sm lg:text-base leading-[22px] text-[#3D3C3A] ">
                        Home
                      </h3>
                      <p className="font-normal text-xs md:text-sm leading-[20px]">
                        Box No. 122407, Dubai, 12240....
                      </p>
                    </div>
                  </div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#757C5B] text-[#ffffff] px-8 py-[18px] text-[9px] xl:text-[12px] max-w-[100%] md:max-w-[77px] rounded-lg border border-white  hover:bg-gray-300 transition-colors duration-300"
                  >
                    CHANGE
                  </Button>
                </div>
              </div>
            </motion.div>
            {/*final price/result card */}
            <Card className="font-century-gothic flex flex-col gap-5 mt-4 md:mt-12 lg:mt-28">
              {/*  subtotal with number ofitem */}
              <div className="flex justify-between">
                <p className="text-sm md:text-base text-[#3D3C3A] leading-[22px]">
                  Subtotal ({totalItems} items)
                </p>
                <p className="text-sm md:text-base text-[#3D3C3A] leading-[22px]">
                  AED {FormatPrice(subtotal)}
                </p>
              </div>
              {/* shpping */}
              <div className="flex justify-between py-3">
                <p className="text-sm md:text-base text-[#3D3C3A] leading-[22px]">
                  Shipping
                </p>
                <p className="text-sm md:text-base text-[#3D3C3A] leading-[22px]">
                  Free Shipping
                </p>
              </div>
              {/* bag subtotal */}
              <div className="flex justify-between">
                <p className="text-sm font-bold md:text-lg text-[#3D3C3A] leading-[22px]">
                  Bag Subtotal:
                </p>
                <p className="text-sm font-bold md:text-lg text-[#3D3C3A] leading-[22px]">
                  AED{" "}
                  {totalItems > 0
                    ? FormatPrice(subtotal + 20)
                    : FormatPrice(subtotal)}
                  {/* {FormatPrice(`${totalItems > 0 ? subtotal + 20 : subtotal}`)} */}
                </p>
              </div>
              <Button
                type="primary"
                htmlType="submit"
                className="mt-4 bg-[#757C5B] text-[#ffffff] px-12 py-5 text-[10px] md:text-[16px]  rounded-lg w-full border border-white  hover:bg-gray-300 transition-colors duration-300"
              >
                Checkout
              </Button>
            </Card>
          </AnimatePresence>
        </Drawer>
        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {deleteModalVisible && (
            <Modal
              title={
                <div className="flex items-center gap-2">
                  <ExclamationCircleFilled className="text-yellow-500 text-xl" />
                  <span>Confirm Delete</span>
                </div>
              }
              open={deleteModalVisible}
              onOk={handleDeleteConfirm}
              onCancel={handleDeleteCancel}
              okText="Delete"
              cancelText="Cancel"
              okButtonProps={{ danger: true }}
              centered
              footer={[
                <Button key="back" onClick={handleDeleteCancel}>
                  Cancel
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  danger
                  onClick={handleDeleteConfirm}
                >
                  Delete
                </Button>,
              ]}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
              >
                <p className="text-gray-700">
                  Are you sure you want to remove this item from your cart?
                </p>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </>
    );
  }
);

ShippingCart.displayName = "ShippingCart";

export default ShippingCart;
