import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import HomeComponents from "./components/homeComponents/HomeComponents";
import BackToTop from "./hooks/BackToTop";

function App() {
  return (
    <div className="App mx-auto">
      <BackToTop />
      <HomeComponents />
    </div>
  );
}

export default App;
