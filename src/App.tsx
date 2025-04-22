import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponents from "./components/homeComponents/HomeComponents";
import BackToTop from "./hooks/BackToTop";
import Navbar from "./components/home/navbar/Navbar";
import ProductDetailPage from "./components/Product/ProductDetail";

// import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App mx-auto">
      <Router>
        <BackToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeComponents />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
