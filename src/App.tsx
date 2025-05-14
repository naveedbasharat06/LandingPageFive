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
import PageNotFound from "./hooks/PageNotFound";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import CollectionDetail from "./components/collections/CollectionDetail";
import FAQs from "./components/faqs/FAQs";

// import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App mx-auto">
      <Router>
        <ScrollToTop />
        <BackToTop />
        <Navbar />
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomeComponents />} />
            <Route path="/products/:title" element={<ProductDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/collections/block" element={<Collection />} />
            <Route path="/stores" element={<HouseOfWidian />} />
            <Route path="/collection/:title" element={<CollectionDetail />} />
            <Route path="/help-center" element={<FAQs />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <WidianFooter />
      </Router>
    </div>
  );
}

export default App;
