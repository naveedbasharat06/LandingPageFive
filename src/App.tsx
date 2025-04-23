import React, { Suspense } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponents from "./components/homeComponents/HomeComponents";
import BackToTop from "./hooks/BackToTop";
import Navbar from "./components/home/navbar/Navbar";
import ProductDetail from "./components/Product/ProductDetail";
import WidianFooter from "./components/home/footer/Footer";
import ScrollToTop from "./hooks/ScrollToTop";
import ContactUs from "./components/contact/ContactUs";
import Collection from "./components/collections/Collection";
import HouseOfWidian from "./components/houseOfWidian/HouseOfWidian";

// import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App mx-auto">
      <Router>
        <ScrollToTop />
        <BackToTop />
        <Navbar />
        <Suspense fallback="loading..">
          <Routes>
            <Route path="/" element={<HomeComponents />} />
            <Route path="/products/:title" element={<ProductDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/collections/block" element={<Collection />} />
            <Route path="/stores" element={<HouseOfWidian />} />
          </Routes>
        </Suspense>
        <WidianFooter />
      </Router>
    </div>
  );
}

export default App;
