import React, { useState } from "react";
import "./Navbar.css";
import widian_logo from "../../../images/widian_logo.png";
import { Input, Select } from "antd";
import {
  SearchOutlined,
  ShoppingOutlined,
  // UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ShippingCart from "./ShippingCart"; // Import the new component
import AuthDropdown from "../../auth/authDropdown";
// import { FaBeer } from "react-icons/fa";

// const { Option } = Select;

const countries = [
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "Palestine", code: "ps" },
  { name: "Canada", code: "ca" },
  { name: "Germany", code: "de" },
  { name: "France", code: "fr" },
  { name: "Pakistan", code: "pk" },
  { name: "India", code: "in" },
  { name: "Japan", code: "jp" },
  { name: "China", code: "cn" },
  { name: "Brazil", code: "br" },
];

const countryOptions = countries.map((country) => ({
  label: (
    <span className="flex items-center gap-2">
      {country.code.toUpperCase()}
      <img
        src={`https://flagcdn.com/16x12/${country.code}.png`}
        alt={country.name}
        width={16}
        height={12}
      />
    </span>
  ),
  value: country.code,
}));

function Navbar() {
  const [cartVisible, setCartVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const user = localStorage.getItem("currentUser");
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    window.location.reload();
  };
  const handleChange = (value: string) => {
    console.log("Selected country code:", value);
  };
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  const navigate = useNavigate();
  return (
    <div>
      {/* top nav text */}
      <div className="navbar_top_text">
        <h4>
          Choose your Complimentary Gift Wrapping and Sample with Each Order.
        </h4>
      </div>

      {/* main navbar */}
      <div className="navbar_section">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:py-6 md:px-10">
          {/* left side - country select */}
          <div className="language_region_selection order-3 md:order-none">
            <span className="flex items-center gap-3 md:gap-0">
              <GlobalOutlined className="text-xl text-[#030000]" />
              <Select
                // placeholder="Select a country"
                onChange={handleChange}
                options={countryOptions}
                style={{ width: 90 }}
                defaultValue={countryOptions[2]?.value}
                // defaultValue="ps"
                variant="borderless"
                optionLabelProp="label"
              />
              <Select
                // placeholder="Select a country"
                onChange={handleChange}
                options={countryOptions}
                style={{ width: 90 }}
                defaultValue={countryOptions[6]?.value}
                // defaultValue="ps"
                variant="borderless"
                optionLabelProp="label"
              />
            </span>
          </div>

          {/* center - logo */}
          <div className="nav_widian_logo py-2 order-1 md:order-none">
            <img
              src={widian_logo}
              onClick={() => navigate("/")}
              alt="widian logo"
              className="max-w-[200px] md:max-w-[290px] max-h-[48px] md:max-h-[58px] cursor-pointer"
            />
          </div>

          {/* right - icons */}
          <div className="navigation_search flex items-center order-2 md:order-none gap-4">
            <Input
              prefix={
                <SearchOutlined
                  style={{
                    fontSize: "18px",
                  }}
                />
              }
              variant="borderless"
              size="small"
              placeholder="Search"
              className="text-[#030000] placeholder:text-black"
            />

            {/* <i className="fa fa-shopping-bag" /> */}
            <ShoppingOutlined
              className="text-xl text-[#030000] cursor-pointer"
              onClick={toggleCart}
            />
            {/* <UserOutlined className="text-xl text-[#030000] cursor-pointer" /> */}
            {/* // Replace the UserOutlined icon with: */}
            <AuthDropdown
              isAuthenticated={!!currentUser}
              user={currentUser}
              onLogout={handleLogout}
            />
            {/* <i className="fa fa-user" /> */}
          </div>

          {/* Shipping Cart Drawer */}
          <ShippingCart visible={cartVisible} onClose={toggleCart} />
        </div>

        {/* bottom navigation */}
        <div className="mx-auto text-center justify-between grid grid-cols-2 max-w-[756px] md:flex gap-4 md:gap-12 pt-3 px-4  md:px-auto">
          <Link to={"/collections/block"} className="navbar_links">
            WIDIAN LUXURY
          </Link>
          <Link to={"/collections/block"} className="navbar_links">
            WIDIAN PRESTIGE
          </Link>
          <Link to={"/collections/block"} className="navbar_links">
            Shop by Emotion
          </Link>
          <Link to={"/stores"} className="navbar_links">
            HOUSE OF WIDIAN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
