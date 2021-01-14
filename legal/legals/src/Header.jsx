import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";

function Header() {
  return (
    <div className="container-sm bgheader">
      <div id="e6_36">
        <div id="e7_7">
          <Navbar />
          <HeaderContent />
        </div>
      </div>
    </div>
  );
}

export default Header;
